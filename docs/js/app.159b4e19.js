(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],v=0,p=[];v<o.length;v++)s=o[v],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"0fe0":function(t,e,a){"use strict";var n=a("cd8e"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"flex-containerNav"},[n("h1",{staticClass:"ninety"},[n("router-link",{attrs:{to:"/"}},[n("img",{staticClass:"logo",attrs:{src:a("5a09")}})])],1),n("router-link",{staticClass:"ten about",attrs:{to:"/About"}},[t._v("About")])],1),n("router-view")],1)},i=[],s=(a("034f"),a("2877")),o={},l=Object(s["a"])(o,r,i,!1,null,null,null),c=l.exports,u=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Home"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.findWine(e)}}},[a("div",{staticClass:"flex-container margin-bottom"},[a("div",[t._m(0),a("select",{directives:[{name:"model",rawName:"v-model",value:t.wine,expression:"wine"}],staticClass:"select-css",attrs:{name:"redWine",id:"redWine"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.wine=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"cabernet sauvignon"}},[t._v("Cabernet Sauvignon")]),a("option",{attrs:{value:"merlot"}},[t._v("Merlot")]),a("option",{attrs:{value:"pinot noir"}},[t._v("Pinot Noir")]),a("option",{attrs:{value:"bordeaux"}},[t._v("Bordeaux")]),a("option",{attrs:{value:"syrah"}},[t._v("Syrah")]),a("option",{attrs:{value:"malbec"}},[t._v("Malbec")]),a("option",{attrs:{value:"zinfandel"}},[t._v("Zinfandel")])])]),a("div",[a("label",{staticClass:"form-labels",attrs:{for:"whiteWine"}},[t._v("WHITE")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.wine,expression:"wine"}],staticClass:"select-css",attrs:{name:"whiteWine",id:"whiteWine"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.wine=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"pinto grigio"}},[t._v("Pinot Grigio")]),a("option",{attrs:{value:"chardonnay"}},[t._v("Chardonnay")]),a("option",{attrs:{value:"sauvignon blanc"}},[t._v("Sauvignon blanc")])])]),a("div",[a("label",{staticClass:"form-labels",attrs:{for:"sparklingWine"}},[t._v("SPARKLING")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.wine,expression:"wine"}],staticClass:"select-css",attrs:{name:"sparklingWine",id:"sparklingWine"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.wine=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"champagne"}},[t._v("Champagne")]),a("option",{attrs:{value:"cava"}},[t._v("Cava")]),a("option",{attrs:{value:"prosecco"}},[t._v("Prosecco")]),a("option",{attrs:{value:"sparkling wine"}},[t._v("Sparkling Wine")])])])]),a("div",{staticClass:"flex-container3 margin-bottom"},[a("div",[t._m(1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.maxPrice,expression:"maxPrice"}],attrs:{id:"max-price",name:"max-price",type:"text"},domProps:{value:t.maxPrice},on:{input:function(e){e.target.composing||(t.maxPrice=e.target.value)}}})]),a("button",{staticClass:"form-labels",attrs:{type:"submit"}},[a("span",{staticClass:"search-icon"},[a("font-awesome-icon",{attrs:{icon:"search"}})],1),a("span",{staticClass:"searchWord"},[t._v("SEARCH")])])])]),a("div",{staticClass:"rule"}),a("main",{staticClass:"wines-container"},[t.results&&t.results.length>0?a("ul",t._l(t.results,(function(e){return a("li",{key:e.id,staticClass:"wine-container"},[a("div",{staticClass:"flex-container"},[a("div",{staticClass:"twentyFive"},[a("img",{staticClass:"img",attrs:{src:e.imageUrl,alt:e.title}})]),a("div",{staticClass:"seventyFive"},[a("h2",[a("strong",[t._v(t._s(e.title))])]),a("span",{staticClass:"price"},[t._v(t._s(e.price))]),a("span",{staticClass:"rating"},[t._v(" Rating "),a("span",{staticClass:"inside-rating"},[t._v(t._s(Math.floor(100*e.averageRating))+"%")])]),a("span",{staticClass:"ratings"},[t._v(" Ratings "),a("strong",[t._v("x "+t._s(Math.floor(e.ratingCount)))])]),a("p",[t._v(t._s(e.description))])])])])})),0):t.results&&0==t.results.length?a("div",{staticClass:"no-results"},[a("h2",[t._v("No Wines Found")]),a("p",[t._v("Please adjust your search")])]):t._e(),t.errors&&t.errors.length>0?a("ul",{staticClass:"errors"},t._l(t.errors,(function(e){return a("li",{key:e},[t._v(t._s(e.message))])})),0):t._e()])])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"form-labels",attrs:{for:"redWine"}},[t._v(" RED "),a("i",{staticClass:"fas fa-angle-down"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"form-labels",attrs:{for:"max-price"}},[t._v("MAX PRICE "),a("strong",{staticClass:"fiveHundred"},[t._v("$")])])}],f=a("bc3a"),m=a.n(f),d={name:"Home",data:function(){return{results:null,errors:[],wine:"",maxPrice:""}},methods:{findWine:function(){var t=this;m.a.get("https://api.spoonacular.com/food/wine/recommendation",{params:{wine:this.wine,number:18,minRating:.8,maxPrice:this.maxPrice,apiKey:"2c010ee91b164e24a2c25a653e110615"}}).then((function(e){t.results=e.data.recommendedWines})).catch((function(e){t.errors.push(e)}))}}},_=d,g=(a("0fe0"),Object(s["a"])(_,v,p,!1,null,"43a46d36",null)),h=g.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"About"},[a("p",[t._v(t._s(t.about))])])},w=[],C={data:function(){return{about:""}}},y=C,x=Object(s["a"])(y,b,w,!1,null,null,null),P=x.exports;n["a"].use(u["a"]);var W=[{path:"/",name:"Home",component:h},{path:"/About",name:"About",component:P}],O=new u["a"]({routes:W}),j=O,k=a("ecee"),A=a("c074"),S=a("ad3d");k["c"].add(A["a"]),n["a"].component("font-awesome-icon",S["a"]),n["a"].config.productionTip=!1,new n["a"]({router:j,render:function(t){return t(c)}}).$mount("#app")},"5a09":function(t,e,a){t.exports=a.p+"img/wineTime.3604a7fa.svg"},"85ec":function(t,e,a){},cd8e:function(t,e,a){}});
//# sourceMappingURL=app.159b4e19.js.map