function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",i=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,g=s||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,y=function(){return g.Date.now()};function b(e,t,n){var i,o,a,u,f,l,c=0,s=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError(r);function v(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function b(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function O(){var e=y();if(b(e))return S(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?p(n,a-(e-c)):n}(e))}function S(e){return f=void 0,g&&i?v(e):(i=o=void 0,u)}function w(){var e=y(),n=b(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return function(e){return c=e,f=setTimeout(O,t),s?v(e):u}(l);if(d)return f=setTimeout(O,t),v(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=j(t)||0,h(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(j(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},w.flush=function(){return void 0===f?u:S(y())},w}function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&v.call(e)==o}(e))return i;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=f.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):u.test(e)?i:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return h(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:i,maxWait:t,trailing:o})};const O=document.querySelector(".feedback-form"),S="feedback-form-state";let w={};!function(){try{let e=JSON.parse(localStorage.getItem(S));if(!e)return;w=e,O.email.value=w.email||"",O.message.value=w.message||""}catch(e){console.error("Error.message ",e.message)}}(),O.addEventListener("input",e(t)((function(e){w=JSON.parse(localStorage.getItem(S))||{},w[e.target.name]=e.target.value,localStorage.setItem(S,JSON.stringify(w))}),500)),O.addEventListener("submit",(function(e){if(e.preventDefault(),!e.target.email.value||!e.target.message.value)return void alert("Enter all data");e.target.reset(),console.log(w),localStorage.removeItem(S)}));
//# sourceMappingURL=03-feedback.f4feffb1.js.map
