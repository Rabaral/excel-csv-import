(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{418:function(t,e,n){(function(n){var o,r,i;r=[],void 0===(i="function"==typeof(o=function(){"use strict";function e(t,e,n){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){a(o.response,e,n)},o.onerror=function(){console.error("could not download file")},o.send()}function o(t){var e=new XMLHttpRequest;return e.open("HEAD",t,!1),e.send(),200<=e.status&&299>=e.status}function r(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,a=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype?function(t,n,a){var s=i.URL||i.webkitURL,u=document.createElement("a");n=n||t.name||"download",u.download=n,u.rel="noopener","string"==typeof t?(u.href=t,u.origin===location.origin?r(u):o(u.href)?e(t,n,a):r(u,u.target="_blank")):(u.href=s.createObjectURL(t),setTimeout(function(){s.revokeObjectURL(u.href)},4e4),setTimeout(function(){r(u)},0))}:"msSaveOrOpenBlob"in navigator?function(t,n,i){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,i),n);else if(o(t))e(t,n,i);else{var a=document.createElement("a");a.href=t,a.target="_blank",setTimeout(function(){r(a)})}}:function(t,n,o,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof t)return e(t,n,o);var a="application/octet-stream"===t.type,s=/constructor/i.test(i.HTMLElement)||i.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||a&&s)&&"object"==typeof FileReader){var c=new FileReader;c.onloadend=function(){var t=c.result;t=u?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=t:location=t,r=null},c.readAsDataURL(t)}else{var l=i.URL||i.webkitURL,p=l.createObjectURL(t);r?r.location=p:location.href=p,r=null,setTimeout(function(){l.revokeObjectURL(p)},4e4)}});i.saveAs=a.saveAs=a,t.exports=a})?o.apply(e,r):o)||(t.exports=i)}).call(this,n(86))},516:function(t,e,n){"use strict";n.r(e);var o=n(116),r=n(1),i=n(391),a=n(501),s=n(399),u=n(70);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function p(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var h,y=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,f(e).apply(this,arguments))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(e,r["Component"]),n=e,(o=[{key:"render",value:function(){var t,e=this,n=this.props.t,o={key:h.text,text:n("Textbox")};return t=this.props.enableFileExport?[{key:h.file,text:n("File")},o]:[o],r.createElement(a.a,{label:n("Export type"),options:t,responsiveMode:s.ResponsiveMode.large,selectedKey:this.props.value,onChange:function(t,n){return e.props.onChange(n.key)}})}}])&&l(n.prototype,o),i&&l(n,i),e}(),m=Object(u.e)("importExport")(y),d=n(450),v=n(451),w=n(510),x=n(507),E=n(505),g=n(499),O=n(514),T=n(71),S=n(418),k=n(458),j=n(452),C=n(85),R=n(453),_=n(454),L=n(416),P=n(455),A=n(456);function F(t){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function M(t,e,n,o,r,i,a){try{var s=t[i](a),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(o,r)}function U(t){return function(){var e=this,n=arguments;return new Promise(function(o,r){var i=t.apply(e,n);function a(t){M(i,o,r,a,s,"next",t)}function s(t){M(i,o,r,a,s,"throw",t)}a(void 0)})}}function B(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function D(t,e){return!e||"object"!==F(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function H(t){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function V(t,e){return(V=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,"ExportType",function(){return h}),n.d(e,"ExportComponent",function(){return N}),function(t){t[t.file=0]="file",t[t.text=1]="text"}(h||(h={}));var N=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=D(this,H(e).call(this,t,"export",{exportType:h.file,delimiter:",",newline:T.b.CRLF,encoding:"UTF-8",outputText:{show:!1,text:""}},["exportType","delimiter","newline","encoding"]))).exportTypeDropdownValue=function(){return o.c.enableFileExport(n.props.store.state.platform)?n.state.exportType:h.text},n.buttonOnClick=U(regeneratorRuntime.mark(function t(){var e,r,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=function(t,e){return e.exportType===h.text?e.outputText.show?{show:!t.outputText.show,text:t.outputText.text}:{show:t.outputText.show,text:t.outputText.text}:{show:!1,text:""}},r=Object.assign({},n.state),o.c.enableFileExport(n.props.store.state.platform)||(r.exportType=h.text),n.setState(function(t){return{outputText:e(t,r)}}),t.next=6,n.props.store.csvStringAndName(n.state);case 6:if(null!==(i=t.sent)){t.next=9;break}return t.abrupt("return");case 9:n.saveOrOutput(i,r);case 10:case"end":return t.stop()}},t)})),n}var n,i,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&V(t,e)}(e,L["a"]),n=e,(i=[{key:"render",value:function(){var t=this,e=this.props.t,n=r.createElement(w.a,{label:e("Export result"),className:C.monospace,readOnly:!0,multiline:!0,rows:15,spellCheck:!1,wrap:"off",value:this.state.outputText.text}),i=r.createElement(x.a,{style:{color:"red"},variant:"medium"},e("Large file export is not supported"));return r.createElement(r.Fragment,null,r.createElement(P.a,{hidden:this.props.store.state.platform!==Office.PlatformType.iOS,onClick:function(e){return t.props.history.push(e)}}),r.createElement("div",{className:C.pageMargin},r.createElement(A.a,{text:e("Export CSV"),helpLink:"https://github.com/Emurasoft/excel-csv-import-help/blob/master/en.md#export-csv",mac:this.props.store.state.platform===Office.PlatformType.Mac}),r.createElement(m,{enableFileExport:o.c.enableFileExport(this.props.store.state.platform),value:this.exportTypeDropdownValue(),onChange:function(e){return t.setState({exportType:e})}}),r.createElement("br",null),r.createElement(k.a,{value:this.state.encoding,onChange:function(e){return t.setState({encoding:e})},hidden:this.state.exportType===h.text,showAutoDetect:!1}),r.createElement(d.a,{value:this.state.delimiter,onChange:function(e){return t.setState({delimiter:e})},showLengthError:!1}),r.createElement("br",null),r.createElement(v.a,{value:this.state.newline,onChange:function(e){return t.setState({newline:e})},showAutoDetect:!1}),r.createElement("br",null),r.createElement(E.a,{styles:{root:{display:"inline-block"}},content:this.buttonTooltipContent()},r.createElement(g.a,{onClick:this.buttonOnClick,disabled:""!==this.buttonTooltipContent(),text:e("Export to CSV")})),r.createElement("br",null),this.props.store.state.largeFile?i:null,r.createElement(j.a,{onClick:this.props.store.abort,progress:this.props.store.state.progress}),r.createElement(O.a,{inlineLabel:!0,label:e("Save options"),defaultChecked:this.initialSaveStatus(),onChange:function(e,n){return t.setSaveStatus(n)}}),this.state.outputText.show?n:null,r.createElement(_.a,{parserOutput:this.props.store.state.parserOutput}),r.createElement(R.a,null)))}},{key:"saveOrOutput",value:function(t,e){switch(e.exportType){case h.file:var n={type:"text/csv;charset="+e.encoding},o=new Blob([t.string],n);return void S.saveAs(o,t.name+".csv");case h.text:return void this.setState(function(e){return{outputText:{show:!e.outputText.show,text:t.string}}})}}},{key:"buttonTooltipContent",value:function(){return this.props.store.state.initialized?"":this.props.t("Excel API is not initialized")}}])&&B(n.prototype,i),a&&B(n,a),e}();e.default=Object(u.e)("importExport")(Object(i.a)(N))}}]);
//# sourceMappingURL=export.ad1c259a3e987be6866f.js.map