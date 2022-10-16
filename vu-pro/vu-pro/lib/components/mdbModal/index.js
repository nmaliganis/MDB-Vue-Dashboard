(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t(require("vue")):"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["mdbModal"]=t(require("vue")):e["mdbModal"]=t(e["Vue"])})("undefined"!==typeof self?self:this,(function(e){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="fb15")}({4557:function(e,t,n){},"74b8":function(e,t,n){"use strict";var o=n("4557"),a=n.n(o);a.a},"8bbf":function(t,n){t.exports=e},c7db:function(e,t,n){"use strict";var o=n("8bbf");o="default"in o?o["default"]:o;var a="2.2.2",r=/^2\./.test(o.version);r||o.util.warn("VueClickaway "+a+" only supports Vue 2.x, and does not support Vue "+o.version);var i="_vue_clickaway_handler";function s(e,t,n){l(e);var o=n.context,a=t.value;if("function"===typeof a){var r=!1;setTimeout((function(){r=!0}),0),e[i]=function(t){var n=t.path||(t.composedPath?t.composedPath():void 0);if(r&&(n?n.indexOf(e)<0:!e.contains(t.target)))return a.call(o,t)},document.documentElement.addEventListener("click",e[i],!1)}}function l(e){document.documentElement.removeEventListener("click",e[i],!1),delete e[i]}var d={bind:s,update:function(e,t){t.value!==t.oldValue&&s(e,t)},unbind:l},c={directives:{onClickaway:d}};t.version=a,t.directive=d,t.mixin=c},f6fd:function(e,t){(function(e){var t="currentScript",n=e.getElementsByTagName("script");t in e||Object.defineProperty(e,t,{get:function(){try{throw new Error}catch(o){var e,t=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(o.stack)||[!1])[1];for(e in n)if(n[e].src==t||"interactive"==n[e].readyState)return n[e];return null}}})})(document)},fb15:function(e,t,n){"use strict";var o;(n.r(t),"undefined"!==typeof window)&&(n("f6fd"),(o=window.document.currentScript)&&(o=o.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(n.p=o[1]));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"},on:{enter:e.enter,"after-enter":e.afterEnter,"before-leave":e.beforeLeave,"after-leave":e.afterLeave}},[e.show?n(e.tag,{tag:"component",class:e.wrapperClass,on:{click:function(t){return t.target!==t.currentTarget?null:e.away(t)}}},[n("div",{class:e.dialogClass,attrs:{role:"document"}},[n("div",{class:e.contentClass,style:e.computedContentStyle},[e._t("default")],2)])]):e._e()],1)},r=[],i=n("c7db"),s={props:{tag:{type:String,default:"div"},size:{type:String},side:{type:Boolean,default:!1},position:{type:String},fullHeight:{type:Boolean,default:!1},frame:{type:Boolean,default:!1},removeBackdrop:{type:Boolean,default:!1},centered:{type:Boolean,default:!1},cascade:{type:Boolean,default:!1},danger:{type:Boolean,default:!1},info:{type:Boolean,default:!1},success:{type:Boolean,default:!1},warning:{type:Boolean,default:!1},tabs:{type:Boolean,default:!1},avatar:{type:Boolean,default:!1},elegant:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},bgSrc:{type:String,default:""},direction:{type:String,default:"top"},show:{type:Boolean,default:!0},scrollable:{type:Boolean,default:!1}},beforeMount:function(){"right"===this.direction?this.dialogTransform="translate(25%,0)":"bottom"===this.direction?this.dialogTransform="translate(0,25%)":"left"===this.direction&&(this.dialogTransform="translate(-25%,0)")},data:function(){return{dialogTransform:"translate(0,-25%)"}},methods:{away:function(){this.removeBackdrop||this.$emit("close",this)},enter:function(e){e.style.opacity=0,e.childNodes[0].style.transform=this.dialogTransform,this.$emit("show",this)},afterEnter:function(e){var t=this;e.style.opacity=1,e.childNodes[0].style.transform="translate(0,0)",setTimeout((function(){t.$emit("shown",t)}),400)},beforeLeave:function(e){this.$parent.$emit("hide",this),e.style.opacity=0,e.childNodes[0].style.transform=this.dialogTransform},afterLeave:function(){this.$parent.$emit("hidden",this)}},computed:{wrapperClass:function(){return["modal",this.removeBackdrop&&"modal-without-backdrop"]},dialogClass:function(){return["modal-dialog",this.size&&"modal-"+this.size,this.side&&"modal-side",this.fullHeight&&"modal-full-height",this.frame&&"modal-frame",this.position?"modal-"+this.position:"",this.centered&&"modal-dialog-centered",(this.cascade||this.tabs)&&"cascading-modal",this.danger&&"modal-notify modal-danger",this.info&&"modal-notify modal-info",this.success&&"modal-notify modal-success",this.warning&&"modal-notify modal-warning",this.avatar&&"modal-avatar cascading-modal",this.dark&&"form-dark",this.scrollable&&"modal-dialog-scrollable"]},contentClass:function(){return["modal-content",this.tabs&&"modal-c-tabs",this.elegant&&"form-elegant",this.dark&&"card card-image"]},computedContentStyle:function(){return!!this.bgSrc&&{"background-image":'url("'.concat(this.bgSrc,'")')}}},mixins:[i["mixin"]]},l=s,d=l;n("74b8");function c(e,t,n,o,a,r,i,s){var l,d="function"===typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),o&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),i?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},d._ssrRegister=l):a&&(l=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(d.functional){d._injectStyles=l;var c=d.render;d.render=function(e,t){return l.call(t),c(e,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:d}}var u=c(d,a,r,!1,null,"226c1102",null),f=u.exports;n.d(t,"mdbModal",(function(){return s}));t["default"]=f}})["default"]}));
//# sourceMappingURL=index.umd.min.js.map