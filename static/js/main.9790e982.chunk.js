(this["webpackJsonpstar-battle"]=this["webpackJsonpstar-battle"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var s=n(0),r=n(1),c=n.n(r),a=n(9),i=n.n(a),o=(n(15),n(16),n(2)),u=n.n(o),h=n(3),l=n(4),j=n(5),d=n(7),b=n(6);function f(t){return p.apply(this,arguments)}function p(){return(p=Object(h.a)(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.github.com/users/".concat(e,"/repos")).then((function(t){return t.json()}));case 2:return n=t.sent,t.abrupt("return",n.reduce((function(t,e){return t+e.stargazers_count}),0));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(t){return x.apply(this,arguments)}function x(){return(x=Object(h.a)(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.github.com/users/".concat(e)).then((function(t){return t.json()}));case 2:return n=t.sent,t.abrupt("return",n.followers);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var v=function(){function t(e,n,s){Object(l.a)(this,t),this.name=void 0,this.stars=void 0,this.followers=void 0,this.name=e,this.stars=n,this.followers=s}return Object(j.a)(t,[{key:"Reset",value:function(t,e,n){this.name=t,this.stars=e,this.followers=n}}]),t}(),m=new v("",0,0),w=new v("",0,0),y=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"users",children:Object(s.jsxs)("table",{children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{id:"user1"}),Object(s.jsx)("th",{id:"user2"})]})}),Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("th",{children:[Object(s.jsxs)("td",{children:["star",Object(s.jsx)("p",{id:"star1"})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("td",{children:["followers",Object(s.jsx)("p",{id:"followers1"})]}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("th",{children:[Object(s.jsxs)("td",{children:["star",Object(s.jsx)("p",{id:"star2"})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("td",{children:["followers",Object(s.jsx)("p",{id:"followers2"})]}),Object(s.jsx)("br",{})]})]})]})})}}]),n}(r.Component),g=function(t){return document.querySelector(t)},S=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={first:"",second:""},t}return Object(j.a)(n,[{key:"handleSubmit",value:function(t){t.preventDefault()}},{key:"handleChangeFirst",value:function(t){this.setState({first:t.target.value})}},{key:"handleChangeSecond",value:function(t){this.setState({second:t.target.value})}},{key:"search",value:function(){var t=Object(h.a)(u.a.mark((function t(){var e,n,s,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=m,t.t1=this.state.first,t.next=4,f(this.state.first);case 4:return t.t2=t.sent,t.next=7,O(this.state.first);case 7:return t.t3=t.sent,t.t0.Reset.call(t.t0,t.t1,t.t2,t.t3),t.t4=w,t.t5=this.state.second,t.next=13,f(this.state.second);case 13:return t.t6=t.sent,t.next=16,O(this.state.second);case 16:t.t7=t.sent,t.t4.Reset.call(t.t4,t.t5,t.t6,t.t7),g("#user1").innerHTML=m.name,g("#user2").innerHTML=w.name,g("#star1").innerHTML=null===(e=m.stars)||void 0===e?void 0:e.toString(),g("#star2").innerHTML=null===(n=w.stars)||void 0===n?void 0:n.toString(),g("#followers1").innerHTML=null===(s=m.followers)||void 0===s?void 0:s.toString(),g("#followers2").innerHTML=null===(r=w.followers)||void 0===r?void 0:r.toString();case 24:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"search",children:[Object(s.jsxs)("form",{onSubmit:this.handleSubmit.bind(this),children:[Object(s.jsx)("input",{placeholder:"Github Id",onChange:this.handleChangeFirst.bind(this)}),Object(s.jsx)("input",{placeholder:"Github Id",onChange:this.handleChangeSecond.bind(this)}),Object(s.jsx)("button",{onClick:this.search.bind(this),children:"\uac80\uc0c9"})]}),Object(s.jsx)("br",{}),Object(s.jsx)(y,{})]})}}]),n}(r.Component);var k=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsxs)("div",{className:"head",children:[Object(s.jsx)("h1",{children:"Github Star Battle"}),Object(s.jsx)("p",{children:"\uae43\ud5c8\ube0c \uc2a4\ud0c0 \ub300\uacb0 \uc0ac\uc774\ud2b8!"})]}),Object(s.jsx)(S,{})]})})};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(k,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.9790e982.chunk.js.map