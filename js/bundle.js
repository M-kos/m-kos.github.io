!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=4)}([function(e,t,n){var r=n(1);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,r){var n,o,i,c={},l=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),s=(i={},function(e,t){if("function"==typeof e)return e();if(void 0===i[e]){var n=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}i[e]=n}return i[e]}),u=null,f=0,a=[],d=r(3);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=c[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(w(r.parts[i],t))}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(w(r.parts[i],t));c[r.id]={id:r.id,refs:1,parts:s}}}}function v(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function h(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=a[a.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),a.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,n);n.insertBefore(t,o)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=a.indexOf(e);0<=t&&a.splice(t,1)}function y(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return r.nc}();n&&(e.attrs.nonce=n)}return b(t,e.attrs),h(e,t),t}function b(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function w(t,e){var n,r,o,i,s,a;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var c=f++;n=u||(u=y(e)),r=L.bind(null,n,c,!1),o=L.bind(null,n,c,!0)}else o=t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(s=e,a=document.createElement("link"),void 0===s.attrs.type&&(s.attrs.type="text/css"),s.attrs.rel="stylesheet",b(a,s.attrs),h(s,a),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=d(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n=a,e),function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(e),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),function(){m(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}e.exports=function(e,s){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(s=s||{}).attrs="object"==typeof s.attrs?s.attrs:{},s.singleton||"boolean"==typeof s.singleton||(s.singleton=l()),s.insertInto||(s.insertInto="head"),s.insertAt||(s.insertAt="bottom");var a=v(e,s);return p(a,s),function(e){for(var t=[],n=0;n<a.length;n++){var r=a[n];(o=c[r.id]).refs--,t.push(o)}e&&p(v(e,s),s);for(n=0;n<t.length;n++){var o;if(0===(o=t[n]).refs){for(var i=0;i<o.parts.length;i++)o.parts[i]();delete c[o.id]}}}};var g,S=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function L(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=S(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var o=t.protocol+"//"+t.host,i=o+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var n,r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?e:(n=0===r.indexOf("//")?r:0===r.indexOf("/")?o+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")})}},function(e,t,n){"use strict";n.r(t);n(0);var r=function(){document.querySelector(".header__mobile-btn").addEventListener("click",function(e){e.preventDefault();var t=document.querySelector(".navigation");t.classList.toggle("show"),t.classList.contains("show")?document.querySelector(".header__mobile-btn-icon").innerHTML="&#10005;":document.querySelector(".header__mobile-btn-icon").innerHTML="&#9776;"})};var o=function(){window.addEventListener("scroll",function(){150<(window.pageYOffset||document.documentElement.scrollTop)?document.querySelector(".header").classList.add("whitebg"):document.querySelector(".header").classList.remove("whitebg")})};var i=function(){document.querySelectorAll(".navigation__elem-link").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var t=e.target.getAttribute("data-target");document.querySelector("#"+t).scrollIntoView()})})};var s=function(){i(),r(),o()};var a=function(){window.addEventListener("scroll",function(){150<(window.pageYOffset||document.documentElement.scrollTop)?document.querySelector(".up").classList.add("show"):document.querySelector(".up").classList.remove("show")})};var c=function(){document.querySelector(".up").addEventListener("click",function(e){e.preventDefault(),document.querySelector("#home").scrollIntoView()}),a()};function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=e,this.items=this.element.querySelectorAll(".slide-item"),this.modal=document.querySelector(".works__modal"),this.cotainer=document.querySelector(".image-container"),this.Show(),this.Hide()}var e,n,r;return e=t,(n=[{key:"Show",value:function(){var t=this;this.items.forEach(function(e){e.addEventListener("click",function(e){t.modal.style.display="flex",t.cotainer.appendChild(e.target.cloneNode(!0))})})}},{key:"Hide",value:function(){var t=this;this.modal.addEventListener("click",function(e){e.target.classList.contains("slide-item")||(t.modal.style.display="none",t.cotainer.innerHTML="")})}}])&&l(e.prototype,n),r&&l(e,r),t}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function n(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.element=t,this.startIndex=e,this.currentIndex=e,this.slides=document.querySelectorAll(".slide-page"),this.setActiveSlide(),this.next(),this.prev()}var e,t,r;return e=n,(t=[{key:"setActiveSlide",value:function(){var n=this;this.slides.forEach(function(e,t){t===n.currentIndex?e.classList.add("active"):e.classList.remove("active")})}},{key:"next",value:function(){var e=this;this.element.querySelector(".next").addEventListener("click",function(){e.currentIndex===e.slides.length-1?e.currentIndex=0:e.currentIndex++,e.setActiveSlide()})}},{key:"prev",value:function(){var e=this;this.element.querySelector(".prev").addEventListener("click",function(){0===e.currentIndex?e.currentIndex=e.slides.length-1:e.currentIndex--,e.setActiveSlide()})}}])&&f(e.prototype,t),r&&f(e,r),n}();var p=function(){var e=document.querySelector(".works__gallery");new d(0,e),new u(e)};var v=function(){p()};s(),c(),v()}]);