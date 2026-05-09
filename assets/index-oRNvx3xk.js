(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))c(h);new MutationObserver(h=>{for(const s of h)if(s.type==="childList")for(const g of s.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function o(h){const s={};return h.integrity&&(s.integrity=h.integrity),h.referrerPolicy&&(s.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?s.credentials="include":h.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(h){if(h.ep)return;h.ep=!0;const s=o(h);fetch(h.href,s)}})();function o0(f){return f&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f}var Rc={exports:{}},Na={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ws;function f1(){if(Ws)return Na;Ws=1;var f=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function o(c,h,s){var g=null;if(s!==void 0&&(g=""+s),h.key!==void 0&&(g=""+h.key),"key"in h){s={};for(var A in h)A!=="key"&&(s[A]=h[A])}else s=h;return h=s.ref,{$$typeof:f,type:c,key:g,ref:h!==void 0?h:null,props:s}}return Na.Fragment=d,Na.jsx=o,Na.jsxs=o,Na}var $s;function c1(){return $s||($s=1,Rc.exports=f1()),Rc.exports}var M=c1(),Oc={exports:{}},F={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fs;function r1(){if(Fs)return F;Fs=1;var f=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),g=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),H=Symbol.iterator;function X(y){return y===null||typeof y!="object"?null:(y=H&&y[H]||y["@@iterator"],typeof y=="function"?y:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,Y={};function K(y,U,G){this.props=y,this.context=U,this.refs=Y,this.updater=G||W}K.prototype.isReactComponent={},K.prototype.setState=function(y,U){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,U,"setState")},K.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function $(){}$.prototype=K.prototype;function L(y,U,G){this.props=y,this.context=U,this.refs=Y,this.updater=G||W}var vt=L.prototype=new $;vt.constructor=L,Z(vt,K.prototype),vt.isPureReactComponent=!0;var mt=Array.isArray;function jt(){}var I={H:null,A:null,T:null,S:null},Rt=Object.prototype.hasOwnProperty;function Yt(y,U,G){var w=G.ref;return{$$typeof:f,type:y,key:U,ref:w!==void 0?w:null,props:G}}function he(y,U){return Yt(y.type,U,y.props)}function Oe(y){return typeof y=="object"&&y!==null&&y.$$typeof===f}function Wt(y){var U={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(G){return U[G]})}var Ol=/\/+/g;function Be(y,U){return typeof y=="object"&&y!==null&&y.key!=null?Wt(""+y.key):U.toString(36)}function Te(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(jt,jt):(y.status="pending",y.then(function(U){y.status==="pending"&&(y.status="fulfilled",y.value=U)},function(U){y.status==="pending"&&(y.status="rejected",y.reason=U)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function N(y,U,G,w,P){var lt=typeof y;(lt==="undefined"||lt==="boolean")&&(y=null);var ot=!1;if(y===null)ot=!0;else switch(lt){case"bigint":case"string":case"number":ot=!0;break;case"object":switch(y.$$typeof){case f:case d:ot=!0;break;case T:return ot=y._init,N(ot(y._payload),U,G,w,P)}}if(ot)return P=P(y),ot=w===""?"."+Be(y,0):w,mt(P)?(G="",ot!=null&&(G=ot.replace(Ol,"$&/")+"/"),N(P,U,G,"",function(Ln){return Ln})):P!=null&&(Oe(P)&&(P=he(P,G+(P.key==null||y&&y.key===P.key?"":(""+P.key).replace(Ol,"$&/")+"/")+ot)),U.push(P)),1;ot=0;var Jt=w===""?".":w+":";if(mt(y))for(var Ot=0;Ot<y.length;Ot++)w=y[Ot],lt=Jt+Be(w,Ot),ot+=N(w,U,G,lt,P);else if(Ot=X(y),typeof Ot=="function")for(y=Ot.call(y),Ot=0;!(w=y.next()).done;)w=w.value,lt=Jt+Be(w,Ot++),ot+=N(w,U,G,lt,P);else if(lt==="object"){if(typeof y.then=="function")return N(Te(y),U,G,w,P);throw U=String(y),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return ot}function B(y,U,G){if(y==null)return y;var w=[],P=0;return N(y,w,"","",function(lt){return U.call(G,lt,P++)}),w}function k(y){if(y._status===-1){var U=y._result;U=U(),U.then(function(G){(y._status===0||y._status===-1)&&(y._status=1,y._result=G)},function(G){(y._status===0||y._status===-1)&&(y._status=2,y._result=G)}),y._status===-1&&(y._status=0,y._result=U)}if(y._status===1)return y._result.default;throw y._result}var pt=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)},St={map:B,forEach:function(y,U,G){B(y,function(){U.apply(this,arguments)},G)},count:function(y){var U=0;return B(y,function(){U++}),U},toArray:function(y){return B(y,function(U){return U})||[]},only:function(y){if(!Oe(y))throw Error("React.Children.only expected to receive a single React element child.");return y}};return F.Activity=j,F.Children=St,F.Component=K,F.Fragment=o,F.Profiler=h,F.PureComponent=L,F.StrictMode=c,F.Suspense=v,F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,F.__COMPILER_RUNTIME={__proto__:null,c:function(y){return I.H.useMemoCache(y)}},F.cache=function(y){return function(){return y.apply(null,arguments)}},F.cacheSignal=function(){return null},F.cloneElement=function(y,U,G){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var w=Z({},y.props),P=y.key;if(U!=null)for(lt in U.key!==void 0&&(P=""+U.key),U)!Rt.call(U,lt)||lt==="key"||lt==="__self"||lt==="__source"||lt==="ref"&&U.ref===void 0||(w[lt]=U[lt]);var lt=arguments.length-2;if(lt===1)w.children=G;else if(1<lt){for(var ot=Array(lt),Jt=0;Jt<lt;Jt++)ot[Jt]=arguments[Jt+2];w.children=ot}return Yt(y.type,P,w)},F.createContext=function(y){return y={$$typeof:g,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:s,_context:y},y},F.createElement=function(y,U,G){var w,P={},lt=null;if(U!=null)for(w in U.key!==void 0&&(lt=""+U.key),U)Rt.call(U,w)&&w!=="key"&&w!=="__self"&&w!=="__source"&&(P[w]=U[w]);var ot=arguments.length-2;if(ot===1)P.children=G;else if(1<ot){for(var Jt=Array(ot),Ot=0;Ot<ot;Ot++)Jt[Ot]=arguments[Ot+2];P.children=Jt}if(y&&y.defaultProps)for(w in ot=y.defaultProps,ot)P[w]===void 0&&(P[w]=ot[w]);return Yt(y,lt,P)},F.createRef=function(){return{current:null}},F.forwardRef=function(y){return{$$typeof:A,render:y}},F.isValidElement=Oe,F.lazy=function(y){return{$$typeof:T,_payload:{_status:-1,_result:y},_init:k}},F.memo=function(y,U){return{$$typeof:p,type:y,compare:U===void 0?null:U}},F.startTransition=function(y){var U=I.T,G={};I.T=G;try{var w=y(),P=I.S;P!==null&&P(G,w),typeof w=="object"&&w!==null&&typeof w.then=="function"&&w.then(jt,pt)}catch(lt){pt(lt)}finally{U!==null&&G.types!==null&&(U.types=G.types),I.T=U}},F.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},F.use=function(y){return I.H.use(y)},F.useActionState=function(y,U,G){return I.H.useActionState(y,U,G)},F.useCallback=function(y,U){return I.H.useCallback(y,U)},F.useContext=function(y){return I.H.useContext(y)},F.useDebugValue=function(){},F.useDeferredValue=function(y,U){return I.H.useDeferredValue(y,U)},F.useEffect=function(y,U){return I.H.useEffect(y,U)},F.useEffectEvent=function(y){return I.H.useEffectEvent(y)},F.useId=function(){return I.H.useId()},F.useImperativeHandle=function(y,U,G){return I.H.useImperativeHandle(y,U,G)},F.useInsertionEffect=function(y,U){return I.H.useInsertionEffect(y,U)},F.useLayoutEffect=function(y,U){return I.H.useLayoutEffect(y,U)},F.useMemo=function(y,U){return I.H.useMemo(y,U)},F.useOptimistic=function(y,U){return I.H.useOptimistic(y,U)},F.useReducer=function(y,U,G){return I.H.useReducer(y,U,G)},F.useRef=function(y){return I.H.useRef(y)},F.useState=function(y){return I.H.useState(y)},F.useSyncExternalStore=function(y,U,G){return I.H.useSyncExternalStore(y,U,G)},F.useTransition=function(){return I.H.useTransition()},F.version="19.2.4",F}var Is;function Yc(){return Is||(Is=1,Oc.exports=r1()),Oc.exports}var R=Yc();const s0=o0(R);var Nc={exports:{}},Ca={},Cc={exports:{}},Dc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ps;function d1(){return Ps||(Ps=1,(function(f){function d(N,B){var k=N.length;N.push(B);t:for(;0<k;){var pt=k-1>>>1,St=N[pt];if(0<h(St,B))N[pt]=B,N[k]=St,k=pt;else break t}}function o(N){return N.length===0?null:N[0]}function c(N){if(N.length===0)return null;var B=N[0],k=N.pop();if(k!==B){N[0]=k;t:for(var pt=0,St=N.length,y=St>>>1;pt<y;){var U=2*(pt+1)-1,G=N[U],w=U+1,P=N[w];if(0>h(G,k))w<St&&0>h(P,G)?(N[pt]=P,N[w]=k,pt=w):(N[pt]=G,N[U]=k,pt=U);else if(w<St&&0>h(P,k))N[pt]=P,N[w]=k,pt=w;else break t}}return B}function h(N,B){var k=N.sortIndex-B.sortIndex;return k!==0?k:N.id-B.id}if(f.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;f.unstable_now=function(){return s.now()}}else{var g=Date,A=g.now();f.unstable_now=function(){return g.now()-A}}var v=[],p=[],T=1,j=null,H=3,X=!1,W=!1,Z=!1,Y=!1,K=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function vt(N){for(var B=o(p);B!==null;){if(B.callback===null)c(p);else if(B.startTime<=N)c(p),B.sortIndex=B.expirationTime,d(v,B);else break;B=o(p)}}function mt(N){if(Z=!1,vt(N),!W)if(o(v)!==null)W=!0,jt||(jt=!0,Wt());else{var B=o(p);B!==null&&Te(mt,B.startTime-N)}}var jt=!1,I=-1,Rt=5,Yt=-1;function he(){return Y?!0:!(f.unstable_now()-Yt<Rt)}function Oe(){if(Y=!1,jt){var N=f.unstable_now();Yt=N;var B=!0;try{t:{W=!1,Z&&(Z=!1,$(I),I=-1),X=!0;var k=H;try{e:{for(vt(N),j=o(v);j!==null&&!(j.expirationTime>N&&he());){var pt=j.callback;if(typeof pt=="function"){j.callback=null,H=j.priorityLevel;var St=pt(j.expirationTime<=N);if(N=f.unstable_now(),typeof St=="function"){j.callback=St,vt(N),B=!0;break e}j===o(v)&&c(v),vt(N)}else c(v);j=o(v)}if(j!==null)B=!0;else{var y=o(p);y!==null&&Te(mt,y.startTime-N),B=!1}}break t}finally{j=null,H=k,X=!1}B=void 0}}finally{B?Wt():jt=!1}}}var Wt;if(typeof L=="function")Wt=function(){L(Oe)};else if(typeof MessageChannel<"u"){var Ol=new MessageChannel,Be=Ol.port2;Ol.port1.onmessage=Oe,Wt=function(){Be.postMessage(null)}}else Wt=function(){K(Oe,0)};function Te(N,B){I=K(function(){N(f.unstable_now())},B)}f.unstable_IdlePriority=5,f.unstable_ImmediatePriority=1,f.unstable_LowPriority=4,f.unstable_NormalPriority=3,f.unstable_Profiling=null,f.unstable_UserBlockingPriority=2,f.unstable_cancelCallback=function(N){N.callback=null},f.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Rt=0<N?Math.floor(1e3/N):5},f.unstable_getCurrentPriorityLevel=function(){return H},f.unstable_next=function(N){switch(H){case 1:case 2:case 3:var B=3;break;default:B=H}var k=H;H=B;try{return N()}finally{H=k}},f.unstable_requestPaint=function(){Y=!0},f.unstable_runWithPriority=function(N,B){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var k=H;H=N;try{return B()}finally{H=k}},f.unstable_scheduleCallback=function(N,B,k){var pt=f.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?pt+k:pt):k=pt,N){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=k+St,N={id:T++,callback:B,priorityLevel:N,startTime:k,expirationTime:St,sortIndex:-1},k>pt?(N.sortIndex=k,d(p,N),o(v)===null&&N===o(p)&&(Z?($(I),I=-1):Z=!0,Te(mt,k-pt))):(N.sortIndex=St,d(v,N),W||X||(W=!0,jt||(jt=!0,Wt()))),N},f.unstable_shouldYield=he,f.unstable_wrapCallback=function(N){var B=H;return function(){var k=H;H=B;try{return N.apply(this,arguments)}finally{H=k}}}})(Dc)),Dc}var t0;function o1(){return t0||(t0=1,Cc.exports=d1()),Cc.exports}var Uc={exports:{}},Kt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0;function s1(){if(e0)return Kt;e0=1;var f=Yc();function d(v){var p="https://react.dev/errors/"+v;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)p+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+v+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var c={d:{f:o,r:function(){throw Error(d(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},h=Symbol.for("react.portal");function s(v,p,T){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:j==null?null:""+j,children:v,containerInfo:p,implementation:T}}var g=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function A(v,p){if(v==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Kt.createPortal=function(v,p){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(d(299));return s(v,p,null,T)},Kt.flushSync=function(v){var p=g.T,T=c.p;try{if(g.T=null,c.p=2,v)return v()}finally{g.T=p,c.p=T,c.d.f()}},Kt.preconnect=function(v,p){typeof v=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,c.d.C(v,p))},Kt.prefetchDNS=function(v){typeof v=="string"&&c.d.D(v)},Kt.preinit=function(v,p){if(typeof v=="string"&&p&&typeof p.as=="string"){var T=p.as,j=A(T,p.crossOrigin),H=typeof p.integrity=="string"?p.integrity:void 0,X=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;T==="style"?c.d.S(v,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:j,integrity:H,fetchPriority:X}):T==="script"&&c.d.X(v,{crossOrigin:j,integrity:H,fetchPriority:X,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Kt.preinitModule=function(v,p){if(typeof v=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var T=A(p.as,p.crossOrigin);c.d.M(v,{crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&c.d.M(v)},Kt.preload=function(v,p){if(typeof v=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var T=p.as,j=A(T,p.crossOrigin);c.d.L(v,T,{crossOrigin:j,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Kt.preloadModule=function(v,p){if(typeof v=="string")if(p){var T=A(p.as,p.crossOrigin);c.d.m(v,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else c.d.m(v)},Kt.requestFormReset=function(v){c.d.r(v)},Kt.unstable_batchedUpdates=function(v,p){return v(p)},Kt.useFormState=function(v,p,T){return g.H.useFormState(v,p,T)},Kt.useFormStatus=function(){return g.H.useHostTransitionStatus()},Kt.version="19.2.4",Kt}var l0;function h1(){if(l0)return Uc.exports;l0=1;function f(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)}catch(d){console.error(d)}}return f(),Uc.exports=s1(),Uc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0;function m1(){if(n0)return Ca;n0=1;var f=o1(),d=Yc(),o=h1();function c(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function s(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function g(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function A(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function v(t){if(s(t)!==t)throw Error(c(188))}function p(t){var e=t.alternate;if(!e){if(e=s(t),e===null)throw Error(c(188));return e!==t?null:t}for(var l=t,n=e;;){var a=l.return;if(a===null)break;var u=a.alternate;if(u===null){if(n=a.return,n!==null){l=n;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===l)return v(a),t;if(u===n)return v(a),e;u=u.sibling}throw Error(c(188))}if(l.return!==n.return)l=a,n=u;else{for(var i=!1,r=a.child;r;){if(r===l){i=!0,l=a,n=u;break}if(r===n){i=!0,n=a,l=u;break}r=r.sibling}if(!i){for(r=u.child;r;){if(r===l){i=!0,l=u,n=a;break}if(r===n){i=!0,n=u,l=a;break}r=r.sibling}if(!i)throw Error(c(189))}}if(l.alternate!==n)throw Error(c(190))}if(l.tag!==3)throw Error(c(188));return l.stateNode.current===l?t:e}function T(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=T(t),e!==null)return e;t=t.sibling}return null}var j=Object.assign,H=Symbol.for("react.element"),X=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),$=Symbol.for("react.consumer"),L=Symbol.for("react.context"),vt=Symbol.for("react.forward_ref"),mt=Symbol.for("react.suspense"),jt=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),Yt=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),Oe=Symbol.iterator;function Wt(t){return t===null||typeof t!="object"?null:(t=Oe&&t[Oe]||t["@@iterator"],typeof t=="function"?t:null)}var Ol=Symbol.for("react.client.reference");function Be(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ol?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Z:return"Fragment";case K:return"Profiler";case Y:return"StrictMode";case mt:return"Suspense";case jt:return"SuspenseList";case Yt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case W:return"Portal";case L:return t.displayName||"Context";case $:return(t._context.displayName||"Context")+".Consumer";case vt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return e=t.displayName||null,e!==null?e:Be(t.type)||"Memo";case Rt:e=t._payload,t=t._init;try{return Be(t(e))}catch{}}return null}var Te=Array.isArray,N=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},pt=[],St=-1;function y(t){return{current:t}}function U(t){0>St||(t.current=pt[St],pt[St]=null,St--)}function G(t,e){St++,pt[St]=t.current,t.current=e}var w=y(null),P=y(null),lt=y(null),ot=y(null);function Jt(t,e){switch(G(lt,e),G(P,t),G(w,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?ys(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=ys(e),t=vs(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}U(w),G(w,t)}function Ot(){U(w),U(P),U(lt)}function Ln(t){t.memoizedState!==null&&G(ot,t);var e=w.current,l=vs(e,t.type);e!==l&&(G(P,t),G(w,l))}function qa(t){P.current===t&&(U(w),U(P)),ot.current===t&&(U(ot),Aa._currentValue=k)}var di,Jc;function Nl(t){if(di===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);di=e&&e[1]||"",Jc=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+di+t+Jc}var oi=!1;function si(t,e){if(!t||oi)return"";oi=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(z){var E=z}Reflect.construct(t,[],D)}else{try{D.call()}catch(z){E=z}t.call(D.prototype)}}else{try{throw Error()}catch(z){E=z}(D=t())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(z){if(z&&E&&typeof z.stack=="string")return[z.stack,E.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=n.DetermineComponentFrameRoot(),i=u[0],r=u[1];if(i&&r){var m=i.split(`
`),x=r.split(`
`);for(a=n=0;n<m.length&&!m[n].includes("DetermineComponentFrameRoot");)n++;for(;a<x.length&&!x[a].includes("DetermineComponentFrameRoot");)a++;if(n===m.length||a===x.length)for(n=m.length-1,a=x.length-1;1<=n&&0<=a&&m[n]!==x[a];)a--;for(;1<=n&&0<=a;n--,a--)if(m[n]!==x[a]){if(n!==1||a!==1)do if(n--,a--,0>a||m[n]!==x[a]){var O=`
`+m[n].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=n&&0<=a);break}}}finally{oi=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Nl(l):""}function L0(t,e){switch(t.tag){case 26:case 27:case 5:return Nl(t.type);case 16:return Nl("Lazy");case 13:return t.child!==e&&e!==null?Nl("Suspense Fallback"):Nl("Suspense");case 19:return Nl("SuspenseList");case 0:case 15:return si(t.type,!1);case 11:return si(t.type.render,!1);case 1:return si(t.type,!0);case 31:return Nl("Activity");default:return""}}function kc(t){try{var e="",l=null;do e+=L0(t,l),l=t,t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var hi=Object.prototype.hasOwnProperty,mi=f.unstable_scheduleCallback,pi=f.unstable_cancelCallback,q0=f.unstable_shouldYield,Y0=f.unstable_requestPaint,ne=f.unstable_now,w0=f.unstable_getCurrentPriorityLevel,Wc=f.unstable_ImmediatePriority,$c=f.unstable_UserBlockingPriority,Ya=f.unstable_NormalPriority,X0=f.unstable_LowPriority,Fc=f.unstable_IdlePriority,Q0=f.log,Z0=f.unstable_setDisableYieldValue,qn=null,ae=null;function nl(t){if(typeof Q0=="function"&&Z0(t),ae&&typeof ae.setStrictMode=="function")try{ae.setStrictMode(qn,t)}catch{}}var ue=Math.clz32?Math.clz32:J0,V0=Math.log,K0=Math.LN2;function J0(t){return t>>>=0,t===0?32:31-(V0(t)/K0|0)|0}var wa=256,Xa=262144,Qa=4194304;function Cl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Za(t,e,l){var n=t.pendingLanes;if(n===0)return 0;var a=0,u=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var r=n&134217727;return r!==0?(n=r&~u,n!==0?a=Cl(n):(i&=r,i!==0?a=Cl(i):l||(l=r&~t,l!==0&&(a=Cl(l))))):(r=n&~u,r!==0?a=Cl(r):i!==0?a=Cl(i):l||(l=n&~t,l!==0&&(a=Cl(l)))),a===0?0:e!==0&&e!==a&&(e&u)===0&&(u=a&-a,l=e&-e,u>=l||u===32&&(l&4194048)!==0)?e:a}function Yn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function k0(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ic(){var t=Qa;return Qa<<=1,(Qa&62914560)===0&&(Qa=4194304),t}function bi(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function wn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function W0(t,e,l,n,a,u){var i=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var r=t.entanglements,m=t.expirationTimes,x=t.hiddenUpdates;for(l=i&~l;0<l;){var O=31-ue(l),D=1<<O;r[O]=0,m[O]=-1;var E=x[O];if(E!==null)for(x[O]=null,O=0;O<E.length;O++){var z=E[O];z!==null&&(z.lane&=-536870913)}l&=~D}n!==0&&Pc(t,n,0),u!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=u&~(i&~e))}function Pc(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-ue(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|l&261930}function tr(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var n=31-ue(l),a=1<<n;a&e|t[n]&e&&(t[n]|=e),l&=~a}}function er(t,e){var l=e&-e;return l=(l&42)!==0?1:gi(l),(l&(t.suspendedLanes|e))!==0?0:l}function gi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function yi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function lr(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:Xs(t.type))}function nr(t,e){var l=B.p;try{return B.p=t,e()}finally{B.p=l}}var al=Math.random().toString(36).slice(2),wt="__reactFiber$"+al,$t="__reactProps$"+al,Il="__reactContainer$"+al,vi="__reactEvents$"+al,$0="__reactListeners$"+al,F0="__reactHandles$"+al,ar="__reactResources$"+al,Xn="__reactMarker$"+al;function Si(t){delete t[wt],delete t[$t],delete t[vi],delete t[$0],delete t[F0]}function Pl(t){var e=t[wt];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Il]||l[wt]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=zs(t);t!==null;){if(l=t[wt])return l;t=zs(t)}return e}t=l,l=t.parentNode}return null}function tn(t){if(t=t[wt]||t[Il]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Qn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(c(33))}function en(t){var e=t[ar];return e||(e=t[ar]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Lt(t){t[Xn]=!0}var ur=new Set,ir={};function Dl(t,e){ln(t,e),ln(t+"Capture",e)}function ln(t,e){for(ir[t]=e,t=0;t<e.length;t++)ur.add(e[t])}var I0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fr={},cr={};function P0(t){return hi.call(cr,t)?!0:hi.call(fr,t)?!1:I0.test(t)?cr[t]=!0:(fr[t]=!0,!1)}function Va(t,e,l){if(P0(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Ka(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function Ge(t,e,l,n){if(n===null)t.removeAttribute(l);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+n)}}function me(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rr(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function t2(t,e,l){var n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,u=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(i){l=""+i,u.call(this,i)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _i(t){if(!t._valueTracker){var e=rr(t)?"checked":"value";t._valueTracker=t2(t,e,""+t[e])}}function dr(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),n="";return t&&(n=rr(t)?t.checked?"true":"false":t.value),t=n,t!==l?(e.setValue(t),!0):!1}function Ja(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var e2=/[\n"\\]/g;function pe(t){return t.replace(e2,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function xi(t,e,l,n,a,u,i,r){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),e!=null?i==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+me(e)):t.value!==""+me(e)&&(t.value=""+me(e)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),e!=null?Ei(t,i,me(e)):l!=null?Ei(t,i,me(l)):n!=null&&t.removeAttribute("value"),a==null&&u!=null&&(t.defaultChecked=!!u),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.name=""+me(r):t.removeAttribute("name")}function or(t,e,l,n,a,u,i,r){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){_i(t);return}l=l!=null?""+me(l):"",e=e!=null?""+me(e):l,r||e===t.value||(t.value=e),t.defaultValue=e}n=n??a,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=r?t.checked:!!n,t.defaultChecked=!!n,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i),_i(t)}function Ei(t,e,l){e==="number"&&Ja(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function nn(t,e,l,n){if(t=t.options,e){e={};for(var a=0;a<l.length;a++)e["$"+l[a]]=!0;for(l=0;l<t.length;l++)a=e.hasOwnProperty("$"+t[l].value),t[l].selected!==a&&(t[l].selected=a),a&&n&&(t[l].defaultSelected=!0)}else{for(l=""+me(l),e=null,a=0;a<t.length;a++){if(t[a].value===l){t[a].selected=!0,n&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function sr(t,e,l){if(e!=null&&(e=""+me(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+me(l):""}function hr(t,e,l,n){if(e==null){if(n!=null){if(l!=null)throw Error(c(92));if(Te(n)){if(1<n.length)throw Error(c(93));n=n[0]}l=n}l==null&&(l=""),e=l}l=me(e),t.defaultValue=l,n=t.textContent,n===l&&n!==""&&n!==null&&(t.value=n),_i(t)}function an(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var l2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mr(t,e,l){var n=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,l):typeof l!="number"||l===0||l2.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function pr(t,e,l){if(e!=null&&typeof e!="object")throw Error(c(62));if(t=t.style,l!=null){for(var n in l)!l.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var a in e)n=e[a],e.hasOwnProperty(a)&&l[a]!==n&&mr(t,a,n)}else for(var u in e)e.hasOwnProperty(u)&&mr(t,u,e[u])}function ji(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var n2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),a2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ka(t){return a2.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Le(){}var Ti=null;function zi(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var un=null,fn=null;function br(t){var e=tn(t);if(e&&(t=e.stateNode)){var l=t[$t]||null;t:switch(t=e.stateNode,e.type){case"input":if(xi(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+pe(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var n=l[e];if(n!==t&&n.form===t.form){var a=n[$t]||null;if(!a)throw Error(c(90));xi(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<l.length;e++)n=l[e],n.form===t.form&&dr(n)}break t;case"textarea":sr(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&nn(t,!!l.multiple,e,!1)}}}var Ai=!1;function gr(t,e,l){if(Ai)return t(e,l);Ai=!0;try{var n=t(e);return n}finally{if(Ai=!1,(un!==null||fn!==null)&&(Hu(),un&&(e=un,t=fn,fn=un=null,br(e),t)))for(e=0;e<t.length;e++)br(t[e])}}function Zn(t,e){var l=t.stateNode;if(l===null)return null;var n=l[$t]||null;if(n===null)return null;l=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(c(231,e,typeof l));return l}var qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mi=!1;if(qe)try{var Vn={};Object.defineProperty(Vn,"passive",{get:function(){Mi=!0}}),window.addEventListener("test",Vn,Vn),window.removeEventListener("test",Vn,Vn)}catch{Mi=!1}var ul=null,Ri=null,Wa=null;function yr(){if(Wa)return Wa;var t,e=Ri,l=e.length,n,a="value"in ul?ul.value:ul.textContent,u=a.length;for(t=0;t<l&&e[t]===a[t];t++);var i=l-t;for(n=1;n<=i&&e[l-n]===a[u-n];n++);return Wa=a.slice(t,1<n?1-n:void 0)}function $a(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fa(){return!0}function vr(){return!1}function Ft(t){function e(l,n,a,u,i){this._reactName=l,this._targetInst=a,this.type=n,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var r in t)t.hasOwnProperty(r)&&(l=t[r],this[r]=l?l(u):u[r]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Fa:vr,this.isPropagationStopped=vr,this}return j(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Fa)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Fa)},persist:function(){},isPersistent:Fa}),e}var Ul={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ia=Ft(Ul),Kn=j({},Ul,{view:0,detail:0}),u2=Ft(Kn),Oi,Ni,Jn,Pa=j({},Kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Di,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Jn&&(Jn&&t.type==="mousemove"?(Oi=t.screenX-Jn.screenX,Ni=t.screenY-Jn.screenY):Ni=Oi=0,Jn=t),Oi)},movementY:function(t){return"movementY"in t?t.movementY:Ni}}),Sr=Ft(Pa),i2=j({},Pa,{dataTransfer:0}),f2=Ft(i2),c2=j({},Kn,{relatedTarget:0}),Ci=Ft(c2),r2=j({},Ul,{animationName:0,elapsedTime:0,pseudoElement:0}),d2=Ft(r2),o2=j({},Ul,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),s2=Ft(o2),h2=j({},Ul,{data:0}),_r=Ft(h2),m2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},b2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=b2[t])?!!e[t]:!1}function Di(){return g2}var y2=j({},Kn,{key:function(t){if(t.key){var e=m2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$a(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?p2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Di,charCode:function(t){return t.type==="keypress"?$a(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$a(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),v2=Ft(y2),S2=j({},Pa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xr=Ft(S2),_2=j({},Kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Di}),x2=Ft(_2),E2=j({},Ul,{propertyName:0,elapsedTime:0,pseudoElement:0}),j2=Ft(E2),T2=j({},Pa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),z2=Ft(T2),A2=j({},Ul,{newState:0,oldState:0}),M2=Ft(A2),R2=[9,13,27,32],Ui=qe&&"CompositionEvent"in window,kn=null;qe&&"documentMode"in document&&(kn=document.documentMode);var O2=qe&&"TextEvent"in window&&!kn,Er=qe&&(!Ui||kn&&8<kn&&11>=kn),jr=" ",Tr=!1;function zr(t,e){switch(t){case"keyup":return R2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ar(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cn=!1;function N2(t,e){switch(t){case"compositionend":return Ar(e);case"keypress":return e.which!==32?null:(Tr=!0,jr);case"textInput":return t=e.data,t===jr&&Tr?null:t;default:return null}}function C2(t,e){if(cn)return t==="compositionend"||!Ui&&zr(t,e)?(t=yr(),Wa=Ri=ul=null,cn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Er&&e.locale!=="ko"?null:e.data;default:return null}}var D2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!D2[t.type]:e==="textarea"}function Rr(t,e,l,n){un?fn?fn.push(n):fn=[n]:un=n,e=Xu(e,"onChange"),0<e.length&&(l=new Ia("onChange","change",null,l,n),t.push({event:l,listeners:e}))}var Wn=null,$n=null;function U2(t){ss(t,0)}function tu(t){var e=Qn(t);if(dr(e))return t}function Or(t,e){if(t==="change")return e}var Nr=!1;if(qe){var Hi;if(qe){var Bi="oninput"in document;if(!Bi){var Cr=document.createElement("div");Cr.setAttribute("oninput","return;"),Bi=typeof Cr.oninput=="function"}Hi=Bi}else Hi=!1;Nr=Hi&&(!document.documentMode||9<document.documentMode)}function Dr(){Wn&&(Wn.detachEvent("onpropertychange",Ur),$n=Wn=null)}function Ur(t){if(t.propertyName==="value"&&tu($n)){var e=[];Rr(e,$n,t,zi(t)),gr(U2,e)}}function H2(t,e,l){t==="focusin"?(Dr(),Wn=e,$n=l,Wn.attachEvent("onpropertychange",Ur)):t==="focusout"&&Dr()}function B2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return tu($n)}function G2(t,e){if(t==="click")return tu(e)}function L2(t,e){if(t==="input"||t==="change")return tu(e)}function q2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ie=typeof Object.is=="function"?Object.is:q2;function Fn(t,e){if(ie(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),n=Object.keys(e);if(l.length!==n.length)return!1;for(n=0;n<l.length;n++){var a=l[n];if(!hi.call(e,a)||!ie(t[a],e[a]))return!1}return!0}function Hr(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Br(t,e){var l=Hr(t);t=0;for(var n;l;){if(l.nodeType===3){if(n=t+l.textContent.length,t<=e&&n>=e)return{node:l,offset:e-t};t=n}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=Hr(l)}}function Gr(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gr(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lr(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Ja(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Ja(t.document)}return e}function Gi(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Y2=qe&&"documentMode"in document&&11>=document.documentMode,rn=null,Li=null,In=null,qi=!1;function qr(t,e,l){var n=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;qi||rn==null||rn!==Ja(n)||(n=rn,"selectionStart"in n&&Gi(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),In&&Fn(In,n)||(In=n,n=Xu(Li,"onSelect"),0<n.length&&(e=new Ia("onSelect","select",null,e,l),t.push({event:e,listeners:n}),e.target=rn)))}function Hl(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var dn={animationend:Hl("Animation","AnimationEnd"),animationiteration:Hl("Animation","AnimationIteration"),animationstart:Hl("Animation","AnimationStart"),transitionrun:Hl("Transition","TransitionRun"),transitionstart:Hl("Transition","TransitionStart"),transitioncancel:Hl("Transition","TransitionCancel"),transitionend:Hl("Transition","TransitionEnd")},Yi={},Yr={};qe&&(Yr=document.createElement("div").style,"AnimationEvent"in window||(delete dn.animationend.animation,delete dn.animationiteration.animation,delete dn.animationstart.animation),"TransitionEvent"in window||delete dn.transitionend.transition);function Bl(t){if(Yi[t])return Yi[t];if(!dn[t])return t;var e=dn[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in Yr)return Yi[t]=e[l];return t}var wr=Bl("animationend"),Xr=Bl("animationiteration"),Qr=Bl("animationstart"),w2=Bl("transitionrun"),X2=Bl("transitionstart"),Q2=Bl("transitioncancel"),Zr=Bl("transitionend"),Vr=new Map,wi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wi.push("scrollEnd");function ze(t,e){Vr.set(t,e),Dl(e,[t])}var eu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},be=[],on=0,Xi=0;function lu(){for(var t=on,e=Xi=on=0;e<t;){var l=be[e];be[e++]=null;var n=be[e];be[e++]=null;var a=be[e];be[e++]=null;var u=be[e];if(be[e++]=null,n!==null&&a!==null){var i=n.pending;i===null?a.next=a:(a.next=i.next,i.next=a),n.pending=a}u!==0&&Kr(l,a,u)}}function nu(t,e,l,n){be[on++]=t,be[on++]=e,be[on++]=l,be[on++]=n,Xi|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function Qi(t,e,l,n){return nu(t,e,l,n),au(t)}function Gl(t,e){return nu(t,null,null,e),au(t)}function Kr(t,e,l){t.lanes|=l;var n=t.alternate;n!==null&&(n.lanes|=l);for(var a=!1,u=t.return;u!==null;)u.childLanes|=l,n=u.alternate,n!==null&&(n.childLanes|=l),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(a=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,a&&e!==null&&(a=31-ue(l),t=u.hiddenUpdates,n=t[a],n===null?t[a]=[e]:n.push(e),e.lane=l|536870912),u):null}function au(t){if(50<Sa)throw Sa=0,Pf=null,Error(c(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var sn={};function Z2(t,e,l,n){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fe(t,e,l,n){return new Z2(t,e,l,n)}function Zi(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ye(t,e){var l=t.alternate;return l===null?(l=fe(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function Jr(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function uu(t,e,l,n,a,u){var i=0;if(n=t,typeof t=="function")Zi(t)&&(i=1);else if(typeof t=="string")i=Wh(t,l,w.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Yt:return t=fe(31,l,e,a),t.elementType=Yt,t.lanes=u,t;case Z:return Ll(l.children,a,u,e);case Y:i=8,a|=24;break;case K:return t=fe(12,l,e,a|2),t.elementType=K,t.lanes=u,t;case mt:return t=fe(13,l,e,a),t.elementType=mt,t.lanes=u,t;case jt:return t=fe(19,l,e,a),t.elementType=jt,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:i=10;break t;case $:i=9;break t;case vt:i=11;break t;case I:i=14;break t;case Rt:i=16,n=null;break t}i=29,l=Error(c(130,t===null?"null":typeof t,"")),n=null}return e=fe(i,l,e,a),e.elementType=t,e.type=n,e.lanes=u,e}function Ll(t,e,l,n){return t=fe(7,t,n,e),t.lanes=l,t}function Vi(t,e,l){return t=fe(6,t,null,e),t.lanes=l,t}function kr(t){var e=fe(18,null,null,0);return e.stateNode=t,e}function Ki(t,e,l){return e=fe(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Wr=new WeakMap;function ge(t,e){if(typeof t=="object"&&t!==null){var l=Wr.get(t);return l!==void 0?l:(e={value:t,source:e,stack:kc(e)},Wr.set(t,e),e)}return{value:t,source:e,stack:kc(e)}}var hn=[],mn=0,iu=null,Pn=0,ye=[],ve=0,il=null,Ne=1,Ce="";function we(t,e){hn[mn++]=Pn,hn[mn++]=iu,iu=t,Pn=e}function $r(t,e,l){ye[ve++]=Ne,ye[ve++]=Ce,ye[ve++]=il,il=t;var n=Ne;t=Ce;var a=32-ue(n)-1;n&=~(1<<a),l+=1;var u=32-ue(e)+a;if(30<u){var i=a-a%5;u=(n&(1<<i)-1).toString(32),n>>=i,a-=i,Ne=1<<32-ue(e)+a|l<<a|n,Ce=u+t}else Ne=1<<u|l<<a|n,Ce=t}function Ji(t){t.return!==null&&(we(t,1),$r(t,1,0))}function ki(t){for(;t===iu;)iu=hn[--mn],hn[mn]=null,Pn=hn[--mn],hn[mn]=null;for(;t===il;)il=ye[--ve],ye[ve]=null,Ce=ye[--ve],ye[ve]=null,Ne=ye[--ve],ye[ve]=null}function Fr(t,e){ye[ve++]=Ne,ye[ve++]=Ce,ye[ve++]=il,Ne=e.id,Ce=e.overflow,il=t}var Xt=null,xt=null,ft=!1,fl=null,Se=!1,Wi=Error(c(519));function cl(t){var e=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ta(ge(e,t)),Wi}function Ir(t){var e=t.stateNode,l=t.type,n=t.memoizedProps;switch(e[wt]=t,e[$t]=n,l){case"dialog":at("cancel",e),at("close",e);break;case"iframe":case"object":case"embed":at("load",e);break;case"video":case"audio":for(l=0;l<xa.length;l++)at(xa[l],e);break;case"source":at("error",e);break;case"img":case"image":case"link":at("error",e),at("load",e);break;case"details":at("toggle",e);break;case"input":at("invalid",e),or(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":at("invalid",e);break;case"textarea":at("invalid",e),hr(e,n.value,n.defaultValue,n.children)}l=n.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||n.suppressHydrationWarning===!0||bs(e.textContent,l)?(n.popover!=null&&(at("beforetoggle",e),at("toggle",e)),n.onScroll!=null&&at("scroll",e),n.onScrollEnd!=null&&at("scrollend",e),n.onClick!=null&&(e.onclick=Le),e=!0):e=!1,e||cl(t,!0)}function Pr(t){for(Xt=t.return;Xt;)switch(Xt.tag){case 5:case 31:case 13:Se=!1;return;case 27:case 3:Se=!0;return;default:Xt=Xt.return}}function pn(t){if(t!==Xt)return!1;if(!ft)return Pr(t),ft=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||mc(t.type,t.memoizedProps)),l=!l),l&&xt&&cl(t),Pr(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(317));xt=Ts(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(317));xt=Ts(t)}else e===27?(e=xt,xl(t.type)?(t=vc,vc=null,xt=t):xt=e):xt=Xt?xe(t.stateNode.nextSibling):null;return!0}function ql(){xt=Xt=null,ft=!1}function $i(){var t=fl;return t!==null&&(ee===null?ee=t:ee.push.apply(ee,t),fl=null),t}function ta(t){fl===null?fl=[t]:fl.push(t)}var Fi=y(null),Yl=null,Xe=null;function rl(t,e,l){G(Fi,e._currentValue),e._currentValue=l}function Qe(t){t._currentValue=Fi.current,U(Fi)}function Ii(t,e,l){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===l)break;t=t.return}}function Pi(t,e,l,n){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){var i=a.child;u=u.firstContext;t:for(;u!==null;){var r=u;u=a;for(var m=0;m<e.length;m++)if(r.context===e[m]){u.lanes|=l,r=u.alternate,r!==null&&(r.lanes|=l),Ii(u.return,l,t),n||(i=null);break t}u=r.next}}else if(a.tag===18){if(i=a.return,i===null)throw Error(c(341));i.lanes|=l,u=i.alternate,u!==null&&(u.lanes|=l),Ii(i,l,t),i=null}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}}function bn(t,e,l,n){t=null;for(var a=e,u=!1;a!==null;){if(!u){if((a.flags&524288)!==0)u=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var i=a.alternate;if(i===null)throw Error(c(387));if(i=i.memoizedProps,i!==null){var r=a.type;ie(a.pendingProps.value,i.value)||(t!==null?t.push(r):t=[r])}}else if(a===ot.current){if(i=a.alternate,i===null)throw Error(c(387));i.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(Aa):t=[Aa])}a=a.return}t!==null&&Pi(e,t,l,n),e.flags|=262144}function fu(t){for(t=t.firstContext;t!==null;){if(!ie(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function wl(t){Yl=t,Xe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Qt(t){return td(Yl,t)}function cu(t,e){return Yl===null&&wl(t),td(t,e)}function td(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},Xe===null){if(t===null)throw Error(c(308));Xe=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Xe=Xe.next=e;return l}var V2=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},K2=f.unstable_scheduleCallback,J2=f.unstable_NormalPriority,Dt={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tf(){return{controller:new V2,data:new Map,refCount:0}}function ea(t){t.refCount--,t.refCount===0&&K2(J2,function(){t.controller.abort()})}var la=null,ef=0,gn=0,yn=null;function k2(t,e){if(la===null){var l=la=[];ef=0,gn=uc(),yn={status:"pending",value:void 0,then:function(n){l.push(n)}}}return ef++,e.then(ed,ed),e}function ed(){if(--ef===0&&la!==null){yn!==null&&(yn.status="fulfilled");var t=la;la=null,gn=0,yn=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function W2(t,e){var l=[],n={status:"pending",value:null,reason:null,then:function(a){l.push(a)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var a=0;a<l.length;a++)(0,l[a])(e)},function(a){for(n.status="rejected",n.reason=a,a=0;a<l.length;a++)(0,l[a])(void 0)}),n}var ld=N.S;N.S=function(t,e){Yo=ne(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&k2(t,e),ld!==null&&ld(t,e)};var Xl=y(null);function lf(){var t=Xl.current;return t!==null?t:_t.pooledCache}function ru(t,e){e===null?G(Xl,Xl.current):G(Xl,e.pool)}function nd(){var t=lf();return t===null?null:{parent:Dt._currentValue,pool:t}}var vn=Error(c(460)),nf=Error(c(474)),du=Error(c(542)),ou={then:function(){}};function ad(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ud(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(Le,Le),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,fd(t),t;default:if(typeof e.status=="string")e.then(Le,Le);else{if(t=_t,t!==null&&100<t.shellSuspendCounter)throw Error(c(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=n}},function(n){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,fd(t),t}throw Zl=e,vn}}function Ql(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Zl=l,vn):l}}var Zl=null;function id(){if(Zl===null)throw Error(c(459));var t=Zl;return Zl=null,t}function fd(t){if(t===vn||t===du)throw Error(c(483))}var Sn=null,na=0;function su(t){var e=na;return na+=1,Sn===null&&(Sn=[]),ud(Sn,t,e)}function aa(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function hu(t,e){throw e.$$typeof===H?Error(c(525)):(t=Object.prototype.toString.call(e),Error(c(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function cd(t){function e(S,b){if(t){var _=S.deletions;_===null?(S.deletions=[b],S.flags|=16):_.push(b)}}function l(S,b){if(!t)return null;for(;b!==null;)e(S,b),b=b.sibling;return null}function n(S){for(var b=new Map;S!==null;)S.key!==null?b.set(S.key,S):b.set(S.index,S),S=S.sibling;return b}function a(S,b){return S=Ye(S,b),S.index=0,S.sibling=null,S}function u(S,b,_){return S.index=_,t?(_=S.alternate,_!==null?(_=_.index,_<b?(S.flags|=67108866,b):_):(S.flags|=67108866,b)):(S.flags|=1048576,b)}function i(S){return t&&S.alternate===null&&(S.flags|=67108866),S}function r(S,b,_,C){return b===null||b.tag!==6?(b=Vi(_,S.mode,C),b.return=S,b):(b=a(b,_),b.return=S,b)}function m(S,b,_,C){var V=_.type;return V===Z?O(S,b,_.props.children,C,_.key):b!==null&&(b.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Rt&&Ql(V)===b.type)?(b=a(b,_.props),aa(b,_),b.return=S,b):(b=uu(_.type,_.key,_.props,null,S.mode,C),aa(b,_),b.return=S,b)}function x(S,b,_,C){return b===null||b.tag!==4||b.stateNode.containerInfo!==_.containerInfo||b.stateNode.implementation!==_.implementation?(b=Ki(_,S.mode,C),b.return=S,b):(b=a(b,_.children||[]),b.return=S,b)}function O(S,b,_,C,V){return b===null||b.tag!==7?(b=Ll(_,S.mode,C,V),b.return=S,b):(b=a(b,_),b.return=S,b)}function D(S,b,_){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=Vi(""+b,S.mode,_),b.return=S,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case X:return _=uu(b.type,b.key,b.props,null,S.mode,_),aa(_,b),_.return=S,_;case W:return b=Ki(b,S.mode,_),b.return=S,b;case Rt:return b=Ql(b),D(S,b,_)}if(Te(b)||Wt(b))return b=Ll(b,S.mode,_,null),b.return=S,b;if(typeof b.then=="function")return D(S,su(b),_);if(b.$$typeof===L)return D(S,cu(S,b),_);hu(S,b)}return null}function E(S,b,_,C){var V=b!==null?b.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return V!==null?null:r(S,b,""+_,C);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case X:return _.key===V?m(S,b,_,C):null;case W:return _.key===V?x(S,b,_,C):null;case Rt:return _=Ql(_),E(S,b,_,C)}if(Te(_)||Wt(_))return V!==null?null:O(S,b,_,C,null);if(typeof _.then=="function")return E(S,b,su(_),C);if(_.$$typeof===L)return E(S,b,cu(S,_),C);hu(S,_)}return null}function z(S,b,_,C,V){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return S=S.get(_)||null,r(b,S,""+C,V);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case X:return S=S.get(C.key===null?_:C.key)||null,m(b,S,C,V);case W:return S=S.get(C.key===null?_:C.key)||null,x(b,S,C,V);case Rt:return C=Ql(C),z(S,b,_,C,V)}if(Te(C)||Wt(C))return S=S.get(_)||null,O(b,S,C,V,null);if(typeof C.then=="function")return z(S,b,_,su(C),V);if(C.$$typeof===L)return z(S,b,_,cu(b,C),V);hu(b,C)}return null}function q(S,b,_,C){for(var V=null,ct=null,Q=b,et=b=0,it=null;Q!==null&&et<_.length;et++){Q.index>et?(it=Q,Q=null):it=Q.sibling;var rt=E(S,Q,_[et],C);if(rt===null){Q===null&&(Q=it);break}t&&Q&&rt.alternate===null&&e(S,Q),b=u(rt,b,et),ct===null?V=rt:ct.sibling=rt,ct=rt,Q=it}if(et===_.length)return l(S,Q),ft&&we(S,et),V;if(Q===null){for(;et<_.length;et++)Q=D(S,_[et],C),Q!==null&&(b=u(Q,b,et),ct===null?V=Q:ct.sibling=Q,ct=Q);return ft&&we(S,et),V}for(Q=n(Q);et<_.length;et++)it=z(Q,S,et,_[et],C),it!==null&&(t&&it.alternate!==null&&Q.delete(it.key===null?et:it.key),b=u(it,b,et),ct===null?V=it:ct.sibling=it,ct=it);return t&&Q.forEach(function(Al){return e(S,Al)}),ft&&we(S,et),V}function J(S,b,_,C){if(_==null)throw Error(c(151));for(var V=null,ct=null,Q=b,et=b=0,it=null,rt=_.next();Q!==null&&!rt.done;et++,rt=_.next()){Q.index>et?(it=Q,Q=null):it=Q.sibling;var Al=E(S,Q,rt.value,C);if(Al===null){Q===null&&(Q=it);break}t&&Q&&Al.alternate===null&&e(S,Q),b=u(Al,b,et),ct===null?V=Al:ct.sibling=Al,ct=Al,Q=it}if(rt.done)return l(S,Q),ft&&we(S,et),V;if(Q===null){for(;!rt.done;et++,rt=_.next())rt=D(S,rt.value,C),rt!==null&&(b=u(rt,b,et),ct===null?V=rt:ct.sibling=rt,ct=rt);return ft&&we(S,et),V}for(Q=n(Q);!rt.done;et++,rt=_.next())rt=z(Q,S,et,rt.value,C),rt!==null&&(t&&rt.alternate!==null&&Q.delete(rt.key===null?et:rt.key),b=u(rt,b,et),ct===null?V=rt:ct.sibling=rt,ct=rt);return t&&Q.forEach(function(i1){return e(S,i1)}),ft&&we(S,et),V}function yt(S,b,_,C){if(typeof _=="object"&&_!==null&&_.type===Z&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case X:t:{for(var V=_.key;b!==null;){if(b.key===V){if(V=_.type,V===Z){if(b.tag===7){l(S,b.sibling),C=a(b,_.props.children),C.return=S,S=C;break t}}else if(b.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Rt&&Ql(V)===b.type){l(S,b.sibling),C=a(b,_.props),aa(C,_),C.return=S,S=C;break t}l(S,b);break}else e(S,b);b=b.sibling}_.type===Z?(C=Ll(_.props.children,S.mode,C,_.key),C.return=S,S=C):(C=uu(_.type,_.key,_.props,null,S.mode,C),aa(C,_),C.return=S,S=C)}return i(S);case W:t:{for(V=_.key;b!==null;){if(b.key===V)if(b.tag===4&&b.stateNode.containerInfo===_.containerInfo&&b.stateNode.implementation===_.implementation){l(S,b.sibling),C=a(b,_.children||[]),C.return=S,S=C;break t}else{l(S,b);break}else e(S,b);b=b.sibling}C=Ki(_,S.mode,C),C.return=S,S=C}return i(S);case Rt:return _=Ql(_),yt(S,b,_,C)}if(Te(_))return q(S,b,_,C);if(Wt(_)){if(V=Wt(_),typeof V!="function")throw Error(c(150));return _=V.call(_),J(S,b,_,C)}if(typeof _.then=="function")return yt(S,b,su(_),C);if(_.$$typeof===L)return yt(S,b,cu(S,_),C);hu(S,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,b!==null&&b.tag===6?(l(S,b.sibling),C=a(b,_),C.return=S,S=C):(l(S,b),C=Vi(_,S.mode,C),C.return=S,S=C),i(S)):l(S,b)}return function(S,b,_,C){try{na=0;var V=yt(S,b,_,C);return Sn=null,V}catch(Q){if(Q===vn||Q===du)throw Q;var ct=fe(29,Q,null,S.mode);return ct.lanes=C,ct.return=S,ct}finally{}}}var Vl=cd(!0),rd=cd(!1),dl=!1;function af(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ol(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function sl(t,e,l){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(dt&2)!==0){var a=n.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),n.pending=e,e=au(t),Kr(t,null,l),e}return nu(t,n,e,l),au(t)}function ua(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,l|=n,e.lanes=l,tr(t,l)}}function ff(t,e){var l=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,l===n)){var a=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var i={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?a=u=i:u=u.next=i,l=l.next}while(l!==null);u===null?a=u=e:u=u.next=e}else a=u=e;l={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:n.shared,callbacks:n.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var cf=!1;function ia(){if(cf){var t=yn;if(t!==null)throw t}}function fa(t,e,l,n){cf=!1;var a=t.updateQueue;dl=!1;var u=a.firstBaseUpdate,i=a.lastBaseUpdate,r=a.shared.pending;if(r!==null){a.shared.pending=null;var m=r,x=m.next;m.next=null,i===null?u=x:i.next=x,i=m;var O=t.alternate;O!==null&&(O=O.updateQueue,r=O.lastBaseUpdate,r!==i&&(r===null?O.firstBaseUpdate=x:r.next=x,O.lastBaseUpdate=m))}if(u!==null){var D=a.baseState;i=0,O=x=m=null,r=u;do{var E=r.lane&-536870913,z=E!==r.lane;if(z?(ut&E)===E:(n&E)===E){E!==0&&E===gn&&(cf=!0),O!==null&&(O=O.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});t:{var q=t,J=r;E=e;var yt=l;switch(J.tag){case 1:if(q=J.payload,typeof q=="function"){D=q.call(yt,D,E);break t}D=q;break t;case 3:q.flags=q.flags&-65537|128;case 0:if(q=J.payload,E=typeof q=="function"?q.call(yt,D,E):q,E==null)break t;D=j({},D,E);break t;case 2:dl=!0}}E=r.callback,E!==null&&(t.flags|=64,z&&(t.flags|=8192),z=a.callbacks,z===null?a.callbacks=[E]:z.push(E))}else z={lane:E,tag:r.tag,payload:r.payload,callback:r.callback,next:null},O===null?(x=O=z,m=D):O=O.next=z,i|=E;if(r=r.next,r===null){if(r=a.shared.pending,r===null)break;z=r,r=z.next,z.next=null,a.lastBaseUpdate=z,a.shared.pending=null}}while(!0);O===null&&(m=D),a.baseState=m,a.firstBaseUpdate=x,a.lastBaseUpdate=O,u===null&&(a.shared.lanes=0),gl|=i,t.lanes=i,t.memoizedState=D}}function dd(t,e){if(typeof t!="function")throw Error(c(191,t));t.call(e)}function od(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)dd(l[t],e)}var _n=y(null),mu=y(0);function sd(t,e){t=Ie,G(mu,t),G(_n,e),Ie=t|e.baseLanes}function rf(){G(mu,Ie),G(_n,_n.current)}function df(){Ie=mu.current,U(_n),U(mu)}var ce=y(null),_e=null;function hl(t){var e=t.alternate;G(Nt,Nt.current&1),G(ce,t),_e===null&&(e===null||_n.current!==null||e.memoizedState!==null)&&(_e=t)}function of(t){G(Nt,Nt.current),G(ce,t),_e===null&&(_e=t)}function hd(t){t.tag===22?(G(Nt,Nt.current),G(ce,t),_e===null&&(_e=t)):ml()}function ml(){G(Nt,Nt.current),G(ce,ce.current)}function re(t){U(ce),_e===t&&(_e=null),U(Nt)}var Nt=y(0);function pu(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||gc(l)||yc(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ze=0,tt=null,bt=null,Ut=null,bu=!1,xn=!1,Kl=!1,gu=0,ca=0,En=null,$2=0;function At(){throw Error(c(321))}function sf(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!ie(t[l],e[l]))return!1;return!0}function hf(t,e,l,n,a,u){return Ze=u,tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,N.H=t===null||t.memoizedState===null?$d:Mf,Kl=!1,u=l(n,a),Kl=!1,xn&&(u=pd(e,l,n,a)),md(t),u}function md(t){N.H=oa;var e=bt!==null&&bt.next!==null;if(Ze=0,Ut=bt=tt=null,bu=!1,ca=0,En=null,e)throw Error(c(300));t===null||Ht||(t=t.dependencies,t!==null&&fu(t)&&(Ht=!0))}function pd(t,e,l,n){tt=t;var a=0;do{if(xn&&(En=null),ca=0,xn=!1,25<=a)throw Error(c(301));if(a+=1,Ut=bt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}N.H=Fd,u=e(l,n)}while(xn);return u}function F2(){var t=N.H,e=t.useState()[0];return e=typeof e.then=="function"?ra(e):e,t=t.useState()[0],(bt!==null?bt.memoizedState:null)!==t&&(tt.flags|=1024),e}function mf(){var t=gu!==0;return gu=0,t}function pf(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function bf(t){if(bu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}bu=!1}Ze=0,Ut=bt=tt=null,xn=!1,ca=gu=0,En=null}function kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?tt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Ct(){if(bt===null){var t=tt.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Ut===null?tt.memoizedState:Ut.next;if(e!==null)Ut=e,bt=t;else{if(t===null)throw tt.alternate===null?Error(c(467)):Error(c(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Ut===null?tt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function yu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ra(t){var e=ca;return ca+=1,En===null&&(En=[]),t=ud(En,t,e),e=tt,(Ut===null?e.memoizedState:Ut.next)===null&&(e=e.alternate,N.H=e===null||e.memoizedState===null?$d:Mf),t}function vu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ra(t);if(t.$$typeof===L)return Qt(t)}throw Error(c(438,String(t)))}function gf(t){var e=null,l=tt.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var n=tt.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=yu(),tt.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),n=0;n<t;n++)l[n]=he;return e.index++,l}function Ve(t,e){return typeof e=="function"?e(t):e}function Su(t){var e=Ct();return yf(e,bt,t)}function yf(t,e,l){var n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=l;var a=t.baseQueue,u=n.pending;if(u!==null){if(a!==null){var i=a.next;a.next=u.next,u.next=i}e.baseQueue=a=u,n.pending=null}if(u=t.baseState,a===null)t.memoizedState=u;else{e=a.next;var r=i=null,m=null,x=e,O=!1;do{var D=x.lane&-536870913;if(D!==x.lane?(ut&D)===D:(Ze&D)===D){var E=x.revertLane;if(E===0)m!==null&&(m=m.next={lane:0,revertLane:0,gesture:null,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),D===gn&&(O=!0);else if((Ze&E)===E){x=x.next,E===gn&&(O=!0);continue}else D={lane:0,revertLane:x.revertLane,gesture:null,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},m===null?(r=m=D,i=u):m=m.next=D,tt.lanes|=E,gl|=E;D=x.action,Kl&&l(u,D),u=x.hasEagerState?x.eagerState:l(u,D)}else E={lane:D,revertLane:x.revertLane,gesture:x.gesture,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},m===null?(r=m=E,i=u):m=m.next=E,tt.lanes|=D,gl|=D;x=x.next}while(x!==null&&x!==e);if(m===null?i=u:m.next=r,!ie(u,t.memoizedState)&&(Ht=!0,O&&(l=yn,l!==null)))throw l;t.memoizedState=u,t.baseState=i,t.baseQueue=m,n.lastRenderedState=u}return a===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function vf(t){var e=Ct(),l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=t;var n=l.dispatch,a=l.pending,u=e.memoizedState;if(a!==null){l.pending=null;var i=a=a.next;do u=t(u,i.action),i=i.next;while(i!==a);ie(u,e.memoizedState)||(Ht=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),l.lastRenderedState=u}return[u,n]}function bd(t,e,l){var n=tt,a=Ct(),u=ft;if(u){if(l===void 0)throw Error(c(407));l=l()}else l=e();var i=!ie((bt||a).memoizedState,l);if(i&&(a.memoizedState=l,Ht=!0),a=a.queue,xf(vd.bind(null,n,a,t),[t]),a.getSnapshot!==e||i||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,jn(9,{destroy:void 0},yd.bind(null,n,a,l,e),null),_t===null)throw Error(c(349));u||(Ze&127)!==0||gd(n,e,l)}return l}function gd(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=tt.updateQueue,e===null?(e=yu(),tt.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function yd(t,e,l,n){e.value=l,e.getSnapshot=n,Sd(e)&&_d(t)}function vd(t,e,l){return l(function(){Sd(e)&&_d(t)})}function Sd(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!ie(t,l)}catch{return!0}}function _d(t){var e=Gl(t,2);e!==null&&le(e,t,2)}function Sf(t){var e=kt();if(typeof t=="function"){var l=t;if(t=l(),Kl){nl(!0);try{l()}finally{nl(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ve,lastRenderedState:t},e}function xd(t,e,l,n){return t.baseState=l,yf(t,bt,typeof n=="function"?n:Ve)}function I2(t,e,l,n,a){if(Eu(t))throw Error(c(485));if(t=e.action,t!==null){var u={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};N.T!==null?l(!0):u.isTransition=!1,n(u),l=e.pending,l===null?(u.next=e.pending=u,Ed(e,u)):(u.next=l.next,e.pending=l.next=u)}}function Ed(t,e){var l=e.action,n=e.payload,a=t.state;if(e.isTransition){var u=N.T,i={};N.T=i;try{var r=l(a,n),m=N.S;m!==null&&m(i,r),jd(t,e,r)}catch(x){_f(t,e,x)}finally{u!==null&&i.types!==null&&(u.types=i.types),N.T=u}}else try{u=l(a,n),jd(t,e,u)}catch(x){_f(t,e,x)}}function jd(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(n){Td(t,e,n)},function(n){return _f(t,e,n)}):Td(t,e,l)}function Td(t,e,l){e.status="fulfilled",e.value=l,zd(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Ed(t,l)))}function _f(t,e,l){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=l,zd(e),e=e.next;while(e!==n)}t.action=null}function zd(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Ad(t,e){return e}function Md(t,e){if(ft){var l=_t.formState;if(l!==null){t:{var n=tt;if(ft){if(xt){e:{for(var a=xt,u=Se;a.nodeType!==8;){if(!u){a=null;break e}if(a=xe(a.nextSibling),a===null){a=null;break e}}u=a.data,a=u==="F!"||u==="F"?a:null}if(a){xt=xe(a.nextSibling),n=a.data==="F!";break t}}cl(n)}n=!1}n&&(e=l[0])}}return l=kt(),l.memoizedState=l.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ad,lastRenderedState:e},l.queue=n,l=Jd.bind(null,tt,n),n.dispatch=l,n=Sf(!1),u=Af.bind(null,tt,!1,n.queue),n=kt(),a={state:e,dispatch:null,action:t,pending:null},n.queue=a,l=I2.bind(null,tt,a,u,l),a.dispatch=l,n.memoizedState=t,[e,l,!1]}function Rd(t){var e=Ct();return Od(e,bt,t)}function Od(t,e,l){if(e=yf(t,e,Ad)[0],t=Su(Ve)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=ra(e)}catch(i){throw i===vn?du:i}else n=e;e=Ct();var a=e.queue,u=a.dispatch;return l!==e.memoizedState&&(tt.flags|=2048,jn(9,{destroy:void 0},P2.bind(null,a,l),null)),[n,u,t]}function P2(t,e){t.action=e}function Nd(t){var e=Ct(),l=bt;if(l!==null)return Od(e,l,t);Ct(),e=e.memoizedState,l=Ct();var n=l.queue.dispatch;return l.memoizedState=t,[e,n,!1]}function jn(t,e,l,n){return t={tag:t,create:l,deps:n,inst:e,next:null},e=tt.updateQueue,e===null&&(e=yu(),tt.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(n=l.next,l.next=t,t.next=n,e.lastEffect=t),t}function Cd(){return Ct().memoizedState}function _u(t,e,l,n){var a=kt();tt.flags|=t,a.memoizedState=jn(1|e,{destroy:void 0},l,n===void 0?null:n)}function xu(t,e,l,n){var a=Ct();n=n===void 0?null:n;var u=a.memoizedState.inst;bt!==null&&n!==null&&sf(n,bt.memoizedState.deps)?a.memoizedState=jn(e,u,l,n):(tt.flags|=t,a.memoizedState=jn(1|e,u,l,n))}function Dd(t,e){_u(8390656,8,t,e)}function xf(t,e){xu(2048,8,t,e)}function th(t){tt.flags|=4;var e=tt.updateQueue;if(e===null)e=yu(),tt.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function Ud(t){var e=Ct().memoizedState;return th({ref:e,nextImpl:t}),function(){if((dt&2)!==0)throw Error(c(440));return e.impl.apply(void 0,arguments)}}function Hd(t,e){return xu(4,2,t,e)}function Bd(t,e){return xu(4,4,t,e)}function Gd(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ld(t,e,l){l=l!=null?l.concat([t]):null,xu(4,4,Gd.bind(null,e,t),l)}function Ef(){}function qd(t,e){var l=Ct();e=e===void 0?null:e;var n=l.memoizedState;return e!==null&&sf(e,n[1])?n[0]:(l.memoizedState=[t,e],t)}function Yd(t,e){var l=Ct();e=e===void 0?null:e;var n=l.memoizedState;if(e!==null&&sf(e,n[1]))return n[0];if(n=t(),Kl){nl(!0);try{t()}finally{nl(!1)}}return l.memoizedState=[n,e],n}function jf(t,e,l){return l===void 0||(Ze&1073741824)!==0&&(ut&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=Xo(),tt.lanes|=t,gl|=t,l)}function wd(t,e,l,n){return ie(l,e)?l:_n.current!==null?(t=jf(t,l,n),ie(t,e)||(Ht=!0),t):(Ze&42)===0||(Ze&1073741824)!==0&&(ut&261930)===0?(Ht=!0,t.memoizedState=l):(t=Xo(),tt.lanes|=t,gl|=t,e)}function Xd(t,e,l,n,a){var u=B.p;B.p=u!==0&&8>u?u:8;var i=N.T,r={};N.T=r,Af(t,!1,e,l);try{var m=a(),x=N.S;if(x!==null&&x(r,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var O=W2(m,n);da(t,e,O,se(t))}else da(t,e,n,se(t))}catch(D){da(t,e,{then:function(){},status:"rejected",reason:D},se())}finally{B.p=u,i!==null&&r.types!==null&&(i.types=r.types),N.T=i}}function eh(){}function Tf(t,e,l,n){if(t.tag!==5)throw Error(c(476));var a=Qd(t).queue;Xd(t,a,e,k,l===null?eh:function(){return Zd(t),l(n)})}function Qd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ve,lastRenderedState:k},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ve,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Zd(t){var e=Qd(t);e.next===null&&(e=t.alternate.memoizedState),da(t,e.next.queue,{},se())}function zf(){return Qt(Aa)}function Vd(){return Ct().memoizedState}function Kd(){return Ct().memoizedState}function lh(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=se();t=ol(l);var n=sl(e,t,l);n!==null&&(le(n,e,l),ua(n,e,l)),e={cache:tf()},t.payload=e;return}e=e.return}}function nh(t,e,l){var n=se();l={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Eu(t)?kd(e,l):(l=Qi(t,e,l,n),l!==null&&(le(l,t,n),Wd(l,e,n)))}function Jd(t,e,l){var n=se();da(t,e,l,n)}function da(t,e,l,n){var a={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Eu(t))kd(e,a);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var i=e.lastRenderedState,r=u(i,l);if(a.hasEagerState=!0,a.eagerState=r,ie(r,i))return nu(t,e,a,0),_t===null&&lu(),!1}catch{}finally{}if(l=Qi(t,e,a,n),l!==null)return le(l,t,n),Wd(l,e,n),!0}return!1}function Af(t,e,l,n){if(n={lane:2,revertLane:uc(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Eu(t)){if(e)throw Error(c(479))}else e=Qi(t,l,n,2),e!==null&&le(e,t,2)}function Eu(t){var e=t.alternate;return t===tt||e!==null&&e===tt}function kd(t,e){xn=bu=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function Wd(t,e,l){if((l&4194048)!==0){var n=e.lanes;n&=t.pendingLanes,l|=n,e.lanes=l,tr(t,l)}}var oa={readContext:Qt,use:vu,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useLayoutEffect:At,useInsertionEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useSyncExternalStore:At,useId:At,useHostTransitionStatus:At,useFormState:At,useActionState:At,useOptimistic:At,useMemoCache:At,useCacheRefresh:At};oa.useEffectEvent=At;var $d={readContext:Qt,use:vu,useCallback:function(t,e){return kt().memoizedState=[t,e===void 0?null:e],t},useContext:Qt,useEffect:Dd,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,_u(4194308,4,Gd.bind(null,e,t),l)},useLayoutEffect:function(t,e){return _u(4194308,4,t,e)},useInsertionEffect:function(t,e){_u(4,2,t,e)},useMemo:function(t,e){var l=kt();e=e===void 0?null:e;var n=t();if(Kl){nl(!0);try{t()}finally{nl(!1)}}return l.memoizedState=[n,e],n},useReducer:function(t,e,l){var n=kt();if(l!==void 0){var a=l(e);if(Kl){nl(!0);try{l(e)}finally{nl(!1)}}}else a=e;return n.memoizedState=n.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},n.queue=t,t=t.dispatch=nh.bind(null,tt,t),[n.memoizedState,t]},useRef:function(t){var e=kt();return t={current:t},e.memoizedState=t},useState:function(t){t=Sf(t);var e=t.queue,l=Jd.bind(null,tt,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:Ef,useDeferredValue:function(t,e){var l=kt();return jf(l,t,e)},useTransition:function(){var t=Sf(!1);return t=Xd.bind(null,tt,t.queue,!0,!1),kt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var n=tt,a=kt();if(ft){if(l===void 0)throw Error(c(407));l=l()}else{if(l=e(),_t===null)throw Error(c(349));(ut&127)!==0||gd(n,e,l)}a.memoizedState=l;var u={value:l,getSnapshot:e};return a.queue=u,Dd(vd.bind(null,n,u,t),[t]),n.flags|=2048,jn(9,{destroy:void 0},yd.bind(null,n,u,l,e),null),l},useId:function(){var t=kt(),e=_t.identifierPrefix;if(ft){var l=Ce,n=Ne;l=(n&~(1<<32-ue(n)-1)).toString(32)+l,e="_"+e+"R_"+l,l=gu++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=$2++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:zf,useFormState:Md,useActionState:Md,useOptimistic:function(t){var e=kt();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=Af.bind(null,tt,!0,l),l.dispatch=e,[t,e]},useMemoCache:gf,useCacheRefresh:function(){return kt().memoizedState=lh.bind(null,tt)},useEffectEvent:function(t){var e=kt(),l={impl:t};return e.memoizedState=l,function(){if((dt&2)!==0)throw Error(c(440));return l.impl.apply(void 0,arguments)}}},Mf={readContext:Qt,use:vu,useCallback:qd,useContext:Qt,useEffect:xf,useImperativeHandle:Ld,useInsertionEffect:Hd,useLayoutEffect:Bd,useMemo:Yd,useReducer:Su,useRef:Cd,useState:function(){return Su(Ve)},useDebugValue:Ef,useDeferredValue:function(t,e){var l=Ct();return wd(l,bt.memoizedState,t,e)},useTransition:function(){var t=Su(Ve)[0],e=Ct().memoizedState;return[typeof t=="boolean"?t:ra(t),e]},useSyncExternalStore:bd,useId:Vd,useHostTransitionStatus:zf,useFormState:Rd,useActionState:Rd,useOptimistic:function(t,e){var l=Ct();return xd(l,bt,t,e)},useMemoCache:gf,useCacheRefresh:Kd};Mf.useEffectEvent=Ud;var Fd={readContext:Qt,use:vu,useCallback:qd,useContext:Qt,useEffect:xf,useImperativeHandle:Ld,useInsertionEffect:Hd,useLayoutEffect:Bd,useMemo:Yd,useReducer:vf,useRef:Cd,useState:function(){return vf(Ve)},useDebugValue:Ef,useDeferredValue:function(t,e){var l=Ct();return bt===null?jf(l,t,e):wd(l,bt.memoizedState,t,e)},useTransition:function(){var t=vf(Ve)[0],e=Ct().memoizedState;return[typeof t=="boolean"?t:ra(t),e]},useSyncExternalStore:bd,useId:Vd,useHostTransitionStatus:zf,useFormState:Nd,useActionState:Nd,useOptimistic:function(t,e){var l=Ct();return bt!==null?xd(l,bt,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:gf,useCacheRefresh:Kd};Fd.useEffectEvent=Ud;function Rf(t,e,l,n){e=t.memoizedState,l=l(n,e),l=l==null?e:j({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var Of={enqueueSetState:function(t,e,l){t=t._reactInternals;var n=se(),a=ol(n);a.payload=e,l!=null&&(a.callback=l),e=sl(t,a,n),e!==null&&(le(e,t,n),ua(e,t,n))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var n=se(),a=ol(n);a.tag=1,a.payload=e,l!=null&&(a.callback=l),e=sl(t,a,n),e!==null&&(le(e,t,n),ua(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=se(),n=ol(l);n.tag=2,e!=null&&(n.callback=e),e=sl(t,n,l),e!==null&&(le(e,t,l),ua(e,t,l))}};function Id(t,e,l,n,a,u,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,u,i):e.prototype&&e.prototype.isPureReactComponent?!Fn(l,n)||!Fn(a,u):!0}function Pd(t,e,l,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,n),e.state!==t&&Of.enqueueReplaceState(e,e.state,null)}function Jl(t,e){var l=e;if("ref"in e){l={};for(var n in e)n!=="ref"&&(l[n]=e[n])}if(t=t.defaultProps){l===e&&(l=j({},l));for(var a in t)l[a]===void 0&&(l[a]=t[a])}return l}function to(t){eu(t)}function eo(t){console.error(t)}function lo(t){eu(t)}function ju(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function no(t,e,l){try{var n=t.onCaughtError;n(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Nf(t,e,l){return l=ol(l),l.tag=3,l.payload={element:null},l.callback=function(){ju(t,e)},l}function ao(t){return t=ol(t),t.tag=3,t}function uo(t,e,l,n){var a=l.type.getDerivedStateFromError;if(typeof a=="function"){var u=n.value;t.payload=function(){return a(u)},t.callback=function(){no(e,l,n)}}var i=l.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){no(e,l,n),typeof a!="function"&&(yl===null?yl=new Set([this]):yl.add(this));var r=n.stack;this.componentDidCatch(n.value,{componentStack:r!==null?r:""})})}function ah(t,e,l,n,a){if(l.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=l.alternate,e!==null&&bn(e,l,a,!0),l=ce.current,l!==null){switch(l.tag){case 31:case 13:return _e===null?Bu():l.alternate===null&&Mt===0&&(Mt=3),l.flags&=-257,l.flags|=65536,l.lanes=a,n===ou?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([n]):e.add(n),lc(t,n,a)),!1;case 22:return l.flags|=65536,n===ou?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([n]):l.add(n)),lc(t,n,a)),!1}throw Error(c(435,l.tag))}return lc(t,n,a),Bu(),!1}if(ft)return e=ce.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=a,n!==Wi&&(t=Error(c(422),{cause:n}),ta(ge(t,l)))):(n!==Wi&&(e=Error(c(423),{cause:n}),ta(ge(e,l))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,n=ge(n,l),a=Nf(t.stateNode,n,a),ff(t,a),Mt!==4&&(Mt=2)),!1;var u=Error(c(520),{cause:n});if(u=ge(u,l),va===null?va=[u]:va.push(u),Mt!==4&&(Mt=2),e===null)return!0;n=ge(n,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=a&-a,l.lanes|=t,t=Nf(l.stateNode,n,t),ff(l,t),!1;case 1:if(e=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(yl===null||!yl.has(u))))return l.flags|=65536,a&=-a,l.lanes|=a,a=ao(a),uo(a,t,l,n),ff(l,a),!1}l=l.return}while(l!==null);return!1}var Cf=Error(c(461)),Ht=!1;function Zt(t,e,l,n){e.child=t===null?rd(e,null,l,n):Vl(e,t.child,l,n)}function io(t,e,l,n,a){l=l.render;var u=e.ref;if("ref"in n){var i={};for(var r in n)r!=="ref"&&(i[r]=n[r])}else i=n;return wl(e),n=hf(t,e,l,i,u,a),r=mf(),t!==null&&!Ht?(pf(t,e,a),Ke(t,e,a)):(ft&&r&&Ji(e),e.flags|=1,Zt(t,e,n,a),e.child)}function fo(t,e,l,n,a){if(t===null){var u=l.type;return typeof u=="function"&&!Zi(u)&&u.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=u,co(t,e,u,n,a)):(t=uu(l.type,null,n,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!Yf(t,a)){var i=u.memoizedProps;if(l=l.compare,l=l!==null?l:Fn,l(i,n)&&t.ref===e.ref)return Ke(t,e,a)}return e.flags|=1,t=Ye(u,n),t.ref=e.ref,t.return=e,e.child=t}function co(t,e,l,n,a){if(t!==null){var u=t.memoizedProps;if(Fn(u,n)&&t.ref===e.ref)if(Ht=!1,e.pendingProps=n=u,Yf(t,a))(t.flags&131072)!==0&&(Ht=!0);else return e.lanes=t.lanes,Ke(t,e,a)}return Df(t,e,l,n,a)}function ro(t,e,l,n){var a=n.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|l:l,t!==null){for(n=e.child=t.child,a=0;n!==null;)a=a|n.lanes|n.childLanes,n=n.sibling;n=a&~u}else n=0,e.child=null;return oo(t,e,u,l,n)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ru(e,u!==null?u.cachePool:null),u!==null?sd(e,u):rf(),hd(e);else return n=e.lanes=536870912,oo(t,e,u!==null?u.baseLanes|l:l,l,n)}else u!==null?(ru(e,u.cachePool),sd(e,u),ml(),e.memoizedState=null):(t!==null&&ru(e,null),rf(),ml());return Zt(t,e,a,l),e.child}function sa(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function oo(t,e,l,n,a){var u=lf();return u=u===null?null:{parent:Dt._currentValue,pool:u},e.memoizedState={baseLanes:l,cachePool:u},t!==null&&ru(e,null),rf(),hd(e),t!==null&&bn(t,e,n,!0),e.childLanes=a,null}function Tu(t,e){return e=Au({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function so(t,e,l){return Vl(e,t.child,null,l),t=Tu(e,e.pendingProps),t.flags|=2,re(e),e.memoizedState=null,t}function uh(t,e,l){var n=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(ft){if(n.mode==="hidden")return t=Tu(e,n),e.lanes=536870912,sa(null,t);if(of(e),(t=xt)?(t=js(t,Se),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:il!==null?{id:Ne,overflow:Ce}:null,retryLane:536870912,hydrationErrors:null},l=kr(t),l.return=e,e.child=l,Xt=e,xt=null)):t=null,t===null)throw cl(e);return e.lanes=536870912,null}return Tu(e,n)}var u=t.memoizedState;if(u!==null){var i=u.dehydrated;if(of(e),a)if(e.flags&256)e.flags&=-257,e=so(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(c(558));else if(Ht||bn(t,e,l,!1),a=(l&t.childLanes)!==0,Ht||a){if(n=_t,n!==null&&(i=er(n,l),i!==0&&i!==u.retryLane))throw u.retryLane=i,Gl(t,i),le(n,t,i),Cf;Bu(),e=so(t,e,l)}else t=u.treeContext,xt=xe(i.nextSibling),Xt=e,ft=!0,fl=null,Se=!1,t!==null&&Fr(e,t),e=Tu(e,n),e.flags|=4096;return e}return t=Ye(t.child,{mode:n.mode,children:n.children}),t.ref=e.ref,e.child=t,t.return=e,t}function zu(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(c(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function Df(t,e,l,n,a){return wl(e),l=hf(t,e,l,n,void 0,a),n=mf(),t!==null&&!Ht?(pf(t,e,a),Ke(t,e,a)):(ft&&n&&Ji(e),e.flags|=1,Zt(t,e,l,a),e.child)}function ho(t,e,l,n,a,u){return wl(e),e.updateQueue=null,l=pd(e,n,l,a),md(t),n=mf(),t!==null&&!Ht?(pf(t,e,u),Ke(t,e,u)):(ft&&n&&Ji(e),e.flags|=1,Zt(t,e,l,u),e.child)}function mo(t,e,l,n,a){if(wl(e),e.stateNode===null){var u=sn,i=l.contextType;typeof i=="object"&&i!==null&&(u=Qt(i)),u=new l(n,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Of,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=n,u.state=e.memoizedState,u.refs={},af(e),i=l.contextType,u.context=typeof i=="object"&&i!==null?Qt(i):sn,u.state=e.memoizedState,i=l.getDerivedStateFromProps,typeof i=="function"&&(Rf(e,l,i,n),u.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&Of.enqueueReplaceState(u,u.state,null),fa(e,n,u,a),ia(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){u=e.stateNode;var r=e.memoizedProps,m=Jl(l,r);u.props=m;var x=u.context,O=l.contextType;i=sn,typeof O=="object"&&O!==null&&(i=Qt(O));var D=l.getDerivedStateFromProps;O=typeof D=="function"||typeof u.getSnapshotBeforeUpdate=="function",r=e.pendingProps!==r,O||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(r||x!==i)&&Pd(e,u,n,i),dl=!1;var E=e.memoizedState;u.state=E,fa(e,n,u,a),ia(),x=e.memoizedState,r||E!==x||dl?(typeof D=="function"&&(Rf(e,l,D,n),x=e.memoizedState),(m=dl||Id(e,l,m,n,E,x,i))?(O||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=x),u.props=n,u.state=x,u.context=i,n=m):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{u=e.stateNode,uf(t,e),i=e.memoizedProps,O=Jl(l,i),u.props=O,D=e.pendingProps,E=u.context,x=l.contextType,m=sn,typeof x=="object"&&x!==null&&(m=Qt(x)),r=l.getDerivedStateFromProps,(x=typeof r=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==D||E!==m)&&Pd(e,u,n,m),dl=!1,E=e.memoizedState,u.state=E,fa(e,n,u,a),ia();var z=e.memoizedState;i!==D||E!==z||dl||t!==null&&t.dependencies!==null&&fu(t.dependencies)?(typeof r=="function"&&(Rf(e,l,r,n),z=e.memoizedState),(O=dl||Id(e,l,O,n,E,z,m)||t!==null&&t.dependencies!==null&&fu(t.dependencies))?(x||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,z,m),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,z,m)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=z),u.props=n,u.state=z,u.context=m,n=O):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),n=!1)}return u=n,zu(t,e),n=(e.flags&128)!==0,u||n?(u=e.stateNode,l=n&&typeof l.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&n?(e.child=Vl(e,t.child,null,a),e.child=Vl(e,null,l,a)):Zt(t,e,l,a),e.memoizedState=u.state,t=e.child):t=Ke(t,e,a),t}function po(t,e,l,n){return ql(),e.flags|=256,Zt(t,e,l,n),e.child}var Uf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hf(t){return{baseLanes:t,cachePool:nd()}}function Bf(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=oe),t}function bo(t,e,l){var n=e.pendingProps,a=!1,u=(e.flags&128)!==0,i;if((i=u)||(i=t!==null&&t.memoizedState===null?!1:(Nt.current&2)!==0),i&&(a=!0,e.flags&=-129),i=(e.flags&32)!==0,e.flags&=-33,t===null){if(ft){if(a?hl(e):ml(),(t=xt)?(t=js(t,Se),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:il!==null?{id:Ne,overflow:Ce}:null,retryLane:536870912,hydrationErrors:null},l=kr(t),l.return=e,e.child=l,Xt=e,xt=null)):t=null,t===null)throw cl(e);return yc(t)?e.lanes=32:e.lanes=536870912,null}var r=n.children;return n=n.fallback,a?(ml(),a=e.mode,r=Au({mode:"hidden",children:r},a),n=Ll(n,a,l,null),r.return=e,n.return=e,r.sibling=n,e.child=r,n=e.child,n.memoizedState=Hf(l),n.childLanes=Bf(t,i,l),e.memoizedState=Uf,sa(null,n)):(hl(e),Gf(e,r))}var m=t.memoizedState;if(m!==null&&(r=m.dehydrated,r!==null)){if(u)e.flags&256?(hl(e),e.flags&=-257,e=Lf(t,e,l)):e.memoizedState!==null?(ml(),e.child=t.child,e.flags|=128,e=null):(ml(),r=n.fallback,a=e.mode,n=Au({mode:"visible",children:n.children},a),r=Ll(r,a,l,null),r.flags|=2,n.return=e,r.return=e,n.sibling=r,e.child=n,Vl(e,t.child,null,l),n=e.child,n.memoizedState=Hf(l),n.childLanes=Bf(t,i,l),e.memoizedState=Uf,e=sa(null,n));else if(hl(e),yc(r)){if(i=r.nextSibling&&r.nextSibling.dataset,i)var x=i.dgst;i=x,n=Error(c(419)),n.stack="",n.digest=i,ta({value:n,source:null,stack:null}),e=Lf(t,e,l)}else if(Ht||bn(t,e,l,!1),i=(l&t.childLanes)!==0,Ht||i){if(i=_t,i!==null&&(n=er(i,l),n!==0&&n!==m.retryLane))throw m.retryLane=n,Gl(t,n),le(i,t,n),Cf;gc(r)||Bu(),e=Lf(t,e,l)}else gc(r)?(e.flags|=192,e.child=t.child,e=null):(t=m.treeContext,xt=xe(r.nextSibling),Xt=e,ft=!0,fl=null,Se=!1,t!==null&&Fr(e,t),e=Gf(e,n.children),e.flags|=4096);return e}return a?(ml(),r=n.fallback,a=e.mode,m=t.child,x=m.sibling,n=Ye(m,{mode:"hidden",children:n.children}),n.subtreeFlags=m.subtreeFlags&65011712,x!==null?r=Ye(x,r):(r=Ll(r,a,l,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,sa(null,n),n=e.child,r=t.child.memoizedState,r===null?r=Hf(l):(a=r.cachePool,a!==null?(m=Dt._currentValue,a=a.parent!==m?{parent:m,pool:m}:a):a=nd(),r={baseLanes:r.baseLanes|l,cachePool:a}),n.memoizedState=r,n.childLanes=Bf(t,i,l),e.memoizedState=Uf,sa(t.child,n)):(hl(e),l=t.child,t=l.sibling,l=Ye(l,{mode:"visible",children:n.children}),l.return=e,l.sibling=null,t!==null&&(i=e.deletions,i===null?(e.deletions=[t],e.flags|=16):i.push(t)),e.child=l,e.memoizedState=null,l)}function Gf(t,e){return e=Au({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Au(t,e){return t=fe(22,t,null,e),t.lanes=0,t}function Lf(t,e,l){return Vl(e,t.child,null,l),t=Gf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function go(t,e,l){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Ii(t.return,e,l)}function qf(t,e,l,n,a,u){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:l,tailMode:a,treeForkCount:u}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=l,i.tailMode=a,i.treeForkCount=u)}function yo(t,e,l){var n=e.pendingProps,a=n.revealOrder,u=n.tail;n=n.children;var i=Nt.current,r=(i&2)!==0;if(r?(i=i&1|2,e.flags|=128):i&=1,G(Nt,i),Zt(t,e,n,l),n=ft?Pn:0,!r&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&go(t,l,e);else if(t.tag===19)go(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(l=e.child,a=null;l!==null;)t=l.alternate,t!==null&&pu(t)===null&&(a=l),l=l.sibling;l=a,l===null?(a=e.child,e.child=null):(a=l.sibling,l.sibling=null),qf(e,!1,a,l,u,n);break;case"backwards":case"unstable_legacy-backwards":for(l=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&pu(t)===null){e.child=a;break}t=a.sibling,a.sibling=l,l=a,a=t}qf(e,!0,l,null,u,n);break;case"together":qf(e,!1,null,null,void 0,n);break;default:e.memoizedState=null}return e.child}function Ke(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),gl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(bn(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(c(153));if(e.child!==null){for(t=e.child,l=Ye(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=Ye(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function Yf(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&fu(t)))}function ih(t,e,l){switch(e.tag){case 3:Jt(e,e.stateNode.containerInfo),rl(e,Dt,t.memoizedState.cache),ql();break;case 27:case 5:Ln(e);break;case 4:Jt(e,e.stateNode.containerInfo);break;case 10:rl(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,of(e),null;break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(hl(e),e.flags|=128,null):(l&e.child.childLanes)!==0?bo(t,e,l):(hl(e),t=Ke(t,e,l),t!==null?t.sibling:null);hl(e);break;case 19:var a=(t.flags&128)!==0;if(n=(l&e.childLanes)!==0,n||(bn(t,e,l,!1),n=(l&e.childLanes)!==0),a){if(n)return yo(t,e,l);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),G(Nt,Nt.current),n)break;return null;case 22:return e.lanes=0,ro(t,e,l,e.pendingProps);case 24:rl(e,Dt,t.memoizedState.cache)}return Ke(t,e,l)}function vo(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)Ht=!0;else{if(!Yf(t,l)&&(e.flags&128)===0)return Ht=!1,ih(t,e,l);Ht=(t.flags&131072)!==0}else Ht=!1,ft&&(e.flags&1048576)!==0&&$r(e,Pn,e.index);switch(e.lanes=0,e.tag){case 16:t:{var n=e.pendingProps;if(t=Ql(e.elementType),e.type=t,typeof t=="function")Zi(t)?(n=Jl(t,n),e.tag=1,e=mo(null,e,t,n,l)):(e.tag=0,e=Df(null,e,t,n,l));else{if(t!=null){var a=t.$$typeof;if(a===vt){e.tag=11,e=io(null,e,t,n,l);break t}else if(a===I){e.tag=14,e=fo(null,e,t,n,l);break t}}throw e=Be(t)||t,Error(c(306,e,""))}}return e;case 0:return Df(t,e,e.type,e.pendingProps,l);case 1:return n=e.type,a=Jl(n,e.pendingProps),mo(t,e,n,a,l);case 3:t:{if(Jt(e,e.stateNode.containerInfo),t===null)throw Error(c(387));n=e.pendingProps;var u=e.memoizedState;a=u.element,uf(t,e),fa(e,n,null,l);var i=e.memoizedState;if(n=i.cache,rl(e,Dt,n),n!==u.cache&&Pi(e,[Dt],l,!0),ia(),n=i.element,u.isDehydrated)if(u={element:n,isDehydrated:!1,cache:i.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=po(t,e,n,l);break t}else if(n!==a){a=ge(Error(c(424)),e),ta(a),e=po(t,e,n,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(xt=xe(t.firstChild),Xt=e,ft=!0,fl=null,Se=!0,l=rd(e,null,n,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(ql(),n===a){e=Ke(t,e,l);break t}Zt(t,e,n,l)}e=e.child}return e;case 26:return zu(t,e),t===null?(l=Os(e.type,null,e.pendingProps,null))?e.memoizedState=l:ft||(l=e.type,t=e.pendingProps,n=Qu(lt.current).createElement(l),n[wt]=e,n[$t]=t,Vt(n,l,t),Lt(n),e.stateNode=n):e.memoizedState=Os(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Ln(e),t===null&&ft&&(n=e.stateNode=As(e.type,e.pendingProps,lt.current),Xt=e,Se=!0,a=xt,xl(e.type)?(vc=a,xt=xe(n.firstChild)):xt=a),Zt(t,e,e.pendingProps.children,l),zu(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&ft&&((a=n=xt)&&(n=Bh(n,e.type,e.pendingProps,Se),n!==null?(e.stateNode=n,Xt=e,xt=xe(n.firstChild),Se=!1,a=!0):a=!1),a||cl(e)),Ln(e),a=e.type,u=e.pendingProps,i=t!==null?t.memoizedProps:null,n=u.children,mc(a,u)?n=null:i!==null&&mc(a,i)&&(e.flags|=32),e.memoizedState!==null&&(a=hf(t,e,F2,null,null,l),Aa._currentValue=a),zu(t,e),Zt(t,e,n,l),e.child;case 6:return t===null&&ft&&((t=l=xt)&&(l=Gh(l,e.pendingProps,Se),l!==null?(e.stateNode=l,Xt=e,xt=null,t=!0):t=!1),t||cl(e)),null;case 13:return bo(t,e,l);case 4:return Jt(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Vl(e,null,n,l):Zt(t,e,n,l),e.child;case 11:return io(t,e,e.type,e.pendingProps,l);case 7:return Zt(t,e,e.pendingProps,l),e.child;case 8:return Zt(t,e,e.pendingProps.children,l),e.child;case 12:return Zt(t,e,e.pendingProps.children,l),e.child;case 10:return n=e.pendingProps,rl(e,e.type,n.value),Zt(t,e,n.children,l),e.child;case 9:return a=e.type._context,n=e.pendingProps.children,wl(e),a=Qt(a),n=n(a),e.flags|=1,Zt(t,e,n,l),e.child;case 14:return fo(t,e,e.type,e.pendingProps,l);case 15:return co(t,e,e.type,e.pendingProps,l);case 19:return yo(t,e,l);case 31:return uh(t,e,l);case 22:return ro(t,e,l,e.pendingProps);case 24:return wl(e),n=Qt(Dt),t===null?(a=lf(),a===null&&(a=_t,u=tf(),a.pooledCache=u,u.refCount++,u!==null&&(a.pooledCacheLanes|=l),a=u),e.memoizedState={parent:n,cache:a},af(e),rl(e,Dt,a)):((t.lanes&l)!==0&&(uf(t,e),fa(e,null,null,l),ia()),a=t.memoizedState,u=e.memoizedState,a.parent!==n?(a={parent:n,cache:n},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),rl(e,Dt,n)):(n=u.cache,rl(e,Dt,n),n!==a.cache&&Pi(e,[Dt],l,!0))),Zt(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(c(156,e.tag))}function Je(t){t.flags|=4}function wf(t,e,l,n,a){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(Ko())t.flags|=8192;else throw Zl=ou,nf}else t.flags&=-16777217}function So(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Hs(e))if(Ko())t.flags|=8192;else throw Zl=ou,nf}function Mu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Ic():536870912,t.lanes|=e,Mn|=e)}function ha(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var n=null;l!==null;)l.alternate!==null&&(n=l),l=l.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Et(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,n=0;if(e)for(var a=t.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags&65011712,n|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=n,t.childLanes=l,e}function fh(t,e,l){var n=e.pendingProps;switch(ki(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(e),null;case 1:return Et(e),null;case 3:return l=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Qe(Dt),Ot(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(pn(e)?Je(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,$i())),Et(e),null;case 26:var a=e.type,u=e.memoizedState;return t===null?(Je(e),u!==null?(Et(e),So(e,u)):(Et(e),wf(e,a,null,n,l))):u?u!==t.memoizedState?(Je(e),Et(e),So(e,u)):(Et(e),e.flags&=-16777217):(t=t.memoizedProps,t!==n&&Je(e),Et(e),wf(e,a,t,n,l)),null;case 27:if(qa(e),l=lt.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Je(e);else{if(!n){if(e.stateNode===null)throw Error(c(166));return Et(e),null}t=w.current,pn(e)?Ir(e):(t=As(a,n,l),e.stateNode=t,Je(e))}return Et(e),null;case 5:if(qa(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Je(e);else{if(!n){if(e.stateNode===null)throw Error(c(166));return Et(e),null}if(u=w.current,pn(e))Ir(e);else{var i=Qu(lt.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?u.multiple=!0:n.size&&(u.size=n.size);break;default:u=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}u[wt]=e,u[$t]=n;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=u;t:switch(Vt(u,a,n),a){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&Je(e)}}return Et(e),wf(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&Je(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(c(166));if(t=lt.current,pn(e)){if(t=e.stateNode,l=e.memoizedProps,n=null,a=Xt,a!==null)switch(a.tag){case 27:case 5:n=a.memoizedProps}t[wt]=e,t=!!(t.nodeValue===l||n!==null&&n.suppressHydrationWarning===!0||bs(t.nodeValue,l)),t||cl(e,!0)}else t=Qu(t).createTextNode(n),t[wt]=e,e.stateNode=t}return Et(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(n=pn(e),l!==null){if(t===null){if(!n)throw Error(c(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(557));t[wt]=e}else ql(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Et(e),t=!1}else l=$i(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(re(e),e):(re(e),null);if((e.flags&128)!==0)throw Error(c(558))}return Et(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=pn(e),n!==null&&n.dehydrated!==null){if(t===null){if(!a)throw Error(c(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(c(317));a[wt]=e}else ql(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Et(e),a=!1}else a=$i(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(re(e),e):(re(e),null)}return re(e),(e.flags&128)!==0?(e.lanes=l,e):(l=n!==null,t=t!==null&&t.memoizedState!==null,l&&(n=e.child,a=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(a=n.alternate.memoizedState.cachePool.pool),u=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(u=n.memoizedState.cachePool.pool),u!==a&&(n.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),Mu(e,e.updateQueue),Et(e),null);case 4:return Ot(),t===null&&rc(e.stateNode.containerInfo),Et(e),null;case 10:return Qe(e.type),Et(e),null;case 19:if(U(Nt),n=e.memoizedState,n===null)return Et(e),null;if(a=(e.flags&128)!==0,u=n.rendering,u===null)if(a)ha(n,!1);else{if(Mt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=pu(t),u!==null){for(e.flags|=128,ha(n,!1),t=u.updateQueue,e.updateQueue=t,Mu(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)Jr(l,t),l=l.sibling;return G(Nt,Nt.current&1|2),ft&&we(e,n.treeForkCount),e.child}t=t.sibling}n.tail!==null&&ne()>Du&&(e.flags|=128,a=!0,ha(n,!1),e.lanes=4194304)}else{if(!a)if(t=pu(u),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Mu(e,t),ha(n,!0),n.tail===null&&n.tailMode==="hidden"&&!u.alternate&&!ft)return Et(e),null}else 2*ne()-n.renderingStartTime>Du&&l!==536870912&&(e.flags|=128,a=!0,ha(n,!1),e.lanes=4194304);n.isBackwards?(u.sibling=e.child,e.child=u):(t=n.last,t!==null?t.sibling=u:e.child=u,n.last=u)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=ne(),t.sibling=null,l=Nt.current,G(Nt,a?l&1|2:l&1),ft&&we(e,n.treeForkCount),t):(Et(e),null);case 22:case 23:return re(e),df(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(l&536870912)!==0&&(e.flags&128)===0&&(Et(e),e.subtreeFlags&6&&(e.flags|=8192)):Et(e),l=e.updateQueue,l!==null&&Mu(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==l&&(e.flags|=2048),t!==null&&U(Xl),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Qe(Dt),Et(e),null;case 25:return null;case 30:return null}throw Error(c(156,e.tag))}function ch(t,e){switch(ki(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qe(Dt),Ot(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return qa(e),null;case 31:if(e.memoizedState!==null){if(re(e),e.alternate===null)throw Error(c(340));ql()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(re(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(c(340));ql()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return U(Nt),null;case 4:return Ot(),null;case 10:return Qe(e.type),null;case 22:case 23:return re(e),df(),t!==null&&U(Xl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Qe(Dt),null;case 25:return null;default:return null}}function _o(t,e){switch(ki(e),e.tag){case 3:Qe(Dt),Ot();break;case 26:case 27:case 5:qa(e);break;case 4:Ot();break;case 31:e.memoizedState!==null&&re(e);break;case 13:re(e);break;case 19:U(Nt);break;case 10:Qe(e.type);break;case 22:case 23:re(e),df(),t!==null&&U(Xl);break;case 24:Qe(Dt)}}function ma(t,e){try{var l=e.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var a=n.next;l=a;do{if((l.tag&t)===t){n=void 0;var u=l.create,i=l.inst;n=u(),i.destroy=n}l=l.next}while(l!==a)}}catch(r){ht(e,e.return,r)}}function pl(t,e,l){try{var n=e.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var u=a.next;n=u;do{if((n.tag&t)===t){var i=n.inst,r=i.destroy;if(r!==void 0){i.destroy=void 0,a=e;var m=l,x=r;try{x()}catch(O){ht(a,m,O)}}}n=n.next}while(n!==u)}}catch(O){ht(e,e.return,O)}}function xo(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{od(e,l)}catch(n){ht(t,t.return,n)}}}function Eo(t,e,l){l.props=Jl(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(n){ht(t,e,n)}}function pa(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof l=="function"?t.refCleanup=l(n):l.current=n}}catch(a){ht(t,e,a)}}function De(t,e){var l=t.ref,n=t.refCleanup;if(l!==null)if(typeof n=="function")try{n()}catch(a){ht(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(a){ht(t,e,a)}else l.current=null}function jo(t){var e=t.type,l=t.memoizedProps,n=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break t;case"img":l.src?n.src=l.src:l.srcSet&&(n.srcset=l.srcSet)}}catch(a){ht(t,t.return,a)}}function Xf(t,e,l){try{var n=t.stateNode;Oh(n,t.type,l,e),n[$t]=e}catch(a){ht(t,t.return,a)}}function To(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&xl(t.type)||t.tag===4}function Qf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||To(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&xl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zf(t,e,l){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Le));else if(n!==4&&(n===27&&xl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Zf(t,e,l),t=t.sibling;t!==null;)Zf(t,e,l),t=t.sibling}function Ru(t,e,l){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(n!==4&&(n===27&&xl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(Ru(t,e,l),t=t.sibling;t!==null;)Ru(t,e,l),t=t.sibling}function zo(t){var e=t.stateNode,l=t.memoizedProps;try{for(var n=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Vt(e,n,l),e[wt]=t,e[$t]=l}catch(u){ht(t,t.return,u)}}var ke=!1,Bt=!1,Vf=!1,Ao=typeof WeakSet=="function"?WeakSet:Set,qt=null;function rh(t,e){if(t=t.containerInfo,sc=$u,t=Lr(t),Gi(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var n=l.getSelection&&l.getSelection();if(n&&n.rangeCount!==0){l=n.anchorNode;var a=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break t}var i=0,r=-1,m=-1,x=0,O=0,D=t,E=null;e:for(;;){for(var z;D!==l||a!==0&&D.nodeType!==3||(r=i+a),D!==u||n!==0&&D.nodeType!==3||(m=i+n),D.nodeType===3&&(i+=D.nodeValue.length),(z=D.firstChild)!==null;)E=D,D=z;for(;;){if(D===t)break e;if(E===l&&++x===a&&(r=i),E===u&&++O===n&&(m=i),(z=D.nextSibling)!==null)break;D=E,E=D.parentNode}D=z}l=r===-1||m===-1?null:{start:r,end:m}}else l=null}l=l||{start:0,end:0}}else l=null;for(hc={focusedElem:t,selectionRange:l},$u=!1,qt=e;qt!==null;)if(e=qt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,qt=t;else for(;qt!==null;){switch(e=qt,u=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)a=t[l],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,l=e,a=u.memoizedProps,u=u.memoizedState,n=l.stateNode;try{var q=Jl(l.type,a);t=n.getSnapshotBeforeUpdate(q,u),n.__reactInternalSnapshotBeforeUpdate=t}catch(J){ht(l,l.return,J)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)bc(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":bc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(c(163))}if(t=e.sibling,t!==null){t.return=e.return,qt=t;break}qt=e.return}}function Mo(t,e,l){var n=l.flags;switch(l.tag){case 0:case 11:case 15:$e(t,l),n&4&&ma(5,l);break;case 1:if($e(t,l),n&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(i){ht(l,l.return,i)}else{var a=Jl(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(i){ht(l,l.return,i)}}n&64&&xo(l),n&512&&pa(l,l.return);break;case 3:if($e(t,l),n&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{od(t,e)}catch(i){ht(l,l.return,i)}}break;case 27:e===null&&n&4&&zo(l);case 26:case 5:$e(t,l),e===null&&n&4&&jo(l),n&512&&pa(l,l.return);break;case 12:$e(t,l);break;case 31:$e(t,l),n&4&&No(t,l);break;case 13:$e(t,l),n&4&&Co(t,l),n&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=yh.bind(null,l),Lh(t,l))));break;case 22:if(n=l.memoizedState!==null||ke,!n){e=e!==null&&e.memoizedState!==null||Bt,a=ke;var u=Bt;ke=n,(Bt=e)&&!u?Fe(t,l,(l.subtreeFlags&8772)!==0):$e(t,l),ke=a,Bt=u}break;case 30:break;default:$e(t,l)}}function Ro(t){var e=t.alternate;e!==null&&(t.alternate=null,Ro(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Si(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Tt=null,It=!1;function We(t,e,l){for(l=l.child;l!==null;)Oo(t,e,l),l=l.sibling}function Oo(t,e,l){if(ae&&typeof ae.onCommitFiberUnmount=="function")try{ae.onCommitFiberUnmount(qn,l)}catch{}switch(l.tag){case 26:Bt||De(l,e),We(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Bt||De(l,e);var n=Tt,a=It;xl(l.type)&&(Tt=l.stateNode,It=!1),We(t,e,l),ja(l.stateNode),Tt=n,It=a;break;case 5:Bt||De(l,e);case 6:if(n=Tt,a=It,Tt=null,We(t,e,l),Tt=n,It=a,Tt!==null)if(It)try{(Tt.nodeType===9?Tt.body:Tt.nodeName==="HTML"?Tt.ownerDocument.body:Tt).removeChild(l.stateNode)}catch(u){ht(l,e,u)}else try{Tt.removeChild(l.stateNode)}catch(u){ht(l,e,u)}break;case 18:Tt!==null&&(It?(t=Tt,xs(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Bn(t)):xs(Tt,l.stateNode));break;case 4:n=Tt,a=It,Tt=l.stateNode.containerInfo,It=!0,We(t,e,l),Tt=n,It=a;break;case 0:case 11:case 14:case 15:pl(2,l,e),Bt||pl(4,l,e),We(t,e,l);break;case 1:Bt||(De(l,e),n=l.stateNode,typeof n.componentWillUnmount=="function"&&Eo(l,e,n)),We(t,e,l);break;case 21:We(t,e,l);break;case 22:Bt=(n=Bt)||l.memoizedState!==null,We(t,e,l),Bt=n;break;default:We(t,e,l)}}function No(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Bn(t)}catch(l){ht(e,e.return,l)}}}function Co(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Bn(t)}catch(l){ht(e,e.return,l)}}function dh(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Ao),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Ao),e;default:throw Error(c(435,t.tag))}}function Ou(t,e){var l=dh(t);e.forEach(function(n){if(!l.has(n)){l.add(n);var a=vh.bind(null,t,n);n.then(a,a)}})}function Pt(t,e){var l=e.deletions;if(l!==null)for(var n=0;n<l.length;n++){var a=l[n],u=t,i=e,r=i;t:for(;r!==null;){switch(r.tag){case 27:if(xl(r.type)){Tt=r.stateNode,It=!1;break t}break;case 5:Tt=r.stateNode,It=!1;break t;case 3:case 4:Tt=r.stateNode.containerInfo,It=!0;break t}r=r.return}if(Tt===null)throw Error(c(160));Oo(u,i,a),Tt=null,It=!1,u=a.alternate,u!==null&&(u.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Do(e,t),e=e.sibling}var Ae=null;function Do(t,e){var l=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Pt(e,t),te(t),n&4&&(pl(3,t,t.return),ma(3,t),pl(5,t,t.return));break;case 1:Pt(e,t),te(t),n&512&&(Bt||l===null||De(l,l.return)),n&64&&ke&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?n:l.concat(n))));break;case 26:var a=Ae;if(Pt(e,t),te(t),n&512&&(Bt||l===null||De(l,l.return)),n&4){var u=l!==null?l.memoizedState:null;if(n=t.memoizedState,l===null)if(n===null)if(t.stateNode===null){t:{n=t.type,l=t.memoizedProps,a=a.ownerDocument||a;e:switch(n){case"title":u=a.getElementsByTagName("title")[0],(!u||u[Xn]||u[wt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=a.createElement(n),a.head.insertBefore(u,a.querySelector("head > title"))),Vt(u,n,l),u[wt]=t,Lt(u),n=u;break t;case"link":var i=Ds("link","href",a).get(n+(l.href||""));if(i){for(var r=0;r<i.length;r++)if(u=i[r],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){i.splice(r,1);break e}}u=a.createElement(n),Vt(u,n,l),a.head.appendChild(u);break;case"meta":if(i=Ds("meta","content",a).get(n+(l.content||""))){for(r=0;r<i.length;r++)if(u=i[r],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){i.splice(r,1);break e}}u=a.createElement(n),Vt(u,n,l),a.head.appendChild(u);break;default:throw Error(c(468,n))}u[wt]=t,Lt(u),n=u}t.stateNode=n}else Us(a,t.type,t.stateNode);else t.stateNode=Cs(a,n,t.memoizedProps);else u!==n?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,n===null?Us(a,t.type,t.stateNode):Cs(a,n,t.memoizedProps)):n===null&&t.stateNode!==null&&Xf(t,t.memoizedProps,l.memoizedProps)}break;case 27:Pt(e,t),te(t),n&512&&(Bt||l===null||De(l,l.return)),l!==null&&n&4&&Xf(t,t.memoizedProps,l.memoizedProps);break;case 5:if(Pt(e,t),te(t),n&512&&(Bt||l===null||De(l,l.return)),t.flags&32){a=t.stateNode;try{an(a,"")}catch(q){ht(t,t.return,q)}}n&4&&t.stateNode!=null&&(a=t.memoizedProps,Xf(t,a,l!==null?l.memoizedProps:a)),n&1024&&(Vf=!0);break;case 6:if(Pt(e,t),te(t),n&4){if(t.stateNode===null)throw Error(c(162));n=t.memoizedProps,l=t.stateNode;try{l.nodeValue=n}catch(q){ht(t,t.return,q)}}break;case 3:if(Ku=null,a=Ae,Ae=Zu(e.containerInfo),Pt(e,t),Ae=a,te(t),n&4&&l!==null&&l.memoizedState.isDehydrated)try{Bn(e.containerInfo)}catch(q){ht(t,t.return,q)}Vf&&(Vf=!1,Uo(t));break;case 4:n=Ae,Ae=Zu(t.stateNode.containerInfo),Pt(e,t),te(t),Ae=n;break;case 12:Pt(e,t),te(t);break;case 31:Pt(e,t),te(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Ou(t,n)));break;case 13:Pt(e,t),te(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Cu=ne()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Ou(t,n)));break;case 22:a=t.memoizedState!==null;var m=l!==null&&l.memoizedState!==null,x=ke,O=Bt;if(ke=x||a,Bt=O||m,Pt(e,t),Bt=O,ke=x,te(t),n&8192)t:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(l===null||m||ke||Bt||kl(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){m=l=e;try{if(u=m.stateNode,a)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{r=m.stateNode;var D=m.memoizedProps.style,E=D!=null&&D.hasOwnProperty("display")?D.display:null;r.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(q){ht(m,m.return,q)}}}else if(e.tag===6){if(l===null){m=e;try{m.stateNode.nodeValue=a?"":m.memoizedProps}catch(q){ht(m,m.return,q)}}}else if(e.tag===18){if(l===null){m=e;try{var z=m.stateNode;a?Es(z,!0):Es(m.stateNode,!1)}catch(q){ht(m,m.return,q)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(l=n.retryQueue,l!==null&&(n.retryQueue=null,Ou(t,l))));break;case 19:Pt(e,t),te(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Ou(t,n)));break;case 30:break;case 21:break;default:Pt(e,t),te(t)}}function te(t){var e=t.flags;if(e&2){try{for(var l,n=t.return;n!==null;){if(To(n)){l=n;break}n=n.return}if(l==null)throw Error(c(160));switch(l.tag){case 27:var a=l.stateNode,u=Qf(t);Ru(t,u,a);break;case 5:var i=l.stateNode;l.flags&32&&(an(i,""),l.flags&=-33);var r=Qf(t);Ru(t,r,i);break;case 3:case 4:var m=l.stateNode.containerInfo,x=Qf(t);Zf(t,x,m);break;default:throw Error(c(161))}}catch(O){ht(t,t.return,O)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Uo(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Uo(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function $e(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Mo(t,e.alternate,e),e=e.sibling}function kl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:pl(4,e,e.return),kl(e);break;case 1:De(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&Eo(e,e.return,l),kl(e);break;case 27:ja(e.stateNode);case 26:case 5:De(e,e.return),kl(e);break;case 22:e.memoizedState===null&&kl(e);break;case 30:kl(e);break;default:kl(e)}t=t.sibling}}function Fe(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,a=t,u=e,i=u.flags;switch(u.tag){case 0:case 11:case 15:Fe(a,u,l),ma(4,u);break;case 1:if(Fe(a,u,l),n=u,a=n.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(x){ht(n,n.return,x)}if(n=u,a=n.updateQueue,a!==null){var r=n.stateNode;try{var m=a.shared.hiddenCallbacks;if(m!==null)for(a.shared.hiddenCallbacks=null,a=0;a<m.length;a++)dd(m[a],r)}catch(x){ht(n,n.return,x)}}l&&i&64&&xo(u),pa(u,u.return);break;case 27:zo(u);case 26:case 5:Fe(a,u,l),l&&n===null&&i&4&&jo(u),pa(u,u.return);break;case 12:Fe(a,u,l);break;case 31:Fe(a,u,l),l&&i&4&&No(a,u);break;case 13:Fe(a,u,l),l&&i&4&&Co(a,u);break;case 22:u.memoizedState===null&&Fe(a,u,l),pa(u,u.return);break;case 30:break;default:Fe(a,u,l)}e=e.sibling}}function Kf(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&ea(l))}function Jf(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ea(t))}function Me(t,e,l,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ho(t,e,l,n),e=e.sibling}function Ho(t,e,l,n){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Me(t,e,l,n),a&2048&&ma(9,e);break;case 1:Me(t,e,l,n);break;case 3:Me(t,e,l,n),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ea(t)));break;case 12:if(a&2048){Me(t,e,l,n),t=e.stateNode;try{var u=e.memoizedProps,i=u.id,r=u.onPostCommit;typeof r=="function"&&r(i,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(m){ht(e,e.return,m)}}else Me(t,e,l,n);break;case 31:Me(t,e,l,n);break;case 13:Me(t,e,l,n);break;case 23:break;case 22:u=e.stateNode,i=e.alternate,e.memoizedState!==null?u._visibility&2?Me(t,e,l,n):ba(t,e):u._visibility&2?Me(t,e,l,n):(u._visibility|=2,Tn(t,e,l,n,(e.subtreeFlags&10256)!==0||!1)),a&2048&&Kf(i,e);break;case 24:Me(t,e,l,n),a&2048&&Jf(e.alternate,e);break;default:Me(t,e,l,n)}}function Tn(t,e,l,n,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,i=e,r=l,m=n,x=i.flags;switch(i.tag){case 0:case 11:case 15:Tn(u,i,r,m,a),ma(8,i);break;case 23:break;case 22:var O=i.stateNode;i.memoizedState!==null?O._visibility&2?Tn(u,i,r,m,a):ba(u,i):(O._visibility|=2,Tn(u,i,r,m,a)),a&&x&2048&&Kf(i.alternate,i);break;case 24:Tn(u,i,r,m,a),a&&x&2048&&Jf(i.alternate,i);break;default:Tn(u,i,r,m,a)}e=e.sibling}}function ba(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,n=e,a=n.flags;switch(n.tag){case 22:ba(l,n),a&2048&&Kf(n.alternate,n);break;case 24:ba(l,n),a&2048&&Jf(n.alternate,n);break;default:ba(l,n)}e=e.sibling}}var ga=8192;function zn(t,e,l){if(t.subtreeFlags&ga)for(t=t.child;t!==null;)Bo(t,e,l),t=t.sibling}function Bo(t,e,l){switch(t.tag){case 26:zn(t,e,l),t.flags&ga&&t.memoizedState!==null&&$h(l,Ae,t.memoizedState,t.memoizedProps);break;case 5:zn(t,e,l);break;case 3:case 4:var n=Ae;Ae=Zu(t.stateNode.containerInfo),zn(t,e,l),Ae=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=ga,ga=16777216,zn(t,e,l),ga=n):zn(t,e,l));break;default:zn(t,e,l)}}function Go(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function ya(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var n=e[l];qt=n,qo(n,t)}Go(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Lo(t),t=t.sibling}function Lo(t){switch(t.tag){case 0:case 11:case 15:ya(t),t.flags&2048&&pl(9,t,t.return);break;case 3:ya(t);break;case 12:ya(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Nu(t)):ya(t);break;default:ya(t)}}function Nu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var n=e[l];qt=n,qo(n,t)}Go(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:pl(8,e,e.return),Nu(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,Nu(e));break;default:Nu(e)}t=t.sibling}}function qo(t,e){for(;qt!==null;){var l=qt;switch(l.tag){case 0:case 11:case 15:pl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var n=l.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:ea(l.memoizedState.cache)}if(n=l.child,n!==null)n.return=l,qt=n;else t:for(l=t;qt!==null;){n=qt;var a=n.sibling,u=n.return;if(Ro(n),n===l){qt=null;break t}if(a!==null){a.return=u,qt=a;break t}qt=u}}}var oh={getCacheForType:function(t){var e=Qt(Dt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return Qt(Dt).controller.signal}},sh=typeof WeakMap=="function"?WeakMap:Map,dt=0,_t=null,nt=null,ut=0,st=0,de=null,bl=!1,An=!1,kf=!1,Ie=0,Mt=0,gl=0,Wl=0,Wf=0,oe=0,Mn=0,va=null,ee=null,$f=!1,Cu=0,Yo=0,Du=1/0,Uu=null,yl=null,Gt=0,vl=null,Rn=null,Pe=0,Ff=0,If=null,wo=null,Sa=0,Pf=null;function se(){return(dt&2)!==0&&ut!==0?ut&-ut:N.T!==null?uc():lr()}function Xo(){if(oe===0)if((ut&536870912)===0||ft){var t=Xa;Xa<<=1,(Xa&3932160)===0&&(Xa=262144),oe=t}else oe=536870912;return t=ce.current,t!==null&&(t.flags|=32),oe}function le(t,e,l){(t===_t&&(st===2||st===9)||t.cancelPendingCommit!==null)&&(On(t,0),Sl(t,ut,oe,!1)),wn(t,l),((dt&2)===0||t!==_t)&&(t===_t&&((dt&2)===0&&(Wl|=l),Mt===4&&Sl(t,ut,oe,!1)),Ue(t))}function Qo(t,e,l){if((dt&6)!==0)throw Error(c(327));var n=!l&&(e&127)===0&&(e&t.expiredLanes)===0||Yn(t,e),a=n?ph(t,e):ec(t,e,!0),u=n;do{if(a===0){An&&!n&&Sl(t,e,0,!1);break}else{if(l=t.current.alternate,u&&!hh(l)){a=ec(t,e,!1),u=!1;continue}if(a===2){if(u=e,t.errorRecoveryDisabledLanes&u)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){e=i;t:{var r=t;a=va;var m=r.current.memoizedState.isDehydrated;if(m&&(On(r,i).flags|=256),i=ec(r,i,!1),i!==2){if(kf&&!m){r.errorRecoveryDisabledLanes|=u,Wl|=u,a=4;break t}u=ee,ee=a,u!==null&&(ee===null?ee=u:ee.push.apply(ee,u))}a=i}if(u=!1,a!==2)continue}}if(a===1){On(t,0),Sl(t,e,0,!0);break}t:{switch(n=t,u=a,u){case 0:case 1:throw Error(c(345));case 4:if((e&4194048)!==e)break;case 6:Sl(n,e,oe,!bl);break t;case 2:ee=null;break;case 3:case 5:break;default:throw Error(c(329))}if((e&62914560)===e&&(a=Cu+300-ne(),10<a)){if(Sl(n,e,oe,!bl),Za(n,0,!0)!==0)break t;Pe=e,n.timeoutHandle=Ss(Zo.bind(null,n,l,ee,Uu,$f,e,oe,Wl,Mn,bl,u,"Throttled",-0,0),a);break t}Zo(n,l,ee,Uu,$f,e,oe,Wl,Mn,bl,u,null,-0,0)}}break}while(!0);Ue(t)}function Zo(t,e,l,n,a,u,i,r,m,x,O,D,E,z){if(t.timeoutHandle=-1,D=e.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Le},Bo(e,u,D);var q=(u&62914560)===u?Cu-ne():(u&4194048)===u?Yo-ne():0;if(q=Fh(D,q),q!==null){Pe=u,t.cancelPendingCommit=q(Io.bind(null,t,e,u,l,n,a,i,r,m,O,D,null,E,z)),Sl(t,u,i,!x);return}}Io(t,e,u,l,n,a,i,r,m)}function hh(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var n=0;n<l.length;n++){var a=l[n],u=a.getSnapshot;a=a.value;try{if(!ie(u(),a))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sl(t,e,l,n){e&=~Wf,e&=~Wl,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var a=e;0<a;){var u=31-ue(a),i=1<<u;n[u]=-1,a&=~i}l!==0&&Pc(t,l,e)}function Hu(){return(dt&6)===0?(_a(0),!1):!0}function tc(){if(nt!==null){if(st===0)var t=nt.return;else t=nt,Xe=Yl=null,bf(t),Sn=null,na=0,t=nt;for(;t!==null;)_o(t.alternate,t),t=t.return;nt=null}}function On(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,Dh(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Pe=0,tc(),_t=t,nt=l=Ye(t.current,null),ut=e,st=0,de=null,bl=!1,An=Yn(t,e),kf=!1,Mn=oe=Wf=Wl=gl=Mt=0,ee=va=null,$f=!1,(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var a=31-ue(n),u=1<<a;e|=t[a],n&=~u}return Ie=e,lu(),l}function Vo(t,e){tt=null,N.H=oa,e===vn||e===du?(e=id(),st=3):e===nf?(e=id(),st=4):st=e===Cf?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,de=e,nt===null&&(Mt=1,ju(t,ge(e,t.current)))}function Ko(){var t=ce.current;return t===null?!0:(ut&4194048)===ut?_e===null:(ut&62914560)===ut||(ut&536870912)!==0?t===_e:!1}function Jo(){var t=N.H;return N.H=oa,t===null?oa:t}function ko(){var t=N.A;return N.A=oh,t}function Bu(){Mt=4,bl||(ut&4194048)!==ut&&ce.current!==null||(An=!0),(gl&134217727)===0&&(Wl&134217727)===0||_t===null||Sl(_t,ut,oe,!1)}function ec(t,e,l){var n=dt;dt|=2;var a=Jo(),u=ko();(_t!==t||ut!==e)&&(Uu=null,On(t,e)),e=!1;var i=Mt;t:do try{if(st!==0&&nt!==null){var r=nt,m=de;switch(st){case 8:tc(),i=6;break t;case 3:case 2:case 9:case 6:ce.current===null&&(e=!0);var x=st;if(st=0,de=null,Nn(t,r,m,x),l&&An){i=0;break t}break;default:x=st,st=0,de=null,Nn(t,r,m,x)}}mh(),i=Mt;break}catch(O){Vo(t,O)}while(!0);return e&&t.shellSuspendCounter++,Xe=Yl=null,dt=n,N.H=a,N.A=u,nt===null&&(_t=null,ut=0,lu()),i}function mh(){for(;nt!==null;)Wo(nt)}function ph(t,e){var l=dt;dt|=2;var n=Jo(),a=ko();_t!==t||ut!==e?(Uu=null,Du=ne()+500,On(t,e)):An=Yn(t,e);t:do try{if(st!==0&&nt!==null){e=nt;var u=de;e:switch(st){case 1:st=0,de=null,Nn(t,e,u,1);break;case 2:case 9:if(ad(u)){st=0,de=null,$o(e);break}e=function(){st!==2&&st!==9||_t!==t||(st=7),Ue(t)},u.then(e,e);break t;case 3:st=7;break t;case 4:st=5;break t;case 7:ad(u)?(st=0,de=null,$o(e)):(st=0,de=null,Nn(t,e,u,7));break;case 5:var i=null;switch(nt.tag){case 26:i=nt.memoizedState;case 5:case 27:var r=nt;if(i?Hs(i):r.stateNode.complete){st=0,de=null;var m=r.sibling;if(m!==null)nt=m;else{var x=r.return;x!==null?(nt=x,Gu(x)):nt=null}break e}}st=0,de=null,Nn(t,e,u,5);break;case 6:st=0,de=null,Nn(t,e,u,6);break;case 8:tc(),Mt=6;break t;default:throw Error(c(462))}}bh();break}catch(O){Vo(t,O)}while(!0);return Xe=Yl=null,N.H=n,N.A=a,dt=l,nt!==null?0:(_t=null,ut=0,lu(),Mt)}function bh(){for(;nt!==null&&!q0();)Wo(nt)}function Wo(t){var e=vo(t.alternate,t,Ie);t.memoizedProps=t.pendingProps,e===null?Gu(t):nt=e}function $o(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=ho(l,e,e.pendingProps,e.type,void 0,ut);break;case 11:e=ho(l,e,e.pendingProps,e.type.render,e.ref,ut);break;case 5:bf(e);default:_o(l,e),e=nt=Jr(e,Ie),e=vo(l,e,Ie)}t.memoizedProps=t.pendingProps,e===null?Gu(t):nt=e}function Nn(t,e,l,n){Xe=Yl=null,bf(e),Sn=null,na=0;var a=e.return;try{if(ah(t,a,e,l,ut)){Mt=1,ju(t,ge(l,t.current)),nt=null;return}}catch(u){if(a!==null)throw nt=a,u;Mt=1,ju(t,ge(l,t.current)),nt=null;return}e.flags&32768?(ft||n===1?t=!0:An||(ut&536870912)!==0?t=!1:(bl=t=!0,(n===2||n===9||n===3||n===6)&&(n=ce.current,n!==null&&n.tag===13&&(n.flags|=16384))),Fo(e,t)):Gu(e)}function Gu(t){var e=t;do{if((e.flags&32768)!==0){Fo(e,bl);return}t=e.return;var l=fh(e.alternate,e,Ie);if(l!==null){nt=l;return}if(e=e.sibling,e!==null){nt=e;return}nt=e=t}while(e!==null);Mt===0&&(Mt=5)}function Fo(t,e){do{var l=ch(t.alternate,t);if(l!==null){l.flags&=32767,nt=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){nt=t;return}nt=t=l}while(t!==null);Mt=6,nt=null}function Io(t,e,l,n,a,u,i,r,m){t.cancelPendingCommit=null;do Lu();while(Gt!==0);if((dt&6)!==0)throw Error(c(327));if(e!==null){if(e===t.current)throw Error(c(177));if(u=e.lanes|e.childLanes,u|=Xi,W0(t,l,u,i,r,m),t===_t&&(nt=_t=null,ut=0),Rn=e,vl=t,Pe=l,Ff=u,If=a,wo=n,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Sh(Ya,function(){return ns(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=N.T,N.T=null,a=B.p,B.p=2,i=dt,dt|=4;try{rh(t,e,l)}finally{dt=i,B.p=a,N.T=n}}Gt=1,Po(),ts(),es()}}function Po(){if(Gt===1){Gt=0;var t=vl,e=Rn,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=N.T,N.T=null;var n=B.p;B.p=2;var a=dt;dt|=4;try{Do(e,t);var u=hc,i=Lr(t.containerInfo),r=u.focusedElem,m=u.selectionRange;if(i!==r&&r&&r.ownerDocument&&Gr(r.ownerDocument.documentElement,r)){if(m!==null&&Gi(r)){var x=m.start,O=m.end;if(O===void 0&&(O=x),"selectionStart"in r)r.selectionStart=x,r.selectionEnd=Math.min(O,r.value.length);else{var D=r.ownerDocument||document,E=D&&D.defaultView||window;if(E.getSelection){var z=E.getSelection(),q=r.textContent.length,J=Math.min(m.start,q),yt=m.end===void 0?J:Math.min(m.end,q);!z.extend&&J>yt&&(i=yt,yt=J,J=i);var S=Br(r,J),b=Br(r,yt);if(S&&b&&(z.rangeCount!==1||z.anchorNode!==S.node||z.anchorOffset!==S.offset||z.focusNode!==b.node||z.focusOffset!==b.offset)){var _=D.createRange();_.setStart(S.node,S.offset),z.removeAllRanges(),J>yt?(z.addRange(_),z.extend(b.node,b.offset)):(_.setEnd(b.node,b.offset),z.addRange(_))}}}}for(D=[],z=r;z=z.parentNode;)z.nodeType===1&&D.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<D.length;r++){var C=D[r];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}$u=!!sc,hc=sc=null}finally{dt=a,B.p=n,N.T=l}}t.current=e,Gt=2}}function ts(){if(Gt===2){Gt=0;var t=vl,e=Rn,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=N.T,N.T=null;var n=B.p;B.p=2;var a=dt;dt|=4;try{Mo(t,e.alternate,e)}finally{dt=a,B.p=n,N.T=l}}Gt=3}}function es(){if(Gt===4||Gt===3){Gt=0,Y0();var t=vl,e=Rn,l=Pe,n=wo;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Gt=5:(Gt=0,Rn=vl=null,ls(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(yl=null),yi(l),e=e.stateNode,ae&&typeof ae.onCommitFiberRoot=="function")try{ae.onCommitFiberRoot(qn,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=N.T,a=B.p,B.p=2,N.T=null;try{for(var u=t.onRecoverableError,i=0;i<n.length;i++){var r=n[i];u(r.value,{componentStack:r.stack})}}finally{N.T=e,B.p=a}}(Pe&3)!==0&&Lu(),Ue(t),a=t.pendingLanes,(l&261930)!==0&&(a&42)!==0?t===Pf?Sa++:(Sa=0,Pf=t):Sa=0,_a(0)}}function ls(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ea(e)))}function Lu(){return Po(),ts(),es(),ns()}function ns(){if(Gt!==5)return!1;var t=vl,e=Ff;Ff=0;var l=yi(Pe),n=N.T,a=B.p;try{B.p=32>l?32:l,N.T=null,l=If,If=null;var u=vl,i=Pe;if(Gt=0,Rn=vl=null,Pe=0,(dt&6)!==0)throw Error(c(331));var r=dt;if(dt|=4,Lo(u.current),Ho(u,u.current,i,l),dt=r,_a(0,!1),ae&&typeof ae.onPostCommitFiberRoot=="function")try{ae.onPostCommitFiberRoot(qn,u)}catch{}return!0}finally{B.p=a,N.T=n,ls(t,e)}}function as(t,e,l){e=ge(l,e),e=Nf(t.stateNode,e,2),t=sl(t,e,2),t!==null&&(wn(t,2),Ue(t))}function ht(t,e,l){if(t.tag===3)as(t,t,l);else for(;e!==null;){if(e.tag===3){as(e,t,l);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(yl===null||!yl.has(n))){t=ge(l,t),l=ao(2),n=sl(e,l,2),n!==null&&(uo(l,n,e,t),wn(n,2),Ue(n));break}}e=e.return}}function lc(t,e,l){var n=t.pingCache;if(n===null){n=t.pingCache=new sh;var a=new Set;n.set(e,a)}else a=n.get(e),a===void 0&&(a=new Set,n.set(e,a));a.has(l)||(kf=!0,a.add(l),t=gh.bind(null,t,e,l),e.then(t,t))}function gh(t,e,l){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,_t===t&&(ut&l)===l&&(Mt===4||Mt===3&&(ut&62914560)===ut&&300>ne()-Cu?(dt&2)===0&&On(t,0):Wf|=l,Mn===ut&&(Mn=0)),Ue(t)}function us(t,e){e===0&&(e=Ic()),t=Gl(t,e),t!==null&&(wn(t,e),Ue(t))}function yh(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),us(t,l)}function vh(t,e){var l=0;switch(t.tag){case 31:case 13:var n=t.stateNode,a=t.memoizedState;a!==null&&(l=a.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(e),us(t,l)}function Sh(t,e){return mi(t,e)}var qu=null,Cn=null,nc=!1,Yu=!1,ac=!1,_l=0;function Ue(t){t!==Cn&&t.next===null&&(Cn===null?qu=Cn=t:Cn=Cn.next=t),Yu=!0,nc||(nc=!0,xh())}function _a(t,e){if(!ac&&Yu){ac=!0;do for(var l=!1,n=qu;n!==null;){if(t!==0){var a=n.pendingLanes;if(a===0)var u=0;else{var i=n.suspendedLanes,r=n.pingedLanes;u=(1<<31-ue(42|t)+1)-1,u&=a&~(i&~r),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,rs(n,u))}else u=ut,u=Za(n,n===_t?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(u&3)===0||Yn(n,u)||(l=!0,rs(n,u));n=n.next}while(l);ac=!1}}function _h(){is()}function is(){Yu=nc=!1;var t=0;_l!==0&&Ch()&&(t=_l);for(var e=ne(),l=null,n=qu;n!==null;){var a=n.next,u=fs(n,e);u===0?(n.next=null,l===null?qu=a:l.next=a,a===null&&(Cn=l)):(l=n,(t!==0||(u&3)!==0)&&(Yu=!0)),n=a}Gt!==0&&Gt!==5||_a(t),_l!==0&&(_l=0)}function fs(t,e){for(var l=t.suspendedLanes,n=t.pingedLanes,a=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var i=31-ue(u),r=1<<i,m=a[i];m===-1?((r&l)===0||(r&n)!==0)&&(a[i]=k0(r,e)):m<=e&&(t.expiredLanes|=r),u&=~r}if(e=_t,l=ut,l=Za(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,l===0||t===e&&(st===2||st===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&pi(n),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Yn(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(n!==null&&pi(n),yi(l)){case 2:case 8:l=$c;break;case 32:l=Ya;break;case 268435456:l=Fc;break;default:l=Ya}return n=cs.bind(null,t),l=mi(l,n),t.callbackPriority=e,t.callbackNode=l,e}return n!==null&&n!==null&&pi(n),t.callbackPriority=2,t.callbackNode=null,2}function cs(t,e){if(Gt!==0&&Gt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Lu()&&t.callbackNode!==l)return null;var n=ut;return n=Za(t,t===_t?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(Qo(t,n,e),fs(t,ne()),t.callbackNode!=null&&t.callbackNode===l?cs.bind(null,t):null)}function rs(t,e){if(Lu())return null;Qo(t,e,!0)}function xh(){Uh(function(){(dt&6)!==0?mi(Wc,_h):is()})}function uc(){if(_l===0){var t=gn;t===0&&(t=wa,wa<<=1,(wa&261888)===0&&(wa=256)),_l=t}return _l}function ds(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ka(""+t)}function os(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function Eh(t,e,l,n,a){if(e==="submit"&&l&&l.stateNode===a){var u=ds((a[$t]||null).action),i=n.submitter;i&&(e=(e=i[$t]||null)?ds(e.formAction):i.getAttribute("formAction"),e!==null&&(u=e,i=null));var r=new Ia("action","action",null,n,a);t.push({event:r,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(_l!==0){var m=i?os(a,i):new FormData(a);Tf(l,{pending:!0,data:m,method:a.method,action:u},null,m)}}else typeof u=="function"&&(r.preventDefault(),m=i?os(a,i):new FormData(a),Tf(l,{pending:!0,data:m,method:a.method,action:u},u,m))},currentTarget:a}]})}}for(var ic=0;ic<wi.length;ic++){var fc=wi[ic],jh=fc.toLowerCase(),Th=fc[0].toUpperCase()+fc.slice(1);ze(jh,"on"+Th)}ze(wr,"onAnimationEnd"),ze(Xr,"onAnimationIteration"),ze(Qr,"onAnimationStart"),ze("dblclick","onDoubleClick"),ze("focusin","onFocus"),ze("focusout","onBlur"),ze(w2,"onTransitionRun"),ze(X2,"onTransitionStart"),ze(Q2,"onTransitionCancel"),ze(Zr,"onTransitionEnd"),ln("onMouseEnter",["mouseout","mouseover"]),ln("onMouseLeave",["mouseout","mouseover"]),ln("onPointerEnter",["pointerout","pointerover"]),ln("onPointerLeave",["pointerout","pointerover"]),Dl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Dl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Dl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Dl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Dl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Dl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xa));function ss(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var n=t[l],a=n.event;n=n.listeners;t:{var u=void 0;if(e)for(var i=n.length-1;0<=i;i--){var r=n[i],m=r.instance,x=r.currentTarget;if(r=r.listener,m!==u&&a.isPropagationStopped())break t;u=r,a.currentTarget=x;try{u(a)}catch(O){eu(O)}a.currentTarget=null,u=m}else for(i=0;i<n.length;i++){if(r=n[i],m=r.instance,x=r.currentTarget,r=r.listener,m!==u&&a.isPropagationStopped())break t;u=r,a.currentTarget=x;try{u(a)}catch(O){eu(O)}a.currentTarget=null,u=m}}}}function at(t,e){var l=e[vi];l===void 0&&(l=e[vi]=new Set);var n=t+"__bubble";l.has(n)||(hs(e,t,2,!1),l.add(n))}function cc(t,e,l){var n=0;e&&(n|=4),hs(l,t,n,e)}var wu="_reactListening"+Math.random().toString(36).slice(2);function rc(t){if(!t[wu]){t[wu]=!0,ur.forEach(function(l){l!=="selectionchange"&&(zh.has(l)||cc(l,!1,t),cc(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wu]||(e[wu]=!0,cc("selectionchange",!1,e))}}function hs(t,e,l,n){switch(Xs(e)){case 2:var a=t1;break;case 8:a=e1;break;default:a=jc}l=a.bind(null,e,l,t),a=void 0,!Mi||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),n?a!==void 0?t.addEventListener(e,l,{capture:!0,passive:a}):t.addEventListener(e,l,!0):a!==void 0?t.addEventListener(e,l,{passive:a}):t.addEventListener(e,l,!1)}function dc(t,e,l,n,a){var u=n;if((e&1)===0&&(e&2)===0&&n!==null)t:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var r=n.stateNode.containerInfo;if(r===a)break;if(i===4)for(i=n.return;i!==null;){var m=i.tag;if((m===3||m===4)&&i.stateNode.containerInfo===a)return;i=i.return}for(;r!==null;){if(i=Pl(r),i===null)return;if(m=i.tag,m===5||m===6||m===26||m===27){n=u=i;continue t}r=r.parentNode}}n=n.return}gr(function(){var x=u,O=zi(l),D=[];t:{var E=Vr.get(t);if(E!==void 0){var z=Ia,q=t;switch(t){case"keypress":if($a(l)===0)break t;case"keydown":case"keyup":z=v2;break;case"focusin":q="focus",z=Ci;break;case"focusout":q="blur",z=Ci;break;case"beforeblur":case"afterblur":z=Ci;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=Sr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=f2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=x2;break;case wr:case Xr:case Qr:z=d2;break;case Zr:z=j2;break;case"scroll":case"scrollend":z=u2;break;case"wheel":z=z2;break;case"copy":case"cut":case"paste":z=s2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=xr;break;case"toggle":case"beforetoggle":z=M2}var J=(e&4)!==0,yt=!J&&(t==="scroll"||t==="scrollend"),S=J?E!==null?E+"Capture":null:E;J=[];for(var b=x,_;b!==null;){var C=b;if(_=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||_===null||S===null||(C=Zn(b,S),C!=null&&J.push(Ea(b,C,_))),yt)break;b=b.return}0<J.length&&(E=new z(E,q,null,l,O),D.push({event:E,listeners:J}))}}if((e&7)===0){t:{if(E=t==="mouseover"||t==="pointerover",z=t==="mouseout"||t==="pointerout",E&&l!==Ti&&(q=l.relatedTarget||l.fromElement)&&(Pl(q)||q[Il]))break t;if((z||E)&&(E=O.window===O?O:(E=O.ownerDocument)?E.defaultView||E.parentWindow:window,z?(q=l.relatedTarget||l.toElement,z=x,q=q?Pl(q):null,q!==null&&(yt=s(q),J=q.tag,q!==yt||J!==5&&J!==27&&J!==6)&&(q=null)):(z=null,q=x),z!==q)){if(J=Sr,C="onMouseLeave",S="onMouseEnter",b="mouse",(t==="pointerout"||t==="pointerover")&&(J=xr,C="onPointerLeave",S="onPointerEnter",b="pointer"),yt=z==null?E:Qn(z),_=q==null?E:Qn(q),E=new J(C,b+"leave",z,l,O),E.target=yt,E.relatedTarget=_,C=null,Pl(O)===x&&(J=new J(S,b+"enter",q,l,O),J.target=_,J.relatedTarget=yt,C=J),yt=C,z&&q)e:{for(J=Ah,S=z,b=q,_=0,C=S;C;C=J(C))_++;C=0;for(var V=b;V;V=J(V))C++;for(;0<_-C;)S=J(S),_--;for(;0<C-_;)b=J(b),C--;for(;_--;){if(S===b||b!==null&&S===b.alternate){J=S;break e}S=J(S),b=J(b)}J=null}else J=null;z!==null&&ms(D,E,z,J,!1),q!==null&&yt!==null&&ms(D,yt,q,J,!0)}}t:{if(E=x?Qn(x):window,z=E.nodeName&&E.nodeName.toLowerCase(),z==="select"||z==="input"&&E.type==="file")var ct=Or;else if(Mr(E))if(Nr)ct=L2;else{ct=B2;var Q=H2}else z=E.nodeName,!z||z.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?x&&ji(x.elementType)&&(ct=Or):ct=G2;if(ct&&(ct=ct(t,x))){Rr(D,ct,l,O);break t}Q&&Q(t,E,x),t==="focusout"&&x&&E.type==="number"&&x.memoizedProps.value!=null&&Ei(E,"number",E.value)}switch(Q=x?Qn(x):window,t){case"focusin":(Mr(Q)||Q.contentEditable==="true")&&(rn=Q,Li=x,In=null);break;case"focusout":In=Li=rn=null;break;case"mousedown":qi=!0;break;case"contextmenu":case"mouseup":case"dragend":qi=!1,qr(D,l,O);break;case"selectionchange":if(Y2)break;case"keydown":case"keyup":qr(D,l,O)}var et;if(Ui)t:{switch(t){case"compositionstart":var it="onCompositionStart";break t;case"compositionend":it="onCompositionEnd";break t;case"compositionupdate":it="onCompositionUpdate";break t}it=void 0}else cn?zr(t,l)&&(it="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(it="onCompositionStart");it&&(Er&&l.locale!=="ko"&&(cn||it!=="onCompositionStart"?it==="onCompositionEnd"&&cn&&(et=yr()):(ul=O,Ri="value"in ul?ul.value:ul.textContent,cn=!0)),Q=Xu(x,it),0<Q.length&&(it=new _r(it,t,null,l,O),D.push({event:it,listeners:Q}),et?it.data=et:(et=Ar(l),et!==null&&(it.data=et)))),(et=O2?N2(t,l):C2(t,l))&&(it=Xu(x,"onBeforeInput"),0<it.length&&(Q=new _r("onBeforeInput","beforeinput",null,l,O),D.push({event:Q,listeners:it}),Q.data=et)),Eh(D,t,x,l,O)}ss(D,e)})}function Ea(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Xu(t,e){for(var l=e+"Capture",n=[];t!==null;){var a=t,u=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||u===null||(a=Zn(t,l),a!=null&&n.unshift(Ea(t,a,u)),a=Zn(t,e),a!=null&&n.push(Ea(t,a,u))),t.tag===3)return n;t=t.return}return[]}function Ah(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ms(t,e,l,n,a){for(var u=e._reactName,i=[];l!==null&&l!==n;){var r=l,m=r.alternate,x=r.stateNode;if(r=r.tag,m!==null&&m===n)break;r!==5&&r!==26&&r!==27||x===null||(m=x,a?(x=Zn(l,u),x!=null&&i.unshift(Ea(l,x,m))):a||(x=Zn(l,u),x!=null&&i.push(Ea(l,x,m)))),l=l.return}i.length!==0&&t.push({event:e,listeners:i})}var Mh=/\r\n?/g,Rh=/\u0000|\uFFFD/g;function ps(t){return(typeof t=="string"?t:""+t).replace(Mh,`
`).replace(Rh,"")}function bs(t,e){return e=ps(e),ps(t)===e}function gt(t,e,l,n,a,u){switch(l){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||an(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&an(t,""+n);break;case"className":Ka(t,"class",n);break;case"tabIndex":Ka(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Ka(t,l,n);break;case"style":pr(t,n,u);break;case"data":if(e!=="object"){Ka(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(l);break}n=ka(""+n),t.setAttribute(l,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(e!=="input"&&gt(t,e,"name",a.name,a,null),gt(t,e,"formEncType",a.formEncType,a,null),gt(t,e,"formMethod",a.formMethod,a,null),gt(t,e,"formTarget",a.formTarget,a,null)):(gt(t,e,"encType",a.encType,a,null),gt(t,e,"method",a.method,a,null),gt(t,e,"target",a.target,a,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(l);break}n=ka(""+n),t.setAttribute(l,n);break;case"onClick":n!=null&&(t.onclick=Le);break;case"onScroll":n!=null&&at("scroll",t);break;case"onScrollEnd":n!=null&&at("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(c(60));t.innerHTML=l}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}l=ka(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(l,""+n):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":n===!0?t.setAttribute(l,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(l,n):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(l,n):t.removeAttribute(l);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(l):t.setAttribute(l,n);break;case"popover":at("beforetoggle",t),at("toggle",t),Va(t,"popover",n);break;case"xlinkActuate":Ge(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Ge(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Ge(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Ge(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Ge(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Ge(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Va(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=n2.get(l)||l,Va(t,l,n))}}function oc(t,e,l,n,a,u){switch(l){case"style":pr(t,n,u);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(c(60));t.innerHTML=l}}break;case"children":typeof n=="string"?an(t,n):(typeof n=="number"||typeof n=="bigint")&&an(t,""+n);break;case"onScroll":n!=null&&at("scroll",t);break;case"onScrollEnd":n!=null&&at("scrollend",t);break;case"onClick":n!=null&&(t.onclick=Le);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ir.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(a=l.endsWith("Capture"),e=l.slice(2,a?l.length-7:void 0),u=t[$t]||null,u=u!=null?u[l]:null,typeof u=="function"&&t.removeEventListener(e,u,a),typeof n=="function")){typeof u!="function"&&u!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,n,a);break t}l in t?t[l]=n:n===!0?t.setAttribute(l,""):Va(t,l,n)}}}function Vt(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":at("error",t),at("load",t);var n=!1,a=!1,u;for(u in l)if(l.hasOwnProperty(u)){var i=l[u];if(i!=null)switch(u){case"src":n=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,e));default:gt(t,e,u,i,l,null)}}a&&gt(t,e,"srcSet",l.srcSet,l,null),n&&gt(t,e,"src",l.src,l,null);return;case"input":at("invalid",t);var r=u=i=a=null,m=null,x=null;for(n in l)if(l.hasOwnProperty(n)){var O=l[n];if(O!=null)switch(n){case"name":a=O;break;case"type":i=O;break;case"checked":m=O;break;case"defaultChecked":x=O;break;case"value":u=O;break;case"defaultValue":r=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(c(137,e));break;default:gt(t,e,n,O,l,null)}}or(t,u,r,m,x,i,a,!1);return;case"select":at("invalid",t),n=i=u=null;for(a in l)if(l.hasOwnProperty(a)&&(r=l[a],r!=null))switch(a){case"value":u=r;break;case"defaultValue":i=r;break;case"multiple":n=r;default:gt(t,e,a,r,l,null)}e=u,l=i,t.multiple=!!n,e!=null?nn(t,!!n,e,!1):l!=null&&nn(t,!!n,l,!0);return;case"textarea":at("invalid",t),u=a=n=null;for(i in l)if(l.hasOwnProperty(i)&&(r=l[i],r!=null))switch(i){case"value":n=r;break;case"defaultValue":a=r;break;case"children":u=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:gt(t,e,i,r,l,null)}hr(t,n,a,u);return;case"option":for(m in l)if(l.hasOwnProperty(m)&&(n=l[m],n!=null))switch(m){case"selected":t.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:gt(t,e,m,n,l,null)}return;case"dialog":at("beforetoggle",t),at("toggle",t),at("cancel",t),at("close",t);break;case"iframe":case"object":at("load",t);break;case"video":case"audio":for(n=0;n<xa.length;n++)at(xa[n],t);break;case"image":at("error",t),at("load",t);break;case"details":at("toggle",t);break;case"embed":case"source":case"link":at("error",t),at("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in l)if(l.hasOwnProperty(x)&&(n=l[x],n!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,e));default:gt(t,e,x,n,l,null)}return;default:if(ji(e)){for(O in l)l.hasOwnProperty(O)&&(n=l[O],n!==void 0&&oc(t,e,O,n,l,void 0));return}}for(r in l)l.hasOwnProperty(r)&&(n=l[r],n!=null&&gt(t,e,r,n,l,null))}function Oh(t,e,l,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,u=null,i=null,r=null,m=null,x=null,O=null;for(z in l){var D=l[z];if(l.hasOwnProperty(z)&&D!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":m=D;default:n.hasOwnProperty(z)||gt(t,e,z,null,n,D)}}for(var E in n){var z=n[E];if(D=l[E],n.hasOwnProperty(E)&&(z!=null||D!=null))switch(E){case"type":u=z;break;case"name":a=z;break;case"checked":x=z;break;case"defaultChecked":O=z;break;case"value":i=z;break;case"defaultValue":r=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(c(137,e));break;default:z!==D&&gt(t,e,E,z,n,D)}}xi(t,i,r,m,x,O,u,a);return;case"select":z=i=r=E=null;for(u in l)if(m=l[u],l.hasOwnProperty(u)&&m!=null)switch(u){case"value":break;case"multiple":z=m;default:n.hasOwnProperty(u)||gt(t,e,u,null,n,m)}for(a in n)if(u=n[a],m=l[a],n.hasOwnProperty(a)&&(u!=null||m!=null))switch(a){case"value":E=u;break;case"defaultValue":r=u;break;case"multiple":i=u;default:u!==m&&gt(t,e,a,u,n,m)}e=r,l=i,n=z,E!=null?nn(t,!!l,E,!1):!!n!=!!l&&(e!=null?nn(t,!!l,e,!0):nn(t,!!l,l?[]:"",!1));return;case"textarea":z=E=null;for(r in l)if(a=l[r],l.hasOwnProperty(r)&&a!=null&&!n.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:gt(t,e,r,null,n,a)}for(i in n)if(a=n[i],u=l[i],n.hasOwnProperty(i)&&(a!=null||u!=null))switch(i){case"value":E=a;break;case"defaultValue":z=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(c(91));break;default:a!==u&&gt(t,e,i,a,n,u)}sr(t,E,z);return;case"option":for(var q in l)if(E=l[q],l.hasOwnProperty(q)&&E!=null&&!n.hasOwnProperty(q))switch(q){case"selected":t.selected=!1;break;default:gt(t,e,q,null,n,E)}for(m in n)if(E=n[m],z=l[m],n.hasOwnProperty(m)&&E!==z&&(E!=null||z!=null))switch(m){case"selected":t.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:gt(t,e,m,E,n,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var J in l)E=l[J],l.hasOwnProperty(J)&&E!=null&&!n.hasOwnProperty(J)&&gt(t,e,J,null,n,E);for(x in n)if(E=n[x],z=l[x],n.hasOwnProperty(x)&&E!==z&&(E!=null||z!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(c(137,e));break;default:gt(t,e,x,E,n,z)}return;default:if(ji(e)){for(var yt in l)E=l[yt],l.hasOwnProperty(yt)&&E!==void 0&&!n.hasOwnProperty(yt)&&oc(t,e,yt,void 0,n,E);for(O in n)E=n[O],z=l[O],!n.hasOwnProperty(O)||E===z||E===void 0&&z===void 0||oc(t,e,O,E,n,z);return}}for(var S in l)E=l[S],l.hasOwnProperty(S)&&E!=null&&!n.hasOwnProperty(S)&&gt(t,e,S,null,n,E);for(D in n)E=n[D],z=l[D],!n.hasOwnProperty(D)||E===z||E==null&&z==null||gt(t,e,D,E,n,z)}function gs(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Nh(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),n=0;n<l.length;n++){var a=l[n],u=a.transferSize,i=a.initiatorType,r=a.duration;if(u&&r&&gs(i)){for(i=0,r=a.responseEnd,n+=1;n<l.length;n++){var m=l[n],x=m.startTime;if(x>r)break;var O=m.transferSize,D=m.initiatorType;O&&gs(D)&&(m=m.responseEnd,i+=O*(m<r?1:(r-x)/(m-x)))}if(--n,e+=8*(u+i)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var sc=null,hc=null;function Qu(t){return t.nodeType===9?t:t.ownerDocument}function ys(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vs(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function mc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var pc=null;function Ch(){var t=window.event;return t&&t.type==="popstate"?t===pc?!1:(pc=t,!0):(pc=null,!1)}var Ss=typeof setTimeout=="function"?setTimeout:void 0,Dh=typeof clearTimeout=="function"?clearTimeout:void 0,_s=typeof Promise=="function"?Promise:void 0,Uh=typeof queueMicrotask=="function"?queueMicrotask:typeof _s<"u"?function(t){return _s.resolve(null).then(t).catch(Hh)}:Ss;function Hh(t){setTimeout(function(){throw t})}function xl(t){return t==="head"}function xs(t,e){var l=e,n=0;do{var a=l.nextSibling;if(t.removeChild(l),a&&a.nodeType===8)if(l=a.data,l==="/$"||l==="/&"){if(n===0){t.removeChild(a),Bn(e);return}n--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")n++;else if(l==="html")ja(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,ja(l);for(var u=l.firstChild;u;){var i=u.nextSibling,r=u.nodeName;u[Xn]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=i}}else l==="body"&&ja(t.ownerDocument.body);l=a}while(l);Bn(e)}function Es(t,e){var l=t;t=0;do{var n=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),n&&n.nodeType===8)if(l=n.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=n}while(l)}function bc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":bc(l),Si(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Bh(t,e,l,n){for(;t.nodeType===1;){var a=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[Xn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=xe(t.nextSibling),t===null)break}return null}function Gh(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=xe(t.nextSibling),t===null))return null;return t}function js(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=xe(t.nextSibling),t===null))return null;return t}function gc(t){return t.data==="$?"||t.data==="$~"}function yc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Lh(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var n=function(){e(),l.removeEventListener("DOMContentLoaded",n)};l.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function xe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var vc=null;function Ts(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return xe(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function zs(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function As(t,e,l){switch(e=Qu(l),t){case"html":if(t=e.documentElement,!t)throw Error(c(452));return t;case"head":if(t=e.head,!t)throw Error(c(453));return t;case"body":if(t=e.body,!t)throw Error(c(454));return t;default:throw Error(c(451))}}function ja(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Si(t)}var Ee=new Map,Ms=new Set;function Zu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var tl=B.d;B.d={f:qh,r:Yh,D:wh,C:Xh,L:Qh,m:Zh,X:Kh,S:Vh,M:Jh};function qh(){var t=tl.f(),e=Hu();return t||e}function Yh(t){var e=tn(t);e!==null&&e.tag===5&&e.type==="form"?Zd(e):tl.r(t)}var Dn=typeof document>"u"?null:document;function Rs(t,e,l){var n=Dn;if(n&&typeof e=="string"&&e){var a=pe(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof l=="string"&&(a+='[crossorigin="'+l+'"]'),Ms.has(a)||(Ms.add(a),t={rel:t,crossOrigin:l,href:e},n.querySelector(a)===null&&(e=n.createElement("link"),Vt(e,"link",t),Lt(e),n.head.appendChild(e)))}}function wh(t){tl.D(t),Rs("dns-prefetch",t,null)}function Xh(t,e){tl.C(t,e),Rs("preconnect",t,e)}function Qh(t,e,l){tl.L(t,e,l);var n=Dn;if(n&&t&&e){var a='link[rel="preload"][as="'+pe(e)+'"]';e==="image"&&l&&l.imageSrcSet?(a+='[imagesrcset="'+pe(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(a+='[imagesizes="'+pe(l.imageSizes)+'"]')):a+='[href="'+pe(t)+'"]';var u=a;switch(e){case"style":u=Un(t);break;case"script":u=Hn(t)}Ee.has(u)||(t=j({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Ee.set(u,t),n.querySelector(a)!==null||e==="style"&&n.querySelector(Ta(u))||e==="script"&&n.querySelector(za(u))||(e=n.createElement("link"),Vt(e,"link",t),Lt(e),n.head.appendChild(e)))}}function Zh(t,e){tl.m(t,e);var l=Dn;if(l&&t){var n=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+pe(n)+'"][href="'+pe(t)+'"]',u=a;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Hn(t)}if(!Ee.has(u)&&(t=j({rel:"modulepreload",href:t},e),Ee.set(u,t),l.querySelector(a)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(za(u)))return}n=l.createElement("link"),Vt(n,"link",t),Lt(n),l.head.appendChild(n)}}}function Vh(t,e,l){tl.S(t,e,l);var n=Dn;if(n&&t){var a=en(n).hoistableStyles,u=Un(t);e=e||"default";var i=a.get(u);if(!i){var r={loading:0,preload:null};if(i=n.querySelector(Ta(u)))r.loading=5;else{t=j({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Ee.get(u))&&Sc(t,l);var m=i=n.createElement("link");Lt(m),Vt(m,"link",t),m._p=new Promise(function(x,O){m.onload=x,m.onerror=O}),m.addEventListener("load",function(){r.loading|=1}),m.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Vu(i,e,n)}i={type:"stylesheet",instance:i,count:1,state:r},a.set(u,i)}}}function Kh(t,e){tl.X(t,e);var l=Dn;if(l&&t){var n=en(l).hoistableScripts,a=Hn(t),u=n.get(a);u||(u=l.querySelector(za(a)),u||(t=j({src:t,async:!0},e),(e=Ee.get(a))&&_c(t,e),u=l.createElement("script"),Lt(u),Vt(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(a,u))}}function Jh(t,e){tl.M(t,e);var l=Dn;if(l&&t){var n=en(l).hoistableScripts,a=Hn(t),u=n.get(a);u||(u=l.querySelector(za(a)),u||(t=j({src:t,async:!0,type:"module"},e),(e=Ee.get(a))&&_c(t,e),u=l.createElement("script"),Lt(u),Vt(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(a,u))}}function Os(t,e,l,n){var a=(a=lt.current)?Zu(a):null;if(!a)throw Error(c(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Un(l.href),l=en(a).hoistableStyles,n=l.get(e),n||(n={type:"style",instance:null,count:0,state:null},l.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Un(l.href);var u=en(a).hoistableStyles,i=u.get(t);if(i||(a=a.ownerDocument||a,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,i),(u=a.querySelector(Ta(t)))&&!u._p&&(i.instance=u,i.state.loading=5),Ee.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ee.set(t,l),u||kh(a,t,l,i.state))),e&&n===null)throw Error(c(528,""));return i}if(e&&n!==null)throw Error(c(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Hn(l),l=en(a).hoistableScripts,n=l.get(e),n||(n={type:"script",instance:null,count:0,state:null},l.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,t))}}function Un(t){return'href="'+pe(t)+'"'}function Ta(t){return'link[rel="stylesheet"]['+t+"]"}function Ns(t){return j({},t,{"data-precedence":t.precedence,precedence:null})}function kh(t,e,l,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),Vt(e,"link",l),Lt(e),t.head.appendChild(e))}function Hn(t){return'[src="'+pe(t)+'"]'}function za(t){return"script[async]"+t}function Cs(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+pe(l.href)+'"]');if(n)return e.instance=n,Lt(n),n;var a=j({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),Lt(n),Vt(n,"style",a),Vu(n,l.precedence,t),e.instance=n;case"stylesheet":a=Un(l.href);var u=t.querySelector(Ta(a));if(u)return e.state.loading|=4,e.instance=u,Lt(u),u;n=Ns(l),(a=Ee.get(a))&&Sc(n,a),u=(t.ownerDocument||t).createElement("link"),Lt(u);var i=u;return i._p=new Promise(function(r,m){i.onload=r,i.onerror=m}),Vt(u,"link",n),e.state.loading|=4,Vu(u,l.precedence,t),e.instance=u;case"script":return u=Hn(l.src),(a=t.querySelector(za(u)))?(e.instance=a,Lt(a),a):(n=l,(a=Ee.get(u))&&(n=j({},l),_c(n,a)),t=t.ownerDocument||t,a=t.createElement("script"),Lt(a),Vt(a,"link",n),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(c(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,Vu(n,l.precedence,t));return e.instance}function Vu(t,e,l){for(var n=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=n.length?n[n.length-1]:null,u=a,i=0;i<n.length;i++){var r=n[i];if(r.dataset.precedence===e)u=r;else if(u!==a)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function Sc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function _c(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ku=null;function Ds(t,e,l){if(Ku===null){var n=new Map,a=Ku=new Map;a.set(l,n)}else a=Ku,n=a.get(l),n||(n=new Map,a.set(l,n));if(n.has(t))return n;for(n.set(t,null),l=l.getElementsByTagName(t),a=0;a<l.length;a++){var u=l[a];if(!(u[Xn]||u[wt]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(e)||"";i=t+i;var r=n.get(i);r?r.push(u):n.set(i,[u])}}return n}function Us(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Wh(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Hs(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function $h(t,e,l,n){if(l.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var a=Un(n.href),u=e.querySelector(Ta(a));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Ju.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=u,Lt(u);return}u=e.ownerDocument||e,n=Ns(n),(a=Ee.get(a))&&Sc(n,a),u=u.createElement("link"),Lt(u);var i=u;i._p=new Promise(function(r,m){i.onload=r,i.onerror=m}),Vt(u,"link",n),l.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=Ju.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var xc=0;function Fh(t,e){return t.stylesheets&&t.count===0&&Wu(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var n=setTimeout(function(){if(t.stylesheets&&Wu(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&xc===0&&(xc=62500*Nh());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Wu(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>xc?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(n),clearTimeout(a)}}:null}function Ju(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ku=null;function Wu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ku=new Map,e.forEach(Ih,t),ku=null,Ju.call(t))}function Ih(t,e){if(!(e.state.loading&4)){var l=ku.get(t);if(l)var n=l.get(null);else{l=new Map,ku.set(t,l);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<a.length;u++){var i=a[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(l.set(i.dataset.precedence,i),n=i)}n&&l.set(null,n)}a=e.instance,i=a.getAttribute("data-precedence"),u=l.get(i)||n,u===n&&l.set(null,a),l.set(i,a),this.count++,n=Ju.bind(this),a.addEventListener("load",n),a.addEventListener("error",n),u?u.parentNode.insertBefore(a,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var Aa={$$typeof:L,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function Ph(t,e,l,n,a,u,i,r,m){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bi(0),this.hiddenUpdates=bi(null),this.identifierPrefix=n,this.onUncaughtError=a,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function Bs(t,e,l,n,a,u,i,r,m,x,O,D){return t=new Ph(t,e,l,i,m,x,O,D,r),e=1,u===!0&&(e|=24),u=fe(3,null,null,e),t.current=u,u.stateNode=t,e=tf(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:n,isDehydrated:l,cache:e},af(u),t}function Gs(t){return t?(t=sn,t):sn}function Ls(t,e,l,n,a,u){a=Gs(a),n.context===null?n.context=a:n.pendingContext=a,n=ol(e),n.payload={element:l},u=u===void 0?null:u,u!==null&&(n.callback=u),l=sl(t,n,e),l!==null&&(le(l,t,e),ua(l,t,e))}function qs(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function Ec(t,e){qs(t,e),(t=t.alternate)&&qs(t,e)}function Ys(t){if(t.tag===13||t.tag===31){var e=Gl(t,67108864);e!==null&&le(e,t,67108864),Ec(t,67108864)}}function ws(t){if(t.tag===13||t.tag===31){var e=se();e=gi(e);var l=Gl(t,e);l!==null&&le(l,t,e),Ec(t,e)}}var $u=!0;function t1(t,e,l,n){var a=N.T;N.T=null;var u=B.p;try{B.p=2,jc(t,e,l,n)}finally{B.p=u,N.T=a}}function e1(t,e,l,n){var a=N.T;N.T=null;var u=B.p;try{B.p=8,jc(t,e,l,n)}finally{B.p=u,N.T=a}}function jc(t,e,l,n){if($u){var a=Tc(n);if(a===null)dc(t,e,n,Fu,l),Qs(t,n);else if(n1(a,t,e,l,n))n.stopPropagation();else if(Qs(t,n),e&4&&-1<l1.indexOf(t)){for(;a!==null;){var u=tn(a);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=Cl(u.pendingLanes);if(i!==0){var r=u;for(r.pendingLanes|=2,r.entangledLanes|=2;i;){var m=1<<31-ue(i);r.entanglements[1]|=m,i&=~m}Ue(u),(dt&6)===0&&(Du=ne()+500,_a(0))}}break;case 31:case 13:r=Gl(u,2),r!==null&&le(r,u,2),Hu(),Ec(u,2)}if(u=Tc(n),u===null&&dc(t,e,n,Fu,l),u===a)break;a=u}a!==null&&n.stopPropagation()}else dc(t,e,n,null,l)}}function Tc(t){return t=zi(t),zc(t)}var Fu=null;function zc(t){if(Fu=null,t=Pl(t),t!==null){var e=s(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=g(e),t!==null)return t;t=null}else if(l===31){if(t=A(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Fu=t,null}function Xs(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(w0()){case Wc:return 2;case $c:return 8;case Ya:case X0:return 32;case Fc:return 268435456;default:return 32}default:return 32}}var Ac=!1,El=null,jl=null,Tl=null,Ma=new Map,Ra=new Map,zl=[],l1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qs(t,e){switch(t){case"focusin":case"focusout":El=null;break;case"dragenter":case"dragleave":jl=null;break;case"mouseover":case"mouseout":Tl=null;break;case"pointerover":case"pointerout":Ma.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ra.delete(e.pointerId)}}function Oa(t,e,l,n,a,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:l,eventSystemFlags:n,nativeEvent:u,targetContainers:[a]},e!==null&&(e=tn(e),e!==null&&Ys(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function n1(t,e,l,n,a){switch(e){case"focusin":return El=Oa(El,t,e,l,n,a),!0;case"dragenter":return jl=Oa(jl,t,e,l,n,a),!0;case"mouseover":return Tl=Oa(Tl,t,e,l,n,a),!0;case"pointerover":var u=a.pointerId;return Ma.set(u,Oa(Ma.get(u)||null,t,e,l,n,a)),!0;case"gotpointercapture":return u=a.pointerId,Ra.set(u,Oa(Ra.get(u)||null,t,e,l,n,a)),!0}return!1}function Zs(t){var e=Pl(t.target);if(e!==null){var l=s(e);if(l!==null){if(e=l.tag,e===13){if(e=g(l),e!==null){t.blockedOn=e,nr(t.priority,function(){ws(l)});return}}else if(e===31){if(e=A(l),e!==null){t.blockedOn=e,nr(t.priority,function(){ws(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Iu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=Tc(t.nativeEvent);if(l===null){l=t.nativeEvent;var n=new l.constructor(l.type,l);Ti=n,l.target.dispatchEvent(n),Ti=null}else return e=tn(l),e!==null&&Ys(e),t.blockedOn=l,!1;e.shift()}return!0}function Vs(t,e,l){Iu(t)&&l.delete(e)}function a1(){Ac=!1,El!==null&&Iu(El)&&(El=null),jl!==null&&Iu(jl)&&(jl=null),Tl!==null&&Iu(Tl)&&(Tl=null),Ma.forEach(Vs),Ra.forEach(Vs)}function Pu(t,e){t.blockedOn===e&&(t.blockedOn=null,Ac||(Ac=!0,f.unstable_scheduleCallback(f.unstable_NormalPriority,a1)))}var ti=null;function Ks(t){ti!==t&&(ti=t,f.unstable_scheduleCallback(f.unstable_NormalPriority,function(){ti===t&&(ti=null);for(var e=0;e<t.length;e+=3){var l=t[e],n=t[e+1],a=t[e+2];if(typeof n!="function"){if(zc(n||l)===null)continue;break}var u=tn(l);u!==null&&(t.splice(e,3),e-=3,Tf(u,{pending:!0,data:a,method:l.method,action:n},n,a))}}))}function Bn(t){function e(m){return Pu(m,t)}El!==null&&Pu(El,t),jl!==null&&Pu(jl,t),Tl!==null&&Pu(Tl,t),Ma.forEach(e),Ra.forEach(e);for(var l=0;l<zl.length;l++){var n=zl[l];n.blockedOn===t&&(n.blockedOn=null)}for(;0<zl.length&&(l=zl[0],l.blockedOn===null);)Zs(l),l.blockedOn===null&&zl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(n=0;n<l.length;n+=3){var a=l[n],u=l[n+1],i=a[$t]||null;if(typeof u=="function")i||Ks(l);else if(i){var r=null;if(u&&u.hasAttribute("formAction")){if(a=u,i=u[$t]||null)r=i.formAction;else if(zc(a)!==null)continue}else r=i.action;typeof r=="function"?l[n+1]=r:(l.splice(n,3),n-=3),Ks(l)}}}function Js(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return a=i})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),n||setTimeout(l,20)}function l(){if(!n&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){n=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function Mc(t){this._internalRoot=t}ei.prototype.render=Mc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(c(409));var l=e.current,n=se();Ls(l,n,t,e,null,null)},ei.prototype.unmount=Mc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ls(t.current,2,null,t,null,null),Hu(),e[Il]=null}};function ei(t){this._internalRoot=t}ei.prototype.unstable_scheduleHydration=function(t){if(t){var e=lr();t={blockedOn:null,target:t,priority:e};for(var l=0;l<zl.length&&e!==0&&e<zl[l].priority;l++);zl.splice(l,0,t),l===0&&Zs(t)}};var ks=d.version;if(ks!=="19.2.4")throw Error(c(527,ks,"19.2.4"));B.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(c(188)):(t=Object.keys(t).join(","),Error(c(268,t)));return t=p(e),t=t!==null?T(t):null,t=t===null?null:t.stateNode,t};var u1={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!li.isDisabled&&li.supportsFiber)try{qn=li.inject(u1),ae=li}catch{}}return Ca.createRoot=function(t,e){if(!h(t))throw Error(c(299));var l=!1,n="",a=to,u=eo,i=lo;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Bs(t,1,!1,null,null,l,n,null,a,u,i,Js),t[Il]=e.current,rc(t),new Mc(e)},Ca.hydrateRoot=function(t,e,l){if(!h(t))throw Error(c(299));var n=!1,a="",u=to,i=eo,r=lo,m=null;return l!=null&&(l.unstable_strictMode===!0&&(n=!0),l.identifierPrefix!==void 0&&(a=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(r=l.onRecoverableError),l.formState!==void 0&&(m=l.formState)),e=Bs(t,1,!0,e,l??null,n,a,m,u,i,r,Js),e.context=Gs(null),l=e.current,n=se(),n=gi(n),a=ol(n),a.callback=null,sl(l,a,n),l=n,e.current.lanes=l,wn(e,l),Ue(e),t[Il]=e.current,rc(t),new ei(e)},Ca.version="19.2.4",Ca}var a0;function p1(){if(a0)return Nc.exports;a0=1;function f(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)}catch(d){console.error(d)}}return f(),Nc.exports=m1(),Nc.exports}var b1=p1();const g1=o0(b1);/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var u0="popstate";function y1(f={}){function d(h,s){let{pathname:g="/",search:A="",hash:v=""}=$l(h.location.hash.substring(1));return!g.startsWith("/")&&!g.startsWith(".")&&(g="/"+g),Lc("",{pathname:g,search:A,hash:v},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function o(h,s){let g=h.document.querySelector("base"),A="";if(g&&g.getAttribute("href")){let v=h.location.href,p=v.indexOf("#");A=p===-1?v:v.slice(0,p)}return A+"#"+(typeof s=="string"?s:Ha(s))}function c(h,s){Re(h.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(s)})`)}return S1(d,o,c,f)}function zt(f,d){if(f===!1||f===null||typeof f>"u")throw new Error(d)}function Re(f,d){if(!f){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function v1(){return Math.random().toString(36).substring(2,10)}function i0(f,d){return{usr:f.state,key:f.key,idx:d}}function Lc(f,d,o=null,c){return{pathname:typeof f=="string"?f:f.pathname,search:"",hash:"",...typeof d=="string"?$l(d):d,state:o,key:d&&d.key||c||v1()}}function Ha({pathname:f="/",search:d="",hash:o=""}){return d&&d!=="?"&&(f+=d.charAt(0)==="?"?d:"?"+d),o&&o!=="#"&&(f+=o.charAt(0)==="#"?o:"#"+o),f}function $l(f){let d={};if(f){let o=f.indexOf("#");o>=0&&(d.hash=f.substring(o),f=f.substring(0,o));let c=f.indexOf("?");c>=0&&(d.search=f.substring(c),f=f.substring(0,c)),f&&(d.pathname=f)}return d}function S1(f,d,o,c={}){let{window:h=document.defaultView,v5Compat:s=!1}=c,g=h.history,A="POP",v=null,p=T();p==null&&(p=0,g.replaceState({...g.state,idx:p},""));function T(){return(g.state||{idx:null}).idx}function j(){A="POP";let Y=T(),K=Y==null?null:Y-p;p=Y,v&&v({action:A,location:Z.location,delta:K})}function H(Y,K){A="PUSH";let $=Lc(Z.location,Y,K);o&&o($,Y),p=T()+1;let L=i0($,p),vt=Z.createHref($);try{g.pushState(L,"",vt)}catch(mt){if(mt instanceof DOMException&&mt.name==="DataCloneError")throw mt;h.location.assign(vt)}s&&v&&v({action:A,location:Z.location,delta:1})}function X(Y,K){A="REPLACE";let $=Lc(Z.location,Y,K);o&&o($,Y),p=T();let L=i0($,p),vt=Z.createHref($);g.replaceState(L,"",vt),s&&v&&v({action:A,location:Z.location,delta:0})}function W(Y){return _1(Y)}let Z={get action(){return A},get location(){return f(h,g)},listen(Y){if(v)throw new Error("A history only accepts one active listener");return h.addEventListener(u0,j),v=Y,()=>{h.removeEventListener(u0,j),v=null}},createHref(Y){return d(h,Y)},createURL:W,encodeLocation(Y){let K=W(Y);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:H,replace:X,go(Y){return g.go(Y)}};return Z}function _1(f,d=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),zt(o,"No window.location.(origin|href) available to create URL");let c=typeof f=="string"?f:Ha(f);return c=c.replace(/ $/,"%20"),!d&&c.startsWith("//")&&(c=o+c),new URL(c,o)}function h0(f,d,o="/"){return x1(f,d,o,!1)}function x1(f,d,o,c){let h=typeof d=="string"?$l(d):d,s=ll(h.pathname||"/",o);if(s==null)return null;let g=m0(f);E1(g);let A=null;for(let v=0;A==null&&v<g.length;++v){let p=U1(s);A=C1(g[v],p,c)}return A}function m0(f,d=[],o=[],c="",h=!1){let s=(g,A,v=h,p)=>{let T={relativePath:p===void 0?g.path||"":p,caseSensitive:g.caseSensitive===!0,childrenIndex:A,route:g};if(T.relativePath.startsWith("/")){if(!T.relativePath.startsWith(c)&&v)return;zt(T.relativePath.startsWith(c),`Absolute route path "${T.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),T.relativePath=T.relativePath.slice(c.length)}let j=el([c,T.relativePath]),H=o.concat(T);g.children&&g.children.length>0&&(zt(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${j}".`),m0(g.children,d,H,j,v)),!(g.path==null&&!g.index)&&d.push({path:j,score:O1(j,g.index),routesMeta:H})};return f.forEach((g,A)=>{var v;if(g.path===""||!((v=g.path)!=null&&v.includes("?")))s(g,A);else for(let p of p0(g.path))s(g,A,!0,p)}),d}function p0(f){let d=f.split("/");if(d.length===0)return[];let[o,...c]=d,h=o.endsWith("?"),s=o.replace(/\?$/,"");if(c.length===0)return h?[s,""]:[s];let g=p0(c.join("/")),A=[];return A.push(...g.map(v=>v===""?s:[s,v].join("/"))),h&&A.push(...g),A.map(v=>f.startsWith("/")&&v===""?"/":v)}function E1(f){f.sort((d,o)=>d.score!==o.score?o.score-d.score:N1(d.routesMeta.map(c=>c.childrenIndex),o.routesMeta.map(c=>c.childrenIndex)))}var j1=/^:[\w-]+$/,T1=3,z1=2,A1=1,M1=10,R1=-2,f0=f=>f==="*";function O1(f,d){let o=f.split("/"),c=o.length;return o.some(f0)&&(c+=R1),d&&(c+=z1),o.filter(h=>!f0(h)).reduce((h,s)=>h+(j1.test(s)?T1:s===""?A1:M1),c)}function N1(f,d){return f.length===d.length&&f.slice(0,-1).every((c,h)=>c===d[h])?f[f.length-1]-d[d.length-1]:0}function C1(f,d,o=!1){let{routesMeta:c}=f,h={},s="/",g=[];for(let A=0;A<c.length;++A){let v=c[A],p=A===c.length-1,T=s==="/"?d:d.slice(s.length)||"/",j=ii({path:v.relativePath,caseSensitive:v.caseSensitive,end:p},T),H=v.route;if(!j&&p&&o&&!c[c.length-1].route.index&&(j=ii({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},T)),!j)return null;Object.assign(h,j.params),g.push({params:h,pathname:el([s,j.pathname]),pathnameBase:L1(el([s,j.pathnameBase])),route:H}),j.pathnameBase!=="/"&&(s=el([s,j.pathnameBase]))}return g}function ii(f,d){typeof f=="string"&&(f={path:f,caseSensitive:!1,end:!0});let[o,c]=D1(f.path,f.caseSensitive,f.end),h=d.match(o);if(!h)return null;let s=h[0],g=s.replace(/(.)\/+$/,"$1"),A=h.slice(1);return{params:c.reduce((p,{paramName:T,isOptional:j},H)=>{if(T==="*"){let W=A[H]||"";g=s.slice(0,s.length-W.length).replace(/(.)\/+$/,"$1")}const X=A[H];return j&&!X?p[T]=void 0:p[T]=(X||"").replace(/%2F/g,"/"),p},{}),pathname:s,pathnameBase:g,pattern:f}}function D1(f,d=!1,o=!0){Re(f==="*"||!f.endsWith("*")||f.endsWith("/*"),`Route path "${f}" will be treated as if it were "${f.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${f.replace(/\*$/,"/*")}".`);let c=[],h="^"+f.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,A,v)=>(c.push({paramName:A,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return f.endsWith("*")?(c.push({paramName:"*"}),h+=f==="*"||f==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?h+="\\/*$":f!==""&&f!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,d?void 0:"i"),c]}function U1(f){try{return f.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return Re(!1,`The URL path "${f}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),f}}function ll(f,d){if(d==="/")return f;if(!f.toLowerCase().startsWith(d.toLowerCase()))return null;let o=d.endsWith("/")?d.length-1:d.length,c=f.charAt(o);return c&&c!=="/"?null:f.slice(o)||"/"}var H1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function B1(f,d="/"){let{pathname:o,search:c="",hash:h=""}=typeof f=="string"?$l(f):f,s;return o?(o=o.replace(/\/\/+/g,"/"),o.startsWith("/")?s=c0(o.substring(1),"/"):s=c0(o,d)):s=d,{pathname:s,search:q1(c),hash:Y1(h)}}function c0(f,d){let o=d.replace(/\/+$/,"").split("/");return f.split("/").forEach(h=>{h===".."?o.length>1&&o.pop():h!=="."&&o.push(h)}),o.length>1?o.join("/"):"/"}function Hc(f,d,o,c){return`Cannot include a '${f}' character in a manually specified \`to.${d}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function G1(f){return f.filter((d,o)=>o===0||d.route.path&&d.route.path.length>0)}function b0(f){let d=G1(f);return d.map((o,c)=>c===d.length-1?o.pathname:o.pathnameBase)}function g0(f,d,o,c=!1){let h;typeof f=="string"?h=$l(f):(h={...f},zt(!h.pathname||!h.pathname.includes("?"),Hc("?","pathname","search",h)),zt(!h.pathname||!h.pathname.includes("#"),Hc("#","pathname","hash",h)),zt(!h.search||!h.search.includes("#"),Hc("#","search","hash",h)));let s=f===""||h.pathname==="",g=s?"/":h.pathname,A;if(g==null)A=o;else{let j=d.length-1;if(!c&&g.startsWith("..")){let H=g.split("/");for(;H[0]==="..";)H.shift(),j-=1;h.pathname=H.join("/")}A=j>=0?d[j]:"/"}let v=B1(h,A),p=g&&g!=="/"&&g.endsWith("/"),T=(s||g===".")&&o.endsWith("/");return!v.pathname.endsWith("/")&&(p||T)&&(v.pathname+="/"),v}var el=f=>f.join("/").replace(/\/\/+/g,"/"),L1=f=>f.replace(/\/+$/,"").replace(/^\/*/,"/"),q1=f=>!f||f==="?"?"":f.startsWith("?")?f:"?"+f,Y1=f=>!f||f==="#"?"":f.startsWith("#")?f:"#"+f,w1=class{constructor(f,d,o,c=!1){this.status=f,this.statusText=d||"",this.internal=c,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}};function X1(f){return f!=null&&typeof f.status=="number"&&typeof f.statusText=="string"&&typeof f.internal=="boolean"&&"data"in f}function Q1(f){return f.map(d=>d.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var y0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function v0(f,d){let o=f;if(typeof o!="string"||!H1.test(o))return{absoluteURL:void 0,isExternal:!1,to:o};let c=o,h=!1;if(y0)try{let s=new URL(window.location.href),g=o.startsWith("//")?new URL(s.protocol+o):new URL(o),A=ll(g.pathname,d);g.origin===s.origin&&A!=null?o=A+g.search+g.hash:h=!0}catch{Re(!1,`<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:h,to:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var S0=["POST","PUT","PATCH","DELETE"];new Set(S0);var Z1=["GET",...S0];new Set(Z1);var Gn=R.createContext(null);Gn.displayName="DataRouter";var ci=R.createContext(null);ci.displayName="DataRouterState";var V1=R.createContext(!1),_0=R.createContext({isTransitioning:!1});_0.displayName="ViewTransition";var K1=R.createContext(new Map);K1.displayName="Fetchers";var J1=R.createContext(null);J1.displayName="Await";var je=R.createContext(null);je.displayName="Navigation";var Ba=R.createContext(null);Ba.displayName="Location";var He=R.createContext({outlet:null,matches:[],isDataRoute:!1});He.displayName="Route";var wc=R.createContext(null);wc.displayName="RouteError";var x0="REACT_ROUTER_ERROR",k1="REDIRECT",W1="ROUTE_ERROR_RESPONSE";function $1(f){if(f.startsWith(`${x0}:${k1}:{`))try{let d=JSON.parse(f.slice(28));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string"&&typeof d.location=="string"&&typeof d.reloadDocument=="boolean"&&typeof d.replace=="boolean")return d}catch{}}function F1(f){if(f.startsWith(`${x0}:${W1}:{`))try{let d=JSON.parse(f.slice(40));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string")return new w1(d.status,d.statusText,d.data)}catch{}}function I1(f,{relative:d}={}){zt(Ga(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:c}=R.useContext(je),{hash:h,pathname:s,search:g}=La(f,{relative:d}),A=s;return o!=="/"&&(A=s==="/"?o:el([o,s])),c.createHref({pathname:A,search:g,hash:h})}function Ga(){return R.useContext(Ba)!=null}function Rl(){return zt(Ga(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(Ba).location}var E0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function j0(f){R.useContext(je).static||R.useLayoutEffect(f)}function Xc(){let{isDataRoute:f}=R.useContext(He);return f?sm():P1()}function P1(){zt(Ga(),"useNavigate() may be used only in the context of a <Router> component.");let f=R.useContext(Gn),{basename:d,navigator:o}=R.useContext(je),{matches:c}=R.useContext(He),{pathname:h}=Rl(),s=JSON.stringify(b0(c)),g=R.useRef(!1);return j0(()=>{g.current=!0}),R.useCallback((v,p={})=>{if(Re(g.current,E0),!g.current)return;if(typeof v=="number"){o.go(v);return}let T=g0(v,JSON.parse(s),h,p.relative==="path");f==null&&d!=="/"&&(T.pathname=T.pathname==="/"?d:el([d,T.pathname])),(p.replace?o.replace:o.push)(T,p.state,p)},[d,o,s,h,f])}R.createContext(null);function tm(){let{matches:f}=R.useContext(He),d=f[f.length-1];return d?d.params:{}}function La(f,{relative:d}={}){let{matches:o}=R.useContext(He),{pathname:c}=Rl(),h=JSON.stringify(b0(o));return R.useMemo(()=>g0(f,JSON.parse(h),c,d==="path"),[f,h,c,d])}function em(f,d){return T0(f,d)}function T0(f,d,o,c,h){var $;zt(Ga(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=R.useContext(je),{matches:g}=R.useContext(He),A=g[g.length-1],v=A?A.params:{},p=A?A.pathname:"/",T=A?A.pathnameBase:"/",j=A&&A.route;{let L=j&&j.path||"";A0(p,!j||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let H=Rl(),X;if(d){let L=typeof d=="string"?$l(d):d;zt(T==="/"||(($=L.pathname)==null?void 0:$.startsWith(T)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${T}" but pathname "${L.pathname}" was given in the \`location\` prop.`),X=L}else X=H;let W=X.pathname||"/",Z=W;if(T!=="/"){let L=T.replace(/^\//,"").split("/");Z="/"+W.replace(/^\//,"").split("/").slice(L.length).join("/")}let Y=h0(f,{pathname:Z});Re(j||Y!=null,`No routes matched location "${X.pathname}${X.search}${X.hash}" `),Re(Y==null||Y[Y.length-1].route.element!==void 0||Y[Y.length-1].route.Component!==void 0||Y[Y.length-1].route.lazy!==void 0,`Matched leaf route at location "${X.pathname}${X.search}${X.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let K=im(Y&&Y.map(L=>Object.assign({},L,{params:Object.assign({},v,L.params),pathname:el([T,s.encodeLocation?s.encodeLocation(L.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?T:el([T,s.encodeLocation?s.encodeLocation(L.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),g,o,c,h);return d&&K?R.createElement(Ba.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...X},navigationType:"POP"}},K):K}function lm(){let f=om(),d=X1(f)?`${f.status} ${f.statusText}`:f instanceof Error?f.message:JSON.stringify(f),o=f instanceof Error?f.stack:null,c="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:c},s={padding:"2px 4px",backgroundColor:c},g=null;return console.error("Error handled by React Router default ErrorBoundary:",f),g=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:s},"ErrorBoundary")," or"," ",R.createElement("code",{style:s},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},d),o?R.createElement("pre",{style:h},o):null,g)}var nm=R.createElement(lm,null),z0=class extends R.Component{constructor(f){super(f),this.state={location:f.location,revalidation:f.revalidation,error:f.error}}static getDerivedStateFromError(f){return{error:f}}static getDerivedStateFromProps(f,d){return d.location!==f.location||d.revalidation!=="idle"&&f.revalidation==="idle"?{error:f.error,location:f.location,revalidation:f.revalidation}:{error:f.error!==void 0?f.error:d.error,location:d.location,revalidation:f.revalidation||d.revalidation}}componentDidCatch(f,d){this.props.onError?this.props.onError(f,d):console.error("React Router caught the following error during render",f)}render(){let f=this.state.error;if(this.context&&typeof f=="object"&&f&&"digest"in f&&typeof f.digest=="string"){const o=F1(f.digest);o&&(f=o)}let d=f!==void 0?R.createElement(He.Provider,{value:this.props.routeContext},R.createElement(wc.Provider,{value:f,children:this.props.component})):this.props.children;return this.context?R.createElement(am,{error:f},d):d}};z0.contextType=V1;var Bc=new WeakMap;function am({children:f,error:d}){let{basename:o}=R.useContext(je);if(typeof d=="object"&&d&&"digest"in d&&typeof d.digest=="string"){let c=$1(d.digest);if(c){let h=Bc.get(d);if(h)throw h;let s=v0(c.location,o);if(y0&&!Bc.get(d))if(s.isExternal||c.reloadDocument)window.location.href=s.absoluteURL||s.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:c.replace}));throw Bc.set(d,g),g}return R.createElement("meta",{httpEquiv:"refresh",content:`0;url=${s.absoluteURL||s.to}`})}}return f}function um({routeContext:f,match:d,children:o}){let c=R.useContext(Gn);return c&&c.static&&c.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=d.route.id),R.createElement(He.Provider,{value:f},o)}function im(f,d=[],o=null,c=null,h=null){if(f==null){if(!o)return null;if(o.errors)f=o.matches;else if(d.length===0&&!o.initialized&&o.matches.length>0)f=o.matches;else return null}let s=f,g=o==null?void 0:o.errors;if(g!=null){let T=s.findIndex(j=>j.route.id&&(g==null?void 0:g[j.route.id])!==void 0);zt(T>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),s=s.slice(0,Math.min(s.length,T+1))}let A=!1,v=-1;if(o)for(let T=0;T<s.length;T++){let j=s[T];if((j.route.HydrateFallback||j.route.hydrateFallbackElement)&&(v=T),j.route.id){let{loaderData:H,errors:X}=o,W=j.route.loader&&!H.hasOwnProperty(j.route.id)&&(!X||X[j.route.id]===void 0);if(j.route.lazy||W){A=!0,v>=0?s=s.slice(0,v+1):s=[s[0]];break}}}let p=o&&c?(T,j)=>{var H,X;c(T,{location:o.location,params:((X=(H=o.matches)==null?void 0:H[0])==null?void 0:X.params)??{},unstable_pattern:Q1(o.matches),errorInfo:j})}:void 0;return s.reduceRight((T,j,H)=>{let X,W=!1,Z=null,Y=null;o&&(X=g&&j.route.id?g[j.route.id]:void 0,Z=j.route.errorElement||nm,A&&(v<0&&H===0?(A0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),W=!0,Y=null):v===H&&(W=!0,Y=j.route.hydrateFallbackElement||null)));let K=d.concat(s.slice(0,H+1)),$=()=>{let L;return X?L=Z:W?L=Y:j.route.Component?L=R.createElement(j.route.Component,null):j.route.element?L=j.route.element:L=T,R.createElement(um,{match:j,routeContext:{outlet:T,matches:K,isDataRoute:o!=null},children:L})};return o&&(j.route.ErrorBoundary||j.route.errorElement||H===0)?R.createElement(z0,{location:o.location,revalidation:o.revalidation,component:Z,error:X,children:$(),routeContext:{outlet:null,matches:K,isDataRoute:!0},onError:p}):$()},null)}function Qc(f){return`${f} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fm(f){let d=R.useContext(Gn);return zt(d,Qc(f)),d}function cm(f){let d=R.useContext(ci);return zt(d,Qc(f)),d}function rm(f){let d=R.useContext(He);return zt(d,Qc(f)),d}function Zc(f){let d=rm(f),o=d.matches[d.matches.length-1];return zt(o.route.id,`${f} can only be used on routes that contain a unique "id"`),o.route.id}function dm(){return Zc("useRouteId")}function om(){var c;let f=R.useContext(wc),d=cm("useRouteError"),o=Zc("useRouteError");return f!==void 0?f:(c=d.errors)==null?void 0:c[o]}function sm(){let{router:f}=fm("useNavigate"),d=Zc("useNavigate"),o=R.useRef(!1);return j0(()=>{o.current=!0}),R.useCallback(async(h,s={})=>{Re(o.current,E0),o.current&&(typeof h=="number"?await f.navigate(h):await f.navigate(h,{fromRouteId:d,...s}))},[f,d])}var r0={};function A0(f,d,o){!d&&!r0[f]&&(r0[f]=!0,Re(!1,o))}R.memo(hm);function hm({routes:f,future:d,state:o,onError:c}){return T0(f,void 0,o,c,d)}function Ua(f){zt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function mm({basename:f="/",children:d=null,location:o,navigationType:c="POP",navigator:h,static:s=!1,unstable_useTransitions:g}){zt(!Ga(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let A=f.replace(/^\/*/,"/"),v=R.useMemo(()=>({basename:A,navigator:h,static:s,unstable_useTransitions:g,future:{}}),[A,h,s,g]);typeof o=="string"&&(o=$l(o));let{pathname:p="/",search:T="",hash:j="",state:H=null,key:X="default"}=o,W=R.useMemo(()=>{let Z=ll(p,A);return Z==null?null:{location:{pathname:Z,search:T,hash:j,state:H,key:X},navigationType:c}},[A,p,T,j,H,X,c]);return Re(W!=null,`<Router basename="${A}"> is not able to match the URL "${p}${T}${j}" because it does not start with the basename, so the <Router> won't render anything.`),W==null?null:R.createElement(je.Provider,{value:v},R.createElement(Ba.Provider,{children:d,value:W}))}function pm({children:f,location:d}){return em(qc(f),d)}function qc(f,d=[]){let o=[];return R.Children.forEach(f,(c,h)=>{if(!R.isValidElement(c))return;let s=[...d,h];if(c.type===R.Fragment){o.push.apply(o,qc(c.props.children,s));return}zt(c.type===Ua,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),zt(!c.props.index||!c.props.children,"An index route cannot have child routes.");let g={id:c.props.id||s.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(g.children=qc(c.props.children,s)),o.push(g)}),o}var ai="get",ui="application/x-www-form-urlencoded";function ri(f){return typeof HTMLElement<"u"&&f instanceof HTMLElement}function bm(f){return ri(f)&&f.tagName.toLowerCase()==="button"}function gm(f){return ri(f)&&f.tagName.toLowerCase()==="form"}function ym(f){return ri(f)&&f.tagName.toLowerCase()==="input"}function vm(f){return!!(f.metaKey||f.altKey||f.ctrlKey||f.shiftKey)}function Sm(f,d){return f.button===0&&(!d||d==="_self")&&!vm(f)}var ni=null;function _m(){if(ni===null)try{new FormData(document.createElement("form"),0),ni=!1}catch{ni=!0}return ni}var xm=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Gc(f){return f!=null&&!xm.has(f)?(Re(!1,`"${f}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ui}"`),null):f}function Em(f,d){let o,c,h,s,g;if(gm(f)){let A=f.getAttribute("action");c=A?ll(A,d):null,o=f.getAttribute("method")||ai,h=Gc(f.getAttribute("enctype"))||ui,s=new FormData(f)}else if(bm(f)||ym(f)&&(f.type==="submit"||f.type==="image")){let A=f.form;if(A==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=f.getAttribute("formaction")||A.getAttribute("action");if(c=v?ll(v,d):null,o=f.getAttribute("formmethod")||A.getAttribute("method")||ai,h=Gc(f.getAttribute("formenctype"))||Gc(A.getAttribute("enctype"))||ui,s=new FormData(A,f),!_m()){let{name:p,type:T,value:j}=f;if(T==="image"){let H=p?`${p}.`:"";s.append(`${H}x`,"0"),s.append(`${H}y`,"0")}else p&&s.append(p,j)}}else{if(ri(f))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=ai,c=null,h=ui,g=f}return s&&h==="text/plain"&&(g=s,s=void 0),{action:c,method:o.toLowerCase(),encType:h,formData:s,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Vc(f,d){if(f===!1||f===null||typeof f>"u")throw new Error(d)}function jm(f,d,o,c){let h=typeof f=="string"?new URL(f,typeof window>"u"?"server://singlefetch/":window.location.origin):f;return o?h.pathname.endsWith("/")?h.pathname=`${h.pathname}_.${c}`:h.pathname=`${h.pathname}.${c}`:h.pathname==="/"?h.pathname=`_root.${c}`:d&&ll(h.pathname,d)==="/"?h.pathname=`${d.replace(/\/$/,"")}/_root.${c}`:h.pathname=`${h.pathname.replace(/\/$/,"")}.${c}`,h}async function Tm(f,d){if(f.id in d)return d[f.id];try{let o=await import(f.module);return d[f.id]=o,o}catch(o){return console.error(`Error loading route module \`${f.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function zm(f){return f==null?!1:f.href==null?f.rel==="preload"&&typeof f.imageSrcSet=="string"&&typeof f.imageSizes=="string":typeof f.rel=="string"&&typeof f.href=="string"}async function Am(f,d,o){let c=await Promise.all(f.map(async h=>{let s=d.routes[h.route.id];if(s){let g=await Tm(s,o);return g.links?g.links():[]}return[]}));return Nm(c.flat(1).filter(zm).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function d0(f,d,o,c,h,s){let g=(v,p)=>o[p]?v.route.id!==o[p].route.id:!0,A=(v,p)=>{var T;return o[p].pathname!==v.pathname||((T=o[p].route.path)==null?void 0:T.endsWith("*"))&&o[p].params["*"]!==v.params["*"]};return s==="assets"?d.filter((v,p)=>g(v,p)||A(v,p)):s==="data"?d.filter((v,p)=>{var j;let T=c.routes[v.route.id];if(!T||!T.hasLoader)return!1;if(g(v,p)||A(v,p))return!0;if(v.route.shouldRevalidate){let H=v.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:((j=o[0])==null?void 0:j.params)||{},nextUrl:new URL(f,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof H=="boolean")return H}return!0}):[]}function Mm(f,d,{includeHydrateFallback:o}={}){return Rm(f.map(c=>{let h=d.routes[c.route.id];if(!h)return[];let s=[h.module];return h.clientActionModule&&(s=s.concat(h.clientActionModule)),h.clientLoaderModule&&(s=s.concat(h.clientLoaderModule)),o&&h.hydrateFallbackModule&&(s=s.concat(h.hydrateFallbackModule)),h.imports&&(s=s.concat(h.imports)),s}).flat(1))}function Rm(f){return[...new Set(f)]}function Om(f){let d={},o=Object.keys(f).sort();for(let c of o)d[c]=f[c];return d}function Nm(f,d){let o=new Set;return new Set(d),f.reduce((c,h)=>{let s=JSON.stringify(Om(h));return o.has(s)||(o.add(s),c.push({key:s,link:h})),c},[])}function M0(){let f=R.useContext(Gn);return Vc(f,"You must render this element inside a <DataRouterContext.Provider> element"),f}function Cm(){let f=R.useContext(ci);return Vc(f,"You must render this element inside a <DataRouterStateContext.Provider> element"),f}var Kc=R.createContext(void 0);Kc.displayName="FrameworkContext";function R0(){let f=R.useContext(Kc);return Vc(f,"You must render this element inside a <HydratedRouter> element"),f}function Dm(f,d){let o=R.useContext(Kc),[c,h]=R.useState(!1),[s,g]=R.useState(!1),{onFocus:A,onBlur:v,onMouseEnter:p,onMouseLeave:T,onTouchStart:j}=d,H=R.useRef(null);R.useEffect(()=>{if(f==="render"&&g(!0),f==="viewport"){let Z=K=>{K.forEach($=>{g($.isIntersecting)})},Y=new IntersectionObserver(Z,{threshold:.5});return H.current&&Y.observe(H.current),()=>{Y.disconnect()}}},[f]),R.useEffect(()=>{if(c){let Z=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(Z)}}},[c]);let X=()=>{h(!0)},W=()=>{h(!1),g(!1)};return o?f!=="intent"?[s,H,{}]:[s,H,{onFocus:Da(A,X),onBlur:Da(v,W),onMouseEnter:Da(p,X),onMouseLeave:Da(T,W),onTouchStart:Da(j,X)}]:[!1,H,{}]}function Da(f,d){return o=>{f&&f(o),o.defaultPrevented||d(o)}}function Um({page:f,...d}){let{router:o}=M0(),c=R.useMemo(()=>h0(o.routes,f,o.basename),[o.routes,f,o.basename]);return c?R.createElement(Bm,{page:f,matches:c,...d}):null}function Hm(f){let{manifest:d,routeModules:o}=R0(),[c,h]=R.useState([]);return R.useEffect(()=>{let s=!1;return Am(f,d,o).then(g=>{s||h(g)}),()=>{s=!0}},[f,d,o]),c}function Bm({page:f,matches:d,...o}){let c=Rl(),{future:h,manifest:s,routeModules:g}=R0(),{basename:A}=M0(),{loaderData:v,matches:p}=Cm(),T=R.useMemo(()=>d0(f,d,p,s,c,"data"),[f,d,p,s,c]),j=R.useMemo(()=>d0(f,d,p,s,c,"assets"),[f,d,p,s,c]),H=R.useMemo(()=>{if(f===c.pathname+c.search+c.hash)return[];let Z=new Set,Y=!1;if(d.forEach($=>{var vt;let L=s.routes[$.route.id];!L||!L.hasLoader||(!T.some(mt=>mt.route.id===$.route.id)&&$.route.id in v&&((vt=g[$.route.id])!=null&&vt.shouldRevalidate)||L.hasClientLoader?Y=!0:Z.add($.route.id))}),Z.size===0)return[];let K=jm(f,A,h.unstable_trailingSlashAwareDataRequests,"data");return Y&&Z.size>0&&K.searchParams.set("_routes",d.filter($=>Z.has($.route.id)).map($=>$.route.id).join(",")),[K.pathname+K.search]},[A,h.unstable_trailingSlashAwareDataRequests,v,c,s,T,d,f,g]),X=R.useMemo(()=>Mm(j,s),[j,s]),W=Hm(j);return R.createElement(R.Fragment,null,H.map(Z=>R.createElement("link",{key:Z,rel:"prefetch",as:"fetch",href:Z,...o})),X.map(Z=>R.createElement("link",{key:Z,rel:"modulepreload",href:Z,...o})),W.map(({key:Z,link:Y})=>R.createElement("link",{key:Z,nonce:o.nonce,...Y,crossOrigin:Y.crossOrigin??o.crossOrigin})))}function Gm(...f){return d=>{f.forEach(o=>{typeof o=="function"?o(d):o!=null&&(o.current=d)})}}var Lm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Lm&&(window.__reactRouterVersion="7.13.0")}catch{}function qm({basename:f,children:d,unstable_useTransitions:o,window:c}){let h=R.useRef();h.current==null&&(h.current=y1({window:c,v5Compat:!0}));let s=h.current,[g,A]=R.useState({action:s.action,location:s.location}),v=R.useCallback(p=>{o===!1?A(p):R.startTransition(()=>A(p))},[o]);return R.useLayoutEffect(()=>s.listen(v),[s,v]),R.createElement(mm,{basename:f,children:d,location:g.location,navigationType:g.action,navigator:s,unstable_useTransitions:o})}var O0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ml=R.forwardRef(function({onClick:d,discover:o="render",prefetch:c="none",relative:h,reloadDocument:s,replace:g,state:A,target:v,to:p,preventScrollReset:T,viewTransition:j,unstable_defaultShouldRevalidate:H,...X},W){let{basename:Z,unstable_useTransitions:Y}=R.useContext(je),K=typeof p=="string"&&O0.test(p),$=v0(p,Z);p=$.to;let L=I1(p,{relative:h}),[vt,mt,jt]=Dm(c,X),I=Qm(p,{replace:g,state:A,target:v,preventScrollReset:T,relative:h,viewTransition:j,unstable_defaultShouldRevalidate:H,unstable_useTransitions:Y});function Rt(he){d&&d(he),he.defaultPrevented||I(he)}let Yt=R.createElement("a",{...X,...jt,href:$.absoluteURL||L,onClick:$.isExternal||s?d:Rt,ref:Gm(W,mt),target:v,"data-discover":!K&&o==="render"?"true":void 0});return vt&&!K?R.createElement(R.Fragment,null,Yt,R.createElement(Um,{page:L})):Yt});Ml.displayName="Link";var Ym=R.forwardRef(function({"aria-current":d="page",caseSensitive:o=!1,className:c="",end:h=!1,style:s,to:g,viewTransition:A,children:v,...p},T){let j=La(g,{relative:p.relative}),H=Rl(),X=R.useContext(ci),{navigator:W,basename:Z}=R.useContext(je),Y=X!=null&&km(j)&&A===!0,K=W.encodeLocation?W.encodeLocation(j).pathname:j.pathname,$=H.pathname,L=X&&X.navigation&&X.navigation.location?X.navigation.location.pathname:null;o||($=$.toLowerCase(),L=L?L.toLowerCase():null,K=K.toLowerCase()),L&&Z&&(L=ll(L,Z)||L);const vt=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let mt=$===K||!h&&$.startsWith(K)&&$.charAt(vt)==="/",jt=L!=null&&(L===K||!h&&L.startsWith(K)&&L.charAt(K.length)==="/"),I={isActive:mt,isPending:jt,isTransitioning:Y},Rt=mt?d:void 0,Yt;typeof c=="function"?Yt=c(I):Yt=[c,mt?"active":null,jt?"pending":null,Y?"transitioning":null].filter(Boolean).join(" ");let he=typeof s=="function"?s(I):s;return R.createElement(Ml,{...p,"aria-current":Rt,className:Yt,ref:T,style:he,to:g,viewTransition:A},typeof v=="function"?v(I):v)});Ym.displayName="NavLink";var wm=R.forwardRef(({discover:f="render",fetcherKey:d,navigate:o,reloadDocument:c,replace:h,state:s,method:g=ai,action:A,onSubmit:v,relative:p,preventScrollReset:T,viewTransition:j,unstable_defaultShouldRevalidate:H,...X},W)=>{let{unstable_useTransitions:Z}=R.useContext(je),Y=Km(),K=Jm(A,{relative:p}),$=g.toLowerCase()==="get"?"get":"post",L=typeof A=="string"&&O0.test(A),vt=mt=>{if(v&&v(mt),mt.defaultPrevented)return;mt.preventDefault();let jt=mt.nativeEvent.submitter,I=(jt==null?void 0:jt.getAttribute("formmethod"))||g,Rt=()=>Y(jt||mt.currentTarget,{fetcherKey:d,method:I,navigate:o,replace:h,state:s,relative:p,preventScrollReset:T,viewTransition:j,unstable_defaultShouldRevalidate:H});Z&&o!==!1?R.startTransition(()=>Rt()):Rt()};return R.createElement("form",{ref:W,method:$,action:K,onSubmit:c?v:vt,...X,"data-discover":!L&&f==="render"?"true":void 0})});wm.displayName="Form";function Xm(f){return`${f} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function N0(f){let d=R.useContext(Gn);return zt(d,Xm(f)),d}function Qm(f,{target:d,replace:o,state:c,preventScrollReset:h,relative:s,viewTransition:g,unstable_defaultShouldRevalidate:A,unstable_useTransitions:v}={}){let p=Xc(),T=Rl(),j=La(f,{relative:s});return R.useCallback(H=>{if(Sm(H,d)){H.preventDefault();let X=o!==void 0?o:Ha(T)===Ha(j),W=()=>p(f,{replace:X,state:c,preventScrollReset:h,relative:s,viewTransition:g,unstable_defaultShouldRevalidate:A});v?R.startTransition(()=>W()):W()}},[T,p,j,o,c,d,f,h,s,g,A,v])}var Zm=0,Vm=()=>`__${String(++Zm)}__`;function Km(){let{router:f}=N0("useSubmit"),{basename:d}=R.useContext(je),o=dm(),c=f.fetch,h=f.navigate;return R.useCallback(async(s,g={})=>{let{action:A,method:v,encType:p,formData:T,body:j}=Em(s,d);if(g.navigate===!1){let H=g.fetcherKey||Vm();await c(H,o,g.action||A,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:T,body:j,formMethod:g.method||v,formEncType:g.encType||p,flushSync:g.flushSync})}else await h(g.action||A,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:T,body:j,formMethod:g.method||v,formEncType:g.encType||p,replace:g.replace,state:g.state,fromRouteId:o,flushSync:g.flushSync,viewTransition:g.viewTransition})},[c,h,d,o])}function Jm(f,{relative:d}={}){let{basename:o}=R.useContext(je),c=R.useContext(He);zt(c,"useFormAction must be used inside a RouteContext");let[h]=c.matches.slice(-1),s={...La(f||".",{relative:d})},g=Rl();if(f==null){s.search=g.search;let A=new URLSearchParams(s.search),v=A.getAll("index");if(v.some(T=>T==="")){A.delete("index"),v.filter(j=>j).forEach(j=>A.append("index",j));let T=A.toString();s.search=T?`?${T}`:""}}return(!f||f===".")&&h.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(s.pathname=s.pathname==="/"?o:el([o,s.pathname])),Ha(s)}function km(f,{relative:d}={}){let o=R.useContext(_0);zt(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=N0("useViewTransitionState"),h=La(f,{relative:d});if(!o.isTransitioning)return!1;let s=ll(o.currentLocation.pathname,c)||o.currentLocation.pathname,g=ll(o.nextLocation.pathname,c)||o.nextLocation.pathname;return ii(h.pathname,g)!=null||ii(h.pathname,s)!=null}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=f=>f.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),C0=(...f)=>f.filter((d,o,c)=>!!d&&d.trim()!==""&&c.indexOf(d)===o).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $m={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=R.forwardRef(({color:f="currentColor",size:d=24,strokeWidth:o=2,absoluteStrokeWidth:c,className:h="",children:s,iconNode:g,...A},v)=>R.createElement("svg",{ref:v,...$m,width:d,height:d,stroke:f,strokeWidth:c?Number(o)*24/Number(d):o,className:C0("lucide",h),...A},[...g.map(([p,T])=>R.createElement(p,T)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=(f,d)=>{const o=R.forwardRef(({className:c,...h},s)=>R.createElement(Fm,{ref:s,iconNode:d,className:C0(`lucide-${Wm(f)}`,c),...h}));return o.displayName=`${f}`,o};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=Fl("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=Fl("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=Fl("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=Fl("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=Fl("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=Fl("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=Fl("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),np=({children:f})=>{const[d,o]=s0.useState(!1),c=Rl(),[h,s]=R.useState(""),g="小連愛你《3";R.useEffect(()=>{const v=()=>{s("");let T=0;const j=setInterval(()=>{T<g.length?(s(g.substring(0,T+1)),T++):clearInterval(j)},150)};v();const p=setInterval(v,5e3);return()=>{clearInterval(p)}},[c.pathname]);const A=[{name:"Posts",path:"/"},{name:"About",path:"/about"}];return M.jsxs("div",{className:"min-h-screen flex flex-col bg-white",children:[M.jsxs("nav",{className:"sticky top-0 z-50 bg-white border-b border-gray-200 h-14 flex items-center px-4 md:px-6 justify-between",children:[M.jsx("div",{className:"flex items-center gap-2",children:M.jsxs(Ml,{to:"/",className:"flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md transition-colors",children:[M.jsx("div",{className:"w-6 h-6 bg-black rounded-sm flex items-center justify-center text-white font-serif font-bold text-sm",children:"L"}),M.jsx("div",{className:"flex items-center",children:M.jsxs("span",{className:"text-gray-500 font-normal text-xs ml-2 font-mono flex items-center tracking-widest min-w-[120px]",children:[h,M.jsx("span",{className:"animate-pulse text-gray-400 ml-1 font-light",children:"|"})]})})]})}),M.jsx("div",{className:"hidden md:flex items-center gap-2",children:A.map(v=>M.jsx(Ml,{to:v.path,className:`text-sm font-medium px-3 py-1 rounded-md transition-colors ${c.pathname===v.path?"bg-gray-100 text-[#37352f]":"text-gray-600 hover:bg-gray-50"}`,children:v.name},v.path))}),M.jsx("button",{className:"md:hidden p-2 text-gray-600",onClick:()=>o(!d),children:d?M.jsx(lp,{size:20}):M.jsx(tp,{size:20})})]}),d&&M.jsx("div",{className:"md:hidden border-b bg-white p-4 space-y-2 animate-fade-in",children:A.map(v=>M.jsx(Ml,{to:v.path,onClick:()=>o(!1),className:"block p-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium text-sm",children:v.name},v.path))}),M.jsx("main",{className:"flex-grow",children:f}),M.jsx("footer",{className:"bg-gray-50 border-t border-gray-200 py-12 px-6 mt-20",children:M.jsxs("div",{className:"max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("div",{className:"w-6 h-6 bg-black rounded-sm flex items-center justify-center text-white font-serif font-bold text-xs",children:"L"}),M.jsx("h2",{className:"text-sm font-bold text-gray-700 uppercase tracking-widest",children:"Lien"})]}),M.jsxs("div",{className:"text-gray-400 text-xs font-medium",children:["© ",new Date().getFullYear()," LIEN. Some rights reserved."]})]})})]})},H0=({src:f,alt:d,className:o,...c})=>{const[h,s]=R.useState(""),[g,A]=R.useState(!0);return R.useEffect(()=>{if(!f)return;let v=!0,p=null;return(async()=>{if(f.startsWith("/")||f.startsWith("data:")){s(f),A(!1);return}try{A(!0);const j=await fetch(f);if(!j.ok)throw new Error("Failed to load image");const H=await j.blob();v&&(p=URL.createObjectURL(H),s(p),A(!1))}catch(j){console.error("Error loading secure image:",j),v&&(s(f),A(!1))}})(),()=>{v=!1,p&&URL.revokeObjectURL(p)}},[f]),g?M.jsx("div",{className:`bg-gray-100 animate-pulse ${o}`}):M.jsx("img",{src:h,alt:d,className:o,...c})},B0=f=>{if(!f)return 1;let d=f.replace(/!\[.*?\]\(.*?\)/g,"").replace(/\[(.*?)\]\(.*?\)/g,"$1");d=d.replace(/[#*`~\-=>_]/g," ");const o=(d.match(/[\u4e00-\u9fa5]/g)||[]).length,h=d.replace(/[\u4e00-\u9fa5]/g," ").split(/\s+/).filter(s=>s.trim().length>0).length/300+o/500;return Math.ceil(h)||1},ap=({post:f})=>{const d=Xc(),o=B0(f.content);return M.jsxs("article",{onClick:()=>d(`/post/${f.slug}`),className:"group cursor-pointer flex flex-col h-full border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-all duration-300 animate-fade-in",children:[M.jsxs("div",{className:"block overflow-hidden relative aspect-[16/9]",children:[f.imageUrl&&M.jsx(H0,{src:f.imageUrl,alt:f.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),M.jsx("div",{className:"absolute top-3 left-3 bg-white/90 backdrop-blur-sm w-10 h-10 flex items-center justify-center rounded-md text-[10px] font-bold text-gray-700 shadow-sm uppercase tracking-wider",children:f.category})]}),M.jsxs("div",{className:"p-5 flex flex-col flex-grow",children:[M.jsx("div",{className:"flex flex-wrap items-center gap-3 text-[10px] text-gray-400 mb-3 font-medium uppercase tracking-widest",children:M.jsxs("span",{className:"flex items-center gap-1",children:[M.jsx(U0,{size:12})," ",o," m read"]})}),M.jsx("h2",{className:"text-lg font-bold text-[#37352f] mb-2 leading-snug group-hover:text-black transition-colors line-clamp-2",children:f.title}),M.jsx("p",{className:"text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow",children:f.description}),M.jsx("div",{className:"flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-gray-50",children:f.tags.slice(0,3).map(c=>M.jsxs("span",{className:"text-[10px] text-gray-500 bg-gray-50 px-2 py-0.5 rounded border border-gray-200 font-medium",children:["#",c]},c))})]})]})},up=`---
title: "格勒遊記 (2601)"
date: 2026-02-12
description: "成長痛是必然。明明我一直一直都有完全絕對的選擇權，我還是在這了。"
category: "遊記"
tags: []
imageUrl: "https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/jan-1.jpeg"
---

## 1/7
Bonsoir!

晚安，一切安好。我和李峻正在從格勒回里昂的ㄈㄧㄅㄚ上。這是我近二十天來第一次靜下來面對即將到來的分開，也在強迫自己開始回想一個人生活的樣子。

這三週走了三個國家，八個城市。今天早上坐吧啦吧啦咖初到格勒，我將要生活半年的城市。天氣很好，雖然不是第一次看會下雪地方的山上雪脈，但還是會覺得漂亮得很不可思議；在這個小鎮不管走到哪個街區都看得到阿爾卑斯山，李峻找到了很多看起來很厲害的亞洲餐廳，目前為止遇到的人也不錯，感覺是個可以讓我好好放鬆的地方。

原以為剛下車可以馬上取好鑰匙入住，但信中告知我取鑰匙的地點完全沒有 office，手機電量告急又聯絡不到相關人員，在千百萬個焦慮之後，有個路過的黑人鼻涕同學（結果我跟他住同一層，現在煮飯都會遇到）提供了非常有用的資訊，於是是經過了困難*N 和兩段車程，終於把我的家當放好在學校宿舍，可以輕鬆地出發到最後的巴黎了。
![在這裡塞一張巴黎](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/merge-2.jpg)

呼。

這趟旅程截至目前為止都非常順利，除了上面這樁。路上我偶爾歡、李峻在靠杯，我們都互相照顧彼此，在歐陸創造了很多美好的回憶，嘟嘟嚕嘟噠噠噠。

在華沙邊流鼻涕邊吃 Bigos，還在適應零度上下的天氣和尚未天亮就會起床的時差；在克拉科夫第一次一起煮飯，雖然李峻叫我坐著就好，老城的話我最喜歡這裡了。

![跨年吃 Elephant！](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/merge-1.jpg)
在柏林一起跨年，去了地下世界和八百塊下雪的動物園，李峻說他最喜歡柏林，我好像也是；在紐倫堡不知道幹嘛，1/1 好無聊喔，如果我們下次還來，要有錢得能在酒樓點一桌；在慕尼黑體驗了啤酒館，要是我會德文就去丟冰壺了，感覺李峻會打得不錯，比起歐洲九族文化村（aka 天鵝堡 ==），我們好像一直以來都比較喜歡小街巷弄裡的美好。
![爬上去天鵝堡ㄉ風景](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0107-2.jpeg)

在里昂感覺躁躁的，我剛到的時候大流鼻血，李峻也在夜巴生不如死的餘韻中（大概要付 380-420 萬才能讓他再搭一次），然後這裡好難吃喔；在格勒遇到了第一個大 trouble，但買到了便宜又 size 剛好的 CHARTREUSE；我們明天要去巴黎了。

我這幾天一直在想像我一個人留在法國後是什麼樣子，也一直在臨摹在戴高樂機場和李峻說掰掰的感覺，好像真的兩個人久了，會完全忘記自己一個人的生活是什麼樣子。

今天把家當全部安置好的過程，非常感謝有李峻陪我一起扛上扛下，這一路也都是，但又覺得在台南說掰掰和在巴黎說掰掰，好像在巴黎的體驗要更難受了。

最後一週這幾天感覺李峻都很疲憊，有點小感冒、吃不到好吃的東西、坐巴士會暈車，要是我也差不多想家了。昨天他已經在想林聰明要 2 號餐還是 3 號餐、buffet 要吃響食天堂還是旭集、第一餐會不會忍不住在機場就開吃。我一邊聽著這種我不能奢望的煩惱，一邊還是無理取鬧地算了目前要賠學校多少。害，打妹。
![ㄈㄅ JJ](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0107-1.jpeg)

從正式收到 offer 的前後，我就一直對這個決定有些反彈，想去又不想去的，不知道是經濟負擔還是有束縛讓我覺得綁手綁腳，還是我不想離開喜歡的人事物這麼遠、這麼久，語言不通、也無心讀書。我一直以來篤定的計畫，按部就班的一一兌現，所有流程、困難我都好好地破關斬將，卻沒有心想事成的快樂。

今天抵達格勒好像覺得沒那麼糟了，這感覺是一個天氣舒服、適合生活的城市。只是感覺會很孤單，這點暫時沒有被排解。路過超市我還叫李峻頡陪我逛一下，在看過共用廚房和現有鍋具之後，我原本想要趁他陪我逛超市的時候幫我列幾個菜單，他竟然叫我自己一個人慢慢逛，洗勒考。

成長痛是必然。明明我一直一直都有完全絕對的選擇權，我還是在這了。

## 1/13
我現在聽 home is far away 還不會哭。

這兩天過得飛快，醒著的時間都很充實，說得上有趣，但也開始感到孤單。

李峻回台灣的那天，我用最快的速度回到了格勒，把房間該清潔的地方打掃完，兩咖行李箱、兩個後背包的所有東西歸到能讓我宜居的位置，鋪好 welcome kit 附的床單、枕頭，一切好像都能用最適合當前狀態的樣子展開。

第一晚即使有些難入睡，二十天在外漂泊的旅程還是能撫平適應的過程，我也想要在這裡趕快把安定感還給自己。就和每次看完後遺症很嚴重的演唱會一樣，我會拼命地多塞點事情、轉移注意力，讓自己不要想起，直到感受不到上一次美好的結束確切是在何時。

這次也是，只是階段本身所帶來的刺激更加龐大，間隔之間的變化也很劇烈。但不適感並沒有想像中的可怕（除了食物）。

![這個牌子有點弱](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0113-5.jpeg)
昨天一早先去系館拿了學生證，我在 tram B 經過所有我和李峻走過的路時，都有很難不去注意的失落感，就算我把一切熟悉得很像我已經習慣了。我把那天看到山很興奮而一起合照的街口、買到便宜 CHARTREUSE 的遊客中心、可愛龍噴水池什麼的，再重複告訴他我路過了，在他沒到過的距離，我也和他說了有橋、有河，學校好大喔。

系館就和在 Google Map 上看到的樣子差不多，附近的育樂街也和跟李峻一起看的街景圖一樣，在 12 點前的 Welcome Meeting 我先選了一間 cafe 久違地進食，燻鮭魚貝果還不錯，但是後面好膩喔（花了半小時才吃完），這些人對自己文化的食物有講究嗎？卡布還不錯，是鱷魚咖啡之後在歐洲喝到的第二名，價錢也可以偶爾來一杯。我上次有這種尋寶的感覺是大二剛到成大的時候吧。
![Cafe Factory](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0113-4.jpeg)

我提早了 10 分鐘到 Welcome Meeting 的教室，裡面的阿兜仔已經在 small talk 了，在我還沒決定要用 Szu-Han 還是 Vivi 來介紹自己的時候，What’s your name 就刺到我臉前，果然亞洲人沒骨氣⋯⋯。來回沒幾句，我認識到自己用英文聊天非常句點，延伸反問、補充回答的反應速度很慢，很久沒有這樣的煩惱了——他們會不會不喜歡和我相處？他們會不會不想認識我？

簡報上都是我過於擔心而早就都查好的資訊，結束後我嘗試在小團小團的人群中嘗試進入一個聊天室，應該說插入，我就真的站在某個圈圈的外圍，在等待一個時間成為圓周的一部分。我在想大概是因為這些人都初來乍到、會想認識人，才主動和我打招呼的吧，但我被圈進去，那個聊天室已經在 Happy to see you all 了。

再下一個環節是五點，相隔三四小時、很奇怪的安排。我和立陶宛女、德國女一起走出教室，先發制人（我自己感覺得到自己很想趕快認識人的目的性）問了等等的計劃，結果他們竟然是要去吃午餐（這裡我又縮頭了，我是 Asia poor girl），我主動推薦的 cafe 還被採納（幹沒退路），只好再多 2.1 歐的社交咖啡費一起出發。拿鐵不行喔。

三個人的聊天室總是 C3 取 2 的，我的聽力也就那樣，要跟上聊天的 tempo 有點辛苦，討論計畫 10 分鐘、路上 15 分鐘、吃東東 20 分鐘，最後的體感是長時間大坐牢。英文讓我變成了一個無趣的人，原本人格特質的魅力完全歸零。好可怕。
![就是這樣美麗ㄉ走過去...](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0113-3.jpeg)

前一晚從台灣帶來的吹風機三度燒起來，也發現哪些必需品不在身邊，散會後（呼）中間的空閒時間就去 Monoprix 補了生活用品。為了買吹風機，我跑了三間超市，用法文問了三個不同的人在哪裡，只有一個人聽得懂，但他回覆時馬上切換了英文。唉，我也沒辦法啊。

在台南，我很少當天進出宿舍超過一趟，我的宿舍到學校甚至要半個小時的車程，但購物袋裡的東西還是得安置，來來去去的煩躁感先出現了。但其實我有的是時間，浪費時間也是要學的餒齁。

五點的 Campus Tour 把圈圈都打散了，韓國女知道我會了一點點韓文、去過很多次韓國還聽 Khp，新加坡男感覺是目前為止聊的頻率最對的、有去過台北。不太坐牢了，但是可以感覺得到能量在下降。最後組織團體晚餐的人跳出來時，我還是靠過去了。

飯桌上有挪威當兵女、德國以為比我大結果小一歲女、中國北京安靜女、新加坡講話很快女和他的同學新加坡男、立陶宛可愛妹妹（沒有再貼標，因為我還沒有 Whatsapp 又記性很差⋯），我第一次體驗這種多口音夾雜的聊天聚會。太那個了，英文真的讓我變成了一個無趣的人。我知道什麼時候該笑，但我沒有能力好笑，只會收到那種人家表示欣慰、理解的笑（be like 問我有沒有 homesick 我立馬說 Yes⋯）。

不會過度在意或臆測別人的想法算是我適應世界的優勢之一，中午和傍晚的兩輪社交總歸還是新奇、有趣的體驗，但也讓我先入為主有了在這裡很難交到好朋友的念頭。

昨天睡前我如逃避慣性的想好了今天所有的行程，裝作這些都是生活了。幸好我最後有聽媽媽的話把薄毯子帶來，有了暖氣其實一件薄被剛剛好，我昨晚一覺到天亮，甚至到九點。

今天照著計畫，一早先征服了洗衣機，現在洗一次加烘（沒有曬衣間很三小）就要一百多塊台幣了，我以前還會靠腰成大學苑要二十塊；歐洲這邊好像很多機構都把洗衣機跟手機 APP 連通了，洗衣精會統一放，你只要放好衣服、關上門，在手機上付款就會啟動了，也有預約、通知上一個使用者等等的功能，滿方便的。

等洗衣服的期間處理完了居留生效、把該寄的信寄一寄、第一次開宿舍電磁爐用摩卡壺、決定下週去英國找賴德。好瑣碎，但這樣想要寫著是因為知道這種悠哉的日子很珍貴。經濟上、體驗上都是。

我一個人待著的這幾天問了 Gemini 一堆白痴問題（e.g. 蛋要冰嗎、電磁爐要怎麼開），即使問了也還是把鍋子燒黑了；處理文件叫他幫我翻一堆法文，也還是不知道用法文思考大概會是什麼 pattern。沒ㄟㄞ我可能沒辦法裝得那麼適應。

接著烘了衣服，這摸那摸就下午兩點了，已經超過二手物品贈送開始的時間。又再花了半小時到學校，挖勒剩一堆爛貨；學餐也沒開了，只好在 cafe 處理，結果吃到我人生中最難吃的一盆義大利麵，怎麼可以這麼鹹，卡布也不能憑 1.6 歐就難喝成那樣啊，還滿座是什麼意思啊！

吃的部分真的太賭爛了。今天出門主要還要逛毛線店和超市補貨。Lanae Tricot 是我在台灣就存好的小店，在這裡看到了很多台灣沒看過的花樣，混色的款式多很多（雙色簡單、規律排列多色都有），他們的線很多還會捲成麻花捲，很可愛。
![〰️〰️〰️〰️](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0113-2.jpeg)

在店裡遇到的客人大部分都是女生（在東方手藝的那個叔叔真的很特別），看起來都很開心地在看線，真好，我也很喜歡。買了一顆一眼相中的紅球球和棒針（工具沒有想像得貴耶），我要開始織蘇菲圍巾了，希望可以在春天來之前完成。

原來今天是想逛亞超的，但找到一家門口有麻味、裡面只有東南亞食物的怪店，待不到一分鐘就往家樂福走去了。昨天睡前有惡補一下 yt 的煮飯影片，要買什麼食材終於是有概念的。

傍晚回來又處理了房補和健保。我花了一萬左右處理文件，結果今天試算補助可能只有一個月 29 歐，我補半年都沒辦法回本，很靠杯但也不能怎樣。把這些都想成體驗的一部分實在是很不錯的解憂手段。

大概九點時用傍晚在超市買的東西弄了晚餐，這些可愛的原型食物最後還是被我弄得看起來不太好吃：情緒價值 65 味道 35，有很大的進步空間，因為我還沒買油。然後藜麥是很好很好的代餐。
![賣相很差...](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0113-1.jpeg)

文書處理和行政手續的部分好像都被我殺完了，今天其實很長、做了不少事情，我還在這寫小作文。已經隔夜兩點了，我和三個在台灣準備上班的朋友更新我最近的生活，最近這樣打著熟悉的語言分享日常就很解鄉愁。

啊，又快三點了。好像我這樣晚睡、明天晚起，就可以把沒得安排忙碌的明天縮短一點。好啦，真的晚安嚕。

## 1/14
媽咪跟我說：好好享受慢慢享受、每天進步一點點、每天都開心唷。

我偶爾會覺得，千禧年前後出生的孩子是一代多數可以享受父母親辛苦錢所帶來的生活的一群人（好繞口），他們那個年代哪有出國留學的想法，機會、資源、資訊都沒有現在來得要多，那時候台灣經濟起飛留下來的，都是我們現在在享福。

所以我總是在看到眼前的一切，也好想讓媽咪看看。雖然我自己也付出了很大的力氣去克服經濟上的困難，但能夠讓我更加放寬心地去體驗——我的後盾永遠都是李彩蓮。

今天睡前分享了我的社交困難，她的幾句話總是我的定心丸。我發現我講出來的那些難受給人的感覺，好像常常比我個人體感的嚴重程度大得許多；我也發現我這陣子很快速地找回以前獨處的習慣，孤單難過的時候就寫點字，困擾的話慢慢排解舒心。

就如昨天說的，我很晚睡，今天第一次醒來以後也刻意再睡回去，近中午才起來。原來打算中午吃學餐，但還沒有法國門號、沒辦法用他們的支付方式，又在 cafe 買了一坨屎，真的很難吃。難吃到今天趕快去把門號辦完了。
![真的是大便...](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0114-1.jpeg)

咖啡總是每天總結美好事物的前排名，今天用摩卡壺不需要參考影片了，晚上煮飯的時候也沒有再問 Gemini 電磁爐怎麼開，啊今天鍋子還是黑了。吼又。

晚上參加了 City tour，格勒確實是一個很不錯的城市，有著大學城的魅力，以及很多的運動選擇，天氣很好、四周環山。儘管地處交通有些不便讓我初期難以接受，但實際在這裡生活，走在路上隨時可以看到雪山，深深吸吐新鮮空氣，我現在覺得很幸福。

校園生活目前算不上特別順利，在我來之前我以為交朋友很容易。City tour 的行程也讓人們在散步的過程聊天而認識彼此，我的困擾和週一還是一樣，就很卡，英文真的真的讓我變成了一個無趣的人。
![就是走經過（晚上的）這邊](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0114-2.jpeg)

而且為了迎合阿兜仔浮誇的語氣和用詞（動不動就 crazy 是在瘋三小），我要花很多能量來給反應，社交當下常常很像自己在看外面的這個殼要怎麼表演，質壁分離。

我好像比較喜歡自然而然產生的緣分，這種場合大家可能多少都帶有一些目的性（我不知道阿兜仔是不是真的完全無啦），聊天初期就變得莫名制式，不外乎就是 what’s your name + where are you from + what is your program 的組合技，頻率對了一點點會再多了解對方國家的一些 fun fact。

偶爾我在講一樣的東西，聽過的人在旁邊，就覺得好笑，一直拿一樣東西來賣的感覺很瞎。好難喔，交朋友本來就很難了，要用英文更難（我這六年甚至都在做英文家教欸）。

這幾天社交過程的不順都可以用「都是體驗的一部分」來安慰自己，也可能是很想要自己趕快習慣或是擁有安定感，才變得著急而產生煩惱。不過在意識到這些之後，可以快速撫平、恢復，我很為我自己驕傲。

總結目前體驗給我的衝擊是——可以和人們一起用熟悉的語言去探索差異和思考、食物在生活中即是情緒價值來源，這兩件事對我來說是真的真的很重要。

## 1/15
每天都很珍貴。

今天自然醒已經十點多了，馬上就爬起來，準備好讓自己出門也就直接到了 Crous 的飯點。第一次吃學餐，Izly pay 有問題，但全程用法文和我溝通的工作人員還是讓我先吃了（Gemini 替我說了感謝），後來去亞超兜一圈才來回來付款（Revolut 真的很方便欸）。

這樣一盤 3.3 歐，花椰菜很不脆、冷冷的，我很喜歡喝濃湯、但不是這種有綠豆味的濃湯，肉應該是鴨腿嗎，義大利麵煮得好爛。今天挪威朋朋問我習慣了沒，我說 food 還沒。這些東西就是堪吃，我一點都喜歡不起來。
![Crous 學餐](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0115-1.jpeg)

我現在時間很多，走路要約十五分鐘的路程對我來說是很好的散步規劃。飯後走到 Victor Hugo 城裡的鬧區，終於找到格勒像樣的亞超了，雖然規模和前幾週去的大城市差很多，但水餃、麵條、金針菇、皮蛋⋯該有的都有了，甚是感謝。
![King Long Store](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0115-3.jpeg)

路上看到賣相很不錯的肉桂捲，長得像鯨魚牌那種標準九宮格的其中之一，這幾天在吃的上面完全沒有放過自己在省的我還是任性地買了一顆。

![看在 logo 可愛...](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0115-2.jpeg)
可惡，果然還是不喜歡，麵包體一點嚼勁都沒有，濕濕軟軟塌塌的，肉桂變成糖餡、有點固體狀，好甜好膩。我就說，肉桂捲要像 Umm Umm 的扭結肉桂捲那樣，咬下去的接觸面要是脆的，麵包體要 Q 彈而可以慢慢嚼出肉桂香，最好是刺刺辣辣的再搭配剛好的甜度，如果有核桃就大加分。

下午茶結束後，我就狗在宿舍看倫敦的行程，和媽咪妹妹講個電話，從 0 開始學棒針（好難喔），大概傍晚有點依依不捨地要放下毛線，準備去要我的滑雪學分，再去 welcome party 看看。

我的兩個體育志願都沒中籤，但幸好學校提供付費的單堂課程也不少，諮詢處的教練也人很好地和我說怎麼 register，我的滑雪夢還是圓的（有沒有滿不知道）。
![不同體育項目擺攤諮詢學分和課程](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0115-4.jpeg)

其實天黑之後走在校園裡也有點可怕，面積很大卻也沒幾盞燈。我走到活動中心 EVE，發現昨天 city tour 有聊到的幾個人也在，但我裝沒看到地直接路過了⋯我自己感覺昨天那些和我聊天的人，大部分都覺得我 boring asia girl，莫名有壓力。

我走到看不到他們的側邊裝作找人，學生會的工作人員看我一直望進建築物裡的霓虹燈，主動向我揮手、請我到裡面看看，蛤三小裡面除了 DJ 一個人都沒啊，放的音樂是砰砰砰的那種、走出來入口處是很濃的麻味，我感覺自己不太適合這裡。

本來就不想在外面待太晚（昨天 city tour 有人跟我說格勒是法國最危險的城市，怕爆），原本打算買份學生會賣的 1 歐 crepe 吃完宿舍，結果 Maya （週一認識的挪威女生）可愛地跑來跟我說他們在那邊、可以過來喔，在這種 party 社交場合，遇到相對熟悉的人類真的讓我覺得很安慰。
![1 歐 crepe](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0115-5.jpeg)

雖然幾秒安靜的空拍還是讓我有點窒息，但我們對彼此已經有一些基礎認識了，還是有一點熟悉感讓我感到安心；最後我趁 Maya 的第一發早退，順勢一起離開了。可以說這些人是我的朋友了嗎？今天覺得有一點點可以，下次見到你們應該也會滿開心的喔。

我和 Maya 一起等 tram 的時候，聊了很多 kpop，沒想到這個在歐洲也能當作聊天話題，她竟然連幾代團和韓綜都知道，很神奇。原本覺得她很可愛，現在又有共同興趣了，滿不錯的。

大概快十點抵達 Gare，我還是收起手機、緊握鑰匙，雙手交叉抱胸、臉要最臭，用最快的速度快走回宿舍。感覺很多東西都習慣了，見到人就要蹦啾、散步採購的規劃、床的軟硬和扁塌塌的枕頭，但就是對治安的堪憂沒解。在歐洲的話，這好像就是治不了的焦慮。

## 1/16
蛤不對，我才不知道自己要什麼勒！

交換學生的簽證居留手續、選課行政，我全部都完成了，說好要負責到底的家教工作也在上週告一個段落。我是來這裡好好地玩、好好地休息的。

但前幾天收到的面試邀約也還是接下了，我看到 hackerrank 忍不住的噁心還是騙不了自己。我從大二轉到成大資工以來好像就一直在騙自己，一頭栽地下去讀、賣了職涯的選擇權，雖然我大多時候是感謝這個選擇的，也覺得不一定要以刷題來證明自己；但就是一直忍不住去比較。

旅行也有這種症頭，我的 FOMO 很嚴重。這次去那麼多地方，李峻頡待在我身邊的時候只會跟著我走，有什麼看什麼，但我就是會不停焦慮地去確認那些存在 Google Map 上面的收藏有哪一個沒走過。

我知道我是這樣的人，這樣也沒特別深度走訪，只是 literally 踩點好像不太好，所以我是要接受這樣的自己，繼續每次把一個一個點都 check，還是慢慢練習成為可以完全享受當下的人。阿災勒。

今天起來又不小心躺在床上滑了一個小時的手機，下樓吃了經典 3.3 學餐（今天特別查了點數機制，原來均一價有包前菜、主餐、甜點，慘賠）。今天拿了沙拉，主餐是一坨薯泥、一坨白糊糊菜和炸起士（我以為是魚排慘賠==），應該要拿隔壁雞腿的，甚至還有兩隻欸！
![沒吃懂==](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0116-1.JPG)

昨天在 Google Map 上看到宿舍後面有河經過，飯後繞了一小圈散步。格勒運動的人真的好多，一路上有很多跑跑人、滑雪人（拿著裝備準備出）和腳踏車人。多個雪場和規劃良好的車道都是台灣沒有的，這點實在很讓人嚮往沒錯。
![伊澤爾河](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0116-2.jpeg)

總歸還是選擇的方程式，旅行風格、飲食習慣、運動風氣、行政效率，要在哪個國家生活的選擇實在是很大的 trade-off。

沒走太久就回來宿舍泡咖啡打毛線了，昨天棒針起針，正在適應不同的工具，今天直接上手大開打，很喜歡。但整天狗在宿舍還是覺得有點浪費，傍晚我一邊和李峻講電話一邊走到了大概三公里遠的李豆。
![經典李豆](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0116-3.jpeg)

格勒市區幾乎沒有李豆超市，我以為都是大規模的店才通通開在稍微郊區的地方，結果走這麼遠來看到普通小，頗失望。但在裡面終於看到醃過的肉，又得救地買了一盒。

今天晚上沒事、比較早煮，鍋子沒操灰搭了，稍有進步。但看著隔壁黑人鄰居拿了一堆工具和食材，很熟練地準備煮大鍋咖哩，我還是持續對自己的廚藝嗤之以鼻。

晚上訂了下週去倫敦的機票，賴德說要煮滷肉和燒仙草給我吃，想到就幸福了。而我的蘇菲圍巾開始成形，也很開心。平凡無奇的一天，因為很珍惜，所以也開始不排斥尚未習慣的東西、更努力地去感受喜歡的事物。
![《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0116-4.jpeg)

晚安啦！鯊魚！

## 1/17
四捨五入也爬了阿爾卑斯山。

今天一早大概八點起來的感覺很痛苦，這幾天都習慣 9.10 點起床，昨天大概一點睡、早些起來就又有不適感了。不能浪費在這裡的時間。

昨天大概看好路線之後，出門上 tram 已經不用再看導航了。今天也是參加迎新週的活動，要爬 mountain Jalla，沒有人跟我說路會泥濘、顛頗成這樣，也沒有行前通知提醒我會下雨，總之所有都濕濕冰冰累累的。
![這種ㄟ這種路ㄟ](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0117-3.jpeg)

山頂上的風景實在不錯，要是天氣很好，我一定會感動到哭（在我登頂的成就感上疊加美景的）；濕透的棉帽 T 讓人很難專注欣賞，小腿肌因為一段時間沒劇烈運動而發痠，一早匆忙也忘記裝水，其實狀態不佳。
![下次晴天搭纜車上來看好ㄌ...](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0117-1.jpeg)

但真的走完我忍不住脫口而出 omg 的那些鳥路，unbelievable Ive done 真的很開心（泣）！下山的路上覺得自己很像最棒的小狗，不知道和我聊天的那些人有沒有細膩到能夠察覺我不一般的雀躍。
![喜合照](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0117-2.jpeg)

九點上山、十二點下山，一路上都在認識不同的人（除了 focus 在石頭上的時候，人家只會想和我說 are you ok?）。週一認識的固定班底已經稍微熟悉了，我只要看到她們就能比較安心；然後比較印象深刻的還有希臘法文女和墊後支援黑人小哥（沒有他我可能會滑死在石頭上）。

我發現只要兩個條件成立：和我頻率對的人、聊天室僅兩人，我英文就很溜，還可以開開玩笑（比較像我喜歡的自己，也感覺自己比較像個靈巧的人）、分享很多 TMI。有了這個發現之後，我覺得我需要的只是緣分和時間。

我們在山頂上就在唸的 cafe 好像沒有想像中的爽，腳邊的泥濘也都一直在催促我趕快見縫早退，好在大家都覺得自己需要一場熱水澡，大概兩點我就搭著和所有人反方向的 tram 回宿舍了。

回到哈哩米已經有回到自己窩的感覺，很舒服。在前幾天得知不到 300 歐的房租含所有 utility 之後，我再也不會對 Crous 或 CAF 有任何抱怨了。

下午也是狂暴打了毛線，晚餐煮了水餃（這樣算下來一盤十顆也要超過 100 台幣很靠腰，我今天耗的力氣明明可以吃掉一整包，但是我不能花超過 200 吃一餐水餃欸唉唉），和李峻臉臉蕭威就差不多到睡覺的點了。

睡前滑碎一直在想像，我如果現在是在台灣放肆休息的話會做些什麼，肯定今晚會出現在北流（我啥時才聽得到 I know you know I love you），但像今天爬山的這種活動，一定很難跨出第一步去參加。

媽咪今天和我說要慢慢發現格勒的美好，我有發現了喔，這裡比想像得美好，齁勝又漂亮。法國除了很貴都沒有想像的糟啦，bonsoir (●°u°●)​ 」

## 1/28
![採購小連](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/jan-2.jpeg)

## 1/29
日內瓦的太陽離我有點遠，但好像不久前才淋了倫敦的雨，格勒這幾天天氣都不太好，但今天出了點太陽。

原來生活在歐洲的日子是這樣嗎，有好多國家可以隨時說走就走，在短時間內可以體驗不同的人情味、食物烹調和生活用品。想去的地方很多，趁正處還可以坐長達數十小時巴士的二十五，我下下週要去義大利玩啦。

日記斷在去日內瓦的那天，其實好像那之後就沒有好好休息過，每天都可以用忙碌和充實去形容，雖然很累，但心靈富足、體驗極佳，感謝一切。
![日內瓦大噴泉得斯](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0129-3.jpeg)

上上週日去日內瓦算是突然的決定，我沒有報名到學校學生會主辦的活動，就和前一天一起爬山的朋朋小組隊，看能不能到當地跟著團體活動，但後來發現他們好像也沒有導遊、導覽之類的安排，都是小組活動，那意思其實差不多。

瑞士的物價有共識地貴，連德國女一下車也在找 bakery 或 cafe（我真的很不想用麵包代正餐，但是一個可頌就要二百台幣了，我閉嘴），最後走了不少路到了很一般的 cafe。比起在法國，我更不願意點咖啡了，但放收銀旁邊標示 1 法郎的甜甜麵團，我還是忍不住點了一個，很差勁；燻鮭魚貝果好像是這種代餐我的定番選擇。
![這樣要快 400 台幣==](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0129-2.jpeg)

歐洲人真的滿能夠接受三十分鐘的腳程，我問出要不要搭公車可能像是笑話；與不太熟識的人長時間並肩走路，加上是出去玩的名目，對我來說非常疲憊，而且我聽力很爛欸，我又不是只會笑；旅遊風格感覺也不太一樣，可能只有我在 FOMO，不過日內瓦就那樣，除了令人驚嘆的湖水顏色真的沒啥，錯過也不可惜。等媽咪來再去蘇黎世和策馬特。
![湖水顏色](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0129-1.jpeg)

隔天（上週一）我待好在格勒，下午在處理遠端面試的東西，寫 hackerrank 還有一點手感讓我久違地在扣頂上獲得成就感，而我對於工作的期望描述在這種無奈（因為想要完全躺平休息，可我好像就是躺不平）的時候變得很坦白。雖然等待面試的期間，我一直有些後悔在這段時間再去處理這些跟職涯（搭配兩隻手比 ya 彎彎）有關的事情，但還好其中一場面試遇到的主管是不錯的 leader，也甚是感謝。我好像可以慢慢說服自己相信自己的信念，誰愛刷 leetcode 誰去刷（雖然但是，我還是會啦 ==）。

上週二到這週二都在倫敦。我其實分不太清楚是倫敦齁勝，還是賴德家齁勝，有可愛室友、乖乖喵和齊全的宜居設備，我在大英帝國的日子過得很舒適，降雨機率在週末還很賞臉地給了倫敦塔橋和牛津大晴天，很好！
![Winter 《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0129-4.jpeg)

抵達英國，我一下飛機看到全英文的環境就大喜，仿佛人權失而復得，海關 Welcome to British Border 的字樣超秋，可以一路在世界史裡有話語權確實是有資格ㄏㄧㄠㄅㄞ啦（雖然我一直在想英國沒了皇室是不是一點魅力也沒有），但拜託你們整整地下鐵路的訊號吧。

前陣子在台灣和賴德在越味館約飯，但一開始在回 stockwell 的火車上聊天還是有一點生疏，我好像急著用一些想要了解英國的白痴問題（但也是得知了不少 fun fact⋯）來快速靠近她的生活。我自己來到法國後，一直想像並感嘆著賴德這幾年一個人在海外是怎麼生存的，我的佩服與驕傲和高中看她義無反顧的決定一樣。
![流利點餐之賴德 《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0129-6.jpeg)

慢慢翻著相簿，我想念的有賴德煮的飯、厚被被 feat 半夜爬到我腳上的 Winter、JENKI 和博物館們（牛津自然和大英）。中間幾天我靠腰過大英帝國也不過就這樣，會問 Gemini 倫敦眼屌在哪、這三小爛天氣要怎麼過日子啊，但再幾天後，賴德帶著我在她的地盤鬼混，喝她喜歡的抹茶
![JENKI!! 《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0129-7.jpeg)

、吃她推薦的正宗英國菜、經過她大學住的宿舍，幾天也和室友們嘻嘻哈哈、一起做蛋塔地瓜球
![喜歡一起做東東吃 《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0129-5.jpeg)

，我在離開的那天問自己喜不喜歡倫敦，我說是的；在捨不得的情緒（感覺最捨不得 stockwell 欸）之餘，也很期待自己在天氣好的夏天再訪倫敦。
![喜歡牛津 《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0129-8.jpeg)

回（嘴巴真的講出我要回法國還是很彆扭）到格勒的這週二，我上了在 UGA 的第一堂課——法文。我在期初的時候不自量力地考了法文考試，幾乎是從頭猜到底，因此被分到了 assume 你已經會發音、單字量落在 200 up 的 level；老師全程用法文授課（2% 英文），而且講解的速度很快，我也不是完全無法跟上，但我上得很吃力，理解的比例也只有 30-40%，儘管如此，我打散詢問老師能否調回 zero knowledge level 的念頭，反而更想要戰勝蹦啾，久違地有這種學習動力，我對自己感到非常欣慰（就不說我怎麼讀完碩班的了）。
![繃啾課](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0129-9.jpeg)

啊今天禮拜四勒，今天有早八，我很久沒有準時到這麼早的課了，甚至拿起紙筆抄寫全板書；午餐一樣 Crous 吃大便，飯後去了講很久的 IKEA，商品和在台灣看到的大同小異，但比起過去多了很多好好逛完全區的耐心，也明確地了解自己的生活需求（幹這個感覺踏實感很滿很喜），我是真的在這裡生活了耶。然後近下午三點再咚咚咚跑到 Lidl，買了三層肉，剛剛晚餐第一次自己煮了炊飯（有成功欸很好吃欸三小）
![雖然賣相很差但是第一次自己在這裡成功煮熟飯](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0129-10.jpeg)

，飯後整理了房間來放今天買的東西、預約了下週的滑雪課。我很期待自己用新的鍋碗來練習煮飯，也很期待學習全新的事物。

一直到今天，我每天醒來幾乎都有安排，處理面試也好，打理生活、聯繫感情或煮飯也好，每天每天都好充實，也可以稱作自己喜歡的生活，一切真是太美好啦！感謝感謝，也繼續活著。

## 1/31
今天是今年一月的最後一天，時間飛快。

連續兩天的早八對於我來說實在是太折磨了，昨晚沒設鬧鐘，今天 12 點才起來，好像是我住進哈哩米第一次自然睡到這麼晚，我和這個床和枕頭已經有點熟悉了，就算這個枕頭高度還是讓人有點在意。

為了省錢，我最近都在學怎麼煮飯。睡前除了沈迷男色之外，煮飯影片也同樣上頭，昨晚睡前就很期待今天起床開火。午餐又試了一次不同口味的炊飯，今天賣相佳，已經學會用洋蔥爆香了，備料下鍋的動作也不會手忙腳亂，但最後悶飯又忘記加醬油而開蓋，米有一小塊沒有熟透小可惜，但是成就感仍然讓這一餐滿足到不行。
![看起來不錯ㄅ](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0131-2.jpeg)

飯後久違地跑咖，我一個人在格勒都還沒有在外面好好喝過咖啡耶。選了幾間請李峻幫我決定，今天來到 Victor Hugo 一帶的 Bom，我出門前就和李峻說 Bom 在韓文是春天的意思喔，沒想到散步走來看到招牌就寫著 봄。店內的裝潢很簡單（今天在 Google Map 上稍微看這裡的咖，好像都沒看到像台灣那樣，會主打裝潢來吸客的感覺），白牆和基本的桌椅，吧台不大，比起台灣咖的空間來說一點亮點都沒有。

我來歐洲喝了一次拿鐵，發現牛奶的比例真的太多之後，就都改成點卡布了。今天也是經典卡布。我開口用法文說要一杯卡布、用卡結帳、謝謝，以為這樣就順利結束這一回合，但還是卡在選奶環節，可惡，還好老闆人很好地和我切英文。這邊燕麥奶、哩哩摳摳奶和牛奶好像沒什麼價差，咖啡廳大部分都至少有提供兩種以上的選擇，而且免費。

幸好戶外座位的男生很快就離開，我如願地狗在街邊，開喝我的卡布。
![在台南就很喜歡在露天座位喝咖ㄌ](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0131-1.jpeg)

李峻陪我坐下之後就去洗澡了，我很開心地拿出包裡的毛線，就這樣聽著音樂，在看得到雪山和藍天的街邊喝咖啡、做自己喜歡的事；路上經過了不少人和狗，不知道 Bom 是不是新開的店，有很多人駐足看看菜單，人們看起來都悠悠哉哉的，好像沒有煩惱（不了解語言的情況下，我很常這樣認為，偶爾會因為自己的無知，也覺得這一大群講我聽不懂的語言的人很笨）。如果每天在格勒的天氣都這麼好，走在路上望向盡頭就是阿爾卑斯山，那能有什麼煩惱？

一邊穿針引線，我一邊想像的竟是我離開那一天的感覺，我現在開始會怕我太喜歡這裡了。以交通來說，格勒的地理位置其實不是特別好，但可以用很划算的價格和非常短的時間滑到雪；以出遊來說，只要在歐陸比較發達的城市，要去哪裡玩都好方便，但好像不管是哪都很難吃（期待西葡打破我的認知）；以生活感來說，WLB 從超市打烊的時間就可以感受到，人們在運動項目上也有超級多樣的選擇、也喜歡運動（路上有超多跑跑人），假設有規劃渡假好像也能放下包袱好好 relax，但行政效率就是死了（我的 CAF 不知道什麼時候會過）。選擇在哪個地方生活本來就有捨有得，太難量化去 trade-off 讓我很迷惑。

我現在可能要搞清楚自己是喜歡在這裡生活，還是著迷於自己在這裡學習了很多全新事物的感覺。統整居留資訊、蒐集划算情報、練習煮飯，留學生的生存之道讓我像是全新的人，最近也開始學用棒針、下週要學滑雪，我的生活終於沒有了工作，充滿著所有我想做的事情。我不曉得是因為現在所有時間只歸我一人而感到幸福，還是這個我所居住的城市所帶給我的感受是幸福。

晚餐和 Charlene 一起吃了 Bobun；李峻陪我來辦入住手續的那天，我們一起吃了 Qtea，那之後我就都沒有在格勒吃過任何的正餐了，今天這份越式算是我一個人在格勒第一次外食。飯後我又回來處理北義旅行的規劃，因為預算有限，我糾結了好久要不要去佛羅倫斯。
![不錯喔](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/0131-3.jpeg)

因為真的太難得了、太遙遠了，我不知道下一次再這麼容易抵達這些地方會是何時。我考慮了之後去南義可能會去的地方，而開始用刪去法算我能不能再有機會經過佛羅倫斯，或是波隆那或維洛納適合待幾天，能不能減少天數好讓我安心地放棄佛羅倫斯。一件一件我想確認的事情都讓我的匱乏感越來越重，深怕錯過任何所謂的經典。

我超級討厭來到這裡之後超級 FOMO 的自己，卻還是一直感覺放不下。反覆確認讓我自己也很煩躁，更加不解旅行的意義為何，雖然這種事情很難用文字定義，或是甚至不需要意義。我出發前很明確地知道自己決定交換的原因——我想要拋下一切來這裡好好放鬆，而選擇歐洲的交換校就是想要好好玩多個國家；但現在如願了，我常會玩得好累好累，這樣就本末倒置啦。

所以說是經濟、體力的問題，還是活著就是不能那麼貪心勒（我這幾年很累欸靠腰喔）。

------------------------------------------------------------------------------------------------

以上。小連同學在格勒的第一個月，幸福喔，感謝閱讀。
![喜學校莫名出現的羊羊們（和狗子）](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/jan-1.jpeg)`,ip=`---
title: "格勒遊記 (2602)"
date: 2026-03-17
description: "我在台南的時候就知道了，那些景物、節日和氛圍的美好的都是假的，只有自己的感受是真的。"
category: "遊記"
tags: []
imageUrl: "https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_02/02.jpeg"
---

## 2/3
蹦蹦姆啊！我在亂用法文，可能我下次看到也看不懂。

今天早起又是為了面試，目前走的流程和我預期的一模一樣，我也知道在我目前拿得到的面試中，主管想聽什麼、我怎麼表達可以是好的 candidate。這就是語言賦予我的。

午餐又自己煮了味噌炊飯，水有一點點多了（我選擇不和李峻頡承認，不然他又說我在亂搞），但還是很好吃喔！昨天因為去學校附近的大超市晚回宿舍，而沒有和李峻講到電話讓他生氣氣，今天懶得洗衣服的我們兩個講了好久，台北紅玫瑰，帥氣 na。
![先用蒜頭洋蔥炒過再煮飯不會黏鍋喔！！](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_02/jpg02/0203-1.jpeg)

兩個人可以一起懂「爆香、死鹹、丟臉、順利、圓滿、層次、底蘊、愛」之類的字詞，其實在無形之間就把熟識的距離拉近一定程度了。中文讓我覺得自己是一個有趣、頗有內涵的人，而英文把我變成了無聊、很難靠近的人。很神奇。

面試過程中免不了矯揉造作，但我說海外派遣會是我有意願繼續下一 round 的第一原因；要錙銖必較的話，我也只在法國生活兩週，但在海外也待了一個多月了，不知道再待得久一些我還會不會有這種念頭。比起兩週前，我現在比較會煮飯了，想家的感覺已經被我的皮蛋拌麵稀釋。

不過語言環境降低了我對生活的掌控權（動機到實現的行動能力），這個部分還是沒辦法忽視。所以要馬我真的下定決心學某個二外到歐洲，要馬找一個英語系國家（只是也沒哪個特別有興趣）開啟第二人生。

像是找雞「湯塊」、買「無糖」優格，這種小事我也需要動用 Gemini 幫忙確認；在宿舍廚房想要認識新朋友，好奇他們在煮什麼、平常怎麼打理三餐，也沒辦法好好溝通；頂著一個亞臉本身就是少數了，開口再沒有蹦啾感覺就會被差別待遇。

也沒有特別不適，只是感覺很難產生歸屬感（只待兩週必然，但我會掛著問號再看看）。

傍晚出去散了步，天氣好好，格勒這個環山的小鎮，每個路口都好漂亮，真的好漂亮。逛了兩家家樂福，好像開始對每一區的所有商品不會特別感到新奇了，比較像帶有生存目標去核對目前有沒有這個需要（我今天買了 toilet paper）。
![這裡離我的宿舍走路三分鐘，就看得到 Bastille 城堡](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_02/jpg02/0203-2.jpeg)

回來迅速煮了 Charlene 推薦的 MAMA 麵（蝦醬真的很爽），就出門上法文課了。相比上週來說，今天比較進入狀況，有強迫和隔壁同學的 speaking 環節，單字量在短時間內大幅地提升，也比較敢開口跟著老師唸；但全法文上課還是有 40% 時間聽沒有。

我一回來和李峻分享了很多，第一句話就是今天的法文課很好玩欸！一開始直接ㄍㄧ到我左邊的黑人原本讓我有點緊張，但我後來和他一起練習 QA 之後，很喜歡和他聊天。

他叫做 Stephen，21 歲在英國長大，上課會用靠腰法國口音的方式練習發音，我也和他分享我才剛從倫敦回來，他用一個蛤英國那麼無聊、你沒事跑去幹嘛的語氣問我去幹嘛（就是很想扁他的那種國中男口氣）；下課說掰掰之後又在 tram 遇到，一看到我他就蘇漢 what‘s up bro（搭配西式擁抱），真的很大聲，但真的 nice to meet you 喔！

右邊是一個漂亮女生叫做 Ali，我們沒有聊太多，但目前感覺是一個人很好、可以聊起來的妹妹（我在這裡好像還沒遇到比我老的==），我問他 difficult 1-10、他說 7 maybe 8，我就小鬆一口氣了，一樣 nice to meet you，我希望下次也可以坐你旁邊（結果他隔了三週都沒來）！

下課後的 tram 被強制與義大利男坐牢，他感覺是看到 Stephen 過來我們變成一坨好像很嗨才來搭話的，結果最後剩我南寮漁港和他一起尬到 Gare，我把我要去義大利的行程、我妹的男朋友都搬出來了還是尬。害我跟你沒對到，下次看到我就不用說 Hi 了（要再試也是可以啦，但是我們都法文課下課就不要折磨對方了）⋯

今天認識了兩個新朋朋，法文課進入狀況，ㄊㄟㄌㄟㄅㄧㄤㄥ！然後義大利規劃得差不多了，現在很期待威尼斯嘉年華。一切都還不錯，除了一直飆升的匯率。一直滿懷感謝。

## 2/6
如果我是在巴黎讀書，不知道生活起來會不會比較浪漫。

雖然和李峻在塞納河畔散步的浪漫很重、很長，可以記很久，只是實際生活起來不知道又是哪一回事。

格勒的生活開始多了陰雨連綿的潮濕、白雲環繞無雪的黑色大俗頭，笑著說英文不好一邊英法夾雜和我溝通的市場肉販，搭上開到一半突然叫所有乘客下車的 tram，突然把乞討杯伸到坐車的我臉前的流浪漢，還有紅色毛線織太久出門看到會晃的鐵軌。
![雨天清晨（7:30 AM），在聽不懂的廣播講完之後，突然整車下車](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_02/jpg02/0206-1.jpeg)

有喜歡的，也有討厭的；仍然不適應的，徹底無法接受的。

尼莫和爪爪不可兼得。道理我都懂，但是想要的還是很多。儘管我講不出精準和篤定。

今天在煮飯的時候突然意識到自己抵達學校差不多一個月了，我學習了好多全新的事情，這種感覺真的很好。對於準備進入職場的害怕，我有了不一樣的解讀，這部將只是階段轉換，台灣工時極長和看不見盡頭的 next step 帶來的疲憊，必是消磨我對全新事物渴求的殺手。

所以我現在常常 FOMO 會不會來自於我即將賣出去的時間自由，怕年輕的時候沒有可以抽出來追極光的長假、怕想要潛水滑雪卻沒有足夠的資源來實現。我只是買得我的薪水而已啊，怎麼感覺代價好大。

今天扛著雪板的我很帥氣。當下美好的時刻卻還是會想起我在台灣的時候常覺得日子沒有盼頭，原來可以是一場演唱會，長大看了太多好像也失去了魔力；我現在對未來半年的日子滿懷期待，但會不會就只有這半年了。
![扛著雪板的我 ==](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_02/jpg02/0206-2.jpeg)

一切都很難得，我知道。體驗的快樂和背後害怕再也無法如此的恐懼並存，快感和痛感都很清晰。

## 2/9
我大概兩天前在洗澡的時候，有了想要在格勒留下一個刺青的想法。

第一個稍微篤定的圖是我的那顆蕃薯，周邊有很像會發光的微粒，像是我想要旅居的地方；但是不知為何有種不太酷的感覺。第二個稍對自己肯定的是格勒的緯度（然後我的 23.5 要回去台灣再補），未來要在我每一個居住的城市裡刺上一排；好像還是有點不酷。

我想要成為酷酷的人。裡面包含我自己覺得酷酷的元素，那不知道受大眾觀感、流行趨勢影響了多少，我想先學 snowboard、我想要穿得寬寬的、我想要活在我自己的殼裡面。可是還是一直一直在比較的輪迴裡。

「如果生命的第一次排練已然是生命本身，那麼生命能有什麼價值？」我每天盯著行事曆、重複劃記我的出遊時間就已經失去了旅行的意義，這是結論。其實我應該是不了解能夠讓自己休息的方式。

我記得第一年在成大，走在工學大道上非常非常討厭當前生活的感覺，現在回想起，我可能不是討厭那個選擇，我只是還沒有對周遭環境的掌控權；可是我在台南就只見過那一次紫色晚霞，漂亮得在我的記憶裡清清楚楚，再後來我每次走過總圖，都能再被那短暫且有力的力量撫平不適。

我看過清晨巴黎的天空了，和那天我的天空一樣。我好像很貪圖這種天空的渲染，這是高緯度的特權。我走出今天的咖啡廳，點播 Burgendy Red 是第一個念頭，讓我一路從那個傍晚 go through 到今天。

我試圖在低矮一點點的格勒也找到一點粉紅，有幾處，但又少又小地像在告訴我那真的是特權。可我也沒特別喜歡巴黎（我打出了也）。
![一點點](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_02/jpg02/0209-2.jpeg)

Burgendy Red 在我第一次聽的時候就很喜歡很喜歡，整曲的開頭和所有我聽過的歌都很不一樣，我原本講不出個所以然，但我在離開 L'Aparthé 轉角往 Alsace Lorraine 走的時候悟道了，因為那像是尾奏。就好像我在法國的生活，才剛開始沒多久，我早就在倒數自己的離開。
![L'Aparthé（究極省錢，跑咖最多一週一次）](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_02/jpg02/0209-1.jpeg)

Spotify 的隨機很強，這啥我黏著的原因，不知道 UGA 的學籍能不能讓我繼續擁有學生方案（不能，我又再試了很多次，用到上限了嗚嗚）。格勒（好像）有一點散去的時候（東安是我是一隻魚）；I can be what you like 我沒有聽到撇踢啊。我在想要隨心所欲和努力迎合世界的模式之間切換得很好吧。

我喜歡最後重複小節但降速的細節。我喜歡宿舍只開玄關燈的空間。我發現我閱讀完可以做開心 emo 的動作，要多讀書。

晚上李峻吃了肉次方，回宿舍之後查了吃太飽怎麼辦，說要順時針還是逆時針揉肚子，連帶抱怨了我不在，然後我們一起開共享螢幕逛 591 和南崁估狗妹。我好想回家，真的好想家，好想念台灣。

## 2/10
那天一定會來。所以我在練習了。就和我坐著塞滿行李的車子，從台南北上回桃園的那天一樣，回程的反芻不適感並沒有想像中的難受，但我困在小空間被遠離台南的感覺還是可以被複習，隱隱作痛在心頭上。

## 2/11
人們永遠不會知道下一秒會經歷什麼。時間會偷走很多東西。

今天早上起晚了，外頭是陰天多少有些影響心情。午餐煮了一盤像樣的辣醬雞腿炒飯，我一個原來不會煮飯的人沾沾自喜地滿足完食。出太陽了。格勒的天氣好像很常是這樣的，午前陰雨、午後天晴，而且加上路口盡頭的雪山（講很多次了）、沿著整個市區流過的 Isere 河，是讓人心情很好很好的晴朗。
![辣醬雞腿炒飯（李峻說還可以）](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_02/jpg02/0211-1.jpeg)

原來上週末決定這週整天沒事的安排是博物館，但週一和今天都沒有博感，我在抵達格勒後的某天已經對自己下定決心——在這裡的每一個行動要完全 follow my heart，因此我在午後四點才懶懶散散、毫無期待（這些算是日常了嗎）地出門，從 Alsace Lorraine 一路散步到 Maison du Tourisme，回程在巷弄（歐洲的小街很不貼近巷弄二字）裡迷路，最後在上次 city tour 導覽到的橋邊，不靠導航而知道自己的位置。

白天從橋上看去的風景（在台南市區其實很難用風景去稱呼眼前的事物）很美，有計劃搭乘的 Bastille 纜車、對岸有名的 The Old Bridge、抵達也一個多月了還是看不膩的阿爾卑斯山、所謂很歐洲的那些樓房。站在橋上還是會搖搖晃晃，上一次踏上這座橋是晚上 city tour 經過的，在一片黑之中看得到山上的跑跑人，但只聽得到河流水聲；今天是傍晚碰巧來到，很驚喜，儘管陰雲遍佈，但眼前的所有還是非常清晰美麗，很喜歡。
![過橋就是 The Old Bridge](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_02/jpg02/0211-4.jpeg)

其實今天出門的目標是買 zip sac，但最後我只拎著一盒蛋和一條櫛瓜返回，還有預計我會很難忘記的一次散步。

走到橋頭後，我就打算先沿著對岸的步道往回走，到一半再回對側。現在算是二月中，快要迎來春天了，現在的冬天不會凍到難受、涼意不刺骨，讓本能產生的熱能變成很剛好的衣裹，體感溫度恰好。就和 24 年我在延南洞很難忘的那次散步的天氣很相像，而我還是不太會描述，我就是覺得好舒服、好舒服，我非常喜歡這樣的天氣。
![我從這張的左邊來然後右邊回](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_02/jpg02/0211-2.jpeg)

能夠重新具體化的方法，大概只有下次再次感受到的時候，和同行的人說：我喜歡的就是這個天氣喔！首爾和格勒的緯度也差了個十度，但他們的冬春交際好像都是如此舒適宜人。就和晚霞是高緯度的特權一樣，台灣沒有這種天氣，四季模糊雖然不至於困擾人，但我對春天和秋天總是有嚮往而小有失望。還是回到我想要探索的那個問題，所有選擇勢必都是 trade off 的無限排列組合。

沿著河有不少長椅和躺椅，我和李峻說下次天氣好，我要來河邊曬太陽、打毛線。前陣子某天經過 Victor Hugo 的時候，我突然了解了為什麼歐洲會有這麼多的公園和長椅，我也突然懂了李東海瘋狂炫萊卡的那陣子拍的長椅照片可能有什麼含義。
![《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_02/jpg02/0211-3.jpeg)

一張長椅可以記載的回憶太多了。不同人、不同時期的對話，都可能在並肩倚靠時，成為某個人一輩子最難忘的一段體驗。

兩人依偎坐在河邊親暱，兩人拿著速食一邊分享日常，兩人抽著菸聊著辛苦與煎熬。一人倚靠著椅背，形成最舒適地去體驗世界的樣子。都好好。我在路過時會試著揣測兩人的關係、一人的心情，那一張張的長椅就變成了我認為最能夠為人們創造回憶的地方。那麼若真要給旅行的意義下註，好像沒那麼複雜而難以確認了。

當下的心情和感受就是全部，眼前所見的是不是 bucket list、是不是所有人趨之若鶩的，好像是其次了。

對了，昨晚的法文課也很好玩喔！我早到教室就坐到了上次的位子，然後 Stephen 就來了，一樣坐在我的左側。他一直蘇漢蘇漢的叫真的讓我覺得這個人像是我交到的第一個外國人朋友，很感謝；練習口說的時候會給我時間慢慢唸，偶爾講到的 topic 會順帶聊一點關於對方國家的小事，終於是發自內心地滿喜歡這樣的異國交流。

上週在電梯裡遇到 Malak，發現原來我們都住在哈哩米，昨天下課她就主動來找我一起同行回家，安心許多。路上聊到了她的背景和生活，雖然不能說台灣離戰爭很遙遠，但四周環海的小島還是很讓人安心而感覺與世無爭，可以隨意回家原來也是一件很需要知足的事情，也更加珍惜自己在這裡的所有機會。希望一切和平。

晚餐煮壞了，味噌湯的醬水比例好困難，我難得記得加鹽巴，結果太鹹，ㄌㄩㄝ。

## 2/25
好像從義大利回來就感覺到了，春天來了。

今天下午也是刻意出門散步，天氣真的很舒服，氣溫回暖至將近 20 度，路上看到不少人都穿著在台灣看得到但不知道怎麼穿的所謂春裝（薄針織、亞麻⋯），手上沒有拿厚重的外套，不曉得是心理作用還真是如此，人們也褪去了所有冬季憂鬱，整個城市的氛圍活潑、雀躍了許多。

![Victor Hugo 真的多～超多人ㄉ](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_02/jpg02/0225-1.jpeg)
雖然路邊的樹還禿禿的、BGM 也還沒有蟲鳴鳥叫，但看到非常多人散落在 Victor Hugo 廣場和 Isere 河邊的長椅上，好像大家同時出現在這，有默契地和彼此秘密宣告：對，春天來了。有人正坐著低頭滑手機、側躺著和朋友聊天，或是用尾椎支撐地攤在長椅上看書，或是脫下布鞋、雙腳打直，好像在家休息一樣，他們在週三的午後，好像沒有煩惱地單純曬著太陽，沒有生產力。
![Isere 河邊的長椅上](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_02/jpg02/0225-2.jpeg)

感覺我這一輩子在台灣看不到這樣的畫面。

回到宿舍低頭看電腦，傍晚時間望出窗戶看到的亮度和習慣認知不一樣，真的是春天吧。今天整天好像就只有起床煮飯吃飯散步，啊，又要煮飯了。

這次回到格勒之後，發現這裡真的是生活的城市，我已經可以背得出 tram B 從 Gare 到學校的站牌順序，我不用導航也知道我正在哪裡、要往哪裡，比起旅行的去處真的多了分熟悉感，是熟悉到自己會有點意外的程度。雖然也才要準備滿兩個月。

那天在等回程夜巴，身邊所聽到的語言從全義大利文慢慢回復充斥著法文，也產生了那麼一點點的安全感，更是意外。我當初是很抗拒來法國的（儘管現在意識到 language barrier 之後也不覺得去東歐國家會好點），但現在在某些時刻，會忍不住（不去和自己計較地）把「回法國」三個字表達出來，也算是和先前的不滿和解了吧。

## 2/26
只有我自己知道今天下午坐在河邊的躺椅上，曬太陽、打毛線，耳機裡放著喜歡的歌，是多麼幸福的事情。
![《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_02/jpg02/0226.jpeg)

語言是雜訊，人類是動物。可也是文字，讓我躺在宿舍的床上，想著未來的某個辛苦的晚上，能夠想起這個午後因此留下了一些什麼。

最近逐漸找回以前喜歡一個人獨處的習慣，也刻意地讓自己練習遠離社交媒體和手機；比較是我的魔鬼。總之，我很喜歡現在在法國的每一天，其他就不重要了吧。要是不重要的。

## 2/27
散去的時候是格勒散步，Forse 是第一眼 Lake Como，小黃瓜蘋果的清新是威尼斯的興奮。這些只有我知道。

今天早八，我上大學以來，從來沒有像這樣這麼努力地每週準時出席過，在國外上課也是珍貴體驗的一部分（昨天上到一半突然說要去外面邊上邊曬太陽，超好的）。
![這樣上課真的更會覺得學習是美好ㄉ事情](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_02/jpg02/0227-1.jpeg)

這是我這學期第一次長時間、高頻率和組員（雖然是新加坡人，但要 speak English）討論並完成報告，內容和扣頂一點關係也沒有，我也很會喇賽、大概知道老師要看什麼，但小組討論全部用英文來處理實在讓難度翻倍。

我發現中文太好會打亂我用英文思考，很嚴重的干擾。

我對中文的掌握能算得上我的驕傲。我知道每一個中文字各自的意思，而單字組合而成的詞語可以有很多複合的含義，這對於非母語人士來說，恐怕很難意會，六書大概是全世界最頂級的造字系統了吧。

複可以是 multiple、compound、雜可以是 mixed、chaos，而複雜這個詞語則是 complex、complicated（偶爾 elaborate），我對這些東西的含義計較是被升學體制逼出來的；中文博大精深，意象可以從單字被抽取出來（造字反之），而有著類似意思的單字在根本含義上還是有很巧妙的不同，但英文在類似意思的單字上，好像就是基於使用情境有所不同而已（但我出來半年也沒有每天溜溜英文，片面之詞）。

我寫繁體字喔。但就好難用英文直接思考喔，真的，我今天感受到了，我說話之前都先寫了中文一遍在腦袋裡，再用我擅長的中英翻系統去輸出。語速慢，講得卡，而母語人士一定覺得我的英文很僵硬，應該就像中文文言文的感覺。

今天下午又和昨天一樣跑到河邊曬太陽、打毛線了。走到岸邊長椅的路上，我看著遠方的雪山、橋與河水，還是忍不住按了快門，真的真的真的好美喔；回台灣的日期八成確定了，時間變得很像我所能觸碰到的細沙，粒粒分明而細小到無從抓緊在指縫。二月就要過去。
![狗子](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_02/jpg02/0227-2.jpeg)

現在連在這裡流的鼻血也是珍貴的（抱怨很乾的意思），這種走出門外就能看見阿爾卑斯山的生活，一輩子就這一次了吧；出生在哪真的是生前和神明玩抽鬼牌。雖然這遊戲最贏的人不會有什麼好抱怨。

我在台南的時候就知道了，那些景物、節日和氛圍的美好的都是假的，只有自己的感受是真的。我接受了，我認同了；我也還是在適應他們都是假的。
![回宿舍路上得斯](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_02/jpg02/0227-3.jpeg)

------------------------------------------------------------------------------------------------

以上。小連同學報告完畢！
![《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_02/IMG_8568%20(1).jpeg)`,fp=`---
title: "格勒遊記 (2603)"
date: 2026-05-08
description: "午後我在長椅上讀書、睡著、讀書、發呆。太陽落下有點冷了，身邊聽不懂的人聲都跟著伊澤爾河往我的右手邊流了。"
category: "遊記"
tags: []
imageUrl: "https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/IMG_0140.jpeg"
---

## 3/1
三月的第一天，滾燙卻溫和的陽光灑在喜歡的衣服上，風大的時候波光裹著青苔閃成一顆顆綠色的鵝卵石，當他靜止，又像個還不太會握筆的小朋友一樣，在湖面下淺淺的地方畫著一圈又一圈的小圓周，我一邊抓著毛線球變魔法、一邊哼著這條路我要自己慢慢地走。
![鵝](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/IMG_8764.jpeg)

一個人的時候我不用取悅誰。對好多關係都是這樣的，所以在我好好地活著的時候，我選擇掐著自己的手腕，赴約說著那些話。我就是看著外面的殼，表演我所認知的社會喜歡的行動，精確地。

Anccey 車站附近一早像是空城，還好週日有市集趁早擺陣，陌生人潮在獨旅的時候算是沒有負擔且有力的有聲陪伴。我花不到一個小時就把 google map 上存好的點逛完了，沒什麼特別的喜歡或是感受；不曉得這近七個小時的時間還能幹嘛，忍不住在歐洲公園先吃了一早起來弄的午餐，這種自己帶的（還沒熟的）酪梨燻鮭魚吐司（情緒價值 70 味道 30）也許讓我看起來像是在歐洲生活的東方臉孔。
![市集滿長一條ㄉ](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/IMG_8696.jpeg)

沒有太陽太冷了，就算觀光城市的一杯卡布至少都要四歐，我也還是找一間咖啡廳卡了一陣子。這家咖啡廳叫 ODDS，裝潢的樣子終於讓我有點想起在台灣跑咖的感覺，看得出杯盤是特地選過的、自己喜歡的，吧台上的曲線燈條一定是看了上百眼都順眼以後才裝上的，牆壁的每幅畫之所以掛上和上下左右怎麼排序也有苦惱過。
![ODDS 一隅](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/IMG_8665.jpeg)

我突然就想清楚了為什麼我說在歐洲跑咖沒有那種像在台灣一樣跑氛圍的感覺，因為他們真的只賣咖啡，他們不賣品味，人們坐下也只是喝了咖啡就離開，不會有人把咖啡廳當作招待所、自己的房間；如果不是有什麼深刻的對話和驚人的消息，去咖啡廳只是攝取咖啡因並經過一段時間。

台灣的每間咖啡廳幾乎都有強烈的個性，擺件、杯盤、菜單、用人等等代表著店名、代表老闆（主理人 ==），無一不針對某種品味的偏好去選擇和設計，想操弄情緒價值的會再打一些煽情的 slogan 像是我永遠歡迎你把這裡當家點點點（我現在不中招了，就算中了也有感覺自己中了）。

而且台灣專業的咖啡師好像真的不少，拿獎、考證照的證明常常被掛在牆上，咖啡廳不是咖啡和氛圍都超強，就是取一發揮，而我目前在歐洲去了至少二十間有了吧，好像只有慕尼黑的鱷魚咖啡是我認為兩者兼具的；今天的 ODDS 是有氛圍的。

狗到一杯 grande 卡布沒有了，我離開咖啡廳再去繞了一次早上還沒擺好的市集。某些角落和台灣夜市一樣有很重的廉價感，比如賣一堆盜版手機殼，還有很多我看不懂的食物，試吃到一小塊超甜牛軋糖和超鹹腸腸就當作回憶，一早相中的中東香香攤位已經賣到收攤了，可惡。

Anccey 被叫做法國小威尼斯，有一兩個場景確實有那麼一點味道；在抵達後，我才發現這個週末有辦假威尼斯面具節，路上又出現了一堆面具人，在法國也看到這些就覺得很裝模作樣了，而且你 gelato 一球就是人家兩球的錢，少在那邊學。
![款式也和嘉年華的差不多，只是背景換了](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/IMG_8675.jpeg)

我在下午一點多感應到在湖邊喜歡的位子，度過了一個很平靜而美好的下午，看著湖面發呆、望著遠方雪山或是織毛線。好好喔，我真的在好好休息耶，很舒服，這種狀態對我來說非常可遇不可求。這兩個小時非常珍貴，只有我知道。

（開始敷衍爛尾）回程巴士發車前的一小時出發買薰衣草蜂蜜 glacier，也和巴士廁所賭了一把。一路走回去車站，好吃是好吃，薰衣草香帶著蜂蜜的甜有點日本的味道，我還一邊讓下午曬著太陽的幸福回甘；但在看到巴士廁所 out of service 整個人就不好了，長話短說就是我慘賠 20 歐。討厭吧啦吧啦咖。
![薰衣草蜂蜜很喜](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/IMG_8799.jpeg)

不過快速讓自己的心情復原已經算是出國兩個月左右所習得的技能了，目前在更改搭乘的火車上已送出客訴信，然後暫時讓 20 歐逍遙大腦之外，繼續保持在 Anccey 湖邊幸福的平靜感。今天一日遊很開心喔！
![《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/IMG_8760.jpeg)

## 3/6
春天來了。

「來」和「去」本來就在描述某個瞬間的動作。只是今天看到的櫻花感覺太像瞬間炸出來的東西，昨天和今天明明只相差 24 小時的時間，這差距體感像是一個月之類的；除了是溫度以外的事物告訴我春天真的來了，也讓我後知後覺原來法國也有 cherry blossom 這種東西。

今早我賴床賴了半個小時，從 7:00 開始每隔 10 分鐘我會起來重設鬧鐘、再睡直到 7:30，昨天滑雪後的疲累和痠痛有部分我會歸咎於年紀問題；在國外的一切都珍貴到我還是心不甘情不願地搭上 tram 去了早八的教室，路上看到兩棵系館前的粉紅櫻花，展開了我對新的一天的期待。
![我一看到真的發出了哇～的聲音](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/IMG_8992.jpeg)

週五上的 human computer interaction 算是我 assume 的水課，以技術面來說確實，但老師要求的 interaction 過多，反而像是在讓我練習怎麼 persuade someone or explain something by English，變得一點都不水（我相信對那些講英文不用用腦的人來說一定超水，但阿兜仔真的對每個細節都錙銖必較，問一卡車問題（我聽了覺得蛤這個在問屁啊的那種）不想停）。

下課後特別搭了公車去 IKEA 買便宜的夾鏈袋（從這裡到宿舍超麻煩，要轉兩班車，我為了省沒幾歐只好用時間換），然後在 Carrefour market（規模和 city 不一樣喔！我在這裡買得到冷凍蝦蝦）補了貨，回到宿舍已經下午一點左右了，今天煮的飯還不錯喔。

昨天滑雪後和不是朋友的朋友一起吃了阿爾及利亞的庫斯庫斯，很好吃，也多認識了一個韓國女生，就約好今天一起吃 빙수（韓狗刨冰得斯），於是飯後我又馬上出門了。
![庫斯庫斯](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/IMG_8987.jpeg)

我原本以為只是下午茶的概念，沒想到他們對於這攤的共識是七點的晚餐，我的稍作拒絕在一兩次的回應裡都不太好全身而退，還因為我想起來我昨天不知道幹嘛說掰掰的時候是說 see you tomorrow dinner？？？還是認了。沒法早退 aka 我和這坨人要一路狗至少四個小時，姐姐沒辦法欸（姐姐後來還是ㄍㄧㄥ完了）。

我們就一路從 victor hugo 小百貨，再搭 tram A 來回一小時逛了 grand place 超大百貨，粗暴殺時間。他們說我很像日本女生，說一看到我就有那種在聽 indie 的氣質。好，我忍不住說出了蛤，他們大概也不懂我的情緒。

過程中常有全頻靜音：三個 0304 的弟妹低頭滑手機 feat 正在遠離哀機和碎的 00 姐姐只是往窗外發呆，不確定是不合拍的人們在異國硬想要找伴陪（坐牢兩個字的體現），還是和我差了三四歲的弟弟妹妹們現在都常這樣科技冷漠；反正姐姐暫時沒辦法把你們當朋友。害。

也是因為我某種對朋友定義的堅持，讓我目前唯一一趟和剛認識的人出去玩的體驗很差勁；看到他們有一起去北歐自駕還是會有點羨慕，不過這種 trade off 我不會甘願。

也多虧了他們，這兩天的兩餐分別是我這兩個月第三四次在外面吃飯，還可以吃那種要分食比較划算的料理，빙수 的抹茶口味也甜得非常合我意，好。雖然韓料口味對我來說普通甚至下，每餐換算新台幣去想也覺得十分不適，但我真的很～久沒有在不是出去玩的時候在外面好好吃飯了，還是感謝。
![要分食比較划算的料理 be like 炒雞](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/IMG_9018.jpeg)

從下午開始到現在精神已經榨乾，但春天來了的這天，我只穿著一件貼身薄刷毛內裡和鬆餅格長袖上衣，早上看到櫻花盛開讓人又驚又喜的樣子，然後如這段時間習慣的努力煮飯、拼命省錢，下午和同來交換的（不是朋友的）朋友一起吃到好吃的抹茶冰酥，全部都是我以後看到這些文字想要想起的。所以很累也要好好地寫下。希望這半年結束後，我回台灣也能找到這樣的事情，很累也想要做的事。
![榨乾長這樣](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/IMG_9022.jpeg)

## 3/8
我終於可以在窸窸窣窣的聲音裡認明那是纜車從我頭上經過了。春暖花開是春暖花開欸。

今天一早起來很困惑為何阿兜仔約 coffee 會選早上十點，儘管任何一次早起來做我不排斥的事情都會覺得日子充實；我昨天晚上一點才睡。和立陶宛妹妹一個小時的 speaking training 就在最後一眼對視的窒息之下默認了散會就是現在，其實那杯卡布不好喝，我說 wow it’s good。我覺得我是生活在真實裡，反正沒有人可以說我是錯的。

回宿舍路上我在想 speaking English 的我個性或人設是啥，講話習慣上好像很喜歡問智障問題，比如法國物價是真的很高嗎？我知道相較其他國家是的；比如你看棒球嗎？最近有 WBC 耶，我其實分不清楚好球和壞球怎麼判。如果那兩點可以讓我溜英文的先決條件不成立，那我這樣的行為就只是想塞滿音頻，我不是真的想說些什麼。

我把裝傻那招在這裡放大了。

我也其實還沒要回宿舍，我想趁早去散散步，坐在纜車站前我熟悉的長椅上曬太陽、看看書。

河邊今天有二手市集，大多賣古董，有裝著飛行荷蘭人的寶物箱、奶頭直接外露的遠古 A 書、在台灣拿來捏盤子的各種俗頭（如果這裡的人也搞感應定價那招，資本主義的起源在這根本是運氣）。這又是全新體驗的一部分，讓我眼前的所有事物成為了我今日份的幸福。
![真的有很多從來沒有見過的擺件和家具](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/IMG_9058.jpeg)

我對其他古董的興趣止在賣著老舊明信片的攤位，我站在陽傘下翻了可能有超過半小時。我一湊過去奶奶就問我要不要看看 Grenoble 的明信片，我還沒把 Oui 和 Yes 對齊。

我看到以前的 victor hugo、散步的時候一直還沒忍不住不拍一張的那個角度的雪山和橋、過去就已佇立在山上的 Bastille、市中心的那個龍噴泉⋯⋯我很像在看喜歡的人小時候的樣子。很奇怪，我看台南不會，不知道是不是在這裡開始即結束的限定感讓感受都過於特別且被放大。我很喜歡 Grenoble。

在還拍不出什麼照片的年代，原來明信片長這樣、郵票長這樣、法文草寫長這樣；不帶任何手寫字，光是表達我來過明信片上的這裡，就像和對方展示了一場冒險，有郵戳的是再想辦法寄到無法即時聯絡的某處，又更浪漫了。我就比較喜歡大家不會在心交上面說我喜歡老派約會之必要的那個年代。
![最後甚至花了台幣 500 左右買了七張，還有威尼斯和安錫](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/IMG_9082.jpeg)

其實我原本很排斥來這裡，一個我在台灣從來沒聽過的法國城市，環山而交通不便（和首都大機場比起來）對於我的趴趴造計畫很不友善；雖然不管我如何想像在其他歐洲城市、或甚至（近一點的）巴黎生活，都不切實際，也無法真的拿來做比較，但我現在非常感謝且喜歡我在這裡每天看到的一切景色。

這幾天春天真的來了，我都處在沒有能力對盛開的花朵做文字描述的無奈之中。一夜之間出現的那些綠葉和白花（白中透綠意哀鳳根本拍不出來），帶給出生在熱帶地區的我多大的驚喜，真的很難形容，原來四季分明是這樣的。春天真的是很美好的時分。

午後我在長椅上讀書、睡著、讀書、發呆。太陽落下有點冷了，身邊聽不懂的人聲都跟著伊澤爾河往我的右手邊流了。我問法國人都是過這種日子嗎？好舒服喔，好像能夠感受到活著真好，不像現實骨感的時候一樣，承認活著真好不是特別困難的事。
![今天ㄉ河邊](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/IMG_9060.jpeg)

## 3/19
腦袋清楚寫日記和看 KARINA 申留真安俞真等人跳舞之間前者比較重要，但是手指忍不住。

我戰勝了女色的誘惑，終於在從里斯本回到格勒的三天後開始回想這幾天在做什麼了。

今天是週四早八，早上七點半左右出門後所見的天空已經亮得讓我忘記要多穿一點衣服，以為春天真的來了，她拉長了白晝也升高了氣溫，但外套下的雞皮疙瘩背叛了自以為是；這幾天擤鼻涕偶爾黃黃的，好像又感冒了，不知道羅卡角的大風和里斯本青旅溫溫的洗澡水肇責各是多少。

下課後的午餐久違地到 CROUS 學餐吃大便，吃這種東西的人生剝奪感很強烈，合理化晚點去買一個甜的麵包當下午茶；回宿舍之前跑到 King Long store 買米，上一包一公斤的東北大米吃得好快，從我開始不依賴 Gemini 稍微帶著自己的想法去煮飯之後，幾乎餐餐自炊，真的省很多，但也因此我在格勒幾乎沒有和飲食的連結。
![這到底什麼大便](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/IMG_0068.jpeg)

今天挑到的麵包還不錯，是在上次被我批評肉桂捲打妹的那家可愛 logo 哺隆爵ㄏㄧ（麵包店的法文）買的；蹦啾開頭後，我用生硬的法文問這東東是不是有肉桂勒，店員馬上切英文（你自己切的喔，你先放棄的喔，不是我喔）和我說我們有肉桂捲、而你問的是有肉桂糖的 Cruffin（後來我去問 Gemini，這是 Croissant+Muffin），我馬上說要這個。
![Cruffin 《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/IMG_0072.jpeg)

果然我有被心電感應到的決定都是好的。這咖的外皮和可頌一樣酥酥脆脆，配上肉桂糖很讚，內部根本就也還是標準可頌，只是形狀做成瑪芬，學到了。下次想吃開心狗。

散步回家的路上第一次看到格勒的明信片，買了 0.6* 幾張（後來經過書局撇到一樣的 0.4 慘賠 1 歐很賭爛，而且來一段時間了都沒注意到，偏偏今天同時發現）想要寫給家教弟弟妹妹，想告訴他們學英文不是為了應付成績，是真的是賦予你去認識世界更多不同面向的能力。我很怕自己像愛說教的大姐姐，但我覺得比起課堂上耳提面命，家教合作關係都結束了、甚至還要花國際郵資，透過在我現在所生活的地方、寫下親筆文字的傳達，可能更可以成為他們動力的一部分吧。

最近很喜歡小朋友的感覺莫名奇妙地洶洶來襲，我原本還是不婚不生快樂一生派的，但最近好像因為旅行體驗有些乏味，而瞬間感覺有了孩子好像真的可以重生，長大後去過的地方也可以用純真可愛的角度再來看一次。不過我也才二五。即使選擇用愛人本身而愛，也還是偶爾會和普世價值過不去。
![這天天氣很好喔！](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/IMG_0077.jpeg)

下午都在處理六月旅行的住宿交通，媽咪和妹妹準備來找我玩了，要三個人大包小包一起移動四個國家感覺真的不容易。晚餐煮了個豬里肌炒飯，裡面還有黃椒、紅椒、櫛瓜、菇菇和蛋（不知道為什麼今天蛋打在飯上炒沒有結小塊，李峻說是火太小）；這樣真的吃得比在台灣健康幾百萬倍，但愉悅程度望塵莫及。

晚餐後用今天買的羊奶煮了鍋煮奶茶，太咩了。我上週在家樂福買了無糖羊奶優格，吃了一次就開始對羊奶上頭，一直記著下次去超市要買羊奶；優格有點羊騷味是很不錯的，這輩子第一次吃到，真的很不錯，但純羊奶就太多了，還是必調味，草莓佳，咩。
![純羊奶還比牛奶貴兩倍ㄟ](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/IMG_0078.jpeg)

然後就處理我自己的下一段旅程、打打毛線。我在訂盧森堡住宿的時候，很擔心停留一天的時間會下雨：「他已經夠小夠沒存在感了，要是再下雨，我對他的印象就要讓我這輩子真的只去這一次了」這種擔心。不曉得是不是因為某種程度上經濟條件的 downgrade，讓我出來交換半年的剝奪感和匱乏感這麼嚴重欸。

這趟最後準備從丹麥飛巴黎。在李峻陪我一起來法國的時候，我們有去巴黎四天，不確定是不是因為冬日陰天和尿騷味，或是我對這種人人強調浪漫所包裝的抬頭有點反感，我沒有特別喜歡巴黎。在想待在巴黎半天要做什麼的時候，我覺得那很不像和我在同一個國家的城市，不管是實際地理距離，或是交通運費，都讓巴黎離我特別遙遠。

我其實滿想去聖米歇爾山的，但停留的時間不長、交通麻煩，四月這趟還是算了。感覺有錢的時候要再去一次巴黎，不用計較左岸咖啡館裡的咖啡小杯到死，也不用擔心去聖米歇爾山的交通複雜，更不用捨不得只能有一天進出的迪士尼樂園。有時候想法上的自由是用錢買的。

稍微時光機來到里斯本回來的隔天。我只是要說我人生中第一次被搭訕是發生在這天，哈哈。這個男的因為長得有點亞，跑到我面前講話讓我以為同是亞臉的我可以提供一些幫忙；沒想到他一開口是究極流利法文，啊我只聽得懂 je suis japonais（假日本人喔超蛤）就說巴東，他就改說 i like your style 吧啦吧啦然後跟我要聯絡方式。大概是這樣，害羞喔，謝謝啦。（後來我們變成朋友了喔！）

## 3/20
有絕對的信念是很性感的。
![這天ㄉ最佳機位](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/IMG_0105.jpeg)

比如我打死也不抽菸，因為我知道我對事物上癮的樣子，很難戒，而且健康很重要；但如果尼古丁不會對身體危害，我現在應該很會捲菸，或是抽那種長長細細的菸，我的手那麼漂亮。擇友、發言的時機、求職、成果報告，對這些外在行為，我都有一把熟成的尺，並且我討厭沒有明確原因而生的決定；但要是討論那種和感情、自由、權利相關的議題，我優柔寡斷到死，可以同時理解對立兩面，但站不住腳。

我不太喜歡這樣觀念上的搖擺，比如有時候在和薛文威和簡志宇討論政治不正確的時候，我通常滿安靜的，因為我都覺得沒錯，這種感覺中文有點辭不達意，我覺得最貼切的就是 그럴수도 있지。

決定要來交換半年的原因是歐陸方便的旅遊基地，以及在不同國家體驗學生身份，但我沒想到的是在這裡更多要面臨到的是得找出喜歡的生活模式，除了出遊的時間，大部分的空閒是等著我找事去填滿的。

因為寬大的接受度，基於自身看待事物某種程度上的公平：台南揮汗如雨的熱天和格勒暖陽下的涼爽、行人地獄和絕對的禮讓、付費的十二年國教和長到大的免費教育，什麼的，我沒有覺得哪個是絕對的必要。

我執著於回到台南工作的原因，是天氣和食物，還有隨時能夠看見感覺得到自己長大的街角；最近好像越來越有準備回去的狀態了。可是我一直糾結於要有一個常住（至少兩年）海外的體驗，或老是想要嘗試旅居，我沒辦法果斷地講出離鄉背井的動機或是嚮往，卻又一直比較後找下一個 base，這種糾結讓我很困惑。

今天早上七點被鬧鐘叫醒，窗外的天色已經亮進我的小房間了，但莫名特別地不想去上課，這好像是我第一次在這邊因為瞌睡蟲而翹課，薄毯子拉上我又快速睡著。再醒來又是做飯，今天的炒飯有一點蛋炒飯的感覺了；午後泡了杯咖啡，處理住宿和交通，約莫三點出門曬曬太陽、在河邊看書，傍晚回來第一次做米紙料理大失敗（半夜現在肚子餓了），晚上聽聽 podcast 一邊打毛線，又差不多要洗澡睡覺了。
![:D?](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/IMG_0121.jpeg)

整天沒有外務影響的時間就這樣被填滿，最近在格勒的日子好像都如此日常而瑣碎，逐漸不足為奇；但我卻還是會覺得現在不抓住什麼又太可惜了，這 FOMO 的症頭到底從何而來，怎麼治勒。

## 3/23
人們對於法國的想像隔著海峽、隔著語言，浪漫和優雅。我沒有帶著想像而來，沒有破滅也沒有印證，只是還徘徊在找不到連結感的陌生與熟悉之間。

前天久違地熬夜到凌晨兩點，昨天整天陰雨，蓬頭垢面地搭宿舍電梯下樓裝水，又更覺得自己臉黃，下定決心要早睡；但我昨天使出了自律，今早睡滿十個小時醒來，還是好累。

起身刷牙洗臉、簡單化了妝，又要煮飯了。從冰箱拿出寶特瓶米罐，倒在 welcome kit 給的小玻璃杯，沒有特別餓的感覺要倒多少、醒來就靠腰的話要倒多少，從第一次在宿舍成功用電磁爐煮好飯之後，我已經練就了調和米水比例的功夫。

這樣類似的組合不知道是第幾次了，蒜頭、洋蔥、蘑菇先下去小圓鍋炒香，下飯開煮，另一個 ikea 的平底鍋負責煎肉和蛋，偶爾炒在一起做成只用湯匙就可以完食的炒飯，或是刻意不切裝盤，好讓我能用一隻手拿筷子、一隻手拿湯匙，形成 N 菜 M 湯的幻覺。
![我也就這](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/IMG_0169.jpeg)

格勒的路上有不少往 Chambery 或 Lyon 的指引路牌，我想去 Chambery 看看一段時間了。前天訂了車票發現隔天 100% 降雨，又賠給吧啦吧啦卡 3 歐，躁啊！不過花了一百台換得今天好天氣的 Chambery 算是不錯的交易。

在申請宿舍的時候我就算好了，我要住在靠近車站的地方。去程巴士的出發時間前 10 分鐘我才慢悠悠地走下樓，有點難以定義去 Chambery 走走算是小旅行，還是只是曬膩了格勒的太陽想要換換口味。我最喜歡的還是那張單人躺椅，但還是想躺看看大象的皮。

在格勒第一個一個人睡的晚上，我打了好長好長好長的日記，但是被滿載圖片的記憶體刷得一點也不剩了。我記得我有寫下在這裡經過的某些街角，都有我和李峻兩個人的影子。從里昂抵達格勒的巴士下來，拖著兩顆行李箱和一顆後背包，我們兩個穿過這條路抵達我那棟白白新新的宿舍。

![我在巴士上看到這個路口的瞬間](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/IMG_0172.jpeg)
這個路口在兩個月後，我從離開格勒巴士上的視角裡又長不一樣了。多了第一次扛著雪具的我、法文課下課後的知識轟炸、凌晨背著大背包準備前往米蘭的期待、早上七點半出門上學的昏睡迷幻。

東南法這一帶的城市好像都圍繞著阿爾卑斯山，隔著突破不了的高山另一側是蔚藍海岸的 Nice 了。去程在高速公路上看著群山峻嶺，對大自然的敬畏油然而生。有錢想死的時候可能會想包一台直升機，把我放在某座山的上頭，請注射阿姨幫我打全身無痛，然後把我推下去。不是海葬了。
![掛著瑞士旗子的城堡](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/IMG_0202.jpeg)

Chambery 真的不是什麼觀光城市，中文部落格也查不到什麼資料，約莫兩小時的鬼混，我只看到兩個亞洲臉，但都說著一口流利的法文；廣場上的大象噴泉和掛著瑞士旗子的城堡，差不多就是這樣了，但好天氣散步在很漂亮的公園（有刻意種下繽紛的花花草草）還是很不錯的，某些街角很像黃色的 Florence，還有和 Annecy 一樣莫名出現的建築物下方的迷你隧道。我好像是來這裡複習我去過而喜歡的地方。
![就在下車車站旁邊的漂亮公園](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/IMG_0183%202.jpeg)

回程巴士出發前的半小時我在咖啡廳裡課金今天份的咖啡因。和每個我去過的小小地方一樣，覺得可能這輩子都不會來第二次了，但離開 Chambery 的時候沒有任何不捨（好像他就是格勒的 plugin）。我就是來確認看看也有人類活在這個地方，呼吸。

今天特地搭上巴士去散步，好像在高速公路上看著窗外的時候最幸福了。

異國生活連帶著對人臉辨識的記憶能力降低。上次那個搭訕我的小哥長怎樣我已經忘記了，三週沒來上法文課的 Stephen 也印象模糊；這陣子還走過葡萄牙和義大利，我好像還是喜歡輪廓淺淺的單眼皮和小眼睛。

回程上的巴士我寫著字，夏日午睡的前奏原來有台灣垃圾車放在左耳的軌道上，我以為我幻聽。格勒迎來了春天，今天在往 Chambery 的車上看著窗外風景睡著了。等楞楞楞登燈等楞，好想回家喔。

## 3/31
從里斯本回來後的兩週，漫長的三月準備告一段落。這兩週生活逐漸恍惚，就像我在台南沒有受到刺激、過慣了日子一樣，嘴上一天至少一句好想回家。

我在備忘錄裡囤著：格勒的第一場雪、第一個認識的法國人、宿舍午後的光很漂亮、煮飯開始膩了、9 歐買到的隨心所欲（我的匱乏來自於不上不下而非考量自身真正所想要）、和 Maya 的午餐咖啡、陰雨散步的遊樂園。

最近晚上又開始沈迷於看笑話（社群媒體上的智障）和女色，晚睡、晚起，即使睡滿將近十二小時，卻還是感覺到疲憊而煩悶地展開一天。沒有一件事被當天的自己備忘。週末空閒想要搭巴士快閃義大利但是懶，想要出去曬太陽發呆卻是陰天、原本想去霞慕尼也敗在天氣。

我遵照我的心活著了，我就懶，我就還不會欣賞陰天，我就想睡覺，我是那樣想的。但我不太喜歡這個狀態——是我的理想制約當前還是責怪自己本身就是無中生有而自取其擾。

週二，我發現午後房間的光很漂亮，CUEF 外面的荷包蛋花很可愛，晚霞在課間教室的窗外綻開。
![荷包蛋花](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/untitled%20folder%202/IMG_0280.jpeg)

週三，起床後直接前往市場和李豆，終於看到便宜一點的草莓（3.5 歐），買了一盒（後來要吃的時候發現已經長毛嘔嘔），喜歡 tram 軌道旁的小花。
![小花花](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/untitled%20folder%202/IMG_0293.jpeg)

週四，溫度急凍，前一晚疑似有冰雹砸在窗戶的鐵片上，一早出門上早八迎來了在格勒的第一場雪，不成路面積雪，但我的一顆顆大俗頭都撒上了糖粉。午餐在學餐處理，挪威女第一次答應我們的午餐邀約，我很喜歡 Maya 所以也附和了餐後咖啡的行程，她好可愛。

原本這個下午我會在 Chamrousse 第一次滑雙板，但我原本都仗著大太陽從來沒有準備雪衣，這座雪場海拔更高，山上零下七八度（我沒辦法忽視我看到這個溫度時有了說服自己的藉口的鬆一口氣），即使覺得慘賠不划算，這甚至是最後一次學校的 transport，也還是尊重自己的意願。我是用 9 歐買得對自己的尊重，而不是油然心生。

散會後的陰天，我在回宿舍的 tram 上不小心開了近一個小時的 podcast，臨時決定在周邊散步到這集結束再回去，即使很冷。就是這種不經意的發現常會讓我有被幸運眷顧的錯（感）覺。我鬼使神差地第一次ㄙㄟ到 tram E 往西的方向，發現一塊超大空地上莫名奇妙放一堆遊樂設施，得知兩天後聖枝主日嘉年華即開幕，而今年剛好是 90 週年。
![還沒開幕ㄉ莫名其妙嘉年華](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/untitled%20folder%202/IMG_0324.jpeg)

週五，一早匆忙地出門，抵達早八教室後發現今天沒有老師會來上課，同組的組員也都不會出席，莫名奇妙。下午和上次在 tram 上認識的日法混血弟弟（他叫 Leon）喝了咖啡，他的英文和我一樣會有點卡卡的，這樣反而讓我不那麼緊張，相談甚歡。
![喝了上次 Bom 隔壁的 Hono 還是三歐卡布讚](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/untitled%20folder%202/IMG_0349.jpeg)

週六，連三全無規劃的第一天，午餐吃了炒泡麵、晚餐吃法式吐司，織了一整下午的毛線。這種全天宅宿舍的行程常會讓我情勒自己沒有盡全力珍惜資源。

週日，陰天延續了昨天的自責，好在老天不下雨，又織了整天的毛線後我走了出門。這兩天完全沒有任何除了維生所需之外的花費，值得一杯珍珠奶茶（我出門前有就是今天了的感覺）；teaki 是我某次散步亂晃時發現的，估狗評價很高，以在歐洲能喝到的珍珠來說確實不錯。
![我、牆壁青蛙和珍珠伯爵奶茶](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/untitled%20folder%202/IMG_0381.jpeg)

走路手上拿著飲料杯，上面有著粗吸管，儘管奶精粉感很拐氣，心情還是好了起來。太陽心不甘情不願地撇開厚厚的雲層，在外面亂晃了一個小時後（此時奶茶喝完了，還剩幾顆珍珠，配速不佳，但我有ㄙㄨ完（我在台灣會丟掉）），我又走到橋的另外一側，那片大空地上的遊樂設施都開了，我在遠處就看得到像是老油井的遊樂設施飛在半空中。這整個園區荒謬得讓我覺得法國人追求娛樂品質的品味很差，算是見識到了。
![幹感覺會斷軌超恐怖](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/untitled%20folder%202/IMG_0417.jpeg)

週一，第三天整天狂織。sophie hood 終於收尾，只差縫合和收線，第一次戴上九成完成品的喜悅很夭壽。午餐假三菜、晚餐酪梨義大利麵。
![假三菜](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/untitled%20folder%202/IMG_0439.jpeg)

今天醒來吃了辣炒豬肉蓋飯，下午抱佛腳讀法文，晚餐簡單煮了南瓜湯（加一堆有沒的：豆腐、櫛瓜、蝦仁、蘑菇），傍晚出門上法文課、期末考試，回來的 tram 上又遇到 Leon，很開心。
![其實還是不知道自己學到了啥](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/untitled%20folder%202/IMG_0472.jpeg)

流水帳，很珍貴，日常買不回來。今年的新年新希望可能有一是不和自己過問價值，無聊也當有趣；或小喜小哀就是全部，平淡美好足矣。

------------------------------------------------------------------------------------------------

以上。三月過得非常緩慢，天氣常陰雨，心情也容易跟著低落，常常一整天足不出戶；我在三月底也才遇到在格勒的第一場（應該也是這半年的最後）雪。四月飛快，一懶惰再回顧又是五月了。還是會有要是再給我一個三月我會過得更有趣的無謂想像，但日子就是日子啊。
![下雪那天下課後回到宿舍看到的大俗頭](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/IMG_0319.jpeg)`,cp=`---
title: "格勒遊記 (2604)"
date: 2026-05-09
description: "所以我明天、後天、大後天，往後在格勒的每一天，我都會出去散步。要把這樣放鬆、閒暇、愉快、舒暢的感覺記得好好的。
"
category: "遊記"
tags: []
imageUrl: "https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/IMG_1990.jpeg"
---

## 4/4
生日快樂，李赫宰。我沒辦法忽視這個名字對我來說有些陌生了。我今天在格勒，鼓起勇氣也努力在這裡找朋友出門 hangout，明天要去里昂和佩格魯玩喔，我好好長大了，你也是，好好地一直在舞台上了。

今天賴床到最後，午餐原本要隨便煮麵，最後出門吃了巷口（？）那裡看很久的五歐 kebab，然後走路到目前為止在格勒最喜歡的 super bien cafe，和 Maya 一起度過了開心的兩個小時。
![巷口ㄉkebab](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/0404-1.jpeg)

我在這裡第一次那麼合拍地和一個人不知不覺聊了好一段時間，從 Maya 的大學到他家大概是三四個台灣的距離，我們都喜歡有溫度的木製桌椅、會飛在桌子上的小朋友、沿海晴天的城市、有 vibe 的咖啡廳和彼此的可愛（還有適度的社交距離）。

其實我現在已經想不太起來我們具體都聊了什麼，我只記得我笑得很開心、完全是我自己，這樣好像才是和我所定義的朋友聊天的狀態。我上 tram 之前她給了我在這裡的第一個 warm hug，說很開心和我一起拎嘎逼。
![So cute 《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/0404-2.jpeg)

然後我搭 tram A 去到 grand place 逛逛，回來和李峻講了快兩個小時的電話。我說 Maya 問我 do u have any plan with ur bf for the future，他說我們要買彈珠台。

掛電話前我決定先吃晚餐，再出門散步。這幾天真的吃了好多泡麵，好想好想回台灣吃東西。原本我覺得夏令時間很智障，但最近明顯感覺到日照時間被拉長，我可以在飯後出門散一個小時的步，不用擔心晚了天色會黑，也看到人們在 pub 或是 cafe 的戶外座位享受舒適宜人的溫度和人類之間的交談，我收回我的先入為主，我時間定義上被偷走的一個小時（因為我今年冬天不在這裡了啊）不要緊，這是歐洲人用最具體實施在我身上的政策，告訴我好好感受生活是什麼樣子。

我聽了近一個小時的博音，最後回哈哩米的一小段路聽了 QQ（今天 Maya 說她也有聽過藍鳥欸酷）。我在某個街口感受到了，我有多喜歡耳機裡的聲音、傍晚散步的微風、眼前撒了糖粉的雪山和現在的我。
![這天ㄉ雪山](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/0404-3.jpeg)

我感覺不管往後是面對什麼樣的事情，我都能夠選擇一切，選擇開心、選擇難過，選擇愛、選擇放下，甚至選擇心被撕裂的時候、遇到重大挫折的時候笑笑這就是人生；只要我持續地去意識感受的感受並接納 all of them，我便不愧對我來過，並且對於我活過、走過這一遭而感到幸運。有一天能夠完全不欺騙自己地說出活著真好。

## 4/5
我手指比劃著一，猶豫著開口一位才好還是昂杯森，櫃檯的亞洲面孔施來的眼神我不曉得要如何詮釋，但我嘴巴已經脫口出一位，還比猶豫的心思更加快速地說出我可以等候位。

沒辦法吃到好吃又之於台幣換算可接受的價格的東西，不管是多晴朗的天氣和多漂亮的風景，都淡然無味，就和裝在水彩盤裡的蝸牛肉一樣，青醬綠的要死但是沒啥味道。

今天早上醒來第一次窗外還暗暗的，我記得我是閉著眼睛上廁所的。再被鬧鐘叫起來，準備整理自己出門，就是火車出發的時間了。一個人出門移動要睡覺之前，手腕要套好手機掛繩、腋下夾著書包，然後雙手交叉緊抱自己，處在防備狀態的補眠品質很像昨天沒有全熟的腐竹結。

時隔約莫三個月再次來到里昂，第一個再次二訪的法國城市，我今天主要想去佩魯日走走。轉車之前的半小時，我在車站的 cafe 四處尋覓，最後只拿了一歐的無調味圓麵包，對法國的怨氣很重。可是我就是從劣勢貨幣國家來的窮學生啊。好餓，幸好原味從不背叛我，天降甘霖，但是我承認我今天選擇不要知足。
![但是麵包香氣很不錯喔](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/0405-1.JPG)

轉乘到佩魯日的 TER 人不少，大家都在一樣的站下車，今天是我第一次沒有做太多功課的隨性 day trip，我跟著人流走了大概半小時的路，到了比車站海拔略高的俗頭小鎮。從地圖上看到的區域比實際散步體感比起來大了兩倍，因為先經過了一些爬坡，腳程快不起來，但也十幾分鐘就繞了小鎮一圈。

中世紀的氛圍，確實有那味，俗頭像白飯一樣粒粒分明，爬在老房子上的藤蔓像海蜇皮。漂亮是漂亮，我好餓喔。繞了小鎮兩圈，然後吃了佩魯日有名叫做 galettes 的甜點、喝了一小小杯咖啡歐蕾，無奈啊，我不知道要怪誰讓我產生人權剝奪感。
![galettes 就像甜披薩，是檸檬糖](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/0405-2.jpeg)

我卡在點咖啡的地方終於把昆德拉狗看完了，對劇情的投入稍微轉移了我的憤恨不平，突然也喜歡上了這樣不被踩點綑綁、隨意落座讀書曬太陽的旅行節奏。我想要我的哥本哈根也是這樣的。

接近回里昂火車的時間，我又繞著小鎮散步了兩圈，路上一邊尋找看起來有耐心聽我唸破碎法文的遊客幫我拍照，一邊難得漫遊。類似的地方硬要找大概歐洲隨處都是，但今天的步調讓佩魯日在我的回憶裡如實留下了米飯和海蜇皮，僅此一家別無分號。
![攜兩小ㄉ阿姨幫我拍照](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/0405-3.jpeg)

在里昂佩魯日的去程，我就找好了午餐餐廳，並告訴我的空腹你將會吃到什麼，滿心期待，卻在回程發現自己趕不上營業時間。下車後我站在復活節人滿為患的車站大廳，不知所措。

這裡沒有值得信任的餐廳了，我想；今天勢必要吃到中餐，退而其次亞洲食物也可以。我在估狗妹上東西南北到處亂滑，找不到比蘭州拉麵還要像真命天子的選擇，還是決定先隨便裹腹，回格勒外食處理，於是在隨便 walkin 的 kebab 店吃了 petite 薯條。我用平常我們吃生日蛋糕用的那種叉子吃著薯條。

七點的巴士之前還有約莫四個小時，打算去泡個咖、上坡從景觀台看看里昂就回程。究極二選一選到的咖啡店很不怎麼樣，開心果的塔打妹到最後沒有吃完，咖啡尚可，這就是我萬裡挑一篩選過後的結果嗎。里昂今天也不行，我以為上次不行是因為連三陰天。

前往巴士站之前的移動都是我的雙腳完成，今天走了 24000 步。沿途無意間經過了很多我和李峻一月一起走過的路，相似的斜坡用第二次見面的牆壁阿尼來確認是一起走過的同一條路，雨果街人潮多了但商店陳列一樣無趣。時間確實沖淡了回憶的細節，但某些街景在腦袋裡留下的痕跡還是一道清楚的印記。

爬了坡後俯瞰整座城市，背後有大片烏雲，而眼前是藍天下的橘色磚瓦屋頂，晴朗的里昂還是不錯啦。我發現我好喜歡這種可以望盡地平線的觀景台。下山路上淋到了為期一分鐘的小豪雨，回到了平緩的區域，不期而遇我和手凍傷的李峻吵架的路口，那天很冷，這條街完全沒有人潮也沒有半間虧皮有開門，我那天也很餓。
![俯瞰里昂](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/0405-4.jpeg)

然後登等登登等，最後留下回憶的還是快樂版本的我們。我一個人的話，再久一點的以後回來看也會是快樂版本的嗎？
![李峻頡在這裡把我牙套橡皮筋弄在地板上我就生氣](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/0405-5.jpeg)

從其他城市搭巴士回來格勒大概有超過五次的經驗，好像是第一次從北邊的交流道下來，有著大大 GRENOBLE 字樣的迎接。今天再次看到日常熟悉的街景，油然而生的安定好像有那麼點和家這個字沾上邊了，我沒有誰好騙啊。我對法國兩個字依舊沒什麼感情，也沒有憧憬，但對格勒諾布爾有。

黑夜畢竟作為渲染悲傷情節的標配，被人為拉長了的白晝確實帶來了可以在外逗留的喜悅。下了回格勒的巴士，左邊的鼻孔已經斷斷續續流了至少兩週的鼻血，車上的空調和下了車的乾燥到底有多少落差，我仰著頭、吞著血想，然後開始吃了蘭州牛肉麵，我在格勒的第六頓外食。

去年一週工作日六天、每天工時 10+ 的日子我沒有想過我這輩子承受不了第二次，我在這整天無所事事，但好吃的食物無法唾手可得的日子我可能沒有意願再嘗試了。我說可能，我還是有想要更長時間在海外生活的體驗。或許是釐清執著後就可以放下了的那種想要。

碎上的移民說到真的要移居海外生活必是因拉力而非推力，而我又是那種必須有很明確的具體動機，且由內而外皆認可目標，才會付諸行動的人。我短時間大概還是會狗在台灣吧。

![假蘭州牛肉麵 QAQ](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/0405-6.jpeg)
太過細小的蔥段、完全不成塊狀的牛肉薄片和似米苔目的白色麵體，難得的外食還是好空虛。日照時間被拉長又怎樣，WLB 又怎樣，可以隨時用高鐵價跨國旅行又怎樣，我現在只想要滷肉飯米糕火鍋炸醬麵壽喜燒有鍋氣的炒飯一沐日五十嵐，和媽媽滷的馬鈴薯三層肉。

## 4/15
然後我隨著能夠被陽光照到的地方移動，想著生死一線的劃分是這輩子找得到的嗎？大概兩小時前，我一屁股輕快愉悅地落座我那河邊的單人躺椅，第一個念頭是 cest la vie。太陽就快要落下，我不得不提前開始練習不管是與生還是與死的分離。在恍惚的想像裡。

不知道為何，我的生活裡常常就在恍恍惚惚。不覺得自己活得足夠踏實，也不認為空泛無趣得差勁。不上不下的。可能我還沒說服自己用自己喜歡且能夠適應的方式感受生命吧。總是在爭個什麼。我只是想要吃米飯，熱熱會冒煙的。
![其實我是跟著陽光的光照移動在看書](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/0415.jpeg)

打開鍋蓋冒出白煙使得眼鏡起霧，拿起飯勺翻攪著那天專屬的一碗份量，可能有地瓜或是蒜頭，媽咪會說：「姐姐，今天的飯很好吃喔。」就只是那樣。什麼新創巨頭和多卓越的成就，我已經花太多力氣演一個拿得到好成績的學生，我也相信自己以這些累積明明我還可以再做得更多，可是很累欸。我只是想吃米飯。

當一定地被滿足，那所有的動力都幻化成不可思議，放佛那些原來遙不可及的目標不是我曾經擁有過的。這就是為什麼我覺得夠了的原因吧，因為我從頭到尾的努力都不是為了什麼更好的自己，而是擁有更多的錢處理物慾。現在短時間有的差不多了，我就跑不動了。

## 4/16
偶數那天要在夕陽前散步，奇數天要在夕陽後散步，星期天可以隨心。我這樣和自己約定之後，想著今晚就要按下宿舍退租的申請。但我不知道在拖什麼。就算我最後一天再按，我還是會在今年五月的最後一天離開。

很多想不明白或是沒有時間去攤開看看的人生議題總在河邊的長椅或是繞圈的散步路線出現；我試著遠離吵雜的聲音，因為我知道我不是個信念明確且穩定的人（在沒有感受的感受的時候，也是大部分的時候），每每在自我介紹環節不太知道要講些什麼、沒辦法斬釘截鐵地說出我的決策和喜好。

這週二晚上是最後一堂法文課，經過了一個多月我終於又看到 Stephen 了，但是沒有再看到過 Ali，和一起住在哈哩米的 Malak 從第一次一起搭車回去之後不知為何一直有些距離，下課後我和有打招呼的同學說 a bientot，儘管我覺得不會再見了。我在交友這塊的作風從大學之後就挺那個的。

![法文課](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/0416-1.jpeg)
最後我在這堂課只學了基本到不能再基本的法文（雖然是 A1），我還是寫了感謝小卡片給老師，因為這是我在法國唯一有認真用心上的課，每次在練習 speaking 的時候她都很有耐心地打著拍子（很講求韻律的法文 ==）帶我唸，說蘇漢噠大打噠大噠 comme ca，然後我的頭會不知不覺地跟著輕重音上下，嘴巴用台灣口音（只有我聽得出來的台灣口音）努力地唸出法文。

昨天發現市區的亞超暫停營業了（今天同學和我說是失火），我又搭了一班公車才買到米。我因為吃得很不像話常在這裡自怨自艾（就是碎上面會討論的那種 privileged 委屈）；再說一次——時間過得又快又慢的，想回去又不想回去的——但最近想吃的東西太多了，好想回家。
![回到 Gare 看到ㄉ大俗頭](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/0416-2.jpeg)

我住在哈哩米的時間實際上不到五個月，在煮飯稍微有點上手了之後，想要添購鍋具或是稍微大罐的調味料，就會被近在眼前的離開時間線勸阻，所以我的廚藝也一起停滯。煮飯在最近不是那麼有趣了，甚至變成讓我很躁的瑣事，我就只有那麼大點的鍋子和用到爛的一樣的調味料啊。現在還買不到豆腐了。

但最近草莓的價格比起剛出來的時候降了許多，產地為西班牙的更是便宜；果然是溫帶水果，可以不用配煉乳或是蜂蜜就滿甜的了。這裡的橘子、香蕉也很好吃。不過我還想吃龍眼、水蜜桃、芒果、鳳梨啊。

![傍晚散步看到ㄉ大俗頭](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/0416-3.jpeg)
日照時間被拉長，好長好長，因此我的散步時間也更有餘裕。可以在傍晚（我的認知還是定義在 5.6 點，而不是天真正暗之前的 8 點）吃完晚餐後再慢慢走出去，也可以在不知道拖幾個意思才出門之後慢慢待在外面看晚霞，待天慢慢暗了再回來吃飯。長一點的白天好像真的比較讓人愉悅，而那種被工作綁架了整天之後的鬆一口氣，好像也更大口一點。我現在整天遊手好閒，不可惜。但因為太難得了又可惜。

所以我明天、後天、大後天，往後在格勒的每一天，我都會出去散步。要把這樣放鬆、閒暇、愉快、舒暢的感覺記得好好的。

## 4/17
蔣勳說：「我向你介紹的巴黎一定不是客觀的，因為我 25 歲在巴黎讀書，我向你介紹的巴黎其實是我的 25 歲。」我沿著河走過，看著樓房想起這段話，只是更加認同正在說服自己的信念——在哪裡都不重要，我就只有自己而已。策馬特的秘境、布拉格的春天、芬蘭的聖誕節，都是假的。

我 25 歲的格勒像是最後年輕的自由。我清楚知道自己為什麼而來、將為什麼離去，上個階段、這個階段、下個階段在哪裡做什麼；只有在這個階段，我不用扮演著社會角色。我在這裡聽不懂周遭的人說了什麼、難以完全融入已經相對貼近的交友圈、採買還是有些吃不習慣的肉品葉菜、每到夜晚在外總是板著臉戴上帽子快步找回安全感。

這終究不是我會長居的地方。那些我本來沒有的，比如春天、雪山和慢步調，卻又老是挑起我感到錯過的習慣，想像未來可能有機會再次長時間的擁有。可是巫師說沒有人能擁有地球上美的事物。

![我覺得我這包冷凍莓狗要吃不完了](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/0417-1.jpeg)
今天早起整理成可以出門的樣子，才看到老師似乎不會到教室的訊息，最後就沒去上早八。突然覺得我長年的白天都特別短。早餐莓果煎餅、午餐牛肉排親子丼、晚餐奶油味噌烏龍麵，穿插河邊閱讀、曬太陽的午覺和皮克敏。可以用現在這個殼整天不事生產地就這樣讓時間流過，是我最後年輕的自由。

晚餐飯後又再出門看了夕陽，昨天我和自己約定的。雖然我還是還沒去按下退租申請。八點二十五太陽落下，我大概在二十分時走出門，看到的是粉紅色的雪山，我每次看都還是會哇的那種軟嫩的粉紅色；雖然我不是阿凡達，但有人可以把這個做成腮紅的色號嗎。
![長這樣喔](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/0417-2.jpeg)

我穿著薄長袖和帽踢又再繞了繞我的散策圈圈，不會冷了，風很大但是涼爽的，非常宜人的溫度。我在抵達每次經過都一定會拍一張照片的機位時，才發現有點晚出門了，雪山上的晚霞已經退去；我便馬上想要看看那大俗頭上是不是還殘存了一點光照，往前走上橋望去，只見山上的小房子聚落有三個光點，其中一個像是正在移動返家的汽車，不曉得從那邊看過來的光景如何。

![這裡對面就是我平常常坐的躺椅](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/0417-4.jpeg)
因為逆光看去的群群山脈霸道地坐在地平線上，我在格勒從來沒看過像鹹蛋黃一樣的夕陽；面向太陽的遠方高山不知海拔有多少，才讓我看去的視野像是能一筆一筆描繪出每一條稜線一般；橋後面的大俗頭長得像有山靈守護的那樣，看起來十分可靠、安定。後來我很慶幸自己是來到這個小城市，不是華麗膚淺的巴黎、也不是捷克第二大城布爾諾，讓我得以環山遠離已經太熟悉的車水馬龍，終於更能和自己交代地說出我很放鬆。

![天暗了，公園的草皮上還是有滿滿的人](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/0417-3.jpeg)
除了因為春天氣息，在傍晚（他們的傍晚會是 8.9 點吧）紛紛出來喝酒、散步的人們明顯增多，今天也因為公園有小型的演唱會活動和宿舍附近突然搭建的遊樂園，格勒很熱鬧（很多尖叫聲 ==）。我走進公園聽不到兩首就想趕快回宿舍休息。明明一樣是 hiphop 那種乒乓叫的饒舌，聽不懂的歌詞、法文清楚的 r 發音和濃重的麻味菸味，讓我完全建立不起融入享受的感覺。韓文也算從漢字延伸出來的語言，對我來說是相對有那麼一點歸屬感的。那是確實的連結啊。

我戴上帽踢的黑色帽子快步離開。走回哈哩米路口的旗杆旁近九點，天空仍殘留了夕陽餘暉，好像這才是當地人差不多要出門散步或吃晚餐的時候。就連對夏令時間感的對應作息，也是我不相容的。就跟談戀愛一樣嘛，喜歡和適合是兩回事，真是可惡。

## 4/19
我可以指劃出宿舍的位置，我描繪得出 tram E 的鐵軌，我知道市中心的鬧區是哪一帶。這是我生活過的小城市，被阿爾卑斯環繞的格勒諾布爾。

這幾次出門旅行，我發現自己特別喜歡從高處俯瞰一個城市，偶爾跟著一個小小的人點一起走著，直到看不見他的方向，或是看看房子的排列、屋頂的顏色和盡頭的山海。比起那些在 reels 上會出現的經典地標，我好像更喜歡可以眺望全景的觀景台。

今天第一次鬧鐘響後，我還是沒有戰勝睏意，雖然沒有任何理由或責任能夠譴責睡到近中午的自己。起床後我依慣例地整理，就開始備料煮午餐，簡單吃了白飯和青椒炒豬肉；昨天應該要買香菜的。飯後洗完碗就差不多要出門了。

今天和 Leon（這位同學就是上次在 tram 上和我搭話的弟弟⋯緣分實在很神奇）約了要去 hiking，這次是我在一月 welcome week 的活動之後第二次上 Bastille，上次徒手爬了石頭、弄髒了衣服，一路上下著毛毛細雨，雨雖小但長時間淋雨仍全身濕透，抵達城堡只見一片霧茫茫，下山還感冒了。今天天氣很好，很好很好，是我一出門心裡就直接感嘆活著還不錯啦的那種好。非常期待從山上望下來的風景。
![這台機器可以照人和觀景台上的全景喔，但買照片要 3 歐...](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/0419-1.jpeg)

和 Leon 出門也是挺神奇的，我都不用特別想要講什麼，他自己就會嘎啦嘎啦一直分享或是好奇提問，一來一往地每次都覺得時間過得很快。我們約在上次喝咖啡的 pain&cie 見面，原本以為是想先喝個咖啡再慢慢走上去，但他買了午餐後就走向通往 the old bridge 的橋，直接走到入口開爬。

比起上次莫名其妙的石頭路和雨天泥濘，今天走的步道蜿蜒但平緩，久沒運動的我一邊注意腳下的石頭一邊和他聊天，爬沒幾分鐘就開始喘了，不過大好晴天和等等能見清晰的格勒全景的期待，讓我一點都不累，也很開心。大概走了至少半小時抵達城堡（就是平常我狗的河邊對面纜車站，纜線的另一端），上次這裡除了我們一群學生之外誰也沒有，今天滿是裝備完整的跑跑人和週末出門散步的家人朋友；有點想把每個週末泡在咖啡廳久坐至少三小時的自己吊起來打。

![《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/0419-2.jpeg)
其實從高處眺望格勒，比起維洛納、波多、哥本哈根什麼的，好像沒有特別漂亮，就是一個普通的小城市；但我看得見在這裡生活的自己——每天從全白的宿舍走出來，左轉往我那單人躺椅走、先望見遠方雪山、沿著河、三座橋、纜車站，右轉往車站走、路過公園和教堂；從某個方向回來下交流道後會經過的超大 stadium、莫名其妙出現的遊樂園、最顯眼的 notre dame，也全都看得到。單純這樣用文字回想，想著自己經常路過的、漸漸習以為常的，就已經好想哭了喔。

我好喜歡格勒。這真的是一個群山環繞擁抱的城市，從 Bastille 往下看更感覺得到自己身處盆地，而且我第一次望向盡頭看見的是感覺好像就在不遠處的山，有自己被安全地包裹在世外桃源的錯覺。我和 Leon 說我的 residence 在哪裡、哪個方向是 victor hugo，他請我吃了一口咖哩口味的炸蔬菜。在這裡長大、生活的人們，也會很喜歡格勒吧。

上山下山一路上我們說到學業御守、文法惡夢、成績訓話和 vroom vroom；我感覺自己在高中以後就好像沒有全然是個學生的狀態，相較起來 Leon 的世界在上了大學以後對他來說變得好複雜，從簡單純樸的小村落，搬到他認為這已經是大城市的格勒（我說我從小就是 city girl 了差低），一邊煩惱著未來和生存。

因為下週開始陸續有期末考試，我們說下次再爬到更高的地方。下山的路莫名感覺更加平穩，咚咚咚一下就回到市區了。原本想說要去 bing chilling（他說這是一個迷因，阿兜仔我不懂）吃 bingsu，結果店裡的位置全滿也不能外帶，我們一人點了一杯飲料（這家的 matcha latte 不錯喔，雖然粉有點沒刷勻）邊走邊喝，再一路散步到公園。

從週五開始不知道為何出現的小型演唱會和周遭市集今天還在持續。今天不是聽不懂的法饒 live 了，是悠哉悠哉類似爵士的音樂；我看著舞台前隨著音樂跳舞的人們，說亞洲人都很害羞、才不會這麼多人一起隨意跳舞勒，他說他通常和朋友的話偶爾有興致會跳進去一起玩、很開心喔。然後我們走下階梯在長椅坐坐，草皮上大家攤著野餐墊或是直接貼近草皮享受陽光，還有人在搖呼拉圈、雜耍，好像沒有一個人是不幸福的。舒服的週末呀，真好。

就像我開始對公園長椅有感覺之後假設的那樣，一起坐在這的人們可能會留下這輩子很難忘的回憶，儘管忘記了所有談話內容、只是一起度過的時間分分秒秒。莫名其妙地認識了一個可以一起 hang out 的法國朋友，週末這裡那裡散步走走，實在太好啦。明天就四月二十了。三月漫長的不像話，四月怎麼又飛快呢。

![今天晚餐後也有出門看晚霞喔！](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/0419-3.jpeg)
那就不要留，時光一過不再有。我每天都很用力地感受了，但感覺離開的那天，捨不得的情緒仍是龐然大物。然後我決定在突然的自我播完以前送出退宿申請，其實那不過一分鐘。很多事於我如此，時間到了就會覺悟、就會起身。我今天坐在那公園的長椅上第一次用嘴巴實際地講出來：I will leave here 31 in May.

## 4/22
今天是那種開心的小憂鬱——我知道我可以好好地陪著自己，安然、坦然地一起度過。雖然沒有兩個人，只有我，但是我會跟我一起噢。

要說四月有多快，就好像才剛發現宿舍附近架好的遊樂園沒多久，在第一次逛完之後想著要在接下來活動一個月的期間來吃便宜的 3 歐虧皮，結果今天爬上 Bastille 才發現整個空地已經剩下雲霄飛車的軌道了。這樣的體感真的是一個月嗎？

昨天晚上發現租補是直接匯進 CROUS 支付房租的平台，終於順利拿到了，對法國的怨氣少了那麼一大點，又合理化我對這裡那麼不捨的程度。下週要去荷蘭和比利時，又有九天的時間不在格勒，再回來待在這的時間就剩四週了；目前還有想要去馬爾他，如果成行就剩下大概三週了。
![這是我這天ㄉ午餐...](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/0422-1.jpeg)

我今天坐在纜車站旁邊發呆，後知後覺我錯過了 3 歐虧皮，一邊發現我有好多想在格勒做的事都還沒做：搭 N26 去走其他的健行步道、逛博物館、在 victor hugo 吃虧皮、在 Bastille 上看夜景喝市場裡的咖啡，也還想再去一次 Anncey 還有 Chamonix 還在 bucket list。
![我坐在一樣ㄉ位子發呆](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/0422-2.jpeg)

三月被拉得漫長，四月又恍恍惚惚地一天一天悄悄溜走。我還是很想回家，最近更常幻想清晨回到南崁吃的第一口朝司暮想的蛋餅（要加辣椒）、我家門前的自然生長出的樹又長高好多了、躺在沙發上看著挑高落地窗外灑進來的自然光；回到台南在詹記看著白板菜單畫記飯桌、騎著摩托車穿梭在我最熟悉的巷弄被南部太陽曬傷、和認得我的決哥店員打招呼後在騎樓下落座喝著冰拿鐵。

我感覺對格勒的想念不會像那麼具體化，宜人的氣溫、走到哪都望得見的雪山、悠然自得的生活氛圍，這些逐漸熟悉的周遭景物可能都將因太過短暫而像夢一場，又或者是因為語言和金錢的限制，我還沒構成為自己量身打造的生活感就準備離開。偶爾又覺得其實並不是那麼一回事的特別。不能夠具體化地想念是不是因為我從來沒有擁有過，我只是借來這半年。原來簽證是借據，甚至借不滿一次好長好長的體驗效期。

![人中痘痘沒解](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/0422-3.jpeg)
我現在每天都在用不同的方式用力度過了，盡量不錯過每個晚霞、每次遠景。說到底我也沒能夠抓住什麼；所以真正惋惜的是這座城市和異國生活，還是我終於終於步入尾聲，準備要告別的學生身份。

## 4/23
人生沒有什麼非要不可吧。

我發現我在倫敦的對標癖只是社交工具。如果我真的有那癖好，怎麼還會捨不得這個平凡的城市；而我也在那次旅行後再也沒有在歐洲做這種鳥事。

今天早上把 FDS 的報告完成了，教授超簡單 QA 後看我們四個人通通亞洲臉就問是不是交換學生，大概心裡也覺得就給你們混混吧。討論完另外 HCI 的報告後三人閒聊了一下，Charlene 和 Weijian 都準備要回新加坡了，就算不是那麼要好或熟識也挺不捨的。又覺得時間飛快，不殘忍但絕情。

回宿舍的 tram 我沒搭到到，中途被貝果吸引而臨時下車，還是白髮法國奶奶幫我按了開門鍵才讓我順利跳下來，但近看只有原味又乾乾的，臨時動議到 FRENSH 買個甜的。可惡啊，還是普通。在市中心散了一會兒步就到河邊曬曬太陽、看看書，午餐簡單吃。這是人類的生活。
![就是 logo 很可愛ㄉ那家麵包店，目前買三次只有上次ㄉ cruffin 好吃](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/0423-1.jpeg)

山巒高聳座落交錯，只能用眼睛看。

今天是我這個禮拜第三次爬 Bastille 了，大概晚上六點出門，打算法國大門上、獅子噴水池下。我就住在距離法國大門走路不用 10 分鐘的地方，近水樓台確實先得月，這樣可以快速親近大自然的條件好像開始會是以後若要買房會想考慮的。我發現我挺喜歡爬山的，每一趟登頂都很像在體驗一輪人生。
![真ㄉ是那種 trail](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/0423-2.jpeg)

不知道沿路地上的石頭要叫什麼岩，部分甚至被踩成銀灰色、平滑光亮的；路面凹凸不平、碎石頗多，我大多時間其實是低著頭慢慢走，所以在不知不覺抵達了某處可以望遠的地方時，會很驚訝原來覺得沒爬多少（上次 Leon 說還沒到頂之前不能偷看哈哈哈），但已經站在很高的地方了嘛。

每個人的速度都不一樣，有人騎腳踏車上山、有人裝備輕便一路跑上山，也有很多像我一樣單純來慢慢健行的；而我後方若有跑跑人出現，我也會刻意友好地讓路（八成的人會說 merci 滿意外的欸），使得自己落後（literally 落後）。我看著那些成就不錯、生涯順利的同儕，可就沒有像這樣帶著某種祝福地讓他們擦身而過，大概是把方方面面都寫在表格上一一比較，競品分析，然後開始數落自己。
![人中痘痘一樣和我上山](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/0423-3.jpeg)

起點不一樣嘛，但終點怎麼能不一樣，這座山的山頂就在這裡（其實還有 Mont Jalla 啦但我就爬一次就好 ==）。要完全把出生、死亡和登山入口、山頂對齊比喻，好像帶有那麼一點無奈承認不公的感覺，通常接著人們就會用媚俗的說法來自慰，比如所有人最後都會死，那麼金錢和名譽有何重要。

但我站在觀景台發呆望遠，移動的人類渺小到好像不足以構成一個點，再對比我在平地上和這裡看到的山景缺少了多少視野，又覺得勉強把出生和死亡看成宇宙時間裡的某個點已經很囂張了。但願未來遇到煩惱和挫折，也能像現在愜意的時候一樣豁達。結果論去死吧。

大概七點多我開始下山。明明感覺都是一樣的路，不知道為什麼每次都會走啊走又到不同的地方；今天回到市區的出口更偏了，回宿舍的路從 15 分鐘被拉長到快半小時，體感整個路程是這幾次最漫長的；不過也正因為時間迂迴，我又能夠在散步回去的路上看到晚霞豪不客氣地灑在群山上，我在沿著河的橋上背對走著不時會回頭看看。
![《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/0423-4.jpeg)

不管課本上怎麼教，冰河湖、U 型谷或是河水沖積的過程還是很難想像。我只覺得格勒是一個被眷顧而幸運的城市。

------------------------------------------------------------------------------------------------

以上。四月飛飛飛飛快，不知道是不是因為塞了兩趟旅程，格勒在這個月變得更像旅行 base 了，我都是回來充電後再出發；但待在這裡的日子漸漸有了生活感，感受得到草莓隨著產季穩定而降價，很偶爾很偶爾有朋友可以找出門小小 hangout，知道自己可以在哪個時刻、去哪裡放鬆。就剩一個月啦。
![四月發現ㄉ超好吃布丁《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/IMG_2407.jpeg)`,rp=`---
title: "北義遊記 (260214_260223)"
date: 2026-03-18
description: "如何讓回憶可以被沈浸式重複體驗還是我的煩惱，但在離開之前還是不要這樣為難自己了。"
category: "遊記"
tags: []
imageUrl: "https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/top.jpeg"
---

## 2/16
然後威尼斯變成我最喜歡的城市。

今天是北義旅行的第三天，也是在威尼斯的第二天。決定這趟旅程的時候還不知道面具節落在二月，排好了第一版路線後我才發現，因此剛到米蘭一天後就先往東，路過了維洛納。我一直覺得我是一個幸運的人，不知道是因為懂得知足才如此，還是有很多天時地利的和諧，讓我確實擁有很多順遂。

很久沒有如此期待一個旅程的到來，這是我的第一個嘉年華（周杰倫不算）；世界三大嘉年華分別辦在巴西、威尼斯、尼斯，很意外且有幸地參加到了其一，是還在二十幾歲的體驗裡面很珍貴的一部分。即使我時刻心懷感恩也覺得很不足夠。
![真ㄉ嘉年華欸超帥](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0216-5.jpeg)

出發前一直很擔心下雨掃興，特別又是容易淹水的威尼斯，好在一下巴士就迎來大晴天；坐上二號公車之前，我就在想像島上會有什麼畫面，只是我不知道陽光灑下而閃耀的聖馬克教堂那麼漂亮，巷弄（威尼斯可以配得巷弄二字）間的光景比起事先存好的地標更是寶藏。

來到廣場後看到所有在部落格上認識到的經典面具（以及孔雀拖把鼻涕雞蟲怪人漂亮公主⋯很多裝扮實在把我逗樂），彩色紙花灑落在人們的笑臉上，裝扮的人會逗著小朋友一起笑，朋友之間看到有趣的裝扮會互相分享、一起歡呼歌唱，喔！這是真的嘉年華耶！
![我第一個遇到的鼻涕雞蟲怪人，好像最喜歡這個ㄌ](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0216-6.JPG)

每每這種時候，我還是會覺得人類就是全世界上最可愛的動物，我們創造語言、創造文化，那些東西用最純粹的方式表現出來都可以給彼此帶來歡笑，構成極大的幸福。不曉得沒有資本主義和戰爭的年代會是何時，到時候如果我再來威尼斯面具節，我就會不嫌麻煩地穿全套文藝復興漂亮公主裝，還要得到（我不寫買）雨鞋套。
![孔雀們](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0216-7.JPG)

主幹道（比較寬的河（？）道）有水上 taxi 和 ACTV 所營運的交通船，今天去 Murano 和 Burano 都是以船代步，
![Burano 的彩虹房子放在其他地方可能會失去濾鏡](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0216-4.jpeg)

在本島上若走離主車站遠了也會搭個兩三站減少腳程。這樣的交通方式雖然在澎湖跳島也體驗過了，但威尼斯本島被切割得更小（121 個小島耶），也不是到處都有橋連接，兩點之間可能需要繞好一大圈才走得到，不然就是要搭船才方便，這點也讓體驗有趣加成。
![ㄅㄨㄅㄨ](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0216-1.jpeg)

巷弄之間的河道有 gondola 穿梭在波光粼粼，船夫們不知為何有一致的黑白橫條紋制服（Gemini 說是工會制服），拿著單支船槳的動作，熟捻而輕鬆得彷彿這輩子就是生來划 gondola 的（因為威尼斯太漂亮了所以沒有埋怨的那種）。這是目前所見裡頭，可以和大自然一起媲美的唯一人造美景，任何大有來頭的教堂、城堡都不及這座城市的一隅。
![我後來發現還有紅白條紋的喔](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0216-3.jpeg)

不論 gondola 的形狀和其他文化形成，這個景象全世界大概只有威尼斯有吧。我和媽咪妹妹講我想要搭 gondola 的時候被笑，還被唸不要浪費錢（大概可以外食 2-3 餐），說以後要是來度蜜月再和另一半浪漫登船。好吧，反正是威尼斯的話，我一定還要再來一次。

我在寫下這些的時候一直掛念著我要如何下筆，才能讓看了我的遊記的朋朋也會想要來一趟威尼斯，這種時候寫扣就簡單一點了；雖然我覺得中文比起任何語言的表達力，和能展現抽象概念的深度都是最頂級的，但我的慧根不夠就只能是這樣了。

於是我去問 Gemini 那些來過威尼斯的名作家都寫了什麼：海明威喜歡坐在 Harry’s Bar 喝酒、寫了一本小說在講一位老將軍在威尼斯的最後時光；馬克吐溫開玩笑說貢多拉就像是「靈車」，而威尼斯則是個「浸在水裡的城市」⋯⋯

如果可以把李白蘇軾王維之類的人丟過來威尼斯，那些名言佳句一定屌打這種 "When I went to Venice, I discovered that my ideal had become a reality." 或這種 "I stood in Venice, on the Bridge of Sighs; A palace and a prison on each hand." 我也會的陳樹菊，這些好像都沒有白日依山盡黃河入海流還屌欸。希望在ㄟㄞ和數位相機變得真正猖狂之前，還有人致力於寫作，可以把威尼斯寫出來。
![傍晚ㄉ聖馬可廣場](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0216-8.jpeg)

明天還有一整天的威尼斯，也是嘉年華最後一天，我還想要好好在這裡享受、漫步。雖然如何讓回憶可以被沈浸式重複體驗還是我的煩惱，但在離開之前還是不要這樣為難自己了。期待明天睜眼後也是大晴天，坐在前往本島的二號公車上，再次看見威尼斯這座城市浸泡在海水、小浪花打到腳邊，我就是身處人間天堂的快樂小連。

## 2/17
我不可能終其一生都在尋找最適合我居留的城市，而且我永遠都是台灣人。

今天的天氣也很好喔！
![超級漂亮！～](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0217-1.jpeg)

終於在下午恢復獨旅的輕快，我一個人好好地享受了在威尼斯的午後漫步。前兩天比較多在 San Marco 亂晃，今天刻意繞到 San Polo 和 Dorsoduro 這兩區逛逛，一個人經過了全新未見的威尼斯，偶爾路邊有現場彈奏的 BGM，更讓我感受到愜意和悠閒。
![水果包裹什麼的也是用船運，很酷](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0217-2.jpeg)

今天特別查了：主幹道的大運河叫 Canale、巷弄之間的河道叫 Rio。自己走過看見的 Rio 大同小異，還是很喜歡 gondola 在上面隨著浪和槳擺動的樣子；而經過的幾個廣場相比聖馬可人潮少非常多，但我更喜歡在這裡人們坐在路邊用餐、休息的樣子，spritz 寶石般的橘紅色在大太陽下閃閃發光。

和 Venezia 直直走到 San Marco 所會經過的路不一樣，這兩區有很多街頭藝人和小劇場表演，我看到了歐洲版胸口碎大石（受眾竟然是小朋友 ==）、玻璃杯演奏（一共看到三個，有第二個就不屌了）和特技雜耍。雖然圖飯吃一定是從事街頭藝術的部分本質，但不知道為什麼阿兜仔表演就是比較有忠於自己所愛的感覺。
![歐洲版胸口碎大石](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0217-4.jpeg)

而我最喜歡每個人會隨著音樂節拍擺動的 band live（在開始聽會帶 band 的演唱會之後我都會有點後悔高中沒有參加熱音社之類的），這四個樂手在某些片段會默契地相視而笑，再一起進入下一個音符，看起來很喜歡自己正在做的事情；有一對夫婦還在一旁很開心地跳著舞，圍圈的人們都是帶著輕輕地微笑一起搖頭晃腦，身後是陽光下的 Rio 和那些很歐的建築。我也很開心。
![《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0217-3.jpeg)

散步了一陣子在咖啡廳坐下休息，卡布沒有特別好喝，戶外座位前也沒有河景可以看，不知道為什麼 menu 上寫了 2 歐最後給我結了 4 歐，欠負評。剩下的散步時間，我先繞到學院橋 pre ，這裡的河道比起里阿爾托橋再窄了一點，高度感覺比較高，可以一眼望去來回的船隻和彎道之前的所有面河建築，和其他能欣賞大運河的角度比起來，我好像最喜歡這裡。
![場勘自拍](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0217-5.jpeg)

大概五點前後用很快的腳步抵達了聖馬克教堂，想說要上到樓上看看廣場人潮的遠景，沒想到已經停止入場了，留了個小遺憾。又再匆忙地走回學院橋看夕陽，原以為是一個可以看到鹹蛋黃掉下去的機位，但只見橘黃亮光印在圓頂建築的返照。
![紅橙黃藍](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0217-6.jpeg)

不過晚霞襯托的水城，還是為這三天的威尼斯留下了最美麗的時刻。我在橋上停留了超過三十分鐘，太陽落下後轉涼，脫下的外套還是得穿回來；一直望著同一個角度看天空和全景的顏色變化，偶爾緊閉眼睛現場考考自己能不能回想起眼前的樣子，最後在離開時沒走幾層階梯就要回頭一次。
![藍紅黃紫](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0217-7.jpeg)

我在想我下次來威尼斯會是什麼時候、會跟誰一起呢，不知道住在這裡的人們天天看到這樣的景色還會不會感動；我想我會不時想念這幾天所見的美好，也會做著再次來到威尼斯度假的夢。捨不得，但是我是旅行的人，每天都得道別、離開。

今天也是嘉年華的最後一天。不能否認威尼斯過分觀光了，我認為這裡一點也不宜居，有了世界唯一水城魅力，卻也失去能夠帶給居民遠離紛擾的安定；雖然我沒有和哪個威尼斯人得證，但看著滿地紙花、隨地垃圾和很難控制的大坨人群，我想嘉年華結束的善後一定很惹人不悅。我今天特別靠近微笑，和收垃圾的阿伯（這個最可愛，他還脫帽點頭）、綁繩停船的帥哥、2 號公車的司機叔叔都真誠地說了 thank you。

晚霞再也沒有光彩，我離開了學院橋準備回程，晚餐一樣用 Twin kebab（連二刷）和轉角的超市處理。
![KEBAB EVERYWHERE](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0217-8.jpeg)

在 Rialto 等了兩班滿船才上到第三班，還不小心搭到停靠站比較多的班次，而失去了享受最後水城的耐心；一下船馬上看到 2 號公車準備關門，我一路飛奔過去，直到上了長長的跨海公路，我才驚覺我已經離開威尼斯了。每天都得道別、離開，但還是不太擅長。
![最後ㄉ嘆息橋](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0217-9.jpeg)

這次是住在靠近 Mestre 的 Anda Hostel（露名推薦，我下次一定再回來），我每個晚上都睡得超級好。這裡距離本島大概 10 公里，都需要透過 2 號公車越過不短的跨海大橋才到得了想像中的威尼斯，所以每天早上搭著車，都好像重新抵達、再次拜訪。

原來有些擔心不住本島來回會很麻煩（確實因為嘉年華要擠得難受才能上車，人潮多也讓半小時的通勤變成一小時），但這三天的早上都在車程中期待待會看到的威尼斯是什麼樣子，每天都像在拆禮物。
![面具狗仔也是可愛禮物](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0217-11.jpeg)

謝謝威尼斯，每一天的禮物都被我好好地收在心底和記憶體了，下次有機會的話要在夏天拜訪。明早就要前往波隆那了，三天給威尼斯是很剛好的停留時間，下次見喔！

## 2/18
在波隆那洗澡的時候才發現沐浴乳洗髮精的分裝瓶掉在威尼斯了，很躁，但又不是會惱怒人的那種，感覺整個波隆那就是這種感覺，還有雪茄的臭味、房間的奶油味和 chill tea 讓人在意的香氣。

今天離開威尼斯。一早醒來的時候，整間六人房只剩下一個人在睡，其他人在嘉年華結束的隔天都早早退房啟程了。我為了一嚐正宗肉醬義大利麵，執著地安排了波隆那這個城市，不聽媽媽和妹妹說這無聊的勸。
![離開 Anda 的早上](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0218-1.jpeg)

約莫中午 11 點抵達波隆那公車站，一下車就臭臭的，周遭沒有任何一點觀光客的面孔；我先走到今天落腳的青旅放背包，Dopa 非常像家，感覺是目前住過至少二十間的青旅裡面最溫暖的，和我介紹環境的經營（帥）小哥也感覺很有自己堅持的想法——他真心希望帶給背包客一個舒服的休息空間。
![Dopa 的客廳](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0218-2.jpeg)

為了吃到我選定的 Tagliatelle al ragù（很爛的執著），我花了半小時才走到餐廳，老闆和我說還有半小時才到 lunch time（啊估狗不會寫喔），我只好 see you later，因此又走了將近一個小時的路在市中心閒晃才又回來。就是這種很躁的感覺，但也不會讓我很想死的這種。

這個肉醬寬麵調味偏淡，麵條平淡無奇、沒有我想像中的硬，在上頭剝的起士存在感頗低，整碗吃完不膩，燉肉味最後在唇齒留香，記憶點可能是 12:30 才開始供應的這件事。不差但也沒屌到哪裡，我對於評論裡面說嘗過很多肉醬寬麵而這裡的最好吃的 N 個人感到不解，還是這個東西的極限只是我的及格。
![ragu ragu](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0218-3.jpeg)

不過我飯後外帶了 3 歐的義大利餛飩——Tortelloni di Zucca（南瓜）和 Tortelloni Ricotta Prezzemolo（Ricotta 起司、Prezzemolo 義大利歐芹），打算晚餐在 Dopa 用鮮奶油簡單調白醬配著吃，這個就很不錯了。

為了先冰餃，我又走了半小時回宿舍，這次剛好遇到生理期來（繼上次在大邱染了人家床單一片紅，我這次做了萬全的準備），不確定是荷爾蒙在搞還是走了很多路很累，下午在睡覺洞裡坐著瞇了半小時，傍晚再出門晃晃。

但來回市中心已經走了不少路，該看的其實都瞄過了，傍晚出門主要目的是喝咖（很還好），也像在強迫自己不要白白浪費少給佛羅倫斯的半天（你就認真看一下每）。在波隆那待一晚好像就只是我對正宗肉醬寬麵的莫名堅持。

再次出門先來到原來是私房景點的小威尼斯，我走過去的時候已經有阿兜仔在排隊拍照了；在街上一家餐廳旁的牆壁有一扇小門，打開來就是和我昨天在威尼斯看到的 Rio 一樣，今早離開已經在想念了。後面的阿姨問要不要幫我拍照，我前幾天已經拍過了，也覺得我在這裡還要拍很像威尼斯很 ez（？？？），就搖搖頭 its okay thank you 拒絕了，不過離開當天可以馬上再見代餐我還是很開心的喔（嫌棄地笑）⋯⋯
![這個是藏在路邊牆壁後面的景喔](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0218-4.jpeg)

我下午經過兩三次，傍晚終於走進了只蓋一半就沒錢了的聖白托略大殿，裡面和其他 fancy 教堂比起來一點也不富麗堂皇，就不說外殼的施工進度不對稱、還有屋頂的黑磚了；波隆那好像就是這樣，有點隨便又不想給人亂七八糟對待的。
![蓋一半ㄉ大殿](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0218-5.jpeg)

出了大殿後門來到波隆那大學的舊址（？），拱廊上面掛了超級多徽章（Gemini 說是傑出校友），我只講得出很酷；路上的街景因為處處是騎樓、也有不少摩托車，某些角落有點台灣，小喜。
![台喔](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0218-8.jpeg)

這次明顯感覺得到自己對於歐洲建築的審美疲乏，教堂、城堡什麼的好像都不再驚艷，老城區的氛圍和景點的種類感覺都快要大同小異了。所以還是一直執著把點踩完的我也在踩自己吧。
![徽章擺全滿其實莫名可怕](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0218-6.jpeg)

回程路上不小心撞進了真的有在日常運作的教會，我聽著完全不懂的語言、看著完全沒看過的儀式，好想好想知道他們在幹嘛；第一次真的在教堂裡看到人們起立坐下、跟唱聖歌，教宗（？）教頭（？）在台上念著正經台詞、手勢比劃威嚴有力，整體氣氛很莊重肅穆，是很特別的意外發現。台灣感覺沒有那麼正式在運作的教會，還是只是我不知道勒。

回到宿舍處理晚餐的部分，南瓜口味的義大利餛飩驚為天人！啊起士那個就普通、吃不習慣。餛飩的餃皮不知道是不是比較厚而較有嚼勁，我比較喜歡這個硬度，南瓜餡甜甜的讓整個餃子甜鹹合一，終於是我在這裡明顯感受得到層次的食物⋯⋯

雖然我調的白醬感覺只是充其量的有個東西沾，但在廚房沒有顯得手忙腳亂，還用了旅行路上買的當地食材解決一餐，情緒價值和味道可以五五開了。很感謝種種的堅持讓我遇到南瓜餛飩嗚嗚。
![《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0218-7.jpeg)

波隆那感覺好流水帳，我體感自己的一天也很像冗長乏味的精神時光屋，呼，終於完成今天了。沒有特別想為波隆那反駁他的無聊，但也不會完全不推薦來這裡走走，感覺每個人的波隆那都還是會有他可愛的地方，躁躁的但不讓人生氣、很沒趣但還是有特別的回憶。明天也是一早出，要去佛羅倫斯啦！

## 2/19
我在想是 Florence 這個城市的名字本身已經帶給我一些更加美麗的遐想，還是因為文藝復興起始點、達文西和米開朗基羅的作品抬頭，讓我覺得佛羅倫斯不該只有如此。
![我的第一眼百花聖殿是陰陰ㄉ](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0219-5.jpeg)

一早波隆那下了大雨，中央車站附近車水馬龍，第一次在歐洲聽到很不客氣的喇叭聲此起彼落；我對這裡的車站都差不多熟悉了，不需要再花費很多時間找月台，今天久違地用火車移動，絲滑上下車，好像沒有什麼困難（拖拉行李也算）出現就稍微減低了旅行的魅力。

不到一小時車程的目的地也不意外地下著大雨，佛羅倫斯也沒用什麼太客氣的臉色迎接我，出了車站除了賭爛沒有其他感受，大衛雕像乾我屁事；但為了珍惜在這裡安排的時間（一天半相對比部落客的建議短很多），我ㄧ丟完背包就趕快出門晃晃了。

首先來到最近的中央市場，這裡有像是傳統市場的區域在賣肉、賣菜，而我買了兩條看起來像麵包酥的軟餅乾；
![普通](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0219-2.jpeg)

二樓的美食街賣相都很不錯，有試吃到一塊柑橘布朗尼甜度剛好，如果一塊不用五歐我可能就會買了；外頭是用帆布搭建的皮革小販，老闆不知道為什麼都咖咖的，感覺一個義大利人也沒有。
![走過去都有皮味](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0219-1.jpeg)

我現在看到大起士和大肉乾已經不會覺得神奇了，這裡的小販大概攤得出哪些貨色也略知一二（我在格勒可是會去逛 les halles 的人），「好不好逛」不構成問題，眼睛有沒有找到能現吃且粗飽的食物才是重點，在觀光市場最後還是放棄了覓食。

而原本打算在這裡買個小包或皮夾，但也沒看到有興趣的（下雨天，李峻還說皮革市場的皮件全部看起來都快要發霉）。我不希望個人的期待落空讓我對這個城市的印象扣分，但還是很難不先入為主。

再散步到百花聖殿為中心的老城區，午後大放晴，但這卻意外地沒有太大的加分作用。
![放晴ㄉ百花聖殿](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0219-7.jpeg)

野豬噴泉很可愛、
![這個中國大伯技術還可以](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0219-3.jpeg)

烤乳豬三明治還不錯，傭兵涼廊的假大衛就夠看了，百花聖殿在藍天白雲陽光下真的很美，每條路上很窄的人行道（感覺不能叫做，那只是靠邊放的石頭，完全不能兩人並肩同時過）和老舊的房子挺帶文藝復興的勁，
![舊舊又不舊的](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0219-6.jpeg)

老橋從對側的橋上看起來老得很有韻味（1345 年的橋上還會蓋房喔很酷，麥地奇這家好野人一定狂吃大肉（原本是肉販）還敢嫌臭，害我現在只能看珠寶店），但厚厚的雲層讓晚霞染不上一點新意。
![老橋](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0219-4.jpeg)

其實我在外面走了整整八個小時，但現在回想起來，逛完市場後走訪的景點都是差不多的東西——教堂、拱門、噴泉、廣場。整天下來，景點皆已閱畢，沒有特別被驚艷或是感動的畫面，感覺上也只是想完整「走」完這一天，沒有特別開心反而疲憊。是因為我沒有進美術館博物館、登上百花聖殿的鐘樓，所以才感受不到佛羅倫斯的厲害嗎；還是我不想面對自己有明顯的個人喜好，和一堆人的趨之若鶩背馳。

我發現再這樣下去，歐洲我「可能」很快就玩膩了。突然好想趕快回格勒，一直有這裡「就這樣」的感覺。

教堂很漂亮啦，散步走過的路也很有味道，但是就沒有但是，所以也沒有所以。晚安佛羅倫斯，今日遊記結束得倉促又空泛。如果我下次還來到這說晚安，大概是要去比薩或是五漁村的關係，或是我真的有錢有閒到可以再訪並登塔了。

## 2/20
天氣的好壞會大幅影響我對一個城市的好感。

今天早上起來是大晴天，太陽高照讓我對佛羅倫斯的印象好了許多。百花聖殿在陽光下又更顯端莊優雅，散步走過的街景終於給了我 Florence 的感覺，不再是陰鬱老舊的斑駁淒涼感，而是人本價值在這裡被實現而充滿的 vitality，一直維持著活力到現在。

我今天先走到車站旁的教堂和修道院附近，街邊有 Florence old jazz band，被叔叔們對音樂的喜歡和表演的熱情感染，就算白髮大肚也十分有魅力，我跟著搖頭晃腦、心情愉悅，一天就這麼帶著很喜歡 people 的微笑展開了。
![這幾個伯伯超可愛ㄉ](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0220-1.jpeg)

中央市場的牛肚包口味比想像得淡很多，就算青醬和辣醬 mix 也很不帶勁，咬完麵包而位移的牙齒倒是很帶感，
![滿腥ㄉㄛ](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0220-2.jpeg)

然後買了草莓、喝了卡布，我又往百花聖殿的方向開始老城散策，兩天經過的街景明明一樣，但今天的所見就是比較 Florence，黃黃的老宅是美麗的。
![很帶感ㄉ黃](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0220-3%20(1).jpeg)

我在百花聖殿前大概發了 15 分鐘左右的呆，細細地看著正大門上的每個部分，想著大理石到底要怎麼雕成這個樣子勒、這樣子配色的教堂真的很好看欸、如果這裡跟文藝復興沒有關係還蓋得出這麼漂亮的教堂嗎；一邊看著拍完照馬上低頭選片或是擺拍一拍再拍的男女，可悲這世代。
![大門的側邊看得到後面圓頂ㄉ這顆，也很漂亮！](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0220-4.jpeg)

離前往維洛納的火車還有一點尷尬的時間，不知道要晃去哪，就打算去看看昨天經過排了很長人龍的 Vivoli，如果人潮不多就吃一顆 gelato，結果發現這家店有名的是我還沒在歐洲吃過的 affogato，那就必來一杯了。在 6 塊原味和 9 塊開心果之間，我用台幣 100 塊差距的認知果斷升級，但是是在嚼著果粒的香氣加上濃縮冰淇淋的組合衝擊之下，我才完全沒有後悔，很爽，心情又更好了。
![好想再吃一次 T__T](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0220-5.jpeg)

我好像是走回去青旅拿背包準備離開的路上才開始喜歡佛羅倫斯，即使最後因為 30 歐太貴了沒有登頂看風景。對啊，是在這個地方開始的，我現在幾乎沒辦法想像自己活在精神繞著神轉的世界，人本主義稀釋成人權、科學和不同地區的生活態度，所有理所當然的秩序和制度某個程度上都能追溯到這座城市。我今早走在街上，終於了解佛羅倫斯的美和魅力了。

不過這個喜歡也不及我對威尼斯啦，火車起駛的時候我沒有什麼情緒波動。將近下午快四點我來到維洛納，由於車站和老城有點距離，我第一次在義大利搭公車移動，整個車廂只有我一個東方臉孔，莫名感覺自己像在侵門踏戶，都有點不好意思了，只好在等下車的時候都裝作自己是平常就在這裡生活的人（有沒有像也無從得知）。
![881 Florence](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0220-6.jpeg)

今天落腳的地方更奇怪了，很像藏在幼稚園裡面的房間，但是很新、很乾淨；很多小朋友會在走廊跑來跑去，有幾間隔間的樣子也長得跟我幼稚園的教室很像，後來問了櫃台才知道這裡是類似提供婦女中繼站的機構，難怪我一看到櫃台的姐姐就覺得她很善良。

丟好背包先出門晃了兩個廣場，不知道為什麼這裡跑來跑去的小朋友特別多，羅密歐和茱麗葉是有在加持生育率嗎。鬧區好像真的不大，紀念品也半斤八兩，三兩下都繞完了一圈，臨時決定去聖彼得城堡看夕陽。

座落在過河的小山丘上，連續好幾天每天超過兩萬步的行程，爬沒幾階樓梯就好累啊，但抵達後馬上就被療癒好了，太漂亮了！（詞窮）
![過河之前的景](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0220-7.jpeg)

我上一次這樣俯瞰歐洲城市，可能是小時候在布拉格那次了（也只有一次），那些橘色的屋頂到現在還刻在我的腦袋裡，真的很漂亮，時不時會作為我想要努力工作再帶自己到歐洲的能量飲；今天在維洛納看到的景色也很美，有河有橋有鹹蛋黃的加持，真的看得很幸福，對維洛納的喜歡也因此增加了；不過長時間的出遊確實會讓感官驚艷被觸碰的閾值拉高，有點那個。
![這天的夕陽也可以記很久喔！](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0220-8.jpeg)

下山之後來到 La Bottega della Gina XXL 吃晚餐，我點了 mix，有八顆義大利餛飩，一邊吃一邊寫出來的筆記如下：
第一顆 很甜 杏仁茶 超怪 到底在吃什麼
第二顆 肉醬 不錯 正常發揮 沒有太鹹所以感覺是可以點一碗十顆的那種
第三顆 枕頭狀 沒啥味道 口感很像沒拌乾淨的哇沙米 濕濕粉粉要化不化的
第四顆 松露蕈菇豆腐 這很讚
第五顆 綠皮 豆腐拌不知道什麼香菜 有點像羅勒 無感
第六顆 紫皮 味道很像很久沒開又發霉的書櫃 裡面是放巫師調藥水的書那種 幹超噁誒餓餓餓幹超噁趕快吞下去
第七顆 紅皮 番茄豆腐 很像下一秒快要吃到好吃的義大利麵又不給我完全體的感覺 和起士粉是最配的
第八顆 第一口一樣豆腐渣渣口感但沒味道 特別鹹 不知道是起士粉特別多還是起士口味 放最後一顆就有點解
![八顆義大利餛飩](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0220-9.jpeg)

李峻說我就難吃的寫一大堆，好吃的講不出所以然，和我平常靠腰他是一樣意思，哈哈。然後我吃完就回來了。今天也是一個人體驗了很多美好的一天，我對於目前所有我的五官能夠感知的一切，還是非常感謝而珍惜，我還是會努力早起、努力走路，但已經一週都在外漂泊探險的疲憊感還是很難不忽視，我想「回法國」了。

## 2/21
我以為我會想要、也很適合當背包客，根本不是。

維洛納在我今天準備離開前又送我了一個大禮物——聖彼得堡上的義大利（小元代餐）吉他阿伯，有夠可愛。

今天也是慢悠悠地起床 checkout，當免費仔逛了老城堡、競技場、茱麗葉的家，就和睡前預期的一樣無聊。原本我整趟最期待的競技場，因為明天要辦冬奧閉幕式而暫停開放參觀（我是來米蘭才知道有冬奧），下午的時間安排突然空白，就決定改早回米蘭的車（不知道為什麼這裡用回比較適合）。
![好想看競技場喔～～](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0221-1.jpeg)

午餐隨便找了一個 padthai 處理肚子在叫，飯後在河邊喝了杯卡布，然後前往最後一個想看的羅馬劇院。原以為不用門票，結果在我理所當然地打開入口處的門就被攔了下來，小哥說你想當免費仔的話可以爬上去城堡那邊看看。我為了看白痴劇院沒有選到時間最緊的那班車，結果現在沒得（因為沒有競技場我就沒買 verona pass 了啊就什麼都要錢啊靠北）；但都過橋到河的對岸了，也只好再爬一次上去看看。

那個小哥洗勒靠，我根本就沒看到什麼劇院，
![但可以看到一點點古蹟啦](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0221-2.jpeg)

但在這裡再次俯瞰了白天陽光下的維洛納，也遇到了可愛吉他阿伯，超～級～幸福！！
![白天ㄉ維洛納](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0221-4.jpeg)

他背後就是一片整座城市的遠景，我一邊看著眼前的景色、一邊開心地和他一起隨著節拍點點頭，在他特別陶醉的幾個小節也忍不住露牙齒笑，我能感受得到他多喜歡音樂（他的吉他盒上面寫 MUSIK IS LOVE）。
![《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0221-3.jpeg)

就算我沒有投錢，阿伯也會和我對看著笑，很像在告訴我：歡迎光臨維洛納喔，希望你在這裡有因為我的音樂度過美好的時光。他在街邊撥著弦不像是求溫飽的工作，而是想要分享音樂、帶給欣賞美景的人們最適合的氛圍。這個能夠鳥瞰整座城市，耳邊還有吉他阿伯伴奏的午後，是我在北義最單純美好的時刻了。

下山、拿行李、等公車、坐上離開的火車，一直到米蘭和以後，我都會很滿足地感受著這個午後。

大概是接近傍晚時分抵達米蘭，我把背包丟好在青旅後打算去 navigli 運河區晃晃，想要看個晚霞、喝一杯 spritz 再回來。抵達時太陽差不多已經落下，路上看到了面具怪和河上莫名奇妙出現在這的 gondola 讓我又忍不住想念威尼斯。
![navigli 運河區](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0221-5.jpeg)

我走了一陣子就感覺到了這裡是什麼樣的地方（這個點沒做什麼功課就來了），其實就是老外喜歡聊天喝酒聚會的一個去處而已，而附近的小店商圈走文青路線，觀光客也會來走走、順便體驗米蘭的黃昏，僅此；桌上出現的酒看起來都不是什麼特別厲害的東西，happy hour 出現買酒送 buffet 或 snack 的 promo 讓 navigli 感覺一點也不浪漫。

我先來回繞運河走了一整圈，都沒有看到人少、不太吵又有面河座位的店家，在鬧區尾巴終於找到了順眼的直接 walk in，發現其他店均價 5 歐的 spritz 在這裡要 12 歐。現在想想真的不知道發現當下幹嘛不理直氣壯地離開，我可能是在賭氣給自己看——我（未來）就是不缺這點錢的人，還是硬著頭皮點下去了，就算那個服務生挑眉問 no food 我覺得很靠北，我也還是讓桌上只放著一杯酒、最後付了 12 歐。navigli bad，不知道如果以後夠寬裕之後再來，我會不會喜歡這個地方。
![將近 450 台 ==](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0221-7.jpeg)

原本因為 12 歐說晚餐不配加肉的我還是去青旅附近的超市抓了最便宜的火腿，為了處理便秘還拿了大盒菠菜。今天煮李峻幫我帶來的拉麵道，喝到熱湯在這裡變成很不容易的事情，我現在寫小作文打的嗝還是調味包口味，真好。這樣隨便煮隨便吃，比起 20 幾歐的餐廳外食都還爽，感覺明天要找亞超買包泡麵比照處理。
![我ㄉ拉麵道](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0221-6.jpeg)

再兩天就要回格勒了。明天要去號稱義大利最美湖的 Como，和兩天後回去逛菜市場和自己煮飯的計畫，好像後者更有魅力一點。玩得很開心，可是好累喔，真是的。

## 2/22
經過這些可能這輩子都不會再來到的地方，看到眼前的人類、建築、雪山、湖泊，或是等待火車經過的路口、沒有名字的小橋流水；平常我生活在自己的國家，感受不到、甚至也想像不到這些事物也在行進、流動，就覺得自己真的真的好渺小。
![像是經過這樣地方ㄉ時候會這樣想](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0222-1.jpeg)

今天去 Como 搭了一班火車、一班接駁車、兩班船，最後再搭火車回米蘭。路上我都處在一個一直想要把任何東西都抓住的狀態，太漂亮了（原本沒有打算走 Como，也比預期的漂亮很多）、太難得了。
![《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0222-2.jpeg)

對於老外來說只是搭班火車，就能見到阿爾卑斯的雪山還有如此波光粼粼（還有什麼用詞可以拿來更好地描述一條一條亮亮蟲在水面上變魔法的感覺）的湖泊，而對於我，不知道這輩子還會不會再次來到這個地方。

要說台灣像這樣很有度假氛圍的地方，不知道要去哪裡才有；西部到台東或是花蓮需要四個小時，從米蘭都快要到羅馬了。也不知道阿兜仔來看 Sun Moon Lake 會不會覺得很普通。比較來比較去真的會死人。

只是我篤定台灣什麼都好，就是在超長工時、旅遊的成本（當然不能和搭巴士就能出國的歐陸相提並論，但之所以選擇來歐洲交換就是這點太香了）和娛樂消遣的多樣性，這三點上無法認同；每天 8+ 小時可以認命，也不是非要雪場和市區獨立的腳踏車道不可，但我很想很想透過世界旅遊最大化豐富我的生命體驗，這個好像因地緣環境有所限制（不能和歐陸放一起討論，但是世界上就是有那麼多這樣在過日子的人啊啊啊啊）。

還是是因為我還沒有自己的車，和足夠的錢呢。雖然正職工作可想而知是辛苦的開端，但我也同時很期待在穩定的收入條件下，我會如何帶給自己滿意的生活（雖然家教做到後半期已經開始拉高了閾值 ==）。

Lake Como 很美，今天在幾個不同的岸邊都坐下來發呆了好一陣子，很開心。明天在米蘭狗到傍晚就準備回格勒了。在這裡的每一天總是心懷感恩，感恩再感恩。能夠在二十歲的年頭擁有這些回憶實在太難得了。
![發呆 1/N](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/0222-3.jpeg)

## 2/23

------------------------------------------------------------------------------------------------

在北義的最後一天超無聊，我整天就在米蘭市區閒晃，能想起的是這天的 gelato 巧克力是最好吃的，還有冬奧贊助商可口可樂的展覽館很好玩，和一起坐在大噴水池邊的清潔阿伯單方面比賽發呆（我輸，他全程一小時都沒滑手機），點點點。喔對了，回程還在車上遇到立陶宛妹妹，甚至兩個人的 random seat 被分配在一起，緣分真神奇。
在整理遊記的時候也順便認真翻了相簿，總歸這十天是一趟很難忘、很幸褔的旅程，不管是喜歡的還是沒那麼喜歡的，最好還是好的。義大利還能再來好幾次喔！我在歐陸第一個一個人的長時間旅行，以上，報告完畢。
![最後一爵啦豆](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/btn.jpeg)`,dp=`---
title: "葡萄牙遊記 (260311_260316)"
date: 2026-03-31
description: "小滴酒精、白花或是巧克力、四輪車、某段蜘蛛絲、不明物體、陽光、蟲鳴鳥叫。"
category: "遊記"
tags: []
imageUrl: "https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/IMG_9497.jpeg"
---

## 3/11
所有葡萄牙在做蛋撻的人都給我去台灣移地訓練。事不過三，我今天抵達第一天就吃兩顆，兩顆都很差勁，皮不酥、餡不蛋，後天去里斯本那家百年創始店是 last chance，請注意一點。
![落地第一顆，但咖啡尚可](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/0311_1.jpeg)

今天一早快六點在格勒搭火車，找月台、找座位都已經不是會讓人匆忙、焦慮的事情了；大概七點抵達里昂機場，已經有了一次從這裡飛的經驗，從下火車到登機口只花了十五分鐘左右（水有倒、小瓶液體有包好），絲滑得很無聊。在吃到蛋撻以前的感受都很不像在出（國）去玩。

我很難確定是因為出法國對我來說還是國外到國外，長時間都待在歐洲的環境很難對景物大驚小怪，還是因為旅行有點疲乏了，讓我除了對便宜的食物之外沒有其他期待。整體來說就是換了個地方散步，沒有探險的驚喜感了。
![這裡的海鷗超級囂張，但已經見識過中山猴仔，這就只有一點點點驚喜](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/0311_3.jpeg)

雖然在吃到蛋撻裡面那坨莫名奇妙甜死人的卡士達之後，我還是強烈意識到了我身處在第一次來到的國家，需要時間去了解、去適應，但是我記得我剛到克拉科夫和柏林的心情激動，今天整天的心情一點都不像那樣雀躍或澎湃。

在很多次盯著歐陸的地圖和我的所有日程去整理以後，除了我未來想要特別規劃的國家和巴爾幹半島，我這半年將會把剩下所有的歐洲國家都拜訪一輪。這是我想要做的沒錯，但完成的方式好像只是在 togo list 上打了一個又一個的勾；我還是有在看 barber shop 裡面理髮師和客人的互動、原來凹凸不平的磚塊路是這樣鋪、這個國家的垃圾怎麼回收、民宅的陽台怎麼被使用⋯⋯

只是一點都不驚喜了。昨天睡前想著明天要出門的感覺只是好累，我對我自己很失望，可是我還是想趁這半年盡力地走訪我到得了的地方。害，之後回來看絕對是甜蜜的煩惱。

這次也搭廉航，只背了一咖後背包，下飛機之後不用領行李、歐盟境內也不用過海關，我就像是有來過一樣地走到地鐵站，憑感覺沒確認就上了車；三十分鐘左右的車程，路上小房子給我的感覺有點像顏色比較多的日本，窗外看看、手機滑滑，自然而然地就抵達青旅了，順利得很無聊。

![我主動搭話的台灣夫妻檔帶三隻，阿姨幫我拍的](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/0311_4.jpeg)
波多的景點在兩個小時內就逛得差不多，藍色花磚的教堂在我看過米蘭大教堂和佛羅倫斯百花聖殿之後變得普通，市場裡有在波蘭吃過的烤羊奶起士和到處都有的魚罐頭，路上搭到話的同一家台灣人在我亂ㄙㄟ的過程中一連遇到三次，午餐的豬豬包讓我覺得葡萄牙人可能已經盡力地在取悅遊客了，沒有新奇而無聊。

checkin 時間到點了我還回來睡了個午覺。傍晚打算去路易不知道幾世橋上看夕陽，結果雲層太厚了；而且我在橋上發現我很害怕走在這種不是實心、很像水溝蓋有縫縫的路面，可我一個人也不能怎樣，很想抓住身邊的人的手臂，但無援作罷，只好想我的恐懼是怕死還是怕痛，左手一邊隔著厚外套輕扶可以抓住的什麼，很解。晚餐 11 歐就吃個罷罷罷。
![我第一天沒有完整走過ㄑ但視野還是很好](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/0311_2.jpeg)

今天有點不知道在幹嘛，又有在幹嘛。還是是因為義大利真的太強了，我平常在格勒每天看一樣的也還是很喜歡啊。吼我不知道啦，葡萄牙好像還好欸。今天住的洞第一次遇到放雙人床欸，感覺很好睡，窗外海鷗還在那邊靠腰，跟我一樣沒有造詣，還是眼睛閉閉睡覺好。

## 3/12
上一口結束沿著杯緣流下的小滴酒精，嘴巴裡留著餘韻的白花或是巧克力，葡萄梯田階間左右穿梭的四輪車，隨著風和陽光折射的某段蜘蛛絲，遠處移動的不明物體跳啊跳，在經過一個早上的陰天之後出現的陽光，不停歡慶春天來到的蟲鳴鳥叫。小小而有力的、不刻意的組成，完整的放鬆。
![《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/0312_1.jpeg)

今天大概六點半醒來，海鷗的叫聲已經在窗外造反，天空比想像的還要藍，太陽還沒升起而帶點灰；至少是一個女生一大清早可以安全地走二十分鐘的路的亮。今天要去杜羅河谷喝波特酒。

去程要轉兩班車，總共搭三段，轉乘間隔都不到十分鐘，我在每一段都昏昏欲睡，不會有人搖搖我和我說準備下車喔，這種刺激感讓今天好像不那麼無聊。抵達第一個目的地 Regua 的前一段，我剛好在下車前三分鐘左右驚醒，剛睡醒下車特別冷，還看到天空陰暗、葡萄梯田前一片霧茫茫，會想吃的店還要三十分鐘才開門，又覺得葡萄牙特別靠腰了。
![很像那種在這裡被殺掉會不知道死因的地方](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/0312_2.jpeg)

我就沿著杜羅河走了半小時，沒有什麼特別驚艷的景色，終於在落座後吃到第一口 pancake 才覺得今天跑遠走這趟算是對得起自己，楓糖和培根的鹹甜組合終於開啟了活著的一天，就算莫名其妙分層的卡布還是有點拐氣，我還是相信自己、也相信天氣預報，篤定待會會是晴天，杜羅河谷將會帶來美好的回憶。
![這個可以學](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/0312_3.jpeg)

從 Regua 再到 Pinhao 路上的火車（第四段 ==）車程景色很漂亮，好長好長的一路上都是葡萄梯田，不知道在整個種植期間的顏色變化如何，杜羅河谷好像在這瞬間成為了我想在其他季節再來看看的地方；很幸運地太陽在大概一半的車程經過後如願露面，河面映著陽光照射的波光變得迷人，我這陣子對粼粼很暈船。
![漸進式晴朗](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/0312_4.jpeg)

抵達 Pinhao 後我直接步行到酒莊（之所以搞剛的搭了四段車是因為只有這邊有不用開車上山就可以去到的酒莊），不懂酒的人直接 walkin 還說我沒有預約只是想 tasting 滿經典的；我先喝了 white port blend n5 然後 ruby port LBV，比較喜歡第一杯。

白的完全不澀，很像白葡萄真的在嘴巴裡面滾啊滾，還沒吞下去的時候舌尖上會有高濃度葡萄糖狗在那邊弄得心癢癢，那個甜甜的味道很像高濃度水膠囊一直爆開爆開爆開（和第一次和男生牽手的刺激在我腦袋裡面一樣的炸開炸開炸開），吞下去再抿抿舌頭會有白花長在舌苔上。

紅的葡萄味比較沉，沒有白的那個濃濃甜甜爆擊的感覺，難怪服務生說適合配甜點（他說 for example 巧克力），相較高濃度水膠囊，我對這杯的喜歡程度少了許多，不過把氣鼓滿嘴巴會出現空氣巧克力，滿可愛的；嘴唇往內抿會辣辣刺刺的，問了 Gemini 風味描述說可能有香料，像是黑胡椒或肉桂之類的。
![品酒人士...](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/0312_5.jpeg)

最後結帳就這兩杯價位偏便的，沒有下酒菜；如果我有買托運行李，不知道會不會想帶幾瓶回去。

預算有限有預算有限的玩法，這幾次窮遊我都在想如果我有錢一點會做出什麼決定（比如直接 getyourguide 玩一日遊，就不用一次搭四班車了）、下次再來的話會多體驗哪些（這次沒有喝到 tawny port ㄟㄞ推薦 20 年那ㄓ）；只是以目前現在擁有的來說，我已經非常非常滿足了。不知道滿足的閾值會隨著年紀、財力、見識而上升還是下降。

在酒莊發呆了兩小時左右。回程在 Pinhao 到 Regua 這段天氣都很好了，葡萄梯田真的沿著河流滿滿都是，我終於對世界文化遺產的認證沒有了質疑，說不到壯觀但數大便是美。
![Pinhao 火車站](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/0312_6.jpeg)

原訂 23 分抵達的火車，要接 25 分的巴士，這裡離 Porto 市區有好大一段距離，班次又很少，但莫名覺得被滯留在這也無妨的我 28 分還坐在火車上看著梯田看到睡著，今天算是真的有放鬆到了吧。

接著的巴士回程路上繞著山谷蜿蜒，我看著窗邊在梯上的小房子覺得這可能也不輸瑞士吧。如果我超有錢（文字溢出來對於金錢的匱乏感 na），好像旅行的盡頭就是大同小異，有雪沒雪、有冰河沒冰河，世界什麼奇蹟還什麼遺產，要怎麼每次都保持對大自然的敬畏還有對先人智慧的感嘆，可能才是人生課題。那是不是好險我現在有錢又沒錢的。

巴士轉乘火車停在 Caide 這個鳥更不生蛋的鄉下地方，需要等約一個小時，回 Sao Bento 的火車才來。車站附近一個能看的東西都沒有，咖啡看起來也不太值得，我就在斜對面遊戲沙場的鞦韆上晃著坐了好久，都沒有小朋友跑經過，來和我搶鞦韆。
![我坐上去之前還很怕被聽不懂的語言罵](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/0312_7.jpeg)

未來再想起這個小站的即視感可能很強烈，因為就和經過 Como 不知名小鎮的感覺一樣，這些地方的這些東西在我面對屬於我自己的水深火熱時，也在這麼運作著，世界真的好大，而我可能一輩子就這麼一次，會感覺到這些。

傍晚回到波多市區，出了 Sao Bento 就直接往大橋走，今天的天空很適合夕陽發揮，日落在最近都變成 18:30 左右了（格勒也是），春天除了盛開的花，也帶來了越來越長的日照。還有些時間，我打算到橋對面小山坡擠滿人的地方看看，過橋時和昨天一樣，metro 一直從旁邊經過還是讓我很害怕，低著頭專注腳步終於到了對岸橋頭，我才發現空氣中的白霧是糖炒栗子在搞。
![到對岸可以看到完整ㄉ橋](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/0312_8.jpeg)

小山坡不知道從傍晚何時開始變成了戶外演唱會坐位區，街頭兄弟各帶著一把吉他熱情演唱，晚霞和人們的笑容輝映，真不錯。我好喜歡所有在歐洲遇到表演音樂的街頭藝人（目前最喜歡在維洛納城堡上遇到的白髮阿伯 aka 義大利金知元代餐）。

今天周圍看的觀眾是最多的，而且氛圍很好，大家會一起唱、一起打拍子，還有阿伯會到前面跳舞，我也跟著一起哼了幾句，好像對於有沒有看到漂亮的蛋黃沒有那麼執著了。昨天無聊的波多隨著我在杜羅河谷帶回來的幸福可愛了起來（但是晚餐吃到的濕答答三明治還是給我下去）。

我的記憶裡有很多片刻之所以深刻是因為嗅覺和聽覺體驗，比如再次聞到某個味道或聽到某首歌就感覺得到是在哪裡做了什麼，但味覺體驗的深刻幾乎沒有。我希望我再次喝到 blend n5 的時候，可以再完整地想起來今天在杜羅河谷的午後，甜甜的、愜意的。
![這天ㄉ晚霞很漂亮喔](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/0312_9.jpeg)

## 3/13
是他們生來就有一大疊文本和殖民歷史，仗著侵略和深邃先優越的，還是我帶著亞洲面孔的自卑心態和比較的眼光而不想服輸，先瞧不起他們的。

隨便。有幾個打從心底認同的朋友，要不要生小孩，想在哪個國家生活，總資產要幾千萬才退休。隨便。年輕得能和現實脫軌而天天悠然自得的日子啊，就是現在，可以做夢的奢侈能在 AI 強到極限之後讓我放過自己嗎？

在葡萄牙常常忘記自己在葡萄牙。

早餐昨晚就點好了，最後幾口法國吐司很膩。我在想是葡萄牙人還是台灣人比較懂法國吐司，法國人對於我覺得這兩個地方吃到的吐司都比他們的好吃三千萬倍會不會覺得被污辱，還是民族自尊心不會長在食物上（摳連）。
![前一天晚上就在嘴饞，空氣點餐](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/0313_1.jpeg)

我走在路上發現我自己聰明得知道什麼回答什麼關鍵字可以拿到處方，我有意識地在階段劇變時，讓偶像給我的救贖具體化成一顆顆的藥丸，理論上來說我在消費全民健保，沒有理論上來說，我只是累積了一坨情緒大便，時光機還沒能被發明去處理童年，二十歲便試著找現在看來幼稚的方法消化。

我還發現這裡的酒和咖啡沒有適合飲用的時間差，就是替代水的其他液體，任何時間都可以乾。在台灣，咖啡廳和酒吧是分開的場所，就連要融合成一份菜單也感覺得到這是 1+1 分別獨立，或是像 fake sober 那樣白咖晚酒；習慣的供應時間也讓這兩個東西給人的感覺不太一樣，酒是逃避太陽想放縱自己的藉口，咖啡是整個城市醒腦用的開關，共同點可能都是調情可以搭配的。

這是獨旅的魅力，海鷗在聒噪、路面凹凸不平、正前往四周皆在施工的車站，然後我腦袋裡是憂鬱症頭和台灣人的自傲。

Flixbus 就算是國內跨城也在底累。從波多到里斯本，三個小時的車程對於現在的我來說非常短（回台灣可能沒有這種耐心搭客運），咻一下就到了。這是葡萄牙的首都，捷運的路線規模意外地比台北小很多，路上建築是規律而美，也有像波多一樣的花磚裝飾，但舊舊髒髒的和想像有些差距。

我一下巴士就遇到售票機前面想騙服務費的獵狗，在青旅附近的路上也充滿看起來像難民或移民的咖咖黑黑人（ok 這輪是我先歧視的），尿騷味比巴黎、倫敦都還要濃厚，遊民的帳篷也豪華許多，里斯本第一天給我的不安全感比柏林還要重。（不曉得是不是我為了省一趟車程從 Anjos 一路走到 Alfama 甚至到海邊，有誤闖到奇怪的區域啦）
![路上經過一個超～高斜坡，甚至有一小段電扶梯，第一次在戶外搭很神奇](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/0313_2.jpeg)

今天雲層很厚，天空一直陰陰的，觀景台和 28 號電車還是很漂亮，只是沒有晴天加 buff，腦袋裡一直沒辦法忍住不去想布拉格更乾淨一致的橘色屋頂磚瓦，還有在米蘭「第一次」看到的復古電車。相比明信片上會印的這些景點，3.5 歐超多肉的 kebab 更讓我回味。
![老闆把四瓶醬汁都拿出來給我，看我衛生紙擦不夠還會補，感蝦（但是他叫我寫估狗評論我沒有：Ｄ）](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/0313_3.jpeg)

說好事不過三的葡式蛋撻，在 Alfama 看到了握手牌還是忍不住打卡一顆，我就知道我自己在犯賤；明天去百年蛋撻店真的 last chance 了⋯⋯

目前在里斯本幾個小時的回憶都碎碎的，感覺走了很多坡但有點空虛，那些部落格會寫到的點都像是其他歐洲國家也有類似東西的低配版。這座城市未來若會在我的腦袋佔一小塊位置，大概是因為靠海又是丘陵地吧。
![這次去到多個觀景台裡面最喜歡ㄉ]](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/0313_4.jpeg)

晚安，里斯本，有點講不出你個什麼，有點沒料又有自己的味道，不上不下可也不能說中規中矩。明天整天我都在這，不知道會不會翻盤讓我想再來第二次（目前歐洲唯一會覺得可以不用再來的國家），如果產生感情可能會有多一點有趣的描述。拍謝啦，明天見喔。

## 3/14
結果里斯本今天也沒給我好看的臉色，外套濕答答的。

出來玩的作息都很規律，十一點前會睡著，然後睡九個小時醒來還是很累。今天快十點才出門，一路往西來到貝倫區，陰雨的天氣讓我在海邊散步也沒有在海邊散步的感覺，貝倫塔和修道院可能被掃到颱風尾，沒啥看頭。
![而且貝倫塔還在整修，解](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/0314_2.jpeg)

不過百年蛋塔終於深得我心，這是 40 分鐘車程值得的唯一原因；有時候對自己發誓的事不過三應該要是四，或五或六，寬容可以得到幸福。我今天吃了兩顆蛋塔，甜度脆度剛好、餡的口感圓滑不成糊（終於不是類卡士達），喜歡到傍晚買了一顆蛋塔磁鐵回家想念。原本在猶豫要不要外帶當明天早餐，但怕是回來冰過皮不脆了，我的美好回憶就被蓋上了軟皮，不可以。
![《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/0314_1.jpeg)

不間斷的毛毛雨在濕透了我的鋪棉外套以後，我突然覺得自己沒那麼喜歡里斯本，Bica 電車、聖胡斯塔升降機和該去的觀景台都看完了，但對這座城市還是沒有特別印象深刻，甚至在回顧今天的時候，很多片段已經消失在腦袋裡，28 tram 老舊車廂內的不穩和撞擊可能是ㄎㄠ在感知上最強的（感覺再繼續開有一天一定會出事的那種不安全感）。
![剛好卡到尖峰時段最後一個上車，站在司機旁邊，感覺不扶好真的會衝出前面玻璃 ==](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/0314_4.jpeg)

午晚餐終於吃到海鮮燉飯，味道完全是想像得到的 literally 海鮮燉飯，還不錯吃但很不驚喜，如果少五歐我可能會再覺得不錯一點。地中海海鮮放在櫥窗裡面看起來很弱，實際上吃到也是，這些人有沒有去過日本啊。要長期居留的話，我越來越篤定歐洲對我來說不太行餒。原來我是如此重視飲食的人。
![我是吃米長大的欸 ==](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/0314_3.jpeg)

里斯本感覺不矯情，不用什麼盛大歡迎的氛圍或是建築師的別出心裁吸引人，食物的調味和窄小的人行道也沒有要討好誰，人們對觀光客和移民友善但也知道來者是外人，靠海的地理位置只是日常的一部分而非優勢（對於生活來說），就是平凡的東拼西湊而自然形成的魅力，成為文化共融的一座城市。
![舊電車內部還是挺帶勁ㄉ](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/0314_5.jpeg)

明天去辛特拉再看看會有什麼不一樣的感覺吧。目前來說，如果有人問我葡萄牙好不好玩，我可能會說預算有限可以考慮，然後翻翻相簿給看一些常態分佈的人類會喜歡的照片，說大概就是這樣唷。我後天回哈哩米的時候要煮統一蝦蝦麵，加蝦仁雞蛋豆腐菠菜。

## 3/15
太陽就在眼前隨著時間從歐陸最西邊的海平面掉下去，晚霞開始上色，整片海是薰衣草花田或是粉紅棉花糖。如果下一個時區的人類或是海上的小船也看到一樣的畫面，（那就好了。我以前會說的。）好像就沒有特別那個了。
![在回程巴士上看ㄉ晚霞](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/0315_4.jpeg)

莫名奇妙的交通規劃，沒有一個景點的無需門票，辛特拉在今天也沒有得我心，但幸好從出門到回程都是大大大晴天，不至於讓他不及格。

一早被鬧鐘叫醒就很不想起來，不知道是懶得到辛特拉一趟，還是正在對自己坦誠我對葡萄牙沒有什麼探索的慾望（這幾天都沒有狂問 Gemini 問題），賴了一個小時才從上舖跳下來（而且昨天四點被大喊 fucking 不知道啥的阿公吵起來）。在 Rossio 被白痴了 0.5 歐的票卡錢（因為火車來回票和昨天存的 day-pass 不能同時存在同一張卡 ==），大概出門一個半小時之後就到辛特拉了。

計畫魔人原本打算買的套票在火車站機台上消失，上山的巴士連只單買單程票都不知道在不行三小（而且那個堵在車門前的票務人員看到信用卡機寫中文就說 Chinese 直接ㄍㄧ我），我總共看過 5+ 篇部落格和官網，整理超久，結果沒一件事和預期的一樣，舊的資訊還不下架（連官網本人也是 ==）真的超拐氣。

![短ㄉ萬里長城](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/0315_2.jpeg)
總之我就搭巴士上山了，路途顛頗差點暈車。先到了窮不進的佩納宮看了一眼，然後走下去摩爾人城堡開始一日健行，再到連三宮堡一帶看看宮堡們的外觀，死不信邪買了又一家百年甜點店（不好吃很靠腰，甚至最後沒吃完直接丟掉），最後在等了一個小時等不到車的公車站，和波蘭一行人搭話求助，跟著他們走到下山 20 分鐘的省道上，終於搭到往羅卡角的公車，在歐陸最西邊吹著這輩子沒體驗過的高級強風，在太陽正好落下時分回程。
![沙子撒滿臉 ==](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/0315_3.jpeg)

漂亮是漂亮，但發自內心地喜歡一個地方，或是被一個畫面觸動的感覺，在頻繁旅行之後好像變成了可遇不可求的緣分。（杜羅河谷和摩爾人城堡是本次葡萄牙的 pick）
![摩爾莊園人再一張](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/0315_1.jpeg)

我原本以為我會適合當背包客，在任何奇怪的青旅都睡得不錯、白 T 和牛仔褲就穿得舒服、一天兩萬步小蛋糕，但是如果都像這陣子一樣，一直迫切地找到驚喜的火花，輕視平凡自然的其餘一切而感到無趣，我的心理狀態長時間在外旅行一定會很疲憊。

不過路上一直有全新的刺激確實讓自己很自然、不費力地遠離了社交媒體，狂暴散步也讓自我對話有很充分的時間和空間進行；這種半年以上持續在旅行的安排應該會很適合人生失意的時候。

明天里斯本應該會用大晴天送我回法國吧。

## 3/16
（實際上是 3/19 才回顧，想起來還是很三小）
里斯本的最後一天，終於是無敵藍天白雲的好天氣。我特別早起來去 honest green 吃早餐，結果原本看好便宜大盤的霹靂霹靂雞只有在午餐時段才供應，我只好點無肉的 wrap 當主餐，但也不錯吃；還另外報復性地加了香蕉蛋糕配卡布，這好像是目前在歐洲吃到最對胃口的甜點，不會太甜、蛋糕體濕度剛好，香蕉混堅果怎麼會錯！

悠悠哉哉地吃飽去寄明信片，然後在 Bica 打了第二次卡，
![自拍最靠譜 ==](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/0316_1.jpeg)

最後去到阿爾坎塔拉聖伯多祿花園（（Jardim de Sao Pedro de Alcantara）已經夠沒記憶點了名字還要那麼長 ==）的觀景台收尾葡萄牙；但景色不太如意，和想像中可以一眼望見海和城市的畫面相差甚遠，天氣好的里斯本最後結尾在這感覺有點小可惜，可是搭車去 Alfama （藍天白雲下的 Alfama 算是此行遺憾）來回會來不及去機場，只好叫 Gemini 找 Rossio 附近有沒有其他推薦的觀景台，沒想到還真的有個需要爬坡的小公園，景看起來不錯，我便在公車出發前的 30 分鐘快速啟程。

望遠前必有上坡，就在我爬得小喘、快要到目的地的時候，他媽的給我這輩子第一次遇到露鳥俠，甚至還在那邊斯斯哈哈啊啊打手槍；而且他還是站在一個轉彎處的死角，我目光朝下走著樓梯，腳踩上那一階方向稍微一彎，眼睛直接對到他的屌⋯⋯我什麼景和海隨便都不想看了，趕快讓我搭上飛機離開這個鬼地方欸。
![就這 == 我何必呢 ==](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/0316_2.jpeg)

這幾天的心得都對葡萄牙沒特別有好感，我還覺得有點抱歉，怕是自己不懂得欣賞，或是因為個人旅行疲乏而看低了美；沒差了，我最深刻的印象恐怕就是那根屌了，老鼠屎壞了一鍋粥就是這個概念（其實還有一坨屎，里斯本青旅三晚也有其中一天半夜 4 點有怪阿伯起床大喊 fucking 罵人，我也被嚇到）。

我馬上把包包裡的辣椒水拿在手上緊握、快速離開，毫不留戀地直奔機場。葡萄牙的旅程就是在這種情況結束的，害我現在這段也得結束得有頭沒尾，莫名奇妙。（不知道啦，就是很靠杯啦，媽的不會自己在家打喔法克（但我也俗辣，不敢拿辣椒水噴他雞雞））

------------------------------------------------------------------------------------------------

以上。最後一天實在不知道在幹嘛。葡萄牙有可愛的地方，爬坡運動體驗也還不錯，異國食物多且不踩雷，但是整體回顧後的再訪意願不高。最後一天遇到露鳥俠真的是讓我只能用「無言以對」四個字來為葡萄牙作結，掰哺！
![小連同學 on the left of EU](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/IMG_9853.jpeg)`,op=`---
title: "台南遊記 (2501_2512)"
date: 2025-12-14
description: "我記得搬來的那天天氣很好，今天也是。生活在台南的大學生終於要回家了，這五年多一些的日子。"
category: "遊記"
tags: []
imageUrl: "https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/tainan_2501_2512/1214-1.jpeg"
---

## 1/3
早安，二零二五。

原本早上想要去運動的，但被窩是懶洋洋的好地方；東安是家，我突然想這樣說。

我吃完詹記又跑來永福決哥了，剛坐下就被一大聲的「欸！你跑來這裡喔！」嚇到。還很熱的時候，勝利決哥熄燈了。
![詹記 《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/tainan_2501_2512/0103-2.jpeg)

那個記得我喜歡吃太妃香蕉蛋糕、通常都喝什麼的漂亮姐姐好像跑來永福上班了，剛剛看到我笑得很漂亮和我說：好久不見！慢慢坐喔！
![最喜歡露天咖ㄌ](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/tainan_2501_2512/0103-1.jpeg)

「開闢一個懶洋洋的小角落」我的，我還是會，而且做得很好，一直。在不同狀態裡的我的台南都是美好的，一定。二五二五，還小還小。

## 1/9
可能好奇可能忘了。

台南遊記本來就是我自己一個人取悅自己的變相形式，關於在地居民、關於學生身分、關於第一次、關於我喜歡的所有。

台南，一個人的、兩個人的、一群人的，台南哦。沒意外的話倒數八個月了，愛我的人都希望我在台南的日子是快樂的喔。
![連狗決哥*N](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/tainan_2501_2512/0109-1.jpeg)

## 1/15
今天又把五十嘻嘻牽去已經認識我的車行了，這一兩年在這台老車上已經花破萬了。
![老闆看到我就知道要幹麻==](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/tainan_2501_2512/0115-1.jpeg)

笑他騎不快又小不拉機算是我的社交工具之一，但我也是實在的愛他，這不構成矛盾。

付了今天的維修費用之後，我問媽咪畢業之後我還要把他牽回桃園嗎，以相處時間來說，我好像最有資格講話，車齡快二十，但好像 2/3 的里程都是我這幾年在台南騎的。

我可以肯定我今年對這個問題不會有答案，然後一邊說：我一定會帶著他繼續走。在沒有決心的狀態下，繼續帶著不確定感。

如果人工智慧哪一年真的複製出意識了，對於這種丟不丟、留不留、要不要、想要不想要的二元問題，會有正確解答嗎？我一個聰明怪都這麼困擾了。

## 2/8
早安，好冷。我希望這是今年底冬天前的最後一次寒流了，早上連不太賴床的媽媽都躲在被窩裡不想出來。

昨天晚上是這兩年來第一次寒暑假在桃園待那麼久的最後一晚，半夜失眠了，其實也說不上「失」，只是比起我五分鐘內可以睡著的一般狀況，翻來覆去真的不正常。

被不知道第幾聲嗡嗡嗡吵到的時候，好像是靠腰了還是嘖了幾聲而把媽媽叫起來了，永遠會愛我會希望我快樂的媽媽，說要開燈打蚊子，然後問我有沒有被叮。後來我好像半夢半醒指了指臉有兩三疱，她好像還爬起來幫我塗了藥。
![前一晚來接我順便帶章魚燒ㄉ媽咪](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/tainan_2501_2512/0208-2.jpeg)

回台南之前，要碎碎唸的、要多幫我準備的、要叮嚀的全部和我預想的都差不多，即使是這樣，我還是想確認爬起來幫我擦藥也是愛的一部分。「妳昨天晚上有起來幫我擦藥喔」，李彩蓮說她其實是幫我塗了乳液，不愧是拿化妝水卸妝了半輩子的人。

我感覺我在這種時候最懂愛，李彩蓮給我的那種、我給媽媽的那種。

在台南第五年，我也愛台南，愛在這裡生活的所有，搭上高鐵回程（剛剛明明在本家也是說等一下回家⋯⋯我本來有家/宿舍/租屋處要分清楚的堅持）的雀躍是我決定不想輕易斷開連結的印證。

接近畢業的決定都還飄渺不定的時候，我只能證明「想要」的念頭存在，然後也只能先記得。

好不想刷題什麼的。目前手上有的資本，好像都不是我真正花力氣取得的，只有我自己知道我使力的樣子會多帥氣。好像真的停滯得夠久了，久到這次我是真的有決心要把我快要用盡的自由再要回來。

昨天聽了 wave to earth。去年十月去南科測驗，走到舒湖散步，有線耳機裡刻意播的是 play with earth!!!!!!!
![不過有下次的話可以待在耳機就好...](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/tainan_2501_2512/0208-1.jpeg)

寒假前，倒數第二學期最後一堂 jserv 的下課，我第一個走離開教室，因為我不想要不能自己選要什麼糖冰的免費飲料。在舊館一樓大門口那的轉彎，我想著：「噢幹！我好像真的想開始認真了，今年一定超好玩！」

不知道做著一些夢，在現在真的沒匹配能力的狀況下，想著那些都是遲早的事的我是不是很可愛。但在可以靠我自己的能力想怎麼追哥哥就怎麼追之後（真的 literally 目標），我很久沒有這種明確的目標了！

我的努力要換的是自由，和現在在台南的我一樣自由。

## 3/3
好久不見，這是我永遠想要記得的台南。

因為跟著心做決定的我還是有太多不懂事，在連著兩三個狗在決哥的好天氣裡把好奇很久的書看完了。也是一月初在這裡看著戀人絮語找到自己。

在最後一章耳朵裡播的也剛好是 TOMBOY，나는 사랑을 응원해。

然後再讓 LOVE YA! 循環。愛喔、愛喔，這樣唸著去感受。用力一點愛沒關係，不要怕痛。

時刻提醒著自己要記得做脫敏訓練，這並不和真誠衝突。一直感謝、一直愛。

最近都暈船咖哩飯，初到和屬於都是寶藏。好像快兩週沒有詹記了。海產粥是好久以前的事了。我不想離開這裡。
![這陣子也暈船手作漢堡](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/tainan_2501_2512/0303-1.jpeg)

## 4/7
下了班突然想吃點甜的，去家裡附近 711 找布丁還是沒找到，從我第一次遇見他（福德生活）到現在，我已經專程走去找了至少五次，每次都空手而歸。
![拿一張 IBT 來擋](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/tainan_2501_2512/0407-1.jpeg)

再走了三五分鐘到遠一點的全家，看了麵包又看了甜點櫃，最後拿了義美鮮奶茶。懶洋洋地打了哈欠、拖著扁掉的 Vans，嘴巴還沒閉上就突然看見玻璃門映出的自己——喔！真的欸！我不過就是個小國小民，憑什麼自命不凡⋯⋯

這種對自己的質疑還真是第一次。這陣子都在慢慢和五十嘻嘻說再見，開心的、無奈的、捨不得的，我是那樣回憶他的。那就是我：因為日常代步車暫時不再是一台二十年的老車而難過的普通女生。只是感性讓他之於我更加不同。

對吧，我是捨不得五十嘻嘻，我也很捨不得這些在台南當學生的日子，好幸福喔！

## 8/8
其實想不太起來自己都神遊去哪了，我在關係裡對自我的意識很稀薄。原本我覺得我會最寶貝的最後在台南的日子，好像被忙碌沖淡了而疲憊於日常。
![辦公室ㄉ早餐==](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/tainan_2501_2512/0808-1.jpeg)

這幾個月對「選擇權」三個字非常著迷，看到 Terry 在自己認知的財富自由實現後到東京去住，我也萌生了想要快速成為這樣子人的夢想。對是夢想，我很久沒有夢想了。好像有了這個東西，我又離台南遠了一些。

實習快要結束了，從年初到現在的時間體感應該是這幾年最快的，一月還很冷的時候去鼴鼠買的藍貓綠狗年曆，貼在東安的牆上，每晚吹頭髮我看著前面已經過去的幾個月，恍恍惚惚。

口試、實習、預聘、家教、交換，一切都順利得如我預期，要對比那些我在成就感上的體驗，這所有的成章都非常無聊。某種程度上，明年之後我再回來其實是賣了我的選擇權。可是我真的要的是什麼，我也沒能力具體化。

大家都這樣嗎？那些和我一樣在台南快速長大的人們都在想什麼呢。

台南遊記寫著寫著，不知道為什麼我感覺自己慢慢像一個沒辦法無憂無慮的大人。今晚去上家教的路上，月色很美，真的很美，但我抬頭望向天空已經沒有力氣。我還是感謝，但也還是只能到此，就是在前面有太多分岔路的這裡。

有點後悔前幾個月就那麼過去了，但談戀愛就是暈暈的嘛。希望自己可以多多回到專注自己的狀態，多寫些字，多把我最喜歡的這些台南日子蒸餾下來。

## 9/18
生日快樂！
![謝謝我給自己ㄉ牙套 《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/tainan_2501_2512/0916-1.JPG)

今年的生日很安靜，身邊的人陸續開始有了工作、有了新的階段、有了太切實際的煩惱，過去年輕會特意重視的人啊、在意的事，應該都變得單薄一些。所以和那個十八歲臉上有一堆刮鬍泡、抱著大月亮的生日比起來，今年二十五歲的生日很安靜（我還沒理清楚為什麼我會刻意地把各大社群平台的生日都隱藏提醒）。

九月又過了一半，今年的每個月都好快好快。最後四個月落腳在南園街，不用什麼 N 了，我在台南的日子剩下三個半月。最近在跑交換流程了。

## 10/27
所有感受最後只會回歸自己。同理心應該永遠不會是電影裡的超能力。
![我午餐吃好農家超爽](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/tainan_2501_2512/1027-1.jpeg)

今年暑假，阿嶽老師的跟著感覺走上架了，我常常在感受季節更替、準備面對離開的時候打開老師的歌單，也聽聽小時候不懂的戀愛初體驗、走慢一點點、捨不得。阿嶽老師的詞都很直接，需要勇氣、只是很難、就算是當作一時糊塗愛錯、就是會睡到起不來，唱得很像我只要重複聽著那一句簡單的歌詞，就可以跨過某個坎或是安心放棄。

現在正在古意人，也聽阿嶽老師的歌整理自己，要是我面對每一種關係和道別都可以像唱著「再見」那樣就好了，再灑脫一點，不是演的、裝的、逞強的，要是再灑脫一點就好了。原來年初的自己只是短暫地回來，我不知不覺又把自己弄丟了，我只有對自己的消失灑脫。
![期待很久ㄉ古意人](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/tainan_2501_2512/1027-2.jpeg)

我的筆記本裡面躺了一頁溫度 log，裡面通常會寫日期、地點、溫度和體感描述，像是 24/01/17 中西區 18 度：giordano 發熱衣、白踢、無印橘色帽踢，騎車涼涼的、不會冷。目前在文字裡看不到全球暖化的趨勢，但發現今年台南有秋天，氣溫沒有急著驟降的斷層，不錯喔。

某天走出室內空間的時候，發現天空比最近習慣認知還要暗，我真的好不情願迎來黑夜比白晝還要長的下半年，因為就剩兩個月了。雖然工作還在擺爛，瞎雞巴躺著找，明年大概還是會回來了，又好又壞的。但是以學生身分待在台南的日子，就剩兩個月了。

## 11/10
下雨了。我還沒收到 admission letter，但是決定了搬家的日子大約會落在十二月的哪一週。

不知道颱風這時候來做什麼，期待颱風假和雨天的煩躁並不會讓我感覺回到台南的夏天，離離開的日子更遠一些的夏天；過幾週我就會離開，捨不得的感覺小於小於準備在異國生活的緊張，我在台南遊記這樣持續沒斷過的煽情，開始很奇怪。

原先這半年我每天都捨得花錢在吃的上面，也不惜跨區騎車的時間，皆來自於不浪費台南生活資源的信念，太好吃了、太舒服了，好喜歡；這幾天突然懶得去探店、覺得也不過如此，有那麼幾秒也會想說那有什麼好愛惜的嗎？

台南遊記是讓台南被愛惜，還是學生身份被愛惜。雖然我這六七年來工作的腳步從來沒有停下過，我對學生這兩個字的身份認同有些微薄，但也因為打工錢，和大學生、研究生的時間彈性，造就了或許是我這輩子最大的自由體驗。

我老是在自我感動，我知道；在看待事情的時候優柔寡斷到死，我拔不掉句子中的「好像」兩個字。抽離的時候總是覺得人不過就是拿這些感受來作詩的動物，卻還是笑著看待自己的成長而欣喜，偶爾指責過去某一版的自己，反覆一年一年，直到死亡。策馬特的密境、布拉格的春天、芬蘭的聖誕節，都是假的。

## 11/22
在想像了兩三次沒有機會去交換的規劃後，我在這週二終於收到了 offer，然後以最快的速度把簽證的面試時間都預約好。希望今年有個開心的聖誕節。好久沒回到自己的房間了，我刻意選了大二剛來台南、和鍾荷衣並肩坐的那個靠窗的位子。
![我們ㄉ房間](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/tainan_2501_2512/1122-1.jpeg)

‘’One day you'll eat your last meal, smell your last flower, hug your friend for the very last time. You might not know it's the last time. So that's why you should do everything you love with passion, you know? Treasure the few years you've got because... that's all there is.’‘

從訂下是哪天要搬家之後，我每天都預設經過的街景、做著的工作和面對的人是最後一次，the very last time。我覺得我很用力了，每一刻都很珍惜地去感受，但抓不到 the very 最後一次到底是哪一次讓我感覺很不踏實，覺得自己永遠都不會準備好，也因此更覺得在階段轉換的時候，我得要一次接受所有的分離，將是很巨大的一坨死結。

總是這樣，痛苦一輪再每次往回看，手會握緊拳，但肩膀都輕輕的。

離開無印時丹文說過的「一期一會」一直印在我的腦袋裡。我還是做不到一邊灑脫告別、感謝曾經，一邊認同我用盡全力愛了。我總覺得要再多一點、再多一點，所以說掰掰好痛苦喔～～

過去重大階段的斷點是學制，小學六年、國中三年、高中三年，但因為沒有太多選擇權，在跨過某個坎的力氣有了加持。大一台北一年不算，大學和研究所五年半，其實差不多了。那天我和李峻說我知道為什麼我很不想去法國了，因為現在在台南太舒服了；周遊列國的夢想在所有行前麻煩事之前都不那麼吸引人了，環山下雪的校園生活和魚皮湯肉燥飯大太陽比起來，好像沒什麼魅力。

台南的變化包括限時的房間、消失的憨和鮮魚湯、準備休息的 Nani 麵、我喜歡的東門地下道，還有我。但保安路米糕、房間裡的萊姆葡萄還是很好吃，今天的天氣也很好，很好很好。
![限時ㄉ房間](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/tainan_2501_2512/1122-3.jpeg)

## 11/30
因為簽證受到 offer 遲來的時間有延宕，原來聖誕節的雪和熱紅酒不屬於我，但不死心的聖誕浪漫主義者還是死纏爛打寫了信問前面有沒有爽約的時間給我遞上。

這週三突然接到辦事處說有特別加開面試時間，本來還有超過兩週的時間可以準備面試，突然就剩六天。回桃園的前一個傍晚我還坐在決哥喝冰拿鐵，明天就十二月了，一點都不冷，面試完全還沒準備。
![冰ㄉ...](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/tainan_2501_2512/1130-1.jpeg)

我會死纏爛打問到底可不可以趕快發 offer 給我、可不可以讓我趕快拿到簽證，不代表我真的很想去啊。

我在很多事情上都覺得若 p 則 q，我不認同就只是因為想要階段有變化而去做某件事情的決定，但我現在就是那個我不認同的樣子。原來是想要透過地緣優勢把歐洲玩透，但要說那些文化建築風景有多吸引人，好像突然對現在的我很沒吸引力了。

上次踏上歐陸是 15 歲已經稍微有意識、有記憶的時候，布達佩斯的國會倒影在多瑙河一閃一閃撒下、布拉格的高塔上望出去的一塊塊橘磚，真的很漂亮；可是魚肚粥、米糕、飯桌肉燥飯永遠是我的寶貝。現在在台南的日子很舒服，可也莫名來到了有些覺得一成不變、枯燥乏味的階段。

只是就這樣逃出去（而且好遠）好像也不是我要的。語言和文字的出現就是人類自找麻煩的開端，現在還有大型語言模型來亂。賦予意義這個動作本身，就像每包咖啡豆都有不一樣的風味描述，或是做完測驗每個人都被 MBTI 標記一樣，都很那個。

社會學家會說人類是群居動物，哲學家說放下被愛的幻想就自由了，搞社運的說要拿民主讓自己能夠主導話語權。要怎麼不活在別人的聲音裡。

## 12/11
前幾週列了準備暫時登出台南的願望清單，今天午餐吃阿龍，現場表演一次吃兩碗肉燥飯，李峻說吼難怪你那麼胖，我哈哈哈哈哈哈哈哈哈超爽；現在回想，戀愛裡面很可貴的部分，好像是體驗對方是不一樣的個體這件事。
![阿龍 last dance](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/tainan_2501_2512/1211-1.jpeg)

在一起之後，我吃到很多第一次吃的內臟（比如魚腸）。但晚餐就吃不下飯了，打算到詹記，就喝碗熱魚湯。

老詹煮到三塊我喜歡的部位，我不懂魚，我只知道他很嫩、咬起來的肉絲有排列的秩序、很多膠質；我總在原味、西瓜棉、味噌之間花心，今天感覺就是離開台南前的最後一碗詹記了，我選了西瓜棉，因為這好像是最台南的東西，在要費一點點力拉開的門後方，那裡貼著西瓜棉與鹽分地帶的故事。
![我最喜歡ㄉ魚湯 《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/tainan_2501_2512/1211-2.jpeg)

我和李峻在一起之後就很快地邀請他和我一起喝魚湯，和我後來熟悉的人一樣，他在來之前就先問詹記有沒有廁所——蛤沒有喔那最近的就是在公園那裡了欸。詹記在李峻的眼裡就成了沒有社會責任 && 很貴但連思涵很愛去的小店。

第一次和李峻來詹記的時候，我們坐在門旁靠窗的位子，肩並肩點了一份明明我一個人就吃得完的肉燥飯便當，那時候我們還沒熟到——我不會害怕他不喜歡我喜歡的東西。

湯來之前他問推薦西瓜棉的我這是怎麼做的，儘管我看過了好幾次，我還是記不起來（我就是這樣，然後李峻就會說蛤你怎麼什麼都不知道），然後吃一吃他就去公園了；第二次和李峻來好像也點了差不多的 set，我在夏天喝著最後幾口熱湯的時候，對面的人又不見了。那時候好像覺得這人很瞎，現在是覺得嗯嗯這就是我認識的李峻。

我好像沒有這麼認真地一口一口喝過魚湯，不知道是因為中共好像要打過來了（其實我也買了一些芒果乾）、我又要出遠門，還是因為我的本家坐落在桃園，以後要隨時喝一碗可能是很困難的事情。每一口我都很仔細地去感受魚湯的層次，酸酸魚魚西瓜棉棉啥的，要是我是個飲食文學的作家就好了，這樣我在西方就可以喝到空氣魚湯了。

## 12/14
我記得搬來的那天天氣很好，今天也是。
![愛你噢 《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/tainan_2501_2512/1214-1.jpeg)

生活在台南的大學生終於要回家了，五年多一些的日子，從因為離家很遠、從眾的科系選擇而生的排斥感，到逐漸生成、甚至倍感驕傲的認同感，最後是想要一直待在這裡的歸屬感。

上次吃完詹記寫到斷掉，我就去看中醫了。定時找蘇醫師報到也有了半年時間，雖然手汗問題一樣沒解，但腸胃倒是整了；這次照慣例最後幫我預約了下次回診的時間，我說那個點點點我要離開台南一陣子了餒點點點，然後他才想起上次他和我分享在法國被偷的事情，寒暄了關於我出國前的準備。離開的時候他說一路順風喔，要平安！

上上週五我也上了包堂的最後一堂瑜伽課。但因為白痴簽證，月初必須跑一趟回北部，我原本算得好好地可以在期限內上完最後一堂，就被 delay 成原價，連帶要跟老師交代原因和補差價（一堂 +10 攤提我還是要攤啊）。

總之那天也沒免得了道別環節，老師說我有進步，養成的運動習慣去到國外也還是要保持喔；我想說我有打算修滑雪課，或是這段時間謝謝老師，我現在對於控制自己不同部位的肌肉有點概念了，就那樣被很多祝福的話蓋過去了。

記得大四還在東安時，某天睡到幾乎 1340、1350，趕下樓吃午餐，我走進富成發現燈火都熄得差不多，怕拍謝也還是問了還能內用嗎，老闆又馬上把火打開、說裡面坐一下。一號餐我 15 分鐘解決，非常滿足。因為太拍謝了，那時候我下定決心在離開台南時，都要寫卡片和這些讓我在台南很幸福的人道謝。

和富成老闆說謝謝你們家便宜好吃的麵食和滷味，還有我幾次壓線到店都還是會煮麵給我；和詹記老闆說謝謝每一碗魚湯，你們對飯桌上的每一個圓盤的用心我都感受得到；和牽咖啡的姐姐說謝謝妳經營的這間神奇小店，讓我在這裡因為各種 NPC 度過了很多有趣的夜晚。

可是這兩週待在這的日子又是那麼習以為常，時間都由零碎的瑣事和例行公事交織而成，好像日子就會這麼過下去，沒有盡頭也能安於當前的舒適。織了我意識不到離開之前的時間有多短暫。就那麼到了今天，我沒來得及再去牽一杯，也來不及和李峻再去奇美走走。

可能就是太理所當然了，好像也稀釋了寫卡片的必要性。即使我每次走出小店門口，都會回望說謝謝，但還是很怕這些構成台南的人們，不知道我對一切有多麼感謝。而他們也不知道哪一次是我們見面的最後一次，只有我知道。

或是那些真的太過日常的部分，得要到我再次想起之後才知道——哦，原來那次是最後一次啊。

吃詹記那天是刻意算好前往，阿龍、泡椒麵、逼逼、武聖夜市，都算好是這次離開前的最後一次了。這幾天騎車沿途數著，原來那天在決哥崇民當 NPC 是最後一次、原來那杯我在牽咖啡最喜歡的莓果可可牛奶是最後一次、原來那天下班後在南園吃的鴨肉乾麵（這幾天給我公休）是最後一次。

今早搬完一輪，我以為李峻會睡回去，但在約好的時間他還是問了我可以出門了嗎，這幾天都是，我做什麼事都可以感覺得到李峻在陪我。司機交代要蝦餅，所以最後的午餐交給王氏魚皮，感覺錯付了。不過幸好李峻喜歡決哥的太妃香蕉蛋糕。
![最後一天也決哥!! 《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/tainan_2501_2512/1214-2.jpeg)

我好像是同時期一起來到台南的人們之中，最後一個離開的。最後這兩年碩班時期（但我的身份認同還是大學生），第一年單純 on my own，活得很自在，搭配台南遊記，我很享受屬於我自己的自由，但也偶爾寂寞。第二年有了李峻，在台南的曖昧特別帶勁，兩個人可以一起吃的東西多了好多，我們不用連結也空氣共享了 Google Map 的收藏，口味一致是幸運的；雖然靠北的時候真的很靠北，但有喜歡的人隨時陪著還是很幸福很幸福的事情喔。

好像身邊的東西也感覺得到我準備要遷徙，用了一年左右的防曬剛好擠不出來、浴室的沐浴乳差不多沒了、⋯
![最後搬家車子塞成這樣...](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/tainan_2501_2512/1214-3.jpeg)

------------------------------------------------------------------------------------------------

搬家那天，我坐在車上鼻酸地寫著最後一天，回到家後無時無刻都在忙碌，隔週就飛了，就那麼斷掉了，可惡。我很快就回去囉！

久違ㄉ台南遊記在法狗出版ㄌ。我ㄉ台南，永遠愛你。
![我先回家一下嚕](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/tainan_2501_2512/IMG_1569.jpeg)`;function sp(f){if(typeof f!="string")return{metadata:{},content:""};const d=/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/,o=f.match(d);if(!o)return{metadata:{},content:f};const c=o[1],h=o[2],s={};return c.split(`
`).forEach(g=>{const[A,...v]=g.split(":");if(A&&v.length>0){const p=A.trim(),T=v.join(":").trim();T.startsWith("[")&&T.endsWith("]")?s[p]=T.slice(1,-1).split(",").map(j=>j.trim().replace(/^["']|["']$/g,"")):s[p]=T.replace(/^["']|["']$/g,"")}}),{metadata:s,content:h.trim()}}const hp=Object.assign({"./posts/grenoble_2601.md":up,"./posts/grenoble_2602.md":ip,"./posts/grenoble_2603.md":fp,"./posts/grenoble_2604.md":cp,"./posts/italy_2602.md":rp,"./posts/portugal_2603.md":dp,"./posts/tainan_25.md":op}),fi=Object.entries(hp).map(([f,d])=>{var s;const o=((s=f.split("/").pop())==null?void 0:s.replace(".md",""))||"",{metadata:c,content:h}=sp(d);return{id:o,slug:o,title:c.title||"Untitled Post",date:String(c.date||new Date().toISOString().split("T")[0]),description:c.description||"",category:c.category||"General",tags:Array.isArray(c.tags)?c.tags:[],imageUrl:c.imageUrl,content:h}}).sort((f,d)=>new Date(d.date).getTime()-new Date(f.date).getTime()),mp=()=>M.jsxs(Ml,{to:"/about",className:"w-full bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center group hover:bg-gray-100 transition-colors block",children:[M.jsx("div",{className:"w-20 h-20 bg-gray-200 rounded-md overflow-hidden mb-4 border border-gray-100 shadow-sm shrink-0",children:M.jsx("img",{src:"https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/views/about.jpg",alt:"Profile",className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"})}),M.jsx("h2",{className:"text-lg font-bold text-black mb-1",children:"小連同學"}),M.jsxs("p",{className:"text-xs text-gray-500 font-medium leading-relaxed",children:["花蓮出生、桃園長大、台南生活。",M.jsx("br",{}),"但是現居法國格勒諾布爾。"]})]}),pp=({selectedTag:f,onSelectTag:d})=>{const o=Array.from(new Set(fi.flatMap(c=>c.tags)));return M.jsxs("div",{className:"w-full bg-gray-50 border border-gray-200 rounded-lg p-6 mt-6",children:[M.jsxs("h3",{className:"text-black font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 mb-4 text-gray-400",children:[M.jsx(ep,{size:12})," EXPLORE"]}),M.jsxs("div",{className:"flex flex-wrap gap-2",children:[M.jsx("button",{onClick:()=>d==null?void 0:d(null),className:`text-xs px-2.5 py-1 rounded transition-colors border ${f?"bg-white text-gray-600 border-gray-200 hover:border-gray-400":"bg-black text-white border-black"}`,children:"All"}),o.map(c=>M.jsxs("button",{onClick:()=>d==null?void 0:d(c===f?null:c),className:`text-xs px-2.5 py-1 rounded transition-colors border ${c===f?"bg-black text-white border-black":"bg-white text-gray-600 border-gray-200 hover:border-gray-400"}`,children:["#",c]},c))]})]})},bp=({selectedTag:f,onSelectTag:d})=>M.jsxs("aside",{className:"hidden md:block space-y-6 w-full md:w-64 flex-shrink-0",children:[M.jsx(mp,{}),M.jsx(pp,{selectedTag:f,onSelectTag:d})]}),gp=()=>{const[f,d]=R.useState(null),o=R.useMemo(()=>f?fi.filter(c=>c.tags.includes(f)):fi,[f]);return M.jsxs("div",{className:"max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col md:flex-row gap-8 md:gap-12 animate-fade-in",children:[M.jsx("div",{className:"md:sticky md:top-20 self-start",children:M.jsx(bp,{selectedTag:f,onSelectTag:d})}),M.jsxs("div",{className:"flex-1 min-w-0",children:[M.jsxs("div",{className:"mb-10",children:[M.jsx("h1",{className:"text-3xl font-extrabold text-[#37352f] mb-2 tracking-tight",children:"我ㄉ遊記"}),M.jsx("p",{className:"text-gray-500 text-sm",children:" "})]}),M.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8",children:[o.map(c=>M.jsx(ap,{post:c},c.id)),o.length===0&&M.jsx("div",{className:"col-span-full py-20 text-center text-gray-400",children:"No posts found with this tag."})]})]})]})},yp=f=>f?(f.startsWith("http")||f.startsWith("data:")||f.startsWith("/"),f):"",vp=({content:f})=>{const d=R.useMemo(()=>f.split(`
`),[f]),o=h=>h.toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g,"-").replace(/^-+|-+$/g,""),c=h=>h.split(/(==.*?==|\*\*.*?\*\*)/g).map((g,A)=>g.startsWith("==")&&g.endsWith("==")?M.jsx("mark",{className:"bg-yellow-200 px-0.5 rounded text-gray-900",children:g.slice(2,-2)},A):g.startsWith("**")&&g.endsWith("**")?M.jsx("strong",{className:"font-bold text-gray-900",children:g.slice(2,-2)},A):M.jsx("span",{children:g},A));return M.jsx("div",{className:"space-y-4 text-gray-800 leading-relaxed font-normal",children:d.map((h,s)=>{const g=h.trim();if(g==="---"||g==="***"||g==="___")return M.jsx("hr",{className:"my-8 border-gray-100"},s);if(h.startsWith("# ")){const T=h.replace("# ",""),j=o(T);return M.jsx("h1",{id:j,className:"text-3xl font-black mt-10 mb-4 text-black scroll-mt-20 tracking-tight",children:T},s)}if(h.startsWith("## ")){const T=h.replace("## ",""),j=o(T);return M.jsx("h2",{id:j,className:"text-2xl font-bold mt-8 mb-4 text-gray-900 scroll-mt-20 tracking-tight border-b border-gray-50 pb-2",children:T},s)}if(h.startsWith("> "))return M.jsx("blockquote",{className:"border-l-4 border-gray-300 pl-5 italic text-gray-500 my-6 bg-gray-50/50 p-4 rounded-r-lg",children:c(h.replace("> ",""))},s);const A=g.match(/^!\[(.*?)\]\s*\((.*?)\)$/),v=g.match(/^!\s*\((.*?)\)\s*\[(.*?)\]$/),p=A||v;if(p){const T=p[1],j=p[2].trim();return M.jsxs("figure",{className:"my-8 flex flex-col items-center",children:[M.jsx(H0,{src:yp(j),alt:T,className:"w-full rounded-xl border border-gray-100 shadow-sm transition-transform hover:scale-[1.01]"}),T&&M.jsx("figcaption",{className:"text-center text-xs text-gray-400 mt-3 italic font-medium",children:T})]},s)}if(g.startsWith("- [ ] ")||g.startsWith("- [x] ")){const T=g.startsWith("- [x] "),j=g.replace(/^- \[[ x]\]\s/,"");return M.jsxs("div",{className:"flex items-start gap-3 my-1",children:[M.jsx("input",{type:"checkbox",checked:T,readOnly:!0,className:"mt-1.5 h-4 w-4 rounded border-gray-300 text-black focus:ring-black"}),M.jsx("span",{className:T?"text-gray-400 line-through":"",children:c(j)})]},s)}if(g.startsWith("- ")||g.startsWith("* ")){const T=g.replace(/^[-*]\s/,"");return M.jsx("li",{className:"ml-6 list-disc pl-2 marker:text-gray-300 py-0.5",children:c(T)},s)}return g===""?M.jsx("div",{className:"h-2"},s):M.jsx("p",{className:"text-lg leading-relaxed",children:c(h)},s)})})},Sp=({content:f})=>{const d=R.useMemo(()=>f.split(`
`).filter(c=>c.startsWith("# ")||c.startsWith("## ")).map(c=>{const h=c.startsWith("## "),s=c.replace(/^#+ /,""),g=s.toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g,"-").replace(/^-+|-+$/g,"");return{text:s,id:g,level:h?2:1}}),[f]);return d.length===0?null:M.jsxs("div",{className:"w-full bg-gray-50 border border-gray-200 rounded-lg p-6 sticky top-20",children:[M.jsxs("h3",{className:"text-black font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 mb-4 text-gray-400",children:[M.jsx(Pm,{size:14})," TABLE OF CONTENTS"]}),M.jsx("ul",{className:"space-y-2",children:d.map(o=>M.jsx("li",{className:`${o.level===2?"ml-3":""}`,children:M.jsx("a",{href:`#${o.id}`,onClick:c=>{c.preventDefault();const h=document.getElementById(o.id);h&&h.scrollIntoView({behavior:"smooth"})},className:"text-xs text-gray-500 hover:text-black hover:underline transition-colors block leading-relaxed",children:o.text})},o.id))})]})},_p=()=>{const{slug:f}=tm(),d=Xc(),o=fi.find(h=>h.slug===f);if(!o)return M.jsxs("div",{className:"flex flex-col items-center justify-center py-20 text-center animate-fade-in",children:[M.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-4",children:"Post Not Found"}),M.jsx("button",{onClick:()=>d("/"),className:"text-gray-600 hover:text-black hover:underline",children:"Back to home"})]});const c=B0(o.content);return M.jsxs("div",{className:"max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col lg:flex-row gap-12 animate-fade-in",children:[M.jsxs("div",{className:"flex-1 min-w-0",children:[M.jsx(Ml,{to:"/",className:"inline-flex items-center gap-2 text-sm text-gray-400 hover:text-black transition-colors mb-10 group",children:M.jsx(D0,{size:16,className:"group-hover:-translate-x-1 transition-transform"})}),M.jsxs("header",{className:"mb-10",children:[M.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[M.jsx("span",{className:"bg-black text-white px-3 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase",children:o.category}),M.jsxs("span",{className:"text-gray-400 text-[10px] flex items-center gap-1 uppercase tracking-widest",children:[M.jsx(Im,{size:12})," ",o.date]})]}),M.jsx("h1",{className:"text-3xl md:text-5xl font-extrabold text-[#37352f] mb-6 leading-tight tracking-tight",children:o.title}),M.jsx("div",{className:"flex items-center gap-6 text-xs text-gray-400 border-b border-gray-100 pb-8",children:M.jsxs("div",{className:"flex items-center gap-1.5",children:[M.jsx(U0,{size:14})," ",c," min read"]})})]}),M.jsx("div",{className:"markdown-content",children:M.jsx(vp,{content:o.content})}),M.jsx("div",{className:"mt-20 pt-10 border-t border-gray-100",children:M.jsx("div",{className:"flex flex-wrap gap-2",children:o.tags.map(h=>M.jsxs("span",{className:"text-xs bg-gray-50 text-gray-500 px-3 py-1 rounded-full border border-gray-100 font-medium",children:["#",h]},h))})})]}),M.jsx("aside",{className:"hidden lg:block w-64 flex-shrink-0",children:M.jsx(Sp,{content:o.content})})]})},xp=()=>M.jsx(qm,{children:M.jsx(np,{children:M.jsxs(pm,{children:[M.jsx(Ua,{path:"/",element:M.jsx(gp,{})}),M.jsx(Ua,{path:"/post/:slug",element:M.jsx(_p,{})}),M.jsx(Ua,{path:"/about",element:M.jsx(Ep,{})}),M.jsx(Ua,{path:"/contact",element:M.jsx(jp,{})})]})})}),Ep=()=>M.jsxs("div",{className:"max-w-3xl mx-auto px-4 py-12 md:py-20 animate-fade-in",children:[M.jsx(Ml,{to:"/",className:"inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-black hover:underline mb-10",children:M.jsx(D0,{size:16,className:"group-hover:-translate-x-1 transition-transform"})}),M.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-12",children:[M.jsx("div",{className:"w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-xl overflow-hidden border border-gray-100 shadow-sm aspect-square bg-gray-50",children:M.jsx("img",{src:"https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/views/about.jpg",className:"w-full h-full object-cover",alt:"Xiaolien"})}),M.jsxs("div",{children:[M.jsx("h1",{className:"text-4xl md:text-5xl font-black text-[#37352f] mb-6 tracking-tight",children:"小連同學"}),M.jsxs("p",{className:"text-lg text-gray-600 leading-relaxed mb-4",children:["花蓮出生、桃園長大、台南生活。",M.jsx("br",{}),"但是現居法國格勒諾布爾。"]})]})]}),M.jsxs("div",{className:"prose prose-gray max-w-none",children:[M.jsx("h2",{className:"text-2xl font-bold mb-4"}),M.jsxs("p",{className:"text-gray-600 leading-relaxed mb-6",children:["我沒帶腦出國（哪個交換學生會帶），這裡除了文字都是 vibe coding 出來的東東。我好像越來越不太喜歡發限時動態講一堆，但其實很想和好朋友分享我在法狗的日子，可是我又不會主動找人聊天。所以我就丟在這邊（麻煩了點點點）。有空的話歡迎直接摳咪，跟偶說哪裡很好看 ","><"]})]})]}),jp=()=>M.jsxs("div",{className:"max-w-2xl mx-auto py-12 text-center animate-fade-in",children:[M.jsx("h1",{className:"text-3xl font-bold mb-6",children:"Get in Touch"}),M.jsx("p",{className:"text-gray-600 mb-8",children:"Feel free to reach out for collaborations or just a friendly chat!"}),M.jsx("div",{className:"flex justify-center gap-4",children:M.jsx("a",{href:"mailto:hello@example.com",className:"bg-black text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors",children:"Email Me"})})]}),G0=document.getElementById("root");if(!G0)throw new Error("Could not find root element to mount to");const Tp=g1.createRoot(G0);Tp.render(M.jsx(s0.StrictMode,{children:M.jsx(xp,{})}));
