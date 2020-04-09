/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{429:function(t,e,r){var content=r(435);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("cd386148",content,!0,{sourceMap:!1})},430:function(t,e,r){"use strict";r.d(e,"a",(function(){return k})),r.d(e,"c",(function(){return n.a})),r.d(e,"b",(function(){return R}));var n=r(2);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function f(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function d(t,e){y(t,e),Object.getOwnPropertyNames(e.prototype).forEach((function(r){y(t.prototype,e.prototype,r)})),Object.getOwnPropertyNames(e).forEach((function(r){y(t,e,r)}))}function y(t,e,r){(r?Reflect.getOwnMetadataKeys(e,r):Reflect.getOwnMetadataKeys(e)).forEach((function(n){var o=r?Reflect.getOwnMetadata(n,e,r):Reflect.getOwnMetadata(n,e);r?Reflect.defineMetadata(n,o,t,r):Reflect.defineMetadata(n,o,t)}))}var h={__proto__:[]}instanceof Array;function v(t){return function(e,r,n){var o="function"==typeof e?e:e.constructor;o.__decorators__||(o.__decorators__=[]),"number"!=typeof n&&(n=void 0),o.__decorators__.push((function(e){return t(e,r,n)}))}}function m(t,e){var r=e.prototype._init;e.prototype._init=function(){var e=this,r=Object.getOwnPropertyNames(t);if(t.$options.props)for(var n in t.$options.props)t.hasOwnProperty(n)||r.push(n);r.forEach((function(r){"_"!==r.charAt(0)&&Object.defineProperty(e,r,{get:function(){return t[r]},set:function(e){t[r]=e},configurable:!0})}))};var data=new e;e.prototype._init=r;var n={};return Object.keys(data).forEach((function(t){void 0!==data[t]&&(n[t]=data[t])})),n}var w=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function _(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.name=e.name||t._componentTag||t.name;var r=t.prototype;Object.getOwnPropertyNames(r).forEach((function(t){if("constructor"!==t)if(w.indexOf(t)>-1)e[t]=r[t];else{var n=Object.getOwnPropertyDescriptor(r,t);void 0!==n.value?"function"==typeof n.value?(e.methods||(e.methods={}))[t]=n.value:(e.mixins||(e.mixins=[])).push({data:function(){return c({},t,n.value)}}):(n.get||n.set)&&((e.computed||(e.computed={}))[t]={get:n.get,set:n.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return m(this,t)}});var o=t.__decorators__;o&&(o.forEach((function(t){return t(e)})),delete t.__decorators__);var f=Object.getPrototypeOf(t.prototype),y=f instanceof n.a?f.constructor:n.a,h=y.extend(e);return x(h,t,y),l()&&d(h,t),h}var O={prototype:!0,arguments:!0,callee:!0,caller:!0};function x(t,e,r){Object.getOwnPropertyNames(e).forEach((function(n){if(!O[n]){var c=Object.getOwnPropertyDescriptor(t,n);if(!c||c.configurable){var f,l,d=Object.getOwnPropertyDescriptor(e,n);if(!h){if("cid"===n)return;var y=Object.getOwnPropertyDescriptor(r,n);if(f=d.value,l=o(f),null!=f&&("object"===l||"function"===l)&&y&&y.value===d.value)return}0,Object.defineProperty(t,n,d)}}}))}function j(t){return"function"==typeof t?_(t):function(e){return _(e,t)}}j.registerHooks=function(t){w.push.apply(w,f(t))};var k=j;var C="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function P(t,e,r){C&&(Array.isArray(t)||"function"==typeof t||void 0!==t.type||(t.type=Reflect.getMetadata("design:type",e,r)))}function R(t){return void 0===t&&(t={}),function(e,r){P(t,e,r),v((function(e,r){(e.props||(e.props={}))[r]=t}))(e,r)}}},434:function(t,e,r){"use strict";var n=r(429);r.n(n).a},435:function(t,e,r){(e=r(14)(!1)).push([t.i,".TextCard{background-color:#fff;box-shadow:0px 0px 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:20px;margin-bottom:20px}.TextCard-Heading{font-size:24px;font-size:1.5rem;color:#4d4d4d;font-weight:bold;margin-bottom:12px}.TextCard-Body *{font-size:16px;font-size:1rem;color:#333;line-height:160%;font-weight:normal}.TextCard-Body a{word-break:break-all;color:#006ca8;text-decoration:none}",""]),t.exports=e},436:function(t,e,r){"use strict";var n=r(18),o=r(23),c=r(27),f=r(28),l=r(21),d=r(430),y=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},h=function(t){function e(){return Object(n.a)(this,e),Object(o.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(f.a)(e,t),e}(d.c);y([Object(d.b)({default:"",required:!1})],h.prototype,"title",void 0),y([Object(d.b)({default:"",required:!1})],h.prototype,"body",void 0);var v=h=y([d.a],h),m=(r(434),r(20)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"TextCard"},[t.title?r("h3",{staticClass:"TextCard-Heading"},[t._v("\n    "+t._s(t.title)+"\n  ")]):t._e(),t._v(" "),t.body?r("div",{staticClass:"TextCard-Body",domProps:{innerHTML:t._s(t.body)}}):t._e(),t._v(" "),t.$slots.default?r("div",{staticClass:"TextCard-Body"},[t._t("default")],2):t._e()])}),[],!1,null,null,null);e.a=component.exports},446:function(t,e,r){var content=r(523);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("5cb28b22",content,!0,{sourceMap:!1})},522:function(t,e,r){"use strict";var n=r(446);r.n(n).a},523:function(t,e,r){(e=r(14)(!1)).push([t.i,".Parent-Heading[data-v-93032a2e]{font-size:30px;font-size:1.875rem;font-weight:normal;color:#4d4d4d;margin-bottom:12px}a[data-v-93032a2e]{font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}a[data-v-93032a2e]:hover{text-decoration:underline}",""]),t.exports=e},573:function(t,e,r){"use strict";r.r(e);var n={components:{TextCard:r(436).a},data:function(){return{items:[{title:"1 感染予防・健康管理",body:'〇　まずは手洗いが大切です。外出先からの帰宅時や調理の前後、食事前などにこまめに石けんやアルコール消毒液などで手を洗いましょう。<br />　<a href="https://www.youtube.com/watch?v=6285_6IyO1M&feature=youtu.be" target="_blank" rel="noopener">【参考】感染症予防のための正しい手洗い方法（動画）<i aria-label="別タブで開く" role="img" class="v-icon notranslate mdi mdi-open-in-new theme--light" style="font-size: 15px; color: #006CA8;"></i></a> <br />〇　規則正しい生活を心がけ、日常の健康管理に十分気を付けてください。<br />〇　小児については、現時点で重症化しやすいとの報告はなく、新型コロナウイルス感染症については目安どおりの対応をお願いします。'},{title:"2 感染症を疑う場合の対応",body:'〇　風邪の症状や、37.5度以上の発熱が４日以上続いている、強いだるさ（倦怠感）、息苦しさ（呼吸困難）がある場合は、各保健所にご相談ください。<br />〇  「電話相談窓口について｜新型コロナウイルス感染症」<br /><a href="https://www.pref.chiba.lg.jp/kenfuku/kansenshou/corona-soudan.html" target="_blank" rel="noopener">https://www.pref.chiba.lg.jp/kenfuku/kansenshou/corona-soudan.html<i aria-label="別タブで開く" role="img" class="v-icon notranslate mdi mdi-open-in-new theme--light" style="font-size: 15px; color: #006CA8;"></i></a>'},{title:"3 その他",body:'〇  詳細は、各学校からのお知らせ等をご確認ください。<br />〇  「教育に関する情報｜新型コロナウイルス感染症」<br /><a href="https://www.pref.chiba.lg.jp/kouhou/homepage/2019/kyo-index.html" target="_blank" rel="noopener">https://www.pref.chiba.lg.jp/kouhou/homepage/2019/kyo-index.html<i aria-label="別タブで開く" role="img" class="v-icon notranslate mdi mdi-open-in-new theme--light" style="font-size: 15px; color: #006CA8;"></i></a>'}]}},head:function(){return{title:"お子様をお持ちの皆様へ"}}},o=(r(522),r(20)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Parent"},[e("h2",{staticClass:"Parent-Heading"},[this._v("\n    臨時休校中の新型コロナウイルス感染症対応についてのお願い\n  ")]),this._v(" "),this._l(this.items,(function(t,i){return e("div",{key:i},[e("TextCard",{attrs:{title:t.title,body:t.body}})],1)}))],2)}),[],!1,null,"93032a2e",null);e.default=component.exports}}]);