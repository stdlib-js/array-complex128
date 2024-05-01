// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===f.call(r.specifier)?f.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var a=Math.abs,h=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,c=/e\+(\d)$/,p=/e-(\d)$/,w=/^(\d+)$/,y=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,E=/(\..*[^0])0*e/;function v(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":a(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=l.call(n,E,"$1e"),n=l.call(n,b,"e"),n=l.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,c,"e+0$1"),n=l.call(n,p,"e-0$1"),r.alternate&&(n=l.call(n,w,"$1."),n=l.call(n,y,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):h.call(n)}function d(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var _=String.fromCharCode,m=isNaN,T=Array.isArray;function P(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function j(r){var e,t,n,i,f,a,h,s,l,c,p,w,y;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",h=1,s=0;s<r.length;s++)if(n=r[s],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=P(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(h=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[h],10),h+=1,m(n.width))throw new TypeError("the argument for * width at position "+h+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[h],10),h+=1,m(n.precision))throw new TypeError("the argument for * precision at position "+h+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[h],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!m(n.arg)){if((f=parseInt(n.arg,10))<0||f>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=m(f)?String(n.arg):_(f)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(c=n.arg,p=n.width,w=n.padRight,y=void 0,(y=p-c.length)<0?c:c=w?c+d(y):d(y)+c)),a+=n.arg||"",h+=1}return a}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,o;for(t=[],o=0,n=S.exec(r);n;)(e=r.slice(o,S.lastIndex-n[0].length)).length&&t.push(e),t.push(A(n)),o=S.lastIndex,n=S.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function R(r){var e,t;if("string"!=typeof r)throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return j.apply(null,e)}var O,F=Object.prototype,L=F.toString,N=F.__defineGetter__,I=F.__defineSetter__,k=F.__lookupGetter__,B=F.__lookupSetter__;O=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,f;if("object"!=typeof r||null===r||"[object Array]"===L.call(r))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===L.call(t))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(k.call(r,e)||B.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,f="set"in t,o&&(i||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&N&&N.call(r,e,t.get),f&&I&&I.call(r,e,t.set),r};var C=O;function M(r,e,t){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function V(r){return"number"==typeof r}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function G(){return Y&&"symbol"==typeof Symbol.toStringTag}var $=Object.prototype.toString;var W=Object.prototype.hasOwnProperty;function Z(r,e){return null!=r&&W.call(r,e)}var J="function"==typeof Symbol?Symbol:void 0,U="function"==typeof J?J.toStringTag:"";var X=G()?function(r){var e,t,n;if(null==r)return $.call(r);t=r[U],e=Z(r,U);try{r[U]=void 0}catch(e){return $.call(r)}return n=$.call(r),e?r[U]=t:delete r[U],n}:function(r){return $.call(r)},z=Number,H=z.prototype.toString;var K=G();function Q(r){return"object"==typeof r&&(r instanceof z||(K?function(r){try{return H.call(r),!0}catch(r){return!1}}(r):"[object Number]"===X(r)))}function q(r){return V(r)||Q(r)}M(q,"isPrimitive",V),M(q,"isObject",Q);var D=Number.POSITIVE_INFINITY,rr=z.NEGATIVE_INFINITY,er=Math.floor;function tr(r){return er(r)===r}function nr(r){return r<D&&r>rr&&tr(r)}function or(r){return V(r)&&nr(r)}function ir(r){return Q(r)&&nr(r.valueOf())}function fr(r){return or(r)||ir(r)}function ur(r){return or(r)&&r>=0}function ar(r){return ir(r)&&r.valueOf()>=0}function hr(r){return ur(r)||ar(r)}M(fr,"isPrimitive",or),M(fr,"isObject",ir),M(hr,"isPrimitive",ur),M(hr,"isObject",ar);var sr=4294967295;function lr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&tr(r.length)&&r.length>=0&&r.length<=sr}var cr=9007199254740991;function pr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&tr(r.length)&&r.length>=0&&r.length<=cr}var wr="function"==typeof ArrayBuffer;function yr(r){return wr&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===X(r)}var gr=Array.isArray?Array.isArray:function(r){return"[object Array]"===X(r)};function br(r){return"object"==typeof r&&null!==r&&!gr(r)}function Er(r){return"string"==typeof r}var vr=String.prototype.valueOf;var dr=G();function _r(r){return"object"==typeof r&&(r instanceof String||(dr?function(r){try{return vr.call(r),!0}catch(r){return!1}}(r):"[object String]"===X(r)))}function mr(r){return Er(r)||_r(r)}M(mr,"isPrimitive",Er),M(mr,"isObject",_r);var Tr=/./;function Pr(r){return"boolean"==typeof r}var jr=Boolean,Sr=Boolean.prototype.toString;var Ar=G();function xr(r){return"object"==typeof r&&(r instanceof jr||(Ar?function(r){try{return Sr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===X(r)))}function Rr(r){return Pr(r)||xr(r)}M(Rr,"isPrimitive",Pr),M(Rr,"isObject",xr);var Or="object"==typeof self?self:null,Fr="object"==typeof window?window:null,Lr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Nr="object"==typeof Lr?Lr:null,Ir="object"==typeof globalThis?globalThis:null;var kr=function(r){if(arguments.length){if(!Pr(r))throw new TypeError(R("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Ir)return Ir;if(Or)return Or;if(Fr)return Fr;if(Nr)return Nr;throw new Error("unexpected error. Unable to resolve global object.")}(),Br=kr.document&&kr.document.childNodes,Cr=Int8Array;function Mr(){return/^\s*function\s*([^(]*)/i}var Vr=/^\s*function\s*([^(]*)/i;function Yr(r){return null!==r&&"object"==typeof r}function Gr(r){var e,t,n,o;if(("Object"===(t=X(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Vr.exec(n.toString()))return e[1]}return Yr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}M(Mr,"REGEXP",Vr),M(Yr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(R("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!gr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Yr));var $r="function"==typeof Tr||"object"==typeof Cr||"function"==typeof Br?function(r){return Gr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Gr(r).toLowerCase():e};function Wr(r){return"function"===$r(r)}function Zr(r,e){if(!(this instanceof Zr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!V(r))throw new TypeError(R("invalid argument. Real component must be a number. Value: `%s`.",r));if(!V(e))throw new TypeError(R("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return C(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),C(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}M(Zr,"BYTES_PER_ELEMENT",8),M(Zr.prototype,"BYTES_PER_ELEMENT",8),M(Zr.prototype,"byteLength",16),M(Zr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),M(Zr.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Jr="function"==typeof Math.fround?Math.fround:null,Ur="function"==typeof Float32Array;var Xr="function"==typeof Float32Array?Float32Array:null;var zr="function"==typeof Float32Array?Float32Array:void 0;var Hr=function(){var r,e,t;if("function"!=typeof Xr)return!1;try{e=new Xr([1,3.14,-3.14,5e40]),t=e,r=(Ur&&t instanceof Float32Array||"[object Float32Array]"===X(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===D}catch(e){r=!1}return r}()?zr:function(){throw new Error("not implemented")},Kr=new Hr(1);var Qr="function"==typeof Jr?Jr:function(r){return Kr[0]=r,Kr[0]};function qr(r,e){if(!(this instanceof qr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!V(r))throw new TypeError(R("invalid argument. Real component must be a number. Value: `%s`.",r));if(!V(e))throw new TypeError(R("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return C(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Qr(r)}),C(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Qr(e)}),this}function Dr(r){return r instanceof Zr||r instanceof qr||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function re(r){return tr(r/2)}M(qr,"BYTES_PER_ELEMENT",4),M(qr.prototype,"BYTES_PER_ELEMENT",4),M(qr.prototype,"byteLength",8),M(qr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),M(qr.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var ee=8;var te=16;function ne(){return"function"==typeof J&&"symbol"==typeof J("foo")&&Z(J,"iterator")&&"symbol"==typeof J.iterator}var oe=ne()?Symbol.iterator:null;function ie(r,e,t){C(r,e,{configurable:!1,enumerable:!1,get:t})}var fe="function"==typeof Float64Array;var ue="function"==typeof Float64Array?Float64Array:null;var ae="function"==typeof Float64Array?Float64Array:void 0;var he=function(){var r,e,t;if("function"!=typeof ue)return!1;try{e=new ue([1,3.14,-3.14,NaN]),t=e,r=(fe&&t instanceof Float64Array||"[object Float64Array]"===X(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ae:function(){throw new Error("not implemented")};function se(r){return r.re}function le(r){return r.im}var ce={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};var pe={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function we(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}function ye(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(lr(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Dr(n))return new TypeError(we("00P24",n));e.push(se(n),le(n))}return e}var ge=2*he.BYTES_PER_ELEMENT,be=ne();function Ee(r){return r instanceof _e||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function ve(r){return r===_e||"Complex64Array"===r.name}function de(r,e){return new Zr(r[e*=2],r[e+1])}function _e(){var r,e,t,n,o,i,f;if(e=arguments.length,!(this instanceof _e))return 0===e?new _e:1===e?new _e(arguments[0]):2===e?new _e(arguments[0],arguments[1]):new _e(arguments[0],arguments[1],arguments[2]);if(0===e)t=new he(0);else if(1===e)if(ur(arguments[0]))t=new he(2*arguments[0]);else if(pr(arguments[0]))if((n=(t=arguments[0]).length)&&gr(t)&&Dr(t[0])){if(t=function(r,e){var t,n,o,i;for(t=e.length,i=0,o=0;o<t;o++){if(!Dr(n=e[o]))return null;r[i]=se(n),r[i+1]=le(n),i+=2}return r}(new he(2*n),t),null===t){if(!re(n))throw new RangeError(we("00P26",n));t=new he(arguments[0])}}else{if("object"==typeof(f=t)&&null!==f&&"Complex64Array"===f.constructor.name&&f.BYTES_PER_ELEMENT===ee)i=0,t=new Hr((o=t).buffer,o.byteOffset+o.BYTES_PER_ELEMENT*i,2*(o.length-i));else if(function(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===te}(t))t=function(r,e){return new he(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}(t,0);else if(!re(n))throw new RangeError(we("00P27",n));t=new he(t)}else if(yr(arguments[0])){if(!tr((t=arguments[0]).byteLength/ge))throw new RangeError(we("00PE9",ge,t.byteLength));t=new he(t)}else{if(!br(arguments[0]))throw new TypeError(we("00P2A",arguments[0]));if(t=arguments[0],!1===be)throw new TypeError(we("00P29",t));if(!Wr(t[oe]))throw new TypeError(we("00P2A",t));if(!Wr((t=t[oe]()).next))throw new TypeError(we("00P2A",t));if((t=ye(t))instanceof Error)throw t;t=new he(t)}else{if(!yr(t=arguments[0]))throw new TypeError(we("00P2B",t));if(!ur(r=arguments[1]))throw new TypeError(we("00P2C",r));if(!tr(r/ge))throw new RangeError(we("00PEA",ge,r));if(2===e){if(!tr((n=t.byteLength-r)/ge))throw new RangeError(we("00P2E",ge,n));t=new he(t,r)}else{if(!ur(n=arguments[2]))throw new TypeError(we("00P2F",n));if(n*ge>t.byteLength-r)throw new RangeError(we("00P2G",n*ge));t=new he(t,r,2*n)}}return M(this,"_buffer",t),M(this,"_length",t.length/2),this}M(_e,"BYTES_PER_ELEMENT",ge),M(_e,"name","Complex128Array"),M(_e,"from",(function(r){var e,t,n,o,i,f,u,a,h,s,l,c;if(!Wr(this))throw new TypeError(we("00P01"));if(!ve(this))throw new TypeError(we("00P02"));if((t=arguments.length)>1){if(!Wr(n=arguments[1]))throw new TypeError(we("00P2H",n));t>2&&(e=arguments[2])}if(Ee(r)){if(a=r.length,n){for(i=(o=new this(a))._buffer,c=0,l=0;l<a;l++){if(Dr(s=n.call(e,r.get(l),l)))i[c]=se(s),i[c+1]=le(s);else{if(!(lr(s)&&s.length>=2))throw new TypeError(we("00P25",s));i[c]=s[0],i[c+1]=s[1]}c+=2}return o}return new this(r)}if(pr(r)){if(n){for(a=r.length,u=r.get&&r.set?function(r){var e=pe[r];return"function"==typeof e?e:pe.default}("default"):function(r){var e=ce[r];return"function"==typeof e?e:ce.default}("default"),l=0;l<a;l++)if(!Dr(u(r,l))){h=!0;break}if(h){if(!re(a))throw new RangeError(we("00P2I",a));for(i=(o=new this(a/2))._buffer,l=0;l<a;l++)i[l]=n.call(e,u(r,l),l);return o}for(i=(o=new this(a))._buffer,c=0,l=0;l<a;l++){if(Dr(s=n.call(e,u(r,l),l)))i[c]=se(s),i[c+1]=le(s);else{if(!(lr(s)&&s.length>=2))throw new TypeError(we("00P25",s));i[c]=s[0],i[c+1]=s[1]}c+=2}return o}return new this(r)}if(br(r)&&be&&Wr(r[oe])){if(!Wr((i=r[oe]()).next))throw new TypeError(we("00P2J",r));if(f=n?function(r,e,t){var n,o,i,f;for(n=[],f=-1;!(o=r.next()).done;)if(f+=1,lr(i=e.call(t,o.value,f))&&i.length>=2)n.push(i[0],i[1]);else{if(!Dr(i))return new TypeError(we("00P25",i));n.push(se(i),le(i))}return n}(i,n,e):ye(i),f instanceof Error)throw f;for(i=(o=new this(a=f.length/2))._buffer,l=0;l<a;l++)i[l]=f[l];return o}throw new TypeError(we("00P2J",r))})),M(_e,"of",(function(){var r,e;if(!Wr(this))throw new TypeError(we("00P01"));if(!ve(this))throw new TypeError(we("00P02"));for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),M(_e.prototype,"at",(function(r){if(!Ee(this))throw new TypeError(we("00P02"));if(!tr(r))throw new TypeError(we("00P8A",r));if(r<0&&(r+=this._length),!(r<0||r>=this._length))return de(this._buffer,r)})),ie(_e.prototype,"buffer",(function(){return this._buffer.buffer})),ie(_e.prototype,"byteLength",(function(){return this._buffer.byteLength})),ie(_e.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),M(_e.prototype,"BYTES_PER_ELEMENT",_e.BYTES_PER_ELEMENT),M(_e.prototype,"copyWithin",(function(r,e){if(!Ee(this))throw new TypeError(we("00P02"));return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),M(_e.prototype,"entries",(function(){var r,e,t,n,o,i,f;if(!Ee(this))throw new TypeError(we("00P02"));return e=this,r=this._buffer,n=this._length,i=-1,f=-2,M(t={},"next",(function(){var e;if(i+=1,o||i>=n)return{done:!0};return e=new Zr(r[f+=2],r[f+1]),{value:[i,e],done:!1}})),M(t,"return",(function(r){if(o=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),oe&&M(t,oe,(function(){return e.entries()})),t})),M(_e.prototype,"every",(function(r,e){var t,n;if(!Ee(this))throw new TypeError(we("00P02"));if(!Wr(r))throw new TypeError(we("00P3c",r));for(t=this._buffer,n=0;n<this._length;n++)if(!r.call(e,de(t,n),n,this))return!1;return!0})),M(_e.prototype,"fill",(function(r,e,t){var n,o,i,f,u,a;if(!Ee(this))throw new TypeError(we("00P02"));if(!Dr(r))throw new TypeError(we("00PFG",r));if(n=this._buffer,o=this._length,arguments.length>1){if(!tr(e))throw new TypeError(we("00P7f",e));if(e<0&&(e+=o)<0&&(e=0),arguments.length>2){if(!tr(t))throw new TypeError(we("00P2z",t));t<0&&(t+=o)<0&&(t=0),t>o&&(t=o)}else t=o}else e=0,t=o;for(f=se(r),u=le(r),a=e;a<t;a++)n[i=2*a]=f,n[i+1]=u;return this})),M(_e.prototype,"filter",(function(r,e){var t,n,o,i;if(!Ee(this))throw new TypeError(we("00P02"));if(!Wr(r))throw new TypeError(we("00P3c",r));for(t=this._buffer,n=[],o=0;o<this._length;o++)i=de(t,o),r.call(e,i,o,this)&&n.push(i);return new this.constructor(n)})),M(_e.prototype,"find",(function(r,e){var t,n,o;if(!Ee(this))throw new TypeError(we("00P02"));if(!Wr(r))throw new TypeError(we("00P3c",r));for(t=this._buffer,n=0;n<this._length;n++)if(o=de(t,n),r.call(e,o,n,this))return o})),M(_e.prototype,"findIndex",(function(r,e){var t,n,o;if(!Ee(this))throw new TypeError(we("00P02"));if(!Wr(r))throw new TypeError(we("00P3c",r));for(t=this._buffer,n=0;n<this._length;n++)if(o=de(t,n),r.call(e,o,n,this))return n;return-1})),M(_e.prototype,"findLast",(function(r,e){var t,n,o;if(!Ee(this))throw new TypeError(we("00P02"));if(!Wr(r))throw new TypeError(we("00P3c",r));for(t=this._buffer,n=this._length-1;n>=0;n--)if(o=de(t,n),r.call(e,o,n,this))return o})),M(_e.prototype,"findLastIndex",(function(r,e){var t,n,o;if(!Ee(this))throw new TypeError(we("00P02"));if(!Wr(r))throw new TypeError(we("00P3c",r));for(t=this._buffer,n=this._length-1;n>=0;n--)if(o=de(t,n),r.call(e,o,n,this))return n;return-1})),M(_e.prototype,"forEach",(function(r,e){var t,n,o;if(!Ee(this))throw new TypeError(we("00P02"));if(!Wr(r))throw new TypeError(we("00P3c",r));for(t=this._buffer,n=0;n<this._length;n++)o=de(t,n),r.call(e,o,n,this)})),M(_e.prototype,"get",(function(r){if(!Ee(this))throw new TypeError(we("00P02"));if(!ur(r))throw new TypeError(we("00P2K",r));if(!(r>=this._length))return de(this._buffer,r)})),ie(_e.prototype,"length",(function(){return this._length})),M(_e.prototype,"includes",(function(r,e){var t,n,o,i,f;if(!Ee(this))throw new TypeError(we("00P02"));if(!Dr(r))throw new TypeError(we("00PFG",r));if(arguments.length>1){if(!tr(e))throw new TypeError(we("00P7f",e));e<0&&(e+=this._length)<0&&(e=0)}else e=0;for(o=se(r),i=le(r),t=this._buffer,f=e;f<this._length;f++)if(o===t[n=2*f]&&i===t[n+1])return!0;return!1})),M(_e.prototype,"indexOf",(function(r,e){var t,n,o,i,f;if(!Ee(this))throw new TypeError(we("00P02"));if(!Dr(r))throw new TypeError(we("00PFG",r));if(arguments.length>1){if(!tr(e))throw new TypeError(we("00P7f",e));e<0&&(e+=this._length)<0&&(e=0)}else e=0;for(o=se(r),i=le(r),t=this._buffer,f=e;f<this._length;f++)if(o===t[n=2*f]&&i===t[n+1])return f;return-1})),M(_e.prototype,"join",(function(r){var e,t,n,o;if(!Ee(this))throw new TypeError(we("00P02"));if(0===arguments.length)n=",";else{if(!mr(r))throw new TypeError(we("00P3F",r));n=r}for(e=[],t=this._buffer,o=0;o<this._length;o++)e.push(de(t,o).toString());return e.join(n)})),M(_e.prototype,"keys",(function(){var r,e,t,n,o;if(!Ee(this))throw new TypeError(we("00P02"));return r=this,t=this._length,o=-1,M(e={},"next",(function(){if(o+=1,n||o>=t)return{done:!0};return{value:o,done:!1}})),M(e,"return",(function(r){if(n=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),oe&&M(e,oe,(function(){return r.keys()})),e})),M(_e.prototype,"lastIndexOf",(function(r,e){var t,n,o,i,f;if(!Ee(this))throw new TypeError(we("00P02"));if(!Dr(r))throw new TypeError(we("00PFG",r));if(arguments.length>1){if(!tr(e))throw new TypeError(we("00P7f",e));e>=this._length?e=this._length-1:e<0&&(e+=this._length)}else e=this._length-1;for(o=se(r),i=le(r),t=this._buffer,f=e;f>=0;f--)if(o===t[n=2*f]&&i===t[n+1])return f;return-1})),M(_e.prototype,"map",(function(r,e){var t,n,o,i,f;if(!Ee(this))throw new TypeError(we("00P02"));if(!Wr(r))throw new TypeError(we("00P3c",r));for(n=this._buffer,t=(o=new this.constructor(this._length))._buffer,i=0;i<this._length;i++)if(Dr(f=r.call(e,de(n,i),i,this)))t[2*i]=se(f),t[2*i+1]=le(f);else{if(!lr(f)||2!==f.length)throw new TypeError(we("00P25",f));t[2*i]=f[0],t[2*i+1]=f[1]}return o})),M(_e.prototype,"reduce",(function(r,e){var t,n,o,i;if(!Ee(this))throw new TypeError(we("00P02"));if(!Wr(r))throw new TypeError(we("00P3c",r));if(t=this._buffer,o=this._length,arguments.length>1)n=e,i=0;else{if(0===o)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");n=de(t,0),i=1}for(;i<o;i++)n=r(n,de(t,i),i,this);return n})),M(_e.prototype,"reduceRight",(function(r,e){var t,n,o,i;if(!Ee(this))throw new TypeError(we("00P02"));if(!Wr(r))throw new TypeError(we("00P3c",r));if(t=this._buffer,o=this._length,arguments.length>1)n=e,i=o-1;else{if(0===o)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");n=de(t,o-1),i=o-2}for(;i>=0;i--)n=r(n,de(t,i),i,this);return n})),M(_e.prototype,"reverse",(function(){var r,e,t,n,o,i;if(!Ee(this))throw new TypeError(we("00P02"));for(t=this._length,r=this._buffer,n=er(t/2),o=0;o<n;o++)i=t-o-1,e=r[2*o],r[2*o]=r[2*i],r[2*i]=e,e=r[2*o+1],r[2*o+1]=r[2*i+1],r[2*i+1]=e;return this})),M(_e.prototype,"set",(function(r){var e,t,n,o,i,f,u,a,h;if(!Ee(this))throw new TypeError(we("00P02"));if(n=this._buffer,arguments.length>1){if(!ur(t=arguments[1]))throw new TypeError(we("00P2L",t))}else t=0;if(Dr(r)){if(t>=this._length)throw new RangeError(we("00P2M",t));return n[t*=2]=se(r),void(n[t+1]=le(r))}if(Ee(r)){if(t+(f=r._length)>this._length)throw new RangeError(we("00P03"));if(e=r._buffer,h=n.byteOffset+t*ge,e.buffer===n.buffer&&e.byteOffset<h&&e.byteOffset+e.byteLength>h){for(o=new he(e.length),a=0;a<e.length;a++)o[a]=e[a];e=o}for(t*=2,h=0,a=0;a<f;a++)n[t]=e[h],n[t+1]=e[h+1],t+=2,h+=2}else{if(!pr(r))throw new TypeError(we("00P2N",r));for(f=r.length,a=0;a<f;a++)if(!Dr(r[a])){i=!0;break}if(i){if(!re(f))throw new RangeError(we("00P26",f));if(t+f/2>this._length)throw new RangeError(we("00P03"));if(e=r,h=n.byteOffset+t*ge,e.buffer===n.buffer&&e.byteOffset<h&&e.byteOffset+e.byteLength>h){for(o=new he(f),a=0;a<f;a++)o[a]=e[a];e=o}for(t*=2,f/=2,h=0,a=0;a<f;a++)n[t]=e[h],n[t+1]=e[h+1],t+=2,h+=2;return}if(t+f>this._length)throw new RangeError(we("00P03"));for(t*=2,a=0;a<f;a++)u=r[a],n[t]=se(u),n[t+1]=le(u),t+=2}})),M(_e.prototype,"slice",(function(r,e){var t,n,o,i,f,u,a;if(!Ee(this))throw new TypeError(we("00P02"));if(f=this._buffer,u=this._length,0===arguments.length)r=0,e=u;else{if(!tr(r))throw new TypeError(we("00P7e",r));if(r<0&&(r+=u)<0&&(r=0),1===arguments.length)e=u;else{if(!tr(e))throw new TypeError(we("00P7f",e));e<0?(e+=u)<0&&(e=0):e>u&&(e=u)}}for(t=r<e?e-r:0,n=(o=new this.constructor(t))._buffer,a=0;a<t;a++)i=2*(a+r),n[2*a]=f[i],n[2*a+1]=f[i+1];return o})),M(_e.prototype,"some",(function(r,e){var t,n;if(!Ee(this))throw new TypeError(we("00P02"));if(!Wr(r))throw new TypeError(we("00P3c",r));for(t=this._buffer,n=0;n<this._length;n++)if(r.call(e,de(t,n),n,this))return!0;return!1})),M(_e.prototype,"subarray",(function(r,e){var t,n,o;if(!Ee(this))throw new TypeError(we("00P02"));if(n=this._buffer,o=this._length,0===arguments.length)r=0,e=o;else{if(!tr(r))throw new TypeError(we("00P7e",r));if(r<0&&(r+=o)<0&&(r=0),1===arguments.length)e=o;else{if(!tr(e))throw new TypeError(we("00P7f",e));e<0?(e+=o)<0&&(e=0):e>o&&(e=o)}}return r>=o?(o=0,t=n.byteLength):r>=e?(o=0,t=n.byteOffset+r*ge):(o=e-r,t=n.byteOffset+r*ge),new this.constructor(n.buffer,t,o<0?0:o)})),M(_e.prototype,"toReversed",(function(){var r,e,t,n,o,i;if(!Ee(this))throw new TypeError(we("00P02"));for(t=this._length,e=new this.constructor(t),n=this._buffer,r=e._buffer,o=0;o<t;o++)i=t-o-1,r[2*o]=n[2*i],r[2*o+1]=n[2*i+1];return e})),M(_e.prototype,"toString",(function(){var r,e,t;if(!Ee(this))throw new TypeError(we("00P02"));for(r=[],e=this._buffer,t=0;t<this._length;t++)r.push(de(e,t).toString());return r.join(",")})),M(_e.prototype,"values",(function(){var r,e,t,n,o,i;if(!Ee(this))throw new TypeError(we("00P02"));return e=this,o=this._buffer,t=this._length,i=-1,M(r={},"next",(function(){if(i+=1,n||i>=t)return{done:!0};return{value:de(o,i),done:!1}})),M(r,"return",(function(r){if(n=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),oe&&M(r,oe,(function(){return e.values()})),r})),M(_e.prototype,"with",(function(r,e){var t,n,o;if(!Ee(this))throw new TypeError(we("00P02"));if(!tr(r))throw new TypeError(we("00P7e",r));if(o=this._length,r<0&&(r+=o),r<0||r>=o)throw new RangeError(we("00PFP",r));if(!Dr(e))throw new TypeError(we("00PFQ",e));return(t=(n=new this.constructor(this._buffer))._buffer)[2*r]=se(e),t[2*r+1]=le(e),n}));export{_e as default};
//# sourceMappingURL=mod.js.map
