// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-arraybuffer@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@v0.1.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex-like@v0.1.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-even@v0.1.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-integer@v0.1.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-iterator-symbol-support@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.1.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@v0.1.1-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-real@v0.1.1-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-imag@v0.1.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@v0.1.0-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@v0.1.1-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.1.0-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function x(e){var t,n,i;for(t=[];!(n=e.next()).done;)if(i=n.value,r(i)&&i.length>=2)t.push(i[0],i[1]);else{if(!s(i))return new TypeError(E("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));t.push(c(i),y(i))}return t}function T(e,t,n){var i,a,o,l;for(i=[],l=-1;!(a=e.next()).done;)if(l+=1,o=t.call(n,a.value,l),r(o)&&o.length>=2)i.push(o[0],o[1]);else{if(!s(o))return new TypeError(E("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));i.push(c(o),y(o))}return i}function _(e,r){var t,n,i,a;for(t=r.length,a=0,i=0;i<t;i++){if(n=r[i],!s(n))return null;e[a]=c(n),e[a+1]=y(n),a+=2}return e}var V=2*g.BYTES_PER_ELEMENT,k=f();function L(e){return e instanceof C||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function A(e){return e===C||"Complex64Array"===e.name}function R(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===V/2}function B(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===V}function M(e,r){return new p(e[r*=2],e[r+1])}function C(){var r,f,d,p;if(f=arguments.length,!(this instanceof C))return 0===f?new C:1===f?new C(arguments[0]):2===f?new C(arguments[0],arguments[1]):new C(arguments[0],arguments[1],arguments[2]);if(0===f)d=new g(0);else if(1===f)if(e(arguments[0]))d=new g(2*arguments[0]);else if(t(arguments[0]))if((p=(d=arguments[0]).length)&&a(d)&&s(d[0])){if(null===(d=_(new g(2*p),d))){if(!l(p))throw new RangeError(E("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",p));d=new g(arguments[0])}}else{if(R(d))d=v(d,0);else if(B(d))d=b(d,0);else if(!l(p))throw new RangeError(E("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",p));d=new g(d)}else if(n(arguments[0])){if(!u((d=arguments[0]).byteLength/V))throw new RangeError(E("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",V,d.byteLength));d=new g(d)}else{if(!i(arguments[0]))throw new TypeError(E("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(d=arguments[0],!1===k)throw new TypeError(E("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",d));if(!o(d[m]))throw new TypeError(E("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",d));if(d=d[m](),!o(d.next))throw new TypeError(E("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",d));if((d=x(d))instanceof Error)throw d;d=new g(d)}else{if(!n(d=arguments[0]))throw new TypeError(E("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",d));if(!e(r=arguments[1]))throw new TypeError(E("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!u(r/V))throw new RangeError(E("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",V,r));if(2===f){if(p=d.byteLength-r,!u(p/V))throw new RangeError(E("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",V,p));d=new g(d,r)}else{if(!e(p=arguments[2]))throw new TypeError(E("invalid argument. Length must be a nonnegative integer. Value: `%s`.",p));if(p*V>d.byteLength-r)throw new RangeError(E("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",p*V));d=new g(d,r,2*p)}}return h(this,"_buffer",d),h(this,"_length",d.length/2),this}h(C,"BYTES_PER_ELEMENT",V),h(C,"name","Complex128Array"),h(C,"from",(function(e){var n,a,u,f,h,d,g,p,v,b,_,V;if(!o(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!A(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((a=arguments.length)>1){if(!o(u=arguments[1]))throw new TypeError(E("invalid argument. Second argument must be a function. Value: `%s`.",u));a>2&&(n=arguments[2])}if(L(e)){if(p=e.length,u){for(h=(f=new this(p))._buffer,V=0,_=0;_<p;_++){if(b=u.call(n,e.get(_),_),s(b))h[V]=c(b),h[V+1]=y(b);else{if(!(r(b)&&b.length>=2))throw new TypeError(E("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",b));h[V]=b[0],h[V+1]=b[1]}V+=2}return f}return new this(e)}if(t(e)){if(u){for(p=e.length,g=e.get&&e.set?j("default"):w("default"),_=0;_<p;_++)if(!s(g(e,_))){v=!0;break}if(v){if(!l(p))throw new RangeError(E("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",p));for(h=(f=new this(p/2))._buffer,_=0;_<p;_++)h[_]=u.call(n,g(e,_),_);return f}for(h=(f=new this(p))._buffer,V=0,_=0;_<p;_++){if(b=u.call(n,g(e,_),_),s(b))h[V]=c(b),h[V+1]=y(b);else{if(!(r(b)&&b.length>=2))throw new TypeError(E("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",b));h[V]=b[0],h[V+1]=b[1]}V+=2}return f}return new this(e)}if(i(e)&&k&&o(e[m])){if(h=e[m](),!o(h.next))throw new TypeError(E("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((d=u?T(h,u,n):x(h))instanceof Error)throw d;for(h=(f=new this(p=d.length/2))._buffer,_=0;_<p;_++)h[_]=d[_];return f}throw new TypeError(E("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),h(C,"of",(function(){var e,r;if(!o(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!A(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),h(C.prototype,"at",(function(e){if(!L(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!u(e))throw new TypeError(E("invalid argument. Must provide an integer. Value: `%s`.",e));if(e<0&&(e+=this._length),!(e<0||e>=this._length))return M(this._buffer,e)})),d(C.prototype,"buffer",(function(){return this._buffer.buffer})),d(C.prototype,"byteLength",(function(){return this._buffer.byteLength})),d(C.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),h(C.prototype,"BYTES_PER_ELEMENT",C.BYTES_PER_ELEMENT),h(C.prototype,"copyWithin",(function(e,r){if(!L(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),h(C.prototype,"entries",(function(){var e,r,t,n,i,a,o;if(!L(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,a=-1,o=-2,h(t={},"next",(function(){var r;if(a+=1,i||a>=n)return{done:!0};return r=new p(e[o+=2],e[o+1]),{value:[a,r],done:!1}})),h(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),m&&h(t,m,(function(){return r.entries()})),t})),h(C.prototype,"every",(function(e,r){var t,n;if(!L(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!o(e))throw new TypeError(E("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=0;n<this._length;n++)if(!e.call(r,M(t,n),n,this))return!1;return!0})),h(C.prototype,"get",(function(r){if(!L(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!e(r))throw new TypeError(E("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return M(this._buffer,r)})),d(C.prototype,"length",(function(){return this._length})),h(C.prototype,"set",(function(r){var n,i,a,o,u,f,m,h,d;if(!L(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(a=this._buffer,arguments.length>1){if(!e(i=arguments[1]))throw new TypeError(E("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(s(r)){if(i>=this._length)throw new RangeError(E("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));return a[i*=2]=c(r),void(a[i+1]=y(r))}if(L(r)){if(i+(f=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(n=r._buffer,d=a.byteOffset+i*V,n.buffer===a.buffer&&n.byteOffset<d&&n.byteOffset+n.byteLength>d){for(o=new g(n.length),h=0;h<n.length;h++)o[h]=n[h];n=o}for(i*=2,d=0,h=0;h<f;h++)a[i]=n[d],a[i+1]=n[d+1],i+=2,d+=2}else{if(!t(r))throw new TypeError(E("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(f=r.length,h=0;h<f;h++)if(!s(r[h])){u=!0;break}if(u){if(!l(f))throw new RangeError(E("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",f));if(i+f/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(n=r,d=a.byteOffset+i*V,n.buffer===a.buffer&&n.byteOffset<d&&n.byteOffset+n.byteLength>d){for(o=new g(f),h=0;h<f;h++)o[h]=n[h];n=o}for(i*=2,f/=2,d=0,h=0;h<f;h++)a[i]=n[d],a[i+1]=n[d+1],i+=2,d+=2;return}if(i+f>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,h=0;h<f;h++)m=r[h],a[i]=c(m),a[i+1]=y(m),i+=2}}));export{C as default};
//# sourceMappingURL=index.mjs.map
