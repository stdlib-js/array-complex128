"use strict";var q=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var B=q(function(dr,V){
var J=require('@stdlib/assert-is-array-like-object/dist'),K=require('@stdlib/assert-is-complex-like/dist'),Q=require('@stdlib/error-tools-fmtprodmsg/dist'),U=require('@stdlib/complex-real/dist'),X=require('@stdlib/complex-imag/dist');function Z(n){var e,r,t;for(e=[];r=n.next(),!r.done;)if(t=r.value,J(t)&&t.length>=2)e.push(t[0],t[1]);else if(K(t))e.push(U(t),X(t));else return new TypeError(Q('00P24',t));return e}V.exports=Z
});var M=q(function(Tr,O){
var $=require('@stdlib/assert-is-array-like-object/dist'),rr=require('@stdlib/assert-is-complex-like/dist'),er=require('@stdlib/error-tools-fmtprodmsg/dist'),tr=require('@stdlib/complex-real/dist'),nr=require('@stdlib/complex-imag/dist');function ar(n,e,r){var t,a,o,u;for(t=[],u=-1;a=n.next(),!a.done;)if(u+=1,o=e.call(r,a.value,u),$(o)&&o.length>=2)t.push(o[0],o[1]);else if(rr(o))t.push(tr(o),nr(o));else return new TypeError(er('00P25',o));return t}O.exports=ar
});var I=q(function(_r,S){
var ir=require('@stdlib/assert-is-complex-like/dist'),or=require('@stdlib/complex-real/dist'),ur=require('@stdlib/complex-imag/dist');function sr(n,e){var r,t,a,o;for(r=e.length,o=0,a=0;a<r;a++){if(t=e[a],!ir(t))return null;n[o]=or(t),n[o+1]=ur(t),o+=2}return n}S.exports=sr
});var D=q(function(qr,H){
var _=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,N=require('@stdlib/assert-is-array-like-object/dist'),j=require('@stdlib/assert-is-collection/dist'),F=require('@stdlib/assert-is-arraybuffer/dist'),Y=require('@stdlib/assert-is-object/dist'),fr=require('@stdlib/assert-is-array/dist'),b=require('@stdlib/assert-is-function/dist'),d=require('@stdlib/assert-is-complex-like/dist'),A=require('@stdlib/math-base-assert-is-even/dist'),x=require('@stdlib/math-base-assert-is-integer/dist'),lr=require('@stdlib/assert-has-iterator-symbol-support/dist'),T=require('@stdlib/symbol-iterator/dist'),v=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),c=require('@stdlib/array-float64/dist'),P=require('@stdlib/complex-float64/dist'),L=require('@stdlib/complex-real/dist'),k=require('@stdlib/complex-imag/dist'),mr=require('@stdlib/strided-base-reinterpret-complex64/dist'),gr=require('@stdlib/strided-base-reinterpret-complex128/dist'),hr=require('@stdlib/array-base-getter/dist'),vr=require('@stdlib/array-base-accessor-getter/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist'),W=B(),yr=M(),pr=I(),y=c.BYTES_PER_ELEMENT*2,z=lr();function E(n){return n instanceof m||typeof n=="object"&&n!==null&&(n.constructor.name==="Complex64Array"||n.constructor.name==="Complex128Array")&&typeof n._length=="number"&&typeof n._buffer=="object"}function G(n){return n===m||n.name==="Complex64Array"}function cr(n){return typeof n=="object"&&n!==null&&n.constructor.name==="Complex64Array"&&n.BYTES_PER_ELEMENT===y/2}function wr(n){return typeof n=="object"&&n!==null&&n.constructor.name==="Complex128Array"&&n.BYTES_PER_ELEMENT===y}function C(n,e){return e*=2,new P(n[e],n[e+1])}function m(){var n,e,r,t;if(e=arguments.length,!(this instanceof m))return e===0?new m:e===1?new m(arguments[0]):e===2?new m(arguments[0],arguments[1]):new m(arguments[0],arguments[1],arguments[2]);if(e===0)r=new c(0);else if(e===1)if(_(arguments[0]))r=new c(arguments[0]*2);else if(j(arguments[0]))if(r=arguments[0],t=r.length,t&&fr(r)&&d(r[0])){if(r=pr(new c(t*2),r),r===null){if(!A(t))throw new RangeError(f('00P26',t));r=new c(arguments[0])}}else{if(cr(r))r=mr(r,0);else if(wr(r))r=gr(r,0);else if(!A(t))throw new RangeError(f('00P27',t));r=new c(r)}else if(F(arguments[0])){if(r=arguments[0],!x(r.byteLength/y))throw new RangeError(f('00PE9',y,r.byteLength));r=new c(r)}else if(Y(arguments[0])){if(r=arguments[0],z===!1)throw new TypeError(f('00P29',r));if(!b(r[T]))throw new TypeError(f('00P2A',r));if(r=r[T](),!b(r.next))throw new TypeError(f('00P2A',r));if(r=W(r),r instanceof Error)throw r;r=new c(r)}else throw new TypeError(f('00P2A',arguments[0]));else{if(r=arguments[0],!F(r))throw new TypeError(f('00P2B',r));if(n=arguments[1],!_(n))throw new TypeError(f('00P2C',n));if(!x(n/y))throw new RangeError(f('00PEA',y,n));if(e===2){if(t=r.byteLength-n,!x(t/y))throw new RangeError(f('00P2E',y,t));r=new c(r,n)}else{if(t=arguments[2],!_(t))throw new TypeError(f('00P2F',t));if(t*y>r.byteLength-n)throw new RangeError(f('00P2G',t*y));r=new c(r,n,t*2)}}return v(this,"_buffer",r),v(this,"_length",r.length/2),this}v(m,"BYTES_PER_ELEMENT",y);v(m,"name","Complex128Array");v(m,"from",function(e){var r,t,a,o,u,s,w,i,h,g,l,p;if(!b(this))throw new TypeError(f('00P01'));if(!G(this))throw new TypeError(f('00P02'));if(t=arguments.length,t>1){if(a=arguments[1],!b(a))throw new TypeError(f('00P2H',a));t>2&&(r=arguments[2])}if(E(e)){if(i=e.length,a){for(o=new this(i),u=o._buffer,p=0,l=0;l<i;l++){if(g=a.call(r,e.get(l),l),d(g))u[p]=L(g),u[p+1]=k(g);else if(N(g)&&g.length>=2)u[p]=g[0],u[p+1]=g[1];else throw new TypeError(f('00P25',g));p+=2}return o}return new this(e)}if(j(e)){if(a){for(i=e.length,e.get&&e.set?w=vr("default"):w=hr("default"),l=0;l<i;l++)if(!d(w(e,l))){h=!0;break}if(h){if(!A(i))throw new RangeError(f('00P2I',i));for(o=new this(i/2),u=o._buffer,l=0;l<i;l++)u[l]=a.call(r,w(e,l),l);return o}for(o=new this(i),u=o._buffer,p=0,l=0;l<i;l++){if(g=a.call(r,w(e,l),l),d(g))u[p]=L(g),u[p+1]=k(g);else if(N(g)&&g.length>=2)u[p]=g[0],u[p+1]=g[1];else throw new TypeError(f('00P25',g));p+=2}return o}return new this(e)}if(Y(e)&&z&&b(e[T])){if(u=e[T](),!b(u.next))throw new TypeError(f('00P2J',e));if(a?s=yr(u,a,r):s=W(u),s instanceof Error)throw s;for(i=s.length/2,o=new this(i),u=o._buffer,l=0;l<i;l++)u[l]=s[l];return o}throw new TypeError(f('00P2J',e))});v(m,"of",function(){var e,r;if(!b(this))throw new TypeError(f('00P01'));if(!G(this))throw new TypeError(f('00P02'));for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)});v(m.prototype,"at",function(e){if(!E(this))throw new TypeError(f('00P02'));if(!x(e))throw new TypeError(f('00P8A',e));if(e<0&&(e+=this._length),!(e<0||e>=this._length))return C(this._buffer,e)});R(m.prototype,"buffer",function(){return this._buffer.buffer});R(m.prototype,"byteLength",function(){return this._buffer.byteLength});R(m.prototype,"byteOffset",function(){return this._buffer.byteOffset});v(m.prototype,"BYTES_PER_ELEMENT",m.BYTES_PER_ELEMENT);v(m.prototype,"copyWithin",function(e,r){if(!E(this))throw new TypeError(f('00P02'));return arguments.length===2?this._buffer.copyWithin(e*2,r*2):this._buffer.copyWithin(e*2,r*2,arguments[2]*2),this});v(m.prototype,"entries",function(){var e,r,t,a,o,u,s;if(!E(this))throw new TypeError(f('00P02'));return r=this,e=this._buffer,a=this._length,u=-1,s=-2,t={},v(t,"next",w),v(t,"return",i),T&&v(t,T,h),t;function w(){var g;return u+=1,o||u>=a?{done:!0}:(s+=2,g=new P(e[s],e[s+1]),{value:[u,g],done:!1})}function i(g){return o=!0,arguments.length?{value:g,done:!0}:{done:!0}}function h(){return r.entries()}});v(m.prototype,"every",function(e,r){var t,a;if(!E(this))throw new TypeError(f('00P02'));if(!b(e))throw new TypeError(f('00P3c',e));for(t=this._buffer,a=0;a<this._length;a++)if(!e.call(r,C(t,a),a,this))return!1;return!0});v(m.prototype,"get",function(e){if(!E(this))throw new TypeError(f('00P02'));if(!_(e))throw new TypeError(f('00P2K',e));if(!(e>=this._length))return C(this._buffer,e)});R(m.prototype,"length",function(){return this._length});v(m.prototype,"set",function(e){var r,t,a,o,u,s,w,i,h;if(!E(this))throw new TypeError(f('00P02'));if(a=this._buffer,arguments.length>1){if(t=arguments[1],!_(t))throw new TypeError(f('00P2L',t))}else t=0;if(d(e)){if(t>=this._length)throw new RangeError(f('00P2M',t));t*=2,a[t]=L(e),a[t+1]=k(e);return}if(E(e)){if(s=e._length,t+s>this._length)throw new RangeError(f('00P03'));if(r=e._buffer,h=a.byteOffset+t*y,r.buffer===a.buffer&&r.byteOffset<h&&r.byteOffset+r.byteLength>h){for(o=new c(r.length),i=0;i<r.length;i++)o[i]=r[i];r=o}for(t*=2,h=0,i=0;i<s;i++)a[t]=r[h],a[t+1]=r[h+1],t+=2,h+=2;return}if(j(e)){for(s=e.length,i=0;i<s;i++)if(!d(e[i])){u=!0;break}if(u){if(!A(s))throw new RangeError(f('00P26',s));if(t+s/2>this._length)throw new RangeError(f('00P03'));if(r=e,h=a.byteOffset+t*y,r.buffer===a.buffer&&r.byteOffset<h&&r.byteOffset+r.byteLength>h){for(o=new c(s),i=0;i<s;i++)o[i]=r[i];r=o}for(t*=2,s/=2,h=0,i=0;i<s;i++)a[t]=r[h],a[t+1]=r[h+1],t+=2,h+=2;return}if(t+s>this._length)throw new RangeError(f('00P03'));for(t*=2,i=0;i<s;i++)w=e[i],a[t]=L(w),a[t+1]=k(w),t+=2;return}throw new TypeError(f('00P2N',e))});H.exports=m
});var br=D();module.exports=br;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
