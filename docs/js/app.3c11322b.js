(function(t){function e(e){for(var i,s,r=e[0],l=e[1],c=e[2],v=0,p=[];v<r.length;v++)s=r[v],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,r=1;r<n.length;r++){var l=n[r];0!==a[l]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},o=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0240":function(t,e,n){"use strict";var i=n("c8e0"),a=n.n(i);a.a},"034f":function(t,e,n){"use strict";var i=n("85ec"),a=n.n(i);a.a},"3b85":function(t,e,n){},5237:function(t,e,n){"use strict";var i=n("ed61"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("c975"),n("a434"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"grey"},[i("nav",{staticClass:"flex-containerNav"},[i("h1",{staticClass:"ninety"},[i("router-link",{attrs:{to:"/"}},[i("img",{staticClass:"logo",attrs:{src:n("5a09")}})])],1),i("Menu",{directives:[{name:"show",rawName:"v-show",value:t.mobile,expression:"mobile"}]}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.desktop,expression:"desktop"}],staticClass:"ten about"},[i("router-link",{attrs:{to:"/Saved"}},[t._v("Wine Collection")]),t._v(" "),i("span",{staticClass:"separate"},[t._v("|")]),t._v(" "),i("router-link",{attrs:{to:"/About"}},[t._v("About")])],1)],1)]),i("router-view")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"overlay",attrs:{id:"myNav"},on:{click:t.closeNav}},[n("span",{staticClass:"closebtn",on:{click:t.closeNav}},[t._v("×")]),n("div",{staticClass:"overlay-content",on:{click:t.closeNav}},[n("router-link",{attrs:{to:"/"},on:{click:t.closeNav}},[t._v("Home")]),n("router-link",{attrs:{to:"/Saved"},on:{click:t.closeNav}},[t._v("Wine Collection")]),n("router-link",{attrs:{to:"/About"},on:{click:t.closeNav}},[t._v("About")])],1)]),n("span",{staticClass:"burger",on:{click:t.openNav}},[t._v("☰")])])},r=[],l={data:function(){return{}},methods:{openNav:function(){document.getElementById("myNav").style.height="100%"},closeNav:function(){document.getElementById("myNav").style.height="0%"}}},c=l,u=(n("0240"),n("2877")),v=Object(u["a"])(c,s,r,!1,null,"0906def7",null),p=v.exports,d={name:"App",components:{Menu:p},data:function(){return{mobile:!1,desktop:!1,windowWidth:0}},created:function(){window.addEventListener("resize",this.resize),this.resize()},destroyed:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){this.windowWidth=window.innerWidth,this.windowWidth>=900?(this.desktop=!0,this.mobile=!1):(this.desktop=!1,this.mobile=!0)}}},f=d,m=(n("034f"),Object(u["a"])(f,a,o,!1,null,null,null)),h=m.exports,_=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Home"}},[n("div",[n("form",{staticClass:"container",on:{submit:function(e){return e.preventDefault(),t.findWine(e)}}},[n("p",{staticClass:"ab-test"},[t._v("Select a wine and your max-price per bottle, then search to see a list of recommended wines")]),n("div",{staticClass:"flex-container margin-bottom"},[n("div",[t._m(0),n("select",{directives:[{name:"model",rawName:"v-model",value:t.wine,expression:"wine"}],staticClass:"select-css",attrs:{name:"redWine",id:"redWine"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.wine=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"cabernet sauvignon"}},[t._v("Cabernet Sauvignon")]),n("option",{attrs:{value:"merlot"}},[t._v("Merlot")]),n("option",{attrs:{value:"pinot noir"}},[t._v("Pinot Noir")]),n("option",{attrs:{value:"bordeaux"}},[t._v("Bordeaux")]),n("option",{attrs:{value:"syrah"}},[t._v("Syrah")]),n("option",{attrs:{value:"malbec"}},[t._v("Malbec")]),n("option",{attrs:{value:"zinfandel"}},[t._v("Zinfandel")])])]),n("div",[n("label",{staticClass:"form-labels",attrs:{for:"whiteWine"}},[t._v("WHITE")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.wine,expression:"wine"}],staticClass:"select-css",attrs:{name:"whiteWine",id:"whiteWine"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.wine=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"pinot grigio"}},[t._v("Pinot Grigio")]),n("option",{attrs:{value:"chardonnay"}},[t._v("Chardonnay")]),n("option",{attrs:{value:"sauvignon blanc"}},[t._v("Sauvignon blanc")]),n("option",{attrs:{value:"pinot gris"}},[t._v("Pinot Gris")])])]),n("div",[n("label",{staticClass:"form-labels",attrs:{for:"sparklingWine"}},[t._v("SPARKLING")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.wine,expression:"wine"}],staticClass:"select-css",attrs:{name:"sparklingWine",id:"sparklingWine"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.wine=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"champagne"}},[t._v("Champagne")]),n("option",{attrs:{value:"cava"}},[t._v("Cava")]),n("option",{attrs:{value:"prosecco"}},[t._v("Prosecco")]),n("option",{attrs:{value:"sparkling wine"}},[t._v("Sparkling Wine")])])])]),n("div",{staticClass:"flex-container3 margin-bottom"},[n("div",[t._m(1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.maxPrice,expression:"maxPrice"}],attrs:{id:"max-price",name:"max-price",type:"text"},domProps:{value:t.maxPrice},on:{input:function(e){e.target.composing||(t.maxPrice=e.target.value)}}})]),n("button",{staticClass:"form-labels searchWord",attrs:{type:"submit"},on:{click:t.googleClick}},[n("font-awesome-icon",{staticClass:"search-icon",attrs:{icon:"search"}}),t._v(" SEARCH ")],1)])]),n("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:t.spin,expression:"spin"}],staticClass:"fa-spin spinner",attrs:{icon:"circle-notch"}}),t.results&&t.results.length>0?n("div",{staticClass:"rule"}):t._e()],1),n("main",{staticClass:"wines-container"},[t.results&&t.results.length>0?n("ul",[n("div",{staticClass:"container"},[n("p",{staticClass:"filter-text"},[t._v("FILTER")]),n("button",{staticClass:"filter-btn",on:{click:t.high}},[t._v("$ high to low")]),n("button",{staticClass:"filter-btn",on:{click:t.low}},[t._v("$ low to high")]),n("button",{staticClass:"filter-btn",on:{click:t.highestRatings}},[t._v("Highest Rated")]),n("button",{staticClass:"filter-btn",on:{click:t.mostRatings}},[t._v("Rating Count")])]),t._l(t.results,(function(e){return n("li",{key:e.id,staticClass:"wine-container container"},[n("div",{staticClass:"flex-container"},[n("div",{staticClass:"twentyFive"},[n("img",{staticClass:"img",attrs:{src:e.imageUrl,alt:e.title}})]),n("div",{staticClass:"seventyFive"},[n("h2",[n("strong",[t._v(t._s(e.title))])]),n("span",{staticClass:"price flex"},[t._v(" $"+t._s(e.price)+" | "),n("a",{staticClass:"purchase",attrs:{target:"_blank",href:e.link}},[t._v("PURCHASE")]),t._v(" | "),n("span",{staticClass:"collection_btn",on:{click:function(n){return t.$store.wine_collection.addToCollection(e)}}},[t._v("Add to collection +")])]),n("span",{staticClass:"rating"},[t._v(" Rating "),n("span",{staticClass:"inside-rating"},[t._v(t._s(Math.floor(100*e.averageRating))+"%")])]),n("span",{staticClass:"ratings"},[t._v(" Ratings "),n("strong",[t._v("x "+t._s(Math.floor(e.ratingCount)))])]),n("p",[t._v(t._s(e.description))])])])])}))],2):t.results&&0==t.results.length?n("div",{staticClass:"no-results"},[n("h2",[t._v("No Wines Found")]),n("p",[t._v("Please adjust your search")])]):t._e(),t.errors&&t.errors.length>0?n("ul",{staticClass:"errors"},t._l(t.errors,(function(e){return n("li",{key:e},[t._v(t._s(e.message))])})),0):t._e()])])},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"form-labels",attrs:{for:"redWine"}},[t._v(" RED "),n("i",{staticClass:"fas fa-angle-down"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"form-labels",attrs:{for:"max-price"}},[t._v(" MAX PRICE "),n("strong",{staticClass:"fiveHundred"},[t._v("$")])])}],b=n("bc3a"),C=n.n(b),y={name:"Home",data:function(){return{results:null,errors:[],wine:"",maxPrice:"",spin:!1}},methods:{findWine:function(){var t=this;this.spin=!0,C.a.get("https://api.spoonacular.com/food/wine/recommendation",{params:{wine:this.wine,number:18,minRating:.8,maxPrice:this.maxPrice,apiKey:"2c010ee91b164e24a2c25a653e110615"}}).then((function(e){t.results=t.processData(e.data.recommendedWines),t.spin=!1})).catch((function(e){t.spin=!1,t.errors.push(e)}))},googleClick:function(){this.$ga.event({eventCategory:"mainApp",eventAction:"click",eventLabel:"wine_click",eventValue:1})},high:function(){return this.results.sort((function(t,e){return e.price-t.price}))},low:function(){return this.results.sort((function(t,e){return t.price-e.price}))},highestRatings:function(){return this.results.sort((function(t,e){return e.averageRating-t.averageRating}))},mostRatings:function(){return this.results.sort((function(t,e){return e.ratingCount-t.ratingCount}))},processData:function(t){for(var e in t)t[e].price=parseFloat(t[e].price.substring(1));return t}}},k=y,x=(n("62ac"),Object(u["a"])(k,g,w,!1,null,"f47f42a0",null)),S=x.exports,N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"About"}},[n("div",{staticClass:"aboutText"},[n("h2",[t._v("About")]),n("p",[t._v(" This wine recommendation app was built with "),n("a",{attrs:{target:"_blank",href:"https://vuejs.org/"}},[t._v("Vue.js")]),t._v(" for the final project of spring quarter 2020 in the "),n("a",{attrs:{target:"_blank",href:"https://www.seattleu.edu/ncs/web-development/"}},[t._v("WATS program")]),t._v(" at Seattle University. The web app allows for two user inputs – the type of wine and a max-price point. After clicking the search button, the user can filter their search results by price, rating or review count. In the search results each recommended wine includes: an image (if available), a title, a price, a link to purchase, a rating, the amount of ratings and a description. Wine Time is made possible through requests from the "),n("a",{attrs:{target:"_blank",href:"https://spoonacular.com/food-api"}},[t._v("spoonacular API")]),t._v(". Enjoy! ")])])])}],P=(n("83d7"),{}),A=Object(u["a"])(P,N,W,!1,null,"550bd00a",null),O=A.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"saved",attrs:{id:"Saved"}},[n("div",{staticClass:"container wine-list"},[n("h2",[t._v("Wine Collection")]),t.$store.wine_collection.collection.length>0?n("ol",t._l(t.$store.wine_collection.collection,(function(e,i){return n("li",{key:i},[n("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.title))]),t._v(" "),n("font-awesome-icon",{staticClass:"exit",attrs:{icon:"times"},on:{click:function(n){return t.$store.wine_collection.removeItem(e)}}})],1)})),0):t._e()])])},j=[],$={data:function(){return{close:!1}}},R=$,I=(n("5237"),Object(u["a"])(R,E,j,!1,null,"3dc03192",null)),T=I.exports;i["a"].use(_["a"]);var M=[{path:"/",name:"Home",component:S},{path:"/About",name:"About",component:O},{path:"/Saved",name:"Saved",component:T}],H=new _["a"]({routes:M}),L=H,z=n("0284"),F=n.n(z),J=n("ecee"),D=n("c074"),U=n("ad3d");J["c"].add(D["b"],D["a"],D["c"]),i["a"].component("font-awesome-icon",U["a"]),i["a"].config.productionTip=!1,i["a"].use(F.a,{id:"UA-167943063-1",router:L});var B=i["a"].observable({wine_collection:{collection:[],addToCollection:function(t){-1===B.wine_collection.collection.indexOf(t)?(B.wine_collection.collection.push(t),localStorage.setItem("wine-collection",JSON.stringify(B.wine_collection.collection))):console.log("Item is already in collection.")},removeItem:function(t){B.wine_collection.collection.splice(B.wine_collection.collection.indexOf(t),1),localStorage.setItem("wine-collection",JSON.stringify(B.wine_collection.collection))},onLoadFunction:function(){var t=JSON.parse(localStorage.getItem("wine-collection"));t?B.wine_collection.collection=t:localStorage.setItem("wine-collection",JSON.stringify(B.wine_collection.collection))}}});i["a"].prototype.$store=B,new i["a"]({router:L,render:function(t){return t(h)}}).$mount("#app"),window.addEventListener("DOMContentLoaded",(function(){B.wine_collection.onLoadFunction()}))},"5a09":function(t,e,n){t.exports=n.p+"img/wineTime.e7e153e8.svg"},"62ac":function(t,e,n){"use strict";var i=n("3b85"),a=n.n(i);a.a},"83d7":function(t,e,n){"use strict";var i=n("b716"),a=n.n(i);a.a},"85ec":function(t,e,n){},b716:function(t,e,n){},c8e0:function(t,e,n){},ed61:function(t,e,n){}});
//# sourceMappingURL=app.3c11322b.js.map