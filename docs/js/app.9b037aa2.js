(function(t){function e(e){for(var r,n,o=e[0],l=e[1],c=e[2],u=0,m=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&m.push(s[n][0]),s[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(r=!1)}r&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},s={app:0},i=[];function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},3212:function(t,e,a){"use strict";var r=a("a306"),s=a.n(r);s.a},"4fab":function(t,e,a){t.exports="img/card1.02c79b53.png"},"54eb":function(t,e,a){t.exports="img/card2.23bf2286.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("navbar"),a("router-view"),a("footer",{class:"login"===t.$route.name||"register"===t.$route.name?"blog-footer":"reg-footer"},[t._m(0),t._m(1)])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("3XP by "),a("a",{attrs:{href:"https://www.xtremepush.com"}},[t._v("Xtremepush")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("a",{attrs:{href:"#"}},[t._v("Back to top")])])}],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-md navbar-light navbar-laravel"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[a("span",{staticClass:"brand"},[t._v("SportsBet")])]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav mr-auto"}),a("ul",{staticClass:"navbar-nav ml-auto"},[t.user.loggedIn?[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link"},[a("svg",{staticClass:"bi bi-person-circle",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"}})]),t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.user.data.displayName)+"\n\t\t\t\t\t\t\t")])]),a("li",{staticClass:"nav-item"},[a("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.signOut(e)}}},[t._v("Sign out")])])]:[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"register"}},[t._v("Register")])],1),a("li",{staticClass:"nav-item login-btn"},[a("router-link",{staticClass:"nav-link",attrs:{to:"login"}},[t._v("Login")])],1)]],2)])],1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":""}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),c=a("2f62"),d=a("8aa5"),u=a.n(d);function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,r)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(a,!0).forEach(function(e){Object(l["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var v={computed:f({},Object(c["b"])({user:"user"})),methods:{signOut:function(){var t=this;u.a.auth().signOut().then(function(){t.$router.push({path:"/"})})}}},h=v,p=(a("779c"),a("2877")),g=Object(p["a"])(h,n,o,!1,null,"b07b2e38",null),b=g.exports,w={components:{navbar:b}},C=w,x=(a("cf76"),Object(p["a"])(C,s,i,!1,null,"240e2757",null)),y=x.exports,_=a("8c4f"),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("br"),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v("Login")]),a("div",{staticClass:"card-body"},[t.error?a("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.error))]):t._e(),a("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"email"}},[t._v("Email")]),a("div",{staticClass:"col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{id:"email",type:"email",name:"email",value:"",required:"",autofocus:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password"}},[t._v("Password")]),a("div",{staticClass:"col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{id:"password",type:"password",name:"password",required:""},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})])]),t._m(0)])])])])])])},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group row mb-0"},[a("div",{staticClass:"col-md-8 offset-md-4"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Login")])])])}],j={data:function(){return{form:{email:"",password:""},error:null}},methods:{submit:function(){var t=this;u.a.auth().signInWithEmailAndPassword(this.form.email,this.form.password).then(function(){t.$router.push({name:"Home"})}).catch(function(e){t.error=e.message})}}},P=j,E=Object(p["a"])(P,k,O,!1,null,null,null),S=E.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("br"),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v("Register")]),a("div",{staticClass:"card-body"},[t.error?a("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.error))]):t._e(),a("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"name"}},[t._v("Name")]),a("div",{staticClass:"col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{id:"name",type:"name",name:"name",value:"",required:"",autofocus:""},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"email"}},[t._v("Email")]),a("div",{staticClass:"col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{id:"email",type:"email",name:"email",value:"",required:"",autofocus:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password"}},[t._v("Password")]),a("div",{staticClass:"col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{id:"password",type:"password",name:"password",required:""},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})])]),t._m(0)])])])])])])},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group row mb-0"},[a("div",{staticClass:"col-md-8 offset-md-4"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Register")])])])}],B=(a("7f7f"),{data:function(){return{form:{name:"",email:"",password:""},error:null}},methods:{submit:function(){var t=this;u.a.auth().createUserWithEmailAndPassword(this.form.email,this.form.password).then(function(e){e.user.updateProfile({displayName:t.form.name}).then(function(){})}).catch(function(e){t.error=e.message})}}}),N=B,D=Object(p["a"])(N,$,I,!1,null,null,null),A=D.exports,R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),r("main",{staticClass:"container",attrs:{role:"main"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4 blog-main"},[r("div",{staticClass:"sidebar-sticky pt-3"},[r("ul",{staticClass:"nav flex-column"},[r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:"#"}},[r("svg",{staticClass:"feather feather-bar-chart-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("line",{attrs:{x1:"18",y1:"20",x2:"18",y2:"10"}}),r("line",{attrs:{x1:"12",y1:"20",x2:"12",y2:"4"}}),r("line",{attrs:{x1:"6",y1:"20",x2:"6",y2:"14"}})]),t._v("\n\t\t\t\t\t\t\t\tLive\n\t\t\t\t\t\t\t")])]),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:"#"}},[r("svg",{staticClass:"feather feather-bar-chart-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("line",{attrs:{x1:"18",y1:"20",x2:"18",y2:"10"}}),r("line",{attrs:{x1:"12",y1:"20",x2:"12",y2:"4"}}),r("line",{attrs:{x1:"6",y1:"20",x2:"6",y2:"14"}})]),t._v("\n\t\t\t\t\t\t\t\tHorse Racing\n\t\t\t\t\t\t\t")])]),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:"#"}},[r("svg",{staticClass:"feather feather-bar-chart-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("line",{attrs:{x1:"18",y1:"20",x2:"18",y2:"10"}}),r("line",{attrs:{x1:"12",y1:"20",x2:"12",y2:"4"}}),r("line",{attrs:{x1:"6",y1:"20",x2:"6",y2:"14"}})]),t._v("\n\t\t\t\t\t\t\t\tFootball\n\t\t\t\t\t\t\t")])]),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:"#"}},[r("svg",{staticClass:"feather feather-bar-chart-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("line",{attrs:{x1:"18",y1:"20",x2:"18",y2:"10"}}),r("line",{attrs:{x1:"12",y1:"20",x2:"12",y2:"4"}}),r("line",{attrs:{x1:"6",y1:"20",x2:"6",y2:"14"}})]),t._v("\n\t\t\t\t\t\t\t\tGolf\n\t\t\t\t\t\t\t")])]),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:"#"}},[r("svg",{staticClass:"feather feather-bar-chart-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("line",{attrs:{x1:"18",y1:"20",x2:"18",y2:"10"}}),r("line",{attrs:{x1:"12",y1:"20",x2:"12",y2:"4"}}),r("line",{attrs:{x1:"6",y1:"20",x2:"6",y2:"14"}})]),t._v("\n\t\t\t\t\t\t\t\tBoxing\n\t\t\t\t\t\t\t")])]),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:"#"}},[r("svg",{staticClass:"feather feather-bar-chart-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("line",{attrs:{x1:"18",y1:"20",x2:"18",y2:"10"}}),r("line",{attrs:{x1:"12",y1:"20",x2:"12",y2:"4"}}),r("line",{attrs:{x1:"6",y1:"20",x2:"6",y2:"14"}})]),t._v("\n\t\t\t\t\t\t\t\tCricket\n\t\t\t\t\t\t\t")])]),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:"#"}},[r("svg",{staticClass:"feather feather-bar-chart-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("line",{attrs:{x1:"18",y1:"20",x2:"18",y2:"10"}}),r("line",{attrs:{x1:"12",y1:"20",x2:"12",y2:"4"}}),r("line",{attrs:{x1:"6",y1:"20",x2:"6",y2:"14"}})]),t._v("\n\t\t\t\t\t\t\t\tSlots\n\t\t\t\t\t\t\t")])]),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:"#"}},[r("svg",{staticClass:"feather feather-bar-chart-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("line",{attrs:{x1:"18",y1:"20",x2:"18",y2:"10"}}),r("line",{attrs:{x1:"12",y1:"20",x2:"12",y2:"4"}}),r("line",{attrs:{x1:"6",y1:"20",x2:"6",y2:"14"}})]),t._v("\n\t\t\t\t\t\t\t\tVirtual Sports\n\t\t\t\t\t\t\t")])]),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:"#"}},[r("svg",{staticClass:"feather feather-bar-chart-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("line",{attrs:{x1:"18",y1:"20",x2:"18",y2:"10"}}),r("line",{attrs:{x1:"12",y1:"20",x2:"12",y2:"4"}}),r("line",{attrs:{x1:"6",y1:"20",x2:"6",y2:"14"}})]),t._v("\n\t\t\t\t\t\t\t\tTennis\n\t\t\t\t\t\t\t")])]),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:"#"}},[r("svg",{staticClass:"feather feather-bar-chart-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("line",{attrs:{x1:"18",y1:"20",x2:"18",y2:"10"}}),r("line",{attrs:{x1:"12",y1:"20",x2:"12",y2:"4"}}),r("line",{attrs:{x1:"6",y1:"20",x2:"6",y2:"14"}})]),t._v("\n\t\t\t\t\t\t\t\tBasketball\n\t\t\t\t\t\t\t")])])])])]),r("aside",{staticClass:"col-md-8 blog-sidebar"},[null!==t.user.data&&null!==t.deviceId?r("div",{staticClass:"embed-responsive embed-responsive-16by9"},[r("iframe",{staticClass:"embed-responsive-item",attrs:{src:t.iframeUrl,allowfullscreen:""}})]):r("div",{staticClass:"jumbotron p-4 p-md-5 text-white rounded bg-dark"},[t._m(1)])])])]),r("div",{staticClass:"container"},[r("h1",{staticClass:"blog-post-title"},[t._v("Play Online")]),r("div",{staticClass:"row mb-2"},[r("div",{staticClass:"col-lg-4 rounded-card"},[r("img",{staticClass:"bd-placeholder-img rounded-circle",attrs:{src:a("4fab"),width:"280",height:"280"}}),r("h3",[t._v("Baccarat")])]),r("div",{staticClass:"col-lg-4 rounded-card"},[r("img",{staticClass:"bd-placeholder-img rounded-circle",attrs:{src:a("54eb"),width:"280",height:"280"}}),r("h3",[t._v("Slots")])]),r("div",{staticClass:"col-lg-4 rounded-card"},[r("img",{staticClass:"bd-placeholder-img rounded-circle",attrs:{src:a("7cfe"),width:"280",height:"280"}}),r("h3",[t._v("Online Poker")])])])]),r("br"),r("div",{staticClass:"container"},[r("div",{staticClass:"row mb-2"},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"},[t._m(2),r("div",{staticClass:"col-auto d-none d-lg-block"},[r("img",{staticClass:"bd-placeholder-img",attrs:{src:a("aaac"),width:"200",height:"250"}})])])]),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"},[t._m(3),r("div",{staticClass:"col-auto d-none d-lg-block"},[r("img",{staticClass:"bd-placeholder-img",attrs:{src:a("f9c7"),width:"200",height:"250"}})])])]),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"},[t._m(4),r("div",{staticClass:"col-auto d-none d-lg-block"},[r("img",{staticClass:"bd-placeholder-img",attrs:{src:a("b0a8"),width:"200",height:"250"}})])])])])])])},G=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"nav-scroller py-1 mb-2"},[a("nav",{staticClass:"nav d-flex justify-content-between"},[a("a",{staticClass:"p-2 text-muted",attrs:{href:"#"}},[t._v("Sports")]),a("a",{staticClass:"p-2 text-muted",attrs:{href:"#"}},[t._v("Live")]),a("a",{staticClass:"p-2 text-muted",attrs:{href:"#"}},[t._v("Games")]),a("a",{staticClass:"p-2 text-muted",attrs:{href:"#"}},[t._v("Blog")]),a("a",{staticClass:"p-2 text-muted",attrs:{href:"#"}},[t._v("News")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-6 px-0"},[a("h1",{staticClass:"display-4 font-italic"},[t._v("Play our exciting new daily free game to win great 3XPBet Prizes!")]),a("p",{staticClass:"lead mb-0"},[a("a",{staticClass:"text-white font-weight-bold",attrs:{href:"#"}},[t._v("Play...")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col p-4 d-flex flex-column position-static"},[a("h3",{staticClass:"mb-0"},[t._v("Racing")]),a("p",{staticClass:"card-text mb-auto"},[t._v("Interested in XX? Click the link below and you will be able to get right in on the latest action from Cheltenham and other race courses around the world.")]),a("a",{staticClass:"stretched-link",attrs:{href:"#"}},[t._v("Continue reading")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col p-4 d-flex flex-column position-static"},[a("h3",{staticClass:"mb-0"},[t._v("Football")]),a("p",{staticClass:"card-text mb-auto"},[t._v("Interested in XX? Click the link below and you will be able to get right in on the latest action from Cheltenham and other race courses around the world.")]),a("a",{staticClass:"stretched-link",attrs:{href:"#"}},[t._v("Continue reading")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col p-4 d-flex flex-column position-static"},[a("h3",{staticClass:"mb-0"},[t._v("Golf")]),a("p",{staticClass:"card-text mb-auto"},[t._v("Interested in XX? Click the link below and you will be able to get right in on the latest action from Cheltenham and other race courses around the world.")]),a("a",{staticClass:"stretched-link",attrs:{href:"#"}},[t._v("Continue reading")])])}];function L(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,r)}return a}function M(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?L(a,!0).forEach(function(e){Object(l["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):L(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var U={name:"Home",data:function(){return{deviceId:null}},mounted:function(){localStorage.getItem("xtremepush.data")&&(this.deviceId=JSON.parse(localStorage.getItem("xtremepush.data")).id)},computed:M({},Object(c["b"])({user:"user"}),{iframeUrl:function(){var t="https://pro-euw2-app.vocohub.com/sales-demo-sports-betting/main/app/index.html";return void 0!==this.user.data.email&&null!==this.user.data.email&&this.deviceId?"".concat(t,"?email=").concat(this.user.data.email,"&device_id=").concat(this.deviceId,"#/app/start"):null}})},X=U,T=(a("3212"),Object(p["a"])(X,R,G,!1,null,"22a20aaf",null)),z=T.exports;r["a"].use(_["a"]);var q=new _["a"]({routes:[{path:"/",name:"Home",component:z},{path:"/login",name:"login",component:S,meta:{hideForAuth:!0}},{path:"/register",name:"Register",component:A,meta:{hideForAuth:!0}}]});q.beforeEach(function(t,e,a){u.a.auth().onAuthStateChanged(function(e){t.matched.some(function(t){return t.meta.hideForAuth})&&e?a({path:"/"}):a()})}),q.beforeEach(function(t,e,a){var r=u.a.auth().currentUser,s=t.matched.some(function(t){return t.meta.requiresAuth});s&&!r?a("/login"):a()});var F=q;r["a"].use(c["a"]);var J=new c["a"].Store({state:{user:{loggedIn:!1,data:null}},getters:{user:function(t){return t.user}},mutations:{SET_LOGGED_IN:function(t,e){t.user.loggedIn=e},SET_USER:function(t,e){t.user.data=e}},actions:{fetchUser:function(t,e){var a=t.commit;a("SET_LOGGED_IN",null!==e),a("SET_USER",e?{displayName:e.displayName,email:e.email}:null)}}});r["a"].config.productionTip=!1;var H={apiKey:"AIzaSyB0baJ7Rc7V8FWtJE6Qkb_Zua_MayfSpxY",authDomain:"xp-firebase-auth.firebaseapp.com",databaseURL:"https://xp-firebase-auth.firebaseio.com",projectId:"xp-firebase-auth",storageBucket:"xp-firebase-auth.appspot.com",messagingSenderId:"801792621127",appId:"1:801792621127:web:8724063123590584a88f62",measurementId:"G-2NEKZYLG37"};d["initializeApp"](H),d["auth"]().onAuthStateChanged(function(t){J.dispatch("fetchUser",t)}),new r["a"]({router:F,store:J,render:function(t){return t(y)}}).$mount("#app")},6281:function(t,e,a){},"779c":function(t,e,a){"use strict";var r=a("9af0"),s=a.n(r);s.a},"7cfe":function(t,e,a){t.exports="img/card3.8edd92bb.png"},"9af0":function(t,e,a){},a306:function(t,e,a){},aaac:function(t,e,a){t.exports="img/racing.1f4b776d.png"},b0a8:function(t,e,a){t.exports="img/golf.6839525c.png"},cf76:function(t,e,a){"use strict";var r=a("6281"),s=a.n(r);s.a},f9c7:function(t,e,a){t.exports="img/football.e086260b.png"}});
//# sourceMappingURL=app.9b037aa2.js.map
