// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-arraybuffer@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.2.1-esm/index.mjs";import{primitives as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex-like@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-even@v0.2.2-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-integer@v0.2.4-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex64array@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex128array@v0.2.1-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-iterator-symbol-support@v0.2.1-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.2.1-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-real@v0.2.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-imag@v0.2.1-esm/index.mjs";import P from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.2-esm/index.mjs";import _ from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@v0.2.0-esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@v0.2.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.2.1-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.2.1-esm/index.mjs";import R from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function L(r){var t,n,i;for(t=[];!(n=r.next()).done;)if(i=n.value,e(i)&&i.length>=2)t.push(i[0],i[1]);else{if(!l(i))return new TypeError(R("00P24",i));t.push(b(i),v(i))}return t}var O=2*m.BYTES_PER_ELEMENT,S=y();function A(r){return r instanceof I||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function F(r){return r===I||"Complex64Array"===r.name}function k(r,e){return new E(r[e*=2],r[e+1])}function I(){var e,s,f,y;if(s=arguments.length,!(this instanceof I))return 0===s?new I:1===s?new I(arguments[0]):2===s?new I(arguments[0],arguments[1]):new I(arguments[0],arguments[1],arguments[2]);if(0===s)f=new m(0);else if(1===s)if(r(arguments[0]))f=new m(2*arguments[0]);else if(t(arguments[0]))if((y=(f=arguments[0]).length)&&o(f)&&l(f[0])){if(f=function(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(n=e[i],!l(n))return null;r[o]=b(n),r[o+1]=v(n),o+=2}return r}(new m(2*y),f),null===f){if(!p(y))throw new RangeError(R("00P26",y));f=new m(arguments[0])}}else{if(w(f))f=_(f,0);else if(a(f))f=T(f,0);else if(!p(y))throw new RangeError(R("00P27",y));f=new m(f)}else if(n(arguments[0])){if(!u((f=arguments[0]).byteLength/O))throw new RangeError(R("00PE9",O,f.byteLength));f=new m(f)}else{if(!i(arguments[0]))throw new TypeError(R("00P2A",arguments[0]));if(f=arguments[0],!1===S)throw new TypeError(R("00P29",f));if(!h(f[c]))throw new TypeError(R("00P2A",f));if(f=f[c](),!h(f.next))throw new TypeError(R("00P2A",f));if((f=L(f))instanceof Error)throw f;f=new m(f)}else{if(!n(f=arguments[0]))throw new TypeError(R("00P2B",f));if(!r(e=arguments[1]))throw new TypeError(R("00P2C",e));if(!u(e/O))throw new RangeError(R("00PEA",O,e));if(2===s){if(y=f.byteLength-e,!u(y/O))throw new RangeError(R("00P2E",O,y));f=new m(f,e)}else{if(!r(y=arguments[2]))throw new TypeError(R("00P2F",y));if(y*O>f.byteLength-e)throw new RangeError(R("00P2G",y*O));f=new m(f,e,2*y)}}return d(this,"_buffer",f),d(this,"_length",f.length/2),this}d(I,"BYTES_PER_ELEMENT",O),d(I,"name","Complex128Array"),d(I,"from",(function(r){var n,o,s,f,u,w,a,y,d,g,m,E;if(!h(this))throw new TypeError(R("00P01"));if(!F(this))throw new TypeError(R("00P02"));if((o=arguments.length)>1){if(!h(s=arguments[1]))throw new TypeError(R("00P2H",s));o>2&&(n=arguments[2])}if(A(r)){if(y=r.length,s){for(u=(f=new this(y))._buffer,E=0,m=0;m<y;m++){if(g=s.call(n,r.get(m),m),l(g))u[E]=b(g),u[E+1]=v(g);else{if(!(e(g)&&g.length>=2))throw new TypeError(R("00P25",g));u[E]=g[0],u[E+1]=g[1]}E+=2}return f}return new this(r)}if(t(r)){if(s){for(y=r.length,a=r.get&&r.set?x("default"):j("default"),m=0;m<y;m++)if(!l(a(r,m))){d=!0;break}if(d){if(!p(y))throw new RangeError(R("00P2I",y));for(u=(f=new this(y/2))._buffer,m=0;m<y;m++)u[m]=s.call(n,a(r,m),m);return f}for(u=(f=new this(y))._buffer,E=0,m=0;m<y;m++){if(g=s.call(n,a(r,m),m),l(g))u[E]=b(g),u[E+1]=v(g);else{if(!(e(g)&&g.length>=2))throw new TypeError(R("00P25",g));u[E]=g[0],u[E+1]=g[1]}E+=2}return f}return new this(r)}if(i(r)&&S&&h(r[c])){if(u=r[c](),!h(u.next))throw new TypeError(R("00P2J",r));if(w=s?function(r,t,n){var i,o,s,f;for(i=[],f=-1;!(o=r.next()).done;)if(f+=1,s=t.call(n,o.value,f),e(s)&&s.length>=2)i.push(s[0],s[1]);else{if(!l(s))return new TypeError(R("00P25",s));i.push(b(s),v(s))}return i}(u,s,n):L(u),w instanceof Error)throw w;for(u=(f=new this(y=w.length/2))._buffer,m=0;m<y;m++)u[m]=w[m];return f}throw new TypeError(R("00P2J",r))})),d(I,"of",(function(){var r,e;if(!h(this))throw new TypeError(R("00P01"));if(!F(this))throw new TypeError(R("00P02"));for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),d(I.prototype,"at",(function(r){if(!A(this))throw new TypeError(R("00P02"));if(!u(r))throw new TypeError(R("00P8A",r));if(r<0&&(r+=this._length),!(r<0||r>=this._length))return k(this._buffer,r)})),g(I.prototype,"buffer",(function(){return this._buffer.buffer})),g(I.prototype,"byteLength",(function(){return this._buffer.byteLength})),g(I.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),d(I.prototype,"BYTES_PER_ELEMENT",I.BYTES_PER_ELEMENT),d(I.prototype,"copyWithin",(function(r,e){if(!A(this))throw new TypeError(R("00P02"));return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),d(I.prototype,"entries",(function(){var r,e,t,n,i,o,s;if(!A(this))throw new TypeError(R("00P02"));return e=this,r=this._buffer,n=this._length,o=-1,s=-2,d(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new E(r[s+=2],r[s+1]),{value:[o,e],done:!1}})),d(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),c&&d(t,c,(function(){return e.entries()})),t})),d(I.prototype,"every",(function(r,e){var t,n;if(!A(this))throw new TypeError(R("00P02"));if(!h(r))throw new TypeError(R("00P3c",r));for(t=this._buffer,n=0;n<this._length;n++)if(!r.call(e,k(t,n),n,this))return!1;return!0})),d(I.prototype,"fill",(function(r,e,t){var n,i,o,s,f,h;if(!A(this))throw new TypeError(R("00P02"));if(!l(r))throw new TypeError(R("00PFG",r));if(n=this._buffer,i=this._length,arguments.length>1){if(!u(e))throw new TypeError(R("00P7f",e));if(e<0&&(e+=i)<0&&(e=0),arguments.length>2){if(!u(t))throw new TypeError(R("00P2z",t));t<0&&(t+=i)<0&&(t=0),t>i&&(t=i)}else t=i}else e=0,t=i;for(s=b(r),f=v(r),h=e;h<t;h++)n[o=2*h]=s,n[o+1]=f;return this})),d(I.prototype,"filter",(function(r,e){var t,n,i,o;if(!A(this))throw new TypeError(R("00P02"));if(!h(r))throw new TypeError(R("00P3c",r));for(t=this._buffer,n=[],i=0;i<this._length;i++)o=k(t,i),r.call(e,o,i,this)&&n.push(o);return new this.constructor(n)})),d(I.prototype,"find",(function(r,e){var t,n,i;if(!A(this))throw new TypeError(R("00P02"));if(!h(r))throw new TypeError(R("00P3c",r));for(t=this._buffer,n=0;n<this._length;n++)if(i=k(t,n),r.call(e,i,n,this))return i})),d(I.prototype,"findIndex",(function(r,e){var t,n,i;if(!A(this))throw new TypeError(R("00P02"));if(!h(r))throw new TypeError(R("00P3c",r));for(t=this._buffer,n=0;n<this._length;n++)if(i=k(t,n),r.call(e,i,n,this))return n;return-1})),d(I.prototype,"findLast",(function(r,e){var t,n,i;if(!A(this))throw new TypeError(R("00P02"));if(!h(r))throw new TypeError(R("00P3c",r));for(t=this._buffer,n=this._length-1;n>=0;n--)if(i=k(t,n),r.call(e,i,n,this))return i})),d(I.prototype,"findLastIndex",(function(r,e){var t,n,i;if(!A(this))throw new TypeError(R("00P02"));if(!h(r))throw new TypeError(R("00P3c",r));for(t=this._buffer,n=this._length-1;n>=0;n--)if(i=k(t,n),r.call(e,i,n,this))return n;return-1})),d(I.prototype,"forEach",(function(r,e){var t,n,i;if(!A(this))throw new TypeError(R("00P02"));if(!h(r))throw new TypeError(R("00P3c",r));for(t=this._buffer,n=0;n<this._length;n++)i=k(t,n),r.call(e,i,n,this)})),d(I.prototype,"get",(function(e){if(!A(this))throw new TypeError(R("00P02"));if(!r(e))throw new TypeError(R("00P2K",e));if(!(e>=this._length))return k(this._buffer,e)})),g(I.prototype,"length",(function(){return this._length})),d(I.prototype,"includes",(function(r,e){var t,n,i,o,s;if(!A(this))throw new TypeError(R("00P02"));if(!l(r))throw new TypeError(R("00PFG",r));if(arguments.length>1){if(!u(e))throw new TypeError(R("00P7f",e));e<0&&(e+=this._length)<0&&(e=0)}else e=0;for(i=b(r),o=v(r),t=this._buffer,s=e;s<this._length;s++)if(i===t[n=2*s]&&o===t[n+1])return!0;return!1})),d(I.prototype,"indexOf",(function(r,e){var t,n,i,o,s;if(!A(this))throw new TypeError(R("00P02"));if(!l(r))throw new TypeError(R("00PFG",r));if(arguments.length>1){if(!u(e))throw new TypeError(R("00P7f",e));e<0&&(e+=this._length)<0&&(e=0)}else e=0;for(i=b(r),o=v(r),t=this._buffer,s=e;s<this._length;s++)if(i===t[n=2*s]&&o===t[n+1])return s;return-1})),d(I.prototype,"join",(function(r){var e,t,n,i;if(!A(this))throw new TypeError(R("00P02"));if(0===arguments.length)n=",";else{if(!f(r))throw new TypeError(R("00P3F",r));n=r}for(e=[],t=this._buffer,i=0;i<this._length;i++)e.push(k(t,i).toString());return e.join(n)})),d(I.prototype,"keys",(function(){var r,e,t,n,i;if(!A(this))throw new TypeError(R("00P02"));return r=this,t=this._length,i=-1,d(e={},"next",(function(){if(i+=1,n||i>=t)return{done:!0};return{value:i,done:!1}})),d(e,"return",(function(r){if(n=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),c&&d(e,c,(function(){return r.keys()})),e})),d(I.prototype,"lastIndexOf",(function(r,e){var t,n,i,o,s;if(!A(this))throw new TypeError(R("00P02"));if(!l(r))throw new TypeError(R("00PFG",r));if(arguments.length>1){if(!u(e))throw new TypeError(R("00P7f",e));e>=this._length?e=this._length-1:e<0&&(e+=this._length)}else e=this._length-1;for(i=b(r),o=v(r),t=this._buffer,s=e;s>=0;s--)if(i===t[n=2*s]&&o===t[n+1])return s;return-1})),d(I.prototype,"map",(function(r,t){var n,i,o,s,f;if(!A(this))throw new TypeError(R("00P02"));if(!h(r))throw new TypeError(R("00P3c",r));for(i=this._buffer,n=(o=new this.constructor(this._length))._buffer,s=0;s<this._length;s++)if(f=r.call(t,k(i,s),s,this),l(f))n[2*s]=b(f),n[2*s+1]=v(f);else{if(!e(f)||2!==f.length)throw new TypeError(R("00P25",f));n[2*s]=f[0],n[2*s+1]=f[1]}return o})),d(I.prototype,"reduce",(function(r,e){var t,n,i,o;if(!A(this))throw new TypeError(R("00P02"));if(!h(r))throw new TypeError(R("00P3c",r));if(t=this._buffer,i=this._length,arguments.length>1)n=e,o=0;else{if(0===i)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");n=k(t,0),o=1}for(;o<i;o++)n=r(n,k(t,o),o,this);return n})),d(I.prototype,"reduceRight",(function(r,e){var t,n,i,o;if(!A(this))throw new TypeError(R("00P02"));if(!h(r))throw new TypeError(R("00P3c",r));if(t=this._buffer,i=this._length,arguments.length>1)n=e,o=i-1;else{if(0===i)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");n=k(t,i-1),o=i-2}for(;o>=0;o--)n=r(n,k(t,o),o,this);return n})),d(I.prototype,"reverse",(function(){var r,e,t,n,i,o;if(!A(this))throw new TypeError(R("00P02"));for(t=this._length,r=this._buffer,n=P(t/2),i=0;i<n;i++)o=t-i-1,e=r[2*i],r[2*i]=r[2*o],r[2*o]=e,e=r[2*i+1],r[2*i+1]=r[2*o+1],r[2*o+1]=e;return this})),d(I.prototype,"set",(function(e){var n,i,o,s,f,h,u,w,a;if(!A(this))throw new TypeError(R("00P02"));if(o=this._buffer,arguments.length>1){if(!r(i=arguments[1]))throw new TypeError(R("00P2L",i))}else i=0;if(l(e)){if(i>=this._length)throw new RangeError(R("00P2M",i));return o[i*=2]=b(e),void(o[i+1]=v(e))}if(A(e)){if(i+(h=e._length)>this._length)throw new RangeError(R("00P03"));if(n=e._buffer,a=o.byteOffset+i*O,n.buffer===o.buffer&&n.byteOffset<a&&n.byteOffset+n.byteLength>a){for(s=new m(n.length),w=0;w<n.length;w++)s[w]=n[w];n=s}for(i*=2,a=0,w=0;w<h;w++)o[i]=n[a],o[i+1]=n[a+1],i+=2,a+=2}else{if(!t(e))throw new TypeError(R("00P2N",e));for(h=e.length,w=0;w<h;w++)if(!l(e[w])){f=!0;break}if(f){if(!p(h))throw new RangeError(R("00P26",h));if(i+h/2>this._length)throw new RangeError(R("00P03"));if(n=e,a=o.byteOffset+i*O,n.buffer===o.buffer&&n.byteOffset<a&&n.byteOffset+n.byteLength>a){for(s=new m(h),w=0;w<h;w++)s[w]=n[w];n=s}for(i*=2,h/=2,a=0,w=0;w<h;w++)o[i]=n[a],o[i+1]=n[a+1],i+=2,a+=2;return}if(i+h>this._length)throw new RangeError(R("00P03"));for(i*=2,w=0;w<h;w++)u=e[w],o[i]=b(u),o[i+1]=v(u),i+=2}})),d(I.prototype,"slice",(function(r,e){var t,n,i,o,s,f,h;if(!A(this))throw new TypeError(R("00P02"));if(s=this._buffer,f=this._length,0===arguments.length)r=0,e=f;else{if(!u(r))throw new TypeError(R("00P7e",r));if(r<0&&(r+=f)<0&&(r=0),1===arguments.length)e=f;else{if(!u(e))throw new TypeError(R("00P7f",e));e<0?(e+=f)<0&&(e=0):e>f&&(e=f)}}for(t=r<e?e-r:0,n=(i=new this.constructor(t))._buffer,h=0;h<t;h++)o=2*(h+r),n[2*h]=s[o],n[2*h+1]=s[o+1];return i})),d(I.prototype,"some",(function(r,e){var t,n;if(!A(this))throw new TypeError(R("00P02"));if(!h(r))throw new TypeError(R("00P3c",r));for(t=this._buffer,n=0;n<this._length;n++)if(r.call(e,k(t,n),n,this))return!0;return!1})),d(I.prototype,"sort",(function(r){var e,t,n,i,o;if(!A(this))throw new TypeError(R("00P02"));if(!h(r))throw new TypeError(R("00P3c",r));for(t=this._buffer,n=this._length,e=[],i=0;i<n;i++)e.push(k(t,i));for(e.sort(r),i=0;i<n;i++)t[o=2*i]=b(e[i]),t[o+1]=v(e[i]);return this})),d(I.prototype,"subarray",(function(r,e){var t,n,i;if(!A(this))throw new TypeError(R("00P02"));if(n=this._buffer,i=this._length,0===arguments.length)r=0,e=i;else{if(!u(r))throw new TypeError(R("00P7e",r));if(r<0&&(r+=i)<0&&(r=0),1===arguments.length)e=i;else{if(!u(e))throw new TypeError(R("00P7f",e));e<0?(e+=i)<0&&(e=0):e>i&&(e=i)}}return r>=i?(i=0,t=n.byteLength):r>=e?(i=0,t=n.byteOffset+r*O):(i=e-r,t=n.byteOffset+r*O),new this.constructor(n.buffer,t,i<0?0:i)})),d(I.prototype,"toLocaleString",(function(r,e){var t,n,o,h,l;if(!A(this))throw new TypeError(R("00P02"));if(0===arguments.length)n=[];else{if(!f(r)&&!s(r))throw new TypeError("invalid argument. First argument must be a string or an array of strings. Value: `"+r+"`.");n=r}if(arguments.length<2)t={};else{if(!i(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");t=e}for(h=this._buffer,o=[],l=0;l<this._length;l++)o.push(k(h,l).toLocaleString(n,t));return o.join(",")})),d(I.prototype,"toReversed",(function(){var r,e,t,n,i,o;if(!A(this))throw new TypeError(R("00P02"));for(t=this._length,e=new this.constructor(t),n=this._buffer,r=e._buffer,i=0;i<t;i++)o=t-i-1,r[2*i]=n[2*o],r[2*i+1]=n[2*o+1];return e})),d(I.prototype,"toSorted",(function(r){var e,t,n,i;if(!A(this))throw new TypeError(R("00P02"));if(!h(r))throw new TypeError(R("00P3c",r));for(t=this._buffer,n=this._length,e=[],i=0;i<n;i++)e.push(k(t,i));return e.sort(r),new I(e)})),d(I.prototype,"toString",(function(){var r,e,t;if(!A(this))throw new TypeError(R("00P02"));for(r=[],e=this._buffer,t=0;t<this._length;t++)r.push(k(e,t).toString());return r.join(",")})),d(I.prototype,"values",(function(){var r,e,t,n,i,o;if(!A(this))throw new TypeError(R("00P02"));return e=this,i=this._buffer,t=this._length,o=-1,d(r={},"next",(function(){if(o+=1,n||o>=t)return{done:!0};return{value:k(i,o),done:!1}})),d(r,"return",(function(r){if(n=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),c&&d(r,c,(function(){return e.values()})),r})),d(I.prototype,"with",(function(r,e){var t,n,i;if(!A(this))throw new TypeError(R("00P02"));if(!u(r))throw new TypeError(R("00P7e",r));if(i=this._length,r<0&&(r+=i),r<0||r>=i)throw new RangeError(R("00PFP",r));if(!l(e))throw new TypeError(R("00PFQ",e));return(t=(n=new this.constructor(this._buffer))._buffer)[2*r]=b(e),t[2*r+1]=v(e),n}));export{I as default};
//# sourceMappingURL=index.mjs.map
