(this["webpackJsonpreact-timeslicing"]=this["webpackJsonpreact-timeslicing"]||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),o=t(1),c=t.n(o),r=(t(14),t(8)),s=t(2),u=t(3),l=t(5),m=t(4),p=t(6),d=function(e){var n=e.isAsync,t=e.onClick;return i.a.createElement("div",{className:"tab"},i.a.createElement("div",{className:"content ".concat(!n&&"active"),onClick:function(){return t(!1)}},i.a.createElement("span",null,"Sync mode")),i.a.createElement("div",{className:"content ".concat(n&&"active"),onClick:function(){return t(!0)}},i.a.createElement("span",null,"Async mode")))},f=function(e){var n=e.value,t=e.onChange;return i.a.createElement("section",null,i.a.createElement("input",{type:"text",value:n,onChange:function(e){return t(e.target.value)},placeholder:"Search"}),n&&i.a.createElement("p",null,"Expensive calculation for search term: ",n))},v=function(e){function n(){return Object(s.a)(this,n),Object(l.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,this.props.items.map((function(e){return i.a.createElement("div",{className:"list-item",key:e.index},"\u2219 ",e.name)})))}}]),n}(i.a.PureComponent),h=['[3607][1538975317592][main][info]["Booting Postman 6.4.1, darwin-18.0.0 on x64"]','[3607][1538975317597][main][info]["EventBus~initialize - Success"]','[3607][1538975317600][main][info]["UpdateHandler~init - Success"]','[3607][1538975317602][main][info]["RuntimeExecutionService~initialized: Success"]','[3607][1538975317608][main][info]["ProtocolHandler~init - Success with status: true]"]','[3607][1538975317940][main][info]["Bootstrap-models~bootstrap - Success"]','[3607][1538975319503][main][info]["Main~AppEvents - Received booted event for process shared"]','[3607][1538975321256][main][info]["UpdateHandler~app-update-events]','[3607][1538975321258][main][info]["Main~AppEvents - Received booted event for process requester"]','[3607][1538975321260][main][info]["@postman-app/updater: version Updated","6.3.0","6.4.1"]','[3607][1538975321260][main][info]["UpdateHandler~app-update-events - Received event",]','[3607][1538975485324][main][info]["Main~AppEvents - Received booted event for process shared"]','[3607][1538975486833][main][info]["UpdateHandler~app-update-events - Received event"]','[3607][1538975486835][main][info]["Main~AppEvents - Received booted event for process requester"]','[7113][1538992969140][main][info]["Booting Postman 6.4.1, darwin-18.0.0 on x64"]','[7113][1538992969144][main][info]["EventBus~initialize - Success"]','[7113][1538992969147][main][info]["UpdateHandler~init - Success"]','[7113][1538992969149][main][info]["RuntimeExecutionService~initialized: Success"]','[7113][1538992969152][main][info]["ProtocolHandler~init - Success with status: true]"]','[7113][1538992969676][main][info]["Bootstrap-models~bootstrap - Success"]','[7113][1538992971500][main][info]["Main~AppEvents - Received booted event for process shared"]','[7113][1538992973794][main][info]["UpdateHandler~app-update-events - Received event"]','[7113][1538992973796][main][info]["Main~AppEvents - Received booted event for process requester"]'],E=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(l.a)(this,Object(m.a)(n).call(this,e))).state={isAsync:!1,text:"",items:Object(r.a)(new Array(2500)).map((function(e,n){var t=Math.floor(23*Math.random())+1;return{index:n,name:h[t],value:n}}))},t}return Object(p.a)(n,e),Object(u.a)(n,[{key:"syncUpdate",value:function(e,n){var t=this;c.a.flushSync((function(){t.setState(e,n)}))}},{key:"tick",value:function(){var e=this;this.setState((function(e){return{count:e.count+1,items:e.items.map((function(e,n){var t=Math.floor(23*Math.random())+1;return Object.assign({},e,{index:e.index+1,name:h[t],value:e.value+1})}))}}),(function(){e.timerId=setTimeout((function(){e.state.isAsync?e.tick():c.a.flushSync((function(){return e.tick()}))}),150)}))}},{key:"componentDidMount",value:function(){this.tick()}},{key:"componentWillUnmount",value:function(){this.timerId&&clearTimeout(this.timerId)}},{key:"render",value:function(){var e=this,n=this.state,t=n.isAsync,a=n.text,o=n.items;return i.a.createElement("main",null,i.a.createElement("h1",null,"App Log System"),i.a.createElement(d,{isAsync:t,onClick:function(n){return e.setState((function(){return{isAsync:n,text:""}}))}}),i.a.createElement("h3",null,"Search for a log"),i.a.createElement(f,{value:a,onChange:function(n){return e.syncUpdate((function(){return{text:n}}))}}),i.a.createElement("h3",null,"Incoming logs (being rendered as ",t?"low":"sync"," priority)"),i.a.createElement(v,{items:o}))}}]),n}(i.a.Component);c.a.createRoot(document.getElementById("root")).render(i.a.createElement(E,null))},9:function(e,n,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.902a964e.chunk.js.map