(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{49:function(e,n,t){e.exports=t(75)},75:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(38),o=t.n(c),l=t(12),i=t(13);function u(){var e=Object(l.a)(["\n  display: none;\n  border-radius: 2%;\n  text-align: center;\n  background-color: beige;\n  text-decoration: none;\n"]);return u=function(){return e},e}function s(){var e=Object(l.a)(['\n  display: flex;\n  a {\n    transition: 1s ease all;\n    &:hover {\n      transform: scale(1.2);\n    }\n    &::before {\n      content: "";\n    }\n  }\n']);return s=function(){return e},e}function m(){var e=Object(l.a)(['\n  border-color: crimson;\n  background-color: white;\n  font-size: 1rem;\n  font-family: "Libre Caslon Text";\n  border-radius: 5%;\n  width: 15vw;\n  height: 12;\n']);return m=function(){return e},e}function d(){var e=Object(l.a)(['\n  width: 40vw;\n  height: 32vh;\n  margin-left: 30%;\n  margin-top: 4%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 2%;\n  text-align: center;\n  background-color: beige;\n  text-decoration: none;\n\n  img {\n    width: 20vw;\n    height: 23vh;\n  }\n  input {\n    margin: 1%;\n    border: none;\n    font-family: "Cinzel";\n  }\n  a {\n    text-decoration: none;\n    color: crimson;\n  }\n']);return d=function(){return e},e}function f(){var e=Object(l.a)(['\n  background-color: beige;\n  border-color: gold;\n  border-style: solid;\n  border-radius: 2%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 50vw;\n  height: 50vh;\n  margin-top: 3%;\n  margin-left: 25%;\n\n  input {\n    margin: 1%;\n    border: none;\n\n    text-align: center;\n    width: 20vw;\n    height: 3vh;\n    font-family: "Cinzel";\n  }\n  button {\n    margin-top: 8%;\n  }\n\n  a {\n    text-decoration: none;\n  }\n']);return f=function(){return e},e}function p(){var e=Object(l.a)(['\n  width: 100vw;\n  height: 8vh;\n  background-color: crimson;\n\n  display: flex;\n  justify-content: space-evenly;\n  border-top-color: crimson;\n  border-bottom-width: 5px;\n  border-bottom-color: gold;\n  border-style: solid;\n\n  a {\n    font-family: "Cinzel Decorative", cursive;\n    font-size: 1.5rem;\n    text-decoration: none;\n    color: white;\n  }\n']);return p=function(){return e},e}function h(){var e=Object(l.a)(['\n  body{\n    margin: 0;\n    font-family:\'Libre Caslon Text\';\n    background-color:  #fffff7;\n      text-align: center;\n   \n  }\n  .background{\n    margin: 0 25%;\n   \n    width: 50vw;\n\n  }\n\nh1{\n\n  font-family:"Cinzel Decorative", cursive\n}\n\nh2{\n\n  font-family:"Cinzel", serif;\n}\n\nimg {\n   border-radius: 5%;\n\n  width: 20vw;\n  \n  \n}\n\n\n']);return h=function(){return e},e}var g=Object(i.a)(h()),E=i.b.nav(p()),b=i.b.div(f()),v=i.b.div(d()),O=i.b.button(m()),j=i.b.div(s()),y=i.b.div(u());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=t(23),x=t.n(w),k=t(41),C=t(1),S=t(11);var L=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"WELCOME TO FIDELIUS"),r.a.createElement(v,null,r.a.createElement(C.b,{to:"/sixcards"},r.a.createElement("img",{src:"../pics/download.jpeg",alt:"sixcards"}),r.a.createElement("p",null,"Six Card spread"))),r.a.createElement("br",null),r.a.createElement(v,null,r.a.createElement(C.b,{to:"onecard"},r.a.createElement("img",{src:"../pics/fortune.jpg",alt:"onecard"}),r.a.createElement("p",null,"Daily reading"))),r.a.createElement("br",null),r.a.createElement(v,null,r.a.createElement(C.b,{to:"threecards"},r.a.createElement("img",{src:"../pics/threecards.jpeg",alt:"threecards"}),r.a.createElement("p",null,"Present, past and future"))))},I=t(17),P=t(18),R=t(4),D=t.n(R),N="https://fideliuss.herokuapp.com/",z=function(){function e(){Object(I.a)(this,e),this.service=D.a.create({baseURL:N,withCredentials:!0})}return Object(P.a)(e,[{key:"signup",value:function(e){return this.service.post("/auth/signup",e)}},{key:"login",value:function(e){return this.service.post("/auth/login",e)}},{key:"logout",value:function(){return this.service.get("/auth/logout")}},{key:"profile",value:function(){return this.service.get("/auth/profile")}}]),e}();var B=function(){var e=new z;return r.a.createElement("div",null,r.a.createElement(E,null,r.a.createElement(C.c,{to:"/signup"},"SIGN UP"),"|",r.a.createElement(C.c,{to:"/login"},"LOG IN"),"|",r.a.createElement(C.c,{to:"/profile"},"PROFILE"),"|",r.a.createElement(C.c,{to:"/"},"Home"),"|",r.a.createElement(C.c,{to:"/",onClick:function(){e.logout().then(function(e){console.log(e.data.msg)}).catch(function(e){console.log(e)})}},"LOG OUT")))},_=t(10),U=t(7),T=t(2),Y=t(19),J=function(){var e=Object(a.useState)({}),n=Object(T.a)(e,2),t=n[0],r=n[1];return[t,function(e){e.persist(),r(function(n){return Object(_.a)({},n,Object(Y.a)({},e.target.name,e.target.value))})}]},G=t(45),H=t(44),W=t(46),A=Object(a.createContext)(),F=function(e){function n(){var e,t;Object(I.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(G.a)(this,(e=Object(H.a)(n)).call.apply(e,[this].concat(r)))).state={place:"Home",user:null},t.changePlace=function(e){t.setState({place:e})},t.login=function(e){return t.setState({user:e})},t.logout=function(){return t.setState({user:null})},t}return Object(W.a)(n,e),Object(P.a)(n,[{key:"render",value:function(){var e=this.changePlace,n=this.state,t=this.login,a=this.logout;return r.a.createElement(A.Provider,{value:{state:n,changePlace:e,login:t,logout:a}},this.props.children)}}]),n}(a.Component);var M=function(){var e=Object(a.useContext)(A).state,n=J(),t=Object(T.a)(n,2),c=t[0],o=t[1],l=Object(a.useState)([]),i=Object(T.a)(l,2),u=i[0],s=i[1],m=Object(a.useState)({}),d=Object(T.a)(m,2),f=(d[0],d[1]),p="https://fideliuss.herokuapp.com/";return Object(a.useEffect)(function(){(new z).profile().then(function(e){var n=e.data;s(function(e){return[].concat(Object(U.a)(e),Object(U.a)(n.user.readings))})}).catch(function(e){401===e.res&&console.log(e.res)})},[p]),e.user?r.a.createElement("div",{className:"profile"},r.a.createElement("h2",null,"Hello ",e.user.name," "),r.a.createElement("h3",null,"Your readings "),r.a.createElement("div",null,r.a.createElement("p",null," Click on the name of the reading to access")),u.map(function(e){return r.a.createElement("div",{key:e._id},r.a.createElement(v,null,r.a.createElement(j,null,r.a.createElement(C.b,{to:"/savedreading/".concat(e._id)},r.a.createElement("h2",null,e.name))),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"name",placeholder:"new name",onChange:function(e){return o(e)}}),r.a.createElement(O,{onClick:function(){return n=e._id,void D.a.patch("".concat(p,"/reading/").concat(n),c).then(function(e){var n=e.data;f(function(e){return Object(_.a)({},e,n.readings)})}).catch(function(e){console.log(e)});var n}},"Change name")),r.a.createElement("br",null))})):r.a.createElement("p",null,"Loading...")},$=Object(S.f)(function(e){var n=Object(a.useContext)(A),t=n.changePlace,c=n.login,o=new z,l=J(),i=Object(T.a)(l,2),u=i[0],s=i[1];Object(a.useEffect)(function(){t("auth")},[t]);return r.a.createElement("div",{className:"auth"},r.a.createElement("h2",null,"Your account"),r.a.createElement(b,null,r.a.createElement("input",{type:"text",name:"email",placeholder:"your e-mail",onChange:s})," ",r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"password",placeholder:"your password",onChange:s})," ",r.a.createElement("br",null),r.a.createElement(O,{onClick:function(){o.login(u).then(function(n){c(n.data.user),localStorage.setItem("USER",JSON.stringify(n.data.user)),e.history.push("/profile")}).catch(function(e){console.log(e)})}},"Login"),r.a.createElement("br",null),r.a.createElement("p",null,"Don't have an account yet? ",r.a.createElement(C.b,{to:"/signup"},"Register here"))))}),q=function(e){var n=Object(a.useContext)(A),t=n.changePlace,c=n.login,o=new z,l=J(),i=Object(T.a)(l,2),u=i[0],s=i[1];Object(a.useEffect)(function(){t("auth")},[t]);return r.a.createElement("div",{className:"auth"},r.a.createElement("h2",null,"Signup"),r.a.createElement(b,null,r.a.createElement("input",{type:"text",name:"name",placeholder:"Name",onChange:function(e){return s(e)}}),r.a.createElement("input",{type:"email",name:"email",placeholder:"e-mail",onChange:function(e){return s(e)}}),r.a.createElement("input",{type:"password",name:"password",placeholder:"password",onChange:function(e){return s(e)}}),r.a.createElement(O,{onClick:function(){o.signup(u).then(function(n){c(n.data.user),localStorage.setItem("USER",JSON.stringify(n.data.user)),e.history.push("/profile")}).catch(function(e){console.log(e),console.log(u)})}},"Sign up")))},K=function(){var e=Object(a.useState)([]),n=Object(T.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)({}),l=Object(T.a)(o,2),i=l[0],u=l[1],s=J(),m=Object(T.a)(s,2),d=m[0],f=m[1],p="https://fideliuss.herokuapp.com/";Object(a.useEffect)(function(){D.a.get("".concat(p,"/cards/random?n=6")).then(function(e){var n=e.data;c(function(e){return[].concat(Object(U.a)(e),Object(U.a)(n.cards))})}).catch(function(e){console.log(e)}),(new z).profile().then(function(e){var n=e.data.user;u(n)})},[p]);return r.a.createElement("div",null,r.a.createElement("h1",null,"Six Cards Spread"),t.map(function(e,n){return r.a.createElement("div",{key:n},e?r.a.createElement("div",{key:n},r.a.createElement("h2",null,e.name),r.a.createElement("img",{src:e.img,alt:"card"}),r.a.createElement("p",null,e.meaning_up),r.a.createElement(O,null,"See detail"),r.a.createElement(y,null,r.a.createElement("p",null,e.desc))):r.a.createElement("p",null,"Loading"))}),r.a.createElement("br",null),r.a.createElement(v,null,r.a.createElement("input",{type:"text",name:"name",placeholder:"name your reading",onChange:function(e){return f(e)}}),r.a.createElement("br",null),r.a.createElement(C.b,{to:"/profile"},r.a.createElement(O,{onClick:function(){D.a.post("".concat(p,"/savereading"),Object(_.a)({},d,{cards:t,user:i})).then(function(e){return e.data.name}).catch(function(e){console.log(e)})}},"Save Reading"))))};var Q=function(){var e=Object(a.useState)([]),n=Object(T.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)({}),l=Object(T.a)(o,2),i=l[0],u=l[1],s=J(),m=Object(T.a)(s,2),d=m[0],f=m[1],p="https://fideliuss.herokuapp.com/";return Object(a.useEffect)(function(){D.a.get("".concat(p,"/cards/random?n=1")).then(function(e){var n=e.data;c(function(e){return[].concat(Object(U.a)(e),Object(U.a)(n.cards))})}).catch(function(e){console.log(e)}),(new z).profile().then(function(e){var n=e.data.user;u(n)})},[p]),r.a.createElement("div",null,r.a.createElement("h1",null,"Card for today"),t.map(function(e,n){return r.a.createElement("div",{key:n},e?r.a.createElement("div",{key:n},r.a.createElement("h2",null,e.name),r.a.createElement("img",{src:e.img,alt:"card"}),r.a.createElement("p",null,e.meaning_up),r.a.createElement(O,null,"See detail")):r.a.createElement("p",null,"Loading"))}),r.a.createElement("br",null),r.a.createElement(v,null,r.a.createElement("input",{type:"text",name:"name",placeholder:"name your reading",onChange:function(e){return f(e)}}),r.a.createElement("br",null),r.a.createElement(C.b,{to:"/profile"},r.a.createElement(O,{onClick:function(){D.a.post("".concat(p,"/savereading"),Object(_.a)({},d,{cards:t,user:i})).then(function(e){return e.data.name}).catch(function(e){console.log(e)})}},"Save Reading"))))};var V=function(){var e=Object(a.useState)([]),n=Object(T.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)({}),l=Object(T.a)(o,2),i=l[0],u=l[1],s=J(),m=Object(T.a)(s,2),d=m[0],f=m[1],p="https://fideliuss.herokuapp.com/";return Object(a.useEffect)(function(){D.a.get("".concat(p,"/cards/random?n=3")).then(function(e){var n=e.data;c(function(e){return[].concat(Object(U.a)(e),Object(U.a)(n.cards))})}).catch(function(e){console.log(e)}),(new z).profile().then(function(e){var n=e.data.user;u(n)})},[p]),r.a.createElement("div",null,r.a.createElement("h1",null,"Your present, past and future"),t.map(function(e,n){return r.a.createElement("div",{key:n},e?r.a.createElement("div",{key:n},r.a.createElement("h2",null,e.name),r.a.createElement("img",{src:e.img,alt:"card"}),r.a.createElement("p",null,e.meaning_up),r.a.createElement(O,null,"See detail")):r.a.createElement("p",null,"Loading"))}),r.a.createElement("br",null),r.a.createElement(v,null,r.a.createElement("input",{type:"text",name:"name",placeholder:"name your reading",onChange:function(e){return f(e)}}),r.a.createElement("br",null),r.a.createElement(C.b,{to:"/profile"},r.a.createElement(O,{onClick:function(){D.a.post("".concat(p,"/savereading"),Object(_.a)({},d,{cards:t,user:i})).then(function(e){return e.data.name}).catch(function(e){console.log(e)})}},"Save Reading"))))},X=t(26),Z=t.n(X);var ee=Object(S.f)(function(e){var n=Object(a.useState)([]),t=Object(T.a)(n,2),c=t[0],o=t[1],l=e.match.params.id,i="https://fideliuss.herokuapp.com/";return Object(a.useEffect)(function(){D.a.get("".concat(i,"/readings/").concat(l)).then(function(e){var n=e.data.reading.cards;o(n)}).catch(function(e){console.log(e)})},[i,l]),r.a.createElement("div",null,c.map(function(e,n){return r.a.createElement("div",{key:n},e?r.a.createElement("div",{key:n},r.a.createElement("h2",null,e.name),r.a.createElement("img",{src:e.img,alt:"card"}),r.a.createElement("p",null,e.meaning_up),r.a.createElement("p",null,e.desc)):r.a.createElement("p",null,"Loading"))}),r.a.createElement(C.b,{to:"/profile"},r.a.createElement(O,{onClick:function(n){n.preventDefault(),Z.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes"}).then(function(n){n.value&&D.a.delete("".concat(i,"/reading/").concat(l)).then(function(n){var t=n.data;Z.a.fire("Deleted!",t.msg,"success"),e.history.push("/profile")}).catch(function(e){console.log(e)})})}},"Delete")),r.a.createElement(C.b,{to:"/profile"},r.a.createElement(O,null,"Back to your profile")))}),ne=function(){var e=Object(a.useContext)(A),n=e.login,t=e.changeIsLogged;return Object(a.useEffect)(function(){var e=new z;!function(){var t=Object(k.a)(x.a.mark(function t(){var a,r;return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.profile();case 2:a=t.sent,r=a.data.user,n(r);case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()()},[t,n]),r.a.createElement(C.a,null,r.a.createElement(B,null),r.a.createElement(S.c,null,r.a.createElement(S.a,{exact:!0,path:"/",component:L}),r.a.createElement(S.a,{exact:!0,path:"/signup",component:q}),r.a.createElement(S.a,{exact:!0,path:"/login",component:$}),r.a.createElement(S.a,{exact:!0,path:"/profile",component:M}),r.a.createElement(S.a,{exact:!0,path:"/logout"}),r.a.createElement(S.a,{exact:!0,path:"/onecard",component:Q}),r.a.createElement(S.a,{exact:!0,path:"/sixcards",component:K}),r.a.createElement(S.a,{exact:!0,path:"/threecards",component:V}),r.a.createElement(S.a,{exact:!0,path:"/savedReading/:id",component:ee})))};o.a.render(r.a.createElement(F,null,r.a.createElement(g,null),r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[49,1,2]]]);
//# sourceMappingURL=main.2eb2ed33.chunk.js.map