// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===f.call(r.specifier)?f.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var a=Math.abs,s=String.prototype.toLowerCase,h=String.prototype.toUpperCase,l=String.prototype.replace,c=/e\+(\d)$/,p=/e-(\d)$/,w=/^(\d+)$/,y=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,E=/(\..*[^0])0*e/;function v(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":a(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=l.call(n,E,"$1e"),n=l.call(n,b,"e"),n=l.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,c,"e+0$1"),n=l.call(n,p,"e-0$1"),r.alternate&&(n=l.call(n,w,"$1."),n=l.call(n,y,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===h.call(r.specifier)?h.call(n):s.call(n)}function d(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var m=String.fromCharCode,_=Array.isArray;function T(r){return r!=r}function P(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,i,f,a,s,h,l,c,p,w,y;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",s=1,h=0;h<r.length;h++)if("string"==typeof(n=r[h]))a+=n;else{if(e=void 0!==n.precision,!(n=P(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+h+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,T(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!T(n.arg)){if((f=parseInt(n.arg,10))<0||f>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(f)?String(n.arg):m(f)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(c=n.arg,p=n.width,w=n.padRight,y=void 0,(y=p-c.length)<0?c:c=w?c+d(y):d(y)+c)),a+=n.arg||"",s+=1}return a}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,o;for(t=[],o=0,n=j.exec(r);n;)(e=r.slice(o,j.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),o=j.lastIndex,n=j.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function R(r){var e,t;if("string"!=typeof r)throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[A(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var L,O=Object.prototype,F=O.toString,N=O.__defineGetter__,I=O.__defineSetter__,k=O.__lookupGetter__,B=O.__lookupSetter__;L=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,f;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(k.call(r,e)||B.call(r,e)?(n=r.__proto__,r.__proto__=O,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,f="set"in t,o&&(i||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&N&&N.call(r,e,t.get),f&&I&&I.call(r,e,t.set),r};var C=L;function V(r,e,t){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function M(r){return"number"==typeof r}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function G(){return Y&&"symbol"==typeof Symbol.toStringTag}var $=Object.prototype.toString,W=Object.prototype.hasOwnProperty;function J(r,e){return null!=r&&W.call(r,e)}var Z="function"==typeof Symbol?Symbol:void 0,U="function"==typeof Z?Z.toStringTag:"",X=G()?function(r){var e,t,n;if(null==r)return $.call(r);t=r[U],e=J(r,U);try{r[U]=void 0}catch(e){return $.call(r)}return n=$.call(r),e?r[U]=t:delete r[U],n}:function(r){return $.call(r)},z=Number,H=z.prototype.toString,K=G();function Q(r){return"object"==typeof r&&(r instanceof z||(K?function(r){try{return H.call(r),!0}catch(r){return!1}}(r):"[object Number]"===X(r)))}function q(r){return M(r)||Q(r)}V(q,"isPrimitive",M),V(q,"isObject",Q);var D=Number.POSITIVE_INFINITY,rr=z.NEGATIVE_INFINITY,er=Math.floor;function tr(r){return er(r)===r}function nr(r){return r<D&&r>rr&&tr(r)}function or(r){return M(r)&&nr(r)}function ir(r){return Q(r)&&nr(r.valueOf())}function fr(r){return or(r)||ir(r)}function ur(r){return or(r)&&r>=0}function ar(r){return ir(r)&&r.valueOf()>=0}function sr(r){return ur(r)||ar(r)}V(fr,"isPrimitive",or),V(fr,"isObject",ir),V(sr,"isPrimitive",ur),V(sr,"isObject",ar);var hr=4294967295;function lr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&tr(r.length)&&r.length>=0&&r.length<=hr}var cr=9007199254740991;function pr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&tr(r.length)&&r.length>=0&&r.length<=cr}var wr="function"==typeof ArrayBuffer;function yr(r){return wr&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===X(r)}var gr=Array.isArray?Array.isArray:function(r){return"[object Array]"===X(r)};function br(r){return"object"==typeof r&&null!==r&&!gr(r)}function Er(r){if("function"!=typeof r)throw new TypeError(R("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!gr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}function vr(r){return"string"==typeof r}var dr=String.prototype.valueOf,mr=G();function _r(r){return"object"==typeof r&&(r instanceof String||(mr?function(r){try{return dr.call(r),!0}catch(r){return!1}}(r):"[object String]"===X(r)))}function Tr(r){return vr(r)||_r(r)}V(Tr,"isPrimitive",vr),V(Tr,"isObject",_r);var Pr=Er(Tr.isPrimitive),Sr=Er(Tr.isObject),jr=Er(Tr);V(jr,"primitives",Pr),V(jr,"objects",Sr);var xr=/./;function Ar(r){return"boolean"==typeof r}var Rr=Boolean,Lr=Boolean.prototype.toString,Or=G();function Fr(r){return"object"==typeof r&&(r instanceof Rr||(Or?function(r){try{return Lr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===X(r)))}function Nr(r){return Ar(r)||Fr(r)}V(Nr,"isPrimitive",Ar),V(Nr,"isObject",Fr);var Ir="object"==typeof self?self:null,kr="object"==typeof window?window:null,Br="object"==typeof globalThis?globalThis:null,Cr=function(r){if(arguments.length){if(!Ar(r))throw new TypeError(R("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Br)return Br;if(Ir)return Ir;if(kr)return kr;throw new Error("unexpected error. Unable to resolve global object.")}(),Vr=Cr.document&&Cr.document.childNodes,Mr=Int8Array;function Yr(){return/^\s*function\s*([^(]*)/i}var Gr=/^\s*function\s*([^(]*)/i;function $r(r){return null!==r&&"object"==typeof r}function Wr(r){var e,t,n,o;if(("Object"===(t=X(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Gr.exec(n.toString()))return e[1]}return $r(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}V(Yr,"REGEXP",Gr),V($r,"isObjectLikeArray",Er($r));var Jr="function"==typeof xr||"object"==typeof Mr||"function"==typeof Vr?function(r){return Wr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?Wr(r).toLowerCase():e};function Zr(r){return"function"===Jr(r)}function Ur(r,e){if(!(this instanceof Ur))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!M(r))throw new TypeError(R("invalid argument. Real component must be a number. Value: `%s`.",r));if(!M(e))throw new TypeError(R("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return C(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),C(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}V(Ur,"BYTES_PER_ELEMENT",8),V(Ur.prototype,"BYTES_PER_ELEMENT",8),V(Ur.prototype,"byteLength",16),V(Ur.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),V(Ur.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Xr="function"==typeof Math.fround?Math.fround:null,zr="function"==typeof Float32Array,Hr="function"==typeof Float32Array?Float32Array:null,Kr="function"==typeof Float32Array?Float32Array:void 0,Qr=function(){var r,e,t;if("function"!=typeof Hr)return!1;try{e=new Hr([1,3.14,-3.14,5e40]),t=e,r=(zr&&t instanceof Float32Array||"[object Float32Array]"===X(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===D}catch(e){r=!1}return r}()?Kr:function(){throw new Error("not implemented")},qr=new Qr(1),Dr="function"==typeof Xr?Xr:function(r){return qr[0]=r,qr[0]};function re(r,e){if(!(this instanceof re))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!M(r))throw new TypeError(R("invalid argument. Real component must be a number. Value: `%s`.",r));if(!M(e))throw new TypeError(R("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return C(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Dr(r)}),C(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Dr(e)}),this}function ee(r){return r instanceof Ur||r instanceof re||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function te(r){return tr(r/2)}V(re,"BYTES_PER_ELEMENT",4),V(re.prototype,"BYTES_PER_ELEMENT",4),V(re.prototype,"byteLength",8),V(re.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),V(re.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var ne=8,oe=16;function ie(){return"function"==typeof Z&&"symbol"==typeof Z("foo")&&J(Z,"iterator")&&"symbol"==typeof Z.iterator}var fe=ie()?Symbol.iterator:null;function ue(r,e,t){C(r,e,{configurable:!1,enumerable:!1,get:t})}var ae="function"==typeof Float64Array,se="function"==typeof Float64Array?Float64Array:null,he="function"==typeof Float64Array?Float64Array:void 0,le=function(){var r,e,t;if("function"!=typeof se)return!1;try{e=new se([1,3.14,-3.14,NaN]),t=e,r=(ae&&t instanceof Float64Array||"[object Float64Array]"===X(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?he:function(){throw new Error("not implemented")};function ce(r,e){if(!(this instanceof ce))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!M(r))throw new TypeError(R("invalid argument. Real component must be a number. Value: `%s`.",r));if(!M(e))throw new TypeError(R("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return C(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),C(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}function pe(r){return r.re}function we(r){return r.im}V(ce,"BYTES_PER_ELEMENT",8),V(ce.prototype,"BYTES_PER_ELEMENT",8),V(ce.prototype,"byteLength",16),V(ce.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),V(ce.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var ye={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}},ge={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function be(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}function Ee(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(lr(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!ee(n))return new TypeError(be("00P24",n));e.push(pe(n),we(n))}return e}var ve=2*le.BYTES_PER_ELEMENT,de=ie();function me(r){return r instanceof Pe||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function _e(r){return r===Pe||"Complex64Array"===r.name}function Te(r,e){return new ce(r[e*=2],r[e+1])}function Pe(){var r,e,t,n,o,i,f;if(e=arguments.length,!(this instanceof Pe))return 0===e?new Pe:1===e?new Pe(arguments[0]):2===e?new Pe(arguments[0],arguments[1]):new Pe(arguments[0],arguments[1],arguments[2]);if(0===e)t=new le(0);else if(1===e)if(ur(arguments[0]))t=new le(2*arguments[0]);else if(pr(arguments[0]))if((n=(t=arguments[0]).length)&&gr(t)&&ee(t[0])){if(t=function(r,e){var t,n,o,i;for(t=e.length,i=0,o=0;o<t;o++){if(!ee(n=e[o]))return null;r[i]=pe(n),r[i+1]=we(n),i+=2}return r}(new le(2*n),t),null===t){if(!te(n))throw new RangeError(be("00P26",n));t=new le(arguments[0])}}else{if("object"==typeof(f=t)&&null!==f&&"Complex64Array"===f.constructor.name&&f.BYTES_PER_ELEMENT===ne)i=0,t=new Qr((o=t).buffer,o.byteOffset+o.BYTES_PER_ELEMENT*i,2*(o.length-i));else if(function(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===oe}(t))t=function(r,e){return new le(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}(t,0);else if(!te(n))throw new RangeError(be("00P27",n));t=new le(t)}else if(yr(arguments[0])){if(!tr((t=arguments[0]).byteLength/ve))throw new RangeError(be("00PE9",ve,t.byteLength));t=new le(t)}else{if(!br(arguments[0]))throw new TypeError(be("00P2A",arguments[0]));if(t=arguments[0],!1===de)throw new TypeError(be("00P29",t));if(!Zr(t[fe]))throw new TypeError(be("00P2A",t));if(!Zr((t=t[fe]()).next))throw new TypeError(be("00P2A",t));if((t=Ee(t))instanceof Error)throw t;t=new le(t)}else{if(!yr(t=arguments[0]))throw new TypeError(be("00P2B",t));if(!ur(r=arguments[1]))throw new TypeError(be("00P2C",r));if(!tr(r/ve))throw new RangeError(be("00PEA",ve,r));if(2===e){if(!tr((n=t.byteLength-r)/ve))throw new RangeError(be("00P2E",ve,n));t=new le(t,r)}else{if(!ur(n=arguments[2]))throw new TypeError(be("00P2F",n));if(n*ve>t.byteLength-r)throw new RangeError(be("00P2G",n*ve));t=new le(t,r,2*n)}}return V(this,"_buffer",t),V(this,"_length",t.length/2),this}return V(Pe,"BYTES_PER_ELEMENT",ve),V(Pe,"name","Complex128Array"),V(Pe,"from",(function(r){var e,t,n,o,i,f,u,a,s,h,l,c;if(!Zr(this))throw new TypeError(be("00P01"));if(!_e(this))throw new TypeError(be("00P02"));if((t=arguments.length)>1){if(!Zr(n=arguments[1]))throw new TypeError(be("00P2H",n));t>2&&(e=arguments[2])}if(me(r)){if(a=r.length,n){for(i=(o=new this(a))._buffer,c=0,l=0;l<a;l++){if(ee(h=n.call(e,r.get(l),l)))i[c]=pe(h),i[c+1]=we(h);else{if(!(lr(h)&&h.length>=2))throw new TypeError(be("00P25",h));i[c]=h[0],i[c+1]=h[1]}c+=2}return o}return new this(r)}if(pr(r)){if(n){for(a=r.length,u=r.get&&r.set?function(r){var e=ge[r];return"function"==typeof e?e:ge.default}("default"):function(r){var e=ye[r];return"function"==typeof e?e:ye.default}("default"),l=0;l<a;l++)if(!ee(u(r,l))){s=!0;break}if(s){if(!te(a))throw new RangeError(be("00P2I",a));for(i=(o=new this(a/2))._buffer,l=0;l<a;l++)i[l]=n.call(e,u(r,l),l);return o}for(i=(o=new this(a))._buffer,c=0,l=0;l<a;l++){if(ee(h=n.call(e,u(r,l),l)))i[c]=pe(h),i[c+1]=we(h);else{if(!(lr(h)&&h.length>=2))throw new TypeError(be("00P25",h));i[c]=h[0],i[c+1]=h[1]}c+=2}return o}return new this(r)}if(br(r)&&de&&Zr(r[fe])){if(!Zr((i=r[fe]()).next))throw new TypeError(be("00P2J",r));if(f=n?function(r,e,t){var n,o,i,f;for(n=[],f=-1;!(o=r.next()).done;)if(f+=1,lr(i=e.call(t,o.value,f))&&i.length>=2)n.push(i[0],i[1]);else{if(!ee(i))return new TypeError(be("00P25",i));n.push(pe(i),we(i))}return n}(i,n,e):Ee(i),f instanceof Error)throw f;for(i=(o=new this(a=f.length/2))._buffer,l=0;l<a;l++)i[l]=f[l];return o}throw new TypeError(be("00P2J",r))})),V(Pe,"of",(function(){var r,e;if(!Zr(this))throw new TypeError(be("00P01"));if(!_e(this))throw new TypeError(be("00P02"));for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),V(Pe.prototype,"at",(function(r){if(!me(this))throw new TypeError(be("00P02"));if(!tr(r))throw new TypeError(be("00P8A",r));if(r<0&&(r+=this._length),!(r<0||r>=this._length))return Te(this._buffer,r)})),ue(Pe.prototype,"buffer",(function(){return this._buffer.buffer})),ue(Pe.prototype,"byteLength",(function(){return this._buffer.byteLength})),ue(Pe.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),V(Pe.prototype,"BYTES_PER_ELEMENT",Pe.BYTES_PER_ELEMENT),V(Pe.prototype,"copyWithin",(function(r,e){if(!me(this))throw new TypeError(be("00P02"));return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),V(Pe.prototype,"entries",(function(){var r,e,t,n,o,i,f;if(!me(this))throw new TypeError(be("00P02"));return e=this,r=this._buffer,n=this._length,i=-1,f=-2,V(t={},"next",(function(){var e;return i+=1,o||i>=n?{done:!0}:(e=new ce(r[f+=2],r[f+1]),{value:[i,e],done:!1})})),V(t,"return",(function(r){return o=!0,arguments.length?{value:r,done:!0}:{done:!0}})),fe&&V(t,fe,(function(){return e.entries()})),t})),V(Pe.prototype,"every",(function(r,e){var t,n;if(!me(this))throw new TypeError(be("00P02"));if(!Zr(r))throw new TypeError(be("00P3c",r));for(t=this._buffer,n=0;n<this._length;n++)if(!r.call(e,Te(t,n),n,this))return!1;return!0})),V(Pe.prototype,"fill",(function(r,e,t){var n,o,i,f,u,a;if(!me(this))throw new TypeError(be("00P02"));if(!ee(r))throw new TypeError(be("00PFG",r));if(n=this._buffer,o=this._length,arguments.length>1){if(!tr(e))throw new TypeError(be("00P7f",e));if(e<0&&(e+=o)<0&&(e=0),arguments.length>2){if(!tr(t))throw new TypeError(be("00P2z",t));t<0&&(t+=o)<0&&(t=0),t>o&&(t=o)}else t=o}else e=0,t=o;for(f=pe(r),u=we(r),a=e;a<t;a++)n[i=2*a]=f,n[i+1]=u;return this})),V(Pe.prototype,"filter",(function(r,e){var t,n,o,i;if(!me(this))throw new TypeError(be("00P02"));if(!Zr(r))throw new TypeError(be("00P3c",r));for(t=this._buffer,n=[],o=0;o<this._length;o++)i=Te(t,o),r.call(e,i,o,this)&&n.push(i);return new this.constructor(n)})),V(Pe.prototype,"find",(function(r,e){var t,n,o;if(!me(this))throw new TypeError(be("00P02"));if(!Zr(r))throw new TypeError(be("00P3c",r));for(t=this._buffer,n=0;n<this._length;n++)if(o=Te(t,n),r.call(e,o,n,this))return o})),V(Pe.prototype,"findIndex",(function(r,e){var t,n,o;if(!me(this))throw new TypeError(be("00P02"));if(!Zr(r))throw new TypeError(be("00P3c",r));for(t=this._buffer,n=0;n<this._length;n++)if(o=Te(t,n),r.call(e,o,n,this))return n;return-1})),V(Pe.prototype,"findLast",(function(r,e){var t,n,o;if(!me(this))throw new TypeError(be("00P02"));if(!Zr(r))throw new TypeError(be("00P3c",r));for(t=this._buffer,n=this._length-1;n>=0;n--)if(o=Te(t,n),r.call(e,o,n,this))return o})),V(Pe.prototype,"findLastIndex",(function(r,e){var t,n,o;if(!me(this))throw new TypeError(be("00P02"));if(!Zr(r))throw new TypeError(be("00P3c",r));for(t=this._buffer,n=this._length-1;n>=0;n--)if(o=Te(t,n),r.call(e,o,n,this))return n;return-1})),V(Pe.prototype,"forEach",(function(r,e){var t,n,o;if(!me(this))throw new TypeError(be("00P02"));if(!Zr(r))throw new TypeError(be("00P3c",r));for(t=this._buffer,n=0;n<this._length;n++)o=Te(t,n),r.call(e,o,n,this)})),V(Pe.prototype,"get",(function(r){if(!me(this))throw new TypeError(be("00P02"));if(!ur(r))throw new TypeError(be("00P2K",r));if(!(r>=this._length))return Te(this._buffer,r)})),ue(Pe.prototype,"length",(function(){return this._length})),V(Pe.prototype,"includes",(function(r,e){var t,n,o,i,f;if(!me(this))throw new TypeError(be("00P02"));if(!ee(r))throw new TypeError(be("00PFG",r));if(arguments.length>1){if(!tr(e))throw new TypeError(be("00P7f",e));e<0&&(e+=this._length)<0&&(e=0)}else e=0;for(o=pe(r),i=we(r),t=this._buffer,f=e;f<this._length;f++)if(o===t[n=2*f]&&i===t[n+1])return!0;return!1})),V(Pe.prototype,"indexOf",(function(r,e){var t,n,o,i,f;if(!me(this))throw new TypeError(be("00P02"));if(!ee(r))throw new TypeError(be("00PFG",r));if(arguments.length>1){if(!tr(e))throw new TypeError(be("00P7f",e));e<0&&(e+=this._length)<0&&(e=0)}else e=0;for(o=pe(r),i=we(r),t=this._buffer,f=e;f<this._length;f++)if(o===t[n=2*f]&&i===t[n+1])return f;return-1})),V(Pe.prototype,"join",(function(r){var e,t,n,o;if(!me(this))throw new TypeError(be("00P02"));if(0===arguments.length)n=",";else{if(!Tr(r))throw new TypeError(be("00P3F",r));n=r}for(e=[],t=this._buffer,o=0;o<this._length;o++)e.push(Te(t,o).toString());return e.join(n)})),V(Pe.prototype,"keys",(function(){var r,e,t,n,o;if(!me(this))throw new TypeError(be("00P02"));return r=this,t=this._length,o=-1,V(e={},"next",(function(){return o+=1,n||o>=t?{done:!0}:{value:o,done:!1}})),V(e,"return",(function(r){return n=!0,arguments.length?{value:r,done:!0}:{done:!0}})),fe&&V(e,fe,(function(){return r.keys()})),e})),V(Pe.prototype,"lastIndexOf",(function(r,e){var t,n,o,i,f;if(!me(this))throw new TypeError(be("00P02"));if(!ee(r))throw new TypeError(be("00PFG",r));if(arguments.length>1){if(!tr(e))throw new TypeError(be("00P7f",e));e>=this._length?e=this._length-1:e<0&&(e+=this._length)}else e=this._length-1;for(o=pe(r),i=we(r),t=this._buffer,f=e;f>=0;f--)if(o===t[n=2*f]&&i===t[n+1])return f;return-1})),V(Pe.prototype,"map",(function(r,e){var t,n,o,i,f;if(!me(this))throw new TypeError(be("00P02"));if(!Zr(r))throw new TypeError(be("00P3c",r));for(n=this._buffer,t=(o=new this.constructor(this._length))._buffer,i=0;i<this._length;i++)if(ee(f=r.call(e,Te(n,i),i,this)))t[2*i]=pe(f),t[2*i+1]=we(f);else{if(!lr(f)||2!==f.length)throw new TypeError(be("00P25",f));t[2*i]=f[0],t[2*i+1]=f[1]}return o})),V(Pe.prototype,"reduce",(function(r,e){var t,n,o,i;if(!me(this))throw new TypeError(be("00P02"));if(!Zr(r))throw new TypeError(be("00P3c",r));if(t=this._buffer,o=this._length,arguments.length>1)n=e,i=0;else{if(0===o)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");n=Te(t,0),i=1}for(;i<o;i++)n=r(n,Te(t,i),i,this);return n})),V(Pe.prototype,"reduceRight",(function(r,e){var t,n,o,i;if(!me(this))throw new TypeError(be("00P02"));if(!Zr(r))throw new TypeError(be("00P3c",r));if(t=this._buffer,o=this._length,arguments.length>1)n=e,i=o-1;else{if(0===o)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");n=Te(t,o-1),i=o-2}for(;i>=0;i--)n=r(n,Te(t,i),i,this);return n})),V(Pe.prototype,"reverse",(function(){var r,e,t,n,o,i;if(!me(this))throw new TypeError(be("00P02"));for(t=this._length,r=this._buffer,n=er(t/2),o=0;o<n;o++)i=t-o-1,e=r[2*o],r[2*o]=r[2*i],r[2*i]=e,e=r[2*o+1],r[2*o+1]=r[2*i+1],r[2*i+1]=e;return this})),V(Pe.prototype,"set",(function(r){var e,t,n,o,i,f,u,a,s;if(!me(this))throw new TypeError(be("00P02"));if(n=this._buffer,arguments.length>1){if(!ur(t=arguments[1]))throw new TypeError(be("00P2L",t))}else t=0;if(ee(r)){if(t>=this._length)throw new RangeError(be("00P2M",t));return n[t*=2]=pe(r),void(n[t+1]=we(r))}if(me(r)){if(t+(f=r._length)>this._length)throw new RangeError(be("00P03"));if(e=r._buffer,s=n.byteOffset+t*ve,e.buffer===n.buffer&&e.byteOffset<s&&e.byteOffset+e.byteLength>s){for(o=new le(e.length),a=0;a<e.length;a++)o[a]=e[a];e=o}for(t*=2,s=0,a=0;a<f;a++)n[t]=e[s],n[t+1]=e[s+1],t+=2,s+=2}else{if(!pr(r))throw new TypeError(be("00P2N",r));for(f=r.length,a=0;a<f;a++)if(!ee(r[a])){i=!0;break}if(i){if(!te(f))throw new RangeError(be("00P26",f));if(t+f/2>this._length)throw new RangeError(be("00P03"));if(e=r,s=n.byteOffset+t*ve,e.buffer===n.buffer&&e.byteOffset<s&&e.byteOffset+e.byteLength>s){for(o=new le(f),a=0;a<f;a++)o[a]=e[a];e=o}for(t*=2,f/=2,s=0,a=0;a<f;a++)n[t]=e[s],n[t+1]=e[s+1],t+=2,s+=2;return}if(t+f>this._length)throw new RangeError(be("00P03"));for(t*=2,a=0;a<f;a++)u=r[a],n[t]=pe(u),n[t+1]=we(u),t+=2}})),V(Pe.prototype,"slice",(function(r,e){var t,n,o,i,f,u,a;if(!me(this))throw new TypeError(be("00P02"));if(f=this._buffer,u=this._length,0===arguments.length)r=0,e=u;else{if(!tr(r))throw new TypeError(be("00P7e",r));if(r<0&&(r+=u)<0&&(r=0),1===arguments.length)e=u;else{if(!tr(e))throw new TypeError(be("00P7f",e));e<0?(e+=u)<0&&(e=0):e>u&&(e=u)}}for(t=r<e?e-r:0,n=(o=new this.constructor(t))._buffer,a=0;a<t;a++)i=2*(a+r),n[2*a]=f[i],n[2*a+1]=f[i+1];return o})),V(Pe.prototype,"some",(function(r,e){var t,n;if(!me(this))throw new TypeError(be("00P02"));if(!Zr(r))throw new TypeError(be("00P3c",r));for(t=this._buffer,n=0;n<this._length;n++)if(r.call(e,Te(t,n),n,this))return!0;return!1})),V(Pe.prototype,"sort",(function(r){var e,t,n,o,i;if(!me(this))throw new TypeError(be("00P02"));if(!Zr(r))throw new TypeError(be("00P3c",r));for(t=this._buffer,n=this._length,e=[],o=0;o<n;o++)e.push(Te(t,o));for(e.sort(r),o=0;o<n;o++)t[i=2*o]=pe(e[o]),t[i+1]=we(e[o]);return this})),V(Pe.prototype,"subarray",(function(r,e){var t,n,o;if(!me(this))throw new TypeError(be("00P02"));if(n=this._buffer,o=this._length,0===arguments.length)r=0,e=o;else{if(!tr(r))throw new TypeError(be("00P7e",r));if(r<0&&(r+=o)<0&&(r=0),1===arguments.length)e=o;else{if(!tr(e))throw new TypeError(be("00P7f",e));e<0?(e+=o)<0&&(e=0):e>o&&(e=o)}}return r>=o?(o=0,t=n.byteLength):r>=e?(o=0,t=n.byteOffset+r*ve):(o=e-r,t=n.byteOffset+r*ve),new this.constructor(n.buffer,t,o<0?0:o)})),V(Pe.prototype,"toLocaleString",(function(r,e){var t,n,o,i,f;if(!me(this))throw new TypeError(be("00P02"));if(0===arguments.length)n=[];else{if(!Tr(r)&&!Pr(r))throw new TypeError(be("invalid argument. First argument must be a string or an array of strings. Value: `%s`.",r));n=r}if(arguments.length<2)t={};else{if(!br(e))throw new TypeError(be("00P2V",e));t=e}for(i=this._buffer,o=[],f=0;f<this._length;f++)o.push(Te(i,f).toLocaleString(n,t));return o.join(",")})),V(Pe.prototype,"toReversed",(function(){var r,e,t,n,o,i;if(!me(this))throw new TypeError(be("00P02"));for(t=this._length,e=new this.constructor(t),n=this._buffer,r=e._buffer,o=0;o<t;o++)i=t-o-1,r[2*o]=n[2*i],r[2*o+1]=n[2*i+1];return e})),V(Pe.prototype,"toSorted",(function(r){var e,t,n,o;if(!me(this))throw new TypeError(be("00P02"));if(!Zr(r))throw new TypeError(be("00P3c",r));for(t=this._buffer,n=this._length,e=[],o=0;o<n;o++)e.push(Te(t,o));return e.sort(r),new Pe(e)})),V(Pe.prototype,"toString",(function(){var r,e,t;if(!me(this))throw new TypeError(be("00P02"));for(r=[],e=this._buffer,t=0;t<this._length;t++)r.push(Te(e,t).toString());return r.join(",")})),V(Pe.prototype,"values",(function(){var r,e,t,n,o,i;if(!me(this))throw new TypeError(be("00P02"));return e=this,o=this._buffer,t=this._length,i=-1,V(r={},"next",(function(){return i+=1,n||i>=t?{done:!0}:{value:Te(o,i),done:!1}})),V(r,"return",(function(r){return n=!0,arguments.length?{value:r,done:!0}:{done:!0}})),fe&&V(r,fe,(function(){return e.values()})),r})),V(Pe.prototype,"with",(function(r,e){var t,n,o;if(!me(this))throw new TypeError(be("00P02"));if(!tr(r))throw new TypeError(be("00P7e",r));if(o=this._length,r<0&&(r+=o),r<0||r>=o)throw new RangeError(be("00PFP",r));if(!ee(e))throw new TypeError(be("00PFQ",e));return(t=(n=new this.constructor(this._buffer))._buffer)[2*r]=pe(e),t[2*r+1]=we(e),n})),Pe},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).Complex128Array=e();
//# sourceMappingURL=browser.js.map