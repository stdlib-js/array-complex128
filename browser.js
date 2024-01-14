// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(e){return"string"==typeof e}var l=Math.abs,s=String.prototype.toLowerCase,c=String.prototype.toUpperCase,h=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,m=/^(\d+)$/,y=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function d(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=h.call(n,v,"$1e"),n=h.call(n,b,"e"),n=h.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=h.call(n,p,"e+0$1"),n=h.call(n,g,"e-0$1"),e.alternate&&(n=h.call(n,m,"$1."),n=h.call(n,y,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===c.call(e.specifier)?c.call(n):s.call(n)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var T=String.fromCharCode,x=isNaN,V=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function S(e){var r,t,n,o,a,l,s,c,h;if(!V(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",s=1,c=0;c<e.length;c++)if(f(n=e[c]))l+=n;else{if(r=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,h=0;h<t.length;h++)switch(o=t.charAt(h)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,x(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!x(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=d(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",s+=1}return l}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function k(e){var r,t,n,i;for(t=[],i=0,n=A.exec(e);n;)(r=e.slice(i,A.lastIndex-n[0].length)).length&&t.push(r),t.push(F(n)),i=A.lastIndex,n=A.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function L(e){return"string"==typeof e}function O(e){var r,t,n;if(!L(e))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=k(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return S.apply(null,t)}var R,B=Object.prototype,N=B.toString,I=B.__defineGetter__,M=B.__defineSetter__,P=B.__lookupGetter__,C=B.__lookupSetter__;R=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(P.call(e,r)||C.call(e,r)?(n=e.__proto__,e.__proto__=B,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&I&&I.call(e,r,t.get),a&&M&&M.call(e,r,t.set),e};var Y=R;function $(e,r,t){Y(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(e){return"number"==typeof e}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return G&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString,X=Object.prototype.hasOwnProperty;function J(e,r){return null!=e&&X.call(e,r)}var z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof z?z.toStringTag:"",D=Z()?function(e){var r,t,n;if(null==e)return U.call(e);t=e[q],r=J(e,q);try{e[q]=void 0}catch(r){return U.call(e)}return n=U.call(e),r?e[q]=t:delete e[q],n}:function(e){return U.call(e)},H=Number,K=H.prototype.toString,Q=Z();function ee(e){return"object"==typeof e&&(e instanceof H||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Number]"===D(e)))}function re(e){return W(e)||ee(e)}$(re,"isPrimitive",W),$(re,"isObject",ee);var te=Number.POSITIVE_INFINITY,ne=H.NEGATIVE_INFINITY,ie=Math.floor;function oe(e){return ie(e)===e}function ae(e){return e<te&&e>ne&&oe(e)}function ue(e){return W(e)&&ae(e)}function fe(e){return ee(e)&&ae(e.valueOf())}function le(e){return ue(e)||fe(e)}function se(e){return ue(e)&&e>=0}function ce(e){return fe(e)&&e.valueOf()>=0}function he(e){return se(e)||ce(e)}function pe(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&oe(e.length)&&e.length>=0&&e.length<=4294967295}function ge(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&oe(e.length)&&e.length>=0&&e.length<=9007199254740991}$(le,"isPrimitive",ue),$(le,"isObject",fe),$(he,"isPrimitive",se),$(he,"isObject",ce);var me="function"==typeof ArrayBuffer;function ye(e){return me&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===D(e)}var we=Array.isArray?Array.isArray:function(e){return"[object Array]"===D(e)};function be(e){return"object"==typeof e&&null!==e&&!we(e)}function ve(e){return"string"==typeof e}var de=String.prototype.valueOf,Ee=Z();function _e(e){return"object"==typeof e&&(e instanceof String||(Ee?function(e){try{return de.call(e),!0}catch(e){return!1}}(e):"[object String]"===D(e)))}function Te(e){return ve(e)||_e(e)}$(Te,"isPrimitive",ve),$(Te,"isObject",_e);var xe=/./;function Ve(e){return"boolean"==typeof e}var je=Boolean,Se=Boolean.prototype.toString,Ae=Z();function Fe(e){return"object"==typeof e&&(e instanceof je||(Ae?function(e){try{return Se.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===D(e)))}function ke(e){return Ve(e)||Fe(e)}function Le(){return new Function("return this;")()}$(ke,"isPrimitive",Ve),$(ke,"isObject",Fe);var Oe="object"==typeof self?self:null,Re="object"==typeof window?window:null,Be="object"==typeof globalThis?globalThis:null,Ne=function(e){if(arguments.length){if(!Ve(e))throw new TypeError(O("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Le()}if(Be)return Be;if(Oe)return Oe;if(Re)return Re;throw new Error("unexpected error. Unable to resolve global object.")}(),Ie=Ne.document&&Ne.document.childNodes,Me=Int8Array;function Pe(){return/^\s*function\s*([^(]*)/i}var Ce=/^\s*function\s*([^(]*)/i;function Ye(e){return null!==e&&"object"==typeof e}function $e(e){var r,t,n,i;if(("Object"===(t=D(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Ce.exec(n.toString()))return r[1]}return Ye(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}$(Pe,"REGEXP",Ce),$(Ye,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(O("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!we(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Ye));var We="function"==typeof xe||"object"==typeof Me||"function"==typeof Ie?function(e){return $e(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?$e(e).toLowerCase():r};function Ge(e){return"function"===We(e)}function Ze(e,r){if(!(this instanceof Ze))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!W(e))throw new TypeError(O("invalid argument. Real component must be a number. Value: `%s`.",e));if(!W(r))throw new TypeError(O("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return Y(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),Y(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}$(Ze,"BYTES_PER_ELEMENT",8),$(Ze.prototype,"BYTES_PER_ELEMENT",8),$(Ze.prototype,"byteLength",16),$(Ze.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),$(Ze.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Ue="function"==typeof Math.fround?Math.fround:null,Xe="function"==typeof Float32Array,Je="function"==typeof Float32Array?Float32Array:null,ze="function"==typeof Float32Array?Float32Array:void 0,qe=function(){var e,r,t;if("function"!=typeof Je)return!1;try{r=new Je([1,3.14,-3.14,5e40]),t=r,e=(Xe&&t instanceof Float32Array||"[object Float32Array]"===D(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===te}catch(r){e=!1}return e}()?ze:function(){throw new Error("not implemented")},De=new qe(1),He="function"==typeof Ue?Ue:function(e){return De[0]=e,De[0]};function Ke(e,r){if(!(this instanceof Ke))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!W(e))throw new TypeError(O("invalid argument. Real component must be a number. Value: `%s`.",e));if(!W(r))throw new TypeError(O("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return Y(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:He(e)}),Y(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:He(r)}),this}function Qe(e){return e instanceof Ze||e instanceof Ke||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function er(e){return oe(e/2)}function rr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&8===e.BYTES_PER_ELEMENT}function tr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&16===e.BYTES_PER_ELEMENT}function nr(){return"function"==typeof z&&"symbol"==typeof z("foo")&&J(z,"iterator")&&"symbol"==typeof z.iterator}$(Ke,"BYTES_PER_ELEMENT",4),$(Ke.prototype,"BYTES_PER_ELEMENT",4),$(Ke.prototype,"byteLength",8),$(Ke.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),$(Ke.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var ir=nr()?Symbol.iterator:null;function or(e,r,t){Y(e,r,{configurable:!1,enumerable:!1,get:t})}var ar="function"==typeof Float64Array,ur="function"==typeof Float64Array?Float64Array:null,fr="function"==typeof Float64Array?Float64Array:void 0,lr=function(){var e,r,t;if("function"!=typeof ur)return!1;try{r=new ur([1,3.14,-3.14,NaN]),t=r,e=(ar&&t instanceof Float64Array||"[object Float64Array]"===D(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?fr:function(){throw new Error("not implemented")};function sr(e){return e.re}function cr(e){return e.im}function hr(e,r){return new qe(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function pr(e,r){return new lr(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}var gr={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function mr(e){var r=gr[e];return"function"==typeof r?r:gr.default}var yr={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function wr(e){var r=yr[e];return"function"==typeof r?r:yr.default}function br(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(pe(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Qe(n))return new TypeError(O("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(sr(n),cr(n))}return r}function vr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,pe(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Qe(o))return new TypeError(O("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(sr(o),cr(o))}return n}function dr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Qe(n=r[i]))return null;e[o]=sr(n),e[o+1]=cr(n),o+=2}return e}var Er=2*lr.BYTES_PER_ELEMENT,_r=nr();function Tr(e){return e instanceof jr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function xr(e){return e===jr||"Complex64Array"===e.name}function Vr(e,r){return new Ze(e[r*=2],e[r+1])}function jr(){var e,r,t,n;if(r=arguments.length,!(this instanceof jr))return 0===r?new jr:1===r?new jr(arguments[0]):2===r?new jr(arguments[0],arguments[1]):new jr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new lr(0);else if(1===r)if(se(arguments[0]))t=new lr(2*arguments[0]);else if(ge(arguments[0]))if((n=(t=arguments[0]).length)&&we(t)&&Qe(t[0])){if(null===(t=dr(new lr(2*n),t))){if(!er(n))throw new RangeError(O("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new lr(arguments[0])}}else{if(rr(t))t=hr(t,0);else if(tr(t))t=pr(t,0);else if(!er(n))throw new RangeError(O("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new lr(t)}else if(ye(arguments[0])){if(!oe((t=arguments[0]).byteLength/Er))throw new RangeError(O("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Er,t.byteLength));t=new lr(t)}else{if(!be(arguments[0]))throw new TypeError(O("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===_r)throw new TypeError(O("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ge(t[ir]))throw new TypeError(O("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ge((t=t[ir]()).next))throw new TypeError(O("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=br(t))instanceof Error)throw t;t=new lr(t)}else{if(!ye(t=arguments[0]))throw new TypeError(O("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!se(e=arguments[1]))throw new TypeError(O("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!oe(e/Er))throw new RangeError(O("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Er,e));if(2===r){if(!oe((n=t.byteLength-e)/Er))throw new RangeError(O("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Er,n));t=new lr(t,e)}else{if(!se(n=arguments[2]))throw new TypeError(O("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Er>t.byteLength-e)throw new RangeError(O("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Er));t=new lr(t,e,2*n)}}return $(this,"_buffer",t),$(this,"_length",t.length/2),this}return $(jr,"BYTES_PER_ELEMENT",Er),$(jr,"name","Complex128Array"),$(jr,"from",(function(e){var r,t,n,i,o,a,u,f,l,s,c,h;if(!Ge(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!xr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Ge(n=arguments[1]))throw new TypeError(O("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(Tr(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,h=0,c=0;c<f;c++){if(Qe(s=n.call(r,e.get(c),c)))o[h]=sr(s),o[h+1]=cr(s);else{if(!(pe(s)&&s.length>=2))throw new TypeError(O("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",s));o[h]=s[0],o[h+1]=s[1]}h+=2}return i}return new this(e)}if(ge(e)){if(n){for(f=e.length,u=e.get&&e.set?wr("default"):mr("default"),c=0;c<f;c++)if(!Qe(u(e,c))){l=!0;break}if(l){if(!er(f))throw new RangeError(O("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,c=0;c<f;c++)o[c]=n.call(r,u(e,c),c);return i}for(o=(i=new this(f))._buffer,h=0,c=0;c<f;c++){if(Qe(s=n.call(r,u(e,c),c)))o[h]=sr(s),o[h+1]=cr(s);else{if(!(pe(s)&&s.length>=2))throw new TypeError(O("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",s));o[h]=s[0],o[h+1]=s[1]}h+=2}return i}return new this(e)}if(be(e)&&_r&&Ge(e[ir])){if(!Ge((o=e[ir]()).next))throw new TypeError(O("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?vr(o,n,r):br(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,c=0;c<f;c++)o[c]=a[c];return i}throw new TypeError(O("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),$(jr,"of",(function(){var e,r;if(!Ge(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!xr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),$(jr.prototype,"at",(function(e){if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!oe(e))throw new TypeError(O("invalid argument. Must provide an integer. Value: `%s`.",e));if(e<0&&(e+=this._length),!(e<0||e>=this._length))return Vr(this._buffer,e)})),or(jr.prototype,"buffer",(function(){return this._buffer.buffer})),or(jr.prototype,"byteLength",(function(){return this._buffer.byteLength})),or(jr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),$(jr.prototype,"BYTES_PER_ELEMENT",jr.BYTES_PER_ELEMENT),$(jr.prototype,"copyWithin",(function(e,r){if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),$(jr.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,$(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new Ze(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),$(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),ir&&$(t,ir,(function(){return r.entries()})),t})),$(jr.prototype,"every",(function(e,r){var t,n;if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ge(e))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=0;n<this._length;n++)if(!e.call(r,Vr(t,n),n,this))return!1;return!0})),$(jr.prototype,"fill",(function(e,r,t){var n,i,o,a,u,f;if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Qe(e))throw new TypeError(O("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(n=this._buffer,i=this._length,arguments.length>1){if(!oe(r))throw new TypeError(O("invalid argument. Second argument must be an integer. Value: `%s`.",r));if(r<0&&(r+=i)<0&&(r=0),arguments.length>2){if(!oe(t))throw new TypeError(O("invalid argument. Third argument must be an integer. Value: `%s`.",t));t<0&&(t+=i)<0&&(t=0),t>i&&(t=i)}else t=i}else r=0,t=i;for(a=sr(e),u=cr(e),f=r;f<t;f++)n[o=2*f]=a,n[o+1]=u;return this})),$(jr.prototype,"filter",(function(e,r){var t,n,i,o;if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ge(e))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=[],i=0;i<this._length;i++)o=Vr(t,i),e.call(r,o,i,this)&&n.push(o);return new this.constructor(n)})),$(jr.prototype,"find",(function(e,r){var t,n,i;if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ge(e))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=0;n<this._length;n++)if(i=Vr(t,n),e.call(r,i,n,this))return i})),$(jr.prototype,"findIndex",(function(e,r){var t,n,i;if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ge(e))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=0;n<this._length;n++)if(i=Vr(t,n),e.call(r,i,n,this))return n;return-1})),$(jr.prototype,"findLast",(function(e,r){var t,n,i;if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ge(e))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=this._length-1;n>=0;n--)if(i=Vr(t,n),e.call(r,i,n,this))return i})),$(jr.prototype,"findLastIndex",(function(e,r){var t,n,i;if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ge(e))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=this._length-1;n>=0;n--)if(i=Vr(t,n),e.call(r,i,n,this))return n;return-1})),$(jr.prototype,"forEach",(function(e,r){var t,n,i;if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ge(e))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=0;n<this._length;n++)i=Vr(t,n),e.call(r,i,n,this)})),$(jr.prototype,"get",(function(e){if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!se(e))throw new TypeError(O("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return Vr(this._buffer,e)})),or(jr.prototype,"length",(function(){return this._length})),$(jr.prototype,"includes",(function(e,r){var t,n,i,o,a;if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Qe(e))throw new TypeError(O("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(arguments.length>1){if(!oe(r))throw new TypeError(O("invalid argument. Second argument must be an integer. Value: `%s`.",r));r<0&&(r+=this._length)<0&&(r=0)}else r=0;for(i=sr(e),o=cr(e),t=this._buffer,a=r;a<this._length;a++)if(i===t[n=2*a]&&o===t[n+1])return!0;return!1})),$(jr.prototype,"indexOf",(function(e,r){var t,n,i,o,a;if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Qe(e))throw new TypeError(O("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(arguments.length>1){if(!oe(r))throw new TypeError(O("invalid argument. Second argument must be an integer. Value: `%s`.",r));r<0&&(r+=this._length)<0&&(r=0)}else r=0;for(i=sr(e),o=cr(e),t=this._buffer,a=r;a<this._length;a++)if(i===t[n=2*a]&&o===t[n+1])return a;return-1})),$(jr.prototype,"join",(function(e){var r,t,n,i;if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(0===arguments.length)n=",";else{if(!Te(e))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));n=e}for(r=[],t=this._buffer,i=0;i<this._length;i++)r.push(Vr(t,i).toString());return r.join(n)})),$(jr.prototype,"lastIndexOf",(function(e,r){var t,n,i,o,a;if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Qe(e))throw new TypeError(O("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(arguments.length>1){if(!oe(r))throw new TypeError(O("invalid argument. Second argument must be an integer. Value: `%s`.",r));r>=this._length?r=this._length-1:r<0&&(r+=this._length)}else r=this._length-1;for(i=sr(e),o=cr(e),t=this._buffer,a=r;a>=0;a--)if(i===t[n=2*a]&&o===t[n+1])return a;return-1})),$(jr.prototype,"map",(function(e,r){var t,n,i,o,a;if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ge(e))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",e));for(n=this._buffer,t=(i=new this.constructor(this._length))._buffer,o=0;o<this._length;o++)if(Qe(a=e.call(r,Vr(n,o),o,this)))t[2*o]=sr(a),t[2*o+1]=cr(a);else{if(!pe(a)||2!==a.length)throw new TypeError(O("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));t[2*o]=a[0],t[2*o+1]=a[1]}return i})),$(jr.prototype,"reverse",(function(){var e,r,t,n,i,o;if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=this._length,e=this._buffer,n=ie(t/2),i=0;i<n;i++)o=t-i-1,r=e[2*i],e[2*i]=e[2*o],e[2*o]=r,r=e[2*i+1],e[2*i+1]=e[2*o+1],e[2*o+1]=r;return this})),$(jr.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!se(t=arguments[1]))throw new TypeError(O("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Qe(e)){if(t>=this._length)throw new RangeError(O("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=sr(e),void(n[t+1]=cr(e))}if(Tr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Er,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new lr(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!ge(e))throw new TypeError(O("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Qe(e[f])){o=!0;break}if(o){if(!er(a))throw new RangeError(O("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Er,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new lr(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=sr(u),n[t+1]=cr(u),t+=2}})),$(jr.prototype,"some",(function(e,r){var t,n;if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ge(e))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=0;n<this._length;n++)if(e.call(r,Vr(t,n),n,this))return!0;return!1})),$(jr.prototype,"subarray",(function(e,r){var t,n,i;if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,i=this._length,0===arguments.length)e=0,r=i;else{if(!oe(e))throw new TypeError(O("invalid argument. First argument must be an integer. Value: `%s`.",e));if(e<0&&(e+=i)<0&&(e=0),1===arguments.length)r=i;else{if(!oe(r))throw new TypeError(O("invalid argument. Second argument must be an integer. Value: `%s`.",r));r<0?(r+=i)<0&&(r=0):r>i&&(r=i)}}return e>=i?(i=0,t=n.byteLength):e>=r?(i=0,t=n.byteOffset+e*Er):(i=r-e,t=n.byteOffset+e*Er),new this.constructor(n.buffer,t,i<0?0:i)})),$(jr.prototype,"toString",(function(){var e,r,t;if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=this._buffer,t=0;t<this._length;t++)e.push(Vr(r,t).toString());return e.join(",")})),$(jr.prototype,"with",(function(e,r){var t,n,i;if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!oe(e))throw new TypeError(O("invalid argument. First argument must be an integer. Value: `%s`.",e));if(i=this._length,e<0&&(e+=i),e<0||e>=i)throw new RangeError(O("invalid argument. Index argument is out-of-bounds. Value: `%s`.",e));if(!Qe(r))throw new TypeError(O("invalid argument. Second argument must be a complex number. Value: `%s`.",r));return(t=(n=new this.constructor(this._buffer))._buffer)[2*e]=sr(r),t[2*e+1]=cr(r),n})),jr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).Complex128Array=r();
//# sourceMappingURL=browser.js.map
