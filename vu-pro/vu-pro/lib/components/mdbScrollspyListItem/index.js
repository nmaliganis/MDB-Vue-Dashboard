(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["mdbScrollspyListItem"]=t():e["mdbScrollspyListItem"]=t()})("undefined"!==typeof self?self:this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="fb15")}({f6fd:function(e,t){(function(e){var t="currentScript",n=e.getElementsByTagName("script");t in e||Object.defineProperty(e,t,{get:function(){try{throw new Error}catch(r){var e,t=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack)||[!1])[1];for(e in n)if(n[e].src==t||"interactive"==n[e].readyState)return n[e];return null}}})})(document)},fb15:function(e,t,n){"use strict";var r;(n.r(t),"undefined"!==typeof window)&&(n("f6fd"),(r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(n.p=r[1]));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",staticClass:"nav-item"},[n("a",{class:e.className,attrs:{href:"#",role:"tab"}},[e._t("default")],2)])},i=[],c={props:{tag:{type:String,default:"li"},active:{type:Boolean,default:!1}},computed:{className:function(){return["nav-link",this.active&&"active"]}}},a=c,f=a;function u(e,t,n,r,o,i,c,a){var f,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),c?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(c)},u._ssrRegister=f):o&&(f=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(u.functional){u._injectStyles=f;var s=u.render;u.render=function(e,t){return f.call(t),s(e,t)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,f):[f]}return{exports:e,options:u}}var s=u(f,o,i,!1,null,"e06fb3c6",null),l=s.exports;n.d(t,"mdbScrollspyListItem",(function(){return c}));t["default"]=l}})["default"]}));
//# sourceMappingURL=index.umd.min.js.map