"use strict";this.default_IdentityRotateCookiesHttp=this.default_IdentityRotateCookiesHttp||{};(function(_){var window=this;
try{
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var t=function(a){return p?r?r.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1},v=function(a){var b;a:{if(b=u.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)},w=function(){return p?!!r&&0<r.brands.length:!1},y=function(){return w()?t("Chromium"):(v("Chrome")||v("CriOS"))&&!(w()?0:v("Edge"))||v("Silk")},aa=function(a){var b=z(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Array.prototype.slice.call(a)),A(a,b|1))},ca=function(){var a=[];ba(a,1);return a},B=function(a){a=a>>
10&1023;return 0===a?536870912:a},D=function(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object},da=function(a){return"number"===typeof a&&Number.isFinite(a)||!!a&&"string"===typeof a&&isFinite(a)},F=function(a,b,c){null==a&&(a=E);E=void 0;if(null==a){var e=96;c?(a=[c],e|=512):a=[];b&&(e=e&-1047553|(b&1023)<<10)}else{if(!Array.isArray(a))throw Error();e=z(a);if(e&64)return a;e|=64;if(c&&(e|=512,c!==a[0]))throw Error();a:{c=a;var f=c.length;if(f){var h=f-1,d=c[h];if(D(d)){e|=
256;b=+!!(e&512)-1;f=h-b;1024<=f&&(ea(c,b,d),f=1023);e=e&-1047553|(f&1023)<<10;break a}}b&&(d=+!!(e&512)-1,b=Math.max(b,f-d),1024<b&&(ea(c,d,{}),e|=256,b=1023),e=e&-1047553|(b&1023)<<10)}}A(a,e);return a},ea=function(a,b,c){for(var e=1023+b,f=a.length,h=e;h<f;h++){var d=a[h];null!=d&&d!==c&&(c[h-b]=d)}a.length=e+1;a[e]=c},ha=function(a,b){return fa(b)},fa=function(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)&&ia&&
null!=a&&a instanceof Uint8Array){if(ja){for(var b="",c=0,e=a.length-10240;c<e;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else{void 0===b&&(b=0);if(!G){G={};c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");e=["+/=","+/","-_=","-_.","-_"];for(var f=0;5>f;f++){var h=c.concat(e[f].split(""));ka[f]=h;for(var d=0;d<h.length;d++){var g=h[d];void 0===G[g]&&(G[g]=d)}}}b=ka[b];c=Array(Math.floor(a.length/
3));e=b[64]||"";for(f=h=0;h<a.length-2;h+=3){var k=a[h],l=a[h+1];g=a[h+2];d=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|g>>6];g=b[g&63];c[f++]=d+k+l+g}d=0;g=e;switch(a.length-h){case 2:d=a[h+1],g=b[(d&15)<<2]||e;case 1:a=a[h],c[f]=b[a>>2]+b[(a&3)<<4|d>>4]+g+e}a=c.join("")}return a}}return a},ma=function(a,b,c,e,f,h){if(null!=a){if(Array.isArray(a))a=f&&0==a.length&&z(a)&1?void 0:h&&z(a)&2?a:la(a,b,c,void 0!==e,f,h);else if(D(a)){var d={},g;for(g in a)d[g]=ma(a[g],b,c,e,f,h);a=d}else a=b(a,e);return a}},
la=function(a,b,c,e,f,h){var d=e||c?z(a):0;e=e?!!(d&32):void 0;a=Array.prototype.slice.call(a);for(var g=0;g<a.length;g++)a[g]=ma(a[g],b,c,e,f,h);c&&c(d,a);return a},oa=function(a){return a.G===na?a.toJSON():fa(a)},J=function(a,b,c){var e=a.constructor.J,f=B(H(c?a.j:b)),h=!1;if(e){if(!c){b=Array.prototype.slice.call(b);var d;if(b.length&&D(d=b[b.length-1]))for(h=0;h<e.length;h++)if(e[h]>=f){Object.assign(b[b.length-1]={},d);break}h=!0}f=b;c=!c;d=H(a.j);a=B(d);d=+!!(d&512)-1;for(var g,k,l=0;l<e.length;l++)if(k=
e[l],k<a){k+=d;var m=f[k];null==m?f[k]=c?I:ca():c&&m!==I&&aa(m)}else g||(m=void 0,f.length&&D(m=f[f.length-1])?g=m:f.push(g={})),m=g[k],null==g[k]?g[k]=c?I:ca():c&&m!==I&&aa(m)}e=b.length;if(!e)return b;var x;if(D(g=b[e-1])){a:{var n=g;f={};c=!1;for(var q in n)a=n[q],Array.isArray(a)&&a!=a&&(c=!0),null!=a?f[q]=a:c=!0;if(c){for(var L in f){n=f;break a}n=null}}n!=g&&(x=!0);e--}for(;0<e;e--){g=b[e-1];if(null!=g)break;var C=!0}if(!x&&!C)return b;var U;h?U=b:U=Array.prototype.slice.call(b,0,e);b=U;h&&
(b.length=e);n&&b.push(n);return b},pa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},qa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a},ra=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("a");
},K=ra(this),M=function(a,b){if(b)a:{var c=K;a=a.split(".");for(var e=0;e<a.length-1;e++){var f=a[e];if(!(f in c))break a;c=c[f]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&qa(c,a,{configurable:!0,writable:!0,value:b})}},sa=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:pa(a)};throw Error("b`"+String(a));},ta="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;
return new b},N;if("function"==typeof Object.setPrototypeOf)N=Object.setPrototypeOf;else{var O;a:{var ua={a:!0},va={};try{va.__proto__=ua;O=va.a;break a}catch(a){}O=!1}N=O?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError("c`"+a);return a}:null}
var wa=N,xa=function(a,b){a.prototype=ta(b.prototype);a.prototype.constructor=a;if(wa)wa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,c);e&&Object.defineProperty(a,c,e)}else a[c]=b[c];a.K=b.prototype};
M("Promise",function(a){function b(){this.g=null}function c(d){return d instanceof f?d:new f(function(g){g(d)})}if(a)return a;b.prototype.h=function(d){if(null==this.g){this.g=[];var g=this;this.i(function(){g.m()})}this.g.push(d)};var e=K.setTimeout;b.prototype.i=function(d){e(d,0)};b.prototype.m=function(){for(;this.g&&this.g.length;){var d=this.g;this.g=[];for(var g=0;g<d.length;++g){var k=d[g];d[g]=null;try{k()}catch(l){this.l(l)}}}this.g=null};b.prototype.l=function(d){this.i(function(){throw d;
})};var f=function(d){this.h=0;this.i=void 0;this.g=[];this.u=!1;var g=this.l();try{d(g.resolve,g.reject)}catch(k){g.reject(k)}};f.prototype.l=function(){function d(l){return function(m){k||(k=!0,l.call(g,m))}}var g=this,k=!1;return{resolve:d(this.B),reject:d(this.m)}};f.prototype.B=function(d){if(d===this)this.m(new TypeError("d"));else if(d instanceof f)this.D(d);else{a:switch(typeof d){case "object":var g=null!=d;break a;case "function":g=!0;break a;default:g=!1}g?this.A(d):this.s(d)}};f.prototype.A=
function(d){var g=void 0;try{g=d.then}catch(k){this.m(k);return}"function"==typeof g?this.F(g,d):this.s(d)};f.prototype.m=function(d){this.v(2,d)};f.prototype.s=function(d){this.v(1,d)};f.prototype.v=function(d,g){if(0!=this.h)throw Error("e`"+d+"`"+g+"`"+this.h);this.h=d;this.i=g;2===this.h&&this.C();this.H()};f.prototype.C=function(){var d=this;e(function(){if(d.I()){var g=K.console;"undefined"!==typeof g&&g.error(d.i)}},1)};f.prototype.I=function(){if(this.u)return!1;var d=K.CustomEvent,g=K.Event,
k=K.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof d?d=new d("unhandledrejection",{cancelable:!0}):"function"===typeof g?d=new g("unhandledrejection",{cancelable:!0}):(d=K.document.createEvent("CustomEvent"),d.initCustomEvent("unhandledrejection",!1,!0,d));d.promise=this;d.reason=this.i;return k(d)};f.prototype.H=function(){if(null!=this.g){for(var d=0;d<this.g.length;++d)h.h(this.g[d]);this.g=null}};var h=new b;f.prototype.D=function(d){var g=this.l();d.o(g.resolve,g.reject)};
f.prototype.F=function(d,g){var k=this.l();try{d.call(g,k.resolve,k.reject)}catch(l){k.reject(l)}};f.prototype.then=function(d,g){function k(n,q){return"function"==typeof n?function(L){try{l(n(L))}catch(C){m(C)}}:q}var l,m,x=new f(function(n,q){l=n;m=q});this.o(k(d,l),k(g,m));return x};f.prototype.catch=function(d){return this.then(void 0,d)};f.prototype.o=function(d,g){function k(){switch(l.h){case 1:d(l.i);break;case 2:g(l.i);break;default:throw Error("f`"+l.h);}}var l=this;null==this.g?h.h(k):
this.g.push(k);this.u=!0};f.resolve=c;f.reject=function(d){return new f(function(g,k){k(d)})};f.race=function(d){return new f(function(g,k){for(var l=sa(d),m=l.next();!m.done;m=l.next())c(m.value).o(g,k)})};f.all=function(d){var g=sa(d),k=g.next();return k.done?c([]):new f(function(l,m){function x(L){return function(C){n[L]=C;q--;0==q&&l(n)}}var n=[],q=0;do n.push(void 0),q++,c(k.value).o(x(n.length-1),m),k=g.next();while(!k.done)})};return f});
var ya="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var e=arguments[c];if(e)for(var f in e)Object.prototype.hasOwnProperty.call(e,f)&&(a[f]=e[f])}return a};M("Object.assign",function(a){return a||ya});M("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});M("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});var u=this||self;var p,P;a:{for(var za=["WIZ_global_data","oxN3nb"],Q=u,R=0;R<za.length;R++)if(Q=Q[za[R]],null==Q){P=null;break a}P=Q}var Aa=P&&P[610401301];p=null!=Aa?Aa:!1;var r,Ba=u.navigator;r=Ba?Ba.userAgentData||null:null;var Ca=w()?!1:v("Trident")||v("MSIE");!v("Android")||y();y();v("Safari")&&(y()||(w()?0:v("Coast"))||(w()?0:v("Opera"))||(w()?0:v("Edge"))||(w()?t("Microsoft Edge"):v("Edg/"))||w()&&t("Opera"));var ka={},G=null;var ia="undefined"!==typeof Uint8Array,ja=!Ca&&"function"===typeof btoa;var S="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0,ba=S?function(a,b){a[S]|=b}:function(a,b){void 0!==a.g?a.g|=b:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})},z=S?function(a){return a[S]|0}:function(a){return a.g|0},H=S?function(a){return a[S]}:function(a){return a.g},A=S?function(a,b){a[S]=b}:function(a,b){void 0!==a.g?a.g=b:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})};var na={},T,I,Da=[];A(Da,39);I=Object.freeze(Da);var E;var Ea=function(a,b,c){var e=a.j,f=H(e);if(f&2)throw Error();a:{var h=B(f);if(b>=h){var d=f;if(f&256)h=e[e.length-1];else{if(null==c)break a;h=e[h+(+!!(f&512)-1)]={};d|=256}h[b]=c;d!==f&&A(e,d)}else e[b+(+!!(f&512)-1)]=c,f&256&&(c=e[e.length-1],b in c&&delete c[b])}return a},Fa=function(a,b,c){if(null!=c&&"number"!==typeof c)throw Error();Ea(a,b,c)},Ga=function(a){var b=void 0===b?0:b;a=a.j;a:{var c=H(a);if(1>=B(c)){if(c&256){a=a[a.length-1][1];break a}}else if(c=1+(+!!(c&512)-1),c<a.length){a=a[c];
break a}a=void 0}a=null==a?a:da(a)?"number"===typeof a?a:a:void 0;return null!=a?a:b};var V=function(a,b,c){this.j=F(a,b,c)};V.prototype.toJSON=function(){if(T)var a=J(this,this.j,!1);else a=la(this.j,oa,void 0,void 0,!1,!1),a=J(this,a,!0);return a};var Ha=function(a){T=!0;try{return JSON.stringify(a.toJSON(),ha)}finally{T=!1}};V.prototype.G=na;V.prototype.toString=function(){return J(this,this.j,!1).toString()};var Ia=function(a){this.j=F(a)};xa(Ia,V);var Ja=function(a){this.j=F(a,0,"identity.hfcr")};xa(Ja,V);var Ka=function(a){return function(b){if(null==b||""==b)b=new a;else{b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);ba(b,32);E=b;b=new a(b);E=void 0}return b}}(Ja);var La=function(a,b,c,e,f,h){this.s=a;this.i=b;this.m=c;this.h=e;this.g=f;this.l=h};La.prototype.start=function(){var a=this;if("undefined"!==typeof fetch)if(Ma()){var b=Na(),c=Date.now();b&&b>c+1E3*this.g&&(b=Date.now()+1E3*this.g,W(b));var e=function(){Oa(a).then(function(){a.l||setTimeout(e,1E3*a.g)})};setTimeout(function(){e()},b&&b>c?b-c:0)}else Pa(this)};
var Pa=function(a){var b=Qa(a);a.l||b.then(function(){var c=function(){Qa(a).then(function(){setTimeout(c,1E3*a.g)})};setTimeout(function(){c()},1E3*a.g)})},Qa=function(a){var b=Ra(a);return Sa(b).then(function(c){c=Ta(Ga(c));c!==a.g&&(a.g=c)}).catch(function(){a.g*=2})},Oa=function(a){var b=Na();if(!b||Date.now()>=b){var c=Math.floor(1E3*Math.random());return new Promise(function(e){setTimeout(function(){var f=Na();!f||Date.now()>=f?e(Ua(a)):e()},c)})}return Promise.resolve()},Sa=function(a){a={method:"POST",
credentials:"same-origin",cache:"no-store",mode:"same-origin",headers:{"Content-Type":"application/json"},body:Ha(a)};if("undefined"!==typeof AbortController){var b=new AbortController;setTimeout(function(){b.abort()},3E4);a.signal=b.signal}return fetch(new Request("/RotateCookies",a)).then(function(c){return c.text()}).then(function(c){return Ka(JSON.stringify(JSON.parse(c.substring(5))[0]))})},Ra=function(a){var b=new Ia;var c=a.s;if(null!=c){if(!da(c))throw a=typeof c,Error("i`"+c+"`"+("object"!=
a?a:c?Array.isArray(c)?"array":a:"null"));c="string"===typeof c?c:c}b=Ea(b,2,c);0!==a.i&&Fa(b,1,a.i);0!==a.m&&Fa(b,3,a.m);0!==a.h&&Fa(b,4,a.h);return b},Ua=function(a){W(Date.now()+1E3*a.g);var b=Ra(a);return Sa(b).then(function(c){c=Ta(Ga(c));c!==a.g&&(W(Date.now()+1E3*c),a.g=c)}).catch(function(){a.g*=2;W(Date.now()+1E3*a.g)})},Ma=function(){try{var a=window.localStorage;if(!a)return!1;a.setItem("cookieRotationStorageAccessTest","1");a.removeItem("cookieRotationStorageAccessTest");return!0}catch(b){return!1}},
Ta=function(a){60>a&&(a=60);return a},Na=function(){try{var a=window.localStorage.getItem("nextRotationAttemptTs");if(!a)return null;var b=Math.floor(Number(a));return Number.isNaN(b)?null:b}catch(c){return null}},W=function(a){try{window.localStorage.setItem("nextRotationAttemptTs",a.toString())}catch(b){}};var Va=function(a,b,c,e,f,h){(new La(a,b,c,e,f,h)).start()},X=["init"],Y=u;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===Va?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=Va;
}catch(e){_._DumpException(e)}
}).call(this,this.default_IdentityRotateCookiesHttp);
// Google Inc.