(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,n,t){e.exports=t(68)},68:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(34),l=t.n(r),o=t(14),u=t(15);function i(){var e=Object(o.a)(["\n  width: 70vw;\n  height: 45vh;\n  display: flex;\n  justify-content: center;\n  border-radius: 2%;\n  text-align: center;\n"]);return i=function(){return e},e}function m(){var e=Object(o.a)(["\n  background-color: beige;\n"]);return m=function(){return e},e}function s(){var e=Object(o.a)(['\n  width: 100vw;\n  height: 8vh;\n  background-color: crimson;\n\n  display: flex;\n  justify-content: space-evenly;\n  border-top-color: crimson;\n  border-bottom-color: gold;\n  border-style: solid;\n\n  a {\n    font-family: "Cinzel Decorative", cursive;\n    font-size: 1.5rem;\n    text-decoration: none;\n    color: white;\n  }\n']);return s=function(){return e},e}function d(){var e=Object(o.a)(["\n  body{\n    margin: 0;\n    font-family:'Libre Caslon Text';\n    background-color:  #fffff7;\n   \n  }\n  .background{\n    margin: 0 25%;\n   \n    width: 50vw;\n\n  \n}\n\nimg {\n  /* border-radius: 3%;\n  width: 45vw;\n  height: 42vh; */\n  width: 30vw;\n  \n  \n}\n\n\n"]);return d=function(){return e},e}var p=Object(u.a)(d()),f=u.b.nav(s()),h=u.b.form(m()),g=u.b.div(i());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=t(3),b=t(10);var v=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Welcome"),c.a.createElement(g,null,c.a.createElement(E.b,{to:"/sixcards"},c.a.createElement("img",{src:"../pics/download.jpeg",alt:"sixcards"}),c.a.createElement("p",null,"Six Card spread"))),c.a.createElement(g,null,c.a.createElement(E.b,{to:"onecard"},c.a.createElement("img",{src:"../pics/fortune.jpg",alt:"onecard"}),c.a.createElement("p",null,"Daily reading"))),c.a.createElement(g,null,c.a.createElement(E.b,{to:"threecards"},c.a.createElement("img",{src:"../pics/threecards.jpeg",alt:"threecards"}),c.a.createElement("p",null,"Present, past and future"))))},j=t(39),O=t(40),w=t(9),y=t.n(w),x="http://localhost:3000",S=function(){function e(){Object(j.a)(this,e),this.service=y.a.create({baseURL:x,withCredentials:!0})}return Object(O.a)(e,[{key:"signup",value:function(e){return this.service.post("auth/signup",e)}},{key:"login",value:function(e){return this.service.post("auth/login",e)}},{key:"logout",value:function(){return this.service.get("auth/logout")}},{key:"profile",value:function(){return this.service.get("auth/profile")}}]),e}();var k=function(){var e=new S;return c.a.createElement("div",null," ",c.a.createElement(f,null,c.a.createElement(E.c,{to:"/signup"},"SIGN UP"),"|",c.a.createElement(E.c,{to:"/login"},"LOG IN"),"|",c.a.createElement(E.c,{to:"/profile"},"PROFILE"),"|",c.a.createElement(E.c,{to:"/"},"Home"),"|",c.a.createElement(E.c,{to:"/",onClick:function(){e.logout().then(function(e){console.log(e.data.msg)}).catch(function(e){console.log(e)})}},"LOG OUT")))},C=t(1),L=function(){var e=Object(a.useState)([]),n=Object(C.a)(e,2),t=n[0],r=n[1];return Object(a.useEffect)(function(){(new S).profile().then(function(e){var n=e.data.user;r(n),console.log(n)}).catch(function(e){401===e.res&&console.log(e.res)})},[]),c.a.createElement("div",null,c.a.createElement("h2",null,"Hello ",t.name," "),c.a.createElement("h3",null,"Your readings "),c.a.createElement("ul",null,c.a.createElement("li",null,t.readings)))},R=t(16),I=t(17),G=function(){var e=Object(a.useState)({}),n=Object(C.a)(e,2),t=n[0],c=n[1];return[t,function(e){e.persist(),c(function(n){return Object(I.a)({},n,Object(R.a)({},e.target.name,e.target.value))})}]};var N=Object(b.f)(function(e){var n=G(),t=Object(C.a)(n,2),a=t[0],r=t[1],l=new S;return c.a.createElement("div",null,c.a.createElement("h2",null,"Login"),c.a.createElement("input",{type:"email",name:"email",placeholder:"email",onChange:function(e){return r(e)}}),c.a.createElement("input",{type:"password",name:"password",placeholder:"password",onChange:function(e){return r(e)}}),c.a.createElement("button",{onClick:function(){l.login(a).then(function(n){console.log(n),e.history.push("/profile")}).catch(function(e){console.log(e)})}},"Login"))});var P=Object(b.f)(function(e){var n=G(),t=Object(C.a)(n,2),a=t[0],r=t[1],l=new S;return c.a.createElement("div",null,c.a.createElement("h2",null,"Signup"),c.a.createElement("input",{type:"text",name:"name",placeholder:"Name",onChange:function(e){return r(e)}}),c.a.createElement("input",{type:"email",name:"email",placeholder:"e-mail",onChange:function(e){return r(e)}}),c.a.createElement("input",{type:"password",name:"password",placeholder:"password",onChange:function(e){return r(e)}}),c.a.createElement("button",{onClick:function(){l.signup(a).then(function(n){console.log(n),e.history.push("/login")}).catch(function(e){console.log(e)})}},"Signup"))}),U=t(7),W=function(e){var n=Object(a.useState)([]),t=Object(C.a)(n,2),r=t[0],l=t[1],o=G(),u=Object(C.a)(o,2),i=u[0],m=u[1],s=Object(a.useState)({}),d=Object(C.a)(s,2),p=(d[0],d[1]),f=Object(a.useState)({}),g=Object(C.a)(f,2),E=(g[0],g[1]);Object(a.useEffect)(function(){y.a.get("http://localhost:3000/cards/random").then(function(e){var n=e.data;l(function(e){return[].concat(Object(U.a)(e),Object(U.a)(n.cards))})}).catch(function(e){console.log(e)})},[]);return c.a.createElement("div",null,c.a.createElement("h1",null,"Six Card Spread"),r.map(function(e){return c.a.createElement("div",{key:e.name},e?c.a.createElement("div",null,c.a.createElement("p",null,e.name),c.a.createElement("img",{src:e.img,alt:"card"}),c.a.createElement("p",null,e.meaning_up),c.a.createElement("p",null,e.desc)):c.a.createElement("p",null,"Loading"))}),c.a.createElement(h,{onSubmit:function(){y.a.post("http://localhost:3000/savereading",Object(I.a)({},i,{cards:r})).then(function(n){var t=n.data;p.apply(void 0,Object(U.a)(t.name)),E.apply(void 0,Object(U.a)(t.user)),console.log("lo que escribi\xf3 cris",r),console.log("data",t),e.history.push("/profile")}).catch(function(e){console.log(e)})}},c.a.createElement("input",{type:"text",name:"name",placeholder:"name your reading",onChange:function(e){return m(e)}}),c.a.createElement("button",null,"Save Reading")))};var _=function(){var e=Object(a.useState)([]),n=Object(C.a)(e,2),t=n[0],r=n[1],l=G(),o=Object(C.a)(l,2),u=(o[0],o[1]);return Object(a.useEffect)(function(){y.a.get("http://localhost:3000/cards/random?n=1").then(function(e){var n=e.data;r(function(e){return[].concat(Object(U.a)(e),Object(U.a)(n.cards))})}).catch(function(e){console.log(e)})},[]),c.a.createElement("div",null,c.a.createElement("h1",null,"Six Card Spread"),t.map(function(e){return c.a.createElement("div",{key:e.name},c.a.createElement("p",null,e.name),c.a.createElement("img",{src:e.img,alt:"card"}),c.a.createElement("p",null,e.meaning_up),c.a.createElement("p",null,e.desc))}),c.a.createElement(h,null,c.a.createElement("input",{type:"text",name:"cards",placeholder:"name your reading",onChange:function(e){return u(e)}}),c.a.createElement("button",null,"Save Reading")))};var z=function(){var e=Object(a.useState)([]),n=Object(C.a)(e,2),t=n[0],r=n[1],l=G(),o=Object(C.a)(l,2),u=(o[0],o[1]);return Object(a.useEffect)(function(){y.a.get("http://localhost:3000/cards/random?n=3").then(function(e){var n=e.data;r(function(e){return[].concat(Object(U.a)(e),Object(U.a)(n.cards))})}).catch(function(e){console.log(e)})},[]),c.a.createElement("div",null,c.a.createElement("h1",null,"Six Card Spread"),t.map(function(e){return c.a.createElement("div",{key:e.name},c.a.createElement("p",null,e.name),c.a.createElement("img",{src:e.img,alt:"card"}),c.a.createElement("p",null,e.meaning_up),c.a.createElement("p",null,e.desc))}),c.a.createElement(h,null,c.a.createElement("input",{type:"text",name:"cards",placeholder:"name your reading",onChange:function(e){return u(e)}}),c.a.createElement("button",null,"Save Reading")))},B=function(){return c.a.createElement(E.a,null,c.a.createElement(k,null),c.a.createElement(b.c,null,c.a.createElement(b.a,{exact:!0,path:"/",component:v}),c.a.createElement(b.a,{exact:!0,path:"/signup",component:P}),c.a.createElement(b.a,{exact:!0,path:"/login",component:N}),c.a.createElement(b.a,{exact:!0,path:"/profile",component:L}),c.a.createElement(b.a,{exact:!0,path:"/logout"}),c.a.createElement(b.a,{exact:!0,path:"onecard",component:_}),c.a.createElement(b.a,{exact:!0,path:"/sixcards",component:W}),c.a.createElement(b.a,{exact:!0,path:"/threecards",component:z})))};l.a.render(c.a.createElement(c.a.Fragment,null,c.a.createElement(p,null),c.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.ba80f3af.chunk.js.map