"use strict";var x=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var B=x(function(dr,C){
var J=require('@stdlib/assert-is-array-like-object/dist'),K=require('@stdlib/assert-is-complex-like/dist'),Q=require('@stdlib/error-tools-fmtprodmsg/dist'),U=require('@stdlib/complex-real/dist'),X=require('@stdlib/complex-imag/dist');function Z(i){var e,r,t;for(e=[];r=i.next(),!r.done;)if(t=r.value,J(t)&&t.length>=2)e.push(t[0],t[1]);else if(K(t))e.push(U(t),X(t));else return new TypeError(Q('00P24',t));return e}C.exports=Z
});var M=x(function(Tr,O){
var $=require('@stdlib/assert-is-array-like-object/dist'),rr=require('@stdlib/assert-is-complex-like/dist'),er=require('@stdlib/error-tools-fmtprodmsg/dist'),tr=require('@stdlib/complex-real/dist'),nr=require('@stdlib/complex-imag/dist');function ir(i,e,r){var t,n,a,u;for(t=[],u=-1;n=i.next(),!n.done;)if(u+=1,a=e.call(r,n.value,u),$(a)&&a.length>=2)t.push(a[0],a[1]);else if(rr(a))t.push(tr(a),nr(a));else return new TypeError(er('00P25',a));return t}O.exports=ir
});var F=x(function(_r,S){
var ar=require('@stdlib/assert-is-complex-like/dist'),or=require('@stdlib/complex-real/dist'),ur=require('@stdlib/complex-imag/dist');function sr(i,e){var r,t,n,a;for(r=e.length,a=0,n=0;n<r;n++){if(t=e[n],!ar(t))return null;i[a]=or(t),i[a+1]=ur(t),a+=2}return i}S.exports=sr
});var D=x(function(qr,H){
var q=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,I=require('@stdlib/assert-is-array-like-object/dist'),j=require('@stdlib/assert-is-collection/dist'),N=require('@stdlib/assert-is-arraybuffer/dist'),Y=require('@stdlib/assert-is-object/dist'),fr=require('@stdlib/assert-is-array/dist'),b=require('@stdlib/assert-is-function/dist'),d=require('@stdlib/assert-is-complex-like/dist'),L=require('@stdlib/math-base-assert-is-even/dist'),A=require('@stdlib/math-base-assert-is-integer/dist'),lr=require('@stdlib/assert-has-iterator-symbol-support/dist'),T=require('@stdlib/symbol-iterator/dist'),v=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),c=require('@stdlib/array-float64/dist'),P=require('@stdlib/complex-float64/dist'),k=require('@stdlib/complex-real/dist'),R=require('@stdlib/complex-imag/dist'),mr=require('@stdlib/strided-base-reinterpret-complex64/dist'),hr=require('@stdlib/strided-base-reinterpret-complex128/dist'),gr=require('@stdlib/array-base-getter/dist'),vr=require('@stdlib/array-base-accessor-getter/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist'),z=B(),yr=M(),pr=F(),y=c.BYTES_PER_ELEMENT*2,W=lr();function E(i){return i instanceof f||typeof i=="object"&&i!==null&&(i.constructor.name==="Complex64Array"||i.constructor.name==="Complex128Array")&&typeof i._length=="number"&&typeof i._buffer=="object"}function G(i){return i===f||i.name==="Complex64Array"}function cr(i){return typeof i=="object"&&i!==null&&i.constructor.name==="Complex64Array"&&i.BYTES_PER_ELEMENT===y/2}function wr(i){return typeof i=="object"&&i!==null&&i.constructor.name==="Complex128Array"&&i.BYTES_PER_ELEMENT===y}function _(i,e){return e*=2,new P(i[e],i[e+1])}function f(){var i,e,r,t;if(e=arguments.length,!(this instanceof f))return e===0?new f:e===1?new f(arguments[0]):e===2?new f(arguments[0],arguments[1]):new f(arguments[0],arguments[1],arguments[2]);if(e===0)r=new c(0);else if(e===1)if(q(arguments[0]))r=new c(arguments[0]*2);else if(j(arguments[0]))if(r=arguments[0],t=r.length,t&&fr(r)&&d(r[0])){if(r=pr(new c(t*2),r),r===null){if(!L(t))throw new RangeError(s('00P26',t));r=new c(arguments[0])}}else{if(cr(r))r=mr(r,0);else if(wr(r))r=hr(r,0);else if(!L(t))throw new RangeError(s('00P27',t));r=new c(r)}else if(N(arguments[0])){if(r=arguments[0],!A(r.byteLength/y))throw new RangeError(s('00PE9',y,r.byteLength));r=new c(r)}else if(Y(arguments[0])){if(r=arguments[0],W===!1)throw new TypeError(s('00P29',r));if(!b(r[T]))throw new TypeError(s('00P2A',r));if(r=r[T](),!b(r.next))throw new TypeError(s('00P2A',r));if(r=z(r),r instanceof Error)throw r;r=new c(r)}else throw new TypeError(s('00P2A',arguments[0]));else{if(r=arguments[0],!N(r))throw new TypeError(s('00P2B',r));if(i=arguments[1],!q(i))throw new TypeError(s('00P2C',i));if(!A(i/y))throw new RangeError(s('00PEA',y,i));if(e===2){if(t=r.byteLength-i,!A(t/y))throw new RangeError(s('00P2E',y,t));r=new c(r,i)}else{if(t=arguments[2],!q(t))throw new TypeError(s('00P2F',t));if(t*y>r.byteLength-i)throw new RangeError(s('00P2G',t*y));r=new c(r,i,t*2)}}return v(this,"_buffer",r),v(this,"_length",r.length/2),this}v(f,"BYTES_PER_ELEMENT",y);v(f,"name","Complex128Array");v(f,"from",function(e){var r,t,n,a,u,l,w,o,g,h,m,p;if(!b(this))throw new TypeError(s('00P01'));if(!G(this))throw new TypeError(s('00P02'));if(t=arguments.length,t>1){if(n=arguments[1],!b(n))throw new TypeError(s('00P2H',n));t>2&&(r=arguments[2])}if(E(e)){if(o=e.length,n){for(a=new this(o),u=a._buffer,p=0,m=0;m<o;m++){if(h=n.call(r,e.get(m),m),d(h))u[p]=k(h),u[p+1]=R(h);else if(I(h)&&h.length>=2)u[p]=h[0],u[p+1]=h[1];else throw new TypeError(s('00P25',h));p+=2}return a}return new this(e)}if(j(e)){if(n){for(o=e.length,e.get&&e.set?w=vr("default"):w=gr("default"),m=0;m<o;m++)if(!d(w(e,m))){g=!0;break}if(g){if(!L(o))throw new RangeError(s('00P2I',o));for(a=new this(o/2),u=a._buffer,m=0;m<o;m++)u[m]=n.call(r,w(e,m),m);return a}for(a=new this(o),u=a._buffer,p=0,m=0;m<o;m++){if(h=n.call(r,w(e,m),m),d(h))u[p]=k(h),u[p+1]=R(h);else if(I(h)&&h.length>=2)u[p]=h[0],u[p+1]=h[1];else throw new TypeError(s('00P25',h));p+=2}return a}return new this(e)}if(Y(e)&&W&&b(e[T])){if(u=e[T](),!b(u.next))throw new TypeError(s('00P2J',e));if(n?l=yr(u,n,r):l=z(u),l instanceof Error)throw l;for(o=l.length/2,a=new this(o),u=a._buffer,m=0;m<o;m++)u[m]=l[m];return a}throw new TypeError(s('00P2J',e))});v(f,"of",function(){var e,r;if(!b(this))throw new TypeError(s('00P01'));if(!G(this))throw new TypeError(s('00P02'));for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)});v(f.prototype,"at",function(e){if(!E(this))throw new TypeError(s('00P02'));if(!A(e))throw new TypeError(s('00P8A',e));if(e<0&&(e+=this._length),!(e<0||e>=this._length))return _(this._buffer,e)});V(f.prototype,"buffer",function(){return this._buffer.buffer});V(f.prototype,"byteLength",function(){return this._buffer.byteLength});V(f.prototype,"byteOffset",function(){return this._buffer.byteOffset});v(f.prototype,"BYTES_PER_ELEMENT",f.BYTES_PER_ELEMENT);v(f.prototype,"copyWithin",function(e,r){if(!E(this))throw new TypeError(s('00P02'));return arguments.length===2?this._buffer.copyWithin(e*2,r*2):this._buffer.copyWithin(e*2,r*2,arguments[2]*2),this});v(f.prototype,"entries",function(){var e,r,t,n,a,u,l;if(!E(this))throw new TypeError(s('00P02'));return r=this,e=this._buffer,n=this._length,u=-1,l=-2,t={},v(t,"next",w),v(t,"return",o),T&&v(t,T,g),t;function w(){var h;return u+=1,a||u>=n?{done:!0}:(l+=2,h=new P(e[l],e[l+1]),{value:[u,h],done:!1})}function o(h){return a=!0,arguments.length?{value:h,done:!0}:{done:!0}}function g(){return r.entries()}});v(f.prototype,"every",function(e,r){var t,n;if(!E(this))throw new TypeError(s('00P02'));if(!b(e))throw new TypeError(s('00P3c',e));for(t=this._buffer,n=0;n<this._length;n++)if(!e.call(r,_(t,n),n,this))return!1;return!0});v(f.prototype,"find",function(e,r){var t,n,a;if(!E(this))throw new TypeError(s('00P02'));if(!b(e))throw new TypeError(s('00P3c',e));for(t=this._buffer,n=0;n<this._length;n++)if(a=_(t,n),e.call(r,a,n,this))return a});v(f.prototype,"findLast",function(e,r){var t,n,a;if(!E(this))throw new TypeError(s('00P02'));if(!b(e))throw new TypeError(s('00P3c',e));for(t=this._buffer,n=this._length-1;n>=0;n--)if(a=_(t,n),e.call(r,a,n,this))return a});v(f.prototype,"get",function(e){if(!E(this))throw new TypeError(s('00P02'));if(!q(e))throw new TypeError(s('00P2K',e));if(!(e>=this._length))return _(this._buffer,e)});V(f.prototype,"length",function(){return this._length});v(f.prototype,"set",function(e){var r,t,n,a,u,l,w,o,g;if(!E(this))throw new TypeError(s('00P02'));if(n=this._buffer,arguments.length>1){if(t=arguments[1],!q(t))throw new TypeError(s('00P2L',t))}else t=0;if(d(e)){if(t>=this._length)throw new RangeError(s('00P2M',t));t*=2,n[t]=k(e),n[t+1]=R(e);return}if(E(e)){if(l=e._length,t+l>this._length)throw new RangeError(s('00P03'));if(r=e._buffer,g=n.byteOffset+t*y,r.buffer===n.buffer&&r.byteOffset<g&&r.byteOffset+r.byteLength>g){for(a=new c(r.length),o=0;o<r.length;o++)a[o]=r[o];r=a}for(t*=2,g=0,o=0;o<l;o++)n[t]=r[g],n[t+1]=r[g+1],t+=2,g+=2;return}if(j(e)){for(l=e.length,o=0;o<l;o++)if(!d(e[o])){u=!0;break}if(u){if(!L(l))throw new RangeError(s('00P26',l));if(t+l/2>this._length)throw new RangeError(s('00P03'));if(r=e,g=n.byteOffset+t*y,r.buffer===n.buffer&&r.byteOffset<g&&r.byteOffset+r.byteLength>g){for(a=new c(l),o=0;o<l;o++)a[o]=r[o];r=a}for(t*=2,l/=2,g=0,o=0;o<l;o++)n[t]=r[g],n[t+1]=r[g+1],t+=2,g+=2;return}if(t+l>this._length)throw new RangeError(s('00P03'));for(t*=2,o=0;o<l;o++)w=e[o],n[t]=k(w),n[t+1]=R(w),t+=2;return}throw new TypeError(s('00P2N',e))});v(f.prototype,"some",function(e,r){var t,n;if(!E(this))throw new TypeError(s('00P02'));if(!b(e))throw new TypeError(s('00P3c',e));for(t=this._buffer,n=0;n<this._length;n++)if(e.call(r,_(t,n),n,this))return!0;return!1});H.exports=f
});var br=D();module.exports=br;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
