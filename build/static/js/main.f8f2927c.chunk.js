(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{36:function(e,t,n){e.exports=n(66)},45:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(17),u=n.n(c),o=n(5),i=n(11),l=(n(45),n(3)),s=n(1),p=n.n(s),f=n(4),m=n(14),d=n.n(m),v=function(){var e=window.localStorage.getItem("loggedRatingAppAdmin"),t=JSON.parse(e);if(t)return t;var n=window.localStorage.getItem("loggedRatingAppUser"),r=JSON.parse(n);return r||null},g=v,b=function(){return{headers:{auth:function(){var e=v();return e?"bearer ".concat(e.token):null}()}}},E={getAll:function(){var e=Object(f.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=b(),e.next=3,d.a.get("/api/items",t);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getItem:function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("".concat("/api/items","/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_ITEMS":case"GET_ITEM":return t.data;default:return e}},w=function(){var e=Object(o.c)((function(e){return e.items}));if(!e)return null;console.log("Items: ",e);return a.a.createElement("div",null,e.map((function(e){return a.a.createElement("div",{key:e.id},a.a.createElement(i.b,{to:"/items/".concat(e.id)},a.a.createElement("b",null," ",e.name)),a.a.createElement("h3",null,e.category),a.a.createElement("p",null,e.review?"Reviews stack returned ":"No Review Array"))})))},O=function(){var e=Object(o.c)((function(e){return e.items})),t=Object(l.g)().id,n=e.find((function(e){return e.id===t}));if(!n)return null;console.log("Item: ",n);return a.a.createElement("div",null,a.a.createElement("div",{key:n.id},a.a.createElement("h3",null,"Details"),a.a.createElement("b",null,n.name),a.a.createElement("h3",null,"Category: ",n.category),a.a.createElement("p",null,n.description)))},j=(n(65),n(16)),y={login:function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),adminLogin:function(){var e=Object(f.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=b(),console.log("adminLoggedIN service, it reached here: ",t),e.next=4,d.a.post("/api/login/admin/",t,n);case 4:return r=e.sent,console.log("adminLoggedIN service: ",r.data),e.abrupt("return",r.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(e){return{type:"SET_USER",user:e}},S=function(e,t){return function(){var n=Object(f.a)(p.a.mark((function n(r){var a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y.login({email:e,password:t});case 3:a=n.sent,window.localStorage.setItem("loggedRatingAppUser",JSON.stringify(a)),r(x(a)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.adminLogin({adminPin:e});case 3:r=t.sent,window.localStorage.setItem("loggedRatingAppAdmin",JSON.stringify(r)),n(x(r)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":case"CLEAR_USER":return t.user;default:return e}},A=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],u=Object(r.useState)(""),i=Object(j.a)(u,2),s=i[0],m=i[1],d=Object(o.b)(),v=Object(l.f)(),g=function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,d(S(n,s));case 3:c(""),m(""),v.push("/");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement("h5",null,"Login"),a.a.createElement("form",{onSubmit:g},a.a.createElement("input",{type:"text",name:"email",placeholder:"Email",value:n,onChange:function(e){var t=e.target;return c(t.value)}}),a.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:s,onChange:function(e){var t=e.target;return m(t.value)}}),a.a.createElement("input",{type:"submit"}),a.a.createElement("button",{onClick:function(e){e.preventDefault(),v.push("/")}},"Cancel")))},R=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],u=Object(o.b)(),i=Object(l.f)(),s=function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),u(k(n)),c(""),i.push("/");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement("h5",null,"Switch to Admin Mode"),a.a.createElement("form",{onSubmit:s},a.a.createElement("input",{type:"password",name:"adminPin",placeholder:"Admin Pin",value:n,onChange:function(e){var t=e.target;return c(t.value)}}),a.a.createElement("input",{type:"submit"}),a.a.createElement("button",{onClick:function(e){e.preventDefault(),i.push("/")}},"Cancel")))},C=function(){var e=Object(l.f)(),t=Object(o.b)(),n=Object(o.c)((function(e){return e.logged})),r=function(e){e.preventDefault(),t(function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.localStorage.removeItem("loggedRatingAppUser");case 2:t({type:"CLEAR_USER",user:null});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},c=function(){return a.a.createElement("button",{onClick:r},"Logout")},u=function(n){n.preventDefault(),t(function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.localStorage.removeItem("loggedRatingAppAdmin");case 2:n=g(),t(x(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.push("/")};return a.a.createElement("div",null,n?"user"===n.role?a.a.createElement("div",null,a.a.createElement(R,null),c()):"admin"===n.role?a.a.createElement("div",null,a.a.createElement("button",{onClick:u},"User Mode"),c()):void 0:a.a.createElement("div",null,a.a.createElement(A,null)))},N=function(){var e=Object(o.b)();Object(r.useEffect)((function(){e(function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getAll();case 2:n=e.sent,t({type:"INIT_ITEMS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(r.useEffect)((function(){e(function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=g(),t(x(n));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(o.c)((function(e){return e.logged}));return console.log("APP Logged: ",t),a.a.createElement("div",{className:"App"},"Hello World!!",a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/items/:id"},a.a.createElement(O,null)),a.a.createElement(l.a,{path:"/login"},a.a.createElement(C,null)),a.a.createElement(l.a,{path:"/"},a.a.createElement(w,null))))},L=n(12),T=n(34),D=n(35),U=Object(L.combineReducers)({items:h,logged:I}),M=Object(L.createStore)(U,Object(T.composeWithDevTools)(Object(L.applyMiddleware)(D.a)));u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(o.a,{store:M},a.a.createElement(i.a,null,a.a.createElement(N,null)))),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.f8f2927c.chunk.js.map