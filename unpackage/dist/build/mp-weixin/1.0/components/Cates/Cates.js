require('../../common/runtime.js');require('../../common/vendor.js');require('../../common/main.js');(global["webpackJsonp_1.0"]=global["webpackJsonp_1.0"]||[]).push([["components/Cates/Cates"],{"39fa":function(t,n,e){"use strict";e.r(n);var r=e("c36c"),u=e("ed07");for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);e("e5a6");var c,o=e("f0c5"),i=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,"222c8576",null,!1,r["a"],c);n["default"]=i.exports},5035:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(e("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function a(t,n,e,r,u,a,c){try{var o=t[a](c),i=o.value}catch(f){return void e(f)}o.done?n(i):Promise.resolve(i).then(r,u)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(r,u){var c=t.apply(n,e);function o(t){a(c,r,u,o,i,"next",t)}function i(t){a(c,r,u,o,i,"throw",t)}o(void 0)}))}}var o={name:"Cates",data:function(){return{catesList:[]}},onLoad:function(){this.getCateList()},methods:{getCateList:function(){var t=this;return c(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$request({url:"/home/catitems"}).then((function(n){t.catesList=n,console.log(t.catesList)}));case 2:case"end":return n.stop()}}),n)})))()}}};n.default=o},c36c:function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}));var u=function(){var t=this,n=t.$createElement;t._self._c},a=[]},e5a6:function(t,n,e){"use strict";var r=e("f351"),u=e.n(r);u.a},ed07:function(t,n,e){"use strict";e.r(n);var r=e("5035"),u=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=u.a},f351:function(t,n,e){}}]);
;(global["webpackJsonp_1.0"] = global["webpackJsonp_1.0"] || []).push([
    'components/Cates/Cates-create-component',
    {
        'components/Cates/Cates-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("39fa"))
        })
    },
    [['components/Cates/Cates-create-component']]
]);