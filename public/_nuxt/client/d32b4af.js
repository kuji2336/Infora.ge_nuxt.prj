(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{442:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhciIgZGF0YS1pY29uPSJjbG9jayIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLWNsb2NrIGZhLXctMTYiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHptMCA0NDhjLTExMC41IDAtMjAwLTg5LjUtMjAwLTIwMFMxNDUuNSA1NiAyNTYgNTZzMjAwIDg5LjUgMjAwIDIwMC04OS41IDIwMC0yMDAgMjAwem02MS44LTEwNC40bC04NC45LTYxLjdjLTMuMS0yLjMtNC45LTUuOS00LjktOS43VjExNmMwLTYuNiA1LjQtMTIgMTItMTJoMzJjNi42IDAgMTIgNS40IDEyIDEydjE0MS43bDY2LjggNDguNmM1LjQgMy45IDYuNSAxMS40IDIuNiAxNi44TDMzNC42IDM0OWMtMy45IDUuMy0xMS40IDYuNS0xNi44IDIuNnoiPjwvcGF0aD48L3N2Zz4="},443:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhciIgZGF0YS1pY29uPSJhcnJvdy1hbHQtY2lyY2xlLXJpZ2h0IiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtYXJyb3ctYWx0LWNpcmNsZS1yaWdodCBmYS13LTE2IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTUwNCAyNTZDNTA0IDExOSAzOTMgOCAyNTYgOFM4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4em0tNDQ4IDBjMC0xMTAuNSA4OS41LTIwMCAyMDAtMjAwczIwMCA4OS41IDIwMCAyMDAtODkuNSAyMDAtMjAwIDIwMFM1NiAzNjYuNSA1NiAyNTZ6bTcyIDIwdi00MGMwLTYuNiA1LjQtMTIgMTItMTJoMTE2di02N2MwLTEwLjcgMTIuOS0xNiAyMC41LTguNWw5OSA5OWM0LjcgNC43IDQuNyAxMi4zIDAgMTdsLTk5IDk5Yy03LjYgNy42LTIwLjUgMi4yLTIwLjUtOC41di02N0gxNDBjLTYuNiAwLTEyLTUuNC0xMi0xMnoiPjwvcGF0aD48L3N2Zz4="},444:function(t,e,n){"use strict";var r=new Map;var o="undefined"==typeof window;function d(component,t){return Object.assign({mixins:[{beforeCreate:function(){this.cleanupHandlers=[];var t=function(){var t=function(){},e=new Promise((function(e){t=e}));return{hydrate:t,hydrationPromise:e}}(),e=t.hydrate,n=t.hydrationPromise;this.Nonce=function(t){var component=t.component,e=t.hydrationPromise;return o?component:function(){return e.then((function(){return function(t){return"function"==typeof t}(t=component)?t().then((function(t){return t.default})):t;var t}))}}({component:component,hydrationPromise:n}),this.hydrate=e,this.hydrationPromise=n},beforeDestroy:function(){this.cleanup()},mounted:function(){var t=this;if(this.$el.nodeType!==Node.COMMENT_NODE){if(!this.never){if(this.whenVisible){var e=function(t){if("undefined"==typeof IntersectionObserver)return null;var e=JSON.stringify(t);if(r.has(e))return r.get(e);var n=new IntersectionObserver((function(t){t.forEach((function(t){(t.isIntersecting||t.intersectionRatio>0)&&t.target.hydrate&&t.target.hydrate()}))}),t);return r.set(e,n),n}(!0!==this.whenVisible?this.whenVisible:void 0);if(!e)return void this.hydrate();this.$el.hydrate=this.hydrate;var n=function(){return e.unobserve(t.$el)};return this.cleanupHandlers.push(n),this.hydrationPromise.then(n),void e.observe(this.$el)}if(this.whenIdle){if(!("requestIdleCallback"in window)||!("requestAnimationFrame"in window))return void this.hydrate();var o=requestIdleCallback((function(){requestAnimationFrame(t.hydrate)}),{timeout:this.idleTimeout}),d=function(){return cancelIdleCallback(o)};this.cleanupHandlers.push(d),this.hydrationPromise.then(d)}if(this.interactionEvents&&this.interactionEvents.length){var c={capture:!0,once:!0,passive:!0};this.interactionEvents.forEach((function(e){t.$el.addEventListener(e,t.hydrate,c);t.cleanupHandlers.push((function(){t.$el.removeEventListener(e,t.hydrate,c)}))}))}}}else this.hydrate()},methods:{cleanup:function(){this.cleanupHandlers.forEach((function(t){return t()}))}},render:function(t){return t(this.Nonce,{attrs:this.$attrs,on:this.$listeners,scopedSlots:this.$scopedSlots},this.$slots.default)}}]},t)}var c=d({render:function(){return this.$slots.default}},{props:{idleTimeout:{default:2e3,type:Number},never:{type:Boolean},onInteraction:{type:[Array,Boolean,String]},triggerHydration:{default:!1,type:Boolean},whenIdle:{type:Boolean},whenVisible:{type:[Boolean,Object]}},computed:{interactionEvents:function(){return this.onInteraction?!0===this.onInteraction?["focus"]:Array.isArray(this.onInteraction)?this.onInteraction:[this.onInteraction]:[]}},watch:{triggerHydration:{immediate:!0,handler:function(t){t&&this.hydrate()}}}});e.a=c},459:function(t,e,n){var content=n(481);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("136f8786",content,!0,{sourceMap:!1})},480:function(t,e,n){"use strict";n(459)},481:function(t,e,n){var r=n(23)(!1);r.push([t.i,'.box-wrapper-main[data-v-7e75d673]{margin-top:35px;margin-bottom:35px;transition:.3s}.header[data-v-7e75d673]{padding:100px 5px}.publication-date[data-v-7e75d673]{position:absolute;top:0;right:0;background-color:#fff;padding:1px 3px;font-size:13px;border-radius:4px;border-bottom:2px solid #ffc107}.card-text[data-v-7e75d673]{white-space:normal;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;line-height:24px;font-family:"mtavruli"}.header[data-v-7e75d673]{display:flex;justify-content:center;padding:60px 10px}.header h1[data-v-7e75d673]{font-family:"mtavruli"}.card-body[data-v-7e75d673]{padding:20px 10px}.card-body .card-title[data-v-7e75d673]{font-size:18px;font-family:"rioni-bpg";white-space:normal;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;line-height:28px}.text-wrapper[data-v-7e75d673]{padding:10px 5px}.box-news[data-v-7e75d673]{padding-bottom:20px}.main-box__inner[data-v-7e75d673]{box-shadow:0 3px 6px rgba(32,121,118,.2);cursor:pointer;transition:.3s;background-color:#fff}.main-box__inner[data-v-7e75d673]:hover{transform:scale(1.05);transition:.3s}.img-wrapper[data-v-7e75d673]{height:200px}.img-wrapper img[data-v-7e75d673]{height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.main-box__inner[data-v-7e75d673]{height:100%}.card[data-v-7e75d673]{border:unset}.img-wrapper[data-v-7e75d673]{position:relative}.publication-hour p[data-v-7e75d673],.see-more-btn[data-v-7e75d673]{font-size:14px}.see-more-btn[data-v-7e75d673]{width:100%}.see-more-btn p[data-v-7e75d673]:first-child{border-bottom:2px solid #ffc107;font-family:"mtavruli"}',""]),t.exports=r},507:function(t,e,n){"use strict";n.r(e);n(17),n(25),n(74);var r=n(31),o=n(65),d={components:{LazyHydrate:n(444).a,asideContent:function(){return n.e(3).then(n.bind(null,495))}},data:function(){return{}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,o.a.collection(t.query.category).get();case 3:return e.sent.docs.map((function(t){n.push({news:t.data().News,newsId:t.id})})),e.abrupt("return",{allPostsByCategor:n});case 6:case"end":return e.stop()}}),e)})))()},computed:{setHeader:function(){return"world-news"===this.$route.query.category?"მსოფლიო ამბები":"all"===this.$route.query.category?"სხვადასხვა":"politics"===this.$route.query.category?"პოლიტიკა":"art"===this.$route.query.category?"ხელოვნება":"ზოდიაქო"}},head:function(){return{title:this.setHeader,meta:[{hid:"description",name:"description",content:this.setHeader}]}}},c=(n(480),n(81)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"header"},[r("h1",[t._v(t._s(t.setHeader))])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-9 col-md-12 col-12"},[r("div",[r("div",{staticClass:"row"},t._l(t.allPostsByCategor,(function(e,o){return r("div",{key:o,staticClass:"box-wrapper-main col-lg-4 col-xl-4 col-md-6 col-12"},[r("LazyHydrate",{attrs:{"when-visible":""}},[r("nuxt-link",{attrs:{to:{path:"/posts/news-detail/"+e.newsId,query:{category:e.news[0].selected}}}},t._l(e.news,(function(e){return r("div",{key:e.id,staticClass:"main-box__inner"},[r("div",{staticClass:"card"},[r("div",{staticClass:"img-wrapper"},[r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"},{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"card-img-top",attrs:{"data-src":e.imgUrl,alt:e.title,title:e.title,width:"640",height:"360"}}),t._v(" "),r("div",{staticClass:"publication-date"},[r("p",[t._v(t._s(e.published_at))])])]),t._v(" "),r("div",{staticClass:"card-body"},[r("p",{staticClass:"card-title"},[t._v(t._s(e.title))]),t._v(" "),r("div",{staticClass:"text-wrapper"},[r("p",{staticClass:"card-text",domProps:{innerHTML:t._s(e.descr)}})]),t._v(" "),r("div",{staticClass:"publication-hour d-flex align-items-center"},[r("div",{staticClass:"publication-hr__inner d-flex align-items-center"},[r("p",[r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":n(442),alt:"clock",width:"20",height:"20"}})]),t._v(" "),r("p",{staticClass:"ml-2 mt-1"},[t._v(t._s(e.date))])]),t._v(" "),r("div",{staticClass:"see-more-btn d-flex align-items-center justify-content-end"},[r("p",{staticClass:"mr-2 mt-1"},[t._v("წაიკითხე")]),t._v(" "),r("p",[r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-not-lazy":"","data-src":n(443),alt:"see-more",width:"20",height:"20"}})])])])])])])})),0)],1)],1)})),0)])]),t._v(" "),r("div",{staticClass:"col-lg-3 col-md-12 col-12"},[r("LazyHydrate",{attrs:{"when-visible":""}},[r("asideContent")],1)],1)])])}),[],!1,null,"7e75d673",null);e.default=component.exports}}]);