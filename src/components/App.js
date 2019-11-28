import React from 'react';
import ReactDOM from 'react-dom';

import Tab from './Tab';
import Input from './Input';
import Items from './Items';
import data from '../data';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAsync: false,
      text: '',
      items: [...new Array(2500)].map((_, i) => {
        let dataIndex = Math.floor(Math.random() * 23) + 1;
        return {index: i, name: data[dataIndex], value: i};
      })
    }
  }

  syncUpdate(fn, cb) {
    ReactDOM.flushSync(() => {
      this.setState(fn, cb);
    });
  }

  tick() {
    this.setState(
      state => ({
        count: state.count + 1,
        items: state.items.map((item, i) => {
          let dataIndex = Math.floor(Math.random() * 23) + 1;
          return Object.assign({}, item, {index: item.index + 1, name: data[dataIndex], value: item.value + 1});
        })
      }),
      () => {
        this.timerId = setTimeout(() => {
          this.state.isAsync ? this.tick() : ReactDOM.flushSync(() => this.tick());
        }, 150);
      }
    );
  }

  componentDidMount() {
    this.tick();
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  }

  render() {
    const {isAsync, text, items} = this.state;
    return (
      <main>
        <h1>App Log System</h1>
        <Tab
          isAsync={isAsync}
          onClick={value => this.setState(() => ({isAsync: value, text: ''}))}
        />
        <h3>Search for a log</h3>
        <Input value={text} onChange={value => this.syncUpdate(() => ({text: value}))} />
        <h3>Incoming logs (being rendered as {isAsync ? 'low' : 'sync'} priority)</h3>
        <Items items={items} />
      </main>
    );
  }
}
