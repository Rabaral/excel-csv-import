(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{386:function(e,t,o){"use strict";o.d(t,"a",function(){return a});var r=o(1),n=o(117);function a(e){return function(t){return r.createElement(n.a.Consumer,null,function(o){return r.createElement(e,Object.assign({},t,{store:o}))})}}},400:function(e,t,o){"use strict";o.d(t,"a",function(){return p});var r=o(55),n=o(1),a=o.n(n),l=o(57),i=o(56),c=(o(118),o(19)),u=o(114),s=o(36);a.a.Component;a.a.Component;var p=function(e){function t(){return e.apply(this,arguments)||this}Object(r.a)(t,e);var o=t.prototype;return o.handleClick=function(e,t){(this.props.onClick&&this.props.onClick(e),e.defaultPrevented||0!==e.button||this.props.target&&"_self"!==this.props.target||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))||(e.preventDefault(),(this.props.replace?t.replace:t.push)(this.props.to))},o.render=function(){var e=this,t=this.props,o=t.innerRef,r=(t.replace,t.to),n=Object(u.a)(t,["innerRef","replace","to"]);return a.a.createElement(l.d.Consumer,null,function(t){t||Object(s.a)(!1);var l="string"==typeof r?Object(i.c)(r,null,null,t.location):r,u=l?t.history.createHref(l):"";return a.a.createElement("a",Object(c.a)({},n,{onClick:function(o){return e.handleClick(o,t.history)},href:u,ref:o}))})},t}(a.a.Component)},401:function(e,t,o){"use strict";o.d(t,"b",function(){return n}),o.d(t,"a",function(){return a});var r=o(468);function n(e){var t,o,n,a=e.semanticColors,l=a.buttonBackground,i=a.buttonBackgroundChecked,c=a.buttonBackgroundHovered,u=a.buttonText,s=a.buttonTextHovered,p=a.buttonTextChecked,d=a.buttonTextCheckedHovered;return{root:{backgroundColor:l,color:u},rootHovered:{backgroundColor:c,color:s,selectors:(t={},t[r.a]={borderColor:"Highlight",color:"Highlight"},t)},rootPressed:{backgroundColor:i,color:p},rootExpanded:{backgroundColor:i,color:p},rootChecked:{backgroundColor:i,color:p},rootCheckedHovered:{backgroundColor:e.palette.neutralLight,color:d},splitButtonContainer:{selectors:(o={},o[r.a]={border:"none"},o)},splitButtonMenuButton:{color:e.palette.white,backgroundColor:e.palette.neutralLighter,selectors:{":hover":{backgroundColor:e.palette.neutralLight,selectors:(n={},n[r.a]={color:"Highlight"},n)}}},splitButtonMenuButtonDisabled:{backgroundColor:e.palette.neutralLighter,selectors:{":hover":{backgroundColor:e.palette.neutralLighter}}},splitButtonDivider:{backgroundColor:e.palette.neutralTertiaryAlt},splitButtonMenuButtonChecked:{backgroundColor:e.palette.themePrimary},splitButtonMenuButtonExpanded:{backgroundColor:e.palette.neutralLight},splitButtonMenuIcon:{color:e.palette.neutralPrimary},splitButtonMenuIconDisabled:{color:e.palette.neutralTertiary}}}function a(e){return{root:{backgroundColor:e.palette.themePrimary,color:e.palette.white,selectors:(t={},t[r.a]={color:"Window",backgroundColor:"WindowText",MsHighContrastAdjust:"none"},t)},rootHovered:{backgroundColor:e.palette.themeDarkAlt,color:e.palette.white,selectors:(o={},o[r.a]={color:"Window",backgroundColor:"Highlight"},o)},rootPressed:{backgroundColor:e.palette.themeDark,color:e.palette.white,selectors:(n={},n[r.a]={color:"Window",backgroundColor:"WindowText",MsHighContrastAdjust:"none"},n)},rootExpanded:{backgroundColor:e.palette.themeDark,color:e.palette.white},rootChecked:{backgroundColor:e.palette.themeDark,color:e.palette.white},rootCheckedHovered:{backgroundColor:e.palette.themePrimary,color:e.palette.white},rootDisabled:{selectors:(a={},a[r.a]={color:"GrayText",borderColor:"GrayText",backgroundColor:"Window"},a)},splitButtonContainer:{selectors:(l={},l[r.a]={border:"none"},l)},splitButtonDivider:{backgroundColor:e.palette.themeLighter},splitButtonMenuButton:{backgroundColor:e.palette.themePrimary,color:e.palette.white,selectors:{":hover":{backgroundColor:e.palette.themeDark,selectors:(i={},i[r.a]={color:"Highlight"},i)}}},splitButtonMenuButtonDisabled:{backgroundColor:e.palette.neutralLighter,selectors:{":hover":{backgroundColor:e.palette.neutralLighter}}},splitButtonMenuButtonChecked:{backgroundColor:e.palette.themeDark},splitButtonMenuButtonExpanded:{backgroundColor:e.palette.themeDark},splitButtonMenuIcon:{color:e.palette.white},splitButtonMenuIconDisabled:{color:e.palette.neutralTertiary}};var t,o,n,a,l,i}},425:function(e,t,o){(function(o){var r,n,a;n=[],void 0===(a="function"==typeof(r=function(){"use strict";function t(e,t,o){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){l(r.response,t,o)},r.onerror=function(){console.error("could not download file")},r.send()}function r(e){var t=new XMLHttpRequest;return t.open("HEAD",e,!1),t.send(),200<=t.status&&299>=t.status}function n(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o&&o.global===o?o:void 0,l=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype?function(e,o,l){var i=a.URL||a.webkitURL,c=document.createElement("a");o=o||e.name||"download",c.download=o,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?n(c):r(c.href)?t(e,o,l):n(c,c.target="_blank")):(c.href=i.createObjectURL(e),setTimeout(function(){i.revokeObjectURL(c.href)},4e4),setTimeout(function(){n(c)},0))}:"msSaveOrOpenBlob"in navigator?function(e,o,a){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,a),o);else if(r(e))t(e,o,a);else{var l=document.createElement("a");l.href=e,l.target="_blank",setTimeout(function(){n(l)})}}:function(e,o,r,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof e)return t(e,o,r);var l="application/octet-stream"===e.type,i=/constructor/i.test(a.HTMLElement)||a.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||l&&i)&&"object"==typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=e:location=e,n=null},u.readAsDataURL(e)}else{var s=a.URL||a.webkitURL,p=s.createObjectURL(e);n?n.location=p:location.href=p,n=null,setTimeout(function(){s.revokeObjectURL(p)},4e4)}});a.saveAs=l.saveAs=l,e.exports=l})?r.apply(t,n):r)||(e.exports=a)}).call(this,o(86))},426:function(e,t,o){"use strict";o.d(t,"a",function(){return l});var r=o(1),n=o(518),a=o(70);function l(e){var t=Object(a.d)("about").t;return r.createElement(n.a,{iconProps:{iconName:"Back"},onClick:e.onClick,ariaLabel:t("Go back"),title:t("Go back")})}},460:function(e,t,o){"use strict";var r=o(42),n=o(1),a=o(384),l=o(428),i=o(446),c=o(469),u=o(466),s=o(436),p=o(385),d=o(391),f=o(401),m=Object(s.b)(function(e,t,o){var r=Object(p.a)(e),n=Object(d.a)(e),a={root:{minWidth:"80px",height:"32px"},label:{fontWeight:c.b.semibold}};return Object(u.a)(r,a,o?Object(f.a)(e):Object(f.b)(e),n,t)});o.d(t,"a",function(){return b});var b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._skipComponentRefResolution=!0,t}return r.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.primary,o=void 0!==t&&t,i=e.styles,c=e.theme;return n.createElement(a.a,r.__assign({},this.props,{variantClassName:o?"ms-Button--primary":"ms-Button--default",styles:m(c,i,o),onRenderDescription:l.b}))},t=r.__decorate([Object(i.a)("DefaultButton",["theme","styles"],!0)],t)}(l.a)},500:function(e,t,o){"use strict";o.r(t),o.d(t,"AboutComponent",function(){return k});var r=o(1),n=o(386),a=o(507),l=o(514),i=o(460),c=o(425),u=o(85),s=o(70),p=o(426),d=o(53),f=o(400);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=h(this,g(t).apply(this,arguments))).exportLog=function(){var t=new Blob([e.props.store.log()]);c.saveAs(t,"csvImportExportLog.json")},e}var o,n,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,r["Component"]),o=t,(n=[{key:"render",value:function(){var e=this.props.t;return r.createElement("div",{className:u.pageMargin},r.createElement(p.a,{onClick:this.props.history.goBack}),r.createElement("br",null),r.createElement(a.a,{variant:"xLarge"},r.createElement("strong",null,e("CSV Import+Export"))),r.createElement("br",null),r.createElement(a.a,{variant:"medium"},r.createElement("pre",null,this.props.store.state.version),r.createElement("div",{className:u.smallDivider}),"Copyright 2019 Emurasoft Inc.",r.createElement("br",null),r.createElement("br",null),r.createElement(l.a,{href:"https://github.com/Emurasoft/excel-csv-import",className:u.greyText+" "+u.verticallyCenterContent,target:"_blank",rel:"noopener noreferrer"},r.createElement("img",{src:"GitHub-Mark.svg",alt:e("GitHub logo"),width:"25px",style:{marginRight:"6px"}}),e("CSV Import+Export on GitHub"))),r.createElement("br",null),r.createElement("br",null),r.createElement("div",{className:u.fullWidth+" "+u.centerContent},r.createElement("a",{href:e("EmEditor localized homepage [URL]"),target:"_blank",rel:"noopener noreferrer"},r.createElement("img",{className:u.emeditorLogo,src:"emeditor_logo.png",alt:e("EmEditor logo")}))),r.createElement(a.a,{variant:"medium"},r.createElement(s.b,{ns:"about",i18nKey:"EmEditor description [paragraph]"},"EmEditor is a text editor which features a CSV editing interface and large file support. ",r.createElement(l.a,{href:e("EmEditor localized homepage [URL]"),target:"_blank",rel:"noopener noreferrer"},"Try EmEditor for free."))),r.createElement("br",null),r.createElement("br",null),r.createElement("br",null),r.createElement(a.a,{variant:"medium"},r.createElement("strong",null,e("Report bugs/send feedback")),r.createElement("br",null),e("For bug reports, please attach the log file:")),r.createElement("br",null),r.createElement(i.a,{onClick:this.exportLog,text:e("Save log")}),r.createElement("br",null),r.createElement("br",null),r.createElement(a.a,{variant:"medium"},r.createElement(s.b,{ns:"about",i18nKey:"How to send feedback [paragraph]"},"There are two ways to submit bug reports or feedback:",r.createElement(l.a,{href:"https://www.emeditor.com/csv-importexport-contact-form/",target:"_blank",rel:"noopener noreferrer"},"Via the contact form ↗"),r.createElement(l.a,{href:"https://github.com/Emurasoft/excel-csv-import/issues",target:"_blank",rel:"noopener noreferrer"},"Issues page of the GitHub repo ↗"))),r.createElement("br",null),r.createElement("br",null),r.createElement(a.a,{variant:"medium"},r.createElement(f.a,{to:d.a.licenseInformation,className:u.removeUnderline},r.createElement(l.a,null,e("licenseInformation::License information")))))}}])&&b(o.prototype,n),m&&b(o,m),t}();t.default=Object(s.e)("about")(Object(n.a)(k))}}]);
//# sourceMappingURL=about.3e421969183ba7032c22.js.map