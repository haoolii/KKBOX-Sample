(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/KKBOX-Sample/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},1:function(t,e){},"22d7":function(t,e,a){"use strict";var n=a("be87"),r=a.n(n);r.a},"2e7f":function(t,e,a){},"392c":function(t,e,a){"use strict";var n=a("3a7c"),r=a.n(n);r.a},"3a7c":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("appNav"),a("appHeader"),a("rank"),a("playList"),a("styleList"),a("modal"),a("appFooter")],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav"},[a("nav",{staticClass:"navbar navbar-expand-lg w-100 navbar-dark "},[a("div",{staticClass:"container"},[a("a",{staticStyle:{"text-decoration":"none"},attrs:{href:""}},[t._v("KKBox Sample")]),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[t._m(0),a("div",{staticClass:"form-inline my-2 my-lg-0"},[a("input",{staticClass:"form-control mr-sm-2",attrs:{type:"text",placeholder:"請輸入關鍵字"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}}})])])])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item active"})])}],c={data:function(){return{apiData:[]}}},l=c,u=(a("9285"),a("2877")),d=Object(u["a"])(l,s,o,!1,null,"dc133850",null),f=d.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[t._m(0),a("div",{staticClass:"row"},t._l(t.hotList,(function(e){return a("div",{key:e.description,staticClass:"card mb-2 ",staticStyle:{width:"18rem"}},[a("img",{staticClass:"card-img-top",attrs:{src:e.images[0].url}}),a("div",{staticClass:"card-body p-2"},[a("p",{staticClass:"card-text text-center "},[t._v(" "+t._s(e.title)+" ")])])])})),0)])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("h2",{staticClass:"  font-weight-bold"},[t._v("熱門歌單")])])}],h={data:function(){return{hotList:""}},created:function(){var t=this;this.$http.get("https://api.kkbox.com//v1.1/new-hits-playlists?territory=TW",this.$store.state.config).then((function(e){t.hotList=e.data.data}))}},m=h,b=(a("392c"),Object(u["a"])(m,p,v,!1,null,"2767fe42",null)),_=b.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[t._m(0),a("div",{},[a("hr"),t._l(t.rankList,(function(e,n){return a("div",{key:e.description,staticClass:"block"},[a("div",{staticClass:"rank"},[a("p",[t._v(t._s(n+1))])]),a("div",{staticClass:"img-block"},[a("img",{attrs:{src:e.album.images[0].url,alt:""}})]),a("div",{staticClass:"description"},[a("p",{staticClass:"songName"},[t._v(t._s(e.name))]),a("p",{staticClass:"artist"},[t._v(t._s(e.album.artist.name))])])])}))],2)])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("h2",{staticClass:"  font-weight-bold"},[t._v("最新歌曲")])])}],C={data:function(){return{rankList:[]}},created:function(){var t=this;this.$http.get("https://api.kkbox.com/v1.1/charts/LZPhK2EyYzN15dU-PT/tracks?territory=TW&limit=5",this.$store.state.config).then((function(e){console.log(e),t.rankList=e.data.data}))}},x=C,k=(a("b8fb"),Object(u["a"])(x,g,y,!1,null,"5625bdbf",null)),w=k.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[t._m(0),a("div",{staticClass:"row"},t._l(t.categories,(function(e){return a("div",{key:e.description,staticClass:"card mb-2 ",staticStyle:{width:"18rem"}},[a("img",{staticClass:"card-img-top",attrs:{src:e.images[0].url}}),a("div",{staticClass:"card-body p-2"},[a("p",{staticClass:"card-text text-center "},[t._v(" "+t._s(e.title)+" ")])])])})),0)])},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("h2",{staticClass:"  font-weight-bold"},[t._v("歌單類別")])])}],E={data:function(){return{categories:""}},created:function(){var t=this;this.$http.get("https://api.kkbox.com/v1.1/featured-playlist-categories?territory=TW&limit=8",this.$store.state.config).then((function(e){t.categories=e.data.data}))}},$=E,K=(a("8c3f"),Object(u["a"])($,O,j,!1,null,"890f45f8",null)),S=K.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},L=[],A={},B=A,M=(a("22d7"),Object(u["a"])(B,P,L,!1,null,null,null)),N=M.exports,T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("div",[a("p",[t._v("KKBox API Sample")]),a("a",{attrs:{href:"","data-toggle":"modal","data-target":"#exampleModalCenter"}},[t._v("立即試聽")]),a("div",{staticClass:"modal fade",attrs:{id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"title"},[a("h5",{},[t._v(" 立即試聽 ")])]),a("iframe",{attrs:{src:"https://widget.kkbox.com/v1/?id=DZrC8m29ciOFY2JAm3&type=playlist"}})])])])])])}],D={},G=D,F=(a("afd8"),Object(u["a"])(G,T,X,!1,null,"239302b3",null)),J=F.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h3",[t._v("平台簡介")]),a("p",[t._v(" 該專案是採用 KKBOX OPEN API + Vue Cli 3 所製作，僅限前端開發練習 DEMO 用。 ")])]),a("div",{staticClass:"col"},[a("h3",[t._v("平台簡介")]),a("p",[t._v(" 該專案是採用 KKBOX OPEN API + Vue Cli 3 所製作，僅限前端開發練習 DEMO 用。 ")])]),a("div",{staticClass:"col"},[a("h3",[t._v("作者")]),a("p",[t._v(" 陳健誌 KenZhi ")])])])])])}],Z={},z=Z,H=(a("74cd"),Object(u["a"])(z,I,W,!1,null,"ed03de80",null)),V=H.exports,Y={components:{modal:N,appNav:f,playList:_,styleList:S,rank:w,appHeader:J,appFooter:V}},q=Y,U=(a("034f"),Object(u["a"])(q,r,i,!1,null,null,null)),Q=U.exports,R=a("9483");Object(R["a"])("".concat("/KKBOX-Sample/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var tt=a("8c4f");n["a"].use(tt["a"]);var et=[],at=new tt["a"]({mode:"history",base:"/KKBOX-Sample/",routes:et}),nt=at,rt=a("2f62");n["a"].use(rt["a"]);var it=new rt["a"].Store({state:{token:"xueL7rjb0dGlD-GdJXx4GA==",config:{headers:{Authorization:"Bearer xueL7rjb0dGlD-GdJXx4GA=="}}},mutations:{},actions:{},modules:{}}),st=(a("1157"),a("4989"),a("f9e3"),a("28dd"));n["a"].use(st["a"]),n["a"].config.productionTip=!1,new n["a"]({router:nt,store:it,render:function(t){return t(Q)}}).$mount("#app")},"74cd":function(t,e,a){"use strict";var n=a("c465"),r=a.n(n);r.a},"85ec":function(t,e,a){},"8c3f":function(t,e,a){"use strict";var n=a("b594"),r=a.n(n);r.a},9285:function(t,e,a){"use strict";var n=a("da95"),r=a.n(n);r.a},afd8:function(t,e,a){"use strict";var n=a("fe1a"),r=a.n(n);r.a},b594:function(t,e,a){},b8fb:function(t,e,a){"use strict";var n=a("2e7f"),r=a.n(n);r.a},be87:function(t,e,a){},c465:function(t,e,a){},da95:function(t,e,a){},fe1a:function(t,e,a){}});
//# sourceMappingURL=app.9ed488a4.js.map