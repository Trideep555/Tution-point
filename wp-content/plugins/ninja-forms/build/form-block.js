!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=660)}({0:function(e,t){e.exports=window.wp.element},10:function(e,t,r){var n=r(81),o=r(82),a=r(64),i=r(83);e.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},123:function(e,t){e.exports=window.wp.blocks},14:function(e,t){e.exports=window.React},157:function(e,t,r){var n=r(63);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},158:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},159:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},160:function(e,t,r){"use strict";var n=r(161);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},161:function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2:function(e,t,r){e.exports=r(160)()},263:function(e){e.exports=JSON.parse('{"icon":"feedback","category":"common","attributes":{"formID":{"type":"integer"},"formTitle":{"type":"string"}}}')},29:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},3:function(e,t){e.exports=window.wp.i18n},63:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},64:function(e,t,r){var n=r(63);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},660:function(e,t,r){"use strict";r.r(t);var n=r(29),o=r.n(n),a=r(14),i=r.n(a),c=r(95),l=r.n(c),s=r(0),u=r(7),f=r(96),p=r(10),m=r.n(p),d=function(e){var t=i.a.useState((function(){return Array.isArray(e.forms)?e.forms:Object.values(e.forms)})),r=m()(t,1)[0];return{getFormTitle:function(e){if(e=parseInt(e,10),r.length){var t=r.find((function(t){return t.formID===e}));return t?t.formTitle:void 0}},asSelectOptions:function(){return r.length?r.map((function(e){return{label:e.formTitle,value:e.formID}})):[]}}},b=r(2),y=r.n(b);function v(e){var t=e.formID,r=e.homeUrl,n=e.previewToken,o=i.a.useRef(),a=i.a.useState(!0),c=m()(a,2),l=c[0],f=c[1],p=i.a.useState(0),d=m()(p,2),b=d[0],y=d[1],v=i.a.useState("auto"),x=m()(v,2),O=x[0],h=x[1];return Object(s.createElement)("div",{className:"nf-iframe-container"},Object(s.createElement)("div",{className:"nf-iframe-overlay"},l&&Object(s.createElement)(u.Spinner,null),Object(s.createElement)("iframe",{src:"".concat(r,"?nf_preview_form=").concat(t,"&nf_iframe=").concat(n),ref:function(e){return o.current=e},style:{pointerEvents:"none"},onLoad:function(){f(!1);var e=o.current.contentWindow.document.getElementById("nf-form-".concat(t,"-cont")),r=e.querySelectorAll(".ninja-forms-form-wrap");r&&r.length?(h(r[0].scrollWidth),y(r[0].scrollHeight)):(h(e.scrollWidth),y(e.scrollHeight))},scrolling:"no",height:b||0,width:O||"auto"})))}v.propTypes={formID:y.a.number.isRequired,homeUrl:y.a.string.isRequired,previewToken:y.a.string.isRequired};var x=Object(s.createElement)("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",width:"30px",height:"30px",viewBox:"0 0 29.93 13.43"},Object(s.createElement)("path",{fill:"#fff",d:"M22,21.7a4.72,4.72,0,0,0-2.44-4,14.44,14.44,0,0,0-13.38-.06,4.61,4.61,0,0,0-2.53,4Z",transform:"translate(-0.03 -8.27)"}),Object(s.createElement)("path",{fill:"#414242",d:"M3.68,21.7a4.6,4.6,0,0,1,2.53-4,14.44,14.44,0,0,1,13.38,0,4.73,4.73,0,0,1,2.44,4h3.65v-.37a12.76,12.76,0,0,0-1.2-5.42A7.59,7.59,0,0,0,24,15a31.79,31.79,0,0,1,4.14-1c1.36-.28,2.14-.46,1.68-.83-1-.81-2.24-1.68-2.24-1.68s5.05-4.18,0-2.91a9.62,9.62,0,0,0-2.53,1,10.69,10.69,0,0,0-3.13,2.76,12.83,12.83,0,0,0-21.9,9,3.15,3.15,0,0,0,0,.37Z",transform:"translate(-0.03 -8.27)"}),Object(s.createElement)("path",{fill:"#414242",d:"M9.3,21.7c0-1-.58-1.81-1.29-1.81s-1.27.81-1.29,1.81Z",transform:"translate(-0.03 -8.27)"}),Object(s.createElement)("path",{fill:"#414242",d:"M19,21.7c0-1-.59-1.81-1.29-1.81s-1.27.81-1.29,1.81Z",transform:"translate(-0.03 -8.27)"})),O=function(e){return Object(s.createElement)(u.Placeholder,{icon:Object(s.createElement)("div",null,e.icon?e.icon:x),instructions:"Display a form",style:{alignItems:"center"}},Object(s.createElement)("div",{style:{margin:"auto",width:"50%"}},e.children))};O.propTypes={children:y.a.element.isRequired};var h=function(e){var t=e.formID,r=e.forms,n=e.onChange,o=e.labelText,a=d({forms:r}).asSelectOptions,c=i.a.useMemo((function(){var e=a();return[{label:"---"}].concat(l()(e))}),[r,a]);return Object(s.createElement)(u.SelectControl,{label:o||"Select Form",value:t,onChange:n,options:c})};function g(e){var t=e.formID,r=e.forms,n=e.labelText,o=e.setAttributes,a=e.homeUrl,c=e.previewToken,l=e.icon,u=d({forms:r}).getFormTitle,p=function(e){var t=e?u(e):"";o({formID:parseInt(e),formTitle:t})};return t?Object(s.createElement)(i.a.Fragment,null,Object(s.createElement)(f.InspectorControls,null,Object(s.createElement)(h,{formID:t,forms:r,onChange:p,labelText:n})),Object(s.createElement)(v,{homeUrl:a,previewToken:c,formID:t})):Object(s.createElement)(O,{icon:l},Object(s.createElement)(h,{label:n||"Select Form",formID:t,forms:r,onChange:p,labelText:n}))}h.propTypes={formID:y.a.PropTypes.number,forms:y.a.oneOfType([y.a.array,y.a.object]).isRequired,onChange:y.a.func.isRequired,labelText:y.a.string},g.propTypes={formID:y.a.number,forms:y.a.oneOfType([y.a.array,y.a.object]).isRequired,labelText:y.a.string,setAttributes:y.a.func.isRequired,homeUrl:y.a.string.isRequired,previewToken:y.a.string.isRequired};var j=r(263),w=r(3),_=r(123);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=window.nfFormsBlock||{},S=I.forms,D=I.homeUrl,P=I.previewToken;Object(_.registerBlockType)("ninja-forms/form",E(E({},j),{},{title:Object(w.__)("Ninja Form","ninja-forms"),edit:function(e){var t=e.attributes,r=e.setAttributes;return Object(s.createElement)(g,{forms:S,formID:t.formID,formTitle:t.formTitle,setAttributes:r,homeUrl:D,previewToken:P})},save:function(){return null},deprecated:[{attributes:{formID:{type:"integer",default:0},formName:{type:"string",default:""}},save:function(e){var t=e.attributes.formID;if(!t)return"";var r="[ninja_forms id="+parseInt(t)+"]";return Object(s.createElement)("div",null,r)}}]}))},7:function(e,t){e.exports=window.wp.components},81:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},82:function(e,t){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],_n=!0,i=!1;try{for(r=r.call(e);!(_n=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);_n=!0);}catch(e){i=!0,o=e}finally{try{_n||null==r.return||r.return()}finally{if(i)throw o}}return a}},e.exports.default=e.exports,e.exports.__esModule=!0},83:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},95:function(e,t,r){var n=r(157),o=r(158),a=r(64),i=r(159);e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},96:function(e,t){e.exports=window.wp.blockEditor}});