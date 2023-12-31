// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-arraybuffer@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@v0.1.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex-like@v0.1.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-even@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-integer@v0.1.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-iterator-symbol-support@v0.1.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.1.1-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@v0.1.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-real@v0.1.1-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-imag@v0.1.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@v0.1.0-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@v0.1.1-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.1.0-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function x(e){var t,n,i;for(t=[];!(n=e.next()).done;)if(i=n.value,r(i)&&i.length>=2)t.push(i[0],i[1]);else{if(!s(i))return new TypeError(j("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));t.push(d(i),y(i))}return t}function _(e,t,n){var i,a,o,u;for(i=[],u=-1;!(a=e.next()).done;)if(u+=1,o=t.call(n,a.value,u),r(o)&&o.length>=2)i.push(o[0],o[1]);else{if(!s(o))return new TypeError(j("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));i.push(d(o),y(o))}return i}function T(e,r){var t,n,i,a;for(t=r.length,a=0,i=0;i<t;i++){if(n=r[i],!s(n))return null;e[a]=d(n),e[a+1]=y(n),a+=2}return e}var V=2*c.BYTES_PER_ELEMENT,k=f();function L(e){return e instanceof S||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function A(e){return e===S||"Complex64Array"===e.name}function F(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===V/2}function R(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===V}function B(e,r){return new g(e[r*=2],e[r+1])}function S(){var r,f,p,g;if(f=arguments.length,!(this instanceof S))return 0===f?new S:1===f?new S(arguments[0]):2===f?new S(arguments[0],arguments[1]):new S(arguments[0],arguments[1],arguments[2]);if(0===f)p=new c(0);else if(1===f)if(e(arguments[0]))p=new c(2*arguments[0]);else if(t(arguments[0]))if((g=(p=arguments[0]).length)&&a(p)&&s(p[0])){if(null===(p=T(new c(2*g),p))){if(!u(g))throw new RangeError(j("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",g));p=new c(arguments[0])}}else{if(F(p))p=v(p,0);else if(R(p))p=b(p,0);else if(!u(g))throw new RangeError(j("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",g));p=new c(p)}else if(n(arguments[0])){if(!l((p=arguments[0]).byteLength/V))throw new RangeError(j("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",V,p.byteLength));p=new c(p)}else{if(!i(arguments[0]))throw new TypeError(j("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(p=arguments[0],!1===k)throw new TypeError(j("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",p));if(!o(p[h]))throw new TypeError(j("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",p));if(p=p[h](),!o(p.next))throw new TypeError(j("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",p));if((p=x(p))instanceof Error)throw p;p=new c(p)}else{if(!n(p=arguments[0]))throw new TypeError(j("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",p));if(!e(r=arguments[1]))throw new TypeError(j("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!l(r/V))throw new RangeError(j("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",V,r));if(2===f){if(g=p.byteLength-r,!l(g/V))throw new RangeError(j("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",V,g));p=new c(p,r)}else{if(!e(g=arguments[2]))throw new TypeError(j("invalid argument. Length must be a nonnegative integer. Value: `%s`.",g));if(g*V>p.byteLength-r)throw new RangeError(j("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",g*V));p=new c(p,r,2*g)}}return m(this,"_buffer",p),m(this,"_length",p.length/2),this}m(S,"BYTES_PER_ELEMENT",V),m(S,"name","Complex128Array"),m(S,"from",(function(e){var n,a,l,f,m,p,c,g,v,b,T,V;if(!o(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!A(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((a=arguments.length)>1){if(!o(l=arguments[1]))throw new TypeError(j("invalid argument. Second argument must be a function. Value: `%s`.",l));a>2&&(n=arguments[2])}if(L(e)){if(g=e.length,l){for(m=(f=new this(g))._buffer,V=0,T=0;T<g;T++){if(b=l.call(n,e.get(T),T),s(b))m[V]=d(b),m[V+1]=y(b);else{if(!(r(b)&&b.length>=2))throw new TypeError(j("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",b));m[V]=b[0],m[V+1]=b[1]}V+=2}return f}return new this(e)}if(t(e)){if(l){for(g=e.length,c=e.get&&e.set?E("default"):w("default"),T=0;T<g;T++)if(!s(c(e,T))){v=!0;break}if(v){if(!u(g))throw new RangeError(j("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",g));for(m=(f=new this(g/2))._buffer,T=0;T<g;T++)m[T]=l.call(n,c(e,T),T);return f}for(m=(f=new this(g))._buffer,V=0,T=0;T<g;T++){if(b=l.call(n,c(e,T),T),s(b))m[V]=d(b),m[V+1]=y(b);else{if(!(r(b)&&b.length>=2))throw new TypeError(j("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",b));m[V]=b[0],m[V+1]=b[1]}V+=2}return f}return new this(e)}if(i(e)&&k&&o(e[h])){if(m=e[h](),!o(m.next))throw new TypeError(j("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((p=l?_(m,l,n):x(m))instanceof Error)throw p;for(m=(f=new this(g=p.length/2))._buffer,T=0;T<g;T++)m[T]=p[T];return f}throw new TypeError(j("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),m(S,"of",(function(){var e,r;if(!o(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!A(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),m(S.prototype,"at",(function(e){if(!L(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!l(e))throw new TypeError(j("invalid argument. Must provide an integer. Value: `%s`.",e));if(e<0&&(e+=this._length),!(e<0||e>=this._length))return B(this._buffer,e)})),p(S.prototype,"buffer",(function(){return this._buffer.buffer})),p(S.prototype,"byteLength",(function(){return this._buffer.byteLength})),p(S.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),m(S.prototype,"BYTES_PER_ELEMENT",S.BYTES_PER_ELEMENT),m(S.prototype,"copyWithin",(function(e,r){if(!L(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),m(S.prototype,"entries",(function(){var e,r,t,n,i,a,o;if(!L(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,a=-1,o=-2,m(t={},"next",(function(){var r;if(a+=1,i||a>=n)return{done:!0};return r=new g(e[o+=2],e[o+1]),{value:[a,r],done:!1}})),m(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),h&&m(t,h,(function(){return r.entries()})),t})),m(S.prototype,"every",(function(e,r){var t,n;if(!L(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!o(e))throw new TypeError(j("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=0;n<this._length;n++)if(!e.call(r,B(t,n),n,this))return!1;return!0})),m(S.prototype,"filter",(function(e,r){var t,n,i,a;if(!L(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!o(e))throw new TypeError(j("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=[],i=0;i<this._length;i++)a=B(t,i),e.call(r,a,i,this)&&n.push(a);return new this.constructor(n)})),m(S.prototype,"find",(function(e,r){var t,n,i;if(!L(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!o(e))throw new TypeError(j("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=0;n<this._length;n++)if(i=B(t,n),e.call(r,i,n,this))return i})),m(S.prototype,"findIndex",(function(e,r){var t,n,i;if(!L(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!o(e))throw new TypeError(j("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=0;n<this._length;n++)if(i=B(t,n),e.call(r,i,n,this))return n;return-1})),m(S.prototype,"findLast",(function(e,r){var t,n,i;if(!L(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!o(e))throw new TypeError(j("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=this._length-1;n>=0;n--)if(i=B(t,n),e.call(r,i,n,this))return i})),m(S.prototype,"findLastIndex",(function(e,r){var t,n,i;if(!L(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!o(e))throw new TypeError(j("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=this._length-1;n>=0;n--)if(i=B(t,n),e.call(r,i,n,this))return n;return-1})),m(S.prototype,"forEach",(function(e,r){var t,n,i;if(!L(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!o(e))throw new TypeError(j("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=0;n<this._length;n++)i=B(t,n),e.call(r,i,n,this)})),m(S.prototype,"get",(function(r){if(!L(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!e(r))throw new TypeError(j("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return B(this._buffer,r)})),p(S.prototype,"length",(function(){return this._length})),m(S.prototype,"includes",(function(e,r){var t,n,i,a,o;if(!L(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s(e))throw new TypeError(j("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(arguments.length>1){if(!l(r))throw new TypeError(j("invalid argument. Second argument must be an integer. Value: `%s`.",r));r<0&&(r+=this._length)<0&&(r=0)}else r=0;for(i=d(e),a=y(e),t=this._buffer,o=r;o<this._length;o++)if(i===t[n=2*o]&&a===t[n+1])return!0;return!1})),m(S.prototype,"indexOf",(function(e,r){var t,n,i,a,o;if(!L(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s(e))throw new TypeError(j("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(arguments.length>1){if(!l(r))throw new TypeError(j("invalid argument. Second argument must be an integer. Value: `%s`.",r));r<0&&(r+=this._length)<0&&(r=0)}else r=0;for(i=d(e),a=y(e),t=this._buffer,o=r;o<this._length;o++)if(i===t[n=2*o]&&a===t[n+1])return o;return-1})),m(S.prototype,"lastIndexOf",(function(e,r){var t,n,i,a,o;if(!L(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s(e))throw new TypeError(j("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(arguments.length>1){if(!l(r))throw new TypeError(j("invalid argument. Second argument must be an integer. Value: `%s`.",r));r>=this._length?r=this._length-1:r<0&&(r+=this._length)}else r=this._length-1;for(i=d(e),a=y(e),t=this._buffer,o=r;o>=0;o--)if(i===t[n=2*o]&&a===t[n+1])return o;return-1})),m(S.prototype,"map",(function(e,t){var n,i,a,u,l;if(!L(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!o(e))throw new TypeError(j("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,n=(a=new this.constructor(this._length))._buffer,u=0;u<this._length;u++)if(l=e.call(t,B(i,u),u,this),s(l))n[2*u]=d(l),n[2*u+1]=y(l);else{if(!r(l)||2!==l.length)throw new TypeError(j("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));n[2*u]=l[0],n[2*u+1]=l[1]}return a})),m(S.prototype,"set",(function(r){var n,i,a,o,l,f,h,m,p;if(!L(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(a=this._buffer,arguments.length>1){if(!e(i=arguments[1]))throw new TypeError(j("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(s(r)){if(i>=this._length)throw new RangeError(j("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));return a[i*=2]=d(r),void(a[i+1]=y(r))}if(L(r)){if(i+(f=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(n=r._buffer,p=a.byteOffset+i*V,n.buffer===a.buffer&&n.byteOffset<p&&n.byteOffset+n.byteLength>p){for(o=new c(n.length),m=0;m<n.length;m++)o[m]=n[m];n=o}for(i*=2,p=0,m=0;m<f;m++)a[i]=n[p],a[i+1]=n[p+1],i+=2,p+=2}else{if(!t(r))throw new TypeError(j("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(f=r.length,m=0;m<f;m++)if(!s(r[m])){l=!0;break}if(l){if(!u(f))throw new RangeError(j("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",f));if(i+f/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(n=r,p=a.byteOffset+i*V,n.buffer===a.buffer&&n.byteOffset<p&&n.byteOffset+n.byteLength>p){for(o=new c(f),m=0;m<f;m++)o[m]=n[m];n=o}for(i*=2,f/=2,p=0,m=0;m<f;m++)a[i]=n[p],a[i+1]=n[p+1],i+=2,p+=2;return}if(i+f>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,m=0;m<f;m++)h=r[m],a[i]=d(h),a[i+1]=y(h),i+=2}})),m(S.prototype,"some",(function(e,r){var t,n;if(!L(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!o(e))throw new TypeError(j("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=0;n<this._length;n++)if(e.call(r,B(t,n),n,this))return!0;return!1})),m(S.prototype,"subarray",(function(e,r){var t,n,i;if(!L(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,i=this._length,0===arguments.length)e=0,r=i;else{if(!l(e))throw new TypeError(j("invalid argument. First argument must be an integer. Value: `%s`.",e));if(e<0&&(e+=i)<0&&(e=0),1===arguments.length)r=i;else{if(!l(r))throw new TypeError(j("invalid argument. Second argument must be an integer. Value: `%s`.",r));r<0?(r+=i)<0&&(r=0):r>i&&(r=i)}}return e>=i?(i=0,t=n.byteLength):e>=r?(i=0,t=n.byteOffset+e*V):(i=r-e,t=n.byteOffset+e*V),new this.constructor(n.buffer,t,i<0?0:i)})),m(S.prototype,"toString",(function(){var e,r,t;if(!L(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=this._buffer,t=0;t<this._length;t++)e.push(B(r,t).toString());return e.join(",")}));export{S as default};
//# sourceMappingURL=index.mjs.map
