(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{521:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(128),n(178),n(179),n(258),n(97),n(259),n(260),n(68),n(126),n(180),n(129);var r=n(1);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e){return function(t,n){return function(e,t){var n=a(Object(r.useState)((function(){var n=t;try{var r=window.localStorage.getItem(e);r&&(n=JSON.parse(r))}catch(e){console.warn(e)}return n})),2),o=n[0],i=n[1];return[o,function(t){i(t);try{window.localStorage.setItem(e,JSON.stringify(t))}catch(e){console.warn(e)}}]}(e+"-"+t,n)}}},530:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n(128),n(178),n(179),n(258),n(262),n(97),n(259),n(260),n(68),n(126),n(180),n(546),n(129);var r,a=n(1),o=n(605),i=n(602),l=n(548),u=n(127);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m={",":0," ":1,"\t":2},y=(f(r={},0,","),f(r,1," "),f(r,2,"\t"),f(r,3,""),r);function p(e){var t=e.showLengthError,n=e.value,r=e.onChange,s=c(Object(a.useState)(!1),2),f=s[0],p=s[1],h=a.createElement("div",{className:u.smallDivider},a.createElement(o.a,{className:u.monospace,value:n,onChange:function(e,t){return r(t)},description:d(n),onGetErrorMessage:function(e){return t&&e.length>1?"Delimiter length must be 1":""},deferredValidationTime:1,placeholder:"Enter custom delimiter",spellCheck:!1}));return a.createElement(a.Fragment,null,a.createElement(i.a,{label:"Delimiter",options:[{key:0,text:"Comma (U+002C)"},{key:1,text:"Space (U+0020)"},{key:2,text:"Tab (U+0009)"},{key:3,text:"Other"}],responsiveMode:l.a.large,selectedKey:!f&&n in m?m[n]:3,onChange:function(e,t){p(3===t.key),r(y[t.key])}}),f||![","," ","\t"].includes(n)?h:null)}function d(e){return 1==e.length?"U+"+e[0].charCodeAt(0).toString(16).toUpperCase().padStart(4,"0"):" "}},531:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n(261);var r=n(1),a=n(602),o=n(548),i={key:"",text:"Auto-detect"},l=[{key:"\r\n",text:"CRLF"},{key:"\r",text:"CR"},{key:"\n",text:"LF"}];function u(e){var t,n=e.showAutoDetect,u=e.value,c=e.onChange;return t=n?[i].concat(l):l,r.createElement(a.a,{label:"Newline sequence",responsiveMode:o.a.large,selectedKey:u,options:t,onChange:function(e,t){return c(t.key)}})}},532:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(1),a=n(607),o=n(613),i=n(614),l=n(127);function u(e){var t,n=e.onClick,u=e.progress;return t=u.aborting?r.createElement(a.a,{variant:"small"},"Stopping"):r.createElement(a.a,{variant:"small"},r.createElement(o.a,{onClick:n},"Stop")),r.createElement("div",{className:l.smallDivider},u.show?r.createElement(r.Fragment,null,r.createElement(a.a,{variant:"small"},t),r.createElement(i.a,{percentComplete:u.percent})):r.createElement(a.a,{variant:"small"}," "))}},533:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(127),a=n(607),o=n(613),i=n(1),l=n(524);function u(){return i.createElement("div",{className:r.centerContent+" "+r.fullWidth,style:{marginTop:"30px"}},i.createElement(a.a,{variant:"medium"},i.createElement(l.a,{to:"about",className:r.removeUnderline},i.createElement(o.a,null,"About"))))}},534:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(68),n(126);var r=n(605),a=n(1),o=n(127);function i(e){var t=e.output;switch(t.type){case 1:return a.createElement(r.a,{className:o.monospace,value:t.text,rows:20,multiline:!0,spellCheck:!1,readOnly:!0});case 2:return a.createElement(r.a,{className:o.monospace+" "+o.redText,value:t.error.toString()+"\n"+t.error.stack,rows:20,multiline:!0,spellCheck:!1,readOnly:!0})}return null}},535:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));n(128),n(178),n(179),n(258),n(97),n(259),n(260),n(68),n(126),n(180),n(129);var r=n(607),a=n(616),o=n(609),i=n(1),l=n(127),u=n(521);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=Object(u.a)("app");function m(e){var t=e.text,n=e.helpLink,u=e.mac,s=e.children,m=c(f("firstVisit",!0),2),y=m[0],p=m[1];return i.createElement("div",{className:l.pageMargin},i.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"}},i.createElement(r.a,{variant:"xLarge"},i.createElement("strong",null,t)),i.createElement("div",{className:l.smallIcon},i.createElement(a.a,{style:{marginRight:u?"30px":"4px"},iconProps:{iconName:"Help"},title:"Help page",ariaLabel:"Help page",href:n,target:"_blank",rel:"noopener noreferrer"}))),y?i.createElement(i.Fragment,null,i.createElement(r.a,{variant:"mediumPlus"},'CSV Import+Export can open and save CSV files of various formats. If you need any help, the "?" icon in the top right corner will take you to the help page.'),i.createElement("br",null),i.createElement("br",null),i.createElement(o.a,{text:"Continue",onClick:function(){return p(!1)}})):s)}},539:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(128),n(178),n(179),n(261),n(258),n(97),n(259),n(260),n(68),n(126),n(180),n(129);var r=n(1),a=n(602),o=[{key:"Big5",text:"Big5"},{key:"EUC-JP",text:"EUC-JP"},{key:"EUC-KR",text:"EUC-KR"},{key:"gb18030",text:"gb18030"},{key:"GBK",text:"GBK"},{key:"IBM866",text:"IBM866 (Cyrillic)"},{key:"ISO-2022-JP",text:"ISO-2022-JP (JIS)"},{key:"ISO-8859-10",text:"ISO-8859-10 (Latin-6)"},{key:"ISO-8859-13",text:"ISO-8859-13 (Latin-7)"},{key:"ISO-8859-14",text:"ISO-8859-14 (Latin-8)"},{key:"ISO-8859-15",text:"ISO-8859-15 (Latin-9)"},{key:"ISO-8859-16",text:"ISO-8859-16 (Latin-10)"},{key:"ISO-8859-2",text:"ISO-8859-2 (Central European)"},{key:"ISO-8859-3",text:"ISO-8859-3 (Latin 3)"},{key:"ISO-8859-4",text:"ISO-8859-4 (Latin-4)"},{key:"ISO-8859-5",text:"ISO-8859-5 (Cryillic)"},{key:"ISO-8859-6",text:"ISO-8859-6 (Arabic)"},{key:"ISO-8859-7",text:"ISO-8859-7 (Greek)"},{key:"ISO-8859-8",text:"ISO-8859-8 (Hebrew)"},{key:"ISO-8859-8-I",text:"ISO-8859-8-I (Hebrew)"},{key:"KOI8-R",text:"KOI8-R"},{key:"KOI8-U",text:"KOI8-U"},{key:"x-mac-cyrillic",text:"Mac OS Cyrillic"},{key:"macintosh",text:"Mac OS Roman"},{key:"Shift_JIS",text:"Shift_JIS"},{key:"UTF-16BE",text:"UTF-16BE"},{key:"UTF-16LE",text:"UTF-16LE"},{key:"UTF-8",text:"UTF-8"},{key:"windows-1250",text:"windows-1250 (Central European)"},{key:"windows-1251",text:"windows-1251 (Cyrillic)"},{key:"windows-1252",text:"windows-1252 (Western European)"},{key:"windows-1253",text:"windows-1253 (Greek)"},{key:"windows-1254",text:"windows-1254 (Turkish)"},{key:"windows-1255",text:"windows-1255 (Hebrew)"},{key:"windows-1256",text:"windows-1256 (Arabic)"},{key:"windows-1257",text:"windows-1257 (Baltic)"},{key:"windows-1258",text:"windows-1258 (Vietnamese)"},{key:"windows-874",text:"windows-874 (Thai)"}];function i(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u={key:"",text:"Auto-detect"};function c(e){var t,n=e.showAutoDetect,l=e.value,c=e.onChange;return t=n?[u].concat(i(o)):o,r.createElement(r.Fragment,null,r.createElement(a.a,{label:"Encoding",selectedKey:l,options:t,onChange:function(e,t){return c(t.key)}}),r.createElement("br",null))}},615:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));n(128),n(178),n(179),n(258),n(97),n(259),n(260),n(68),n(82),n(126),n(180),n(129),n(81);var r=n(1),a=n(604),o=n(571),i=n(609),l=n(127),u=n(605),c=n(602),s=n(548),f=[{key:0,text:"File"},{key:1,text:"Text input"}];function m(e){var t,n,a=e.value,o=e.onChange;switch(a.inputType){case 0:n=function(e){return o({inputType:0,file:e,text:""})},t=r.createElement(r.Fragment,null,r.createElement("input",{className:l.fullWidth,type:"file",accept:"text/csv",onChange:function(e){return n(e.target.files[0])},id:"SourceInput-FileInput"}),r.createElement("br",null));break;case 1:t=function(e,t){return r.createElement(u.a,{className:l.monospace,multiline:!0,rows:10,spellCheck:!1,wrap:"off",onChange:function(e,n){return t(n)},value:e,id:"SourceInput-TextInput"})}(a.text,(function(e){return o({inputType:1,file:null,text:e})}))}return r.createElement(r.Fragment,null,r.createElement(c.a,{label:"Import type",options:f,responsiveMode:s.a.large,selectedKey:a.inputType,onChange:function(e,t){return o({inputType:t.key,file:null,text:""})},id:"SourceInput-Dropdown"}),r.createElement("div",{className:l.smallDivider}),t)}var y=n(530),p=n(531),d=n(539),h=n(532),b=n(533),v=n(534),w=n(535),g=n(521),S=n(174),x=n(94);function E(e,t,n,r,a,o,i){try{var l=e[o](i),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(r,a)}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var O=Object(g.a)("import");function C(){var e,t,n,l=Object(S.c)((function(e){return e.initialized})),u=Object(S.c)((function(e){return e.platform})),c=Object(S.c)((function(e){return e.progress})),s=Object(S.c)((function(e){return e.output})),f=Object(S.b)(),g=k(Object(r.useState)({inputType:0,file:null,text:""}),2),I=g[0],C=g[1],A=k(O("delimiter",","),2),j=A[0],T=A[1],U=k(O("newline",""),2),L=U[0],F=U[1],N=k(O("encoding",""),2),M=N[0],K=N[1];return e=0==I.inputType&&null==I.file?"Import source is not selected":1!==j.length?"Delimiter is invalid":l?"":"Excel API is not initialized",r.createElement(w.a,{text:"Import CSV",helpLink:"https://github.com/Emurasoft/excel-csv-import-help/blob/master/en.md",mac:u===Office.PlatformType.Mac},r.createElement(m,{value:I,onChange:C}),r.createElement("br",null),0===I.inputType?r.createElement(d.a,{value:M,onChange:K,showAutoDetect:!0}):null,r.createElement(y.a,{value:j,onChange:T,showLengthError:!0}),r.createElement("br",null),r.createElement(p.a,{value:L,onChange:F,showAutoDetect:!0}),r.createElement("br",null),r.createElement(a.a,{styles:{root:{display:"inline-block"}},content:e,delay:o.a.zero},r.createElement(i.a,{disabled:""!==e,onClick:(t=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f(Object(x.e)({source:I,newline:L,delimiter:j,encoding:M})));case 1:case"end":return e.stop()}}),e)})),n=function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(e){E(o,r,a,i,l,"next",e)}function l(e){E(o,r,a,i,l,"throw",e)}i(void 0)}))},function(){return n.apply(this,arguments)}),text:"Import CSV"})),r.createElement("br",null),r.createElement(h.a,{onClick:function(){return f(Object(x.b)())},progress:c}),r.createElement(v.a,{output:s}),r.createElement(b.a,null))}}}]);
//# sourceMappingURL=import.7a139b31d0dbcea3f594.js.map