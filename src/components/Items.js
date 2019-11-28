import React from 'react';

export default class Items extends React.PureComponent {
  render() {
    return (
      <div>
          {this.props.items.map(item => <div className='list-item' key={item.index}>∙ {item.name}</div>)}
      </div>
    );
  }
}
