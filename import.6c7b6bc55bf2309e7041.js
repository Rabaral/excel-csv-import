(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{622:function(e,t,n){"use strict";n.r(t),n.d(t,"ImportComponent",(function(){return L}));n(94),n(95),n(96),n(69),n(177),n(68),n(100),n(178),n(97),n(98),n(80),n(99);var r=n(1),o=n(521),i=n(610),u=n(576),a=n(615),c=n(621),l=(n(180),n(183),n(128)),s=n(611),p=n(608),f=n(548);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(a,e);var t,n,o,i,u=(t=a,function(){var e,n=w(t);if(g()){var r=w(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return v(this,e)});function a(){var e;return m(this,a),(e=u.apply(this,arguments)).dropdownOnChange=function(t,n){e.props.onChange({inputType:n.key,file:null,text:""})},e.fileOnChange=function(t){e.props.onChange({inputType:0,file:t.target.files[0],text:""})},e}return n=a,(o=[{key:"render",value:function(){var e,t=this,n=navigator.userAgent.includes("Edge")||navigator.userAgent.includes("Trident"),o=(h(e={},0,r.createElement(r.Fragment,null,r.createElement("input",{className:n?l.fullWidth:null,type:"file",accept:"text/csv",onChange:this.fileOnChange,id:"SourceInput-FileInput"}),r.createElement("br",null))),h(e,1,r.createElement(s.a,{className:l.monospace,multiline:!0,rows:10,spellCheck:!1,wrap:"off",onChange:function(e,n){return t.props.onChange({inputType:1,text:n})},value:this.props.value.text,id:"SourceInput-TextInput"})),e);return r.createElement(r.Fragment,null,r.createElement(p.a,{label:"Import type",options:[{key:0,text:"File"},{key:1,text:"Text input"}],responsiveMode:f.a.large,selectedKey:this.props.value.inputType,onChange:this.dropdownOnChange,id:"SourceInput-Dropdown"}),r.createElement("div",{className:l.smallDivider}),o[this.props.value.inputType])}}])&&b(n.prototype,o),i&&b(n,i),a}(r.Component),O=n(541),C=n(542),S=n(549),x=n(543),k=n(544),T=n(545),P=n(530),j=n(546);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t,n,r,o,i,u){try{var a=e[i](u),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,o)}function I(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function u(e){R(i,r,o,u,a,"next",e)}function a(e){R(i,r,o,u,a,"throw",e)}u(void 0)}))}}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(f,e);var t,n,o,s,p=(t=f,function(){var e,n=z(t);if(N()){var r=z(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return F(this,e)});function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=p.call(this,e,"import",{source:{inputType:0,file:null,text:""},delimiter:",",newline:"",encoding:""},["delimiter","newline","encoding"])).buttonOnClick=I(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.props.store.import(t.state);case 2:case"end":return e.stop()}}),e)}))),t}return n=f,(o=[{key:"render",value:function(){var e=this;return r.createElement(r.Fragment,null,r.createElement("div",{className:l.pageMargin},r.createElement(j.a,{text:"Import CSV",helpLink:"https://github.com/Emurasoft/excel-csv-import-help/blob/master/en.md",mac:this.props.store.state.platform===Office.PlatformType.Mac}),r.createElement(E,{value:this.state.source,onChange:function(t){return e.setState({source:t})}}),r.createElement("br",null),r.createElement(S.a,{value:this.state.encoding,onChange:function(t){return e.setState({encoding:t})},hidden:1===this.state.source.inputType,showAutoDetect:!0}),r.createElement(O.a,{value:this.state.delimiter,onChange:function(t){return e.setState({delimiter:t})},showLengthError:!0}),r.createElement("br",null),r.createElement(C.a,{value:this.state.newline,onChange:function(t){return e.setState({newline:t})},showAutoDetect:!0}),r.createElement("br",null),r.createElement(i.a,{styles:{root:{display:"inline-block"}},content:this.buttonTooltipContent(),delay:u.a.zero},r.createElement(a.a,{disabled:""!==this.buttonTooltipContent(),onClick:this.buttonOnClick,text:"Import CSV"})),r.createElement("br",null),r.createElement(x.a,{onClick:this.props.store.abort,progress:this.props.store.state.progress}),r.createElement(c.a,{inlineLabel:!0,label:"Save options",defaultChecked:this.initialSaveStatus(),onChange:function(t,n){return e.setSaveStatus(n)}}),r.createElement(T.a,{parserOutput:this.props.store.state.parserOutput}),r.createElement(k.a,null)))}},{key:"buttonTooltipContent",value:function(){return 0==this.state.source.inputType&&null==this.state.source.file?"Import source is not selected":1!==this.state.delimiter.length?"Delimiter is invalid":this.props.store.state.initialized?"":"Excel API is not initialized"}}])&&D(n.prototype,o),s&&D(n,s),f}(P.a);t.default=Object(o.a)(L)}}]);
//# sourceMappingURL=import.6c7b6bc55bf2309e7041.js.map