webpackJsonp([5],{1032:function(e,t,n){e.exports=n.p+"static/media/searchIcon.5e934606.png"},1034:function(e,t,n){e.exports=n.p+"static/media/background.722674ce.jpg"},794:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(957);t.default=r.a},795:function(e,t,n){"use strict";function r(e){return"[object Array]"===v.call(e)}function o(e){return"[object ArrayBuffer]"===v.call(e)}function a(e){return"undefined"!==typeof FormData&&e instanceof FormData}function i(e){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function s(e){return"string"===typeof e}function u(e){return"number"===typeof e}function c(e){return"undefined"===typeof e}function f(e){return null!==e&&"object"===typeof e}function l(e){return"[object Date]"===v.call(e)}function p(e){return"[object File]"===v.call(e)}function d(e){return"[object Blob]"===v.call(e)}function A(e){return"[object Function]"===v.call(e)}function h(e){return f(e)&&A(e.pipe)}function g(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function m(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function y(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function C(e,t){if(null!==e&&"undefined"!==typeof e)if("object"===typeof e||r(e)||(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}function b(){function e(e,n){"object"===typeof t[n]&&"object"===typeof e?t[n]=b(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)C(arguments[n],e);return t}function x(e,t,n){return C(t,function(t,r){e[r]=n&&"function"===typeof t?B(t,n):t}),e}var B=n(803),w=n(827),v=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:w,isFormData:a,isArrayBufferView:i,isString:s,isNumber:u,isObject:f,isUndefined:c,isDate:l,isFile:p,isBlob:d,isFunction:A,isStream:h,isURLSearchParams:g,isStandardBrowserEnv:y,forEach:C,merge:b,extend:x,trim:m}},796:function(e,t,n){"use strict";var r=n(795),o=n(815),a=n(818),i=n(824),s=n(822),u=n(802),c="undefined"!==typeof window&&window.btoa&&window.btoa.bind(window)||n(817);e.exports=function(e){return new Promise(function(t,f){var l=e.data,p=e.headers;r.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest,A="onreadystatechange",h=!1;if("undefined"===typeof window||!window.XDomainRequest||"withCredentials"in d||s(e.url)||(d=new window.XDomainRequest,A="onload",h=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var g=e.auth.username||"",m=e.auth.password||"";p.Authorization="Basic "+c(g+":"+m)}if(d.open(e.method.toUpperCase(),a(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[A]=function(){if(d&&(4===d.readyState||h)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?i(d.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?d.response:d.responseText,a={data:r,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:e,request:d};o(t,f,a),d=null}},d.onerror=function(){f(u("Network Error",e,null,d)),d=null},d.ontimeout=function(){f(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var y=n(820),C=(e.withCredentials||s(e.url))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;C&&(p[e.xsrfHeaderName]=C)}if("setRequestHeader"in d&&r.forEach(p,function(e,t){"undefined"===typeof l&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"===typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),f(e),d=null)}),void 0===l&&(l=null),d.send(l)})}},797:function(e,t,n){"use strict";(function(t){function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=n(795),a=n(823),i={"Content-Type":"application/x-www-form-urlencoded"},s={adapter:function(){var e;return"undefined"!==typeof XMLHttpRequest?e=n(796):"undefined"!==typeof t&&(e=n(796)),e}(),transformRequest:[function(e,t){return a(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){s.headers[e]={}}),o.forEach(["post","put","patch"],function(e){s.headers[e]=o.merge(i)}),e.exports=s}).call(t,n(80))},798:function(e,t,n){function r(e,t){return(s(e)?o:i)(e,a(t,3))}var o=n(49),a=n(38),i=n(312),s=n(16);e.exports=r},799:function(e,t){function n(e){for(var t=-1,n=null==e?0:e.length,r=0,o=[];++t<n;){var a=e[t];a&&(o[r++]=a)}return o}e.exports=n},800:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},801:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},802:function(e,t,n){"use strict";var r=n(814);e.exports=function(e,t,n,o,a){var i=new Error(e);return r(i,t,n,o,a)}},803:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},804:function(e,t,n){function r(e){return(null==e?0:e.length)?o(e,1):[]}var o=n(187);e.exports=r},805:function(e,t,n){function r(e,t){return e&&e.length?a(e,o(t,2)):[]}var o=n(38),a=n(313);e.exports=r},806:function(e,t,n){e.exports=n(809)},807:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var r="https://api.magicthegathering.io/v1/",o="https://mtg-card-collections.firebaseio.com/"},809:function(e,t,n){"use strict";function r(e){var t=new i(e),n=a(i.prototype.request,t);return o.extend(n,i.prototype,t),o.extend(n,t),n}var o=n(795),a=n(803),i=n(811),s=n(797),u=r(s);u.Axios=i,u.create=function(e){return r(o.merge(s,e))},u.Cancel=n(800),u.CancelToken=n(810),u.isCancel=n(801),u.all=function(e){return Promise.all(e)},u.spread=n(825),e.exports=u,e.exports.default=u},810:function(e,t,n){"use strict";function r(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(800);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},811:function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var o=n(797),a=n(795),i=n(812),s=n(813),u=n(821),c=n(819);r.prototype.request=function(e){"string"===typeof e&&(e=a.merge({url:arguments[0]},arguments[1])),e=a.merge(o,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase(),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url));var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},a.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(a.merge(n||{},{method:e,url:t}))}}),a.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(a.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},812:function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(795);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},813:function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(795),a=n(816),i=n(801),s=n(797);e.exports=function(e){return r(e),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return r(e),t.data=a(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(r(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},814:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},815:function(e,t,n){"use strict";var r=n(802);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},816:function(e,t,n){"use strict";var r=n(795);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},817:function(e,t,n){"use strict";function r(){this.message="String contains an invalid character"}function o(e){for(var t,n,o=String(e),i="",s=0,u=a;o.charAt(0|s)||(u="=",s%1);i+=u.charAt(63&t>>8-s%1*8)){if((n=o.charCodeAt(s+=.75))>255)throw new r;t=t<<8|n}return i}var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=o},818:function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(795);e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(o.isURLSearchParams(t))a=t.toString();else{var i=[];o.forEach(t,function(e,t){null!==e&&"undefined"!==typeof e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),i.push(r(t)+"="+r(e))}))}),a=i.join("&")}return a&&(e+=(-1===e.indexOf("?")?"?":"&")+a),e}},819:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},820:function(e,t,n){"use strict";var r=n(795);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,a,i){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},821:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},822:function(e,t,n){"use strict";var r=n(795);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},823:function(e,t,n){"use strict";var r=n(795);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},824:function(e,t,n){"use strict";var r=n(795);e.exports=function(e){var t,n,o,a={};return e?(r.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t&&(a[t]=a[t]?a[t]+", "+n:n)}),a):a}},825:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},826:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}n.d(t,"e",function(){return x}),n.d(t,"b",function(){return E}),n.d(t,"a",function(){return j}),n.d(t,"c",function(){return O}),n.d(t,"d",function(){return N}),n.d(t,"f",function(){return T});var o=n(806),a=n.n(o),i=n(796),s=n.n(i),u=n(805),c=n.n(u),f=n(798),l=n.n(f),p=n(799),d=n.n(p),A=n(833),h=n.n(A),g=n(804),m=n.n(g),y=n(807);a.a.defaults.adapter=s.a;var C=["count","artist","cmc","number","colorIndentity","colors","flavor","id","set","setName","layout","names","multiverseid","imageUrl","manaCost","name","text","type","types","supertypes","rarity"],b=["normal","split","flip","double-faced","meld","aftermath"].join("|"),x=function(e,t){var n=[];return l()(Object.keys(e),function(r){var o=y.a+'cards?name="'+r+'"&layout='+b+"&contains=imageUrl&pageSize=1",i=new Promise(function(n){try{var i=t.Card.get({name:r}).ref;i.count=e[r],n(i)}catch(t){var s=a.a.get(o).then(function(t){return t.data.cards[0]?(t.data.cards[0].count=e[r],new Promise(function(e){return e(h()(t.data.cards[0],C))})):new Promise(function(e){return e(null)})}).catch(function(){return new Promise(function(e){return e(null)})});n(s)}});n.push(i)}),a.a.all(n).then(a.a.spread(function(){return d()(Object.values(arguments))}))},B=function(e,t){var n=[a.a.get(y.a+"cards?colors=black&set="+e+"&types="+t+"&layout="+b+"&contains=imageUrl"),a.a.get(y.a+"cards?colors=red&set="+e+"&types="+t+"&layout="+b+"&contains=imageUrl"),a.a.get(y.a+"cards?colors=blue&set="+e+"&types="+t+"&layout="+b+"&contains=imageUrl"),a.a.get(y.a+"cards?colors=white&set="+e+"&types="+t+"&layout="+b+"&contains=imageUrl"),a.a.get(y.a+"cards?colors=green&set="+e+"&types="+t+"&layout="+b+"&contains=imageUrl")];return a.a.all(n).then(a.a.spread(function(e,t,n,o,a){return{cards:[].concat(r(e.data.cards),r(t.data.cards),r(n.data.cards),r(o.data.cards),r(a.data.cards))}})).catch(function(){return{cards:[]}})},w=function(e){return a.a.get(y.a+"cards?name="+e+"&layout="+b+"&contains=imageUrl").then(function(e){return new Promise(function(t){return t(e.data)})}).catch(function(){return new Promise(function(e){return e([])})})},v=function(e){return a.a.get(y.a+"cards?artist="+e+"&layout="+b+"&contains=imageUrl").then(function(e){return new Promise(function(t){return t(e.data)})}).catch(function(){return new Promise(function(e){return e([])})})},S=function(e){return a.a.get(y.a+"cards?flavor="+e+"&layout="+b+"&contains=imageUrl").then(function(e){return new Promise(function(t){return t(e.data)})}).catch(function(){return new Promise(function(e){return e([])})})},_=function(e){return a.a.get(y.a+"cards?text="+e+"&layout="+b+"&contains=imageUrl").then(function(e){return new Promise(function(t){return t(e.data)})}).catch(function(){return new Promise(function(e){return e([])})})},k=function(e){return a.a.get(y.a+"cards?subtypes="+e+"&layout="+b+"&contains=imageUrl").then(function(e){return new Promise(function(t){return t(e.data)})}).catch(function(){return new Promise(function(e){return e([])})})},E=function(e){var t=l()(e,function(e){return w(e.doubleName)});return a.a.all(t).then(a.a.spread(function(){return c()(m()(l()(arguments,function(e){return e.cards})),"id")}))},j=function(e){return a.a.get(y.a+"cards/"+e).then(function(e){return h()(e.data.card,C)}).catch(function(){return null})},O=function(){return a.a.get(y.a+"sets").then(function(e){return e.data.sets}).catch(function(){return null})},P=function(e){return a.a.get(y.a+"cards?set="+e+"&types=planeswalker&layout="+b+"&contains=imageUrl").then(function(e){return e.data}).catch(function(){return{cards:[]}})},U=function(e){return B(e,"creature")},R=function(e){return a.a.get(y.a+"cards?set="+e+"&types=instant&layout="+b+"&contains=imageUrl").then(function(e){return e.data}).catch(function(){return{cards:[]}})},L=function(e){return a.a.get(y.a+"cards?set="+e+"&types=sorcery&layout="+b+"&contains=imageUrl").then(function(e){return e.data}).catch(function(){return{cards:[]}})},I=function(e){return a.a.get(y.a+"cards?set="+e+"&types=enchantment&layout="+b+"&contains=imageUrl").then(function(e){return e.data}).catch(function(){return{cards:[]}})},D=function(e){return a.a.get(y.a+"cards?set="+e+"&types=artifact&layout="+b+"&contains=imageUrl").then(function(e){return e.data}).catch(function(){return{cards:[]}})},q=function(e){return a.a.get(y.a+"cards?set="+e+"&types=land&layout="+b+"&contains=imageUrl").then(function(e){return e.data}).catch(function(){return{cards:[]}})},N=function(e){var t=[P(e),U(e),R(e),L(e),I(e),D(e),q(e)];return a.a.all(t).then(a.a.spread(function(e,t,n,o,a,i,s){return c()([].concat(r(e.cards),r(t.cards),r(n.cards),r(o.cards),r(a.cards),r(i.cards),r(s.cards)),"id")})).then(function(e){return l()(e,function(e){return h()(e,C)})}).catch(function(){return null})},T=function(e){var t=[w(e),v(e),S(e),_(e),k(e)];return a.a.all(t).then(a.a.spread(function(e,t,n,o,a){return c()([].concat(r(e.cards),r(t.cards),r(n.cards),r(o.cards),r(a.cards)),"multiverseid")}))}},827:function(e,t){function n(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&n(e.slice(0,0))}e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}},828:function(e,t,n){function r(e,t,n){var r=e[t];s.call(e,t)&&a(r,n)&&(void 0!==n||t in e)||o(e,t,n)}var o=n(311),a=n(115),i=Object.prototype,s=i.hasOwnProperty;e.exports=r},829:function(e,t,n){function r(e,t){return o(e,t,function(t,n){return a(e,n)})}var o=n(830),a=n(316);e.exports=r},830:function(e,t,n){function r(e,t,n){for(var r=-1,s=t.length,u={};++r<s;){var c=t[r],f=o(e,c);n(f,c)&&a(u,i(c,e),f)}return u}var o=n(188),a=n(831),i=n(185);e.exports=r},831:function(e,t,n){function r(e,t,n,r){if(!s(e))return e;t=a(t,e);for(var c=-1,f=t.length,l=f-1,p=e;null!=p&&++c<f;){var d=u(t[c]),A=n;if(c!=l){var h=p[d];A=r?r(h,d,p):void 0,void 0===A&&(A=s(h)?h:i(t[c+1])?[]:{})}o(p,d,A),p=p[d]}return e}var o=n(828),a=n(185),i=n(114),s=n(63),u=n(81);e.exports=r},832:function(e,t,n){function r(e){return i(a(e,void 0,o),e+"")}var o=n(804),a=n(314),i=n(315);e.exports=r},833:function(e,t,n){var r=n(829),o=n(832),a=o(function(e,t){return null==e?{}:r(e,t)});e.exports=a},836:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"c",function(){return l}),n.d(t,"b",function(){return d}),n.d(t,"d",function(){return A});var r=n(799),o=n.n(r),a=n(805),i=n.n(a),s=n(190),u=n.n(s),c=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f="double-faced",l=function(e){return"https://magiccards.info/scans/en/"+("MPS"===e.set?"mpskld":e.set.replace("_","").toLowerCase())+"/"+e.number+".jpg"},p=function(e){return function(t){if(!t.manaCost&&t.layout===f&&-1===t.types.indexOf("Land"))return Object.assign({},e[t.id],{doubleFace:Object.assign({},t,{imageUrlLarge:l(t)})});if(e[t.id]){var n=e[t.id];return Object.assign({},t,{doubleFace:Object.assign({},n,{imageUrlLarge:l(t)})})}return Object.assign({},t)}},d=function(e){return function(t){return t.reduce(function(t,n){var r=e.filter(function(e){return n.name===e.doubleName}),o=c(r,1),a=o[0];return a&&(t[a.id]=Object.assign({},n,{imageUrlLarge:l(n)}),e.splice(u()(e,function(e){return n.name===e.doubleName}),1)),t},{})}},A=function(e,t){return i()(o()(e.map(p(t))),"id")}},880:function(e,t,n){"use strict";function r(e){return{type:c.a,payload:{suggestions:e},meta:{}}}function o(e,t){return{type:c.b,payload:{searchQuery:e,suggestions:t},meta:{}}}function a(e){return{type:c.c,payload:{searchQuery:e},meta:{}}}function i(){return{type:c.d,payload:{},meta:{}}}function s(){return{type:c.e,payload:{},meta:{}}}function u(e){return{type:c.f,payload:{error:e},meta:{}}}t.c=r,t.e=o,t.a=a,t.b=i,t.d=s,t.f=u;var c=n(338)},920:function(e,t,n){"use strict";function r(e){return function(t,r){var a=r();return t(s.b()),a.suggester.latestQuery[e.toLowerCase()]?t(n.i(o.batchActions)([s.a(e.toLowerCase()),s.c(a.suggester.latestQuery[e.toLowerCase()]),s.d()])):n.i(c.f)(e).then(function(r){var a=i()(r,"name"),l=a.filter(function(e){return e.layout===u.a}),p=l.map(function(e){var t=e.names.filter(function(t){return t!==e.name}),n=f(t,1),r=n[0];return{id:e.id,doubleName:r}}),d=n.i(u.b)(p),A=d(l);if(p.length)return n.i(c.b)(p).then(function(r){var i=Object.assign({},A,d(r)),c=n.i(u.d)(a,i);return t(n.i(o.batchActions)([s.a(e.toLowerCase()),s.e(e.toLowerCase(),c),s.c(c),s.d()]))}).catch(function(e){return t(s.f(e.message))});var h=n.i(u.d)(a,A);return t(n.i(o.batchActions)([s.a(e.toLowerCase()),s.e(e.toLowerCase(),h),s.c(h),s.d()]))}).catch(function(e){return t(s.f(e.message))})}}t.a=r;var o=n(317),a=(n.n(o),n(805)),i=n.n(a),s=n(880),u=n(836),c=n(826),f=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},930:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(978),s=(n.n(i),n(1)),u=n.n(s),c=n(0),f=(n.n(c),n(28)),l=n.n(f),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=13,A=27,h=function(e){function t(){var e,n,a,i;r(this,t);for(var s=arguments.length,u=Array(s),c=0;c<s;c++)u[c]=arguments[c];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.state={searchingCard:a.props.searchingCard},a.onCardChange=function(e){a.setState({searchingCard:e.target.value})},a.onFocusInput=function(){setTimeout(function(){a.searchInput.selectionStart=a.searchInput.selectionEnd=1e4},0)},a.onSearchCardByKeyPress=function(e){e.keyCode===A&&(e.preventDefault(),a.searchInput.blur()),e.keyCode===d&&(e.preventDefault(),a.props.handleSearchCardByKeyPress(a.state.searchingCard),a.searchInput.blur())},a.defineSearchInput=function(e){a.searchInput=e},i=n,o(a,i)}return a(t,e),p(t,[{key:"componentDidMount",value:function(){this.state.searchingCard&&this.searchInput.focus()}},{key:"render",value:function(){var e=this.props.className||"SearchBar__wrapper";return u.a.createElement("div",{className:e},u.a.createElement("input",{ref:this.defineSearchInput,className:l()({SearchBar__input:!0,_submitted:this.props.isSubmitted,_desktop:!this.props.isMobile}),type:"search",value:this.state.searchingCard,maxLength:30,placeholder:"Search card",onChange:this.onCardChange,onKeyDown:this.onSearchCardByKeyPress,onFocus:this.onFocusInput}))}}]),t}(u.a.PureComponent);h.propTypes={className:c.string,searchingCard:c.string,isSubmitted:c.bool,isMobile:c.bool,handleSearchCardByKeyPress:c.func.isRequired},h.defaultProps={searchingCard:"",isSubmitted:!1,isMobile:!1,className:""},t.a=h},931:function(e,t,n){"use strict";var r=n(930);t.a=r.a},957:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(987),s=(n.n(i),n(1)),u=n.n(s),c=n(189),f=n(0),l=(n.n(f),n(28)),p=n.n(l),d=n(321),A=n(931),h=n(958),g=n(959),m=n(334),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),C=function(e){return u.a.createElement(m.a,{load:n.e(8).then(n.bind(null,881)),componentProps:e})},b=function(e){function t(){var e,n,a,i;r(this,t);for(var s=arguments.length,u=Array(s),c=0;c<s;c++)u[c]=arguments[c];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.handleSearchCardByKeyPress=function(e){a.props.searchingCard!==e&&window.location.search.indexOf(e)<0&&(a.props.setQueryString(e),a.props.history.push(a.props.history.location.pathname+"?q="+e))},i=n,o(a,i)}return a(t,e),y(t,[{key:"componentWillMount",value:function(){this.props.searchingCard&&this.props.getSuggestions(this.props.searchingCard)}},{key:"shouldComponentUpdate",value:function(e){return this.props.suggestions.length!==e.suggestions}},{key:"componentWillUpdate",value:function(e){e.loading||this.props.searchingCard===e.searchingCard||e.getSuggestions(e.searchingCard)}},{key:"render",value:function(){var e=this.props,t=e.isMobile,n=e.suggestions,r=e.loading,o=e.searchingCard;return u.a.createElement("section",{className:"Suggester"},u.a.createElement("div",{className:p()({Suggester__background:!0,_inited:!!o})},u.a.createElement("div",{className:"Suggester__img"}),u.a.createElement("div",{className:"Suggester__cover"})),u.a.createElement("div",{className:"Suggester__main"},u.a.createElement(A.a,{className:p()({Suggester__search:!0,_submitted:!!o}),isMobile:t,searchingCard:o,isSubmitted:!!o,handleSearchCardByKeyPress:this.handleSearchCardByKeyPress}),!r&&u.a.createElement(C,{cards:n}),r&&u.a.createElement("div",{className:"Suggester__preloader"},u.a.createElement("div",{className:"Suggester__circular"},u.a.createElement(d.a,null)))))}}]),t}(u.a.Component);b.propTypes={history:n.i(f.shape)({}).isRequired,loading:f.bool,isMobile:f.bool,searchingCard:f.string,suggestions:n.i(f.arrayOf)(n.i(f.shape)({id:f.string,imageUrl:f.string})),getSuggestions:f.func.isRequired,setQueryString:f.func.isRequired},b.defaultProps={loading:!1,isMobile:!1,searchingCard:"",suggestions:[]},t.a=n.i(c.b)(g.a,h.a)(b)},958:function(e,t,n){"use strict";function r(e){return n.i(o.bindActionCreators)({getSuggestions:a.a,setQueryString:function(e){return n.i(i.a)(e.toLowerCase())}},e)}t.a=r;var o=n(64),a=n(920),i=n(880)},959:function(e,t,n){"use strict";function r(e){return{searchingCard:u(e),suggestions:s(e),loading:e.suggester.meta.loading,isMobile:e.appContext.isMobile}}t.a=r;var o=n(325),a=(n.n(o),function(e){return e.suggester.query}),i=function(e){return e.suggester.suggestions},s=n.i(o.createSelector)([i],function(e){return e}),u=n.i(o.createSelector)([a],function(e){return e})},964:function(e,t,n){t=e.exports=n(785)(!0),t.push([e.i,"input.SearchBar__input::-webkit-search-cancel-button,input.SearchBar__input::-webkit-search-decoration{display:none}input.SearchBar__input[type=search]{outline:none;max-width:500px;min-width:260px;height:25px;color:#000;cursor:auto;background:#eee url("+n(1032)+") no-repeat 9px;background-size:15px;border:1px solid #a7a7a7;padding:9px 10px 9px 32px;border-radius:20px;-webkit-transition:all .5s;-o-transition:all .5s;transition:all .5s;-webkit-box-shadow:4px 11px 14px 10px rgba(0,0,0,.16),1px 10px 11px 1px rgba(0,0,0,.23);box-shadow:4px 11px 14px 10px rgba(0,0,0,.16),1px 10px 11px 1px rgba(0,0,0,.23);-webkit-box-sizing:content-box;box-sizing:content-box;font-family:inherit;font-size:100%;-webkit-appearance:textfield}input.SearchBar__input[type=search]._desktop{width:100%}input.SearchBar__input[type=search]._submitted{height:15px}","",{version:3,sources:["/home/andrew/Documents/mtg_manager/src/components/SearchBar/SearchBar.css"],names:[],mappings:"AAAA,uGAEI,YAAc,CACjB,AAED,oCACI,aAAc,AACd,gBAAiB,AACjB,gBAAiB,AACjB,YAAa,AACb,WAAY,AACZ,YAAa,AACb,4DAAmE,AACnE,qBAAsB,AACtB,yBAA0B,AAC1B,0BAA2B,AAC3B,mBAAoB,AACpB,2BAA4B,AAC5B,sBAAuB,AACvB,mBAAoB,AACpB,wFAA0F,AAClF,gFAAkF,AAC1F,+BAAgC,AACxB,uBAAwB,AAChC,oBAAqB,AACrB,eAAgB,AAChB,4BAA8B,CACjC,AAED,6CACI,UAAY,CACf,AAED,+CACI,WAAa,CAChB",file:"SearchBar.css",sourcesContent:["input.SearchBar__input::-webkit-search-decoration,\ninput.SearchBar__input::-webkit-search-cancel-button {\n    display: none;\n}\n\ninput.SearchBar__input[type=search] {\n    outline: none;\n    max-width: 500px;\n    min-width: 260px;\n    height: 25px;\n    color: #000;\n    cursor: auto;\n    background: #eee url(./assets/searchIcon.png) no-repeat 9px center;\n    background-size: 15px;\n    border: solid 1px #a7a7a7;\n    padding: 9px 10px 9px 32px;\n    border-radius: 20px;\n    -webkit-transition: all .5s;\n    -o-transition: all .5s;\n    transition: all .5s;\n    -webkit-box-shadow: 4px 11px 14px 10px rgba(0,0,0,.16), 1px 10px 11px 1px rgba(0,0,0,.23);\n            box-shadow: 4px 11px 14px 10px rgba(0,0,0,.16), 1px 10px 11px 1px rgba(0,0,0,.23);\n    -webkit-box-sizing: content-box;\n            box-sizing: content-box;\n    font-family: inherit;\n    font-size: 100%;\n    -webkit-appearance: textfield;\n}\n\ninput.SearchBar__input[type=search]._desktop {\n    width: 100%;\n}\n\ninput.SearchBar__input[type=search]._submitted {\n    height: 15px;\n}\n"],sourceRoot:""}])},973:function(e,t,n){t=e.exports=n(785)(!0),t.push([e.i,"@-webkit-keyframes scrollBgGridLinks{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-550px);transform:translateY(-550px)}}@keyframes scrollBgGridLinks{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-550px);transform:translateY(-550px)}}.Suggester__background._inited{display:none}.Suggester__img{height:100%;width:100%;background-color:#000;background-image:url("+n(1034)+");background-position:50%;background-size:cover;padding-bottom:500px;position:fixed;-webkit-animation:scrollBgGridLinks 50s linear;animation:scrollBgGridLinks 50s linear;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.Suggester__cover{bottom:0;left:0;right:0;top:0;position:fixed;background:rgba(0,0,0,.5)}.Suggester__main{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.Suggester__search{position:fixed;width:100%;left:0;top:40%;z-index:2}.Suggester__search._submitted{top:0;height:40px;padding-top:5px}.Suggester__preloader{width:100%;height:100%;top:0;left:0;position:fixed;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;z-index:0}.Suggester__circular{margin:60px 0}","",{version:3,sources:["/home/andrew/Documents/mtg_manager/src/modules/Suggester/Suggester.css"],names:[],mappings:"AAAA,qCACI,GACI,gCAAmC,AAC3B,uBAA2B,CACtC,AACD,GACI,qCAAsC,AAC9B,4BAA8B,CACzC,CACJ,AAED,6BACI,GACI,gCAAmC,AAC3B,uBAA2B,CACtC,AACD,GACI,qCAAsC,AAC9B,4BAA8B,CACzC,CACJ,AAED,+BACI,YAAc,CACjB,AAED,gBACI,YAAa,AACb,WAAY,AACZ,sBAA0B,AAC1B,+CAA+C,AAC/C,wBAAmC,AACnC,sBAAuB,AACvB,qBAAsB,AACtB,eAAgB,AAChB,+CAAgD,AACxC,uCAAwC,AAChD,qCAAsC,AAC9B,4BAA8B,CACzC,AACD,kBACI,SAAU,AACV,OAAQ,AACR,QAAS,AACT,MAAO,AACP,eAAgB,AAChB,yBAA2B,CAC9B,AAED,iBACI,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,YAAa,AACb,sBAAuB,AACnB,mBAAoB,AACxB,qBAAsB,AAClB,sBAAwB,CAC/B,AAED,mBACI,eAAgB,AAChB,WAAY,AACZ,OAAQ,AACR,QAAS,AACT,SAAW,CACd,AAED,8BACI,MAAO,AACP,YAAa,AACb,eAAiB,CACpB,AAED,sBACI,WAAY,AACZ,YAAa,AACb,MAAO,AACP,OAAQ,AACR,eAAgB,AAChB,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,uBAAwB,AAC5B,sBAAuB,AACnB,mBAAoB,AACxB,0BAA2B,AACvB,sBAAuB,AAC3B,SAAW,CACd,AAED,qBACI,aAAe,CAClB",file:"Suggester.css",sourcesContent:["@-webkit-keyframes scrollBgGridLinks {\n    from {\n        -webkit-transform: translateY(0px);\n                transform: translateY(0px);\n    }\n    to {\n        -webkit-transform: translateY(-550px);\n                transform: translateY(-550px);\n    }\n}\n\n@keyframes scrollBgGridLinks {\n    from {\n        -webkit-transform: translateY(0px);\n                transform: translateY(0px);\n    }\n    to {\n        -webkit-transform: translateY(-550px);\n                transform: translateY(-550px);\n    }\n}\n\n.Suggester__background._inited {\n    display: none;\n}\n\n.Suggester__img {\n    height: 100%;\n    width: 100%;\n    background-color: #000000;\n    background-image: url(./assets/background.jpg);\n    background-position: center center;\n    background-size: cover;\n    padding-bottom: 500px;\n    position: fixed;\n    -webkit-animation: scrollBgGridLinks 50s linear;\n            animation: scrollBgGridLinks 50s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.Suggester__cover {\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: 0;\n    position: fixed;\n    background: rgba(0,0,0,.5);\n}\n\n.Suggester__main {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    height: 100%;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n}\n\n.Suggester__search {\n    position: fixed;\n    width: 100%;\n    left: 0;\n    top: 40%;\n    z-index: 2;\n}\n\n.Suggester__search._submitted {\n    top: 0;\n    height: 40px;\n    padding-top: 5px;\n}\n\n.Suggester__preloader {\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    position: fixed;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    z-index: 0;\n}\n\n.Suggester__circular {\n    margin: 60px 0;\n}\n"],sourceRoot:""}])},978:function(e,t,n){var r=n(964);"string"===typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(786)(r,o);r.locals&&(e.exports=r.locals)},987:function(e,t,n){var r=n(973);"string"===typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(786)(r,o);r.locals&&(e.exports=r.locals)}});
//# sourceMappingURL=5.05ce08c8.chunk.js.map