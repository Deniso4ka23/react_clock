(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),s=n(4),l=n(1),u=n(0),d=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={date:new Date},e.timerIdTime=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerIdTime=window.setInterval((function(){var t=new Date;e.setState({date:t}),console.info(t.toUTCString().slice(-12,-4))}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=this.props.name;t!==e.name&&console.debug("Renamed from ".concat(e.name," to ").concat(t))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerIdTime)}},{key:"render",value:function(){var e=this.props.name,t=this.state.date;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:e})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:t.toUTCString().slice(-12,-4)})]})}}]),n}(l.Component);n(13);function m(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var h=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={clockName:"Clock-0",hasClock:!0},e.timerIdClockName=0,e.handleRightClick=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.handleLeftClick=function(){e.setState({hasClock:!0})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerIdClockName=window.setInterval((function(){e.setState({clockName:m()})}),3300),document.addEventListener("contextmenu",this.handleRightClick),document.addEventListener("click",this.handleLeftClick)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),t&&Object(u.jsx)(d,{name:n})]})}}]),n}(l.Component);a.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.34b5a64a.chunk.js.map