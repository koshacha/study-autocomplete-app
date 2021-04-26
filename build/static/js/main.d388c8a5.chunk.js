(this["webpackJsonpscrile-test-app"]=this["webpackJsonpscrile-test-app"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(6),r=n.n(s),a=(n(14),n(5)),l=n.n(a),u=n(8),o=n(9),d=n(7),j=n(3),b=(n(16),n(0)),h=function(e){var t=e.query,n=void 0===t?"":t,c=e.inputHandler;return Object(b.jsxs)("div",{className:"search",children:[Object(b.jsx)("button",{className:"search__button",children:Object(b.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{d:"M12.5 11H11.71L11.43 10.73C12.63 9.33 13.25 7.42 12.91 5.39C12.44 2.61 10.12 0.39 7.32002 0.05C3.09002 -0.47 -0.469985 3.09 0.0500152 7.32C0.390015 10.12 2.61002 12.44 5.39002 12.91C7.42002 13.25 9.33002 12.63 10.73 11.43L11 11.71V12.5L15.25 16.75C15.66 17.16 16.33 17.16 16.74 16.75C17.15 16.34 17.15 15.67 16.74 15.26L12.5 11ZM6.50002 11C4.01002 11 2.00002 8.99 2.00002 6.5C2.00002 4.01 4.01002 2 6.50002 2C8.99002 2 11 4.01 11 6.5C11 8.99 8.99002 11 6.50002 11Z",fill:"#656667"})})}),Object(b.jsx)("div",{className:"search__field-inner",children:Object(b.jsx)("input",{className:"search__input",name:"q",type:"text",placeholder:"Search",value:n,onChange:c})})]})},p=(n(18),function(e){var t=e.children;return Object(b.jsx)("div",{className:"list",children:t})}),f=function(e){var t=e.name,n=e.username,c=e.picture,i=e.inputHandler,s=e.clickHandler;return Object(b.jsxs)("div",{className:"list__item","data-testid":"item",tabIndex:0,onKeyDown:i,onClick:s,children:[Object(b.jsx)("div",{className:"list__picture",children:Object(b.jsx)("img",{src:c,alt:t})}),Object(b.jsxs)("div",{className:"list__inner",children:[Object(b.jsx)("div",{className:"list__title",children:t}),Object(b.jsxs)("div",{className:"list__subtitle",children:["@",n.toLowerCase()]})]})]})},O=(n(19),function(){return Object(b.jsx)("div",{className:"list__loading",children:Object(b.jsx)("div",{className:"loading",children:Object(b.jsxs)("svg",{width:"76",height:"76",viewBox:"0 0 76 76",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(b.jsx)("path",{d:"M38 74C18.1178 74 2 57.8822 2 38C2 18.1178 18.1178 2 38 2C57.8822 2 74 18.1178 74 38C74 45.4006 71.7669 52.2796 67.9378 58",stroke:"url(#paint0_linear)",strokeWidth:"3"}),Object(b.jsx)("defs",{children:Object(b.jsxs)("linearGradient",{id:"paint0_linear",x1:"2",y1:"38",x2:"74",y2:"38",gradientUnits:"userSpaceOnUse",children:[Object(b.jsx)("stop",{offset:"0%",stopColor:"#FF6647",children:Object(b.jsx)("animate",{values:"#FF6647; #D6008F",dur:"1s",repeatCount:"indefinite"})}),Object(b.jsx)("stop",{offset:"100%",stopColor:"#D6008F",children:Object(b.jsx)("animate",{values:"#D6008F; #FF6647",dur:"1s",repeatCount:"indefinite"})})]})})]})})})}),m=function(){return"https://jsonplaceholder.typicode.com/users"},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"https://jsonplaceholder.typicode.com/photos/".concat(e)},v=n(2),C=n.n(v),w=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(""),r=Object(j.a)(s,2),a=r[0],w=r[1],g=Object(c.useState)([]),_=Object(j.a)(g,2),N=_[0],y=_[1],k=function(e){return function(){var t=C.a.find(N,{id:e});t&&w(t.name)}},F=Object(c.useCallback)(Object(v.debounce)(function(){var e=Object(d.a)(l.a.mark((function e(t){var n,c,s,r,a,d,b;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([fetch(m()),fetch(x())]);case 2:return n=e.sent,c=Object(j.a)(n,2),s=c[0],r=c[1],e.next=8,s.json();case 8:return a=e.sent,e.next=11,r.json();case 11:d=e.sent,b=new RegExp(t,"i"),a=C()(a).filter((function(e){var t=e.name,n=e.username;return b.test(t)||b.test(n)})).map((function(e){var t=e.id,n=Object(o.a)(e,["id"]),c=C()(d).find({id:t});return Object(u.a)({id:t,picture:c.thumbnailUrl},n)})).valueOf(),y(a),i(!1);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),500),[]);return Object(c.useEffect)((function(){var e=a.trim();e.length?(i(!0),F(e)):i(!1)}),[a]),Object(b.jsxs)("div",{className:"search-app",children:[Object(b.jsx)(h,{query:a,inputHandler:function(e){w(e.target.value)}}),n?Object(b.jsx)(O,{}):a.length>0&&Object(b.jsx)(p,{children:N.map((function(e){return Object(b.jsx)(f,{name:e.name,username:e.username,picture:e.picture,inputHandler:(t=e.id,function(e){var n=e.code,c=document.activeElement,i=c.previousElementSibling,s=c.nextElementSibling;"ArrowDown"===n&&s?(c.blur(),s.focus()):"ArrowUp"===n&&i?(c.blur(),i.focus()):"Enter"===n&&k(t)()}),clickHandler:k(e.id)},e.id);var t}))})]})};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.d388c8a5.chunk.js.map