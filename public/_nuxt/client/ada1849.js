(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{280:function(t,e,r){var content=r(299);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(66).default)("7b245b4e",content,!0,{sourceMap:!1})},298:function(t,e,r){"use strict";r(280)},299:function(t,e,r){var n=r(65)(!1);n.push([t.i,'.carousel-item[data-v-71dbf39a]{height:500px}.carousel-item img[data-v-71dbf39a]{height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.overlay-test[data-v-71dbf39a]{position:absolute;top:0;left:0;width:100%;height:100%;background:#5c5959;opacity:.5}.main-slider-text[data-v-71dbf39a]{font-family:"firagomedium";font-size:25px;line-height:30px}.wrapper__inner[data-v-71dbf39a]{border-bottom:5px solid #ffc107}.slider-wrapper[data-v-71dbf39a]{position:relative}.pub-time[data-v-71dbf39a]{margin-top:15px;font-family:firagoregular}',""]),t.exports=n},302:function(t,e,r){"use strict";r.r(e);r(11),r(73);var n=r(27),o=r(111),l={data:function(){return{slide:0,sliding:null,sliderData:[]}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.collection("main-slider").get();case 2:return r=e.sent,e.abrupt("return",r.docs.map((function(e){return t.sliderData.push({news:e.data().News,newsId:e.id})})));case 4:case"end":return e.stop()}}),e)})))()},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}}},d=(r(298),r(51)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-2 mb-5"},[t.$fetchState.pending?r("p",[t._v("Fetching posts...")]):t.$fetchState.error?r("p",[t._v("\n    Error while fetching posts: "+t._s(t.$fetchState.error.message)+"\n  ")]):r("div",[r("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:0,controls:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.sliderData,(function(e,n){return r("div",{key:n},t._l(e.news,(function(e){return r("div",{key:e.id,staticClass:"slider-wrapper"},[r("b-carousel-slide",{attrs:{"img-src":e.imgUrl,alt:e.title,title:e.title}},[r("div",{staticClass:"wrapper"},[r("div",{staticClass:"wrapper__inner"},[r("h2",{staticClass:"main-slider-text"},[t._v("\n              "+t._s(e.title)+"\n             ")])])]),t._v(" "),r("div",{staticClass:"pub-time"},[r("p",[t._v(t._s(e.published_at))])])])],1)})),0)})),0)],1)])}),[],!1,null,"71dbf39a",null);e.default=component.exports}}]);