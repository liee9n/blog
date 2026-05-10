(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))c(h);new MutationObserver(h=>{for(const o of h)if(o.type==="childList")for(const g of o.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function s(h){const o={};return h.integrity&&(o.integrity=h.integrity),h.referrerPolicy&&(o.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?o.credentials="include":h.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(h){if(h.ep)return;h.ep=!0;const o=s(h);fetch(h.href,o)}})();function s0(f){return f&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f}var Cc={exports:{}},Ua={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wo;function fh(){if(Wo)return Ua;Wo=1;var f=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function s(c,h,o){var g=null;if(o!==void 0&&(g=""+o),h.key!==void 0&&(g=""+h.key),"key"in h){o={};for(var z in h)z!=="key"&&(o[z]=h[z])}else o=h;return h=o.ref,{$$typeof:f,type:c,key:g,ref:h!==void 0?h:null,props:o}}return Ua.Fragment=d,Ua.jsx=s,Ua.jsxs=s,Ua}var $o;function ch(){return $o||($o=1,Cc.exports=fh()),Cc.exports}var M=ch(),Rc={exports:{}},F={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fo;function rh(){if(Fo)return F;Fo=1;var f=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),g=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),H=Symbol.iterator;function w(v){return v===null||typeof v!="object"?null:(v=H&&v[H]||v["@@iterator"],typeof v=="function"?v:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,q={};function K(v,D,B){this.props=v,this.context=D,this.refs=q,this.updater=B||W}K.prototype.isReactComponent={},K.prototype.setState=function(v,D){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,D,"setState")},K.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function $(){}$.prototype=K.prototype;function G(v,D,B){this.props=v,this.context=D,this.refs=q,this.updater=B||W}var yt=G.prototype=new $;yt.constructor=G,V(yt,K.prototype),yt.isPureReactComponent=!0;var pt=Array.isArray;function Et(){}var I={H:null,A:null,T:null,S:null},Ct=Object.prototype.hasOwnProperty;function qt(v,D,B){var Y=B.ref;return{$$typeof:f,type:v,key:D,ref:Y!==void 0?Y:null,props:B}}function he(v,D){return qt(v.type,D,v.props)}function Re(v){return typeof v=="object"&&v!==null&&v.$$typeof===f}function Wt(v){var D={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(B){return D[B]})}var Un=/\/+/g;function Le(v,D){return typeof v=="object"&&v!==null&&v.key!=null?Wt(""+v.key):D.toString(36)}function Te(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(Et,Et):(v.status="pending",v.then(function(D){v.status==="pending"&&(v.status="fulfilled",v.value=D)},function(D){v.status==="pending"&&(v.status="rejected",v.reason=D)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function U(v,D,B,Y,P){var nt=typeof v;(nt==="undefined"||nt==="boolean")&&(v=null);var st=!1;if(v===null)st=!0;else switch(nt){case"bigint":case"string":case"number":st=!0;break;case"object":switch(v.$$typeof){case f:case d:st=!0;break;case T:return st=v._init,U(st(v._payload),D,B,Y,P)}}if(st)return P=P(v),st=Y===""?"."+Le(v,0):Y,pt(P)?(B="",st!=null&&(B=st.replace(Un,"$&/")+"/"),U(P,D,B,"",function(Gl){return Gl})):P!=null&&(Re(P)&&(P=he(P,B+(P.key==null||v&&v.key===P.key?"":(""+P.key).replace(Un,"$&/")+"/")+st)),D.push(P)),1;st=0;var Jt=Y===""?".":Y+":";if(pt(v))for(var Rt=0;Rt<v.length;Rt++)Y=v[Rt],nt=Jt+Le(Y,Rt),st+=U(Y,D,B,nt,P);else if(Rt=w(v),typeof Rt=="function")for(v=Rt.call(v),Rt=0;!(Y=v.next()).done;)Y=Y.value,nt=Jt+Le(Y,Rt++),st+=U(Y,D,B,nt,P);else if(nt==="object"){if(typeof v.then=="function")return U(Te(v),D,B,Y,P);throw D=String(v),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return st}function L(v,D,B){if(v==null)return v;var Y=[],P=0;return U(v,Y,"","",function(nt){return D.call(B,nt,P++)}),Y}function k(v){if(v._status===-1){var D=v._result;D=D(),D.then(function(B){(v._status===0||v._status===-1)&&(v._status=1,v._result=B)},function(B){(v._status===0||v._status===-1)&&(v._status=2,v._result=B)}),v._status===-1&&(v._status=0,v._result=D)}if(v._status===1)return v._result.default;throw v._result}var bt=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},_t={map:L,forEach:function(v,D,B){L(v,function(){D.apply(this,arguments)},B)},count:function(v){var D=0;return L(v,function(){D++}),D},toArray:function(v){return L(v,function(D){return D})||[]},only:function(v){if(!Re(v))throw Error("React.Children.only expected to receive a single React element child.");return v}};return F.Activity=E,F.Children=_t,F.Component=K,F.Fragment=s,F.Profiler=h,F.PureComponent=G,F.StrictMode=c,F.Suspense=y,F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,F.__COMPILER_RUNTIME={__proto__:null,c:function(v){return I.H.useMemoCache(v)}},F.cache=function(v){return function(){return v.apply(null,arguments)}},F.cacheSignal=function(){return null},F.cloneElement=function(v,D,B){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var Y=V({},v.props),P=v.key;if(D!=null)for(nt in D.key!==void 0&&(P=""+D.key),D)!Ct.call(D,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&D.ref===void 0||(Y[nt]=D[nt]);var nt=arguments.length-2;if(nt===1)Y.children=B;else if(1<nt){for(var st=Array(nt),Jt=0;Jt<nt;Jt++)st[Jt]=arguments[Jt+2];Y.children=st}return qt(v.type,P,Y)},F.createContext=function(v){return v={$$typeof:g,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:o,_context:v},v},F.createElement=function(v,D,B){var Y,P={},nt=null;if(D!=null)for(Y in D.key!==void 0&&(nt=""+D.key),D)Ct.call(D,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(P[Y]=D[Y]);var st=arguments.length-2;if(st===1)P.children=B;else if(1<st){for(var Jt=Array(st),Rt=0;Rt<st;Rt++)Jt[Rt]=arguments[Rt+2];P.children=Jt}if(v&&v.defaultProps)for(Y in st=v.defaultProps,st)P[Y]===void 0&&(P[Y]=st[Y]);return qt(v,nt,P)},F.createRef=function(){return{current:null}},F.forwardRef=function(v){return{$$typeof:z,render:v}},F.isValidElement=Re,F.lazy=function(v){return{$$typeof:T,_payload:{_status:-1,_result:v},_init:k}},F.memo=function(v,D){return{$$typeof:b,type:v,compare:D===void 0?null:D}},F.startTransition=function(v){var D=I.T,B={};I.T=B;try{var Y=v(),P=I.S;P!==null&&P(B,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(Et,bt)}catch(nt){bt(nt)}finally{D!==null&&B.types!==null&&(D.types=B.types),I.T=D}},F.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},F.use=function(v){return I.H.use(v)},F.useActionState=function(v,D,B){return I.H.useActionState(v,D,B)},F.useCallback=function(v,D){return I.H.useCallback(v,D)},F.useContext=function(v){return I.H.useContext(v)},F.useDebugValue=function(){},F.useDeferredValue=function(v,D){return I.H.useDeferredValue(v,D)},F.useEffect=function(v,D){return I.H.useEffect(v,D)},F.useEffectEvent=function(v){return I.H.useEffectEvent(v)},F.useId=function(){return I.H.useId()},F.useImperativeHandle=function(v,D,B){return I.H.useImperativeHandle(v,D,B)},F.useInsertionEffect=function(v,D){return I.H.useInsertionEffect(v,D)},F.useLayoutEffect=function(v,D){return I.H.useLayoutEffect(v,D)},F.useMemo=function(v,D){return I.H.useMemo(v,D)},F.useOptimistic=function(v,D){return I.H.useOptimistic(v,D)},F.useReducer=function(v,D,B){return I.H.useReducer(v,D,B)},F.useRef=function(v){return I.H.useRef(v)},F.useState=function(v){return I.H.useState(v)},F.useSyncExternalStore=function(v,D,B){return I.H.useSyncExternalStore(v,D,B)},F.useTransition=function(){return I.H.useTransition()},F.version="19.2.4",F}var Io;function qc(){return Io||(Io=1,Rc.exports=rh()),Rc.exports}var C=qc();const o0=s0(C);var Uc={exports:{}},Oa={},Oc={exports:{}},Nc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Po;function dh(){return Po||(Po=1,(function(f){function d(U,L){var k=U.length;U.push(L);t:for(;0<k;){var bt=k-1>>>1,_t=U[bt];if(0<h(_t,L))U[bt]=L,U[k]=_t,k=bt;else break t}}function s(U){return U.length===0?null:U[0]}function c(U){if(U.length===0)return null;var L=U[0],k=U.pop();if(k!==L){U[0]=k;t:for(var bt=0,_t=U.length,v=_t>>>1;bt<v;){var D=2*(bt+1)-1,B=U[D],Y=D+1,P=U[Y];if(0>h(B,k))Y<_t&&0>h(P,B)?(U[bt]=P,U[Y]=k,bt=Y):(U[bt]=B,U[D]=k,bt=D);else if(Y<_t&&0>h(P,k))U[bt]=P,U[Y]=k,bt=Y;else break t}}return L}function h(U,L){var k=U.sortIndex-L.sortIndex;return k!==0?k:U.id-L.id}if(f.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;f.unstable_now=function(){return o.now()}}else{var g=Date,z=g.now();f.unstable_now=function(){return g.now()-z}}var y=[],b=[],T=1,E=null,H=3,w=!1,W=!1,V=!1,q=!1,K=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function yt(U){for(var L=s(b);L!==null;){if(L.callback===null)c(b);else if(L.startTime<=U)c(b),L.sortIndex=L.expirationTime,d(y,L);else break;L=s(b)}}function pt(U){if(V=!1,yt(U),!W)if(s(y)!==null)W=!0,Et||(Et=!0,Wt());else{var L=s(b);L!==null&&Te(pt,L.startTime-U)}}var Et=!1,I=-1,Ct=5,qt=-1;function he(){return q?!0:!(f.unstable_now()-qt<Ct)}function Re(){if(q=!1,Et){var U=f.unstable_now();qt=U;var L=!0;try{t:{W=!1,V&&(V=!1,$(I),I=-1),w=!0;var k=H;try{e:{for(yt(U),E=s(y);E!==null&&!(E.expirationTime>U&&he());){var bt=E.callback;if(typeof bt=="function"){E.callback=null,H=E.priorityLevel;var _t=bt(E.expirationTime<=U);if(U=f.unstable_now(),typeof _t=="function"){E.callback=_t,yt(U),L=!0;break e}E===s(y)&&c(y),yt(U)}else c(y);E=s(y)}if(E!==null)L=!0;else{var v=s(b);v!==null&&Te(pt,v.startTime-U),L=!1}}break t}finally{E=null,H=k,w=!1}L=void 0}}finally{L?Wt():Et=!1}}}var Wt;if(typeof G=="function")Wt=function(){G(Re)};else if(typeof MessageChannel<"u"){var Un=new MessageChannel,Le=Un.port2;Un.port1.onmessage=Re,Wt=function(){Le.postMessage(null)}}else Wt=function(){K(Re,0)};function Te(U,L){I=K(function(){U(f.unstable_now())},L)}f.unstable_IdlePriority=5,f.unstable_ImmediatePriority=1,f.unstable_LowPriority=4,f.unstable_NormalPriority=3,f.unstable_Profiling=null,f.unstable_UserBlockingPriority=2,f.unstable_cancelCallback=function(U){U.callback=null},f.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ct=0<U?Math.floor(1e3/U):5},f.unstable_getCurrentPriorityLevel=function(){return H},f.unstable_next=function(U){switch(H){case 1:case 2:case 3:var L=3;break;default:L=H}var k=H;H=L;try{return U()}finally{H=k}},f.unstable_requestPaint=function(){q=!0},f.unstable_runWithPriority=function(U,L){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var k=H;H=U;try{return L()}finally{H=k}},f.unstable_scheduleCallback=function(U,L,k){var bt=f.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?bt+k:bt):k=bt,U){case 1:var _t=-1;break;case 2:_t=250;break;case 5:_t=1073741823;break;case 4:_t=1e4;break;default:_t=5e3}return _t=k+_t,U={id:T++,callback:L,priorityLevel:U,startTime:k,expirationTime:_t,sortIndex:-1},k>bt?(U.sortIndex=k,d(b,U),s(y)===null&&U===s(b)&&(V?($(I),I=-1):V=!0,Te(pt,k-bt))):(U.sortIndex=_t,d(y,U),W||w||(W=!0,Et||(Et=!0,Wt()))),U},f.unstable_shouldYield=he,f.unstable_wrapCallback=function(U){var L=H;return function(){var k=H;H=L;try{return U.apply(this,arguments)}finally{H=k}}}})(Nc)),Nc}var t0;function sh(){return t0||(t0=1,Oc.exports=dh()),Oc.exports}var Dc={exports:{}},Kt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0;function oh(){if(e0)return Kt;e0=1;var f=qc();function d(y){var b="https://react.dev/errors/"+y;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)b+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+y+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var c={d:{f:s,r:function(){throw Error(d(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},h=Symbol.for("react.portal");function o(y,b,T){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:E==null?null:""+E,children:y,containerInfo:b,implementation:T}}var g=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function z(y,b){if(y==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return Kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Kt.createPortal=function(y,b){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(d(299));return o(y,b,null,T)},Kt.flushSync=function(y){var b=g.T,T=c.p;try{if(g.T=null,c.p=2,y)return y()}finally{g.T=b,c.p=T,c.d.f()}},Kt.preconnect=function(y,b){typeof y=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,c.d.C(y,b))},Kt.prefetchDNS=function(y){typeof y=="string"&&c.d.D(y)},Kt.preinit=function(y,b){if(typeof y=="string"&&b&&typeof b.as=="string"){var T=b.as,E=z(T,b.crossOrigin),H=typeof b.integrity=="string"?b.integrity:void 0,w=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;T==="style"?c.d.S(y,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:E,integrity:H,fetchPriority:w}):T==="script"&&c.d.X(y,{crossOrigin:E,integrity:H,fetchPriority:w,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},Kt.preinitModule=function(y,b){if(typeof y=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var T=z(b.as,b.crossOrigin);c.d.M(y,{crossOrigin:T,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&c.d.M(y)},Kt.preload=function(y,b){if(typeof y=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var T=b.as,E=z(T,b.crossOrigin);c.d.L(y,T,{crossOrigin:E,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},Kt.preloadModule=function(y,b){if(typeof y=="string")if(b){var T=z(b.as,b.crossOrigin);c.d.m(y,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:T,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else c.d.m(y)},Kt.requestFormReset=function(y){c.d.r(y)},Kt.unstable_batchedUpdates=function(y,b){return y(b)},Kt.useFormState=function(y,b,T){return g.H.useFormState(y,b,T)},Kt.useFormStatus=function(){return g.H.useHostTransitionStatus()},Kt.version="19.2.4",Kt}var n0;function hh(){if(n0)return Dc.exports;n0=1;function f(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)}catch(d){console.error(d)}}return f(),Dc.exports=oh(),Dc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0;function ph(){if(l0)return Oa;l0=1;var f=sh(),d=qc(),s=hh();function c(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function o(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function g(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function z(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function y(t){if(o(t)!==t)throw Error(c(188))}function b(t){var e=t.alternate;if(!e){if(e=o(t),e===null)throw Error(c(188));return e!==t?null:t}for(var n=t,l=e;;){var a=n.return;if(a===null)break;var u=a.alternate;if(u===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===n)return y(a),t;if(u===l)return y(a),e;u=u.sibling}throw Error(c(188))}if(n.return!==l.return)n=a,l=u;else{for(var i=!1,r=a.child;r;){if(r===n){i=!0,n=a,l=u;break}if(r===l){i=!0,l=a,n=u;break}r=r.sibling}if(!i){for(r=u.child;r;){if(r===n){i=!0,n=u,l=a;break}if(r===l){i=!0,l=u,n=a;break}r=r.sibling}if(!i)throw Error(c(189))}}if(n.alternate!==l)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?t:e}function T(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=T(t),e!==null)return e;t=t.sibling}return null}var E=Object.assign,H=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),$=Symbol.for("react.consumer"),G=Symbol.for("react.context"),yt=Symbol.for("react.forward_ref"),pt=Symbol.for("react.suspense"),Et=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),qt=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),Re=Symbol.iterator;function Wt(t){return t===null||typeof t!="object"?null:(t=Re&&t[Re]||t["@@iterator"],typeof t=="function"?t:null)}var Un=Symbol.for("react.client.reference");function Le(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Un?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case K:return"Profiler";case q:return"StrictMode";case pt:return"Suspense";case Et:return"SuspenseList";case qt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case W:return"Portal";case G:return t.displayName||"Context";case $:return(t._context.displayName||"Context")+".Consumer";case yt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return e=t.displayName||null,e!==null?e:Le(t.type)||"Memo";case Ct:e=t._payload,t=t._init;try{return Le(t(e))}catch{}}return null}var Te=Array.isArray,U=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},bt=[],_t=-1;function v(t){return{current:t}}function D(t){0>_t||(t.current=bt[_t],bt[_t]=null,_t--)}function B(t,e){_t++,bt[_t]=t.current,t.current=e}var Y=v(null),P=v(null),nt=v(null),st=v(null);function Jt(t,e){switch(B(nt,e),B(P,t),B(Y,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?vo(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=vo(e),t=yo(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}D(Y),B(Y,t)}function Rt(){D(Y),D(P),D(nt)}function Gl(t){t.memoizedState!==null&&B(st,t);var e=Y.current,n=yo(e,t.type);e!==n&&(B(P,t),B(Y,n))}function Xa(t){P.current===t&&(D(Y),D(P)),st.current===t&&(D(st),za._currentValue=k)}var di,Jc;function On(t){if(di===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);di=e&&e[1]||"",Jc=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+di+t+Jc}var si=!1;function oi(t,e){if(!t||si)return"";si=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(A){var x=A}Reflect.construct(t,[],N)}else{try{N.call()}catch(A){x=A}t.call(N.prototype)}}else{try{throw Error()}catch(A){x=A}(N=t())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(A){if(A&&x&&typeof A.stack=="string")return[A.stack,x.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),i=u[0],r=u[1];if(i&&r){var p=i.split(`
`),j=r.split(`
`);for(a=l=0;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;for(;a<j.length&&!j[a].includes("DetermineComponentFrameRoot");)a++;if(l===p.length||a===j.length)for(l=p.length-1,a=j.length-1;1<=l&&0<=a&&p[l]!==j[a];)a--;for(;1<=l&&0<=a;l--,a--)if(p[l]!==j[a]){if(l!==1||a!==1)do if(l--,a--,0>a||p[l]!==j[a]){var R=`
`+p[l].replace(" at new "," at ");return t.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",t.displayName)),R}while(1<=l&&0<=a);break}}}finally{si=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?On(n):""}function G0(t,e){switch(t.tag){case 26:case 27:case 5:return On(t.type);case 16:return On("Lazy");case 13:return t.child!==e&&e!==null?On("Suspense Fallback"):On("Suspense");case 19:return On("SuspenseList");case 0:case 15:return oi(t.type,!1);case 11:return oi(t.type.render,!1);case 1:return oi(t.type,!0);case 31:return On("Activity");default:return""}}function kc(t){try{var e="",n=null;do e+=G0(t,n),n=t,t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var hi=Object.prototype.hasOwnProperty,pi=f.unstable_scheduleCallback,bi=f.unstable_cancelCallback,X0=f.unstable_shouldYield,q0=f.unstable_requestPaint,le=f.unstable_now,Y0=f.unstable_getCurrentPriorityLevel,Wc=f.unstable_ImmediatePriority,$c=f.unstable_UserBlockingPriority,qa=f.unstable_NormalPriority,w0=f.unstable_LowPriority,Fc=f.unstable_IdlePriority,Q0=f.log,V0=f.unstable_setDisableYieldValue,Xl=null,ae=null;function ln(t){if(typeof Q0=="function"&&V0(t),ae&&typeof ae.setStrictMode=="function")try{ae.setStrictMode(Xl,t)}catch{}}var ue=Math.clz32?Math.clz32:J0,Z0=Math.log,K0=Math.LN2;function J0(t){return t>>>=0,t===0?32:31-(Z0(t)/K0|0)|0}var Ya=256,wa=262144,Qa=4194304;function Nn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Va(t,e,n){var l=t.pendingLanes;if(l===0)return 0;var a=0,u=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var r=l&134217727;return r!==0?(l=r&~u,l!==0?a=Nn(l):(i&=r,i!==0?a=Nn(i):n||(n=r&~t,n!==0&&(a=Nn(n))))):(r=l&~u,r!==0?a=Nn(r):i!==0?a=Nn(i):n||(n=l&~t,n!==0&&(a=Nn(n)))),a===0?0:e!==0&&e!==a&&(e&u)===0&&(u=a&-a,n=e&-e,u>=n||u===32&&(n&4194048)!==0)?e:a}function ql(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function k0(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ic(){var t=Qa;return Qa<<=1,(Qa&62914560)===0&&(Qa=4194304),t}function mi(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Yl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function W0(t,e,n,l,a,u){var i=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var r=t.entanglements,p=t.expirationTimes,j=t.hiddenUpdates;for(n=i&~n;0<n;){var R=31-ue(n),N=1<<R;r[R]=0,p[R]=-1;var x=j[R];if(x!==null)for(j[R]=null,R=0;R<x.length;R++){var A=x[R];A!==null&&(A.lane&=-536870913)}n&=~N}l!==0&&Pc(t,l,0),u!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=u&~(i&~e))}function Pc(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-ue(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|n&261930}function tr(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var l=31-ue(n),a=1<<l;a&e|t[l]&e&&(t[l]|=e),n&=~a}}function er(t,e){var n=e&-e;return n=(n&42)!==0?1:gi(n),(n&(t.suspendedLanes|e))!==0?0:n}function gi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function vi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function nr(){var t=L.p;return t!==0?t:(t=window.event,t===void 0?32:wo(t.type))}function lr(t,e){var n=L.p;try{return L.p=t,e()}finally{L.p=n}}var an=Math.random().toString(36).slice(2),Yt="__reactFiber$"+an,$t="__reactProps$"+an,Pn="__reactContainer$"+an,yi="__reactEvents$"+an,$0="__reactListeners$"+an,F0="__reactHandles$"+an,ar="__reactResources$"+an,wl="__reactMarker$"+an;function _i(t){delete t[Yt],delete t[$t],delete t[yi],delete t[$0],delete t[F0]}function tl(t){var e=t[Yt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pn]||n[Yt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ao(t);t!==null;){if(n=t[Yt])return n;t=Ao(t)}return e}t=n,n=t.parentNode}return null}function el(t){if(t=t[Yt]||t[Pn]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Ql(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(c(33))}function nl(t){var e=t[ar];return e||(e=t[ar]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Gt(t){t[wl]=!0}var ur=new Set,ir={};function Dn(t,e){ll(t,e),ll(t+"Capture",e)}function ll(t,e){for(ir[t]=e,t=0;t<e.length;t++)ur.add(e[t])}var I0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fr={},cr={};function P0(t){return hi.call(cr,t)?!0:hi.call(fr,t)?!1:I0.test(t)?cr[t]=!0:(fr[t]=!0,!1)}function Za(t,e,n){if(P0(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Ka(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Be(t,e,n,l){if(l===null)t.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+l)}}function pe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rr(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function t2(t,e,n){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,u=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(i){n=""+i,u.call(this,i)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Si(t){if(!t._valueTracker){var e=rr(t)?"checked":"value";t._valueTracker=t2(t,e,""+t[e])}}function dr(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),l="";return t&&(l=rr(t)?t.checked?"true":"false":t.value),t=l,t!==n?(e.setValue(t),!0):!1}function Ja(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var e2=/[\n"\\]/g;function be(t){return t.replace(e2,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ji(t,e,n,l,a,u,i,r){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),e!=null?i==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+pe(e)):t.value!==""+pe(e)&&(t.value=""+pe(e)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),e!=null?xi(t,i,pe(e)):n!=null?xi(t,i,pe(n)):l!=null&&t.removeAttribute("value"),a==null&&u!=null&&(t.defaultChecked=!!u),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.name=""+pe(r):t.removeAttribute("name")}function sr(t,e,n,l,a,u,i,r){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){Si(t);return}n=n!=null?""+pe(n):"",e=e!=null?""+pe(e):n,r||e===t.value||(t.value=e),t.defaultValue=e}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=r?t.checked:!!l,t.defaultChecked=!!l,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i),Si(t)}function xi(t,e,n){e==="number"&&Ja(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function al(t,e,n,l){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&l&&(t[n].defaultSelected=!0)}else{for(n=""+pe(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,l&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function or(t,e,n){if(e!=null&&(e=""+pe(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+pe(n):""}function hr(t,e,n,l){if(e==null){if(l!=null){if(n!=null)throw Error(c(92));if(Te(l)){if(1<l.length)throw Error(c(93));l=l[0]}n=l}n==null&&(n=""),e=n}n=pe(e),t.defaultValue=n,l=t.textContent,l===n&&l!==""&&l!==null&&(t.value=l),Si(t)}function ul(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var n2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pr(t,e,n){var l=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,n):typeof n!="number"||n===0||n2.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function br(t,e,n){if(e!=null&&typeof e!="object")throw Error(c(62));if(t=t.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var a in e)l=e[a],e.hasOwnProperty(a)&&n[a]!==l&&pr(t,a,l)}else for(var u in e)e.hasOwnProperty(u)&&pr(t,u,e[u])}function Ei(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var l2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),a2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ka(t){return a2.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ge(){}var Ti=null;function Ai(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var il=null,fl=null;function mr(t){var e=el(t);if(e&&(t=e.stateNode)){var n=t[$t]||null;t:switch(t=e.stateNode,e.type){case"input":if(ji(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+be(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var l=n[e];if(l!==t&&l.form===t.form){var a=l[$t]||null;if(!a)throw Error(c(90));ji(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)l=n[e],l.form===t.form&&dr(l)}break t;case"textarea":or(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&al(t,!!n.multiple,e,!1)}}}var zi=!1;function gr(t,e,n){if(zi)return t(e,n);zi=!0;try{var l=t(e);return l}finally{if(zi=!1,(il!==null||fl!==null)&&(Hu(),il&&(e=il,t=fl,fl=il=null,mr(e),t)))for(e=0;e<t.length;e++)mr(t[e])}}function Vl(t,e){var n=t.stateNode;if(n===null)return null;var l=n[$t]||null;if(l===null)return null;n=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(c(231,e,typeof n));return n}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mi=!1;if(Xe)try{var Zl={};Object.defineProperty(Zl,"passive",{get:function(){Mi=!0}}),window.addEventListener("test",Zl,Zl),window.removeEventListener("test",Zl,Zl)}catch{Mi=!1}var un=null,Ci=null,Wa=null;function vr(){if(Wa)return Wa;var t,e=Ci,n=e.length,l,a="value"in un?un.value:un.textContent,u=a.length;for(t=0;t<n&&e[t]===a[t];t++);var i=n-t;for(l=1;l<=i&&e[n-l]===a[u-l];l++);return Wa=a.slice(t,1<l?1-l:void 0)}function $a(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fa(){return!0}function yr(){return!1}function Ft(t){function e(n,l,a,u,i){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var r in t)t.hasOwnProperty(r)&&(n=t[r],this[r]=n?n(u):u[r]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Fa:yr,this.isPropagationStopped=yr,this}return E(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fa)},persist:function(){},isPersistent:Fa}),e}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ia=Ft(Hn),Kl=E({},Hn,{view:0,detail:0}),u2=Ft(Kl),Ri,Ui,Jl,Pa=E({},Kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ni,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Jl&&(Jl&&t.type==="mousemove"?(Ri=t.screenX-Jl.screenX,Ui=t.screenY-Jl.screenY):Ui=Ri=0,Jl=t),Ri)},movementY:function(t){return"movementY"in t?t.movementY:Ui}}),_r=Ft(Pa),i2=E({},Pa,{dataTransfer:0}),f2=Ft(i2),c2=E({},Kl,{relatedTarget:0}),Oi=Ft(c2),r2=E({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),d2=Ft(r2),s2=E({},Hn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),o2=Ft(s2),h2=E({},Hn,{data:0}),Sr=Ft(h2),p2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=m2[t])?!!e[t]:!1}function Ni(){return g2}var v2=E({},Kl,{key:function(t){if(t.key){var e=p2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$a(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?b2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ni,charCode:function(t){return t.type==="keypress"?$a(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$a(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),y2=Ft(v2),_2=E({},Pa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jr=Ft(_2),S2=E({},Kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ni}),j2=Ft(S2),x2=E({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),E2=Ft(x2),T2=E({},Pa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),A2=Ft(T2),z2=E({},Hn,{newState:0,oldState:0}),M2=Ft(z2),C2=[9,13,27,32],Di=Xe&&"CompositionEvent"in window,kl=null;Xe&&"documentMode"in document&&(kl=document.documentMode);var R2=Xe&&"TextEvent"in window&&!kl,xr=Xe&&(!Di||kl&&8<kl&&11>=kl),Er=" ",Tr=!1;function Ar(t,e){switch(t){case"keyup":return C2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zr(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cl=!1;function U2(t,e){switch(t){case"compositionend":return zr(e);case"keypress":return e.which!==32?null:(Tr=!0,Er);case"textInput":return t=e.data,t===Er&&Tr?null:t;default:return null}}function O2(t,e){if(cl)return t==="compositionend"||!Di&&Ar(t,e)?(t=vr(),Wa=Ci=un=null,cl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xr&&e.locale!=="ko"?null:e.data;default:return null}}var N2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!N2[t.type]:e==="textarea"}function Cr(t,e,n,l){il?fl?fl.push(l):fl=[l]:il=l,e=wu(e,"onChange"),0<e.length&&(n=new Ia("onChange","change",null,n,l),t.push({event:n,listeners:e}))}var Wl=null,$l=null;function D2(t){oo(t,0)}function tu(t){var e=Ql(t);if(dr(e))return t}function Rr(t,e){if(t==="change")return e}var Ur=!1;if(Xe){var Hi;if(Xe){var Li="oninput"in document;if(!Li){var Or=document.createElement("div");Or.setAttribute("oninput","return;"),Li=typeof Or.oninput=="function"}Hi=Li}else Hi=!1;Ur=Hi&&(!document.documentMode||9<document.documentMode)}function Nr(){Wl&&(Wl.detachEvent("onpropertychange",Dr),$l=Wl=null)}function Dr(t){if(t.propertyName==="value"&&tu($l)){var e=[];Cr(e,$l,t,Ai(t)),gr(D2,e)}}function H2(t,e,n){t==="focusin"?(Nr(),Wl=e,$l=n,Wl.attachEvent("onpropertychange",Dr)):t==="focusout"&&Nr()}function L2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return tu($l)}function B2(t,e){if(t==="click")return tu(e)}function G2(t,e){if(t==="input"||t==="change")return tu(e)}function X2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ie=typeof Object.is=="function"?Object.is:X2;function Fl(t,e){if(ie(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),l=Object.keys(e);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!hi.call(e,a)||!ie(t[a],e[a]))return!1}return!0}function Hr(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lr(t,e){var n=Hr(t);t=0;for(var l;n;){if(n.nodeType===3){if(l=t+n.textContent.length,t<=e&&l>=e)return{node:n,offset:e-t};t=l}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Hr(n)}}function Br(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Br(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gr(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Ja(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ja(t.document)}return e}function Bi(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var q2=Xe&&"documentMode"in document&&11>=document.documentMode,rl=null,Gi=null,Il=null,Xi=!1;function Xr(t,e,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xi||rl==null||rl!==Ja(l)||(l=rl,"selectionStart"in l&&Bi(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Il&&Fl(Il,l)||(Il=l,l=wu(Gi,"onSelect"),0<l.length&&(e=new Ia("onSelect","select",null,e,n),t.push({event:e,listeners:l}),e.target=rl)))}function Ln(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var dl={animationend:Ln("Animation","AnimationEnd"),animationiteration:Ln("Animation","AnimationIteration"),animationstart:Ln("Animation","AnimationStart"),transitionrun:Ln("Transition","TransitionRun"),transitionstart:Ln("Transition","TransitionStart"),transitioncancel:Ln("Transition","TransitionCancel"),transitionend:Ln("Transition","TransitionEnd")},qi={},qr={};Xe&&(qr=document.createElement("div").style,"AnimationEvent"in window||(delete dl.animationend.animation,delete dl.animationiteration.animation,delete dl.animationstart.animation),"TransitionEvent"in window||delete dl.transitionend.transition);function Bn(t){if(qi[t])return qi[t];if(!dl[t])return t;var e=dl[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in qr)return qi[t]=e[n];return t}var Yr=Bn("animationend"),wr=Bn("animationiteration"),Qr=Bn("animationstart"),Y2=Bn("transitionrun"),w2=Bn("transitionstart"),Q2=Bn("transitioncancel"),Vr=Bn("transitionend"),Zr=new Map,Yi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yi.push("scrollEnd");function Ae(t,e){Zr.set(t,e),Dn(e,[t])}var eu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},me=[],sl=0,wi=0;function nu(){for(var t=sl,e=wi=sl=0;e<t;){var n=me[e];me[e++]=null;var l=me[e];me[e++]=null;var a=me[e];me[e++]=null;var u=me[e];if(me[e++]=null,l!==null&&a!==null){var i=l.pending;i===null?a.next=a:(a.next=i.next,i.next=a),l.pending=a}u!==0&&Kr(n,a,u)}}function lu(t,e,n,l){me[sl++]=t,me[sl++]=e,me[sl++]=n,me[sl++]=l,wi|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Qi(t,e,n,l){return lu(t,e,n,l),au(t)}function Gn(t,e){return lu(t,null,null,e),au(t)}function Kr(t,e,n){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n);for(var a=!1,u=t.return;u!==null;)u.childLanes|=n,l=u.alternate,l!==null&&(l.childLanes|=n),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(a=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,a&&e!==null&&(a=31-ue(n),t=u.hiddenUpdates,l=t[a],l===null?t[a]=[e]:l.push(e),e.lane=n|536870912),u):null}function au(t){if(50<_a)throw _a=0,Pf=null,Error(c(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ol={};function V2(t,e,n,l){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fe(t,e,n,l){return new V2(t,e,n,l)}function Vi(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qe(t,e){var n=t.alternate;return n===null?(n=fe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Jr(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function uu(t,e,n,l,a,u){var i=0;if(l=t,typeof t=="function")Vi(t)&&(i=1);else if(typeof t=="string")i=W1(t,n,Y.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case qt:return t=fe(31,n,e,a),t.elementType=qt,t.lanes=u,t;case V:return Xn(n.children,a,u,e);case q:i=8,a|=24;break;case K:return t=fe(12,n,e,a|2),t.elementType=K,t.lanes=u,t;case pt:return t=fe(13,n,e,a),t.elementType=pt,t.lanes=u,t;case Et:return t=fe(19,n,e,a),t.elementType=Et,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G:i=10;break t;case $:i=9;break t;case yt:i=11;break t;case I:i=14;break t;case Ct:i=16,l=null;break t}i=29,n=Error(c(130,t===null?"null":typeof t,"")),l=null}return e=fe(i,n,e,a),e.elementType=t,e.type=l,e.lanes=u,e}function Xn(t,e,n,l){return t=fe(7,t,l,e),t.lanes=n,t}function Zi(t,e,n){return t=fe(6,t,null,e),t.lanes=n,t}function kr(t){var e=fe(18,null,null,0);return e.stateNode=t,e}function Ki(t,e,n){return e=fe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Wr=new WeakMap;function ge(t,e){if(typeof t=="object"&&t!==null){var n=Wr.get(t);return n!==void 0?n:(e={value:t,source:e,stack:kc(e)},Wr.set(t,e),e)}return{value:t,source:e,stack:kc(e)}}var hl=[],pl=0,iu=null,Pl=0,ve=[],ye=0,fn=null,Ue=1,Oe="";function Ye(t,e){hl[pl++]=Pl,hl[pl++]=iu,iu=t,Pl=e}function $r(t,e,n){ve[ye++]=Ue,ve[ye++]=Oe,ve[ye++]=fn,fn=t;var l=Ue;t=Oe;var a=32-ue(l)-1;l&=~(1<<a),n+=1;var u=32-ue(e)+a;if(30<u){var i=a-a%5;u=(l&(1<<i)-1).toString(32),l>>=i,a-=i,Ue=1<<32-ue(e)+a|n<<a|l,Oe=u+t}else Ue=1<<u|n<<a|l,Oe=t}function Ji(t){t.return!==null&&(Ye(t,1),$r(t,1,0))}function ki(t){for(;t===iu;)iu=hl[--pl],hl[pl]=null,Pl=hl[--pl],hl[pl]=null;for(;t===fn;)fn=ve[--ye],ve[ye]=null,Oe=ve[--ye],ve[ye]=null,Ue=ve[--ye],ve[ye]=null}function Fr(t,e){ve[ye++]=Ue,ve[ye++]=Oe,ve[ye++]=fn,Ue=e.id,Oe=e.overflow,fn=t}var wt=null,jt=null,ft=!1,cn=null,_e=!1,Wi=Error(c(519));function rn(t){var e=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ta(ge(e,t)),Wi}function Ir(t){var e=t.stateNode,n=t.type,l=t.memoizedProps;switch(e[Yt]=t,e[$t]=l,n){case"dialog":at("cancel",e),at("close",e);break;case"iframe":case"object":case"embed":at("load",e);break;case"video":case"audio":for(n=0;n<ja.length;n++)at(ja[n],e);break;case"source":at("error",e);break;case"img":case"image":case"link":at("error",e),at("load",e);break;case"details":at("toggle",e);break;case"input":at("invalid",e),sr(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":at("invalid",e);break;case"textarea":at("invalid",e),hr(e,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||l.suppressHydrationWarning===!0||mo(e.textContent,n)?(l.popover!=null&&(at("beforetoggle",e),at("toggle",e)),l.onScroll!=null&&at("scroll",e),l.onScrollEnd!=null&&at("scrollend",e),l.onClick!=null&&(e.onclick=Ge),e=!0):e=!1,e||rn(t,!0)}function Pr(t){for(wt=t.return;wt;)switch(wt.tag){case 5:case 31:case 13:_e=!1;return;case 27:case 3:_e=!0;return;default:wt=wt.return}}function bl(t){if(t!==wt)return!1;if(!ft)return Pr(t),ft=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||pc(t.type,t.memoizedProps)),n=!n),n&&jt&&rn(t),Pr(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(317));jt=To(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(317));jt=To(t)}else e===27?(e=jt,xn(t.type)?(t=yc,yc=null,jt=t):jt=e):jt=wt?je(t.stateNode.nextSibling):null;return!0}function qn(){jt=wt=null,ft=!1}function $i(){var t=cn;return t!==null&&(ee===null?ee=t:ee.push.apply(ee,t),cn=null),t}function ta(t){cn===null?cn=[t]:cn.push(t)}var Fi=v(null),Yn=null,we=null;function dn(t,e,n){B(Fi,e._currentValue),e._currentValue=n}function Qe(t){t._currentValue=Fi.current,D(Fi)}function Ii(t,e,n){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===n)break;t=t.return}}function Pi(t,e,n,l){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){var i=a.child;u=u.firstContext;t:for(;u!==null;){var r=u;u=a;for(var p=0;p<e.length;p++)if(r.context===e[p]){u.lanes|=n,r=u.alternate,r!==null&&(r.lanes|=n),Ii(u.return,n,t),l||(i=null);break t}u=r.next}}else if(a.tag===18){if(i=a.return,i===null)throw Error(c(341));i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ii(i,n,t),i=null}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}}function ml(t,e,n,l){t=null;for(var a=e,u=!1;a!==null;){if(!u){if((a.flags&524288)!==0)u=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var i=a.alternate;if(i===null)throw Error(c(387));if(i=i.memoizedProps,i!==null){var r=a.type;ie(a.pendingProps.value,i.value)||(t!==null?t.push(r):t=[r])}}else if(a===st.current){if(i=a.alternate,i===null)throw Error(c(387));i.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(za):t=[za])}a=a.return}t!==null&&Pi(e,t,n,l),e.flags|=262144}function fu(t){for(t=t.firstContext;t!==null;){if(!ie(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function wn(t){Yn=t,we=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Qt(t){return td(Yn,t)}function cu(t,e){return Yn===null&&wn(t),td(t,e)}function td(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},we===null){if(t===null)throw Error(c(308));we=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else we=we.next=e;return n}var Z2=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},K2=f.unstable_scheduleCallback,J2=f.unstable_NormalPriority,Nt={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tf(){return{controller:new Z2,data:new Map,refCount:0}}function ea(t){t.refCount--,t.refCount===0&&K2(J2,function(){t.controller.abort()})}var na=null,ef=0,gl=0,vl=null;function k2(t,e){if(na===null){var n=na=[];ef=0,gl=uc(),vl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return ef++,e.then(ed,ed),e}function ed(){if(--ef===0&&na!==null){vl!==null&&(vl.status="fulfilled");var t=na;na=null,gl=0,vl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function W2(t,e){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var nd=U.S;U.S=function(t,e){Xs=le(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&k2(t,e),nd!==null&&nd(t,e)};var Qn=v(null);function nf(){var t=Qn.current;return t!==null?t:St.pooledCache}function ru(t,e){e===null?B(Qn,Qn.current):B(Qn,e.pool)}function ld(){var t=nf();return t===null?null:{parent:Nt._currentValue,pool:t}}var yl=Error(c(460)),lf=Error(c(474)),du=Error(c(542)),su={then:function(){}};function ad(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ud(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Ge,Ge),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,fd(t),t;default:if(typeof e.status=="string")e.then(Ge,Ge);else{if(t=St,t!==null&&100<t.shellSuspendCounter)throw Error(c(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=l}},function(l){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,fd(t),t}throw Zn=e,yl}}function Vn(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Zn=n,yl):n}}var Zn=null;function id(){if(Zn===null)throw Error(c(459));var t=Zn;return Zn=null,t}function fd(t){if(t===yl||t===du)throw Error(c(483))}var _l=null,la=0;function ou(t){var e=la;return la+=1,_l===null&&(_l=[]),ud(_l,t,e)}function aa(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function hu(t,e){throw e.$$typeof===H?Error(c(525)):(t=Object.prototype.toString.call(e),Error(c(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function cd(t){function e(_,m){if(t){var S=_.deletions;S===null?(_.deletions=[m],_.flags|=16):S.push(m)}}function n(_,m){if(!t)return null;for(;m!==null;)e(_,m),m=m.sibling;return null}function l(_){for(var m=new Map;_!==null;)_.key!==null?m.set(_.key,_):m.set(_.index,_),_=_.sibling;return m}function a(_,m){return _=qe(_,m),_.index=0,_.sibling=null,_}function u(_,m,S){return _.index=S,t?(S=_.alternate,S!==null?(S=S.index,S<m?(_.flags|=67108866,m):S):(_.flags|=67108866,m)):(_.flags|=1048576,m)}function i(_){return t&&_.alternate===null&&(_.flags|=67108866),_}function r(_,m,S,O){return m===null||m.tag!==6?(m=Zi(S,_.mode,O),m.return=_,m):(m=a(m,S),m.return=_,m)}function p(_,m,S,O){var Z=S.type;return Z===V?R(_,m,S.props.children,O,S.key):m!==null&&(m.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Ct&&Vn(Z)===m.type)?(m=a(m,S.props),aa(m,S),m.return=_,m):(m=uu(S.type,S.key,S.props,null,_.mode,O),aa(m,S),m.return=_,m)}function j(_,m,S,O){return m===null||m.tag!==4||m.stateNode.containerInfo!==S.containerInfo||m.stateNode.implementation!==S.implementation?(m=Ki(S,_.mode,O),m.return=_,m):(m=a(m,S.children||[]),m.return=_,m)}function R(_,m,S,O,Z){return m===null||m.tag!==7?(m=Xn(S,_.mode,O,Z),m.return=_,m):(m=a(m,S),m.return=_,m)}function N(_,m,S){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Zi(""+m,_.mode,S),m.return=_,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case w:return S=uu(m.type,m.key,m.props,null,_.mode,S),aa(S,m),S.return=_,S;case W:return m=Ki(m,_.mode,S),m.return=_,m;case Ct:return m=Vn(m),N(_,m,S)}if(Te(m)||Wt(m))return m=Xn(m,_.mode,S,null),m.return=_,m;if(typeof m.then=="function")return N(_,ou(m),S);if(m.$$typeof===G)return N(_,cu(_,m),S);hu(_,m)}return null}function x(_,m,S,O){var Z=m!==null?m.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return Z!==null?null:r(_,m,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case w:return S.key===Z?p(_,m,S,O):null;case W:return S.key===Z?j(_,m,S,O):null;case Ct:return S=Vn(S),x(_,m,S,O)}if(Te(S)||Wt(S))return Z!==null?null:R(_,m,S,O,null);if(typeof S.then=="function")return x(_,m,ou(S),O);if(S.$$typeof===G)return x(_,m,cu(_,S),O);hu(_,S)}return null}function A(_,m,S,O,Z){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return _=_.get(S)||null,r(m,_,""+O,Z);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case w:return _=_.get(O.key===null?S:O.key)||null,p(m,_,O,Z);case W:return _=_.get(O.key===null?S:O.key)||null,j(m,_,O,Z);case Ct:return O=Vn(O),A(_,m,S,O,Z)}if(Te(O)||Wt(O))return _=_.get(S)||null,R(m,_,O,Z,null);if(typeof O.then=="function")return A(_,m,S,ou(O),Z);if(O.$$typeof===G)return A(_,m,S,cu(m,O),Z);hu(m,O)}return null}function X(_,m,S,O){for(var Z=null,ct=null,Q=m,et=m=0,it=null;Q!==null&&et<S.length;et++){Q.index>et?(it=Q,Q=null):it=Q.sibling;var rt=x(_,Q,S[et],O);if(rt===null){Q===null&&(Q=it);break}t&&Q&&rt.alternate===null&&e(_,Q),m=u(rt,m,et),ct===null?Z=rt:ct.sibling=rt,ct=rt,Q=it}if(et===S.length)return n(_,Q),ft&&Ye(_,et),Z;if(Q===null){for(;et<S.length;et++)Q=N(_,S[et],O),Q!==null&&(m=u(Q,m,et),ct===null?Z=Q:ct.sibling=Q,ct=Q);return ft&&Ye(_,et),Z}for(Q=l(Q);et<S.length;et++)it=A(Q,_,et,S[et],O),it!==null&&(t&&it.alternate!==null&&Q.delete(it.key===null?et:it.key),m=u(it,m,et),ct===null?Z=it:ct.sibling=it,ct=it);return t&&Q.forEach(function(Mn){return e(_,Mn)}),ft&&Ye(_,et),Z}function J(_,m,S,O){if(S==null)throw Error(c(151));for(var Z=null,ct=null,Q=m,et=m=0,it=null,rt=S.next();Q!==null&&!rt.done;et++,rt=S.next()){Q.index>et?(it=Q,Q=null):it=Q.sibling;var Mn=x(_,Q,rt.value,O);if(Mn===null){Q===null&&(Q=it);break}t&&Q&&Mn.alternate===null&&e(_,Q),m=u(Mn,m,et),ct===null?Z=Mn:ct.sibling=Mn,ct=Mn,Q=it}if(rt.done)return n(_,Q),ft&&Ye(_,et),Z;if(Q===null){for(;!rt.done;et++,rt=S.next())rt=N(_,rt.value,O),rt!==null&&(m=u(rt,m,et),ct===null?Z=rt:ct.sibling=rt,ct=rt);return ft&&Ye(_,et),Z}for(Q=l(Q);!rt.done;et++,rt=S.next())rt=A(Q,_,et,rt.value,O),rt!==null&&(t&&rt.alternate!==null&&Q.delete(rt.key===null?et:rt.key),m=u(rt,m,et),ct===null?Z=rt:ct.sibling=rt,ct=rt);return t&&Q.forEach(function(ih){return e(_,ih)}),ft&&Ye(_,et),Z}function vt(_,m,S,O){if(typeof S=="object"&&S!==null&&S.type===V&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case w:t:{for(var Z=S.key;m!==null;){if(m.key===Z){if(Z=S.type,Z===V){if(m.tag===7){n(_,m.sibling),O=a(m,S.props.children),O.return=_,_=O;break t}}else if(m.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Ct&&Vn(Z)===m.type){n(_,m.sibling),O=a(m,S.props),aa(O,S),O.return=_,_=O;break t}n(_,m);break}else e(_,m);m=m.sibling}S.type===V?(O=Xn(S.props.children,_.mode,O,S.key),O.return=_,_=O):(O=uu(S.type,S.key,S.props,null,_.mode,O),aa(O,S),O.return=_,_=O)}return i(_);case W:t:{for(Z=S.key;m!==null;){if(m.key===Z)if(m.tag===4&&m.stateNode.containerInfo===S.containerInfo&&m.stateNode.implementation===S.implementation){n(_,m.sibling),O=a(m,S.children||[]),O.return=_,_=O;break t}else{n(_,m);break}else e(_,m);m=m.sibling}O=Ki(S,_.mode,O),O.return=_,_=O}return i(_);case Ct:return S=Vn(S),vt(_,m,S,O)}if(Te(S))return X(_,m,S,O);if(Wt(S)){if(Z=Wt(S),typeof Z!="function")throw Error(c(150));return S=Z.call(S),J(_,m,S,O)}if(typeof S.then=="function")return vt(_,m,ou(S),O);if(S.$$typeof===G)return vt(_,m,cu(_,S),O);hu(_,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,m!==null&&m.tag===6?(n(_,m.sibling),O=a(m,S),O.return=_,_=O):(n(_,m),O=Zi(S,_.mode,O),O.return=_,_=O),i(_)):n(_,m)}return function(_,m,S,O){try{la=0;var Z=vt(_,m,S,O);return _l=null,Z}catch(Q){if(Q===yl||Q===du)throw Q;var ct=fe(29,Q,null,_.mode);return ct.lanes=O,ct.return=_,ct}finally{}}}var Kn=cd(!0),rd=cd(!1),sn=!1;function af(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function on(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function hn(t,e,n){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(dt&2)!==0){var a=l.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),l.pending=e,e=au(t),Kr(t,null,n),e}return lu(t,l,e,n),au(t)}function ua(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,n|=l,e.lanes=n,tr(t,n)}}function ff(t,e){var n=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var i={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?a=u=i:u=u.next=i,n=n.next}while(n!==null);u===null?a=u=e:u=u.next=e}else a=u=e;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var cf=!1;function ia(){if(cf){var t=vl;if(t!==null)throw t}}function fa(t,e,n,l){cf=!1;var a=t.updateQueue;sn=!1;var u=a.firstBaseUpdate,i=a.lastBaseUpdate,r=a.shared.pending;if(r!==null){a.shared.pending=null;var p=r,j=p.next;p.next=null,i===null?u=j:i.next=j,i=p;var R=t.alternate;R!==null&&(R=R.updateQueue,r=R.lastBaseUpdate,r!==i&&(r===null?R.firstBaseUpdate=j:r.next=j,R.lastBaseUpdate=p))}if(u!==null){var N=a.baseState;i=0,R=j=p=null,r=u;do{var x=r.lane&-536870913,A=x!==r.lane;if(A?(ut&x)===x:(l&x)===x){x!==0&&x===gl&&(cf=!0),R!==null&&(R=R.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});t:{var X=t,J=r;x=e;var vt=n;switch(J.tag){case 1:if(X=J.payload,typeof X=="function"){N=X.call(vt,N,x);break t}N=X;break t;case 3:X.flags=X.flags&-65537|128;case 0:if(X=J.payload,x=typeof X=="function"?X.call(vt,N,x):X,x==null)break t;N=E({},N,x);break t;case 2:sn=!0}}x=r.callback,x!==null&&(t.flags|=64,A&&(t.flags|=8192),A=a.callbacks,A===null?a.callbacks=[x]:A.push(x))}else A={lane:x,tag:r.tag,payload:r.payload,callback:r.callback,next:null},R===null?(j=R=A,p=N):R=R.next=A,i|=x;if(r=r.next,r===null){if(r=a.shared.pending,r===null)break;A=r,r=A.next,A.next=null,a.lastBaseUpdate=A,a.shared.pending=null}}while(!0);R===null&&(p=N),a.baseState=p,a.firstBaseUpdate=j,a.lastBaseUpdate=R,u===null&&(a.shared.lanes=0),vn|=i,t.lanes=i,t.memoizedState=N}}function dd(t,e){if(typeof t!="function")throw Error(c(191,t));t.call(e)}function sd(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)dd(n[t],e)}var Sl=v(null),pu=v(0);function od(t,e){t=Ie,B(pu,t),B(Sl,e),Ie=t|e.baseLanes}function rf(){B(pu,Ie),B(Sl,Sl.current)}function df(){Ie=pu.current,D(Sl),D(pu)}var ce=v(null),Se=null;function pn(t){var e=t.alternate;B(Ut,Ut.current&1),B(ce,t),Se===null&&(e===null||Sl.current!==null||e.memoizedState!==null)&&(Se=t)}function sf(t){B(Ut,Ut.current),B(ce,t),Se===null&&(Se=t)}function hd(t){t.tag===22?(B(Ut,Ut.current),B(ce,t),Se===null&&(Se=t)):bn()}function bn(){B(Ut,Ut.current),B(ce,ce.current)}function re(t){D(ce),Se===t&&(Se=null),D(Ut)}var Ut=v(0);function bu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||gc(n)||vc(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ve=0,tt=null,mt=null,Dt=null,mu=!1,jl=!1,Jn=!1,gu=0,ca=0,xl=null,$2=0;function zt(){throw Error(c(321))}function of(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ie(t[n],e[n]))return!1;return!0}function hf(t,e,n,l,a,u){return Ve=u,tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,U.H=t===null||t.memoizedState===null?$d:Mf,Jn=!1,u=n(l,a),Jn=!1,jl&&(u=bd(e,n,l,a)),pd(t),u}function pd(t){U.H=sa;var e=mt!==null&&mt.next!==null;if(Ve=0,Dt=mt=tt=null,mu=!1,ca=0,xl=null,e)throw Error(c(300));t===null||Ht||(t=t.dependencies,t!==null&&fu(t)&&(Ht=!0))}function bd(t,e,n,l){tt=t;var a=0;do{if(jl&&(xl=null),ca=0,jl=!1,25<=a)throw Error(c(301));if(a+=1,Dt=mt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}U.H=Fd,u=e(n,l)}while(jl);return u}function F2(){var t=U.H,e=t.useState()[0];return e=typeof e.then=="function"?ra(e):e,t=t.useState()[0],(mt!==null?mt.memoizedState:null)!==t&&(tt.flags|=1024),e}function pf(){var t=gu!==0;return gu=0,t}function bf(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function mf(t){if(mu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}mu=!1}Ve=0,Dt=mt=tt=null,jl=!1,ca=gu=0,xl=null}function kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?tt.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Ot(){if(mt===null){var t=tt.alternate;t=t!==null?t.memoizedState:null}else t=mt.next;var e=Dt===null?tt.memoizedState:Dt.next;if(e!==null)Dt=e,mt=t;else{if(t===null)throw tt.alternate===null?Error(c(467)):Error(c(310));mt=t,t={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},Dt===null?tt.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function vu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ra(t){var e=ca;return ca+=1,xl===null&&(xl=[]),t=ud(xl,t,e),e=tt,(Dt===null?e.memoizedState:Dt.next)===null&&(e=e.alternate,U.H=e===null||e.memoizedState===null?$d:Mf),t}function yu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ra(t);if(t.$$typeof===G)return Qt(t)}throw Error(c(438,String(t)))}function gf(t){var e=null,n=tt.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var l=tt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=vu(),tt.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),l=0;l<t;l++)n[l]=he;return e.index++,n}function Ze(t,e){return typeof e=="function"?e(t):e}function _u(t){var e=Ot();return vf(e,mt,t)}function vf(t,e,n){var l=t.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=n;var a=t.baseQueue,u=l.pending;if(u!==null){if(a!==null){var i=a.next;a.next=u.next,u.next=i}e.baseQueue=a=u,l.pending=null}if(u=t.baseState,a===null)t.memoizedState=u;else{e=a.next;var r=i=null,p=null,j=e,R=!1;do{var N=j.lane&-536870913;if(N!==j.lane?(ut&N)===N:(Ve&N)===N){var x=j.revertLane;if(x===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),N===gl&&(R=!0);else if((Ve&x)===x){j=j.next,x===gl&&(R=!0);continue}else N={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},p===null?(r=p=N,i=u):p=p.next=N,tt.lanes|=x,vn|=x;N=j.action,Jn&&n(u,N),u=j.hasEagerState?j.eagerState:n(u,N)}else x={lane:N,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},p===null?(r=p=x,i=u):p=p.next=x,tt.lanes|=N,vn|=N;j=j.next}while(j!==null&&j!==e);if(p===null?i=u:p.next=r,!ie(u,t.memoizedState)&&(Ht=!0,R&&(n=vl,n!==null)))throw n;t.memoizedState=u,t.baseState=i,t.baseQueue=p,l.lastRenderedState=u}return a===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function yf(t){var e=Ot(),n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=t;var l=n.dispatch,a=n.pending,u=e.memoizedState;if(a!==null){n.pending=null;var i=a=a.next;do u=t(u,i.action),i=i.next;while(i!==a);ie(u,e.memoizedState)||(Ht=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),n.lastRenderedState=u}return[u,l]}function md(t,e,n){var l=tt,a=Ot(),u=ft;if(u){if(n===void 0)throw Error(c(407));n=n()}else n=e();var i=!ie((mt||a).memoizedState,n);if(i&&(a.memoizedState=n,Ht=!0),a=a.queue,jf(yd.bind(null,l,a,t),[t]),a.getSnapshot!==e||i||Dt!==null&&Dt.memoizedState.tag&1){if(l.flags|=2048,El(9,{destroy:void 0},vd.bind(null,l,a,n,e),null),St===null)throw Error(c(349));u||(Ve&127)!==0||gd(l,e,n)}return n}function gd(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=tt.updateQueue,e===null?(e=vu(),tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function vd(t,e,n,l){e.value=n,e.getSnapshot=l,_d(e)&&Sd(t)}function yd(t,e,n){return n(function(){_d(e)&&Sd(t)})}function _d(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ie(t,n)}catch{return!0}}function Sd(t){var e=Gn(t,2);e!==null&&ne(e,t,2)}function _f(t){var e=kt();if(typeof t=="function"){var n=t;if(t=n(),Jn){ln(!0);try{n()}finally{ln(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ze,lastRenderedState:t},e}function jd(t,e,n,l){return t.baseState=n,vf(t,mt,typeof l=="function"?l:Ze)}function I2(t,e,n,l,a){if(xu(t))throw Error(c(485));if(t=e.action,t!==null){var u={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};U.T!==null?n(!0):u.isTransition=!1,l(u),n=e.pending,n===null?(u.next=e.pending=u,xd(e,u)):(u.next=n.next,e.pending=n.next=u)}}function xd(t,e){var n=e.action,l=e.payload,a=t.state;if(e.isTransition){var u=U.T,i={};U.T=i;try{var r=n(a,l),p=U.S;p!==null&&p(i,r),Ed(t,e,r)}catch(j){Sf(t,e,j)}finally{u!==null&&i.types!==null&&(u.types=i.types),U.T=u}}else try{u=n(a,l),Ed(t,e,u)}catch(j){Sf(t,e,j)}}function Ed(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){Td(t,e,l)},function(l){return Sf(t,e,l)}):Td(t,e,n)}function Td(t,e,n){e.status="fulfilled",e.value=n,Ad(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,xd(t,n)))}function Sf(t,e,n){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=n,Ad(e),e=e.next;while(e!==l)}t.action=null}function Ad(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function zd(t,e){return e}function Md(t,e){if(ft){var n=St.formState;if(n!==null){t:{var l=tt;if(ft){if(jt){e:{for(var a=jt,u=_e;a.nodeType!==8;){if(!u){a=null;break e}if(a=je(a.nextSibling),a===null){a=null;break e}}u=a.data,a=u==="F!"||u==="F"?a:null}if(a){jt=je(a.nextSibling),l=a.data==="F!";break t}}rn(l)}l=!1}l&&(e=n[0])}}return n=kt(),n.memoizedState=n.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zd,lastRenderedState:e},n.queue=l,n=Jd.bind(null,tt,l),l.dispatch=n,l=_f(!1),u=zf.bind(null,tt,!1,l.queue),l=kt(),a={state:e,dispatch:null,action:t,pending:null},l.queue=a,n=I2.bind(null,tt,a,u,n),a.dispatch=n,l.memoizedState=t,[e,n,!1]}function Cd(t){var e=Ot();return Rd(e,mt,t)}function Rd(t,e,n){if(e=vf(t,e,zd)[0],t=_u(Ze)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=ra(e)}catch(i){throw i===yl?du:i}else l=e;e=Ot();var a=e.queue,u=a.dispatch;return n!==e.memoizedState&&(tt.flags|=2048,El(9,{destroy:void 0},P2.bind(null,a,n),null)),[l,u,t]}function P2(t,e){t.action=e}function Ud(t){var e=Ot(),n=mt;if(n!==null)return Rd(e,n,t);Ot(),e=e.memoizedState,n=Ot();var l=n.queue.dispatch;return n.memoizedState=t,[e,l,!1]}function El(t,e,n,l){return t={tag:t,create:n,deps:l,inst:e,next:null},e=tt.updateQueue,e===null&&(e=vu(),tt.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(l=n.next,n.next=t,t.next=l,e.lastEffect=t),t}function Od(){return Ot().memoizedState}function Su(t,e,n,l){var a=kt();tt.flags|=t,a.memoizedState=El(1|e,{destroy:void 0},n,l===void 0?null:l)}function ju(t,e,n,l){var a=Ot();l=l===void 0?null:l;var u=a.memoizedState.inst;mt!==null&&l!==null&&of(l,mt.memoizedState.deps)?a.memoizedState=El(e,u,n,l):(tt.flags|=t,a.memoizedState=El(1|e,u,n,l))}function Nd(t,e){Su(8390656,8,t,e)}function jf(t,e){ju(2048,8,t,e)}function t1(t){tt.flags|=4;var e=tt.updateQueue;if(e===null)e=vu(),tt.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function Dd(t){var e=Ot().memoizedState;return t1({ref:e,nextImpl:t}),function(){if((dt&2)!==0)throw Error(c(440));return e.impl.apply(void 0,arguments)}}function Hd(t,e){return ju(4,2,t,e)}function Ld(t,e){return ju(4,4,t,e)}function Bd(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Gd(t,e,n){n=n!=null?n.concat([t]):null,ju(4,4,Bd.bind(null,e,t),n)}function xf(){}function Xd(t,e){var n=Ot();e=e===void 0?null:e;var l=n.memoizedState;return e!==null&&of(e,l[1])?l[0]:(n.memoizedState=[t,e],t)}function qd(t,e){var n=Ot();e=e===void 0?null:e;var l=n.memoizedState;if(e!==null&&of(e,l[1]))return l[0];if(l=t(),Jn){ln(!0);try{t()}finally{ln(!1)}}return n.memoizedState=[l,e],l}function Ef(t,e,n){return n===void 0||(Ve&1073741824)!==0&&(ut&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=Ys(),tt.lanes|=t,vn|=t,n)}function Yd(t,e,n,l){return ie(n,e)?n:Sl.current!==null?(t=Ef(t,n,l),ie(t,e)||(Ht=!0),t):(Ve&42)===0||(Ve&1073741824)!==0&&(ut&261930)===0?(Ht=!0,t.memoizedState=n):(t=Ys(),tt.lanes|=t,vn|=t,e)}function wd(t,e,n,l,a){var u=L.p;L.p=u!==0&&8>u?u:8;var i=U.T,r={};U.T=r,zf(t,!1,e,n);try{var p=a(),j=U.S;if(j!==null&&j(r,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var R=W2(p,l);da(t,e,R,oe(t))}else da(t,e,l,oe(t))}catch(N){da(t,e,{then:function(){},status:"rejected",reason:N},oe())}finally{L.p=u,i!==null&&r.types!==null&&(i.types=r.types),U.T=i}}function e1(){}function Tf(t,e,n,l){if(t.tag!==5)throw Error(c(476));var a=Qd(t).queue;wd(t,a,e,k,n===null?e1:function(){return Vd(t),n(l)})}function Qd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ze,lastRenderedState:k},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ze,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Vd(t){var e=Qd(t);e.next===null&&(e=t.alternate.memoizedState),da(t,e.next.queue,{},oe())}function Af(){return Qt(za)}function Zd(){return Ot().memoizedState}function Kd(){return Ot().memoizedState}function n1(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=oe();t=on(n);var l=hn(e,t,n);l!==null&&(ne(l,e,n),ua(l,e,n)),e={cache:tf()},t.payload=e;return}e=e.return}}function l1(t,e,n){var l=oe();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},xu(t)?kd(e,n):(n=Qi(t,e,n,l),n!==null&&(ne(n,t,l),Wd(n,e,l)))}function Jd(t,e,n){var l=oe();da(t,e,n,l)}function da(t,e,n,l){var a={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(xu(t))kd(e,a);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var i=e.lastRenderedState,r=u(i,n);if(a.hasEagerState=!0,a.eagerState=r,ie(r,i))return lu(t,e,a,0),St===null&&nu(),!1}catch{}finally{}if(n=Qi(t,e,a,l),n!==null)return ne(n,t,l),Wd(n,e,l),!0}return!1}function zf(t,e,n,l){if(l={lane:2,revertLane:uc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},xu(t)){if(e)throw Error(c(479))}else e=Qi(t,n,l,2),e!==null&&ne(e,t,2)}function xu(t){var e=t.alternate;return t===tt||e!==null&&e===tt}function kd(t,e){jl=mu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Wd(t,e,n){if((n&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,n|=l,e.lanes=n,tr(t,n)}}var sa={readContext:Qt,use:yu,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useLayoutEffect:zt,useInsertionEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useSyncExternalStore:zt,useId:zt,useHostTransitionStatus:zt,useFormState:zt,useActionState:zt,useOptimistic:zt,useMemoCache:zt,useCacheRefresh:zt};sa.useEffectEvent=zt;var $d={readContext:Qt,use:yu,useCallback:function(t,e){return kt().memoizedState=[t,e===void 0?null:e],t},useContext:Qt,useEffect:Nd,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Su(4194308,4,Bd.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Su(4194308,4,t,e)},useInsertionEffect:function(t,e){Su(4,2,t,e)},useMemo:function(t,e){var n=kt();e=e===void 0?null:e;var l=t();if(Jn){ln(!0);try{t()}finally{ln(!1)}}return n.memoizedState=[l,e],l},useReducer:function(t,e,n){var l=kt();if(n!==void 0){var a=n(e);if(Jn){ln(!0);try{n(e)}finally{ln(!1)}}}else a=e;return l.memoizedState=l.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},l.queue=t,t=t.dispatch=l1.bind(null,tt,t),[l.memoizedState,t]},useRef:function(t){var e=kt();return t={current:t},e.memoizedState=t},useState:function(t){t=_f(t);var e=t.queue,n=Jd.bind(null,tt,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:xf,useDeferredValue:function(t,e){var n=kt();return Ef(n,t,e)},useTransition:function(){var t=_f(!1);return t=wd.bind(null,tt,t.queue,!0,!1),kt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var l=tt,a=kt();if(ft){if(n===void 0)throw Error(c(407));n=n()}else{if(n=e(),St===null)throw Error(c(349));(ut&127)!==0||gd(l,e,n)}a.memoizedState=n;var u={value:n,getSnapshot:e};return a.queue=u,Nd(yd.bind(null,l,u,t),[t]),l.flags|=2048,El(9,{destroy:void 0},vd.bind(null,l,u,n,e),null),n},useId:function(){var t=kt(),e=St.identifierPrefix;if(ft){var n=Oe,l=Ue;n=(l&~(1<<32-ue(l)-1)).toString(32)+n,e="_"+e+"R_"+n,n=gu++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=$2++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Af,useFormState:Md,useActionState:Md,useOptimistic:function(t){var e=kt();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=zf.bind(null,tt,!0,n),n.dispatch=e,[t,e]},useMemoCache:gf,useCacheRefresh:function(){return kt().memoizedState=n1.bind(null,tt)},useEffectEvent:function(t){var e=kt(),n={impl:t};return e.memoizedState=n,function(){if((dt&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},Mf={readContext:Qt,use:yu,useCallback:Xd,useContext:Qt,useEffect:jf,useImperativeHandle:Gd,useInsertionEffect:Hd,useLayoutEffect:Ld,useMemo:qd,useReducer:_u,useRef:Od,useState:function(){return _u(Ze)},useDebugValue:xf,useDeferredValue:function(t,e){var n=Ot();return Yd(n,mt.memoizedState,t,e)},useTransition:function(){var t=_u(Ze)[0],e=Ot().memoizedState;return[typeof t=="boolean"?t:ra(t),e]},useSyncExternalStore:md,useId:Zd,useHostTransitionStatus:Af,useFormState:Cd,useActionState:Cd,useOptimistic:function(t,e){var n=Ot();return jd(n,mt,t,e)},useMemoCache:gf,useCacheRefresh:Kd};Mf.useEffectEvent=Dd;var Fd={readContext:Qt,use:yu,useCallback:Xd,useContext:Qt,useEffect:jf,useImperativeHandle:Gd,useInsertionEffect:Hd,useLayoutEffect:Ld,useMemo:qd,useReducer:yf,useRef:Od,useState:function(){return yf(Ze)},useDebugValue:xf,useDeferredValue:function(t,e){var n=Ot();return mt===null?Ef(n,t,e):Yd(n,mt.memoizedState,t,e)},useTransition:function(){var t=yf(Ze)[0],e=Ot().memoizedState;return[typeof t=="boolean"?t:ra(t),e]},useSyncExternalStore:md,useId:Zd,useHostTransitionStatus:Af,useFormState:Ud,useActionState:Ud,useOptimistic:function(t,e){var n=Ot();return mt!==null?jd(n,mt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:gf,useCacheRefresh:Kd};Fd.useEffectEvent=Dd;function Cf(t,e,n,l){e=t.memoizedState,n=n(l,e),n=n==null?e:E({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Rf={enqueueSetState:function(t,e,n){t=t._reactInternals;var l=oe(),a=on(l);a.payload=e,n!=null&&(a.callback=n),e=hn(t,a,l),e!==null&&(ne(e,t,l),ua(e,t,l))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var l=oe(),a=on(l);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=hn(t,a,l),e!==null&&(ne(e,t,l),ua(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=oe(),l=on(n);l.tag=2,e!=null&&(l.callback=e),e=hn(t,l,n),e!==null&&(ne(e,t,n),ua(e,t,n))}};function Id(t,e,n,l,a,u,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,u,i):e.prototype&&e.prototype.isPureReactComponent?!Fl(n,l)||!Fl(a,u):!0}function Pd(t,e,n,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,l),e.state!==t&&Rf.enqueueReplaceState(e,e.state,null)}function kn(t,e){var n=e;if("ref"in e){n={};for(var l in e)l!=="ref"&&(n[l]=e[l])}if(t=t.defaultProps){n===e&&(n=E({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}function ts(t){eu(t)}function es(t){console.error(t)}function ns(t){eu(t)}function Eu(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function ls(t,e,n){try{var l=t.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Uf(t,e,n){return n=on(n),n.tag=3,n.payload={element:null},n.callback=function(){Eu(t,e)},n}function as(t){return t=on(t),t.tag=3,t}function us(t,e,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var u=l.value;t.payload=function(){return a(u)},t.callback=function(){ls(e,n,l)}}var i=n.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){ls(e,n,l),typeof a!="function"&&(yn===null?yn=new Set([this]):yn.add(this));var r=l.stack;this.componentDidCatch(l.value,{componentStack:r!==null?r:""})})}function a1(t,e,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=n.alternate,e!==null&&ml(e,n,a,!0),n=ce.current,n!==null){switch(n.tag){case 31:case 13:return Se===null?Lu():n.alternate===null&&Mt===0&&(Mt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===su?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([l]):e.add(l),nc(t,l,a)),!1;case 22:return n.flags|=65536,l===su?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([l]):n.add(l)),nc(t,l,a)),!1}throw Error(c(435,n.tag))}return nc(t,l,a),Lu(),!1}if(ft)return e=ce.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=a,l!==Wi&&(t=Error(c(422),{cause:l}),ta(ge(t,n)))):(l!==Wi&&(e=Error(c(423),{cause:l}),ta(ge(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,l=ge(l,n),a=Uf(t.stateNode,l,a),ff(t,a),Mt!==4&&(Mt=2)),!1;var u=Error(c(520),{cause:l});if(u=ge(u,n),ya===null?ya=[u]:ya.push(u),Mt!==4&&(Mt=2),e===null)return!0;l=ge(l,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=Uf(n.stateNode,l,t),ff(n,t),!1;case 1:if(e=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(yn===null||!yn.has(u))))return n.flags|=65536,a&=-a,n.lanes|=a,a=as(a),us(a,t,n,l),ff(n,a),!1}n=n.return}while(n!==null);return!1}var Of=Error(c(461)),Ht=!1;function Vt(t,e,n,l){e.child=t===null?rd(e,null,n,l):Kn(e,t.child,n,l)}function is(t,e,n,l,a){n=n.render;var u=e.ref;if("ref"in l){var i={};for(var r in l)r!=="ref"&&(i[r]=l[r])}else i=l;return wn(e),l=hf(t,e,n,i,u,a),r=pf(),t!==null&&!Ht?(bf(t,e,a),Ke(t,e,a)):(ft&&r&&Ji(e),e.flags|=1,Vt(t,e,l,a),e.child)}function fs(t,e,n,l,a){if(t===null){var u=n.type;return typeof u=="function"&&!Vi(u)&&u.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=u,cs(t,e,u,l,a)):(t=uu(n.type,null,l,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!qf(t,a)){var i=u.memoizedProps;if(n=n.compare,n=n!==null?n:Fl,n(i,l)&&t.ref===e.ref)return Ke(t,e,a)}return e.flags|=1,t=qe(u,l),t.ref=e.ref,t.return=e,e.child=t}function cs(t,e,n,l,a){if(t!==null){var u=t.memoizedProps;if(Fl(u,l)&&t.ref===e.ref)if(Ht=!1,e.pendingProps=l=u,qf(t,a))(t.flags&131072)!==0&&(Ht=!0);else return e.lanes=t.lanes,Ke(t,e,a)}return Nf(t,e,n,l,a)}function rs(t,e,n,l){var a=l.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,t!==null){for(l=e.child=t.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~u}else l=0,e.child=null;return ds(t,e,u,n,l)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ru(e,u!==null?u.cachePool:null),u!==null?od(e,u):rf(),hd(e);else return l=e.lanes=536870912,ds(t,e,u!==null?u.baseLanes|n:n,n,l)}else u!==null?(ru(e,u.cachePool),od(e,u),bn(),e.memoizedState=null):(t!==null&&ru(e,null),rf(),bn());return Vt(t,e,a,n),e.child}function oa(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function ds(t,e,n,l,a){var u=nf();return u=u===null?null:{parent:Nt._currentValue,pool:u},e.memoizedState={baseLanes:n,cachePool:u},t!==null&&ru(e,null),rf(),hd(e),t!==null&&ml(t,e,l,!0),e.childLanes=a,null}function Tu(t,e){return e=zu({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function ss(t,e,n){return Kn(e,t.child,null,n),t=Tu(e,e.pendingProps),t.flags|=2,re(e),e.memoizedState=null,t}function u1(t,e,n){var l=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(ft){if(l.mode==="hidden")return t=Tu(e,l),e.lanes=536870912,oa(null,t);if(sf(e),(t=jt)?(t=Eo(t,_e),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:fn!==null?{id:Ue,overflow:Oe}:null,retryLane:536870912,hydrationErrors:null},n=kr(t),n.return=e,e.child=n,wt=e,jt=null)):t=null,t===null)throw rn(e);return e.lanes=536870912,null}return Tu(e,l)}var u=t.memoizedState;if(u!==null){var i=u.dehydrated;if(sf(e),a)if(e.flags&256)e.flags&=-257,e=ss(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(c(558));else if(Ht||ml(t,e,n,!1),a=(n&t.childLanes)!==0,Ht||a){if(l=St,l!==null&&(i=er(l,n),i!==0&&i!==u.retryLane))throw u.retryLane=i,Gn(t,i),ne(l,t,i),Of;Lu(),e=ss(t,e,n)}else t=u.treeContext,jt=je(i.nextSibling),wt=e,ft=!0,cn=null,_e=!1,t!==null&&Fr(e,t),e=Tu(e,l),e.flags|=4096;return e}return t=qe(t.child,{mode:l.mode,children:l.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Au(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Nf(t,e,n,l,a){return wn(e),n=hf(t,e,n,l,void 0,a),l=pf(),t!==null&&!Ht?(bf(t,e,a),Ke(t,e,a)):(ft&&l&&Ji(e),e.flags|=1,Vt(t,e,n,a),e.child)}function os(t,e,n,l,a,u){return wn(e),e.updateQueue=null,n=bd(e,l,n,a),pd(t),l=pf(),t!==null&&!Ht?(bf(t,e,u),Ke(t,e,u)):(ft&&l&&Ji(e),e.flags|=1,Vt(t,e,n,u),e.child)}function hs(t,e,n,l,a){if(wn(e),e.stateNode===null){var u=ol,i=n.contextType;typeof i=="object"&&i!==null&&(u=Qt(i)),u=new n(l,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Rf,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=l,u.state=e.memoizedState,u.refs={},af(e),i=n.contextType,u.context=typeof i=="object"&&i!==null?Qt(i):ol,u.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Cf(e,n,i,l),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&Rf.enqueueReplaceState(u,u.state,null),fa(e,l,u,a),ia(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){u=e.stateNode;var r=e.memoizedProps,p=kn(n,r);u.props=p;var j=u.context,R=n.contextType;i=ol,typeof R=="object"&&R!==null&&(i=Qt(R));var N=n.getDerivedStateFromProps;R=typeof N=="function"||typeof u.getSnapshotBeforeUpdate=="function",r=e.pendingProps!==r,R||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(r||j!==i)&&Pd(e,u,l,i),sn=!1;var x=e.memoizedState;u.state=x,fa(e,l,u,a),ia(),j=e.memoizedState,r||x!==j||sn?(typeof N=="function"&&(Cf(e,n,N,l),j=e.memoizedState),(p=sn||Id(e,n,p,l,x,j,i))?(R||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=j),u.props=l,u.state=j,u.context=i,l=p):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{u=e.stateNode,uf(t,e),i=e.memoizedProps,R=kn(n,i),u.props=R,N=e.pendingProps,x=u.context,j=n.contextType,p=ol,typeof j=="object"&&j!==null&&(p=Qt(j)),r=n.getDerivedStateFromProps,(j=typeof r=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==N||x!==p)&&Pd(e,u,l,p),sn=!1,x=e.memoizedState,u.state=x,fa(e,l,u,a),ia();var A=e.memoizedState;i!==N||x!==A||sn||t!==null&&t.dependencies!==null&&fu(t.dependencies)?(typeof r=="function"&&(Cf(e,n,r,l),A=e.memoizedState),(R=sn||Id(e,n,R,l,x,A,p)||t!==null&&t.dependencies!==null&&fu(t.dependencies))?(j||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,A,p),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,A,p)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&x===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&x===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=A),u.props=l,u.state=A,u.context=p,l=R):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&x===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&x===t.memoizedState||(e.flags|=1024),l=!1)}return u=l,Au(t,e),l=(e.flags&128)!==0,u||l?(u=e.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&l?(e.child=Kn(e,t.child,null,a),e.child=Kn(e,null,n,a)):Vt(t,e,n,a),e.memoizedState=u.state,t=e.child):t=Ke(t,e,a),t}function ps(t,e,n,l){return qn(),e.flags|=256,Vt(t,e,n,l),e.child}var Df={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hf(t){return{baseLanes:t,cachePool:ld()}}function Lf(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=se),t}function bs(t,e,n){var l=e.pendingProps,a=!1,u=(e.flags&128)!==0,i;if((i=u)||(i=t!==null&&t.memoizedState===null?!1:(Ut.current&2)!==0),i&&(a=!0,e.flags&=-129),i=(e.flags&32)!==0,e.flags&=-33,t===null){if(ft){if(a?pn(e):bn(),(t=jt)?(t=Eo(t,_e),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:fn!==null?{id:Ue,overflow:Oe}:null,retryLane:536870912,hydrationErrors:null},n=kr(t),n.return=e,e.child=n,wt=e,jt=null)):t=null,t===null)throw rn(e);return vc(t)?e.lanes=32:e.lanes=536870912,null}var r=l.children;return l=l.fallback,a?(bn(),a=e.mode,r=zu({mode:"hidden",children:r},a),l=Xn(l,a,n,null),r.return=e,l.return=e,r.sibling=l,e.child=r,l=e.child,l.memoizedState=Hf(n),l.childLanes=Lf(t,i,n),e.memoizedState=Df,oa(null,l)):(pn(e),Bf(e,r))}var p=t.memoizedState;if(p!==null&&(r=p.dehydrated,r!==null)){if(u)e.flags&256?(pn(e),e.flags&=-257,e=Gf(t,e,n)):e.memoizedState!==null?(bn(),e.child=t.child,e.flags|=128,e=null):(bn(),r=l.fallback,a=e.mode,l=zu({mode:"visible",children:l.children},a),r=Xn(r,a,n,null),r.flags|=2,l.return=e,r.return=e,l.sibling=r,e.child=l,Kn(e,t.child,null,n),l=e.child,l.memoizedState=Hf(n),l.childLanes=Lf(t,i,n),e.memoizedState=Df,e=oa(null,l));else if(pn(e),vc(r)){if(i=r.nextSibling&&r.nextSibling.dataset,i)var j=i.dgst;i=j,l=Error(c(419)),l.stack="",l.digest=i,ta({value:l,source:null,stack:null}),e=Gf(t,e,n)}else if(Ht||ml(t,e,n,!1),i=(n&t.childLanes)!==0,Ht||i){if(i=St,i!==null&&(l=er(i,n),l!==0&&l!==p.retryLane))throw p.retryLane=l,Gn(t,l),ne(i,t,l),Of;gc(r)||Lu(),e=Gf(t,e,n)}else gc(r)?(e.flags|=192,e.child=t.child,e=null):(t=p.treeContext,jt=je(r.nextSibling),wt=e,ft=!0,cn=null,_e=!1,t!==null&&Fr(e,t),e=Bf(e,l.children),e.flags|=4096);return e}return a?(bn(),r=l.fallback,a=e.mode,p=t.child,j=p.sibling,l=qe(p,{mode:"hidden",children:l.children}),l.subtreeFlags=p.subtreeFlags&65011712,j!==null?r=qe(j,r):(r=Xn(r,a,n,null),r.flags|=2),r.return=e,l.return=e,l.sibling=r,e.child=l,oa(null,l),l=e.child,r=t.child.memoizedState,r===null?r=Hf(n):(a=r.cachePool,a!==null?(p=Nt._currentValue,a=a.parent!==p?{parent:p,pool:p}:a):a=ld(),r={baseLanes:r.baseLanes|n,cachePool:a}),l.memoizedState=r,l.childLanes=Lf(t,i,n),e.memoizedState=Df,oa(t.child,l)):(pn(e),n=t.child,t=n.sibling,n=qe(n,{mode:"visible",children:l.children}),n.return=e,n.sibling=null,t!==null&&(i=e.deletions,i===null?(e.deletions=[t],e.flags|=16):i.push(t)),e.child=n,e.memoizedState=null,n)}function Bf(t,e){return e=zu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function zu(t,e){return t=fe(22,t,null,e),t.lanes=0,t}function Gf(t,e,n){return Kn(e,t.child,null,n),t=Bf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ms(t,e,n){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),Ii(t.return,e,n)}function Xf(t,e,n,l,a,u){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a,treeForkCount:u}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=n,i.tailMode=a,i.treeForkCount=u)}function gs(t,e,n){var l=e.pendingProps,a=l.revealOrder,u=l.tail;l=l.children;var i=Ut.current,r=(i&2)!==0;if(r?(i=i&1|2,e.flags|=128):i&=1,B(Ut,i),Vt(t,e,l,n),l=ft?Pl:0,!r&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ms(t,n,e);else if(t.tag===19)ms(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&bu(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),Xf(e,!1,a,n,u,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&bu(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}Xf(e,!0,n,null,u,l);break;case"together":Xf(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function Ke(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vn|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(ml(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(c(153));if(e.child!==null){for(t=e.child,n=qe(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=qe(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function qf(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&fu(t)))}function i1(t,e,n){switch(e.tag){case 3:Jt(e,e.stateNode.containerInfo),dn(e,Nt,t.memoizedState.cache),qn();break;case 27:case 5:Gl(e);break;case 4:Jt(e,e.stateNode.containerInfo);break;case 10:dn(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,sf(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(pn(e),e.flags|=128,null):(n&e.child.childLanes)!==0?bs(t,e,n):(pn(e),t=Ke(t,e,n),t!==null?t.sibling:null);pn(e);break;case 19:var a=(t.flags&128)!==0;if(l=(n&e.childLanes)!==0,l||(ml(t,e,n,!1),l=(n&e.childLanes)!==0),a){if(l)return gs(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),B(Ut,Ut.current),l)break;return null;case 22:return e.lanes=0,rs(t,e,n,e.pendingProps);case 24:dn(e,Nt,t.memoizedState.cache)}return Ke(t,e,n)}function vs(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Ht=!0;else{if(!qf(t,n)&&(e.flags&128)===0)return Ht=!1,i1(t,e,n);Ht=(t.flags&131072)!==0}else Ht=!1,ft&&(e.flags&1048576)!==0&&$r(e,Pl,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=Vn(e.elementType),e.type=t,typeof t=="function")Vi(t)?(l=kn(t,l),e.tag=1,e=hs(null,e,t,l,n)):(e.tag=0,e=Nf(null,e,t,l,n));else{if(t!=null){var a=t.$$typeof;if(a===yt){e.tag=11,e=is(null,e,t,l,n);break t}else if(a===I){e.tag=14,e=fs(null,e,t,l,n);break t}}throw e=Le(t)||t,Error(c(306,e,""))}}return e;case 0:return Nf(t,e,e.type,e.pendingProps,n);case 1:return l=e.type,a=kn(l,e.pendingProps),hs(t,e,l,a,n);case 3:t:{if(Jt(e,e.stateNode.containerInfo),t===null)throw Error(c(387));l=e.pendingProps;var u=e.memoizedState;a=u.element,uf(t,e),fa(e,l,null,n);var i=e.memoizedState;if(l=i.cache,dn(e,Nt,l),l!==u.cache&&Pi(e,[Nt],n,!0),ia(),l=i.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:i.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=ps(t,e,l,n);break t}else if(l!==a){a=ge(Error(c(424)),e),ta(a),e=ps(t,e,l,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(jt=je(t.firstChild),wt=e,ft=!0,cn=null,_e=!0,n=rd(e,null,l,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(qn(),l===a){e=Ke(t,e,n);break t}Vt(t,e,l,n)}e=e.child}return e;case 26:return Au(t,e),t===null?(n=Ro(e.type,null,e.pendingProps,null))?e.memoizedState=n:ft||(n=e.type,t=e.pendingProps,l=Qu(nt.current).createElement(n),l[Yt]=e,l[$t]=t,Zt(l,n,t),Gt(l),e.stateNode=l):e.memoizedState=Ro(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Gl(e),t===null&&ft&&(l=e.stateNode=zo(e.type,e.pendingProps,nt.current),wt=e,_e=!0,a=jt,xn(e.type)?(yc=a,jt=je(l.firstChild)):jt=a),Vt(t,e,e.pendingProps.children,n),Au(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&ft&&((a=l=jt)&&(l=L1(l,e.type,e.pendingProps,_e),l!==null?(e.stateNode=l,wt=e,jt=je(l.firstChild),_e=!1,a=!0):a=!1),a||rn(e)),Gl(e),a=e.type,u=e.pendingProps,i=t!==null?t.memoizedProps:null,l=u.children,pc(a,u)?l=null:i!==null&&pc(a,i)&&(e.flags|=32),e.memoizedState!==null&&(a=hf(t,e,F2,null,null,n),za._currentValue=a),Au(t,e),Vt(t,e,l,n),e.child;case 6:return t===null&&ft&&((t=n=jt)&&(n=B1(n,e.pendingProps,_e),n!==null?(e.stateNode=n,wt=e,jt=null,t=!0):t=!1),t||rn(e)),null;case 13:return bs(t,e,n);case 4:return Jt(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=Kn(e,null,l,n):Vt(t,e,l,n),e.child;case 11:return is(t,e,e.type,e.pendingProps,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:return l=e.pendingProps,dn(e,e.type,l.value),Vt(t,e,l.children,n),e.child;case 9:return a=e.type._context,l=e.pendingProps.children,wn(e),a=Qt(a),l=l(a),e.flags|=1,Vt(t,e,l,n),e.child;case 14:return fs(t,e,e.type,e.pendingProps,n);case 15:return cs(t,e,e.type,e.pendingProps,n);case 19:return gs(t,e,n);case 31:return u1(t,e,n);case 22:return rs(t,e,n,e.pendingProps);case 24:return wn(e),l=Qt(Nt),t===null?(a=nf(),a===null&&(a=St,u=tf(),a.pooledCache=u,u.refCount++,u!==null&&(a.pooledCacheLanes|=n),a=u),e.memoizedState={parent:l,cache:a},af(e),dn(e,Nt,a)):((t.lanes&n)!==0&&(uf(t,e),fa(e,null,null,n),ia()),a=t.memoizedState,u=e.memoizedState,a.parent!==l?(a={parent:l,cache:l},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),dn(e,Nt,l)):(l=u.cache,dn(e,Nt,l),l!==a.cache&&Pi(e,[Nt],n,!0))),Vt(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(c(156,e.tag))}function Je(t){t.flags|=4}function Yf(t,e,n,l,a){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(Zs())t.flags|=8192;else throw Zn=su,lf}else t.flags&=-16777217}function ys(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ho(e))if(Zs())t.flags|=8192;else throw Zn=su,lf}function Mu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Ic():536870912,t.lanes|=e,Ml|=e)}function ha(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,l=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=l,t.childLanes=n,e}function f1(t,e,n){var l=e.pendingProps;switch(ki(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(e),null;case 1:return xt(e),null;case 3:return n=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Qe(Nt),Rt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(bl(e)?Je(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,$i())),xt(e),null;case 26:var a=e.type,u=e.memoizedState;return t===null?(Je(e),u!==null?(xt(e),ys(e,u)):(xt(e),Yf(e,a,null,l,n))):u?u!==t.memoizedState?(Je(e),xt(e),ys(e,u)):(xt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&Je(e),xt(e),Yf(e,a,t,l,n)),null;case 27:if(Xa(e),n=nt.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Je(e);else{if(!l){if(e.stateNode===null)throw Error(c(166));return xt(e),null}t=Y.current,bl(e)?Ir(e):(t=zo(a,l,n),e.stateNode=t,Je(e))}return xt(e),null;case 5:if(Xa(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Je(e);else{if(!l){if(e.stateNode===null)throw Error(c(166));return xt(e),null}if(u=Y.current,bl(e))Ir(e);else{var i=Qu(nt.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof l.is=="string"?i.createElement("select",{is:l.is}):i.createElement("select"),l.multiple?u.multiple=!0:l.size&&(u.size=l.size);break;default:u=typeof l.is=="string"?i.createElement(a,{is:l.is}):i.createElement(a)}}u[Yt]=e,u[$t]=l;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=u;t:switch(Zt(u,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Je(e)}}return xt(e),Yf(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&Je(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(c(166));if(t=nt.current,bl(e)){if(t=e.stateNode,n=e.memoizedProps,l=null,a=wt,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}t[Yt]=e,t=!!(t.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||mo(t.nodeValue,n)),t||rn(e,!0)}else t=Qu(t).createTextNode(l),t[Yt]=e,e.stateNode=t}return xt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(l=bl(e),n!==null){if(t===null){if(!l)throw Error(c(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(557));t[Yt]=e}else qn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;xt(e),t=!1}else n=$i(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(re(e),e):(re(e),null);if((e.flags&128)!==0)throw Error(c(558))}return xt(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=bl(e),l!==null&&l.dehydrated!==null){if(t===null){if(!a)throw Error(c(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(c(317));a[Yt]=e}else qn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;xt(e),a=!1}else a=$i(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(re(e),e):(re(e),null)}return re(e),(e.flags&128)!==0?(e.lanes=n,e):(n=l!==null,t=t!==null&&t.memoizedState!==null,n&&(l=e.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),u=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==a&&(l.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),Mu(e,e.updateQueue),xt(e),null);case 4:return Rt(),t===null&&rc(e.stateNode.containerInfo),xt(e),null;case 10:return Qe(e.type),xt(e),null;case 19:if(D(Ut),l=e.memoizedState,l===null)return xt(e),null;if(a=(e.flags&128)!==0,u=l.rendering,u===null)if(a)ha(l,!1);else{if(Mt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=bu(t),u!==null){for(e.flags|=128,ha(l,!1),t=u.updateQueue,e.updateQueue=t,Mu(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)Jr(n,t),n=n.sibling;return B(Ut,Ut.current&1|2),ft&&Ye(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&le()>Nu&&(e.flags|=128,a=!0,ha(l,!1),e.lanes=4194304)}else{if(!a)if(t=bu(u),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Mu(e,t),ha(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!ft)return xt(e),null}else 2*le()-l.renderingStartTime>Nu&&n!==536870912&&(e.flags|=128,a=!0,ha(l,!1),e.lanes=4194304);l.isBackwards?(u.sibling=e.child,e.child=u):(t=l.last,t!==null?t.sibling=u:e.child=u,l.last=u)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=le(),t.sibling=null,n=Ut.current,B(Ut,a?n&1|2:n&1),ft&&Ye(e,l.treeForkCount),t):(xt(e),null);case 22:case 23:return re(e),df(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(n&536870912)!==0&&(e.flags&128)===0&&(xt(e),e.subtreeFlags&6&&(e.flags|=8192)):xt(e),n=e.updateQueue,n!==null&&Mu(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==n&&(e.flags|=2048),t!==null&&D(Qn),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Qe(Nt),xt(e),null;case 25:return null;case 30:return null}throw Error(c(156,e.tag))}function c1(t,e){switch(ki(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qe(Nt),Rt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Xa(e),null;case 31:if(e.memoizedState!==null){if(re(e),e.alternate===null)throw Error(c(340));qn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(re(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(c(340));qn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return D(Ut),null;case 4:return Rt(),null;case 10:return Qe(e.type),null;case 22:case 23:return re(e),df(),t!==null&&D(Qn),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Qe(Nt),null;case 25:return null;default:return null}}function _s(t,e){switch(ki(e),e.tag){case 3:Qe(Nt),Rt();break;case 26:case 27:case 5:Xa(e);break;case 4:Rt();break;case 31:e.memoizedState!==null&&re(e);break;case 13:re(e);break;case 19:D(Ut);break;case 10:Qe(e.type);break;case 22:case 23:re(e),df(),t!==null&&D(Qn);break;case 24:Qe(Nt)}}function pa(t,e){try{var n=e.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&t)===t){l=void 0;var u=n.create,i=n.inst;l=u(),i.destroy=l}n=n.next}while(n!==a)}}catch(r){ht(e,e.return,r)}}function mn(t,e,n){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var u=a.next;l=u;do{if((l.tag&t)===t){var i=l.inst,r=i.destroy;if(r!==void 0){i.destroy=void 0,a=e;var p=n,j=r;try{j()}catch(R){ht(a,p,R)}}}l=l.next}while(l!==u)}}catch(R){ht(e,e.return,R)}}function Ss(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{sd(e,n)}catch(l){ht(t,t.return,l)}}}function js(t,e,n){n.props=kn(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(l){ht(t,e,l)}}function ba(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof n=="function"?t.refCleanup=n(l):n.current=l}}catch(a){ht(t,e,a)}}function Ne(t,e){var n=t.ref,l=t.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){ht(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){ht(t,e,a)}else n.current=null}function xs(t){var e=t.type,n=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break t;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){ht(t,t.return,a)}}function wf(t,e,n){try{var l=t.stateNode;R1(l,t.type,n,e),l[$t]=e}catch(a){ht(t,t.return,a)}}function Es(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&xn(t.type)||t.tag===4}function Qf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Es(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&xn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vf(t,e,n){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ge));else if(l!==4&&(l===27&&xn(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Vf(t,e,n),t=t.sibling;t!==null;)Vf(t,e,n),t=t.sibling}function Cu(t,e,n){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(l!==4&&(l===27&&xn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Cu(t,e,n),t=t.sibling;t!==null;)Cu(t,e,n),t=t.sibling}function Ts(t){var e=t.stateNode,n=t.memoizedProps;try{for(var l=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Zt(e,l,n),e[Yt]=t,e[$t]=n}catch(u){ht(t,t.return,u)}}var ke=!1,Lt=!1,Zf=!1,As=typeof WeakSet=="function"?WeakSet:Set,Xt=null;function r1(t,e){if(t=t.containerInfo,oc=$u,t=Gr(t),Bi(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break t}var i=0,r=-1,p=-1,j=0,R=0,N=t,x=null;e:for(;;){for(var A;N!==n||a!==0&&N.nodeType!==3||(r=i+a),N!==u||l!==0&&N.nodeType!==3||(p=i+l),N.nodeType===3&&(i+=N.nodeValue.length),(A=N.firstChild)!==null;)x=N,N=A;for(;;){if(N===t)break e;if(x===n&&++j===a&&(r=i),x===u&&++R===l&&(p=i),(A=N.nextSibling)!==null)break;N=x,x=N.parentNode}N=A}n=r===-1||p===-1?null:{start:r,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for(hc={focusedElem:t,selectionRange:n},$u=!1,Xt=e;Xt!==null;)if(e=Xt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Xt=t;else for(;Xt!==null;){switch(e=Xt,u=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)a=t[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,n=e,a=u.memoizedProps,u=u.memoizedState,l=n.stateNode;try{var X=kn(n.type,a);t=l.getSnapshotBeforeUpdate(X,u),l.__reactInternalSnapshotBeforeUpdate=t}catch(J){ht(n,n.return,J)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)mc(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":mc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(c(163))}if(t=e.sibling,t!==null){t.return=e.return,Xt=t;break}Xt=e.return}}function zs(t,e,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:$e(t,n),l&4&&pa(5,n);break;case 1:if($e(t,n),l&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(i){ht(n,n.return,i)}else{var a=kn(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(i){ht(n,n.return,i)}}l&64&&Ss(n),l&512&&ba(n,n.return);break;case 3:if($e(t,n),l&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{sd(t,e)}catch(i){ht(n,n.return,i)}}break;case 27:e===null&&l&4&&Ts(n);case 26:case 5:$e(t,n),e===null&&l&4&&xs(n),l&512&&ba(n,n.return);break;case 12:$e(t,n);break;case 31:$e(t,n),l&4&&Rs(t,n);break;case 13:$e(t,n),l&4&&Us(t,n),l&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=v1.bind(null,n),G1(t,n))));break;case 22:if(l=n.memoizedState!==null||ke,!l){e=e!==null&&e.memoizedState!==null||Lt,a=ke;var u=Lt;ke=l,(Lt=e)&&!u?Fe(t,n,(n.subtreeFlags&8772)!==0):$e(t,n),ke=a,Lt=u}break;case 30:break;default:$e(t,n)}}function Ms(t){var e=t.alternate;e!==null&&(t.alternate=null,Ms(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&_i(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Tt=null,It=!1;function We(t,e,n){for(n=n.child;n!==null;)Cs(t,e,n),n=n.sibling}function Cs(t,e,n){if(ae&&typeof ae.onCommitFiberUnmount=="function")try{ae.onCommitFiberUnmount(Xl,n)}catch{}switch(n.tag){case 26:Lt||Ne(n,e),We(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Lt||Ne(n,e);var l=Tt,a=It;xn(n.type)&&(Tt=n.stateNode,It=!1),We(t,e,n),Ea(n.stateNode),Tt=l,It=a;break;case 5:Lt||Ne(n,e);case 6:if(l=Tt,a=It,Tt=null,We(t,e,n),Tt=l,It=a,Tt!==null)if(It)try{(Tt.nodeType===9?Tt.body:Tt.nodeName==="HTML"?Tt.ownerDocument.body:Tt).removeChild(n.stateNode)}catch(u){ht(n,e,u)}else try{Tt.removeChild(n.stateNode)}catch(u){ht(n,e,u)}break;case 18:Tt!==null&&(It?(t=Tt,jo(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Ll(t)):jo(Tt,n.stateNode));break;case 4:l=Tt,a=It,Tt=n.stateNode.containerInfo,It=!0,We(t,e,n),Tt=l,It=a;break;case 0:case 11:case 14:case 15:mn(2,n,e),Lt||mn(4,n,e),We(t,e,n);break;case 1:Lt||(Ne(n,e),l=n.stateNode,typeof l.componentWillUnmount=="function"&&js(n,e,l)),We(t,e,n);break;case 21:We(t,e,n);break;case 22:Lt=(l=Lt)||n.memoizedState!==null,We(t,e,n),Lt=l;break;default:We(t,e,n)}}function Rs(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ll(t)}catch(n){ht(e,e.return,n)}}}function Us(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ll(t)}catch(n){ht(e,e.return,n)}}function d1(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new As),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new As),e;default:throw Error(c(435,t.tag))}}function Ru(t,e){var n=d1(t);e.forEach(function(l){if(!n.has(l)){n.add(l);var a=y1.bind(null,t,l);l.then(a,a)}})}function Pt(t,e){var n=e.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],u=t,i=e,r=i;t:for(;r!==null;){switch(r.tag){case 27:if(xn(r.type)){Tt=r.stateNode,It=!1;break t}break;case 5:Tt=r.stateNode,It=!1;break t;case 3:case 4:Tt=r.stateNode.containerInfo,It=!0;break t}r=r.return}if(Tt===null)throw Error(c(160));Cs(u,i,a),Tt=null,It=!1,u=a.alternate,u!==null&&(u.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Os(e,t),e=e.sibling}var ze=null;function Os(t,e){var n=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Pt(e,t),te(t),l&4&&(mn(3,t,t.return),pa(3,t),mn(5,t,t.return));break;case 1:Pt(e,t),te(t),l&512&&(Lt||n===null||Ne(n,n.return)),l&64&&ke&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=ze;if(Pt(e,t),te(t),l&512&&(Lt||n===null||Ne(n,n.return)),l&4){var u=n!==null?n.memoizedState:null;if(l=t.memoizedState,n===null)if(l===null)if(t.stateNode===null){t:{l=t.type,n=t.memoizedProps,a=a.ownerDocument||a;e:switch(l){case"title":u=a.getElementsByTagName("title")[0],(!u||u[wl]||u[Yt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=a.createElement(l),a.head.insertBefore(u,a.querySelector("head > title"))),Zt(u,l,n),u[Yt]=t,Gt(u),l=u;break t;case"link":var i=No("link","href",a).get(l+(n.href||""));if(i){for(var r=0;r<i.length;r++)if(u=i[r],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){i.splice(r,1);break e}}u=a.createElement(l),Zt(u,l,n),a.head.appendChild(u);break;case"meta":if(i=No("meta","content",a).get(l+(n.content||""))){for(r=0;r<i.length;r++)if(u=i[r],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){i.splice(r,1);break e}}u=a.createElement(l),Zt(u,l,n),a.head.appendChild(u);break;default:throw Error(c(468,l))}u[Yt]=t,Gt(u),l=u}t.stateNode=l}else Do(a,t.type,t.stateNode);else t.stateNode=Oo(a,l,t.memoizedProps);else u!==l?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,l===null?Do(a,t.type,t.stateNode):Oo(a,l,t.memoizedProps)):l===null&&t.stateNode!==null&&wf(t,t.memoizedProps,n.memoizedProps)}break;case 27:Pt(e,t),te(t),l&512&&(Lt||n===null||Ne(n,n.return)),n!==null&&l&4&&wf(t,t.memoizedProps,n.memoizedProps);break;case 5:if(Pt(e,t),te(t),l&512&&(Lt||n===null||Ne(n,n.return)),t.flags&32){a=t.stateNode;try{ul(a,"")}catch(X){ht(t,t.return,X)}}l&4&&t.stateNode!=null&&(a=t.memoizedProps,wf(t,a,n!==null?n.memoizedProps:a)),l&1024&&(Zf=!0);break;case 6:if(Pt(e,t),te(t),l&4){if(t.stateNode===null)throw Error(c(162));l=t.memoizedProps,n=t.stateNode;try{n.nodeValue=l}catch(X){ht(t,t.return,X)}}break;case 3:if(Ku=null,a=ze,ze=Vu(e.containerInfo),Pt(e,t),ze=a,te(t),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Ll(e.containerInfo)}catch(X){ht(t,t.return,X)}Zf&&(Zf=!1,Ns(t));break;case 4:l=ze,ze=Vu(t.stateNode.containerInfo),Pt(e,t),te(t),ze=l;break;case 12:Pt(e,t),te(t);break;case 31:Pt(e,t),te(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ru(t,l)));break;case 13:Pt(e,t),te(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ou=le()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ru(t,l)));break;case 22:a=t.memoizedState!==null;var p=n!==null&&n.memoizedState!==null,j=ke,R=Lt;if(ke=j||a,Lt=R||p,Pt(e,t),Lt=R,ke=j,te(t),l&8192)t:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(n===null||p||ke||Lt||Wn(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){p=n=e;try{if(u=p.stateNode,a)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{r=p.stateNode;var N=p.memoizedProps.style,x=N!=null&&N.hasOwnProperty("display")?N.display:null;r.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(X){ht(p,p.return,X)}}}else if(e.tag===6){if(n===null){p=e;try{p.stateNode.nodeValue=a?"":p.memoizedProps}catch(X){ht(p,p.return,X)}}}else if(e.tag===18){if(n===null){p=e;try{var A=p.stateNode;a?xo(A,!0):xo(p.stateNode,!1)}catch(X){ht(p,p.return,X)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Ru(t,n))));break;case 19:Pt(e,t),te(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ru(t,l)));break;case 30:break;case 21:break;default:Pt(e,t),te(t)}}function te(t){var e=t.flags;if(e&2){try{for(var n,l=t.return;l!==null;){if(Es(l)){n=l;break}l=l.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var a=n.stateNode,u=Qf(t);Cu(t,u,a);break;case 5:var i=n.stateNode;n.flags&32&&(ul(i,""),n.flags&=-33);var r=Qf(t);Cu(t,r,i);break;case 3:case 4:var p=n.stateNode.containerInfo,j=Qf(t);Vf(t,j,p);break;default:throw Error(c(161))}}catch(R){ht(t,t.return,R)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ns(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Ns(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function $e(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)zs(t,e.alternate,e),e=e.sibling}function Wn(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:mn(4,e,e.return),Wn(e);break;case 1:Ne(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&js(e,e.return,n),Wn(e);break;case 27:Ea(e.stateNode);case 26:case 5:Ne(e,e.return),Wn(e);break;case 22:e.memoizedState===null&&Wn(e);break;case 30:Wn(e);break;default:Wn(e)}t=t.sibling}}function Fe(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,a=t,u=e,i=u.flags;switch(u.tag){case 0:case 11:case 15:Fe(a,u,n),pa(4,u);break;case 1:if(Fe(a,u,n),l=u,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(j){ht(l,l.return,j)}if(l=u,a=l.updateQueue,a!==null){var r=l.stateNode;try{var p=a.shared.hiddenCallbacks;if(p!==null)for(a.shared.hiddenCallbacks=null,a=0;a<p.length;a++)dd(p[a],r)}catch(j){ht(l,l.return,j)}}n&&i&64&&Ss(u),ba(u,u.return);break;case 27:Ts(u);case 26:case 5:Fe(a,u,n),n&&l===null&&i&4&&xs(u),ba(u,u.return);break;case 12:Fe(a,u,n);break;case 31:Fe(a,u,n),n&&i&4&&Rs(a,u);break;case 13:Fe(a,u,n),n&&i&4&&Us(a,u);break;case 22:u.memoizedState===null&&Fe(a,u,n),ba(u,u.return);break;case 30:break;default:Fe(a,u,n)}e=e.sibling}}function Kf(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&ea(n))}function Jf(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ea(t))}function Me(t,e,n,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ds(t,e,n,l),e=e.sibling}function Ds(t,e,n,l){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Me(t,e,n,l),a&2048&&pa(9,e);break;case 1:Me(t,e,n,l);break;case 3:Me(t,e,n,l),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ea(t)));break;case 12:if(a&2048){Me(t,e,n,l),t=e.stateNode;try{var u=e.memoizedProps,i=u.id,r=u.onPostCommit;typeof r=="function"&&r(i,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(p){ht(e,e.return,p)}}else Me(t,e,n,l);break;case 31:Me(t,e,n,l);break;case 13:Me(t,e,n,l);break;case 23:break;case 22:u=e.stateNode,i=e.alternate,e.memoizedState!==null?u._visibility&2?Me(t,e,n,l):ma(t,e):u._visibility&2?Me(t,e,n,l):(u._visibility|=2,Tl(t,e,n,l,(e.subtreeFlags&10256)!==0||!1)),a&2048&&Kf(i,e);break;case 24:Me(t,e,n,l),a&2048&&Jf(e.alternate,e);break;default:Me(t,e,n,l)}}function Tl(t,e,n,l,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,i=e,r=n,p=l,j=i.flags;switch(i.tag){case 0:case 11:case 15:Tl(u,i,r,p,a),pa(8,i);break;case 23:break;case 22:var R=i.stateNode;i.memoizedState!==null?R._visibility&2?Tl(u,i,r,p,a):ma(u,i):(R._visibility|=2,Tl(u,i,r,p,a)),a&&j&2048&&Kf(i.alternate,i);break;case 24:Tl(u,i,r,p,a),a&&j&2048&&Jf(i.alternate,i);break;default:Tl(u,i,r,p,a)}e=e.sibling}}function ma(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,l=e,a=l.flags;switch(l.tag){case 22:ma(n,l),a&2048&&Kf(l.alternate,l);break;case 24:ma(n,l),a&2048&&Jf(l.alternate,l);break;default:ma(n,l)}e=e.sibling}}var ga=8192;function Al(t,e,n){if(t.subtreeFlags&ga)for(t=t.child;t!==null;)Hs(t,e,n),t=t.sibling}function Hs(t,e,n){switch(t.tag){case 26:Al(t,e,n),t.flags&ga&&t.memoizedState!==null&&$1(n,ze,t.memoizedState,t.memoizedProps);break;case 5:Al(t,e,n);break;case 3:case 4:var l=ze;ze=Vu(t.stateNode.containerInfo),Al(t,e,n),ze=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=ga,ga=16777216,Al(t,e,n),ga=l):Al(t,e,n));break;default:Al(t,e,n)}}function Ls(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function va(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var l=e[n];Xt=l,Gs(l,t)}Ls(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Bs(t),t=t.sibling}function Bs(t){switch(t.tag){case 0:case 11:case 15:va(t),t.flags&2048&&mn(9,t,t.return);break;case 3:va(t);break;case 12:va(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Uu(t)):va(t);break;default:va(t)}}function Uu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var l=e[n];Xt=l,Gs(l,t)}Ls(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:mn(8,e,e.return),Uu(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Uu(e));break;default:Uu(e)}t=t.sibling}}function Gs(t,e){for(;Xt!==null;){var n=Xt;switch(n.tag){case 0:case 11:case 15:mn(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ea(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,Xt=l;else t:for(n=t;Xt!==null;){l=Xt;var a=l.sibling,u=l.return;if(Ms(l),l===n){Xt=null;break t}if(a!==null){a.return=u,Xt=a;break t}Xt=u}}}var s1={getCacheForType:function(t){var e=Qt(Nt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return Qt(Nt).controller.signal}},o1=typeof WeakMap=="function"?WeakMap:Map,dt=0,St=null,lt=null,ut=0,ot=0,de=null,gn=!1,zl=!1,kf=!1,Ie=0,Mt=0,vn=0,$n=0,Wf=0,se=0,Ml=0,ya=null,ee=null,$f=!1,Ou=0,Xs=0,Nu=1/0,Du=null,yn=null,Bt=0,_n=null,Cl=null,Pe=0,Ff=0,If=null,qs=null,_a=0,Pf=null;function oe(){return(dt&2)!==0&&ut!==0?ut&-ut:U.T!==null?uc():nr()}function Ys(){if(se===0)if((ut&536870912)===0||ft){var t=wa;wa<<=1,(wa&3932160)===0&&(wa=262144),se=t}else se=536870912;return t=ce.current,t!==null&&(t.flags|=32),se}function ne(t,e,n){(t===St&&(ot===2||ot===9)||t.cancelPendingCommit!==null)&&(Rl(t,0),Sn(t,ut,se,!1)),Yl(t,n),((dt&2)===0||t!==St)&&(t===St&&((dt&2)===0&&($n|=n),Mt===4&&Sn(t,ut,se,!1)),De(t))}function ws(t,e,n){if((dt&6)!==0)throw Error(c(327));var l=!n&&(e&127)===0&&(e&t.expiredLanes)===0||ql(t,e),a=l?b1(t,e):ec(t,e,!0),u=l;do{if(a===0){zl&&!l&&Sn(t,e,0,!1);break}else{if(n=t.current.alternate,u&&!h1(n)){a=ec(t,e,!1),u=!1;continue}if(a===2){if(u=e,t.errorRecoveryDisabledLanes&u)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){e=i;t:{var r=t;a=ya;var p=r.current.memoizedState.isDehydrated;if(p&&(Rl(r,i).flags|=256),i=ec(r,i,!1),i!==2){if(kf&&!p){r.errorRecoveryDisabledLanes|=u,$n|=u,a=4;break t}u=ee,ee=a,u!==null&&(ee===null?ee=u:ee.push.apply(ee,u))}a=i}if(u=!1,a!==2)continue}}if(a===1){Rl(t,0),Sn(t,e,0,!0);break}t:{switch(l=t,u=a,u){case 0:case 1:throw Error(c(345));case 4:if((e&4194048)!==e)break;case 6:Sn(l,e,se,!gn);break t;case 2:ee=null;break;case 3:case 5:break;default:throw Error(c(329))}if((e&62914560)===e&&(a=Ou+300-le(),10<a)){if(Sn(l,e,se,!gn),Va(l,0,!0)!==0)break t;Pe=e,l.timeoutHandle=_o(Qs.bind(null,l,n,ee,Du,$f,e,se,$n,Ml,gn,u,"Throttled",-0,0),a);break t}Qs(l,n,ee,Du,$f,e,se,$n,Ml,gn,u,null,-0,0)}}break}while(!0);De(t)}function Qs(t,e,n,l,a,u,i,r,p,j,R,N,x,A){if(t.timeoutHandle=-1,N=e.subtreeFlags,N&8192||(N&16785408)===16785408){N={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ge},Hs(e,u,N);var X=(u&62914560)===u?Ou-le():(u&4194048)===u?Xs-le():0;if(X=F1(N,X),X!==null){Pe=u,t.cancelPendingCommit=X(Fs.bind(null,t,e,u,n,l,a,i,r,p,R,N,null,x,A)),Sn(t,u,i,!j);return}}Fs(t,e,u,n,l,a,i,r,p)}function h1(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],u=a.getSnapshot;a=a.value;try{if(!ie(u(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sn(t,e,n,l){e&=~Wf,e&=~$n,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var a=e;0<a;){var u=31-ue(a),i=1<<u;l[u]=-1,a&=~i}n!==0&&Pc(t,n,e)}function Hu(){return(dt&6)===0?(Sa(0),!1):!0}function tc(){if(lt!==null){if(ot===0)var t=lt.return;else t=lt,we=Yn=null,mf(t),_l=null,la=0,t=lt;for(;t!==null;)_s(t.alternate,t),t=t.return;lt=null}}function Rl(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,N1(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Pe=0,tc(),St=t,lt=n=qe(t.current,null),ut=e,ot=0,de=null,gn=!1,zl=ql(t,e),kf=!1,Ml=se=Wf=$n=vn=Mt=0,ee=ya=null,$f=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var a=31-ue(l),u=1<<a;e|=t[a],l&=~u}return Ie=e,nu(),n}function Vs(t,e){tt=null,U.H=sa,e===yl||e===du?(e=id(),ot=3):e===lf?(e=id(),ot=4):ot=e===Of?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,de=e,lt===null&&(Mt=1,Eu(t,ge(e,t.current)))}function Zs(){var t=ce.current;return t===null?!0:(ut&4194048)===ut?Se===null:(ut&62914560)===ut||(ut&536870912)!==0?t===Se:!1}function Ks(){var t=U.H;return U.H=sa,t===null?sa:t}function Js(){var t=U.A;return U.A=s1,t}function Lu(){Mt=4,gn||(ut&4194048)!==ut&&ce.current!==null||(zl=!0),(vn&134217727)===0&&($n&134217727)===0||St===null||Sn(St,ut,se,!1)}function ec(t,e,n){var l=dt;dt|=2;var a=Ks(),u=Js();(St!==t||ut!==e)&&(Du=null,Rl(t,e)),e=!1;var i=Mt;t:do try{if(ot!==0&&lt!==null){var r=lt,p=de;switch(ot){case 8:tc(),i=6;break t;case 3:case 2:case 9:case 6:ce.current===null&&(e=!0);var j=ot;if(ot=0,de=null,Ul(t,r,p,j),n&&zl){i=0;break t}break;default:j=ot,ot=0,de=null,Ul(t,r,p,j)}}p1(),i=Mt;break}catch(R){Vs(t,R)}while(!0);return e&&t.shellSuspendCounter++,we=Yn=null,dt=l,U.H=a,U.A=u,lt===null&&(St=null,ut=0,nu()),i}function p1(){for(;lt!==null;)ks(lt)}function b1(t,e){var n=dt;dt|=2;var l=Ks(),a=Js();St!==t||ut!==e?(Du=null,Nu=le()+500,Rl(t,e)):zl=ql(t,e);t:do try{if(ot!==0&&lt!==null){e=lt;var u=de;e:switch(ot){case 1:ot=0,de=null,Ul(t,e,u,1);break;case 2:case 9:if(ad(u)){ot=0,de=null,Ws(e);break}e=function(){ot!==2&&ot!==9||St!==t||(ot=7),De(t)},u.then(e,e);break t;case 3:ot=7;break t;case 4:ot=5;break t;case 7:ad(u)?(ot=0,de=null,Ws(e)):(ot=0,de=null,Ul(t,e,u,7));break;case 5:var i=null;switch(lt.tag){case 26:i=lt.memoizedState;case 5:case 27:var r=lt;if(i?Ho(i):r.stateNode.complete){ot=0,de=null;var p=r.sibling;if(p!==null)lt=p;else{var j=r.return;j!==null?(lt=j,Bu(j)):lt=null}break e}}ot=0,de=null,Ul(t,e,u,5);break;case 6:ot=0,de=null,Ul(t,e,u,6);break;case 8:tc(),Mt=6;break t;default:throw Error(c(462))}}m1();break}catch(R){Vs(t,R)}while(!0);return we=Yn=null,U.H=l,U.A=a,dt=n,lt!==null?0:(St=null,ut=0,nu(),Mt)}function m1(){for(;lt!==null&&!X0();)ks(lt)}function ks(t){var e=vs(t.alternate,t,Ie);t.memoizedProps=t.pendingProps,e===null?Bu(t):lt=e}function Ws(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=os(n,e,e.pendingProps,e.type,void 0,ut);break;case 11:e=os(n,e,e.pendingProps,e.type.render,e.ref,ut);break;case 5:mf(e);default:_s(n,e),e=lt=Jr(e,Ie),e=vs(n,e,Ie)}t.memoizedProps=t.pendingProps,e===null?Bu(t):lt=e}function Ul(t,e,n,l){we=Yn=null,mf(e),_l=null,la=0;var a=e.return;try{if(a1(t,a,e,n,ut)){Mt=1,Eu(t,ge(n,t.current)),lt=null;return}}catch(u){if(a!==null)throw lt=a,u;Mt=1,Eu(t,ge(n,t.current)),lt=null;return}e.flags&32768?(ft||l===1?t=!0:zl||(ut&536870912)!==0?t=!1:(gn=t=!0,(l===2||l===9||l===3||l===6)&&(l=ce.current,l!==null&&l.tag===13&&(l.flags|=16384))),$s(e,t)):Bu(e)}function Bu(t){var e=t;do{if((e.flags&32768)!==0){$s(e,gn);return}t=e.return;var n=f1(e.alternate,e,Ie);if(n!==null){lt=n;return}if(e=e.sibling,e!==null){lt=e;return}lt=e=t}while(e!==null);Mt===0&&(Mt=5)}function $s(t,e){do{var n=c1(t.alternate,t);if(n!==null){n.flags&=32767,lt=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){lt=t;return}lt=t=n}while(t!==null);Mt=6,lt=null}function Fs(t,e,n,l,a,u,i,r,p){t.cancelPendingCommit=null;do Gu();while(Bt!==0);if((dt&6)!==0)throw Error(c(327));if(e!==null){if(e===t.current)throw Error(c(177));if(u=e.lanes|e.childLanes,u|=wi,W0(t,n,u,i,r,p),t===St&&(lt=St=null,ut=0),Cl=e,_n=t,Pe=n,Ff=u,If=a,qs=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,_1(qa,function(){return no(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=U.T,U.T=null,a=L.p,L.p=2,i=dt,dt|=4;try{r1(t,e,n)}finally{dt=i,L.p=a,U.T=l}}Bt=1,Is(),Ps(),to()}}function Is(){if(Bt===1){Bt=0;var t=_n,e=Cl,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=U.T,U.T=null;var l=L.p;L.p=2;var a=dt;dt|=4;try{Os(e,t);var u=hc,i=Gr(t.containerInfo),r=u.focusedElem,p=u.selectionRange;if(i!==r&&r&&r.ownerDocument&&Br(r.ownerDocument.documentElement,r)){if(p!==null&&Bi(r)){var j=p.start,R=p.end;if(R===void 0&&(R=j),"selectionStart"in r)r.selectionStart=j,r.selectionEnd=Math.min(R,r.value.length);else{var N=r.ownerDocument||document,x=N&&N.defaultView||window;if(x.getSelection){var A=x.getSelection(),X=r.textContent.length,J=Math.min(p.start,X),vt=p.end===void 0?J:Math.min(p.end,X);!A.extend&&J>vt&&(i=vt,vt=J,J=i);var _=Lr(r,J),m=Lr(r,vt);if(_&&m&&(A.rangeCount!==1||A.anchorNode!==_.node||A.anchorOffset!==_.offset||A.focusNode!==m.node||A.focusOffset!==m.offset)){var S=N.createRange();S.setStart(_.node,_.offset),A.removeAllRanges(),J>vt?(A.addRange(S),A.extend(m.node,m.offset)):(S.setEnd(m.node,m.offset),A.addRange(S))}}}}for(N=[],A=r;A=A.parentNode;)A.nodeType===1&&N.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<N.length;r++){var O=N[r];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}$u=!!oc,hc=oc=null}finally{dt=a,L.p=l,U.T=n}}t.current=e,Bt=2}}function Ps(){if(Bt===2){Bt=0;var t=_n,e=Cl,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=U.T,U.T=null;var l=L.p;L.p=2;var a=dt;dt|=4;try{zs(t,e.alternate,e)}finally{dt=a,L.p=l,U.T=n}}Bt=3}}function to(){if(Bt===4||Bt===3){Bt=0,q0();var t=_n,e=Cl,n=Pe,l=qs;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Bt=5:(Bt=0,Cl=_n=null,eo(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(yn=null),vi(n),e=e.stateNode,ae&&typeof ae.onCommitFiberRoot=="function")try{ae.onCommitFiberRoot(Xl,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=U.T,a=L.p,L.p=2,U.T=null;try{for(var u=t.onRecoverableError,i=0;i<l.length;i++){var r=l[i];u(r.value,{componentStack:r.stack})}}finally{U.T=e,L.p=a}}(Pe&3)!==0&&Gu(),De(t),a=t.pendingLanes,(n&261930)!==0&&(a&42)!==0?t===Pf?_a++:(_a=0,Pf=t):_a=0,Sa(0)}}function eo(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ea(e)))}function Gu(){return Is(),Ps(),to(),no()}function no(){if(Bt!==5)return!1;var t=_n,e=Ff;Ff=0;var n=vi(Pe),l=U.T,a=L.p;try{L.p=32>n?32:n,U.T=null,n=If,If=null;var u=_n,i=Pe;if(Bt=0,Cl=_n=null,Pe=0,(dt&6)!==0)throw Error(c(331));var r=dt;if(dt|=4,Bs(u.current),Ds(u,u.current,i,n),dt=r,Sa(0,!1),ae&&typeof ae.onPostCommitFiberRoot=="function")try{ae.onPostCommitFiberRoot(Xl,u)}catch{}return!0}finally{L.p=a,U.T=l,eo(t,e)}}function lo(t,e,n){e=ge(n,e),e=Uf(t.stateNode,e,2),t=hn(t,e,2),t!==null&&(Yl(t,2),De(t))}function ht(t,e,n){if(t.tag===3)lo(t,t,n);else for(;e!==null;){if(e.tag===3){lo(e,t,n);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(yn===null||!yn.has(l))){t=ge(n,t),n=as(2),l=hn(e,n,2),l!==null&&(us(n,l,e,t),Yl(l,2),De(l));break}}e=e.return}}function nc(t,e,n){var l=t.pingCache;if(l===null){l=t.pingCache=new o1;var a=new Set;l.set(e,a)}else a=l.get(e),a===void 0&&(a=new Set,l.set(e,a));a.has(n)||(kf=!0,a.add(n),t=g1.bind(null,t,e,n),e.then(t,t))}function g1(t,e,n){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,St===t&&(ut&n)===n&&(Mt===4||Mt===3&&(ut&62914560)===ut&&300>le()-Ou?(dt&2)===0&&Rl(t,0):Wf|=n,Ml===ut&&(Ml=0)),De(t)}function ao(t,e){e===0&&(e=Ic()),t=Gn(t,e),t!==null&&(Yl(t,e),De(t))}function v1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ao(t,n)}function y1(t,e){var n=0;switch(t.tag){case 31:case 13:var l=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(e),ao(t,n)}function _1(t,e){return pi(t,e)}var Xu=null,Ol=null,lc=!1,qu=!1,ac=!1,jn=0;function De(t){t!==Ol&&t.next===null&&(Ol===null?Xu=Ol=t:Ol=Ol.next=t),qu=!0,lc||(lc=!0,j1())}function Sa(t,e){if(!ac&&qu){ac=!0;do for(var n=!1,l=Xu;l!==null;){if(t!==0){var a=l.pendingLanes;if(a===0)var u=0;else{var i=l.suspendedLanes,r=l.pingedLanes;u=(1<<31-ue(42|t)+1)-1,u&=a&~(i&~r),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,co(l,u))}else u=ut,u=Va(l,l===St?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||ql(l,u)||(n=!0,co(l,u));l=l.next}while(n);ac=!1}}function S1(){uo()}function uo(){qu=lc=!1;var t=0;jn!==0&&O1()&&(t=jn);for(var e=le(),n=null,l=Xu;l!==null;){var a=l.next,u=io(l,e);u===0?(l.next=null,n===null?Xu=a:n.next=a,a===null&&(Ol=n)):(n=l,(t!==0||(u&3)!==0)&&(qu=!0)),l=a}Bt!==0&&Bt!==5||Sa(t),jn!==0&&(jn=0)}function io(t,e){for(var n=t.suspendedLanes,l=t.pingedLanes,a=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var i=31-ue(u),r=1<<i,p=a[i];p===-1?((r&n)===0||(r&l)!==0)&&(a[i]=k0(r,e)):p<=e&&(t.expiredLanes|=r),u&=~r}if(e=St,n=ut,n=Va(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,n===0||t===e&&(ot===2||ot===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&bi(l),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||ql(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(l!==null&&bi(l),vi(n)){case 2:case 8:n=$c;break;case 32:n=qa;break;case 268435456:n=Fc;break;default:n=qa}return l=fo.bind(null,t),n=pi(n,l),t.callbackPriority=e,t.callbackNode=n,e}return l!==null&&l!==null&&bi(l),t.callbackPriority=2,t.callbackNode=null,2}function fo(t,e){if(Bt!==0&&Bt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Gu()&&t.callbackNode!==n)return null;var l=ut;return l=Va(t,t===St?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(ws(t,l,e),io(t,le()),t.callbackNode!=null&&t.callbackNode===n?fo.bind(null,t):null)}function co(t,e){if(Gu())return null;ws(t,e,!0)}function j1(){D1(function(){(dt&6)!==0?pi(Wc,S1):uo()})}function uc(){if(jn===0){var t=gl;t===0&&(t=Ya,Ya<<=1,(Ya&261888)===0&&(Ya=256)),jn=t}return jn}function ro(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ka(""+t)}function so(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function x1(t,e,n,l,a){if(e==="submit"&&n&&n.stateNode===a){var u=ro((a[$t]||null).action),i=l.submitter;i&&(e=(e=i[$t]||null)?ro(e.formAction):i.getAttribute("formAction"),e!==null&&(u=e,i=null));var r=new Ia("action","action",null,l,a);t.push({event:r,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(jn!==0){var p=i?so(a,i):new FormData(a);Tf(n,{pending:!0,data:p,method:a.method,action:u},null,p)}}else typeof u=="function"&&(r.preventDefault(),p=i?so(a,i):new FormData(a),Tf(n,{pending:!0,data:p,method:a.method,action:u},u,p))},currentTarget:a}]})}}for(var ic=0;ic<Yi.length;ic++){var fc=Yi[ic],E1=fc.toLowerCase(),T1=fc[0].toUpperCase()+fc.slice(1);Ae(E1,"on"+T1)}Ae(Yr,"onAnimationEnd"),Ae(wr,"onAnimationIteration"),Ae(Qr,"onAnimationStart"),Ae("dblclick","onDoubleClick"),Ae("focusin","onFocus"),Ae("focusout","onBlur"),Ae(Y2,"onTransitionRun"),Ae(w2,"onTransitionStart"),Ae(Q2,"onTransitionCancel"),Ae(Vr,"onTransitionEnd"),ll("onMouseEnter",["mouseout","mouseover"]),ll("onMouseLeave",["mouseout","mouseover"]),ll("onPointerEnter",["pointerout","pointerover"]),ll("onPointerLeave",["pointerout","pointerover"]),Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ja));function oo(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var l=t[n],a=l.event;l=l.listeners;t:{var u=void 0;if(e)for(var i=l.length-1;0<=i;i--){var r=l[i],p=r.instance,j=r.currentTarget;if(r=r.listener,p!==u&&a.isPropagationStopped())break t;u=r,a.currentTarget=j;try{u(a)}catch(R){eu(R)}a.currentTarget=null,u=p}else for(i=0;i<l.length;i++){if(r=l[i],p=r.instance,j=r.currentTarget,r=r.listener,p!==u&&a.isPropagationStopped())break t;u=r,a.currentTarget=j;try{u(a)}catch(R){eu(R)}a.currentTarget=null,u=p}}}}function at(t,e){var n=e[yi];n===void 0&&(n=e[yi]=new Set);var l=t+"__bubble";n.has(l)||(ho(e,t,2,!1),n.add(l))}function cc(t,e,n){var l=0;e&&(l|=4),ho(n,t,l,e)}var Yu="_reactListening"+Math.random().toString(36).slice(2);function rc(t){if(!t[Yu]){t[Yu]=!0,ur.forEach(function(n){n!=="selectionchange"&&(A1.has(n)||cc(n,!1,t),cc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Yu]||(e[Yu]=!0,cc("selectionchange",!1,e))}}function ho(t,e,n,l){switch(wo(e)){case 2:var a=th;break;case 8:a=eh;break;default:a=Ec}n=a.bind(null,e,n,t),a=void 0,!Mi||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),l?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function dc(t,e,n,l,a){var u=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var i=l.tag;if(i===3||i===4){var r=l.stateNode.containerInfo;if(r===a)break;if(i===4)for(i=l.return;i!==null;){var p=i.tag;if((p===3||p===4)&&i.stateNode.containerInfo===a)return;i=i.return}for(;r!==null;){if(i=tl(r),i===null)return;if(p=i.tag,p===5||p===6||p===26||p===27){l=u=i;continue t}r=r.parentNode}}l=l.return}gr(function(){var j=u,R=Ai(n),N=[];t:{var x=Zr.get(t);if(x!==void 0){var A=Ia,X=t;switch(t){case"keypress":if($a(n)===0)break t;case"keydown":case"keyup":A=y2;break;case"focusin":X="focus",A=Oi;break;case"focusout":X="blur",A=Oi;break;case"beforeblur":case"afterblur":A=Oi;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=_r;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=f2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=j2;break;case Yr:case wr:case Qr:A=d2;break;case Vr:A=E2;break;case"scroll":case"scrollend":A=u2;break;case"wheel":A=A2;break;case"copy":case"cut":case"paste":A=o2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=jr;break;case"toggle":case"beforetoggle":A=M2}var J=(e&4)!==0,vt=!J&&(t==="scroll"||t==="scrollend"),_=J?x!==null?x+"Capture":null:x;J=[];for(var m=j,S;m!==null;){var O=m;if(S=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||S===null||_===null||(O=Vl(m,_),O!=null&&J.push(xa(m,O,S))),vt)break;m=m.return}0<J.length&&(x=new A(x,X,null,n,R),N.push({event:x,listeners:J}))}}if((e&7)===0){t:{if(x=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",x&&n!==Ti&&(X=n.relatedTarget||n.fromElement)&&(tl(X)||X[Pn]))break t;if((A||x)&&(x=R.window===R?R:(x=R.ownerDocument)?x.defaultView||x.parentWindow:window,A?(X=n.relatedTarget||n.toElement,A=j,X=X?tl(X):null,X!==null&&(vt=o(X),J=X.tag,X!==vt||J!==5&&J!==27&&J!==6)&&(X=null)):(A=null,X=j),A!==X)){if(J=_r,O="onMouseLeave",_="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(J=jr,O="onPointerLeave",_="onPointerEnter",m="pointer"),vt=A==null?x:Ql(A),S=X==null?x:Ql(X),x=new J(O,m+"leave",A,n,R),x.target=vt,x.relatedTarget=S,O=null,tl(R)===j&&(J=new J(_,m+"enter",X,n,R),J.target=S,J.relatedTarget=vt,O=J),vt=O,A&&X)e:{for(J=z1,_=A,m=X,S=0,O=_;O;O=J(O))S++;O=0;for(var Z=m;Z;Z=J(Z))O++;for(;0<S-O;)_=J(_),S--;for(;0<O-S;)m=J(m),O--;for(;S--;){if(_===m||m!==null&&_===m.alternate){J=_;break e}_=J(_),m=J(m)}J=null}else J=null;A!==null&&po(N,x,A,J,!1),X!==null&&vt!==null&&po(N,vt,X,J,!0)}}t:{if(x=j?Ql(j):window,A=x.nodeName&&x.nodeName.toLowerCase(),A==="select"||A==="input"&&x.type==="file")var ct=Rr;else if(Mr(x))if(Ur)ct=G2;else{ct=L2;var Q=H2}else A=x.nodeName,!A||A.toLowerCase()!=="input"||x.type!=="checkbox"&&x.type!=="radio"?j&&Ei(j.elementType)&&(ct=Rr):ct=B2;if(ct&&(ct=ct(t,j))){Cr(N,ct,n,R);break t}Q&&Q(t,x,j),t==="focusout"&&j&&x.type==="number"&&j.memoizedProps.value!=null&&xi(x,"number",x.value)}switch(Q=j?Ql(j):window,t){case"focusin":(Mr(Q)||Q.contentEditable==="true")&&(rl=Q,Gi=j,Il=null);break;case"focusout":Il=Gi=rl=null;break;case"mousedown":Xi=!0;break;case"contextmenu":case"mouseup":case"dragend":Xi=!1,Xr(N,n,R);break;case"selectionchange":if(q2)break;case"keydown":case"keyup":Xr(N,n,R)}var et;if(Di)t:{switch(t){case"compositionstart":var it="onCompositionStart";break t;case"compositionend":it="onCompositionEnd";break t;case"compositionupdate":it="onCompositionUpdate";break t}it=void 0}else cl?Ar(t,n)&&(it="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(it="onCompositionStart");it&&(xr&&n.locale!=="ko"&&(cl||it!=="onCompositionStart"?it==="onCompositionEnd"&&cl&&(et=vr()):(un=R,Ci="value"in un?un.value:un.textContent,cl=!0)),Q=wu(j,it),0<Q.length&&(it=new Sr(it,t,null,n,R),N.push({event:it,listeners:Q}),et?it.data=et:(et=zr(n),et!==null&&(it.data=et)))),(et=R2?U2(t,n):O2(t,n))&&(it=wu(j,"onBeforeInput"),0<it.length&&(Q=new Sr("onBeforeInput","beforeinput",null,n,R),N.push({event:Q,listeners:it}),Q.data=et)),x1(N,t,j,n,R)}oo(N,e)})}function xa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wu(t,e){for(var n=e+"Capture",l=[];t!==null;){var a=t,u=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||u===null||(a=Vl(t,n),a!=null&&l.unshift(xa(t,a,u)),a=Vl(t,e),a!=null&&l.push(xa(t,a,u))),t.tag===3)return l;t=t.return}return[]}function z1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function po(t,e,n,l,a){for(var u=e._reactName,i=[];n!==null&&n!==l;){var r=n,p=r.alternate,j=r.stateNode;if(r=r.tag,p!==null&&p===l)break;r!==5&&r!==26&&r!==27||j===null||(p=j,a?(j=Vl(n,u),j!=null&&i.unshift(xa(n,j,p))):a||(j=Vl(n,u),j!=null&&i.push(xa(n,j,p)))),n=n.return}i.length!==0&&t.push({event:e,listeners:i})}var M1=/\r\n?/g,C1=/\u0000|\uFFFD/g;function bo(t){return(typeof t=="string"?t:""+t).replace(M1,`
`).replace(C1,"")}function mo(t,e){return e=bo(e),bo(t)===e}function gt(t,e,n,l,a,u){switch(n){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||ul(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&ul(t,""+l);break;case"className":Ka(t,"class",l);break;case"tabIndex":Ka(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ka(t,n,l);break;case"style":br(t,l,u);break;case"data":if(e!=="object"){Ka(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(n);break}l=ka(""+l),t.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(e!=="input"&&gt(t,e,"name",a.name,a,null),gt(t,e,"formEncType",a.formEncType,a,null),gt(t,e,"formMethod",a.formMethod,a,null),gt(t,e,"formTarget",a.formTarget,a,null)):(gt(t,e,"encType",a.encType,a,null),gt(t,e,"method",a.method,a,null),gt(t,e,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(n);break}l=ka(""+l),t.setAttribute(n,l);break;case"onClick":l!=null&&(t.onclick=Ge);break;case"onScroll":l!=null&&at("scroll",t);break;case"onScrollEnd":l!=null&&at("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(c(60));t.innerHTML=n}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}n=ka(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,""+l):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":l===!0?t.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,l):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(n,l):t.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(n):t.setAttribute(n,l);break;case"popover":at("beforetoggle",t),at("toggle",t),Za(t,"popover",l);break;case"xlinkActuate":Be(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Be(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Be(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Be(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Be(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Be(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Be(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Be(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Be(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Za(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=l2.get(n)||n,Za(t,n,l))}}function sc(t,e,n,l,a,u){switch(n){case"style":br(t,l,u);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(c(60));t.innerHTML=n}}break;case"children":typeof l=="string"?ul(t,l):(typeof l=="number"||typeof l=="bigint")&&ul(t,""+l);break;case"onScroll":l!=null&&at("scroll",t);break;case"onScrollEnd":l!=null&&at("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Ge);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ir.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),u=t[$t]||null,u=u!=null?u[n]:null,typeof u=="function"&&t.removeEventListener(e,u,a),typeof l=="function")){typeof u!="function"&&u!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,l,a);break t}n in t?t[n]=l:l===!0?t.setAttribute(n,""):Za(t,n,l)}}}function Zt(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":at("error",t),at("load",t);var l=!1,a=!1,u;for(u in n)if(n.hasOwnProperty(u)){var i=n[u];if(i!=null)switch(u){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,e));default:gt(t,e,u,i,n,null)}}a&&gt(t,e,"srcSet",n.srcSet,n,null),l&&gt(t,e,"src",n.src,n,null);return;case"input":at("invalid",t);var r=u=i=a=null,p=null,j=null;for(l in n)if(n.hasOwnProperty(l)){var R=n[l];if(R!=null)switch(l){case"name":a=R;break;case"type":i=R;break;case"checked":p=R;break;case"defaultChecked":j=R;break;case"value":u=R;break;case"defaultValue":r=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,e));break;default:gt(t,e,l,R,n,null)}}sr(t,u,r,p,j,i,a,!1);return;case"select":at("invalid",t),l=i=u=null;for(a in n)if(n.hasOwnProperty(a)&&(r=n[a],r!=null))switch(a){case"value":u=r;break;case"defaultValue":i=r;break;case"multiple":l=r;default:gt(t,e,a,r,n,null)}e=u,n=i,t.multiple=!!l,e!=null?al(t,!!l,e,!1):n!=null&&al(t,!!l,n,!0);return;case"textarea":at("invalid",t),u=a=l=null;for(i in n)if(n.hasOwnProperty(i)&&(r=n[i],r!=null))switch(i){case"value":l=r;break;case"defaultValue":a=r;break;case"children":u=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:gt(t,e,i,r,n,null)}hr(t,l,a,u);return;case"option":for(p in n)if(n.hasOwnProperty(p)&&(l=n[p],l!=null))switch(p){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:gt(t,e,p,l,n,null)}return;case"dialog":at("beforetoggle",t),at("toggle",t),at("cancel",t),at("close",t);break;case"iframe":case"object":at("load",t);break;case"video":case"audio":for(l=0;l<ja.length;l++)at(ja[l],t);break;case"image":at("error",t),at("load",t);break;case"details":at("toggle",t);break;case"embed":case"source":case"link":at("error",t),at("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in n)if(n.hasOwnProperty(j)&&(l=n[j],l!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,e));default:gt(t,e,j,l,n,null)}return;default:if(Ei(e)){for(R in n)n.hasOwnProperty(R)&&(l=n[R],l!==void 0&&sc(t,e,R,l,n,void 0));return}}for(r in n)n.hasOwnProperty(r)&&(l=n[r],l!=null&&gt(t,e,r,l,n,null))}function R1(t,e,n,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,u=null,i=null,r=null,p=null,j=null,R=null;for(A in n){var N=n[A];if(n.hasOwnProperty(A)&&N!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":p=N;default:l.hasOwnProperty(A)||gt(t,e,A,null,l,N)}}for(var x in l){var A=l[x];if(N=n[x],l.hasOwnProperty(x)&&(A!=null||N!=null))switch(x){case"type":u=A;break;case"name":a=A;break;case"checked":j=A;break;case"defaultChecked":R=A;break;case"value":i=A;break;case"defaultValue":r=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,e));break;default:A!==N&&gt(t,e,x,A,l,N)}}ji(t,i,r,p,j,R,u,a);return;case"select":A=i=r=x=null;for(u in n)if(p=n[u],n.hasOwnProperty(u)&&p!=null)switch(u){case"value":break;case"multiple":A=p;default:l.hasOwnProperty(u)||gt(t,e,u,null,l,p)}for(a in l)if(u=l[a],p=n[a],l.hasOwnProperty(a)&&(u!=null||p!=null))switch(a){case"value":x=u;break;case"defaultValue":r=u;break;case"multiple":i=u;default:u!==p&&gt(t,e,a,u,l,p)}e=r,n=i,l=A,x!=null?al(t,!!n,x,!1):!!l!=!!n&&(e!=null?al(t,!!n,e,!0):al(t,!!n,n?[]:"",!1));return;case"textarea":A=x=null;for(r in n)if(a=n[r],n.hasOwnProperty(r)&&a!=null&&!l.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:gt(t,e,r,null,l,a)}for(i in l)if(a=l[i],u=n[i],l.hasOwnProperty(i)&&(a!=null||u!=null))switch(i){case"value":x=a;break;case"defaultValue":A=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(c(91));break;default:a!==u&&gt(t,e,i,a,l,u)}or(t,x,A);return;case"option":for(var X in n)if(x=n[X],n.hasOwnProperty(X)&&x!=null&&!l.hasOwnProperty(X))switch(X){case"selected":t.selected=!1;break;default:gt(t,e,X,null,l,x)}for(p in l)if(x=l[p],A=n[p],l.hasOwnProperty(p)&&x!==A&&(x!=null||A!=null))switch(p){case"selected":t.selected=x&&typeof x!="function"&&typeof x!="symbol";break;default:gt(t,e,p,x,l,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var J in n)x=n[J],n.hasOwnProperty(J)&&x!=null&&!l.hasOwnProperty(J)&&gt(t,e,J,null,l,x);for(j in l)if(x=l[j],A=n[j],l.hasOwnProperty(j)&&x!==A&&(x!=null||A!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(c(137,e));break;default:gt(t,e,j,x,l,A)}return;default:if(Ei(e)){for(var vt in n)x=n[vt],n.hasOwnProperty(vt)&&x!==void 0&&!l.hasOwnProperty(vt)&&sc(t,e,vt,void 0,l,x);for(R in l)x=l[R],A=n[R],!l.hasOwnProperty(R)||x===A||x===void 0&&A===void 0||sc(t,e,R,x,l,A);return}}for(var _ in n)x=n[_],n.hasOwnProperty(_)&&x!=null&&!l.hasOwnProperty(_)&&gt(t,e,_,null,l,x);for(N in l)x=l[N],A=n[N],!l.hasOwnProperty(N)||x===A||x==null&&A==null||gt(t,e,N,x,l,A)}function go(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function U1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var a=n[l],u=a.transferSize,i=a.initiatorType,r=a.duration;if(u&&r&&go(i)){for(i=0,r=a.responseEnd,l+=1;l<n.length;l++){var p=n[l],j=p.startTime;if(j>r)break;var R=p.transferSize,N=p.initiatorType;R&&go(N)&&(p=p.responseEnd,i+=R*(p<r?1:(r-j)/(p-j)))}if(--l,e+=8*(u+i)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var oc=null,hc=null;function Qu(t){return t.nodeType===9?t:t.ownerDocument}function vo(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yo(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function pc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bc=null;function O1(){var t=window.event;return t&&t.type==="popstate"?t===bc?!1:(bc=t,!0):(bc=null,!1)}var _o=typeof setTimeout=="function"?setTimeout:void 0,N1=typeof clearTimeout=="function"?clearTimeout:void 0,So=typeof Promise=="function"?Promise:void 0,D1=typeof queueMicrotask=="function"?queueMicrotask:typeof So<"u"?function(t){return So.resolve(null).then(t).catch(H1)}:_o;function H1(t){setTimeout(function(){throw t})}function xn(t){return t==="head"}function jo(t,e){var n=e,l=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(l===0){t.removeChild(a),Ll(e);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")Ea(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Ea(n);for(var u=n.firstChild;u;){var i=u.nextSibling,r=u.nodeName;u[wl]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=i}}else n==="body"&&Ea(t.ownerDocument.body);n=a}while(n);Ll(e)}function xo(t,e){var n=t;t=0;do{var l=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=l}while(n)}function mc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":mc(n),_i(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function L1(t,e,n,l){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[wl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=je(t.nextSibling),t===null)break}return null}function B1(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=je(t.nextSibling),t===null))return null;return t}function Eo(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=je(t.nextSibling),t===null))return null;return t}function gc(t){return t.data==="$?"||t.data==="$~"}function vc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function G1(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var l=function(){e(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function je(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var yc=null;function To(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return je(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function Ao(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function zo(t,e,n){switch(e=Qu(n),t){case"html":if(t=e.documentElement,!t)throw Error(c(452));return t;case"head":if(t=e.head,!t)throw Error(c(453));return t;case"body":if(t=e.body,!t)throw Error(c(454));return t;default:throw Error(c(451))}}function Ea(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);_i(t)}var xe=new Map,Mo=new Set;function Vu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var tn=L.d;L.d={f:X1,r:q1,D:Y1,C:w1,L:Q1,m:V1,X:K1,S:Z1,M:J1};function X1(){var t=tn.f(),e=Hu();return t||e}function q1(t){var e=el(t);e!==null&&e.tag===5&&e.type==="form"?Vd(e):tn.r(t)}var Nl=typeof document>"u"?null:document;function Co(t,e,n){var l=Nl;if(l&&typeof e=="string"&&e){var a=be(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Mo.has(a)||(Mo.add(a),t={rel:t,crossOrigin:n,href:e},l.querySelector(a)===null&&(e=l.createElement("link"),Zt(e,"link",t),Gt(e),l.head.appendChild(e)))}}function Y1(t){tn.D(t),Co("dns-prefetch",t,null)}function w1(t,e){tn.C(t,e),Co("preconnect",t,e)}function Q1(t,e,n){tn.L(t,e,n);var l=Nl;if(l&&t&&e){var a='link[rel="preload"][as="'+be(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+be(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+be(n.imageSizes)+'"]')):a+='[href="'+be(t)+'"]';var u=a;switch(e){case"style":u=Dl(t);break;case"script":u=Hl(t)}xe.has(u)||(t=E({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),xe.set(u,t),l.querySelector(a)!==null||e==="style"&&l.querySelector(Ta(u))||e==="script"&&l.querySelector(Aa(u))||(e=l.createElement("link"),Zt(e,"link",t),Gt(e),l.head.appendChild(e)))}}function V1(t,e){tn.m(t,e);var n=Nl;if(n&&t){var l=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+be(l)+'"][href="'+be(t)+'"]',u=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Hl(t)}if(!xe.has(u)&&(t=E({rel:"modulepreload",href:t},e),xe.set(u,t),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Aa(u)))return}l=n.createElement("link"),Zt(l,"link",t),Gt(l),n.head.appendChild(l)}}}function Z1(t,e,n){tn.S(t,e,n);var l=Nl;if(l&&t){var a=nl(l).hoistableStyles,u=Dl(t);e=e||"default";var i=a.get(u);if(!i){var r={loading:0,preload:null};if(i=l.querySelector(Ta(u)))r.loading=5;else{t=E({rel:"stylesheet",href:t,"data-precedence":e},n),(n=xe.get(u))&&_c(t,n);var p=i=l.createElement("link");Gt(p),Zt(p,"link",t),p._p=new Promise(function(j,R){p.onload=j,p.onerror=R}),p.addEventListener("load",function(){r.loading|=1}),p.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Zu(i,e,l)}i={type:"stylesheet",instance:i,count:1,state:r},a.set(u,i)}}}function K1(t,e){tn.X(t,e);var n=Nl;if(n&&t){var l=nl(n).hoistableScripts,a=Hl(t),u=l.get(a);u||(u=n.querySelector(Aa(a)),u||(t=E({src:t,async:!0},e),(e=xe.get(a))&&Sc(t,e),u=n.createElement("script"),Gt(u),Zt(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(a,u))}}function J1(t,e){tn.M(t,e);var n=Nl;if(n&&t){var l=nl(n).hoistableScripts,a=Hl(t),u=l.get(a);u||(u=n.querySelector(Aa(a)),u||(t=E({src:t,async:!0,type:"module"},e),(e=xe.get(a))&&Sc(t,e),u=n.createElement("script"),Gt(u),Zt(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(a,u))}}function Ro(t,e,n,l){var a=(a=nt.current)?Vu(a):null;if(!a)throw Error(c(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Dl(n.href),n=nl(a).hoistableStyles,l=n.get(e),l||(l={type:"style",instance:null,count:0,state:null},n.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Dl(n.href);var u=nl(a).hoistableStyles,i=u.get(t);if(i||(a=a.ownerDocument||a,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,i),(u=a.querySelector(Ta(t)))&&!u._p&&(i.instance=u,i.state.loading=5),xe.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},xe.set(t,n),u||k1(a,t,n,i.state))),e&&l===null)throw Error(c(528,""));return i}if(e&&l!==null)throw Error(c(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Hl(n),n=nl(a).hoistableScripts,l=n.get(e),l||(l={type:"script",instance:null,count:0,state:null},n.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,t))}}function Dl(t){return'href="'+be(t)+'"'}function Ta(t){return'link[rel="stylesheet"]['+t+"]"}function Uo(t){return E({},t,{"data-precedence":t.precedence,precedence:null})}function k1(t,e,n,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),Zt(e,"link",n),Gt(e),t.head.appendChild(e))}function Hl(t){return'[src="'+be(t)+'"]'}function Aa(t){return"script[async]"+t}function Oo(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+be(n.href)+'"]');if(l)return e.instance=l,Gt(l),l;var a=E({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Gt(l),Zt(l,"style",a),Zu(l,n.precedence,t),e.instance=l;case"stylesheet":a=Dl(n.href);var u=t.querySelector(Ta(a));if(u)return e.state.loading|=4,e.instance=u,Gt(u),u;l=Uo(n),(a=xe.get(a))&&_c(l,a),u=(t.ownerDocument||t).createElement("link"),Gt(u);var i=u;return i._p=new Promise(function(r,p){i.onload=r,i.onerror=p}),Zt(u,"link",l),e.state.loading|=4,Zu(u,n.precedence,t),e.instance=u;case"script":return u=Hl(n.src),(a=t.querySelector(Aa(u)))?(e.instance=a,Gt(a),a):(l=n,(a=xe.get(u))&&(l=E({},n),Sc(l,a)),t=t.ownerDocument||t,a=t.createElement("script"),Gt(a),Zt(a,"link",l),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(c(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,Zu(l,n.precedence,t));return e.instance}function Zu(t,e,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,u=a,i=0;i<l.length;i++){var r=l[i];if(r.dataset.precedence===e)u=r;else if(u!==a)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function _c(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Sc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ku=null;function No(t,e,n){if(Ku===null){var l=new Map,a=Ku=new Map;a.set(n,l)}else a=Ku,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(t))return l;for(l.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var u=n[a];if(!(u[wl]||u[Yt]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(e)||"";i=t+i;var r=l.get(i);r?r.push(u):l.set(i,[u])}}return l}function Do(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function W1(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Ho(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function $1(t,e,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Dl(l.href),u=e.querySelector(Ta(a));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Ju.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=u,Gt(u);return}u=e.ownerDocument||e,l=Uo(l),(a=xe.get(a))&&_c(l,a),u=u.createElement("link"),Gt(u);var i=u;i._p=new Promise(function(r,p){i.onload=r,i.onerror=p}),Zt(u,"link",l),n.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=Ju.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var jc=0;function F1(t,e){return t.stylesheets&&t.count===0&&Wu(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var l=setTimeout(function(){if(t.stylesheets&&Wu(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&jc===0&&(jc=62500*U1());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Wu(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>jc?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function Ju(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ku=null;function Wu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ku=new Map,e.forEach(I1,t),ku=null,Ju.call(t))}function I1(t,e){if(!(e.state.loading&4)){var n=ku.get(t);if(n)var l=n.get(null);else{n=new Map,ku.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<a.length;u++){var i=a[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(n.set(i.dataset.precedence,i),l=i)}l&&n.set(null,l)}a=e.instance,i=a.getAttribute("data-precedence"),u=n.get(i)||l,u===l&&n.set(null,a),n.set(i,a),this.count++,l=Ju.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),u?u.parentNode.insertBefore(a,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var za={$$typeof:G,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function P1(t,e,n,l,a,u,i,r,p){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=mi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mi(0),this.hiddenUpdates=mi(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Lo(t,e,n,l,a,u,i,r,p,j,R,N){return t=new P1(t,e,n,i,p,j,R,N,r),e=1,u===!0&&(e|=24),u=fe(3,null,null,e),t.current=u,u.stateNode=t,e=tf(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:l,isDehydrated:n,cache:e},af(u),t}function Bo(t){return t?(t=ol,t):ol}function Go(t,e,n,l,a,u){a=Bo(a),l.context===null?l.context=a:l.pendingContext=a,l=on(e),l.payload={element:n},u=u===void 0?null:u,u!==null&&(l.callback=u),n=hn(t,l,e),n!==null&&(ne(n,t,e),ua(n,t,e))}function Xo(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function xc(t,e){Xo(t,e),(t=t.alternate)&&Xo(t,e)}function qo(t){if(t.tag===13||t.tag===31){var e=Gn(t,67108864);e!==null&&ne(e,t,67108864),xc(t,67108864)}}function Yo(t){if(t.tag===13||t.tag===31){var e=oe();e=gi(e);var n=Gn(t,e);n!==null&&ne(n,t,e),xc(t,e)}}var $u=!0;function th(t,e,n,l){var a=U.T;U.T=null;var u=L.p;try{L.p=2,Ec(t,e,n,l)}finally{L.p=u,U.T=a}}function eh(t,e,n,l){var a=U.T;U.T=null;var u=L.p;try{L.p=8,Ec(t,e,n,l)}finally{L.p=u,U.T=a}}function Ec(t,e,n,l){if($u){var a=Tc(l);if(a===null)dc(t,e,l,Fu,n),Qo(t,l);else if(lh(a,t,e,n,l))l.stopPropagation();else if(Qo(t,l),e&4&&-1<nh.indexOf(t)){for(;a!==null;){var u=el(a);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=Nn(u.pendingLanes);if(i!==0){var r=u;for(r.pendingLanes|=2,r.entangledLanes|=2;i;){var p=1<<31-ue(i);r.entanglements[1]|=p,i&=~p}De(u),(dt&6)===0&&(Nu=le()+500,Sa(0))}}break;case 31:case 13:r=Gn(u,2),r!==null&&ne(r,u,2),Hu(),xc(u,2)}if(u=Tc(l),u===null&&dc(t,e,l,Fu,n),u===a)break;a=u}a!==null&&l.stopPropagation()}else dc(t,e,l,null,n)}}function Tc(t){return t=Ai(t),Ac(t)}var Fu=null;function Ac(t){if(Fu=null,t=tl(t),t!==null){var e=o(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=g(e),t!==null)return t;t=null}else if(n===31){if(t=z(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Fu=t,null}function wo(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y0()){case Wc:return 2;case $c:return 8;case qa:case w0:return 32;case Fc:return 268435456;default:return 32}default:return 32}}var zc=!1,En=null,Tn=null,An=null,Ma=new Map,Ca=new Map,zn=[],nh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qo(t,e){switch(t){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":Ma.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(e.pointerId)}}function Ra(t,e,n,l,a,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:n,eventSystemFlags:l,nativeEvent:u,targetContainers:[a]},e!==null&&(e=el(e),e!==null&&qo(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function lh(t,e,n,l,a){switch(e){case"focusin":return En=Ra(En,t,e,n,l,a),!0;case"dragenter":return Tn=Ra(Tn,t,e,n,l,a),!0;case"mouseover":return An=Ra(An,t,e,n,l,a),!0;case"pointerover":var u=a.pointerId;return Ma.set(u,Ra(Ma.get(u)||null,t,e,n,l,a)),!0;case"gotpointercapture":return u=a.pointerId,Ca.set(u,Ra(Ca.get(u)||null,t,e,n,l,a)),!0}return!1}function Vo(t){var e=tl(t.target);if(e!==null){var n=o(e);if(n!==null){if(e=n.tag,e===13){if(e=g(n),e!==null){t.blockedOn=e,lr(t.priority,function(){Yo(n)});return}}else if(e===31){if(e=z(n),e!==null){t.blockedOn=e,lr(t.priority,function(){Yo(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Iu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Tc(t.nativeEvent);if(n===null){n=t.nativeEvent;var l=new n.constructor(n.type,n);Ti=l,n.target.dispatchEvent(l),Ti=null}else return e=el(n),e!==null&&qo(e),t.blockedOn=n,!1;e.shift()}return!0}function Zo(t,e,n){Iu(t)&&n.delete(e)}function ah(){zc=!1,En!==null&&Iu(En)&&(En=null),Tn!==null&&Iu(Tn)&&(Tn=null),An!==null&&Iu(An)&&(An=null),Ma.forEach(Zo),Ca.forEach(Zo)}function Pu(t,e){t.blockedOn===e&&(t.blockedOn=null,zc||(zc=!0,f.unstable_scheduleCallback(f.unstable_NormalPriority,ah)))}var ti=null;function Ko(t){ti!==t&&(ti=t,f.unstable_scheduleCallback(f.unstable_NormalPriority,function(){ti===t&&(ti=null);for(var e=0;e<t.length;e+=3){var n=t[e],l=t[e+1],a=t[e+2];if(typeof l!="function"){if(Ac(l||n)===null)continue;break}var u=el(n);u!==null&&(t.splice(e,3),e-=3,Tf(u,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function Ll(t){function e(p){return Pu(p,t)}En!==null&&Pu(En,t),Tn!==null&&Pu(Tn,t),An!==null&&Pu(An,t),Ma.forEach(e),Ca.forEach(e);for(var n=0;n<zn.length;n++){var l=zn[n];l.blockedOn===t&&(l.blockedOn=null)}for(;0<zn.length&&(n=zn[0],n.blockedOn===null);)Vo(n),n.blockedOn===null&&zn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],u=n[l+1],i=a[$t]||null;if(typeof u=="function")i||Ko(n);else if(i){var r=null;if(u&&u.hasAttribute("formAction")){if(a=u,i=u[$t]||null)r=i.formAction;else if(Ac(a)!==null)continue}else r=i.action;typeof r=="function"?n[l+1]=r:(n.splice(l,3),l-=3),Ko(n)}}}function Jo(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return a=i})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function Mc(t){this._internalRoot=t}ei.prototype.render=Mc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(c(409));var n=e.current,l=oe();Go(n,l,t,e,null,null)},ei.prototype.unmount=Mc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Go(t.current,2,null,t,null,null),Hu(),e[Pn]=null}};function ei(t){this._internalRoot=t}ei.prototype.unstable_scheduleHydration=function(t){if(t){var e=nr();t={blockedOn:null,target:t,priority:e};for(var n=0;n<zn.length&&e!==0&&e<zn[n].priority;n++);zn.splice(n,0,t),n===0&&Vo(t)}};var ko=d.version;if(ko!=="19.2.4")throw Error(c(527,ko,"19.2.4"));L.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(c(188)):(t=Object.keys(t).join(","),Error(c(268,t)));return t=b(e),t=t!==null?T(t):null,t=t===null?null:t.stateNode,t};var uh={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ni=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ni.isDisabled&&ni.supportsFiber)try{Xl=ni.inject(uh),ae=ni}catch{}}return Oa.createRoot=function(t,e){if(!h(t))throw Error(c(299));var n=!1,l="",a=ts,u=es,i=ns;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Lo(t,1,!1,null,null,n,l,null,a,u,i,Jo),t[Pn]=e.current,rc(t),new Mc(e)},Oa.hydrateRoot=function(t,e,n){if(!h(t))throw Error(c(299));var l=!1,a="",u=ts,i=es,r=ns,p=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(r=n.onRecoverableError),n.formState!==void 0&&(p=n.formState)),e=Lo(t,1,!0,e,n??null,l,a,p,u,i,r,Jo),e.context=Bo(null),n=e.current,l=oe(),l=gi(l),a=on(l),a.callback=null,hn(n,a,l),n=l,e.current.lanes=n,Yl(e,n),De(e),t[Pn]=e.current,rc(t),new ei(e)},Oa.version="19.2.4",Oa}var a0;function bh(){if(a0)return Uc.exports;a0=1;function f(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)}catch(d){console.error(d)}}return f(),Uc.exports=ph(),Uc.exports}var mh=bh();const gh=s0(mh);/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var u0="popstate";function vh(f={}){function d(h,o){let{pathname:g="/",search:z="",hash:y=""}=Fn(h.location.hash.substring(1));return!g.startsWith("/")&&!g.startsWith(".")&&(g="/"+g),Gc("",{pathname:g,search:z,hash:y},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function s(h,o){let g=h.document.querySelector("base"),z="";if(g&&g.getAttribute("href")){let y=h.location.href,b=y.indexOf("#");z=b===-1?y:y.slice(0,b)}return z+"#"+(typeof o=="string"?o:Ha(o))}function c(h,o){Ce(h.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(o)})`)}return _h(d,s,c,f)}function At(f,d){if(f===!1||f===null||typeof f>"u")throw new Error(d)}function Ce(f,d){if(!f){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function yh(){return Math.random().toString(36).substring(2,10)}function i0(f,d){return{usr:f.state,key:f.key,idx:d}}function Gc(f,d,s=null,c){return{pathname:typeof f=="string"?f:f.pathname,search:"",hash:"",...typeof d=="string"?Fn(d):d,state:s,key:d&&d.key||c||yh()}}function Ha({pathname:f="/",search:d="",hash:s=""}){return d&&d!=="?"&&(f+=d.charAt(0)==="?"?d:"?"+d),s&&s!=="#"&&(f+=s.charAt(0)==="#"?s:"#"+s),f}function Fn(f){let d={};if(f){let s=f.indexOf("#");s>=0&&(d.hash=f.substring(s),f=f.substring(0,s));let c=f.indexOf("?");c>=0&&(d.search=f.substring(c),f=f.substring(0,c)),f&&(d.pathname=f)}return d}function _h(f,d,s,c={}){let{window:h=document.defaultView,v5Compat:o=!1}=c,g=h.history,z="POP",y=null,b=T();b==null&&(b=0,g.replaceState({...g.state,idx:b},""));function T(){return(g.state||{idx:null}).idx}function E(){z="POP";let q=T(),K=q==null?null:q-b;b=q,y&&y({action:z,location:V.location,delta:K})}function H(q,K){z="PUSH";let $=Gc(V.location,q,K);s&&s($,q),b=T()+1;let G=i0($,b),yt=V.createHref($);try{g.pushState(G,"",yt)}catch(pt){if(pt instanceof DOMException&&pt.name==="DataCloneError")throw pt;h.location.assign(yt)}o&&y&&y({action:z,location:V.location,delta:1})}function w(q,K){z="REPLACE";let $=Gc(V.location,q,K);s&&s($,q),b=T();let G=i0($,b),yt=V.createHref($);g.replaceState(G,"",yt),o&&y&&y({action:z,location:V.location,delta:0})}function W(q){return Sh(q)}let V={get action(){return z},get location(){return f(h,g)},listen(q){if(y)throw new Error("A history only accepts one active listener");return h.addEventListener(u0,E),y=q,()=>{h.removeEventListener(u0,E),y=null}},createHref(q){return d(h,q)},createURL:W,encodeLocation(q){let K=W(q);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:H,replace:w,go(q){return g.go(q)}};return V}function Sh(f,d=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),At(s,"No window.location.(origin|href) available to create URL");let c=typeof f=="string"?f:Ha(f);return c=c.replace(/ $/,"%20"),!d&&c.startsWith("//")&&(c=s+c),new URL(c,s)}function h0(f,d,s="/"){return jh(f,d,s,!1)}function jh(f,d,s,c){let h=typeof d=="string"?Fn(d):d,o=nn(h.pathname||"/",s);if(o==null)return null;let g=p0(f);xh(g);let z=null;for(let y=0;z==null&&y<g.length;++y){let b=Dh(o);z=Oh(g[y],b,c)}return z}function p0(f,d=[],s=[],c="",h=!1){let o=(g,z,y=h,b)=>{let T={relativePath:b===void 0?g.path||"":b,caseSensitive:g.caseSensitive===!0,childrenIndex:z,route:g};if(T.relativePath.startsWith("/")){if(!T.relativePath.startsWith(c)&&y)return;At(T.relativePath.startsWith(c),`Absolute route path "${T.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),T.relativePath=T.relativePath.slice(c.length)}let E=en([c,T.relativePath]),H=s.concat(T);g.children&&g.children.length>0&&(At(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),p0(g.children,d,H,E,y)),!(g.path==null&&!g.index)&&d.push({path:E,score:Rh(E,g.index),routesMeta:H})};return f.forEach((g,z)=>{var y;if(g.path===""||!((y=g.path)!=null&&y.includes("?")))o(g,z);else for(let b of b0(g.path))o(g,z,!0,b)}),d}function b0(f){let d=f.split("/");if(d.length===0)return[];let[s,...c]=d,h=s.endsWith("?"),o=s.replace(/\?$/,"");if(c.length===0)return h?[o,""]:[o];let g=b0(c.join("/")),z=[];return z.push(...g.map(y=>y===""?o:[o,y].join("/"))),h&&z.push(...g),z.map(y=>f.startsWith("/")&&y===""?"/":y)}function xh(f){f.sort((d,s)=>d.score!==s.score?s.score-d.score:Uh(d.routesMeta.map(c=>c.childrenIndex),s.routesMeta.map(c=>c.childrenIndex)))}var Eh=/^:[\w-]+$/,Th=3,Ah=2,zh=1,Mh=10,Ch=-2,f0=f=>f==="*";function Rh(f,d){let s=f.split("/"),c=s.length;return s.some(f0)&&(c+=Ch),d&&(c+=Ah),s.filter(h=>!f0(h)).reduce((h,o)=>h+(Eh.test(o)?Th:o===""?zh:Mh),c)}function Uh(f,d){return f.length===d.length&&f.slice(0,-1).every((c,h)=>c===d[h])?f[f.length-1]-d[d.length-1]:0}function Oh(f,d,s=!1){let{routesMeta:c}=f,h={},o="/",g=[];for(let z=0;z<c.length;++z){let y=c[z],b=z===c.length-1,T=o==="/"?d:d.slice(o.length)||"/",E=ii({path:y.relativePath,caseSensitive:y.caseSensitive,end:b},T),H=y.route;if(!E&&b&&s&&!c[c.length-1].route.index&&(E=ii({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},T)),!E)return null;Object.assign(h,E.params),g.push({params:h,pathname:en([o,E.pathname]),pathnameBase:Gh(en([o,E.pathnameBase])),route:H}),E.pathnameBase!=="/"&&(o=en([o,E.pathnameBase]))}return g}function ii(f,d){typeof f=="string"&&(f={path:f,caseSensitive:!1,end:!0});let[s,c]=Nh(f.path,f.caseSensitive,f.end),h=d.match(s);if(!h)return null;let o=h[0],g=o.replace(/(.)\/+$/,"$1"),z=h.slice(1);return{params:c.reduce((b,{paramName:T,isOptional:E},H)=>{if(T==="*"){let W=z[H]||"";g=o.slice(0,o.length-W.length).replace(/(.)\/+$/,"$1")}const w=z[H];return E&&!w?b[T]=void 0:b[T]=(w||"").replace(/%2F/g,"/"),b},{}),pathname:o,pathnameBase:g,pattern:f}}function Nh(f,d=!1,s=!0){Ce(f==="*"||!f.endsWith("*")||f.endsWith("/*"),`Route path "${f}" will be treated as if it were "${f.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${f.replace(/\*$/,"/*")}".`);let c=[],h="^"+f.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,z,y)=>(c.push({paramName:z,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return f.endsWith("*")?(c.push({paramName:"*"}),h+=f==="*"||f==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?h+="\\/*$":f!==""&&f!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,d?void 0:"i"),c]}function Dh(f){try{return f.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return Ce(!1,`The URL path "${f}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),f}}function nn(f,d){if(d==="/")return f;if(!f.toLowerCase().startsWith(d.toLowerCase()))return null;let s=d.endsWith("/")?d.length-1:d.length,c=f.charAt(s);return c&&c!=="/"?null:f.slice(s)||"/"}var Hh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Lh(f,d="/"){let{pathname:s,search:c="",hash:h=""}=typeof f=="string"?Fn(f):f,o;return s?(s=s.replace(/\/\/+/g,"/"),s.startsWith("/")?o=c0(s.substring(1),"/"):o=c0(s,d)):o=d,{pathname:o,search:Xh(c),hash:qh(h)}}function c0(f,d){let s=d.replace(/\/+$/,"").split("/");return f.split("/").forEach(h=>{h===".."?s.length>1&&s.pop():h!=="."&&s.push(h)}),s.length>1?s.join("/"):"/"}function Hc(f,d,s,c){return`Cannot include a '${f}' character in a manually specified \`to.${d}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Bh(f){return f.filter((d,s)=>s===0||d.route.path&&d.route.path.length>0)}function m0(f){let d=Bh(f);return d.map((s,c)=>c===d.length-1?s.pathname:s.pathnameBase)}function g0(f,d,s,c=!1){let h;typeof f=="string"?h=Fn(f):(h={...f},At(!h.pathname||!h.pathname.includes("?"),Hc("?","pathname","search",h)),At(!h.pathname||!h.pathname.includes("#"),Hc("#","pathname","hash",h)),At(!h.search||!h.search.includes("#"),Hc("#","search","hash",h)));let o=f===""||h.pathname==="",g=o?"/":h.pathname,z;if(g==null)z=s;else{let E=d.length-1;if(!c&&g.startsWith("..")){let H=g.split("/");for(;H[0]==="..";)H.shift(),E-=1;h.pathname=H.join("/")}z=E>=0?d[E]:"/"}let y=Lh(h,z),b=g&&g!=="/"&&g.endsWith("/"),T=(o||g===".")&&s.endsWith("/");return!y.pathname.endsWith("/")&&(b||T)&&(y.pathname+="/"),y}var en=f=>f.join("/").replace(/\/\/+/g,"/"),Gh=f=>f.replace(/\/+$/,"").replace(/^\/*/,"/"),Xh=f=>!f||f==="?"?"":f.startsWith("?")?f:"?"+f,qh=f=>!f||f==="#"?"":f.startsWith("#")?f:"#"+f,Yh=class{constructor(f,d,s,c=!1){this.status=f,this.statusText=d||"",this.internal=c,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function wh(f){return f!=null&&typeof f.status=="number"&&typeof f.statusText=="string"&&typeof f.internal=="boolean"&&"data"in f}function Qh(f){return f.map(d=>d.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var v0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function y0(f,d){let s=f;if(typeof s!="string"||!Hh.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let c=s,h=!1;if(v0)try{let o=new URL(window.location.href),g=s.startsWith("//")?new URL(o.protocol+s):new URL(s),z=nn(g.pathname,d);g.origin===o.origin&&z!=null?s=z+g.search+g.hash:h=!0}catch{Ce(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:h,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var _0=["POST","PUT","PATCH","DELETE"];new Set(_0);var Vh=["GET",..._0];new Set(Vh);var Bl=C.createContext(null);Bl.displayName="DataRouter";var ci=C.createContext(null);ci.displayName="DataRouterState";var Zh=C.createContext(!1),S0=C.createContext({isTransitioning:!1});S0.displayName="ViewTransition";var Kh=C.createContext(new Map);Kh.displayName="Fetchers";var Jh=C.createContext(null);Jh.displayName="Await";var Ee=C.createContext(null);Ee.displayName="Navigation";var La=C.createContext(null);La.displayName="Location";var He=C.createContext({outlet:null,matches:[],isDataRoute:!1});He.displayName="Route";var Yc=C.createContext(null);Yc.displayName="RouteError";var j0="REACT_ROUTER_ERROR",kh="REDIRECT",Wh="ROUTE_ERROR_RESPONSE";function $h(f){if(f.startsWith(`${j0}:${kh}:{`))try{let d=JSON.parse(f.slice(28));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string"&&typeof d.location=="string"&&typeof d.reloadDocument=="boolean"&&typeof d.replace=="boolean")return d}catch{}}function Fh(f){if(f.startsWith(`${j0}:${Wh}:{`))try{let d=JSON.parse(f.slice(40));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string")return new Yh(d.status,d.statusText,d.data)}catch{}}function Ih(f,{relative:d}={}){At(Ba(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:c}=C.useContext(Ee),{hash:h,pathname:o,search:g}=Ga(f,{relative:d}),z=o;return s!=="/"&&(z=o==="/"?s:en([s,o])),c.createHref({pathname:z,search:g,hash:h})}function Ba(){return C.useContext(La)!=null}function Rn(){return At(Ba(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(La).location}var x0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function E0(f){C.useContext(Ee).static||C.useLayoutEffect(f)}function wc(){let{isDataRoute:f}=C.useContext(He);return f?op():Ph()}function Ph(){At(Ba(),"useNavigate() may be used only in the context of a <Router> component.");let f=C.useContext(Bl),{basename:d,navigator:s}=C.useContext(Ee),{matches:c}=C.useContext(He),{pathname:h}=Rn(),o=JSON.stringify(m0(c)),g=C.useRef(!1);return E0(()=>{g.current=!0}),C.useCallback((y,b={})=>{if(Ce(g.current,x0),!g.current)return;if(typeof y=="number"){s.go(y);return}let T=g0(y,JSON.parse(o),h,b.relative==="path");f==null&&d!=="/"&&(T.pathname=T.pathname==="/"?d:en([d,T.pathname])),(b.replace?s.replace:s.push)(T,b.state,b)},[d,s,o,h,f])}C.createContext(null);function tp(){let{matches:f}=C.useContext(He),d=f[f.length-1];return d?d.params:{}}function Ga(f,{relative:d}={}){let{matches:s}=C.useContext(He),{pathname:c}=Rn(),h=JSON.stringify(m0(s));return C.useMemo(()=>g0(f,JSON.parse(h),c,d==="path"),[f,h,c,d])}function ep(f,d){return T0(f,d)}function T0(f,d,s,c,h){var $;At(Ba(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=C.useContext(Ee),{matches:g}=C.useContext(He),z=g[g.length-1],y=z?z.params:{},b=z?z.pathname:"/",T=z?z.pathnameBase:"/",E=z&&z.route;{let G=E&&E.path||"";z0(b,!E||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let H=Rn(),w;if(d){let G=typeof d=="string"?Fn(d):d;At(T==="/"||(($=G.pathname)==null?void 0:$.startsWith(T)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${T}" but pathname "${G.pathname}" was given in the \`location\` prop.`),w=G}else w=H;let W=w.pathname||"/",V=W;if(T!=="/"){let G=T.replace(/^\//,"").split("/");V="/"+W.replace(/^\//,"").split("/").slice(G.length).join("/")}let q=h0(f,{pathname:V});Ce(E||q!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Ce(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let K=ip(q&&q.map(G=>Object.assign({},G,{params:Object.assign({},y,G.params),pathname:en([T,o.encodeLocation?o.encodeLocation(G.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?T:en([T,o.encodeLocation?o.encodeLocation(G.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathnameBase])})),g,s,c,h);return d&&K?C.createElement(La.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},K):K}function np(){let f=sp(),d=wh(f)?`${f.status} ${f.statusText}`:f instanceof Error?f.message:JSON.stringify(f),s=f instanceof Error?f.stack:null,c="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:c},o={padding:"2px 4px",backgroundColor:c},g=null;return console.error("Error handled by React Router default ErrorBoundary:",f),g=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:o},"ErrorBoundary")," or"," ",C.createElement("code",{style:o},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},d),s?C.createElement("pre",{style:h},s):null,g)}var lp=C.createElement(np,null),A0=class extends C.Component{constructor(f){super(f),this.state={location:f.location,revalidation:f.revalidation,error:f.error}}static getDerivedStateFromError(f){return{error:f}}static getDerivedStateFromProps(f,d){return d.location!==f.location||d.revalidation!=="idle"&&f.revalidation==="idle"?{error:f.error,location:f.location,revalidation:f.revalidation}:{error:f.error!==void 0?f.error:d.error,location:d.location,revalidation:f.revalidation||d.revalidation}}componentDidCatch(f,d){this.props.onError?this.props.onError(f,d):console.error("React Router caught the following error during render",f)}render(){let f=this.state.error;if(this.context&&typeof f=="object"&&f&&"digest"in f&&typeof f.digest=="string"){const s=Fh(f.digest);s&&(f=s)}let d=f!==void 0?C.createElement(He.Provider,{value:this.props.routeContext},C.createElement(Yc.Provider,{value:f,children:this.props.component})):this.props.children;return this.context?C.createElement(ap,{error:f},d):d}};A0.contextType=Zh;var Lc=new WeakMap;function ap({children:f,error:d}){let{basename:s}=C.useContext(Ee);if(typeof d=="object"&&d&&"digest"in d&&typeof d.digest=="string"){let c=$h(d.digest);if(c){let h=Lc.get(d);if(h)throw h;let o=y0(c.location,s);if(v0&&!Lc.get(d))if(o.isExternal||c.reloadDocument)window.location.href=o.absoluteURL||o.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:c.replace}));throw Lc.set(d,g),g}return C.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o.absoluteURL||o.to}`})}}return f}function up({routeContext:f,match:d,children:s}){let c=C.useContext(Bl);return c&&c.static&&c.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=d.route.id),C.createElement(He.Provider,{value:f},s)}function ip(f,d=[],s=null,c=null,h=null){if(f==null){if(!s)return null;if(s.errors)f=s.matches;else if(d.length===0&&!s.initialized&&s.matches.length>0)f=s.matches;else return null}let o=f,g=s==null?void 0:s.errors;if(g!=null){let T=o.findIndex(E=>E.route.id&&(g==null?void 0:g[E.route.id])!==void 0);At(T>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),o=o.slice(0,Math.min(o.length,T+1))}let z=!1,y=-1;if(s)for(let T=0;T<o.length;T++){let E=o[T];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(y=T),E.route.id){let{loaderData:H,errors:w}=s,W=E.route.loader&&!H.hasOwnProperty(E.route.id)&&(!w||w[E.route.id]===void 0);if(E.route.lazy||W){z=!0,y>=0?o=o.slice(0,y+1):o=[o[0]];break}}}let b=s&&c?(T,E)=>{var H,w;c(T,{location:s.location,params:((w=(H=s.matches)==null?void 0:H[0])==null?void 0:w.params)??{},unstable_pattern:Qh(s.matches),errorInfo:E})}:void 0;return o.reduceRight((T,E,H)=>{let w,W=!1,V=null,q=null;s&&(w=g&&E.route.id?g[E.route.id]:void 0,V=E.route.errorElement||lp,z&&(y<0&&H===0?(z0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),W=!0,q=null):y===H&&(W=!0,q=E.route.hydrateFallbackElement||null)));let K=d.concat(o.slice(0,H+1)),$=()=>{let G;return w?G=V:W?G=q:E.route.Component?G=C.createElement(E.route.Component,null):E.route.element?G=E.route.element:G=T,C.createElement(up,{match:E,routeContext:{outlet:T,matches:K,isDataRoute:s!=null},children:G})};return s&&(E.route.ErrorBoundary||E.route.errorElement||H===0)?C.createElement(A0,{location:s.location,revalidation:s.revalidation,component:V,error:w,children:$(),routeContext:{outlet:null,matches:K,isDataRoute:!0},onError:b}):$()},null)}function Qc(f){return`${f} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fp(f){let d=C.useContext(Bl);return At(d,Qc(f)),d}function cp(f){let d=C.useContext(ci);return At(d,Qc(f)),d}function rp(f){let d=C.useContext(He);return At(d,Qc(f)),d}function Vc(f){let d=rp(f),s=d.matches[d.matches.length-1];return At(s.route.id,`${f} can only be used on routes that contain a unique "id"`),s.route.id}function dp(){return Vc("useRouteId")}function sp(){var c;let f=C.useContext(Yc),d=cp("useRouteError"),s=Vc("useRouteError");return f!==void 0?f:(c=d.errors)==null?void 0:c[s]}function op(){let{router:f}=fp("useNavigate"),d=Vc("useNavigate"),s=C.useRef(!1);return E0(()=>{s.current=!0}),C.useCallback(async(h,o={})=>{Ce(s.current,x0),s.current&&(typeof h=="number"?await f.navigate(h):await f.navigate(h,{fromRouteId:d,...o}))},[f,d])}var r0={};function z0(f,d,s){!d&&!r0[f]&&(r0[f]=!0,Ce(!1,s))}C.memo(hp);function hp({routes:f,future:d,state:s,onError:c}){return T0(f,void 0,s,c,d)}function Da(f){At(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function pp({basename:f="/",children:d=null,location:s,navigationType:c="POP",navigator:h,static:o=!1,unstable_useTransitions:g}){At(!Ba(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let z=f.replace(/^\/*/,"/"),y=C.useMemo(()=>({basename:z,navigator:h,static:o,unstable_useTransitions:g,future:{}}),[z,h,o,g]);typeof s=="string"&&(s=Fn(s));let{pathname:b="/",search:T="",hash:E="",state:H=null,key:w="default"}=s,W=C.useMemo(()=>{let V=nn(b,z);return V==null?null:{location:{pathname:V,search:T,hash:E,state:H,key:w},navigationType:c}},[z,b,T,E,H,w,c]);return Ce(W!=null,`<Router basename="${z}"> is not able to match the URL "${b}${T}${E}" because it does not start with the basename, so the <Router> won't render anything.`),W==null?null:C.createElement(Ee.Provider,{value:y},C.createElement(La.Provider,{children:d,value:W}))}function bp({children:f,location:d}){return ep(Xc(f),d)}function Xc(f,d=[]){let s=[];return C.Children.forEach(f,(c,h)=>{if(!C.isValidElement(c))return;let o=[...d,h];if(c.type===C.Fragment){s.push.apply(s,Xc(c.props.children,o));return}At(c.type===Da,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),At(!c.props.index||!c.props.children,"An index route cannot have child routes.");let g={id:c.props.id||o.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(g.children=Xc(c.props.children,o)),s.push(g)}),s}var ai="get",ui="application/x-www-form-urlencoded";function ri(f){return typeof HTMLElement<"u"&&f instanceof HTMLElement}function mp(f){return ri(f)&&f.tagName.toLowerCase()==="button"}function gp(f){return ri(f)&&f.tagName.toLowerCase()==="form"}function vp(f){return ri(f)&&f.tagName.toLowerCase()==="input"}function yp(f){return!!(f.metaKey||f.altKey||f.ctrlKey||f.shiftKey)}function _p(f,d){return f.button===0&&(!d||d==="_self")&&!yp(f)}var li=null;function Sp(){if(li===null)try{new FormData(document.createElement("form"),0),li=!1}catch{li=!0}return li}var jp=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Bc(f){return f!=null&&!jp.has(f)?(Ce(!1,`"${f}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ui}"`),null):f}function xp(f,d){let s,c,h,o,g;if(gp(f)){let z=f.getAttribute("action");c=z?nn(z,d):null,s=f.getAttribute("method")||ai,h=Bc(f.getAttribute("enctype"))||ui,o=new FormData(f)}else if(mp(f)||vp(f)&&(f.type==="submit"||f.type==="image")){let z=f.form;if(z==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=f.getAttribute("formaction")||z.getAttribute("action");if(c=y?nn(y,d):null,s=f.getAttribute("formmethod")||z.getAttribute("method")||ai,h=Bc(f.getAttribute("formenctype"))||Bc(z.getAttribute("enctype"))||ui,o=new FormData(z,f),!Sp()){let{name:b,type:T,value:E}=f;if(T==="image"){let H=b?`${b}.`:"";o.append(`${H}x`,"0"),o.append(`${H}y`,"0")}else b&&o.append(b,E)}}else{if(ri(f))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=ai,c=null,h=ui,g=f}return o&&h==="text/plain"&&(g=o,o=void 0),{action:c,method:s.toLowerCase(),encType:h,formData:o,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Zc(f,d){if(f===!1||f===null||typeof f>"u")throw new Error(d)}function Ep(f,d,s,c){let h=typeof f=="string"?new URL(f,typeof window>"u"?"server://singlefetch/":window.location.origin):f;return s?h.pathname.endsWith("/")?h.pathname=`${h.pathname}_.${c}`:h.pathname=`${h.pathname}.${c}`:h.pathname==="/"?h.pathname=`_root.${c}`:d&&nn(h.pathname,d)==="/"?h.pathname=`${d.replace(/\/$/,"")}/_root.${c}`:h.pathname=`${h.pathname.replace(/\/$/,"")}.${c}`,h}async function Tp(f,d){if(f.id in d)return d[f.id];try{let s=await import(f.module);return d[f.id]=s,s}catch(s){return console.error(`Error loading route module \`${f.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ap(f){return f==null?!1:f.href==null?f.rel==="preload"&&typeof f.imageSrcSet=="string"&&typeof f.imageSizes=="string":typeof f.rel=="string"&&typeof f.href=="string"}async function zp(f,d,s){let c=await Promise.all(f.map(async h=>{let o=d.routes[h.route.id];if(o){let g=await Tp(o,s);return g.links?g.links():[]}return[]}));return Up(c.flat(1).filter(Ap).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function d0(f,d,s,c,h,o){let g=(y,b)=>s[b]?y.route.id!==s[b].route.id:!0,z=(y,b)=>{var T;return s[b].pathname!==y.pathname||((T=s[b].route.path)==null?void 0:T.endsWith("*"))&&s[b].params["*"]!==y.params["*"]};return o==="assets"?d.filter((y,b)=>g(y,b)||z(y,b)):o==="data"?d.filter((y,b)=>{var E;let T=c.routes[y.route.id];if(!T||!T.hasLoader)return!1;if(g(y,b)||z(y,b))return!0;if(y.route.shouldRevalidate){let H=y.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:((E=s[0])==null?void 0:E.params)||{},nextUrl:new URL(f,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof H=="boolean")return H}return!0}):[]}function Mp(f,d,{includeHydrateFallback:s}={}){return Cp(f.map(c=>{let h=d.routes[c.route.id];if(!h)return[];let o=[h.module];return h.clientActionModule&&(o=o.concat(h.clientActionModule)),h.clientLoaderModule&&(o=o.concat(h.clientLoaderModule)),s&&h.hydrateFallbackModule&&(o=o.concat(h.hydrateFallbackModule)),h.imports&&(o=o.concat(h.imports)),o}).flat(1))}function Cp(f){return[...new Set(f)]}function Rp(f){let d={},s=Object.keys(f).sort();for(let c of s)d[c]=f[c];return d}function Up(f,d){let s=new Set;return new Set(d),f.reduce((c,h)=>{let o=JSON.stringify(Rp(h));return s.has(o)||(s.add(o),c.push({key:o,link:h})),c},[])}function M0(){let f=C.useContext(Bl);return Zc(f,"You must render this element inside a <DataRouterContext.Provider> element"),f}function Op(){let f=C.useContext(ci);return Zc(f,"You must render this element inside a <DataRouterStateContext.Provider> element"),f}var Kc=C.createContext(void 0);Kc.displayName="FrameworkContext";function C0(){let f=C.useContext(Kc);return Zc(f,"You must render this element inside a <HydratedRouter> element"),f}function Np(f,d){let s=C.useContext(Kc),[c,h]=C.useState(!1),[o,g]=C.useState(!1),{onFocus:z,onBlur:y,onMouseEnter:b,onMouseLeave:T,onTouchStart:E}=d,H=C.useRef(null);C.useEffect(()=>{if(f==="render"&&g(!0),f==="viewport"){let V=K=>{K.forEach($=>{g($.isIntersecting)})},q=new IntersectionObserver(V,{threshold:.5});return H.current&&q.observe(H.current),()=>{q.disconnect()}}},[f]),C.useEffect(()=>{if(c){let V=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(V)}}},[c]);let w=()=>{h(!0)},W=()=>{h(!1),g(!1)};return s?f!=="intent"?[o,H,{}]:[o,H,{onFocus:Na(z,w),onBlur:Na(y,W),onMouseEnter:Na(b,w),onMouseLeave:Na(T,W),onTouchStart:Na(E,w)}]:[!1,H,{}]}function Na(f,d){return s=>{f&&f(s),s.defaultPrevented||d(s)}}function Dp({page:f,...d}){let{router:s}=M0(),c=C.useMemo(()=>h0(s.routes,f,s.basename),[s.routes,f,s.basename]);return c?C.createElement(Lp,{page:f,matches:c,...d}):null}function Hp(f){let{manifest:d,routeModules:s}=C0(),[c,h]=C.useState([]);return C.useEffect(()=>{let o=!1;return zp(f,d,s).then(g=>{o||h(g)}),()=>{o=!0}},[f,d,s]),c}function Lp({page:f,matches:d,...s}){let c=Rn(),{future:h,manifest:o,routeModules:g}=C0(),{basename:z}=M0(),{loaderData:y,matches:b}=Op(),T=C.useMemo(()=>d0(f,d,b,o,c,"data"),[f,d,b,o,c]),E=C.useMemo(()=>d0(f,d,b,o,c,"assets"),[f,d,b,o,c]),H=C.useMemo(()=>{if(f===c.pathname+c.search+c.hash)return[];let V=new Set,q=!1;if(d.forEach($=>{var yt;let G=o.routes[$.route.id];!G||!G.hasLoader||(!T.some(pt=>pt.route.id===$.route.id)&&$.route.id in y&&((yt=g[$.route.id])!=null&&yt.shouldRevalidate)||G.hasClientLoader?q=!0:V.add($.route.id))}),V.size===0)return[];let K=Ep(f,z,h.unstable_trailingSlashAwareDataRequests,"data");return q&&V.size>0&&K.searchParams.set("_routes",d.filter($=>V.has($.route.id)).map($=>$.route.id).join(",")),[K.pathname+K.search]},[z,h.unstable_trailingSlashAwareDataRequests,y,c,o,T,d,f,g]),w=C.useMemo(()=>Mp(E,o),[E,o]),W=Hp(E);return C.createElement(C.Fragment,null,H.map(V=>C.createElement("link",{key:V,rel:"prefetch",as:"fetch",href:V,...s})),w.map(V=>C.createElement("link",{key:V,rel:"modulepreload",href:V,...s})),W.map(({key:V,link:q})=>C.createElement("link",{key:V,nonce:s.nonce,...q,crossOrigin:q.crossOrigin??s.crossOrigin})))}function Bp(...f){return d=>{f.forEach(s=>{typeof s=="function"?s(d):s!=null&&(s.current=d)})}}var Gp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Gp&&(window.__reactRouterVersion="7.13.0")}catch{}function Xp({basename:f,children:d,unstable_useTransitions:s,window:c}){let h=C.useRef();h.current==null&&(h.current=vh({window:c,v5Compat:!0}));let o=h.current,[g,z]=C.useState({action:o.action,location:o.location}),y=C.useCallback(b=>{s===!1?z(b):C.startTransition(()=>z(b))},[s]);return C.useLayoutEffect(()=>o.listen(y),[o,y]),C.createElement(pp,{basename:f,children:d,location:g.location,navigationType:g.action,navigator:o,unstable_useTransitions:s})}var R0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cn=C.forwardRef(function({onClick:d,discover:s="render",prefetch:c="none",relative:h,reloadDocument:o,replace:g,state:z,target:y,to:b,preventScrollReset:T,viewTransition:E,unstable_defaultShouldRevalidate:H,...w},W){let{basename:V,unstable_useTransitions:q}=C.useContext(Ee),K=typeof b=="string"&&R0.test(b),$=y0(b,V);b=$.to;let G=Ih(b,{relative:h}),[yt,pt,Et]=Np(c,w),I=Qp(b,{replace:g,state:z,target:y,preventScrollReset:T,relative:h,viewTransition:E,unstable_defaultShouldRevalidate:H,unstable_useTransitions:q});function Ct(he){d&&d(he),he.defaultPrevented||I(he)}let qt=C.createElement("a",{...w,...Et,href:$.absoluteURL||G,onClick:$.isExternal||o?d:Ct,ref:Bp(W,pt),target:y,"data-discover":!K&&s==="render"?"true":void 0});return yt&&!K?C.createElement(C.Fragment,null,qt,C.createElement(Dp,{page:G})):qt});Cn.displayName="Link";var qp=C.forwardRef(function({"aria-current":d="page",caseSensitive:s=!1,className:c="",end:h=!1,style:o,to:g,viewTransition:z,children:y,...b},T){let E=Ga(g,{relative:b.relative}),H=Rn(),w=C.useContext(ci),{navigator:W,basename:V}=C.useContext(Ee),q=w!=null&&kp(E)&&z===!0,K=W.encodeLocation?W.encodeLocation(E).pathname:E.pathname,$=H.pathname,G=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;s||($=$.toLowerCase(),G=G?G.toLowerCase():null,K=K.toLowerCase()),G&&V&&(G=nn(G,V)||G);const yt=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let pt=$===K||!h&&$.startsWith(K)&&$.charAt(yt)==="/",Et=G!=null&&(G===K||!h&&G.startsWith(K)&&G.charAt(K.length)==="/"),I={isActive:pt,isPending:Et,isTransitioning:q},Ct=pt?d:void 0,qt;typeof c=="function"?qt=c(I):qt=[c,pt?"active":null,Et?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let he=typeof o=="function"?o(I):o;return C.createElement(Cn,{...b,"aria-current":Ct,className:qt,ref:T,style:he,to:g,viewTransition:z},typeof y=="function"?y(I):y)});qp.displayName="NavLink";var Yp=C.forwardRef(({discover:f="render",fetcherKey:d,navigate:s,reloadDocument:c,replace:h,state:o,method:g=ai,action:z,onSubmit:y,relative:b,preventScrollReset:T,viewTransition:E,unstable_defaultShouldRevalidate:H,...w},W)=>{let{unstable_useTransitions:V}=C.useContext(Ee),q=Kp(),K=Jp(z,{relative:b}),$=g.toLowerCase()==="get"?"get":"post",G=typeof z=="string"&&R0.test(z),yt=pt=>{if(y&&y(pt),pt.defaultPrevented)return;pt.preventDefault();let Et=pt.nativeEvent.submitter,I=(Et==null?void 0:Et.getAttribute("formmethod"))||g,Ct=()=>q(Et||pt.currentTarget,{fetcherKey:d,method:I,navigate:s,replace:h,state:o,relative:b,preventScrollReset:T,viewTransition:E,unstable_defaultShouldRevalidate:H});V&&s!==!1?C.startTransition(()=>Ct()):Ct()};return C.createElement("form",{ref:W,method:$,action:K,onSubmit:c?y:yt,...w,"data-discover":!G&&f==="render"?"true":void 0})});Yp.displayName="Form";function wp(f){return`${f} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function U0(f){let d=C.useContext(Bl);return At(d,wp(f)),d}function Qp(f,{target:d,replace:s,state:c,preventScrollReset:h,relative:o,viewTransition:g,unstable_defaultShouldRevalidate:z,unstable_useTransitions:y}={}){let b=wc(),T=Rn(),E=Ga(f,{relative:o});return C.useCallback(H=>{if(_p(H,d)){H.preventDefault();let w=s!==void 0?s:Ha(T)===Ha(E),W=()=>b(f,{replace:w,state:c,preventScrollReset:h,relative:o,viewTransition:g,unstable_defaultShouldRevalidate:z});y?C.startTransition(()=>W()):W()}},[T,b,E,s,c,d,f,h,o,g,z,y])}var Vp=0,Zp=()=>`__${String(++Vp)}__`;function Kp(){let{router:f}=U0("useSubmit"),{basename:d}=C.useContext(Ee),s=dp(),c=f.fetch,h=f.navigate;return C.useCallback(async(o,g={})=>{let{action:z,method:y,encType:b,formData:T,body:E}=xp(o,d);if(g.navigate===!1){let H=g.fetcherKey||Zp();await c(H,s,g.action||z,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:T,body:E,formMethod:g.method||y,formEncType:g.encType||b,flushSync:g.flushSync})}else await h(g.action||z,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:T,body:E,formMethod:g.method||y,formEncType:g.encType||b,replace:g.replace,state:g.state,fromRouteId:s,flushSync:g.flushSync,viewTransition:g.viewTransition})},[c,h,d,s])}function Jp(f,{relative:d}={}){let{basename:s}=C.useContext(Ee),c=C.useContext(He);At(c,"useFormAction must be used inside a RouteContext");let[h]=c.matches.slice(-1),o={...Ga(f||".",{relative:d})},g=Rn();if(f==null){o.search=g.search;let z=new URLSearchParams(o.search),y=z.getAll("index");if(y.some(T=>T==="")){z.delete("index"),y.filter(E=>E).forEach(E=>z.append("index",E));let T=z.toString();o.search=T?`?${T}`:""}}return(!f||f===".")&&h.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(o.pathname=o.pathname==="/"?s:en([s,o.pathname])),Ha(o)}function kp(f,{relative:d}={}){let s=C.useContext(S0);At(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=U0("useViewTransitionState"),h=Ga(f,{relative:d});if(!s.isTransitioning)return!1;let o=nn(s.currentLocation.pathname,c)||s.currentLocation.pathname,g=nn(s.nextLocation.pathname,c)||s.nextLocation.pathname;return ii(h.pathname,g)!=null||ii(h.pathname,o)!=null}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=f=>f.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),O0=(...f)=>f.filter((d,s,c)=>!!d&&d.trim()!==""&&c.indexOf(d)===s).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $p={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=C.forwardRef(({color:f="currentColor",size:d=24,strokeWidth:s=2,absoluteStrokeWidth:c,className:h="",children:o,iconNode:g,...z},y)=>C.createElement("svg",{ref:y,...$p,width:d,height:d,stroke:f,strokeWidth:c?Number(s)*24/Number(d):s,className:O0("lucide",h),...z},[...g.map(([b,T])=>C.createElement(b,T)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=(f,d)=>{const s=C.forwardRef(({className:c,...h},o)=>C.createElement(Fp,{ref:o,iconNode:d,className:O0(`lucide-${Wp(f)}`,c),...h}));return s.displayName=`${f}`,s};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=In("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=In("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=In("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=In("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=In("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=In("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=In("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),lb=({children:f})=>{const[d,s]=o0.useState(!1),c=Rn(),[h,o]=C.useState(""),g="小連愛你《3";C.useEffect(()=>{const y=()=>{o("");let T=0;const E=setInterval(()=>{T<g.length?(o(g.substring(0,T+1)),T++):clearInterval(E)},150)};y();const b=setInterval(y,5e3);return()=>{clearInterval(b)}},[c.pathname]);const z=[{name:"Posts",path:"/"},{name:"About",path:"/about"}];return M.jsxs("div",{className:"min-h-screen flex flex-col bg-white",children:[M.jsxs("nav",{className:"sticky top-0 z-50 bg-white border-b border-gray-200 h-14 flex items-center px-4 md:px-6 justify-between",children:[M.jsx("div",{className:"flex items-center gap-2",children:M.jsxs(Cn,{to:"/",className:"flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md transition-colors",children:[M.jsx("div",{className:"w-6 h-6 bg-black rounded-sm flex items-center justify-center text-white font-serif font-bold text-sm",children:"L"}),M.jsx("div",{className:"flex items-center",children:M.jsxs("span",{className:"text-gray-500 font-normal text-xs ml-2 font-mono flex items-center tracking-widest min-w-[120px]",children:[h,M.jsx("span",{className:"animate-pulse text-gray-400 ml-1 font-light",children:"|"})]})})]})}),M.jsx("div",{className:"hidden md:flex items-center gap-2",children:z.map(y=>M.jsx(Cn,{to:y.path,className:`text-sm font-medium px-3 py-1 rounded-md transition-colors ${c.pathname===y.path?"bg-gray-100 text-[#37352f]":"text-gray-600 hover:bg-gray-50"}`,children:y.name},y.path))}),M.jsx("button",{className:"md:hidden p-2 text-gray-600",onClick:()=>s(!d),children:d?M.jsx(nb,{size:20}):M.jsx(tb,{size:20})})]}),d&&M.jsx("div",{className:"md:hidden border-b bg-white p-4 space-y-2 animate-fade-in",children:z.map(y=>M.jsx(Cn,{to:y.path,onClick:()=>s(!1),className:"block p-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium text-sm",children:y.name},y.path))}),M.jsx("main",{className:"flex-grow",children:f}),M.jsx("footer",{className:"bg-gray-50 border-t border-gray-200 py-12 px-6 mt-20",children:M.jsxs("div",{className:"max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("div",{className:"w-6 h-6 bg-black rounded-sm flex items-center justify-center text-white font-serif font-bold text-xs",children:"L"}),M.jsx("h2",{className:"text-sm font-bold text-gray-700 uppercase tracking-widest",children:"Lien"})]}),M.jsxs("div",{className:"text-gray-400 text-xs font-medium",children:["© ",new Date().getFullYear()," LIEN. Some rights reserved."]})]})})]})},H0=({src:f,alt:d,className:s,...c})=>{const[h,o]=C.useState(""),[g,z]=C.useState(!0);return C.useEffect(()=>{if(!f)return;let y=!0,b=null;return(async()=>{if(f.startsWith("/")||f.startsWith("data:")){o(f),z(!1);return}try{z(!0);const E=await fetch(f);if(!E.ok)throw new Error("Failed to load image");const H=await E.blob();y&&(b=URL.createObjectURL(H),o(b),z(!1))}catch(E){console.error("Error loading secure image:",E),y&&(o(f),z(!1))}})(),()=>{y=!1,b&&URL.revokeObjectURL(b)}},[f]),g?M.jsx("div",{className:`bg-gray-100 animate-pulse ${s}`}):M.jsx("img",{src:h,alt:d,className:s,...c})},L0=f=>{if(!f)return 1;let d=f.replace(/!\[.*?\]\(.*?\)/g,"").replace(/\[(.*?)\]\(.*?\)/g,"$1");d=d.replace(/[#*`~\-=>_]/g," ");const s=(d.match(/[\u4e00-\u9fa5]/g)||[]).length,h=d.replace(/[\u4e00-\u9fa5]/g," ").split(/\s+/).filter(o=>o.trim().length>0).length/300+s/500;return Math.ceil(h)||1},ab=({post:f})=>{const d=wc(),s=L0(f.content);return M.jsxs("article",{onClick:()=>d(`/post/${f.slug}`),className:"group cursor-pointer flex flex-col h-full border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-all duration-300 animate-fade-in",children:[M.jsxs("div",{className:"block overflow-hidden relative aspect-[16/9]",children:[f.imageUrl&&M.jsx(H0,{src:f.imageUrl,alt:f.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),M.jsx("div",{className:"absolute top-3 left-3 bg-white/90 backdrop-blur-sm w-10 h-10 flex items-center justify-center rounded-md text-[10px] font-bold text-gray-700 shadow-sm uppercase tracking-wider",children:f.category})]}),M.jsxs("div",{className:"p-5 flex flex-col flex-grow",children:[M.jsx("div",{className:"flex flex-wrap items-center gap-3 text-[10px] text-gray-400 mb-3 font-medium uppercase tracking-widest",children:M.jsxs("span",{className:"flex items-center gap-1",children:[M.jsx(D0,{size:12})," ",s," m read"]})}),M.jsx("h2",{className:"text-lg font-bold text-[#37352f] mb-2 leading-snug group-hover:text-black transition-colors line-clamp-2",children:f.title}),M.jsx("p",{className:"text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow",children:f.description}),M.jsx("div",{className:"flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-gray-50",children:f.tags.slice(0,3).map(c=>M.jsxs("span",{className:"text-[10px] text-gray-500 bg-gray-50 px-2 py-0.5 rounded border border-gray-200 font-medium",children:["#",c]},c))})]})]})},ub=`---
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
![喜學校莫名出現的羊羊們（和狗子）](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble/jpg/jan-1.jpeg)`,ib=`---
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
![《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_02/IMG_8568%20(1).jpeg)`,fb=`---
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
![下雪那天下課後回到宿舍看到的大俗頭](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_03/IMG_0319.jpeg)`,cb=`---
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
![四月發現ㄉ超好吃布丁《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/grenoble_04/IMG_2407.jpeg)`,rb=`---
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
![最後一爵啦豆](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/italy_02/btn.jpeg)`,db=`---
title: "盧麥遊記 (260407_260413)"
date: 2026-05-09
description: "我知道自己執著地想要看那些什麼只是形式上的交代，但我要選擇相信我自己就可以發現並感謝任何形式的幸福。"
category: "遊記"
tags: []
imageUrl: "https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/IMG_1456.jpeg"
---

## 4/7
有海又天氣好的地方是最喜歡的。
![在馬賽最喜歡ㄉ公園](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0407-1.jpeg)

前幾天確認了這趟又是為期一週的旅程每天都是晴天，鬆了一口氣。目前會影響我的體驗因素就兩個——天氣好不好、吃得好不好。我前天去里昂一趟的時候再清楚不過了，我就是生來這世界吃東西的，其他不那麼重要。

六月準備和 stockwell 的成員們同遊南法，這次先來馬賽探探，主要是因為復活節機票太貴，同時我有對幸福國家丹麥的執著，因此排了馬賽—盧森堡—哥本哈根—巴黎這個拐彎抹角的路線。

從格勒要到馬賽，要先搭 TER 去 valence TGV 站換 TGV，也就是沙崙的概念。可以這樣比喻讓我覺得格勒也不是什麼不太方便的地方，可以搭個巴士就到義大利的地理位置其實也很不錯；只是從車站的時刻表來看，確實只有往巴黎的直達車是 TGV（高鐵）其他都是 TER（區間車），還是個小城市。

上次搭 TGV 已經是李峻離開的那天，我一個人從巴黎回格勒。今天抵達馬賽下了車，人還是在法國，就比去到其他國家更沒有出去玩的感覺，我可能真的習慣了每天見到人就要蹦啾。

中午抵達太陽正熱，我背著一咖後背包打算先前往看好的突尼西亞餐廳，想要吃 brick 和 couscous；結果路過一間看起來生意很好的店也賣差不多的品項，就果斷轉彎了。味道和上次滑雪完出門吃的那餐九成像，很不錯。比起什麼精緻法餐，還是這種北非料理比較對我胃口。
![吃完超飽 == 超爽 ==](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0407-2.jpeg)

飯後首先切硬。今天住的洞是目前住超過十間青旅來，洞裡配置最好的。有布簾，燈不是刺眼燈泡是燈條，有小置物櫃（甚至有分開放和有門封閉的），插頭給兩個還有 usb，床鋪寢具皆乾淨，樓梯可以放拖鞋，還！有！鏡！子！很強⋯⋯
![武陵褲 forever](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0407-3.jpeg)

再次出門我先到舊港晃晃，逛了一些熱鬧的區域覺得沒聊，就走回到李峻幫我找到咖啡廳 coffee & bakery（我沒講住哪，剛好找到青旅旁邊很厲害）。看地圖原以為店面在會有 tram 經過的大路邊，靠近目的地導航又拐了一個迴轉大彎，發現是夾在兩面公寓之間的寶藏。
![coffee & bakery](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0407-4.jpeg)

大片的藍色落地窗讓不多的懸吊燈泡就帶來足夠的光源，櫃檯用長條型的磚塊堆成，僅有兩列開放層架且碗盤瓶罐擺放整齊，兩側牆壁保有原始的磚牆，其中一塊挖了凹陷還做圓弧收了一台鋼琴；人們落座有很多選擇，有靠窗高腳椅，還有矮桌配的木椅、藤椅、搖搖椅、貴妃沙發，或是像路易莎讀書大桌那樣的基本位子。這是終於繼慕尼黑的鱷魚咖啡之後，我在歐洲最喜歡的咖啡廳之一。
![挖了凹陷還做圓弧收了一台鋼琴ㄉ牆壁](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0407-5.jpeg)

最近閱讀的速度提升，好像漸漸回到沒有吃到飽，走路十五分鐘跑到南崁中正路金石堂讀書，一邊連中華電信的付費 wifi 去查資料的那時候。是好事。也開始在閱讀器上看有情節的小說，而非工具書。有時候放下自己無謂的堅持就是一瞬間，比如讀有劇情的書要看紙本書。

我在咖啡廳狗了超過兩個小時，才決定起身出去晃晃。離開時竟然有點捨不得。我先去了滿是塗鴉牆的小區，頗無趣；再到主教座堂。這座教堂的外觀有點像佛羅倫斯的百花聖殿，只是沒有粉紅點綴，變為飽和度很低的淺綠和淺灰與白相間，近看也和大理石的平滑質地不太一樣，不過兩種不同風味都很漂亮。
![馬賽主教座堂](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0407-6.jpeg)

很久沒有入教堂內認真欣賞了，上一次可能是在義大利或更之前了喔，印象非常模糊。圓形穹頂、彩繪玻璃、耶穌十字架，在宗教肅敬的感染下還是不得不臣服在歷史之前，一切的起源難辨真假仍神聖；這種東西果然還是不能多，而且要久久看一次。

最近太陽都是八點後才下山，格勒也是。我大概六點半從主教座堂出發，因為港口的凹陷，我必須走一個完整的ㄩ才會到對岸，現在回想才發現我是不知不覺散了一個多小時的步。路上還買了一顆 100g 小肥皂，蜂蜜口味，哈哩咪那顆薰衣草是剛抵達用到現在的，變小很多。
![買回去洗，很好洗喔，很香](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0407-7.jpeg)

海鷗的叫聲大到可以只憑聽覺判斷他們之於我的距離和方位。舊港凹字面海的部分我就這樣慢慢地用雙腳描繪了，傍晚坐在可以微微俯瞰舊港的公園，石頭椅設計的角度剛好是我喜歡的大約 75 度銳角。如果這一刻眼前所有建築物全都被夷平，連著後面的山就沒有斷層了。
![凹ㄉ沿途風景](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0407-8.jpeg)

發了半個小時的呆，看著前面的情侶打打鬧鬧、右前方的紅帽踢男不停變換曬太陽的姿勢，或是看著抽大麻喝酒的兩個女孩想像我自己如此的樣子。天空顏色的變化誰寫的出來呢。我每一刻都想嘗試但知道眼前所見是無限雲彩，也不覺得拼命按下快門可以紀錄。珍惜當下哪夠。

![馬賽ㄉ極致日落](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0407-9.jpeg)
鹹蛋黃掉在那條可以是各種意義的線上時，體感時間會被拉長，下緣就快要貼平直線的靠近讓人難以算計時間經過，就算你手上握著一分鐘的沙，也容易錯過每個部分下沉的片刻。

我敲著字起了雞皮疙瘩，原本浮在空中的圓，再看過去就沉了一點；再打了一排的字就剩一半了；最後已不再刺眼的小橘亮光被一點一點擠下線，這時候時間流逝的速度才像原來的認知，用秒計算，很快。

望著太陽的方向是橘黃色晚霞，我從沒回頭看過。離開時才發現背後已經融化成一片藍紫色，因為稍高的地勢讓 360 度的全景在晚霞下一覽無遺，交錯排列的船隻、對岸的古城堡、高高座落在山上的聖母院，我第一次覺得法國很溫柔，這樣的餘暉映得連海都變成普羅旺斯的紫色。希望待六月時我再來薰衣草花海。
![真ㄉ用眼睛看海很像紫色ㄉㄛ！！](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0407-10.jpeg)

這次在馬賽只待一天。晚上洗澡前蓬頭垢面地等淋浴間，被一個可愛韓國女生搭話聊天，對方覺得我可以烙一些很韓國的單字很神奇（比如 눈치），並口頭約飯在倫敦或是韓國台灣，突然覺得明天馬上就離開要去盧森堡有點可惜。但旅程中結識的關係好像就是這樣的，幸運而交會，然後得灑脫再見。我在格勒認識的其他交換學生也算是這樣的嗎，有些大概是，有些我不想要是。明天就講不到 bonsoir 了，bonsoir。

## 4/8
盧森堡是第一個讓我覺得宜居的城市。在我發現這裡沒有什麼像樣的亞洲料理和有一點規模的亞洲超市之前。

今天早上賴床超過十分鐘，讓我在走去車站的路上就流汗了。馬賽市區到機場有一班直達巴士 A1，只有 AB 兩點來回，把人放在一航二航中間，簡單明瞭、頗方便。昨天洗澡之前認識的女生在哀機上和我說再見、旅途愉快。

馬賽機場二航好像是被 ryan air 統治，櫃位佔了七八成有，整個樣子看起來比金門澎湖的小機場都還要弱，這是法國第二大城欸。和里昂機場一樣，我在抵達後的 15 分鐘左右就到候機大廳了。絲滑順暢得無聊。上飛機之後我一路從起飛睡到降落。

盧森堡從 2020 開始全國的大眾運輸都免費，是一個很神奇的政策，Gimini 和我說的實施原因在我看來一點也沒有說服力，但每天從其他國家入境工作的人好像真的不少，我走在路上聽到很多人用德文、英文溝通。而我一個窮遊觀光客，藉著這個福利省了交通費，補償性地吃了 18.5 歐的巨肉條午餐，調味不錯，但太鹹了最後很膩，期待過高（我又在去機場的路上就在點餐了）。
![這種東西就是第一口最好吃...](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0408-2.jpeg)

今天住的地方是當時候訂住宿時在盧森堡唯一看到的青旅（有一個一個床位變宿舍的那種），價位意外地不便宜。實際抵達之後發現整棟建築物不小，落在山谷之中很像森林會館，一旁還有盧森堡經典的那種橋。我講了好久都還沒再去到阿里山，也好久沒去清境了（小時候有陣子可能兩三個月就會去一次）。
![只拍到走下去旅館ㄉ路，這個森林會館就是蓋在這個橋旁邊](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0408-3.jpeg)

沿著坡走到峽谷（？）的上方就是貝克要塞，我才覺得這個青旅的地理位置不差（離市中心走路要 20+ 分鐘）。不過這個要塞大概就是像金門馬祖有的東西那樣，感覺不用特別付費進場，我僅從入口經過示意踩點，然後馬上就到了號稱歐洲最美陽台的風景走廊。
![風景走廊經典機位](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0408-1.jpeg)

這整條走廊圓弧都可以看到不同角度的畫面。以前是軍事防禦城牆，現在全是遊客。確實真的滿漂亮的，這種漂亮就很像清淡而看不膩的美女，不是美若天仙、毫無瑕疵的那種，如果把房屋、教堂、河流、山谷全都拆開來，個別都很普通，但全部合起來真的是很不錯看的風景，和諧而平靜。
![同一條走道ㄉ另一個位置](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0408-4.jpeg)

而後逛了逛市中心的鬧區，好像除了精品品牌、連鎖定番之外，沒有什麼特別在經營的小店，連賣紀念品的都沒在用心，明信片放在戶外都已經被雨淋過、皺得亂七八糟。盧森堡感覺就仗著峽谷和走廊在被動吸遊客。

今天的咖啡廳是我自己選的（要查 de specialty），評論寫說 it indeed takes coffee seriously。店門口的燈條很可愛，內裝看得出來有特別設計，但不是我的菜；外帶的人不少，感覺是對咖啡口味有要求的人會特別來帶一杯走的那種定位。我今天點拿鐵，cold but no ice，這杯是我目前在歐洲喝到最頂級的拿鐵了，或者應該說濃縮處理的方式和台灣的很像，深焙、奶泡很濃，很喜歡。然後我在這一樣看著書度過了兩小時的午後，待在春天的戶外座位實在很舒服。
![我在這個位子度過ㄌ很舒服ㄉ下午](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0408-5.jpeg)

接近咖啡廳打烊的時間離開，我開始了不導航的散步，不小心走到了聖母院和盧森堡公園。市中心的熱鬧區域實在是太小了，我便問 Gemini 有沒有哪班公車適合跑到更遠的地方看看風景，於是搭上了他推薦的 10 號公車，打算隨意下車。這種不能預知而隨機的刺激，久違地讓我真正感受到旅行的有趣。

但 Gemini 根本在供蕭威。「坐在車上往窗外看，你可以直接俯瞰深邃的佩特羅斯峽谷以及峽谷中鬱鬱蔥蔥的景觀，視角甚至比走路還要開闊」假賽啦。我確實是往他給我的方向上車，但全程經過的都是住宅郊區啊！嘎哇騙。不過這個隨便上隨便下、可以不用擔心坐錯車或坐過站的體驗挺好的，就算沒有經過什麼特別厲害的景，看看這裡的人都住在什麼樣子的地方也不錯。
![就是真ㄉ有看頭又沒看頭ㄉ住宅區](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0408-6.jpeg)

我在 fu 來的時候下車，也不知道要怎麼描述那是什麼 fu，就是該下車了。然後再搭上一班會返回市中心的公車。最後傍晚時間想要下去峽谷之間的公園看看。下坡蜿蜒，還沒到谷地之前完全看不到盡頭會有什麼（好喜歡這種刺激 ==），終於在一口氣同時能看清楚兩側峽谷時深受感動，好漂亮喔。
![用照片很難感受這就在峽谷之間](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0408-7.jpeg)

很難想像這是在市區的地方。全歐洲最幸福的跑跑人大概是盧森堡的這群，可以隨時跑在車水馬龍的市中心，或是轉個彎跑在寬闊巨大的峽谷之間，在窄一點的山谷間又像是跑在森林裡。

![這個公園感覺啥都可以有](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0408-8.jpeg)
在市區能有這種活動空間真的好棒，甚至還有戶外開放的健身器材、小朋友的遊樂設施和滑板場地，短時間就可以同時擁有貼近大自然的感覺和鬧區的方便。天氣很好，我在散步經過這些的時候真的在感嘆這是一個很適合居住的地方。

![第一次在嫌 kebab](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0408-9.jpeg)
晚餐又 kebab，這家做得很不對味，很像把 ABCDE 全部放在一起而已。日落時分坐在旅館戶外的座位和李峻講電話時沒有注意，再抬起頭晚霞已經是紫色的了。盧森堡的盧森堡感覺一天剛剛好。有機會的話，我下次還想再來陽台走走，也去其他城市看看。明天就要去丹麥啦！

## 4/9
我好喜歡丹麥噢。

今天早上因為同房的人早早收拾離開，就算放輕動作仍有的碎小聲音讓我在鬧鐘響之前就自然醒來。洗漱後化了腮紅比平常多繞兩圈粉的妝，就到餐廳吃早餐，果然在歐洲不能爽賺，免費的早餐就只是兩種麵包、各式果醬、兩款麥片和咖啡機。

回到房間背上背包，我又離開了只歇一晚的旅館。和昨天一樣，我沿著上坡走到貝克要塞、再到陽台。早上的太陽就在眼前，背光的景色因為刺眼瞇著眼睛而不清楚，不過仍不失魅力，簡單的美今天再看也還是喜歡。
![是這樣子ㄉ上坡](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0409-1.jpeg)

由於昨天的拿鐵是這幾個月在歐洲走來走去所喝到最好喝的一杯，我在出發去機場前決定再泡一家咖啡廳。aupa 一樣是用 cafe de specialty 找來的寶藏，招呼我的一對男女搭檔很熱情，就算有小牌子也還是把所有的品項又再重複地唸了一次給我介紹，拍胸脯保證所有東西都是手工用心超好吃的（you wont be disappointed for everything）。
![很可愛ㄉ搭檔（有點難判斷是不是情侶）](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0409-2.jpeg)

他們說我試了起士蛋糕之後一定會再回來，是的，我在盧森堡還吃到這輩子最好吃的起士蛋糕（下一個客人來外帶的時候，平常懶得多說幾句的我甚至主動開口說 the cheese cake is so so nice，我用了兩個 so）。

![真ㄉ人生 cheese cake...](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0409-3.jpeg)
早知道就在當下寫下一些什麼（這幾天書看得很勤，我那時候在森林裡），我現在只記得我吃完最後一口還很捨不得地刮刮盤子，去機場的路上嘴巴嘟起來還會香香的；真要寫點什麼的話，我確定是香濃綿滑而不膩。但願能夠再來蓋上我集點卡上的第二個章。

盧森堡的巴士都好準時，我在估狗妹預估的相同時間抵達。雖然目前為止沒有任何準時登機的例外，但我還是希望避免任何風險、提早到機場，不過錶訂 10 分起飛，我 05 分的時候還卡在小飛機的走道上，每次這樣真的是讓人很不悅；儘管我若在 aupa 多待半個小時也沒辦法多吃一口起士蛋糕。

Luxair 是盧森堡的國家航空，票價便宜還有簡單的三明治和茶水，甚至感謝。今天久違地被隨機配到窗邊位，飛機在飛到看不見任何建築物的高度之後，我便失了興趣；那一片像天空被倒放在下方的藍是海吧，還是有波紋的海比較好看，飛太高的話細節通通都不見了。
![這個雞肉三明治還不錯ㄡ](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0409-4.jpeg)

在機長廣播準備降落的時候，我才又把目光轉向窗外。初來乍到北歐。這個下降到的高度應該是在丹麥了，看起來過分整齊排列的建築物，這種秩序感和我的想像不一樣。

空姐莫名在這時候提著竹籃發糖果。我其實不太愛吃糖，眼睛快速掃過只認得偉特，還是拿了一顆馬上拆來吃。因為我想要和在杜羅河谷一樣，看能不能用味道記住一個想要深刻記得的地方；但這樣的話我應該矇眼隨便拿一顆才對，這個跟預期一樣的甜味沒有帶來任何的全新刺激。

坐在我左邊的小哥直到前後都幾乎沒有人了才站起來拿行李，連帶著我也變成倒數下機的人。在我前面走著一個老奶奶，自己手扶欄杆走下小飛機有高度的階梯好像有點困難，滿頭白髮的地勤是我腳踩在丹麥的土地上第一個遇到的人，他伸出手有耐心地攙扶著奶奶，慢慢跨越一階又一階；在我走下來時也輕拍了我的肩膀和我打招呼，很像有人派他來歡迎我抵達丹麥的。

然後緊接著英俊金髮帥哥在我對他微笑之後也給我同樣的回覆，雖然看起來是客套的微笑，但也讓我感到窩心。世界就是個人內心的投射好像是真的。雖然我感覺得到自己帶著濾鏡來，但一下飛機就充滿著幸福溫暖的感覺，不曉得是怎麼回事。

我在出發前一直對丹麥有我自己也不太懂的執著，不知道是 hygge 讓我覺得來到這裡一定可以創造溫暖的回憶，還是什麼指標或是統計說丹麥是全世界最幸福的國家，讓我相信我在這裡也一定會是最幸福的人。

![我在心裡一直哇！哇～哇！！](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0409-5.jpeg)
機場這個旅行的起點最後都變成最模糊的地方。我在抵達哥本哈根機場後往出口的路上這樣想著，但緊接著看見的免稅店又推翻了這個想法——這裡竟然會有賣小廢物的地方，而且還都很好看、很可愛，是過幾天我再來搭飛機的時候想要撥空來逛逛的程度了。機場也好漂亮喔，感覺處處都很有設計感，怎麼回事。

交通規劃一眼明瞭，十五分鐘的火車即抵達市區。我先來到今天住的 Steel House 切硬（用 ipad ㄎㄧ資料自己拿卡寫入房門密碼，全自動化欸），這是一間和威尼斯 Anda 感覺很像的旅館，辦了很多活動（我明天早上要去冥想）、大廳喝酒聊天的社交熱絡，但他的硬體設施強了好幾倍，有健身房（而且李峻說設備超齊，不是隨便要湊合用的那種）、游泳池、電影院、遊樂室⋯⋯超級誇張的。
![我在哥本哈根都住這裡](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0409-6.jpeg)

在物價超貴的丹麥能用一晚大概 1200 的價位住在超乾淨的洞，還附有這些設施更誇張。雖然洞裡面的配置和前天在馬賽住到的比起來僅中規中矩，也沒有簾子，但有厚被被、紮實的枕頭和房內浴室，整體還是很不錯。
![Steel House 的大廳很讚](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0409-7.jpeg)

然後我東西丟了就馬上出門。先散步到 Hart 測一顆丹麥有名的肉桂捲：皮脆，內裡麵包體和一般可頌很像，底部烤得焦香、裹上不少糖粉，香是香、但肉桂味不是太重，很像在格勒吃到的 cruffin，我給 7/10（歐規 ==）。果然 UmmUmm 的紐結還是太難超越了。
![同床異夢ㄉ吃著...](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0409-8.jpeg)

好冷喔。因為機票太便宜了，都沒有想起來哥本哈根和法國南部的緯度其實差了不少，沒有帶到厚一點的帽踢。吹著風走在路上，好像又回到了冬天。好想喝熱可可，但是路邊虧皮店賣的隨便一杯也要 200 台幣合理嗎。

大概花了 20 分鐘走回 Strøget 一帶，一路上經過的街景好像走在歐洲版的首爾，一點也沒有中古世紀經典的老舊風味，反而覺得是當代美學的爭鋒鬥豔；可也不覺得少了什麼，反而因為充滿設計感而新鮮。我一直在內心感嘆這個國家真的好有品味喔的那種。

![《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0409-9.jpeg)
什麼東西都好可愛喔。觀光景點的磁鐵一咖賣到 200 台我是第一次看到，北歐物價實在不敢恭維；但也是第一次一口氣看到那麼多很想全部帶回家的紀念品，無能得難受啊。我走在 Strøget 這條哥本哈根最熱鬧的商店街上，進出店家的頻率大概是這幾個月最高的了。什麼東西都好可愛喔，好多店都好可愛喔嗚嗚。

晚餐去吃了有幾個台灣人用中文給五星評價的中餐廳，我看著亞洲面孔準備替我裝菜，仍然用彆扭的英文點餐。70 dkk 可以吃到一麵四菜實在不可思議，而且入口的時候是熱的；調味普通、不能再要求更多，吃的是相對熟悉的菜色真的很想哭。完食後我滿足地直接脫口兒出中文和幫我點餐的小哥要了衛生紙。
![可以選 3/4/5 菜，分別 60/70/80 dkk，但每天菜色好像都一樣](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0409-10.jpeg)

不知道為何今天回顧覺得時間被拉得好長，我花了一個半小時才寫到這裡。已經是十二點半了，越寫到後面越沒精神，也開始抓不到順暢產出的感覺，我該睡了。目前為止，我很喜歡丹麥噢，幸福、溫暖、品味、設計感⋯⋯等等這樣的，感覺是集合了很多我喜歡的元素在這裡的國家。接下來完整的三天還麻煩多擔待照顧，晚安！

## 4/10
那片湖蕭瑟寧靜，垂柳隨著風和波浪方向一樣地擺動，蘆葦傾佛出微笑。我是平靜的。
![《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0410-1.jpeg)

今天一早起來，有過一瞬間懶得下樓的想法，按慣例地賴床，因此冥想活動遲到了一分鐘。帶領大家的是一個從南美洲不知道哪個國家來的老師（叫老師有點奇怪），他說他從小是網球選手，但突然在某一瞬間開始不能打了，全身檢查沒有任何異狀，醫師說問題不在於生理而是心理，他便嘗試各種方法，最後找到了冥想、呼吸法和瑜珈。

包含我參加的人只有四個，以我這兩天在大廳看到的人潮來說，這實在是小眾活動。在我左邊的是葡萄牙老師，她的英文不好，但很樂於分享；在我右邊的是一個禿頭鬍子中年男，他的呼吸聲非常大；再右邊是在美國待了二十八年然後移居到西班牙的奶奶，穿著豹紋衣服和黑色皮褲，我的聽力沒能 catch 到她從哪裡來，但感覺一直以來的周遭環境品質很不錯，她同時擔任葡萄牙老師的英文翻譯。

我們先開始了呼吸練習，30 組一輪，間隔小休息，總共三輪二十五分鐘，然後用瑜珈的名義大休息。這是我第一次有著引導、認真地做呼吸法的練習，北歐的空氣感覺又更乾了，大口用嘴巴呼吸讓喉嚨頻繁需要濕潤有點出戲，其他感覺一切良好。

在閉眼狀態 focus your center 是我自己發現可以很快入睡的方式，這竟然和這個呼吸法的一大重點不謀而合，可能再加上上大學以來都有持續刻意發呆，讓想法只是從意識之中流過而不承接或是回應，並專注某件事情（深深吸吐），對我來說不是特別困難的事，好像也算是熟悉，所以在結束後我沒有什麼太大幅度的 BA 變化，感覺一樣舒心平靜。

結束練習後，我們圍圈分享心得，葡萄牙阿姨和豹紋奶奶好像都對於用嘴巴大口吸吐有身體不適，禿頭中年男說整個 breath flow 很像 circular 從嘴巴開始一直到腹部，感覺到腸胃舒暢。我其實講不出什麼挖哥（或是說我不會想和陌生人分享我在左前方看到了藍紫色的火光，偶爾會想起幾個小時候的自己），但還是說了 I feel peace blablabla。

然後老師說要請我們喝咖啡，of course 我說好（這裡咖啡機一杯還要 150 台幣有沒有搞錯）。禿頭中年男有事先離開了，剩下我們四個人聊了將近一個小時的天。不曉得是冥想帶來的能量還是我今天的狀態有營業，對話甚是自然愉快，我一點也沒有對人類的倦怠。

豹紋阿姨問我怎麼不去美國讀 CS，我說我想來歐洲到處旅遊，還有莫名感覺美國人很不友善，但其實是總覺得在歐洲講自己對自己的專業沒有任何熱誠很ㄌㄡ（幹嘛還要再讀 CS）。葡萄牙阿姨在估狗妹上迷路，但還是花了時間和我指出她住哪裡、在哪裡教書。冥想老師說他才剛來哥本哈根一個月，滿三個月後還不確定會飄去哪，他應該有了四十，（但）單身、沒有小孩，是自由的。

![葡萄牙老師、冥想老師和我](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0410-2.jpeg)
幸好葡萄牙老師在準備散會的時候提出可以合個照，我會記得老師長得很像 pianist 的男主角，豹紋奶奶說她看那部電影哭得不像自己；然後在和葡萄牙老師要照片時，看到她和智慧型手機 struggle 的樣子覺得好可愛，雖然她最後放棄了社群軟體，還是用 email 的方式傳給我。真好。

我留了一點咖啡，上樓配在法國買的瑪德蓮。我站在房間窗戶前曬著太陽，手上一邊拿著塑膠盒省丟屑屑，很溫暖。我在台灣其實看不太起這種袋裝的甜點，但在馬賽那天想要找東西裹腹實在覺得太貴了，才找到這個來吃。好在一試驚為天人（以 1.9 歐來說是這個程度），蛋糕體的密度、濕度和甜度都恰好，奶油味很香；目前只有在 RELAY 有看到，希望下週回格勒在市區超市還找得到（我沒找到，我後來在超市另外買了兩款都不太喜歡）。
![真的很好吃 TAT 我回格勒還沒找到 TAT](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0410-3.jpeg)

經過昨天晴天依然寒冷的教訓，我今天出門多加了一件羽絨背心，也戴上了自己織的圍巾。然後在鏡子前換好衣服、擦了唇蜜，我和李峻說媽的我今天超可愛。
![媽的我今天超可愛](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0410-4.jpeg)

近中午出門，把昨天逛了一半的 Strøget 大街繼續逛完，一樣踏進了不少小店，覺得滿心歡喜。我在 Søstrene Grene 買了四組輪針。
![Søstrene Grene 超級好逛！](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0410-5.jpeg)

接近了昨天預約的 walking tour 集合時間，我路過熱狗餐車，看到最基本的一狗只要大概 250 台幣，就果斷叫了一份充飢。味道果然很普通，但洋蔥有放了生的和炸過的，口感不錯。
![堪吃ㄉ熱狗堡](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0410-6.jpeg)

導遊叫做 THOR，他撐著橘色雨傘當作集合點的標誌，在我報上名字和來自哪裡之後就開了 China 的玩笑，在其他來自世界不同地方的人抵達後，也一一抓著他們為人詬病或是可以拿來開玩笑的點來活絡氣氛。雖然以整體活動的笑聲比例來看，他做得很好，但我很困惑北歐長髮男是不是都喜歡搞這種類型的笑話。

![北歐長髮男](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0410-7.jpeg)
整個 walking tour 走了兩個小時多一點點，我到後面已經懶得認真聽了，口音和語速也讓我跟得很辛苦，而且超級凍、很不舒服，搞得很不像出來玩，最後有點坐牢。我這個人可能比較適合和 AI 了解我想知道的部分就好，並不是每個被做成雕像放在廣場上的人都很有趣，鄰國之間的紛爭乾我屁事，我花時間聽這個不如去多了解台海議題勒。我現在就已經什麼歷史都想不起來了。

THOR 一路上講解得方式其實都滿有趣幽默的，有大舌頭口音模仿、像合唱團男低音那樣唱傳統歌曲，講話抑揚頓挫，也懂得留白，確實是個很盡責很傑出的 tour guide。但我現在最印象深刻的還是最後我說 sorry im still a student 拿給他 2 歐小費，他看都沒看我一眼的樣子。我知道很少，但也不用這麼雞掰吧。

長時間在外頭吹風凍得難受，他在甩我一臉之後我就馬上轉頭前往咖啡廳。今天調了三家叫李峻幫我選，他說 Collective 我去、April 他去、SP 不行。我先走到 Collective，紅色大門內是黃色暖燈，看起來就很溫暖，但我進去看到甜點只有兩個沒興趣的品項和一杯要 250 台幣的咖啡，就又走了出來。歐洲相對物價高的地方，好像要賺錢之後來比較適合，難受啊。

![第一次跑咖一個人要花到 700 台...](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0410-8.jpeg)
再比較其他兩家咖啡廳的甜點，我比較想要吃 April 的可麗露。以為不會再有更貴的咖啡了，就直接 walkin 帥氣落座，結果喝了一杯大概 450 台幣的 expresso milk，想著 450 都花下去了，也還是一起啃了皮一點也不脆的可麗露。害，真的不敢再亂闖了（又想到 12 歐的 spritz）。李峻說這間是他的確實有理，什麼單品豆我才喝不出來勒。

大概傍晚六點從咖啡廳離開，外面地板是濕的，原來剛剛我在咖啡廳休息時下了小雨，好幸運。哥本哈根除了餐廳大部分的店早早就關門了，這個時間點閒晃了半小時也逛不到什麼特別有魅力的東西，我又去吃了 china box。今天四菜、雞翅比昨天多了一個，標準被強制大幅降低，完食一樣幸福洋溢。

我來到丹麥之前就打算一天至少一肉桂捲。趕晚上七點半關門，我飯後快速走路抵達 Lagkagehuset，在店員賽著臉說我們已經打烊了的情況下，還是不要臉的走進去說我只要一個肉桂捲外帶就好；在抵達丹麥第二天，我吃到了一坨肉桂糖。
![Lagkagehuset ㄉ麵包櫥窗](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0410-9.jpeg)

買完肉桂捲又逛了一些還開著的小店，李峻一路陪我ㄙㄟ回旅館。我上樓拿了水壺裝水，在大廳開啃配水。部分的麵包體是脆的，偏內裡的部分濕軟，肉桂味是漿化的肉桂糖來的，topping 還有白色的大條糖霜，太濕、太甜、太沒嚼勁了，太差勁了。我左手一邊滑著手機休息，很不情願地一邊要舉著右手把這捲吃完，一度還想直接丟掉。害，找吃的好像真的不能相信一般部落客，要去碎找才對。

今天在跳出記憶體不夠的時候，我果斷把在手機裡好好存了兩年的小元刪掉了，那場我每每想起來都感覺得到快樂的演唱會。有備份是有備份，但一直以來在手機留下一些片段能夠隨時複習的堅持，就在出來玩當下無法紀錄的瞬間瓦解了。而我並沒有太大的反應。來到歐洲之後，小時候口口聲聲叫的偶吧又離我更遠了呢。即使難過也還是知道現在之於我來說最重要的是出來見見世面的體驗，那就是事實。不過今天也剛好官宣了台灣演唱會的時間，會很快再見的吧。

回想起來有一些不如意，不過今天整天還是幸福的，我有些自我質疑也想要這樣想著。日落後在旅館旁的湖邊散步，我感受到平靜自然而強大，與我發現的美，此刻一起享受在丹麥的 hygge。我在想如果我沒有先入為主的認識，來到這裡也會感到這樣的幸福嗎，還是其實我一直都幸福著，只是受身處的環境影響而難以（或失能）察覺。
![哥哈一隅](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0410-10.jpeg)

明天想要去幸福博物館看看。這幾天可以蓋厚被被好舒服喔。晚安。

## 4/11
刻意地去證明某種感覺存在，那個感覺可能就會消失了。

今天早上出門特別繞路，先在旅館旁的湖邊散了一下步，接著用很多人推薦是我家巷口概念的麵包店——Skt. Peders Bageri 當作早餐開啟一天。這幾天在丹麥從來沒有看過這麼多人在排隊，感覺是真的有名氣的老字號；聽說之前師傅生病暫時停業，人們還會去店門口貼上祝福早日康復的留言，連當地人都喜歡。
![Skt. Peders Bageri 很多人排隊，但前進得滿快](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0411-1.jpeg)

每個麵包都看起來十分可口，但我當然還是點了肉桂捲。今天這顆剛拿到的時候還溫溫的，很加分；麵包體紮實不鬆軟、偏濕但剛好，甜度大概兩三分，肉桂是用小小小辣的那種。感覺我不能期待這裡的肉桂捲有嚼勁了，這種有點像台灣傳統麵包店的小熱狗麵包一樣的麵包體感覺是丹麥肉桂捲的共識；但這顆口味、口感可以給 7/10。
![桂桂《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0411-2.jpeg)

完食肉桂捲後，我拿著剩下的一點點咖啡離開麵包店，在路上走一下下就涼掉了，今天也好冷，好像感冒了。到 Amalienborg 城堡之前，我先逛了這幾天在 Strøget 一直來不及踏進去的 Studio Arhoj，丹麥真的太會做這種可愛廢物了，感覺未來有自己家的時候可以 global shipping 一下；
![Studio Arhoj ㄉ招牌廢物](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0411-3.jpeg)

然後逛到玩具店、古董店，最後到毛線店，這間的樣式和花色好像是目前為止我在歐洲逛到的店裡最多的，有很多完全沒有摸過的材質和特別的顏色，筆記了喜歡的線，逛得很開心。最後我帶了一顆觸感很好的黃色毛線，想要做成像絲巾感覺一樣的領巾。
![毛線店一隅](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0411-5.jpeg)

Amalienborg 城堡其實昨天 walking tour 就走來看過了，但藍天晴朗下還是比較漂亮，也看到了穿著保暖衣服的白馬。然後再慢慢飄到今天最期待的幸福博物館。
![穿著保暖衣服的白馬](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0411-4.jpeg)

幸福博物館不大，可能只有三間學校教室的大小而已，走馬看花可能 15、20 分鐘就逛完了；我每一個主題都有耐心地看完，好像是很想要透過研究、統計（比如有沒有生小孩會不會影響夫妻的幸福程度、經濟或年齡狀態和幸福感的關聯性為何）來證明我現在已經是幸福的人了，又或者是我現在算是不幸福的人。某種程度上我以為我參觀了幸福博物館，就可以更加提升感受幸福的能力。用能力的角度去看就很有毛病了。

![幸福博物館有一個空間是讓大家貼便利貼，寫下心中對幸福的定義、看法](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0411-6.jpeg)
走出博物館有一點失落，裡面的內容其實跟在估狗妹上看到的差不多，現場沒有多很多照片拍不出來的東西，數據和報告在網路上也都查得到；我卻同時也知道自己執著地想要入場什麼只是形式上的交代，有不符期待的感覺是可以馬上接受的。只是再給我一次機會我不會買票進去，我要選擇相信我自己就可以發現並感謝任何形式的幸福。

午餐隨便在 711 買了沒有肉的起士麵包裹腹，然後去新港（昨天 THOR 說 welcome to instagram）拍了照、繞繞皇宮一帶，
![小連同學在新港，看起來不怎麼聰明](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0411-7.jpeg)

再到 Kastellet 公園散步，這裡以前是由荷蘭人設計的堡壘，現在仍有軍事用途但也有很多人真的當 100% 的公園在散步、跑步；這個堡壘被設計是 360 度無死角的防禦基地，從地圖上看是五角星形狀的，所以走在上面看著護城河（？）的輪廓方方正正，感覺很特別。
![直直方方正正ㄉ堡壘輪廓](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0411-8.jpeg)

我本來對公園沒什麼感情，也不覺得這之於生活有功能性或是加分項，但長時間沒有回到像家一樣的地方而有安定感，我發現我對自己的家的渴望又回來了，而我家周遭要是能有一個像這裡一樣漂亮的公園讓我每天可以去散散步，好像確實可以很舒壓放鬆，覺得啊真好。可惡，回想了一下，目前特別喜歡的公園有倫敦的 Hampstead Heath、米蘭的 Parco Sempione 和這裡，怎麼都離台灣這麼遠啊。

![特別載遊客來看美人魚背影ㄉ智障 boat tour](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0411-9.jpeg)
今天終於遙遙走來看哥本哈根的美人魚，確實是一個不看難受看了也難受的景點，實在有夠無聊，我看到 boat tour 甚至還會特別載遊客來，隔著一段不太近的距離看美人魚背影，就忍不住噗疵一笑，有夠荒謬。突然覺得其實不管是哪裡的海，就都是同一片海嘛，只是大家要分魚是誰的才不一樣而已。這裡很好，我還是很喜歡丹麥，但我又再次感受到了自己不太適合長時間的頻繁旅行，要碼這中間要穿插一些痛苦和磨難，我才能玩得盡興。

為了保有連吃兩天最頂肉桂捲的可能性，我又走了超過半個小時的路，到 Østerbro 住宅區光臨 Juno the bakery，這是我在碎上看到有人推薦的，說是北歐第一名。我一樣點了一顆肉桂捲，但我不認為這是肉桂捲，我想叫他伯爵軟結（後來查了是豆蔻捲）。

![8.5/10 我ㄉ forever 豆蔻愛捲 T__T《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0411-10.jpeg)
捲上的黑色顆粒感覺是某種伯爵脆脆，每一口咀嚼的伯爵香氣都很夭壽，雖叫肉桂捲但肉桂反而像配角，甚至可以說存在感低落（實際上成分 0）；麵包體和早上那顆很類似，但濕度低一點，口感比較溫潤綿密（其實先想到了軟軟蠕蠕），很像化成塊狀牛奶，入口越嚼越像伯爵鍋煮奶茶（或是說有點像喜餅標配那種餅乾的味道），很上頭；底部焦脆，甜度剛好，完全不膩，愛不釋手一口接一口。8.5/10，明天還來一顆。

傍晚終於買了交通卡。晚餐又吃了第三天的 china box，長得像周興哲的店員小哥看到我已經會自動切中文了，我大概明天還會再去。飯後去 Christiansborg 的塔上看夕陽，從高處看哥本哈根仍然是很可愛的樣子；今天靠近地平線有一層厚厚的積雲，只見日落將天空染色，不見鹹蛋黃的影子。回到旅館之前也去了河邊散散步，好冷。
![Christiansborg 塔上ㄉ晚霞，這個觀景台是免費ㄉㄛ！！](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0411-11.jpeg)

我想我真的有點感冒了，剛剛沖熱水澡一直把溫度調高，好像怎麼洗都不夠暖。現在躺在洞裡很想趕快睡覺，沒有什麼感情或力氣來寫這些流水帳，盡力了。哥本哈根讚，只是下次有機會的話，夏天再來好了，好冷喔。
![我真ㄉ超級喜歡旅館旁邊ㄉ這個湖](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0411-12.jpeg)

## 4/12
現在太冷了。哪些事情是勉強而做的都有自知之明啊。就算會有匱乏感或是覺得好像失去了什麼都沒關係，只要守護自己當下的意願就可以了，就好了。

昨天關上手機後，室友回來不小心摔了東西，然後開始相互交談，我已經累到可以自動把那些噪音靜聲，馬上就熟睡了。再次醒來是因為鬧鐘聲，這近九個小時的睡眠就像強效藥一樣讓我好了很多，元氣滿滿，甚是感謝。

延續昨天買的 24 小時 day pass，今天動作要快！我先前往 Meyers Bageri 吃早餐，有兩款捲，一款是肉桂原味、一款是加了香料的（就是豆蔻捲啦！！），那個女店員的臉看起來不太想和我說明香料的味道是什麼樣的，我思考了一下——我對這裡的肉桂捲已經不期不待了那就吃點特別的吧——點了有香料的。問了 Gemini 發現香料原來是小荳蔻，和昨天的伯爵味道來源是一樣的。

![Meyers Bageri ㄉ豆蔻捲](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0412-1.jpeg)
這顆皮是脆的，真的有在脆喔，麵包體濕度分佈不均、整體偏乾，因此就沒有昨天那種牛奶感；香料沒有佈滿，部分就只是一般原味麵包。不知道為啥吃起來沒什麼靈魂，就是那種中規中矩、成績優秀的好學生，但不知道自己真正要的是什麼，而我不會想一直去找他聊天（不會想一口接一口）。這咖給 6.5/10，昨天那顆實在太強了。

![Meyers Bageri ㄉ肉桂捲](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0412-2.jpeg)
咖啡不錯，是這幾天在丹麥每天至少一杯、喝到最喜歡的；完食後我覺得不試原味肉桂捲會有點浪費這杯大又好喝的咖啡，因此又再點了一顆原味。外層一樣酥脆，但口味上多了肉桂糖衣；麵包體也偏乾，但肉桂粉不像剛剛的香料咖留白，有均勻佈在麵包裡，甜度是微糖再多一點，這樣的乾甜組合配咖啡很剛好。這兩咖賣相實在都不錯，但吃起來就沒有特別上頭，過猶不及 na。給 7/10 和心裡過不去，因為體感快樂不是等價 7/10，給 6.5/10 感覺在目前吃到的三顆裡面（前天晚上那顆垃圾不算）又有點太低了。害，這種就是會想搞曖昧但不想負責的評價吧。

![Meyers Bageri 一隅](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0412-3.jpeg)
我在店內大概吃了半小時，入店人潮沒有停過，而且大家來帶都點不少，和店員互動像是熟客的很多，大概是這帶住宅居民喜歡來光顧補酸種麵包的巷口烘焙坊吧。肚子裡裝著兩咖捲，我又搭上了 RE 區間車，往北邊走。

一路海線直到 Helsingør，今天和前天一樣，天空陰鬱，但沒有那天那麼冷。這次除了市區之外沒做什麼功課，原本只是想瞄臨海城堡一眼，但赫然發現對岸就是瑞典的 Helsingborg，而且搭船 20 分鐘就到了，臨時起意快閃一個小時。
![站在丹麥 Helsingør 看得到對面瑞典的 Helsingborg](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0412-4.jpeg)

這座城堡說是莎士比亞哈姆雷特的背景設定，但我並沒有因為這個而特別覺得什麼；被包圍在護城河、高聳臨海，搭配今天天氣的陰暗，這座城堡給人高貴淒涼的感覺。和在市區看到的建築類似，丹麥教堂、城堡的設計好像都和法國、義大利那種很浮誇華麗的建造手法不同，都是簡約對稱的，只在某些部分再細緻雕琢，比如這座城堡的屋頂。
![從駛出港ㄉ船上看城堡](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0412-5.jpeg)

陰天沿海的散步沒有想像中冷得那麼難受，我來回花了大概半小時移動（前天在哥本哈根市區開始玩了皮克敏，今天終於大概知道遊戲怎麼運作之後，走得很有興致），回程前往碼頭。到瑞典的大船就這樣開出港口，我偶然抵達了北歐的另外一個國家。

我把 Gemini 推薦的景點排成一個快速的散策路線，聖瑪利教堂、堡壘、市政廳和兩間超市。這座教堂是我在歐洲第一次看到的磚牆外觀，特別是陰天，從外面看起來就像是只會哀悼、不祈禱的集會場所；但不知道是什麼念頭，我走上階梯、撥下帽子，慢慢走了進去。

![這好像是我目前最印象深刻ㄉ教堂，真ㄉ很溫暖噢](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0412-6.jpeg)
內部的所有壁面也是磚塊造成，高台點上燭火、懸掛的吊燈發著黃光，很溫暖，非常非常溫暖，就算沒有信仰，也迎面輕拂來了祝福；由於完全沒有任何觀光客，只有虔誠地坐在橫椅上面對耶穌、念念有詞的信徒，一切非常寂靜，很像只要我原地站在那，時間就也不會走動。我一走進去被包裹在溫暖祝福中的感覺，此時此刻仍感受得到。

堡壘和市政廳也就那樣，倒是超市我逛得津津有味。瑞典超市的品項感覺比丹麥還要多，優格、起士、冷凍食品等等都是，熟食、盒裝義大利麵的賣相也比丹麥好太多，而火腿、臘肉之類的肉製品就半斤八兩。這裡的可樂 haribo 比丹麥、法國都便宜，我買了一包 pocket size，在走回碼頭的路上邊走邊吃；也很想帶魚子醬牙膏試看看，但礙於沒有托運行李的限制，只好下次再來體驗。
![我ㄉ可樂哈哩波](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0412-7.jpeg)

大船再次駛出提防，我在船尾甲板望著瑞典嘆再見；但二十分鐘後快速地回到了丹麥，我又感覺不到自己一天走訪了兩個國家。下船將近 15:30，我快速奔上南下的區間車前往 Louisana，今天週日 18:00 閉館。
![在船尾甲板看到ㄉ瑞典](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0412-8.jpeg)

一進門就感覺得到這是一間「現代」藝術博物館，像是寄生上流有錢人家那個寄宿在地下室男人的抽象畫，被貼在入口處像是鎮館之寶；驗票後直接抵達周邊商品販賣區，不見經典被印在各式生活用品上的鑰匙圈、磁鐵、帆布包⋯⋯大多是簡約設計的碗杯、很文青的雜誌筆記，或是只寫上一個單字配上單色背景當外皮的筆記本。很現代。
![像是寄生上流有錢人家那個寄宿在地下室男人的抽象畫 be like](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0412-9.jpeg)

我實在是對藝術沒什麼興趣，也沒有太多欣賞的能力，基於此又在逛到大概 3/4 的時候驚覺 day pass 快要過期，必須趕車，我對大家都讚譽有加的 Louisana 沒有什麼特別的感想，一邊逛的時候也很困惑——完全用攝影和文字呈現的手法就是現代藝術的趨勢嗎，那跟以前一筆一劃慢慢雕出來的作品比起來也太輕鬆了吧。最印象深刻的作品大概是母親的墓碑比父親的要大上三倍的嘲諷。
![然後還有喜歡戶外展區ㄉ這隻，很可愛](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0412-10.jpeg)

喘著氣站在月台上的我，驚覺時間已經來到了晚上六點很不可思議，明明都充實地過了還是覺得時間好少，今晚就要離開丹麥了。我回到市區緊抓著營業時間的最後 20 分鐘，到前天覺得夭壽貴的 collective 最後ㄎㄠ了一杯拿鐵。淺焙的、有地瓜味，熱的、暖暖的，好幸福。19:00 準時被告知休息時間到了之後，我在隔壁店面前罰站了十分鐘把小說段落看完。平靜的。
![地瓜拿鐵](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0412-11.jpeg)

晚餐已經連四在 china box 報到了，後面三天甚至點的菜有三樣都是一樣的，但每天吃都還是欣喜若狂。今天吃飽走出去，不見每天幫我裝盒的周興哲小哥人影，我本來想和他說謝謝這幾天吃得很幸福，但有看到好像是主廚的亞洲阿伯站在加熱台後，我站在那邊大概半分鐘等他接待上一組客人，付款期間他示意我可以開始點餐，我好像因為自己特意站在那邊等著而笑了一下，然後點頭很誠懇、很真心地說謝謝，他也大大微笑了。這幾天在丹麥也沒少餓肚子，但不會太痛苦喔。
![真ㄉ非常感謝 TAT](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0412-12.jpeg)

今天是最後一晚走 Strøget 大街回 Steel House 了。我沿路糾結了是不是要在已經把實體郵筒廢棄、國際郵資還要將近 250 台幣的丹麥寄出明信片，而在瞬間片刻想通了什麼，最後放下執著。丹麥是我一次領悟了不少事情的地方，很多小角落都莫名暖暖的；雖然今天的喜歡好像已經失去濾鏡，沒有像第一天抵達那樣覺得一切新奇、充滿品味，被 hygge 氛圍迷得團團轉，但我仍然感受得到我將會想念的神奇溫暖魔力，與幸福俱存。我好喜歡丹麥噢。

![《3](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0412-13.jpeg)
現正在哥本哈根機場硬梆梆的方塊椅子上，凌晨 01:30 了還沒有什麼睏意，但我想等下躺下也不會太好睡。我還有皮克敏飄在瑞典和丹麥之間的海上。晚安哥本哈根，我隨身帶著幸福喔。

## 4/13
清晨起飛，迷迷糊糊地睜開眼睛看到那一道將天空劃開的日出，我猜如果我現在還在旅館旁的湖邊站著發呆，黎明一定也很漂亮。
![日出一定很漂亮，雖然我只睜眼看了三秒](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0413-1.jpeg)

昨晚大概十點到機場，把想做的事情做完已到凌晨一點，然後用包包和收納成球的羽絨背心當作枕頭，勉強地喬了一個完全稱不上舒服但也能夠入睡的姿勢，斷斷續續睡了兩三個小時。最後一次醒來便決定比預計過安檢的時間提早入境，廉航今天竟然準時開 gate，我一路走著走著就上飛機了。

我好像還沒起飛就睡得東倒西歪，飛機上升的過程還有意識地稍微睜眼看一下我是不是還安全；一直直到落地巴黎，我才發現一連串離開哥本哈根的流程，並沒有劇烈的不捨在矯情，原來睡意才是真感情。

![巴黎 BVA 機場](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0413-2.jpeg)
巴黎 BVA 是離市中心一個半小時車程的廉航機場，內裝簡直就像一個臨時搭建的倉庫；下飛機訂了最快出發的接駁巴士，我又在車上睡得不醒人事，又剛好遇到塞車多睡了半小時多一點，於是今天白天在巴黎的體力和精神沒有想像中的差。

我先抵達 Du Pain et des Idées 買了一個可頌和一大塊酸種麵包。可頌拿到後就現吃，放在手上還溫溫的，第一口咬下酥脆發響（我現在在宿舍好像還能聽到一點點幻聽的酥脆），麵包體鬆軟、濕度適中，奶油味滑順巧妙地融入每一次咀嚼的口腔空間，非常香。人們對可頌的印象不過就那樣，但把簡單的東西做到極致，總會不一樣。沿著附近運河邊走了一下也扒了幾口酸種麵包，外皮是將近兩公分的脆殼，咬下會卡滋卡滋但不掉屑，內裡氣孔大小不一、口感軟嫩飽實，完全無調味就只有麵包香，但越嚼越唰嘴（我今天晚餐一直扒來嚼香就飽了）。
![Du Pain et des Idées ㄉ可頌](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0413-3.jpeg)

我在晚上已經對麵包店後的大巴黎散策路線沒什麼印象了，完全是看著估狗妹上存過的古董店、毛線店、選品店在哪來決定如何移動，亂七八糟地跑來跑去。有滿多店都在賣刺繡套組，圖樣都超級可愛，我在急著關門的奶奶店裡買了一個小房子回家試試；巴黎的毛線店花樣和顏色也很強，如果我有多點閒錢大概會帶好幾顆回來吧。這裡晃晃、那裡晃晃，都是探店其實沒過多久就不太有印象了。
![其中一間刺繡店牆上ㄉ作品，超可愛](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0413-4.jpeg)

好像也還是沒有特別感受到巴黎某種既定印象的氛圍。投射。我看哥本哈根就特別溫暖，可能我覺得浪漫泛濫吧。

午餐吃了強強滾，左手拿著湯匙、右手拿著鐵筷吃著飯實在非常幸福，三菜裡面還無意間把沒有注意到的杏鮑菇送入口，甚至還有木耳，秒量級的瞬間鼻酸。我好想回台灣。最後離開之前到羅浮宮附近的 laize 外帶一杯珍珠烏龍鮮奶茶，超～級好喝！這杯放回台灣也屌打一堆隨便對待奶茶比例和珍珠嚼勁的手搖店（甚至真的已經開回台灣 == 在台南 ==）；奶茶比例對我來說很剛好，珍珠感覺有加一點蜂蜜煮，口感 Q 得帶勁不軟爛。
![laize 超讚 ==](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0413-5.jpeg)

真的好好喝喔。我好想回台灣。實在是到回了宿舍、把行李全部整理完也捨不得喝完；不過這時候珍珠已經泡到沒有一開始那麼好吃了，果然我要訓練自己的是捨得享受。

上次從巴黎搭火車回格勒是一月李峻回台灣的時候了，要從 gare de lyon 出發。昨晚睡眠品質低落，又或是說不構成一場睡眠，但我在車上整整三個小時都沒有打過瞌睡、還能讀書。有時候覺得自己的精神實在強大，又在每個起不來的早上覺得自己永遠睡不飽。真麻煩。

火車慢慢靠近格勒而減速，我已經認得環繞在城邊的幾顆大俗頭。我發現就算是在這裡，我好像也沒能完全卸下在海外的緊繃狀態；儘管如此還是些微感受得到「呼，我回來了」的安慰。今天在逛一間類似古物選品店的時候，翻到我每天散步所看到的那個角度的格勒手繪圖，難以忍住微笑，心暖暖的，這是一個讓我可以開始說出我在這裡很放鬆的一個漂亮小城市。
![在巴黎逛街看到ㄉ格勒手繪圖](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0413-6.jpeg)

又是長征旅程的最後一天。這次為了在復活節假期買到便宜的機票，而有了這種莫名奇妙的路線規劃，但玩起來每天都很新鮮，不至於太疲憊。四月剩下的日子感覺可以塞一些短短的小旅行（得去義大利補摩卡粉了），五月想去馬爾他和隨便一個機票便宜的地方，然後就準備退宿，開始為期一個月的家庭旅行啦。媽咪說會先帶野上麵包來給我解饞喔。
![我回來啦！](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/0413-7.jpeg)

------------------------------------------------------------------------------------------------

以上。盧森堡就一個屏東大，是沒有費神留意就會直接 pass 掉的一個國家，但我個人有對 check list 打勾的著魔執著，在這趟旅程也因為要買到便宜機票，而特別安排了盧森堡一日遊，非常值得，峽谷之間的公園和風景走廊都很漂亮；丹麥這兩個字對我來說還是一直有很心動的感覺，哥本哈根這座城市更是一個永遠溫暖的歸宿，我在用文字回顧的過程中，也還是能夠清楚地感受到幸福，我下次回去大概也還是會每天吃 china box，有錢的話一定要帶很多可愛的小廢物回家！！
![在風景走廊ㄉ小連同學](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/LUX_CPH_04/IMG_0935.jpeg)`,sb=`---
title: "荷比遊記 (260427_260505)"
date: 2026-05-09
description: ""
category: "遊記"
tags: []
imageUrl: ""
---

## 4/27

------------------------------------------------------------------------------------------------

以上。
![]()`,ob=`---
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
![小連同學 on the left of EU](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/portugal_03/IMG_9853.jpeg)`,hb=`---
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
![我先回家一下嚕](https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/tainan_2501_2512/IMG_1569.jpeg)`;function pb(f){if(typeof f!="string")return{metadata:{},content:""};const d=/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/,s=f.match(d);if(!s)return{metadata:{},content:f};const c=s[1],h=s[2],o={};return c.split(`
`).forEach(g=>{const[z,...y]=g.split(":");if(z&&y.length>0){const b=z.trim(),T=y.join(":").trim();T.startsWith("[")&&T.endsWith("]")?o[b]=T.slice(1,-1).split(",").map(E=>E.trim().replace(/^["']|["']$/g,"")):o[b]=T.replace(/^["']|["']$/g,"")}}),{metadata:o,content:h.trim()}}const bb=Object.assign({"./posts/grenoble_2601.md":ub,"./posts/grenoble_2602.md":ib,"./posts/grenoble_2603.md":fb,"./posts/grenoble_2604.md":cb,"./posts/italy_2602.md":rb,"./posts/lux_cph_2604.md":db,"./posts/nl_be_260405.md":sb,"./posts/portugal_2603.md":ob,"./posts/tainan_25.md":hb}),fi=Object.entries(bb).map(([f,d])=>{var o;const s=((o=f.split("/").pop())==null?void 0:o.replace(".md",""))||"",{metadata:c,content:h}=pb(d);return{id:s,slug:s,title:c.title||"Untitled Post",date:String(c.date||new Date().toISOString().split("T")[0]),description:c.description||"",category:c.category||"General",tags:Array.isArray(c.tags)?c.tags:[],imageUrl:c.imageUrl,content:h}}).sort((f,d)=>new Date(d.date).getTime()-new Date(f.date).getTime()),mb=()=>M.jsxs(Cn,{to:"/about",className:"w-full bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center group hover:bg-gray-100 transition-colors block",children:[M.jsx("div",{className:"w-20 h-20 bg-gray-200 rounded-md overflow-hidden mb-4 border border-gray-100 shadow-sm shrink-0",children:M.jsx("img",{src:"https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/views/about.jpg",alt:"Profile",className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"})}),M.jsx("h2",{className:"text-lg font-bold text-black mb-1",children:"小連同學"}),M.jsxs("p",{className:"text-xs text-gray-500 font-medium leading-relaxed",children:["花蓮出生、桃園長大、台南生活。",M.jsx("br",{}),"但是現居法國格勒諾布爾。"]})]}),gb=({selectedTag:f,onSelectTag:d})=>{const s=Array.from(new Set(fi.flatMap(c=>c.tags)));return M.jsxs("div",{className:"w-full bg-gray-50 border border-gray-200 rounded-lg p-6 mt-6",children:[M.jsxs("h3",{className:"text-black font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 mb-4 text-gray-400",children:[M.jsx(eb,{size:12})," EXPLORE"]}),M.jsxs("div",{className:"flex flex-wrap gap-2",children:[M.jsx("button",{onClick:()=>d==null?void 0:d(null),className:`text-xs px-2.5 py-1 rounded transition-colors border ${f?"bg-white text-gray-600 border-gray-200 hover:border-gray-400":"bg-black text-white border-black"}`,children:"All"}),s.map(c=>M.jsxs("button",{onClick:()=>d==null?void 0:d(c===f?null:c),className:`text-xs px-2.5 py-1 rounded transition-colors border ${c===f?"bg-black text-white border-black":"bg-white text-gray-600 border-gray-200 hover:border-gray-400"}`,children:["#",c]},c))]})]})},vb=({selectedTag:f,onSelectTag:d})=>M.jsxs("aside",{className:"hidden md:block space-y-6 w-full md:w-64 flex-shrink-0",children:[M.jsx(mb,{}),M.jsx(gb,{selectedTag:f,onSelectTag:d})]}),yb=()=>{const[f,d]=C.useState(null),s=C.useMemo(()=>f?fi.filter(c=>c.tags.includes(f)):fi,[f]);return M.jsxs("div",{className:"max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col md:flex-row gap-8 md:gap-12 animate-fade-in",children:[M.jsx("div",{className:"md:sticky md:top-20 self-start",children:M.jsx(vb,{selectedTag:f,onSelectTag:d})}),M.jsxs("div",{className:"flex-1 min-w-0",children:[M.jsxs("div",{className:"mb-10",children:[M.jsx("h1",{className:"text-3xl font-extrabold text-[#37352f] mb-2 tracking-tight",children:"我ㄉ遊記"}),M.jsx("p",{className:"text-gray-500 text-sm",children:" "})]}),M.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8",children:[s.map(c=>M.jsx(ab,{post:c},c.id)),s.length===0&&M.jsx("div",{className:"col-span-full py-20 text-center text-gray-400",children:"No posts found with this tag."})]})]})]})},_b=f=>f?(f.startsWith("http")||f.startsWith("data:")||f.startsWith("/"),f):"",Sb=({content:f})=>{const d=C.useMemo(()=>f.split(`
`),[f]),s=h=>h.toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g,"-").replace(/^-+|-+$/g,""),c=h=>h.split(/(==.*?==|\*\*.*?\*\*)/g).map((g,z)=>g.startsWith("==")&&g.endsWith("==")?M.jsx("mark",{className:"bg-yellow-200 px-0.5 rounded text-gray-900",children:g.slice(2,-2)},z):g.startsWith("**")&&g.endsWith("**")?M.jsx("strong",{className:"font-bold text-gray-900",children:g.slice(2,-2)},z):M.jsx("span",{children:g},z));return M.jsx("div",{className:"space-y-4 text-gray-800 leading-relaxed font-normal",children:d.map((h,o)=>{const g=h.trim();if(g==="---"||g==="***"||g==="___")return M.jsx("hr",{className:"my-8 border-gray-100"},o);if(h.startsWith("# ")){const T=h.replace("# ",""),E=s(T);return M.jsx("h1",{id:E,className:"text-3xl font-black mt-10 mb-4 text-black scroll-mt-20 tracking-tight",children:T},o)}if(h.startsWith("## ")){const T=h.replace("## ",""),E=s(T);return M.jsx("h2",{id:E,className:"text-2xl font-bold mt-8 mb-4 text-gray-900 scroll-mt-20 tracking-tight border-b border-gray-50 pb-2",children:T},o)}if(h.startsWith("> "))return M.jsx("blockquote",{className:"border-l-4 border-gray-300 pl-5 italic text-gray-500 my-6 bg-gray-50/50 p-4 rounded-r-lg",children:c(h.replace("> ",""))},o);const z=g.match(/^!\[(.*?)\]\s*\((.*?)\)$/),y=g.match(/^!\s*\((.*?)\)\s*\[(.*?)\]$/),b=z||y;if(b){const T=b[1],E=b[2].trim();return M.jsxs("figure",{className:"my-8 flex flex-col items-center",children:[M.jsx(H0,{src:_b(E),alt:T,className:"w-full rounded-xl border border-gray-100 shadow-sm transition-transform hover:scale-[1.01]"}),T&&M.jsx("figcaption",{className:"text-center text-xs text-gray-400 mt-3 italic font-medium",children:T})]},o)}if(g.startsWith("- [ ] ")||g.startsWith("- [x] ")){const T=g.startsWith("- [x] "),E=g.replace(/^- \[[ x]\]\s/,"");return M.jsxs("div",{className:"flex items-start gap-3 my-1",children:[M.jsx("input",{type:"checkbox",checked:T,readOnly:!0,className:"mt-1.5 h-4 w-4 rounded border-gray-300 text-black focus:ring-black"}),M.jsx("span",{className:T?"text-gray-400 line-through":"",children:c(E)})]},o)}if(g.startsWith("- ")||g.startsWith("* ")){const T=g.replace(/^[-*]\s/,"");return M.jsx("li",{className:"ml-6 list-disc pl-2 marker:text-gray-300 py-0.5",children:c(T)},o)}return g===""?M.jsx("div",{className:"h-2"},o):M.jsx("p",{className:"text-lg leading-relaxed",children:c(h)},o)})})},jb=({content:f})=>{const d=C.useMemo(()=>f.split(`
`).filter(c=>c.startsWith("# ")||c.startsWith("## ")).map(c=>{const h=c.startsWith("## "),o=c.replace(/^#+ /,""),g=o.toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g,"-").replace(/^-+|-+$/g,"");return{text:o,id:g,level:h?2:1}}),[f]);return d.length===0?null:M.jsxs("div",{className:"w-full bg-gray-50 border border-gray-200 rounded-lg p-6 sticky top-20",children:[M.jsxs("h3",{className:"text-black font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 mb-4 text-gray-400",children:[M.jsx(Pp,{size:14})," TABLE OF CONTENTS"]}),M.jsx("ul",{className:"space-y-2",children:d.map(s=>M.jsx("li",{className:`${s.level===2?"ml-3":""}`,children:M.jsx("a",{href:`#${s.id}`,onClick:c=>{c.preventDefault();const h=document.getElementById(s.id);h&&h.scrollIntoView({behavior:"smooth"})},className:"text-xs text-gray-500 hover:text-black hover:underline transition-colors block leading-relaxed",children:s.text})},s.id))})]})},xb=()=>{const{slug:f}=tp(),d=wc(),s=fi.find(h=>h.slug===f);if(!s)return M.jsxs("div",{className:"flex flex-col items-center justify-center py-20 text-center animate-fade-in",children:[M.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-4",children:"Post Not Found"}),M.jsx("button",{onClick:()=>d("/"),className:"text-gray-600 hover:text-black hover:underline",children:"Back to home"})]});const c=L0(s.content);return M.jsxs("div",{className:"max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col lg:flex-row gap-12 animate-fade-in",children:[M.jsxs("div",{className:"flex-1 min-w-0",children:[M.jsx(Cn,{to:"/",className:"inline-flex items-center gap-2 text-sm text-gray-400 hover:text-black transition-colors mb-10 group",children:M.jsx(N0,{size:16,className:"group-hover:-translate-x-1 transition-transform"})}),M.jsxs("header",{className:"mb-10",children:[M.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[M.jsx("span",{className:"bg-black text-white px-3 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase",children:s.category}),M.jsxs("span",{className:"text-gray-400 text-[10px] flex items-center gap-1 uppercase tracking-widest",children:[M.jsx(Ip,{size:12})," ",s.date]})]}),M.jsx("h1",{className:"text-3xl md:text-5xl font-extrabold text-[#37352f] mb-6 leading-tight tracking-tight",children:s.title}),M.jsx("div",{className:"flex items-center gap-6 text-xs text-gray-400 border-b border-gray-100 pb-8",children:M.jsxs("div",{className:"flex items-center gap-1.5",children:[M.jsx(D0,{size:14})," ",c," min read"]})})]}),M.jsx("div",{className:"markdown-content",children:M.jsx(Sb,{content:s.content})}),M.jsx("div",{className:"mt-20 pt-10 border-t border-gray-100",children:M.jsx("div",{className:"flex flex-wrap gap-2",children:s.tags.map(h=>M.jsxs("span",{className:"text-xs bg-gray-50 text-gray-500 px-3 py-1 rounded-full border border-gray-100 font-medium",children:["#",h]},h))})})]}),M.jsx("aside",{className:"hidden lg:block w-64 flex-shrink-0",children:M.jsx(jb,{content:s.content})})]})},Eb=()=>M.jsx(Xp,{children:M.jsx(lb,{children:M.jsxs(bp,{children:[M.jsx(Da,{path:"/",element:M.jsx(yb,{})}),M.jsx(Da,{path:"/post/:slug",element:M.jsx(xb,{})}),M.jsx(Da,{path:"/about",element:M.jsx(Tb,{})}),M.jsx(Da,{path:"/contact",element:M.jsx(Ab,{})})]})})}),Tb=()=>M.jsxs("div",{className:"max-w-3xl mx-auto px-4 py-12 md:py-20 animate-fade-in",children:[M.jsx(Cn,{to:"/",className:"inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-black hover:underline mb-10",children:M.jsx(N0,{size:16,className:"group-hover:-translate-x-1 transition-transform"})}),M.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-12",children:[M.jsx("div",{className:"w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-xl overflow-hidden border border-gray-100 shadow-sm aspect-square bg-gray-50",children:M.jsx("img",{src:"https://pub-f06a78479d2140b1a2dd2680df76b596.r2.dev/views/about.jpg",className:"w-full h-full object-cover",alt:"Xiaolien"})}),M.jsxs("div",{children:[M.jsx("h1",{className:"text-4xl md:text-5xl font-black text-[#37352f] mb-6 tracking-tight",children:"小連同學"}),M.jsxs("p",{className:"text-lg text-gray-600 leading-relaxed mb-4",children:["花蓮出生、桃園長大、台南生活。",M.jsx("br",{}),"但是現居法國格勒諾布爾。"]})]})]}),M.jsxs("div",{className:"prose prose-gray max-w-none",children:[M.jsx("h2",{className:"text-2xl font-bold mb-4"}),M.jsxs("p",{className:"text-gray-600 leading-relaxed mb-6",children:["我沒帶腦出國（哪個交換學生會帶），這裡除了文字都是 vibe coding 出來的東東。我好像越來越不太喜歡發限時動態講一堆，但其實很想和好朋友分享我在法狗的日子，可是我又不會主動找人聊天。所以我就丟在這邊（麻煩了點點點）。有空的話歡迎直接摳咪，跟偶說哪裡很好看 ","><"]})]})]}),Ab=()=>M.jsxs("div",{className:"max-w-2xl mx-auto py-12 text-center animate-fade-in",children:[M.jsx("h1",{className:"text-3xl font-bold mb-6",children:"Get in Touch"}),M.jsx("p",{className:"text-gray-600 mb-8",children:"Feel free to reach out for collaborations or just a friendly chat!"}),M.jsx("div",{className:"flex justify-center gap-4",children:M.jsx("a",{href:"mailto:hello@example.com",className:"bg-black text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors",children:"Email Me"})})]}),B0=document.getElementById("root");if(!B0)throw new Error("Could not find root element to mount to");const zb=gh.createRoot(B0);zb.render(M.jsx(o0.StrictMode,{children:M.jsx(Eb,{})}));
