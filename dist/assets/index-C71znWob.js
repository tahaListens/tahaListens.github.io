(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function Yf(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var _c={exports:{}},Co={},xc={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp;function m_(){if(Cp)return ht;Cp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(R){return R===null||typeof R!="object"?null:(R=v&&R[v]||R["@@iterator"],typeof R=="function"?R:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,w={};function y(R,W,Me){this.props=R,this.context=W,this.refs=w,this.updater=Me||S}y.prototype.isReactComponent={},y.prototype.setState=function(R,W){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,W,"setState")},y.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function _(){}_.prototype=y.prototype;function N(R,W,Me){this.props=R,this.context=W,this.refs=w,this.updater=Me||S}var I=N.prototype=new _;I.constructor=N,T(I,y.prototype),I.isPureReactComponent=!0;var b=Array.isArray,j=Object.prototype.hasOwnProperty,H={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function q(R,W,Me){var $,ce={},_e=null,ge=null;if(W!=null)for($ in W.ref!==void 0&&(ge=W.ref),W.key!==void 0&&(_e=""+W.key),W)j.call(W,$)&&!U.hasOwnProperty($)&&(ce[$]=W[$]);var we=arguments.length-2;if(we===1)ce.children=Me;else if(1<we){for(var He=Array(we),Ue=0;Ue<we;Ue++)He[Ue]=arguments[Ue+2];ce.children=He}if(R&&R.defaultProps)for($ in we=R.defaultProps,we)ce[$]===void 0&&(ce[$]=we[$]);return{$$typeof:s,type:R,key:_e,ref:ge,props:ce,_owner:H.current}}function P(R,W){return{$$typeof:s,type:R.type,key:W,ref:R.ref,props:R.props,_owner:R._owner}}function C(R){return typeof R=="object"&&R!==null&&R.$$typeof===s}function z(R){var W={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(Me){return W[Me]})}var re=/\/+/g;function ee(R,W){return typeof R=="object"&&R!==null&&R.key!=null?z(""+R.key):W.toString(36)}function de(R,W,Me,$,ce){var _e=typeof R;(_e==="undefined"||_e==="boolean")&&(R=null);var ge=!1;if(R===null)ge=!0;else switch(_e){case"string":case"number":ge=!0;break;case"object":switch(R.$$typeof){case s:case e:ge=!0}}if(ge)return ge=R,ce=ce(ge),R=$===""?"."+ee(ge,0):$,b(ce)?(Me="",R!=null&&(Me=R.replace(re,"$&/")+"/"),de(ce,W,Me,"",function(Ue){return Ue})):ce!=null&&(C(ce)&&(ce=P(ce,Me+(!ce.key||ge&&ge.key===ce.key?"":(""+ce.key).replace(re,"$&/")+"/")+R)),W.push(ce)),1;if(ge=0,$=$===""?".":$+":",b(R))for(var we=0;we<R.length;we++){_e=R[we];var He=$+ee(_e,we);ge+=de(_e,W,Me,He,ce)}else if(He=x(R),typeof He=="function")for(R=He.call(R),we=0;!(_e=R.next()).done;)_e=_e.value,He=$+ee(_e,we++),ge+=de(_e,W,Me,He,ce);else if(_e==="object")throw W=String(R),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return ge}function ue(R,W,Me){if(R==null)return R;var $=[],ce=0;return de(R,$,"","",function(_e){return W.call(Me,_e,ce++)}),$}function le(R){if(R._status===-1){var W=R._result;W=W(),W.then(function(Me){(R._status===0||R._status===-1)&&(R._status=1,R._result=Me)},function(Me){(R._status===0||R._status===-1)&&(R._status=2,R._result=Me)}),R._status===-1&&(R._status=0,R._result=W)}if(R._status===1)return R._result.default;throw R._result}var oe={current:null},B={transition:null},ae={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:B,ReactCurrentOwner:H};function F(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:ue,forEach:function(R,W,Me){ue(R,function(){W.apply(this,arguments)},Me)},count:function(R){var W=0;return ue(R,function(){W++}),W},toArray:function(R){return ue(R,function(W){return W})||[]},only:function(R){if(!C(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},ht.Component=y,ht.Fragment=n,ht.Profiler=a,ht.PureComponent=N,ht.StrictMode=r,ht.Suspense=h,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,ht.act=F,ht.cloneElement=function(R,W,Me){if(R==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+R+".");var $=T({},R.props),ce=R.key,_e=R.ref,ge=R._owner;if(W!=null){if(W.ref!==void 0&&(_e=W.ref,ge=H.current),W.key!==void 0&&(ce=""+W.key),R.type&&R.type.defaultProps)var we=R.type.defaultProps;for(He in W)j.call(W,He)&&!U.hasOwnProperty(He)&&($[He]=W[He]===void 0&&we!==void 0?we[He]:W[He])}var He=arguments.length-2;if(He===1)$.children=Me;else if(1<He){we=Array(He);for(var Ue=0;Ue<He;Ue++)we[Ue]=arguments[Ue+2];$.children=we}return{$$typeof:s,type:R.type,key:ce,ref:_e,props:$,_owner:ge}},ht.createContext=function(R){return R={$$typeof:c,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},R.Provider={$$typeof:l,_context:R},R.Consumer=R},ht.createElement=q,ht.createFactory=function(R){var W=q.bind(null,R);return W.type=R,W},ht.createRef=function(){return{current:null}},ht.forwardRef=function(R){return{$$typeof:d,render:R}},ht.isValidElement=C,ht.lazy=function(R){return{$$typeof:g,_payload:{_status:-1,_result:R},_init:le}},ht.memo=function(R,W){return{$$typeof:m,type:R,compare:W===void 0?null:W}},ht.startTransition=function(R){var W=B.transition;B.transition={};try{R()}finally{B.transition=W}},ht.unstable_act=F,ht.useCallback=function(R,W){return oe.current.useCallback(R,W)},ht.useContext=function(R){return oe.current.useContext(R)},ht.useDebugValue=function(){},ht.useDeferredValue=function(R){return oe.current.useDeferredValue(R)},ht.useEffect=function(R,W){return oe.current.useEffect(R,W)},ht.useId=function(){return oe.current.useId()},ht.useImperativeHandle=function(R,W,Me){return oe.current.useImperativeHandle(R,W,Me)},ht.useInsertionEffect=function(R,W){return oe.current.useInsertionEffect(R,W)},ht.useLayoutEffect=function(R,W){return oe.current.useLayoutEffect(R,W)},ht.useMemo=function(R,W){return oe.current.useMemo(R,W)},ht.useReducer=function(R,W,Me){return oe.current.useReducer(R,W,Me)},ht.useRef=function(R){return oe.current.useRef(R)},ht.useState=function(R){return oe.current.useState(R)},ht.useSyncExternalStore=function(R,W,Me){return oe.current.useSyncExternalStore(R,W,Me)},ht.useTransition=function(){return oe.current.useTransition()},ht.version="18.3.1",ht}var Rp;function qf(){return Rp||(Rp=1,xc.exports=m_()),xc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp;function g_(){if(bp)return Co;bp=1;var s=qf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,h,m){var g,v={},x=null,S=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)r.call(h,g)&&!l.hasOwnProperty(g)&&(v[g]=h[g]);if(d&&d.defaultProps)for(g in h=d.defaultProps,h)v[g]===void 0&&(v[g]=h[g]);return{$$typeof:e,type:d,key:x,ref:S,props:v,_owner:a.current}}return Co.Fragment=n,Co.jsx=c,Co.jsxs=c,Co}var Pp;function v_(){return Pp||(Pp=1,_c.exports=g_()),_c.exports}var fe=v_(),Un=qf();const At=Yf(Un);var Ja={},yc={exports:{}},In={},Sc={exports:{}},Ec={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function __(){return Lp||(Lp=1,function(s){function e(B,ae){var F=B.length;B.push(ae);e:for(;0<F;){var R=F-1>>>1,W=B[R];if(0<a(W,ae))B[R]=ae,B[F]=W,F=R;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var ae=B[0],F=B.pop();if(F!==ae){B[0]=F;e:for(var R=0,W=B.length,Me=W>>>1;R<Me;){var $=2*(R+1)-1,ce=B[$],_e=$+1,ge=B[_e];if(0>a(ce,F))_e<W&&0>a(ge,ce)?(B[R]=ge,B[_e]=F,R=_e):(B[R]=ce,B[$]=F,R=$);else if(_e<W&&0>a(ge,F))B[R]=ge,B[_e]=F,R=_e;else break e}}return ae}function a(B,ae){var F=B.sortIndex-ae.sortIndex;return F!==0?F:B.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var h=[],m=[],g=1,v=null,x=3,S=!1,T=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(B){for(var ae=n(m);ae!==null;){if(ae.callback===null)r(m);else if(ae.startTime<=B)r(m),ae.sortIndex=ae.expirationTime,e(h,ae);else break;ae=n(m)}}function b(B){if(w=!1,I(B),!T)if(n(h)!==null)T=!0,le(j);else{var ae=n(m);ae!==null&&oe(b,ae.startTime-B)}}function j(B,ae){T=!1,w&&(w=!1,_(q),q=-1),S=!0;var F=x;try{for(I(ae),v=n(h);v!==null&&(!(v.expirationTime>ae)||B&&!z());){var R=v.callback;if(typeof R=="function"){v.callback=null,x=v.priorityLevel;var W=R(v.expirationTime<=ae);ae=s.unstable_now(),typeof W=="function"?v.callback=W:v===n(h)&&r(h),I(ae)}else r(h);v=n(h)}if(v!==null)var Me=!0;else{var $=n(m);$!==null&&oe(b,$.startTime-ae),Me=!1}return Me}finally{v=null,x=F,S=!1}}var H=!1,U=null,q=-1,P=5,C=-1;function z(){return!(s.unstable_now()-C<P)}function re(){if(U!==null){var B=s.unstable_now();C=B;var ae=!0;try{ae=U(!0,B)}finally{ae?ee():(H=!1,U=null)}}else H=!1}var ee;if(typeof N=="function")ee=function(){N(re)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,ue=de.port2;de.port1.onmessage=re,ee=function(){ue.postMessage(null)}}else ee=function(){y(re,0)};function le(B){U=B,H||(H=!0,ee())}function oe(B,ae){q=y(function(){B(s.unstable_now())},ae)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,le(j))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(B){switch(x){case 1:case 2:case 3:var ae=3;break;default:ae=x}var F=x;x=ae;try{return B()}finally{x=F}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,ae){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var F=x;x=B;try{return ae()}finally{x=F}},s.unstable_scheduleCallback=function(B,ae,F){var R=s.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?R+F:R):F=R,B){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=F+W,B={id:g++,callback:ae,priorityLevel:B,startTime:F,expirationTime:W,sortIndex:-1},F>R?(B.sortIndex=F,e(m,B),n(h)===null&&B===n(m)&&(w?(_(q),q=-1):w=!0,oe(b,F-R))):(B.sortIndex=W,e(h,B),T||S||(T=!0,le(j))),B},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(B){var ae=x;return function(){var F=x;x=ae;try{return B.apply(this,arguments)}finally{x=F}}}}(Ec)),Ec}var Dp;function x_(){return Dp||(Dp=1,Sc.exports=__()),Sc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function y_(){if(Ip)return In;Ip=1;var s=qf(),e=x_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function x(t){return h.call(v,t)?!0:h.call(g,t)?!1:m.test(t)?v[t]=!0:(g[t]=!0,!1)}function S(t,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,u){if(i===null||typeof i>"u"||S(t,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(t,i,o,u,f,p,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new w(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new w(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new w(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new w(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new w(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new w(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new w(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new w(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new w(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function N(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,N);y[i]=new w(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,N);y[i]=new w(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,N);y[i]=new w(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new w(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new w(t,1,!1,t.toLowerCase(),null,!0,!0)});function I(t,i,o,u){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,f,u)&&(o=null),u||f===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,u=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,u?t.setAttributeNS(u,i,o):t.setAttribute(i,o))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,j=Symbol.for("react.element"),H=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),z=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),B=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var F=Object.assign,R;function W(t){if(R===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);R=i&&i[1]||""}return`
`+R+t}var Me=!1;function $(t,i){if(!t||Me)return"";Me=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var u=te}Reflect.construct(t,[],i)}else{try{i.call()}catch(te){u=te}t.call(i.prototype)}else{try{throw Error()}catch(te){u=te}t()}}catch(te){if(te&&u&&typeof te.stack=="string"){for(var f=te.stack.split(`
`),p=u.stack.split(`
`),E=f.length-1,D=p.length-1;1<=E&&0<=D&&f[E]!==p[D];)D--;for(;1<=E&&0<=D;E--,D--)if(f[E]!==p[D]){if(E!==1||D!==1)do if(E--,D--,0>D||f[E]!==p[D]){var O=`
`+f[E].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=E&&0<=D);break}}}finally{Me=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?W(t):""}function ce(t){switch(t.tag){case 5:return W(t.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return t=$(t.type,!1),t;case 11:return t=$(t.type.render,!1),t;case 1:return t=$(t.type,!0),t;default:return""}}function _e(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case H:return"Portal";case P:return"Profiler";case q:return"StrictMode";case ee:return"Suspense";case de:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case re:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ue:return i=t.displayName||null,i!==null?i:_e(t.type)||"Memo";case le:i=t._payload,t=t._init;try{return _e(t(i))}catch{}}return null}function ge(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _e(i);case 8:return i===q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function He(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ue(t){var i=He(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,p.call(this,E)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function tt(t){t._valueTracker||(t._valueTracker=Ue(t))}function wt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return t&&(u=He(t)?t.checked?"true":"false":t.value),t=u,t!==o?(i.setValue(t),!0):!1}function at(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function k(t,i){var o=i.checked;return F({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function yn(t,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=we(i.value!=null?i.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(t,i){i=i.checked,i!=null&&I(t,"checked",i,!1)}function ft(t,i){pt(t,i);var o=we(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Rt(t,i.type,o):i.hasOwnProperty("defaultValue")&&Rt(t,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ye(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Rt(t,i,o){(i!=="number"||at(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Xe=Array.isArray;function L(t,i,o,u){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&u&&(t[o].defaultSelected=!0)}else{for(o=""+we(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,u&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function M(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return F({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function J(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Xe(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:we(o)}}function pe(t,i){var o=we(i.value),u=we(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function ye(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function he(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?he(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ce,Ke=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,u,f)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function $e(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Se[i]=Se[t]})});function et(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Se.hasOwnProperty(t)&&Se[t]?(""+i).trim():i+"px"}function nt(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,f=et(o,i[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,f):t[o]=f}}var ke=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(t,i){if(i){if(ke[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function st(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function G(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Re=null,se=null,me=null;function De(t){if(t=fo(t)){if(typeof Re!="function")throw Error(n(280));var i=t.stateNode;i&&(i=pa(i),Re(t.stateNode,t.type,i))}}function Le(t){se?me?me.push(t):me=[t]:se=t}function ot(){if(se){var t=se,i=me;if(me=se=null,De(t),i)for(t=0;t<i.length;t++)De(i[t])}}function It(t,i){return t(i)}function Zt(){}var xt=!1;function Cn(t,i,o){if(xt)return t(i,o);xt=!0;try{return It(t,i,o)}finally{xt=!1,(se!==null||me!==null)&&(Zt(),ot())}}function Sn(t,i){var o=t.stateNode;if(o===null)return null;var u=pa(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var ts=!1;if(d)try{var Yi={};Object.defineProperty(Yi,"passive",{get:function(){ts=!0}}),window.addEventListener("test",Yi,Yi),window.removeEventListener("test",Yi,Yi)}catch{ts=!1}function Si(t,i,o,u,f,p,E,D,O){var te=Array.prototype.slice.call(arguments,3);try{i.apply(o,te)}catch(xe){this.onError(xe)}}var Ei=!1,Cr=null,Rr=!1,qi=null,jo={onError:function(t){Ei=!0,Cr=t}};function ns(t,i,o,u,f,p,E,D,O){Ei=!1,Cr=null,Si.apply(jo,arguments)}function Yo(t,i,o,u,f,p,E,D,O){if(ns.apply(this,arguments),Ei){if(Ei){var te=Cr;Ei=!1,Cr=null}else throw Error(n(198));Rr||(Rr=!0,qi=te)}}function di(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function qo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function $o(t){if(di(t)!==t)throw Error(n(188))}function Hl(t){var i=t.alternate;if(!i){if(i=di(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,u=i;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return $o(f),t;if(p===u)return $o(f),i;p=p.sibling}throw Error(n(188))}if(o.return!==u.return)o=f,u=p;else{for(var E=!1,D=f.child;D;){if(D===o){E=!0,o=f,u=p;break}if(D===u){E=!0,u=f,o=p;break}D=D.sibling}if(!E){for(D=p.child;D;){if(D===o){E=!0,o=p,u=f;break}if(D===u){E=!0,u=p,o=f;break}D=D.sibling}if(!E)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Ko(t){return t=Hl(t),t!==null?Zo(t):null}function Zo(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Zo(t);if(i!==null)return i;t=t.sibling}return null}var Qo=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,X=e.unstable_shouldYield,ne=e.unstable_requestPaint,Z=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,Te=e.unstable_ImmediatePriority,be=e.unstable_UserBlockingPriority,Ie=e.unstable_NormalPriority,Be=e.unstable_LowPriority,it=e.unstable_IdlePriority,Je=null,Ve=null;function gt(t){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(Je,t,void 0,(t.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:_t,Ht=Math.log,Ft=Math.LN2;function _t(t){return t>>>=0,t===0?32:31-(Ht(t)/Ft|0)|0}var qe=64,Vt=4194304;function mt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dn(t,i){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,p=t.pingedLanes,E=o&268435455;if(E!==0){var D=E&~f;D!==0?u=mt(D):(p&=E,p!==0&&(u=mt(p)))}else E=o&~f,E!==0?u=mt(E):p!==0&&(u=mt(p));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)o=31-lt(i),f=1<<o,u|=t[o],i&=~f;return u}function $i(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function En(t,i){for(var o=t.suspendedLanes,u=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes;0<p;){var E=31-lt(p),D=1<<E,O=f[E];O===-1?((D&o)===0||(D&u)!==0)&&(f[E]=$i(D,i)):O<=i&&(t.expiredLanes|=D),p&=~D}}function Mi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Pt(){var t=qe;return qe<<=1,(qe&4194240)===0&&(qe=64),t}function hn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function nn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-lt(i),t[i]=o}function un(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-lt(o),p=1<<f;i[f]=0,u[f]=-1,t[f]=-1,o&=~p}}function rn(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var u=31-lt(o),f=1<<u;f&i|t[u]&i&&(t[u]|=i),o&=~f}}var yt=0;function hi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var od,Vl,ad,ld,ud,Gl=!1,Jo=[],Ki=null,Zi=null,Qi=null,$s=new Map,Ks=new Map,Ji=[],Og="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cd(t,i){switch(t){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":$s.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ks.delete(i.pointerId)}}function Zs(t,i,o,u,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[f]},i!==null&&(i=fo(i),i!==null&&Vl(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function kg(t,i,o,u,f){switch(i){case"focusin":return Ki=Zs(Ki,t,i,o,u,f),!0;case"dragenter":return Zi=Zs(Zi,t,i,o,u,f),!0;case"mouseover":return Qi=Zs(Qi,t,i,o,u,f),!0;case"pointerover":var p=f.pointerId;return $s.set(p,Zs($s.get(p)||null,t,i,o,u,f)),!0;case"gotpointercapture":return p=f.pointerId,Ks.set(p,Zs(Ks.get(p)||null,t,i,o,u,f)),!0}return!1}function fd(t){var i=br(t.target);if(i!==null){var o=di(i);if(o!==null){if(i=o.tag,i===13){if(i=qo(o),i!==null){t.blockedOn=i,ud(t.priority,function(){ad(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ea(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Xl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);Ct=u,o.target.dispatchEvent(u),Ct=null}else return i=fo(o),i!==null&&Vl(i),t.blockedOn=o,!1;i.shift()}return!0}function dd(t,i,o){ea(t)&&o.delete(i)}function Bg(){Gl=!1,Ki!==null&&ea(Ki)&&(Ki=null),Zi!==null&&ea(Zi)&&(Zi=null),Qi!==null&&ea(Qi)&&(Qi=null),$s.forEach(dd),Ks.forEach(dd)}function Qs(t,i){t.blockedOn===i&&(t.blockedOn=null,Gl||(Gl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Bg)))}function Js(t){function i(f){return Qs(f,t)}if(0<Jo.length){Qs(Jo[0],t);for(var o=1;o<Jo.length;o++){var u=Jo[o];u.blockedOn===t&&(u.blockedOn=null)}}for(Ki!==null&&Qs(Ki,t),Zi!==null&&Qs(Zi,t),Qi!==null&&Qs(Qi,t),$s.forEach(i),Ks.forEach(i),o=0;o<Ji.length;o++)u=Ji[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<Ji.length&&(o=Ji[0],o.blockedOn===null);)fd(o),o.blockedOn===null&&Ji.shift()}var is=b.ReactCurrentBatchConfig,ta=!0;function zg(t,i,o,u){var f=yt,p=is.transition;is.transition=null;try{yt=1,Wl(t,i,o,u)}finally{yt=f,is.transition=p}}function Hg(t,i,o,u){var f=yt,p=is.transition;is.transition=null;try{yt=4,Wl(t,i,o,u)}finally{yt=f,is.transition=p}}function Wl(t,i,o,u){if(ta){var f=Xl(t,i,o,u);if(f===null)lu(t,i,u,na,o),cd(t,u);else if(kg(f,t,i,o,u))u.stopPropagation();else if(cd(t,u),i&4&&-1<Og.indexOf(t)){for(;f!==null;){var p=fo(f);if(p!==null&&od(p),p=Xl(t,i,o,u),p===null&&lu(t,i,u,na,o),p===f)break;f=p}f!==null&&u.stopPropagation()}else lu(t,i,u,null,o)}}var na=null;function Xl(t,i,o,u){if(na=null,t=G(u),t=br(t),t!==null)if(i=di(t),i===null)t=null;else if(o=i.tag,o===13){if(t=qo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return na=t,null}function hd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case Te:return 1;case be:return 4;case Ie:case Be:return 16;case it:return 536870912;default:return 16}default:return 16}}var er=null,jl=null,ia=null;function pd(){if(ia)return ia;var t,i=jl,o=i.length,u,f="value"in er?er.value:er.textContent,p=f.length;for(t=0;t<o&&i[t]===f[t];t++);var E=o-t;for(u=1;u<=E&&i[o-u]===f[p-u];u++);return ia=f.slice(t,1<u?1-u:void 0)}function ra(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function sa(){return!0}function md(){return!1}function kn(t){function i(o,u,f,p,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=p,this.target=E,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(o=t[D],this[D]=o?o(p):p[D]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?sa:md,this.isPropagationStopped=md,this}return F(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=sa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=sa)},persist:function(){},isPersistent:sa}),i}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=kn(rs),eo=F({},rs,{view:0,detail:0}),Vg=kn(eo),ql,$l,to,oa=F({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(ql=t.screenX-to.screenX,$l=t.screenY-to.screenY):$l=ql=0,to=t),ql)},movementY:function(t){return"movementY"in t?t.movementY:$l}}),gd=kn(oa),Gg=F({},oa,{dataTransfer:0}),Wg=kn(Gg),Xg=F({},eo,{relatedTarget:0}),Kl=kn(Xg),jg=F({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Yg=kn(jg),qg=F({},rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$g=kn(qg),Kg=F({},rs,{data:0}),vd=kn(Kg),Zg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ev(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Jg[t])?!!i[t]:!1}function Zl(){return ev}var tv=F({},eo,{key:function(t){if(t.key){var i=Zg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ra(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Qg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zl,charCode:function(t){return t.type==="keypress"?ra(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ra(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),nv=kn(tv),iv=F({},oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_d=kn(iv),rv=F({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zl}),sv=kn(rv),ov=F({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),av=kn(ov),lv=F({},oa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),uv=kn(lv),cv=[9,13,27,32],Ql=d&&"CompositionEvent"in window,no=null;d&&"documentMode"in document&&(no=document.documentMode);var fv=d&&"TextEvent"in window&&!no,xd=d&&(!Ql||no&&8<no&&11>=no),yd=" ",Sd=!1;function Ed(t,i){switch(t){case"keyup":return cv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Md(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function dv(t,i){switch(t){case"compositionend":return Md(i);case"keypress":return i.which!==32?null:(Sd=!0,yd);case"textInput":return t=i.data,t===yd&&Sd?null:t;default:return null}}function hv(t,i){if(ss)return t==="compositionend"||!Ql&&Ed(t,i)?(t=pd(),ia=jl=er=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return xd&&i.locale!=="ko"?null:i.data;default:return null}}var pv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Td(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!pv[t.type]:i==="textarea"}function wd(t,i,o,u){Le(u),i=fa(i,"onChange"),0<i.length&&(o=new Yl("onChange","change",null,o,u),t.push({event:o,listeners:i}))}var io=null,ro=null;function mv(t){Gd(t,0)}function aa(t){var i=cs(t);if(wt(i))return t}function gv(t,i){if(t==="change")return i}var Ad=!1;if(d){var Jl;if(d){var eu="oninput"in document;if(!eu){var Cd=document.createElement("div");Cd.setAttribute("oninput","return;"),eu=typeof Cd.oninput=="function"}Jl=eu}else Jl=!1;Ad=Jl&&(!document.documentMode||9<document.documentMode)}function Rd(){io&&(io.detachEvent("onpropertychange",bd),ro=io=null)}function bd(t){if(t.propertyName==="value"&&aa(ro)){var i=[];wd(i,ro,t,G(t)),Cn(mv,i)}}function vv(t,i,o){t==="focusin"?(Rd(),io=i,ro=o,io.attachEvent("onpropertychange",bd)):t==="focusout"&&Rd()}function _v(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return aa(ro)}function xv(t,i){if(t==="click")return aa(i)}function yv(t,i){if(t==="input"||t==="change")return aa(i)}function Sv(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ei=typeof Object.is=="function"?Object.is:Sv;function so(t,i){if(ei(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!h.call(i,f)||!ei(t[f],i[f]))return!1}return!0}function Pd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ld(t,i){var o=Pd(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=i&&u>=i)return{node:o,offset:i-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Pd(o)}}function Dd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Dd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Id(){for(var t=window,i=at();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=at(t.document)}return i}function tu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Ev(t){var i=Id(),o=t.focusedElem,u=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Dd(o.ownerDocument.documentElement,o)){if(u!==null&&tu(o)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,p=Math.min(u.start,f);u=u.end===void 0?p:Math.min(u.end,f),!t.extend&&p>u&&(f=u,u=p,p=f),f=Ld(o,p);var E=Ld(o,u);f&&E&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),p>u?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Mv=d&&"documentMode"in document&&11>=document.documentMode,os=null,nu=null,oo=null,iu=!1;function Nd(t,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;iu||os==null||os!==at(u)||(u=os,"selectionStart"in u&&tu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),oo&&so(oo,u)||(oo=u,u=fa(nu,"onSelect"),0<u.length&&(i=new Yl("onSelect","select",null,i,o),t.push({event:i,listeners:u}),i.target=os)))}function la(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var as={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionend:la("Transition","TransitionEnd")},ru={},Ud={};d&&(Ud=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function ua(t){if(ru[t])return ru[t];if(!as[t])return t;var i=as[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Ud)return ru[t]=i[o];return t}var Fd=ua("animationend"),Od=ua("animationiteration"),kd=ua("animationstart"),Bd=ua("transitionend"),zd=new Map,Hd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(t,i){zd.set(t,i),l(i,[t])}for(var su=0;su<Hd.length;su++){var ou=Hd[su],Tv=ou.toLowerCase(),wv=ou[0].toUpperCase()+ou.slice(1);tr(Tv,"on"+wv)}tr(Fd,"onAnimationEnd"),tr(Od,"onAnimationIteration"),tr(kd,"onAnimationStart"),tr("dblclick","onDoubleClick"),tr("focusin","onFocus"),tr("focusout","onBlur"),tr(Bd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Av=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function Vd(t,i,o){var u=t.type||"unknown-event";t.currentTarget=o,Yo(u,i,void 0,t),t.currentTarget=null}function Gd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],f=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var E=u.length-1;0<=E;E--){var D=u[E],O=D.instance,te=D.currentTarget;if(D=D.listener,O!==p&&f.isPropagationStopped())break e;Vd(f,D,te),p=O}else for(E=0;E<u.length;E++){if(D=u[E],O=D.instance,te=D.currentTarget,D=D.listener,O!==p&&f.isPropagationStopped())break e;Vd(f,D,te),p=O}}}if(Rr)throw t=qi,Rr=!1,qi=null,t}function Nt(t,i){var o=i[pu];o===void 0&&(o=i[pu]=new Set);var u=t+"__bubble";o.has(u)||(Wd(i,t,2,!1),o.add(u))}function au(t,i,o){var u=0;i&&(u|=4),Wd(o,t,u,i)}var ca="_reactListening"+Math.random().toString(36).slice(2);function lo(t){if(!t[ca]){t[ca]=!0,r.forEach(function(o){o!=="selectionchange"&&(Av.has(o)||au(o,!1,t),au(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ca]||(i[ca]=!0,au("selectionchange",!1,i))}}function Wd(t,i,o,u){switch(hd(i)){case 1:var f=zg;break;case 4:f=Hg;break;default:f=Wl}o=f.bind(null,i,o,t),f=void 0,!ts||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function lu(t,i,o,u,f){var p=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var D=u.stateNode.containerInfo;if(D===f||D.nodeType===8&&D.parentNode===f)break;if(E===4)for(E=u.return;E!==null;){var O=E.tag;if((O===3||O===4)&&(O=E.stateNode.containerInfo,O===f||O.nodeType===8&&O.parentNode===f))return;E=E.return}for(;D!==null;){if(E=br(D),E===null)return;if(O=E.tag,O===5||O===6){u=p=E;continue e}D=D.parentNode}}u=u.return}Cn(function(){var te=p,xe=G(o),Ee=[];e:{var ve=zd.get(t);if(ve!==void 0){var Ne=Yl,ze=t;switch(t){case"keypress":if(ra(o)===0)break e;case"keydown":case"keyup":Ne=nv;break;case"focusin":ze="focus",Ne=Kl;break;case"focusout":ze="blur",Ne=Kl;break;case"beforeblur":case"afterblur":Ne=Kl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=Wg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=sv;break;case Fd:case Od:case kd:Ne=Yg;break;case Bd:Ne=av;break;case"scroll":Ne=Vg;break;case"wheel":Ne=uv;break;case"copy":case"cut":case"paste":Ne=$g;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=_d}var Ge=(i&4)!==0,Wt=!Ge&&t==="scroll",K=Ge?ve!==null?ve+"Capture":null:ve;Ge=[];for(var V=te,Q;V!==null;){Q=V;var Ae=Q.stateNode;if(Q.tag===5&&Ae!==null&&(Q=Ae,K!==null&&(Ae=Sn(V,K),Ae!=null&&Ge.push(uo(V,Ae,Q)))),Wt)break;V=V.return}0<Ge.length&&(ve=new Ne(ve,ze,null,o,xe),Ee.push({event:ve,listeners:Ge}))}}if((i&7)===0){e:{if(ve=t==="mouseover"||t==="pointerover",Ne=t==="mouseout"||t==="pointerout",ve&&o!==Ct&&(ze=o.relatedTarget||o.fromElement)&&(br(ze)||ze[Ti]))break e;if((Ne||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ne?(ze=o.relatedTarget||o.toElement,Ne=te,ze=ze?br(ze):null,ze!==null&&(Wt=di(ze),ze!==Wt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ne=null,ze=te),Ne!==ze)){if(Ge=gd,Ae="onMouseLeave",K="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Ge=_d,Ae="onPointerLeave",K="onPointerEnter",V="pointer"),Wt=Ne==null?ve:cs(Ne),Q=ze==null?ve:cs(ze),ve=new Ge(Ae,V+"leave",Ne,o,xe),ve.target=Wt,ve.relatedTarget=Q,Ae=null,br(xe)===te&&(Ge=new Ge(K,V+"enter",ze,o,xe),Ge.target=Q,Ge.relatedTarget=Wt,Ae=Ge),Wt=Ae,Ne&&ze)t:{for(Ge=Ne,K=ze,V=0,Q=Ge;Q;Q=ls(Q))V++;for(Q=0,Ae=K;Ae;Ae=ls(Ae))Q++;for(;0<V-Q;)Ge=ls(Ge),V--;for(;0<Q-V;)K=ls(K),Q--;for(;V--;){if(Ge===K||K!==null&&Ge===K.alternate)break t;Ge=ls(Ge),K=ls(K)}Ge=null}else Ge=null;Ne!==null&&Xd(Ee,ve,Ne,Ge,!1),ze!==null&&Wt!==null&&Xd(Ee,Wt,ze,Ge,!0)}}e:{if(ve=te?cs(te):window,Ne=ve.nodeName&&ve.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&ve.type==="file")var je=gv;else if(Td(ve))if(Ad)je=yv;else{je=_v;var Ze=vv}else(Ne=ve.nodeName)&&Ne.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(je=xv);if(je&&(je=je(t,te))){wd(Ee,je,o,xe);break e}Ze&&Ze(t,ve,te),t==="focusout"&&(Ze=ve._wrapperState)&&Ze.controlled&&ve.type==="number"&&Rt(ve,"number",ve.value)}switch(Ze=te?cs(te):window,t){case"focusin":(Td(Ze)||Ze.contentEditable==="true")&&(os=Ze,nu=te,oo=null);break;case"focusout":oo=nu=os=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,Nd(Ee,o,xe);break;case"selectionchange":if(Mv)break;case"keydown":case"keyup":Nd(Ee,o,xe)}var Qe;if(Ql)e:{switch(t){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else ss?Ed(t,o)&&(rt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(rt="onCompositionStart");rt&&(xd&&o.locale!=="ko"&&(ss||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&ss&&(Qe=pd()):(er=xe,jl="value"in er?er.value:er.textContent,ss=!0)),Ze=fa(te,rt),0<Ze.length&&(rt=new vd(rt,t,null,o,xe),Ee.push({event:rt,listeners:Ze}),Qe?rt.data=Qe:(Qe=Md(o),Qe!==null&&(rt.data=Qe)))),(Qe=fv?dv(t,o):hv(t,o))&&(te=fa(te,"onBeforeInput"),0<te.length&&(xe=new vd("onBeforeInput","beforeinput",null,o,xe),Ee.push({event:xe,listeners:te}),xe.data=Qe))}Gd(Ee,i)})}function uo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function fa(t,i){for(var o=i+"Capture",u=[];t!==null;){var f=t,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=Sn(t,o),p!=null&&u.unshift(uo(t,p,f)),p=Sn(t,i),p!=null&&u.push(uo(t,p,f))),t=t.return}return u}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xd(t,i,o,u,f){for(var p=i._reactName,E=[];o!==null&&o!==u;){var D=o,O=D.alternate,te=D.stateNode;if(O!==null&&O===u)break;D.tag===5&&te!==null&&(D=te,f?(O=Sn(o,p),O!=null&&E.unshift(uo(o,O,D))):f||(O=Sn(o,p),O!=null&&E.push(uo(o,O,D)))),o=o.return}E.length!==0&&t.push({event:i,listeners:E})}var Cv=/\r\n?/g,Rv=/\u0000|\uFFFD/g;function jd(t){return(typeof t=="string"?t:""+t).replace(Cv,`
`).replace(Rv,"")}function da(t,i,o){if(i=jd(i),jd(t)!==i&&o)throw Error(n(425))}function ha(){}var uu=null,cu=null;function fu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var du=typeof setTimeout=="function"?setTimeout:void 0,bv=typeof clearTimeout=="function"?clearTimeout:void 0,Yd=typeof Promise=="function"?Promise:void 0,Pv=typeof queueMicrotask=="function"?queueMicrotask:typeof Yd<"u"?function(t){return Yd.resolve(null).then(t).catch(Lv)}:du;function Lv(t){setTimeout(function(){throw t})}function hu(t,i){var o=i,u=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(u===0){t.removeChild(f),Js(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=f}while(o);Js(i)}function nr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function qd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var us=Math.random().toString(36).slice(2),pi="__reactFiber$"+us,co="__reactProps$"+us,Ti="__reactContainer$"+us,pu="__reactEvents$"+us,Dv="__reactListeners$"+us,Iv="__reactHandles$"+us;function br(t){var i=t[pi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ti]||o[pi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=qd(t);t!==null;){if(o=t[pi])return o;t=qd(t)}return i}t=o,o=t.parentNode}return null}function fo(t){return t=t[pi]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function pa(t){return t[co]||null}var mu=[],fs=-1;function ir(t){return{current:t}}function Ut(t){0>fs||(t.current=mu[fs],mu[fs]=null,fs--)}function Dt(t,i){fs++,mu[fs]=t.current,t.current=i}var rr={},pn=ir(rr),Rn=ir(!1),Pr=rr;function ds(t,i){var o=t.type.contextTypes;if(!o)return rr;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in o)f[p]=i[p];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function bn(t){return t=t.childContextTypes,t!=null}function ma(){Ut(Rn),Ut(pn)}function $d(t,i,o){if(pn.current!==rr)throw Error(n(168));Dt(pn,i),Dt(Rn,o)}function Kd(t,i,o){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(n(108,ge(t)||"Unknown",f));return F({},o,u)}function ga(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,Pr=pn.current,Dt(pn,t),Dt(Rn,Rn.current),!0}function Zd(t,i,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=Kd(t,i,Pr),u.__reactInternalMemoizedMergedChildContext=t,Ut(Rn),Ut(pn),Dt(pn,t)):Ut(Rn),Dt(Rn,o)}var wi=null,va=!1,gu=!1;function Qd(t){wi===null?wi=[t]:wi.push(t)}function Nv(t){va=!0,Qd(t)}function sr(){if(!gu&&wi!==null){gu=!0;var t=0,i=yt;try{var o=wi;for(yt=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}wi=null,va=!1}catch(f){throw wi!==null&&(wi=wi.slice(t+1)),Qo(Te,sr),f}finally{yt=i,gu=!1}}return null}var hs=[],ps=0,_a=null,xa=0,Xn=[],jn=0,Lr=null,Ai=1,Ci="";function Dr(t,i){hs[ps++]=xa,hs[ps++]=_a,_a=t,xa=i}function Jd(t,i,o){Xn[jn++]=Ai,Xn[jn++]=Ci,Xn[jn++]=Lr,Lr=t;var u=Ai;t=Ci;var f=32-lt(u)-1;u&=~(1<<f),o+=1;var p=32-lt(i)+f;if(30<p){var E=f-f%5;p=(u&(1<<E)-1).toString(32),u>>=E,f-=E,Ai=1<<32-lt(i)+f|o<<f|u,Ci=p+t}else Ai=1<<p|o<<f|u,Ci=t}function vu(t){t.return!==null&&(Dr(t,1),Jd(t,1,0))}function _u(t){for(;t===_a;)_a=hs[--ps],hs[ps]=null,xa=hs[--ps],hs[ps]=null;for(;t===Lr;)Lr=Xn[--jn],Xn[jn]=null,Ci=Xn[--jn],Xn[jn]=null,Ai=Xn[--jn],Xn[jn]=null}var Bn=null,zn=null,Ot=!1,ti=null;function eh(t,i){var o=Kn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function th(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Bn=t,zn=nr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Bn=t,zn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Lr!==null?{id:Ai,overflow:Ci}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Kn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Bn=t,zn=null,!0):!1;default:return!1}}function xu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yu(t){if(Ot){var i=zn;if(i){var o=i;if(!th(t,i)){if(xu(t))throw Error(n(418));i=nr(o.nextSibling);var u=Bn;i&&th(t,i)?eh(u,o):(t.flags=t.flags&-4097|2,Ot=!1,Bn=t)}}else{if(xu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ot=!1,Bn=t}}}function nh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bn=t}function ya(t){if(t!==Bn)return!1;if(!Ot)return nh(t),Ot=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!fu(t.type,t.memoizedProps)),i&&(i=zn)){if(xu(t))throw ih(),Error(n(418));for(;i;)eh(t,i),i=nr(i.nextSibling)}if(nh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){zn=nr(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}zn=null}}else zn=Bn?nr(t.stateNode.nextSibling):null;return!0}function ih(){for(var t=zn;t;)t=nr(t.nextSibling)}function ms(){zn=Bn=null,Ot=!1}function Su(t){ti===null?ti=[t]:ti.push(t)}var Uv=b.ReactCurrentBatchConfig;function ho(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var f=u,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(E){var D=f.refs;E===null?delete D[p]:D[p]=E},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Sa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function rh(t){var i=t._init;return i(t._payload)}function sh(t){function i(K,V){if(t){var Q=K.deletions;Q===null?(K.deletions=[V],K.flags|=16):Q.push(V)}}function o(K,V){if(!t)return null;for(;V!==null;)i(K,V),V=V.sibling;return null}function u(K,V){for(K=new Map;V!==null;)V.key!==null?K.set(V.key,V):K.set(V.index,V),V=V.sibling;return K}function f(K,V){return K=hr(K,V),K.index=0,K.sibling=null,K}function p(K,V,Q){return K.index=Q,t?(Q=K.alternate,Q!==null?(Q=Q.index,Q<V?(K.flags|=2,V):Q):(K.flags|=2,V)):(K.flags|=1048576,V)}function E(K){return t&&K.alternate===null&&(K.flags|=2),K}function D(K,V,Q,Ae){return V===null||V.tag!==6?(V=dc(Q,K.mode,Ae),V.return=K,V):(V=f(V,Q),V.return=K,V)}function O(K,V,Q,Ae){var je=Q.type;return je===U?xe(K,V,Q.props.children,Ae,Q.key):V!==null&&(V.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===le&&rh(je)===V.type)?(Ae=f(V,Q.props),Ae.ref=ho(K,V,Q),Ae.return=K,Ae):(Ae=Xa(Q.type,Q.key,Q.props,null,K.mode,Ae),Ae.ref=ho(K,V,Q),Ae.return=K,Ae)}function te(K,V,Q,Ae){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=hc(Q,K.mode,Ae),V.return=K,V):(V=f(V,Q.children||[]),V.return=K,V)}function xe(K,V,Q,Ae,je){return V===null||V.tag!==7?(V=zr(Q,K.mode,Ae,je),V.return=K,V):(V=f(V,Q),V.return=K,V)}function Ee(K,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number")return V=dc(""+V,K.mode,Q),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case j:return Q=Xa(V.type,V.key,V.props,null,K.mode,Q),Q.ref=ho(K,null,V),Q.return=K,Q;case H:return V=hc(V,K.mode,Q),V.return=K,V;case le:var Ae=V._init;return Ee(K,Ae(V._payload),Q)}if(Xe(V)||ae(V))return V=zr(V,K.mode,Q,null),V.return=K,V;Sa(K,V)}return null}function ve(K,V,Q,Ae){var je=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return je!==null?null:D(K,V,""+Q,Ae);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case j:return Q.key===je?O(K,V,Q,Ae):null;case H:return Q.key===je?te(K,V,Q,Ae):null;case le:return je=Q._init,ve(K,V,je(Q._payload),Ae)}if(Xe(Q)||ae(Q))return je!==null?null:xe(K,V,Q,Ae,null);Sa(K,Q)}return null}function Ne(K,V,Q,Ae,je){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return K=K.get(Q)||null,D(V,K,""+Ae,je);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case j:return K=K.get(Ae.key===null?Q:Ae.key)||null,O(V,K,Ae,je);case H:return K=K.get(Ae.key===null?Q:Ae.key)||null,te(V,K,Ae,je);case le:var Ze=Ae._init;return Ne(K,V,Q,Ze(Ae._payload),je)}if(Xe(Ae)||ae(Ae))return K=K.get(Q)||null,xe(V,K,Ae,je,null);Sa(V,Ae)}return null}function ze(K,V,Q,Ae){for(var je=null,Ze=null,Qe=V,rt=V=0,an=null;Qe!==null&&rt<Q.length;rt++){Qe.index>rt?(an=Qe,Qe=null):an=Qe.sibling;var Mt=ve(K,Qe,Q[rt],Ae);if(Mt===null){Qe===null&&(Qe=an);break}t&&Qe&&Mt.alternate===null&&i(K,Qe),V=p(Mt,V,rt),Ze===null?je=Mt:Ze.sibling=Mt,Ze=Mt,Qe=an}if(rt===Q.length)return o(K,Qe),Ot&&Dr(K,rt),je;if(Qe===null){for(;rt<Q.length;rt++)Qe=Ee(K,Q[rt],Ae),Qe!==null&&(V=p(Qe,V,rt),Ze===null?je=Qe:Ze.sibling=Qe,Ze=Qe);return Ot&&Dr(K,rt),je}for(Qe=u(K,Qe);rt<Q.length;rt++)an=Ne(Qe,K,rt,Q[rt],Ae),an!==null&&(t&&an.alternate!==null&&Qe.delete(an.key===null?rt:an.key),V=p(an,V,rt),Ze===null?je=an:Ze.sibling=an,Ze=an);return t&&Qe.forEach(function(pr){return i(K,pr)}),Ot&&Dr(K,rt),je}function Ge(K,V,Q,Ae){var je=ae(Q);if(typeof je!="function")throw Error(n(150));if(Q=je.call(Q),Q==null)throw Error(n(151));for(var Ze=je=null,Qe=V,rt=V=0,an=null,Mt=Q.next();Qe!==null&&!Mt.done;rt++,Mt=Q.next()){Qe.index>rt?(an=Qe,Qe=null):an=Qe.sibling;var pr=ve(K,Qe,Mt.value,Ae);if(pr===null){Qe===null&&(Qe=an);break}t&&Qe&&pr.alternate===null&&i(K,Qe),V=p(pr,V,rt),Ze===null?je=pr:Ze.sibling=pr,Ze=pr,Qe=an}if(Mt.done)return o(K,Qe),Ot&&Dr(K,rt),je;if(Qe===null){for(;!Mt.done;rt++,Mt=Q.next())Mt=Ee(K,Mt.value,Ae),Mt!==null&&(V=p(Mt,V,rt),Ze===null?je=Mt:Ze.sibling=Mt,Ze=Mt);return Ot&&Dr(K,rt),je}for(Qe=u(K,Qe);!Mt.done;rt++,Mt=Q.next())Mt=Ne(Qe,K,rt,Mt.value,Ae),Mt!==null&&(t&&Mt.alternate!==null&&Qe.delete(Mt.key===null?rt:Mt.key),V=p(Mt,V,rt),Ze===null?je=Mt:Ze.sibling=Mt,Ze=Mt);return t&&Qe.forEach(function(p_){return i(K,p_)}),Ot&&Dr(K,rt),je}function Wt(K,V,Q,Ae){if(typeof Q=="object"&&Q!==null&&Q.type===U&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case j:e:{for(var je=Q.key,Ze=V;Ze!==null;){if(Ze.key===je){if(je=Q.type,je===U){if(Ze.tag===7){o(K,Ze.sibling),V=f(Ze,Q.props.children),V.return=K,K=V;break e}}else if(Ze.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===le&&rh(je)===Ze.type){o(K,Ze.sibling),V=f(Ze,Q.props),V.ref=ho(K,Ze,Q),V.return=K,K=V;break e}o(K,Ze);break}else i(K,Ze);Ze=Ze.sibling}Q.type===U?(V=zr(Q.props.children,K.mode,Ae,Q.key),V.return=K,K=V):(Ae=Xa(Q.type,Q.key,Q.props,null,K.mode,Ae),Ae.ref=ho(K,V,Q),Ae.return=K,K=Ae)}return E(K);case H:e:{for(Ze=Q.key;V!==null;){if(V.key===Ze)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){o(K,V.sibling),V=f(V,Q.children||[]),V.return=K,K=V;break e}else{o(K,V);break}else i(K,V);V=V.sibling}V=hc(Q,K.mode,Ae),V.return=K,K=V}return E(K);case le:return Ze=Q._init,Wt(K,V,Ze(Q._payload),Ae)}if(Xe(Q))return ze(K,V,Q,Ae);if(ae(Q))return Ge(K,V,Q,Ae);Sa(K,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,V!==null&&V.tag===6?(o(K,V.sibling),V=f(V,Q),V.return=K,K=V):(o(K,V),V=dc(Q,K.mode,Ae),V.return=K,K=V),E(K)):o(K,V)}return Wt}var gs=sh(!0),oh=sh(!1),Ea=ir(null),Ma=null,vs=null,Eu=null;function Mu(){Eu=vs=Ma=null}function Tu(t){var i=Ea.current;Ut(Ea),t._currentValue=i}function wu(t,i,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===o)break;t=t.return}}function _s(t,i){Ma=t,Eu=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Pn=!0),t.firstContext=null)}function Yn(t){var i=t._currentValue;if(Eu!==t)if(t={context:t,memoizedValue:i,next:null},vs===null){if(Ma===null)throw Error(n(308));vs=t,Ma.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return i}var Ir=null;function Au(t){Ir===null?Ir=[t]:Ir.push(t)}function ah(t,i,o,u){var f=i.interleaved;return f===null?(o.next=o,Au(i)):(o.next=f.next,f.next=o),i.interleaved=o,Ri(t,u)}function Ri(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var or=!1;function Cu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function ar(t,i,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(St&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,Ri(t,o)}return f=u.interleaved,f===null?(i.next=i,Au(u)):(i.next=f.next,f.next=i),u.interleaved=i,Ri(t,o)}function Ta(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,rn(t,o)}}function uh(t,i){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?f=p=E:p=p.next=E,o=o.next}while(o!==null);p===null?f=p=i:p=p.next=i}else f=p=i;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function wa(t,i,o,u){var f=t.updateQueue;or=!1;var p=f.firstBaseUpdate,E=f.lastBaseUpdate,D=f.shared.pending;if(D!==null){f.shared.pending=null;var O=D,te=O.next;O.next=null,E===null?p=te:E.next=te,E=O;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,D=xe.lastBaseUpdate,D!==E&&(D===null?xe.firstBaseUpdate=te:D.next=te,xe.lastBaseUpdate=O))}if(p!==null){var Ee=f.baseState;E=0,xe=te=O=null,D=p;do{var ve=D.lane,Ne=D.eventTime;if((u&ve)===ve){xe!==null&&(xe=xe.next={eventTime:Ne,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var ze=t,Ge=D;switch(ve=i,Ne=o,Ge.tag){case 1:if(ze=Ge.payload,typeof ze=="function"){Ee=ze.call(Ne,Ee,ve);break e}Ee=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ge.payload,ve=typeof ze=="function"?ze.call(Ne,Ee,ve):ze,ve==null)break e;Ee=F({},Ee,ve);break e;case 2:or=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,ve=f.effects,ve===null?f.effects=[D]:ve.push(D))}else Ne={eventTime:Ne,lane:ve,tag:D.tag,payload:D.payload,callback:D.callback,next:null},xe===null?(te=xe=Ne,O=Ee):xe=xe.next=Ne,E|=ve;if(D=D.next,D===null){if(D=f.shared.pending,D===null)break;ve=D,D=ve.next,ve.next=null,f.lastBaseUpdate=ve,f.shared.pending=null}}while(!0);if(xe===null&&(O=Ee),f.baseState=O,f.firstBaseUpdate=te,f.lastBaseUpdate=xe,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);Fr|=E,t.lanes=E,t.memoizedState=Ee}}function ch(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],f=u.callback;if(f!==null){if(u.callback=null,u=o,typeof f!="function")throw Error(n(191,f));f.call(u)}}}var po={},mi=ir(po),mo=ir(po),go=ir(po);function Nr(t){if(t===po)throw Error(n(174));return t}function Ru(t,i){switch(Dt(go,i),Dt(mo,t),Dt(mi,po),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=We(i,t)}Ut(mi),Dt(mi,i)}function xs(){Ut(mi),Ut(mo),Ut(go)}function fh(t){Nr(go.current);var i=Nr(mi.current),o=We(i,t.type);i!==o&&(Dt(mo,t),Dt(mi,o))}function bu(t){mo.current===t&&(Ut(mi),Ut(mo))}var kt=ir(0);function Aa(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Pu=[];function Lu(){for(var t=0;t<Pu.length;t++)Pu[t]._workInProgressVersionPrimary=null;Pu.length=0}var Ca=b.ReactCurrentDispatcher,Du=b.ReactCurrentBatchConfig,Ur=0,Bt=null,Qt=null,sn=null,Ra=!1,vo=!1,_o=0,Fv=0;function mn(){throw Error(n(321))}function Iu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!ei(t[o],i[o]))return!1;return!0}function Nu(t,i,o,u,f,p){if(Ur=p,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ca.current=t===null||t.memoizedState===null?zv:Hv,t=o(u,f),vo){p=0;do{if(vo=!1,_o=0,25<=p)throw Error(n(301));p+=1,sn=Qt=null,i.updateQueue=null,Ca.current=Vv,t=o(u,f)}while(vo)}if(Ca.current=La,i=Qt!==null&&Qt.next!==null,Ur=0,sn=Qt=Bt=null,Ra=!1,i)throw Error(n(300));return t}function Uu(){var t=_o!==0;return _o=0,t}function gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Bt.memoizedState=sn=t:sn=sn.next=t,sn}function qn(){if(Qt===null){var t=Bt.alternate;t=t!==null?t.memoizedState:null}else t=Qt.next;var i=sn===null?Bt.memoizedState:sn.next;if(i!==null)sn=i,Qt=t;else{if(t===null)throw Error(n(310));Qt=t,t={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},sn===null?Bt.memoizedState=sn=t:sn=sn.next=t}return sn}function xo(t,i){return typeof i=="function"?i(t):i}function Fu(t){var i=qn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=Qt,f=u.baseQueue,p=o.pending;if(p!==null){if(f!==null){var E=f.next;f.next=p.next,p.next=E}u.baseQueue=f=p,o.pending=null}if(f!==null){p=f.next,u=u.baseState;var D=E=null,O=null,te=p;do{var xe=te.lane;if((Ur&xe)===xe)O!==null&&(O=O.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),u=te.hasEagerState?te.eagerState:t(u,te.action);else{var Ee={lane:xe,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};O===null?(D=O=Ee,E=u):O=O.next=Ee,Bt.lanes|=xe,Fr|=xe}te=te.next}while(te!==null&&te!==p);O===null?E=u:O.next=D,ei(u,i.memoizedState)||(Pn=!0),i.memoizedState=u,i.baseState=E,i.baseQueue=O,o.lastRenderedState=u}if(t=o.interleaved,t!==null){f=t;do p=f.lane,Bt.lanes|=p,Fr|=p,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Ou(t){var i=qn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,f=o.pending,p=i.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do p=t(p,E.action),E=E.next;while(E!==f);ei(p,i.memoizedState)||(Pn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,u]}function dh(){}function hh(t,i){var o=Bt,u=qn(),f=i(),p=!ei(u.memoizedState,f);if(p&&(u.memoizedState=f,Pn=!0),u=u.queue,ku(gh.bind(null,o,u,t),[t]),u.getSnapshot!==i||p||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,yo(9,mh.bind(null,o,u,f,i),void 0,null),on===null)throw Error(n(349));(Ur&30)!==0||ph(o,i,f)}return f}function ph(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function mh(t,i,o,u){i.value=o,i.getSnapshot=u,vh(i)&&_h(t)}function gh(t,i,o){return o(function(){vh(i)&&_h(t)})}function vh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!ei(t,o)}catch{return!0}}function _h(t){var i=Ri(t,1);i!==null&&si(i,t,1,-1)}function xh(t){var i=gi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:t},i.queue=t,t=t.dispatch=Bv.bind(null,Bt,t),[i.memoizedState,t]}function yo(t,i,o,u){return t={tag:t,create:i,destroy:o,deps:u,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,i.lastEffect=t)),t}function yh(){return qn().memoizedState}function ba(t,i,o,u){var f=gi();Bt.flags|=t,f.memoizedState=yo(1|i,o,void 0,u===void 0?null:u)}function Pa(t,i,o,u){var f=qn();u=u===void 0?null:u;var p=void 0;if(Qt!==null){var E=Qt.memoizedState;if(p=E.destroy,u!==null&&Iu(u,E.deps)){f.memoizedState=yo(i,o,p,u);return}}Bt.flags|=t,f.memoizedState=yo(1|i,o,p,u)}function Sh(t,i){return ba(8390656,8,t,i)}function ku(t,i){return Pa(2048,8,t,i)}function Eh(t,i){return Pa(4,2,t,i)}function Mh(t,i){return Pa(4,4,t,i)}function Th(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function wh(t,i,o){return o=o!=null?o.concat([t]):null,Pa(4,4,Th.bind(null,i,t),o)}function Bu(){}function Ah(t,i){var o=qn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Iu(i,u[1])?u[0]:(o.memoizedState=[t,i],t)}function Ch(t,i){var o=qn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Iu(i,u[1])?u[0]:(t=t(),o.memoizedState=[t,i],t)}function Rh(t,i,o){return(Ur&21)===0?(t.baseState&&(t.baseState=!1,Pn=!0),t.memoizedState=o):(ei(o,i)||(o=Pt(),Bt.lanes|=o,Fr|=o,t.baseState=!0),i)}function Ov(t,i){var o=yt;yt=o!==0&&4>o?o:4,t(!0);var u=Du.transition;Du.transition={};try{t(!1),i()}finally{yt=o,Du.transition=u}}function bh(){return qn().memoizedState}function kv(t,i,o){var u=fr(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Ph(t))Lh(i,o);else if(o=ah(t,i,o,u),o!==null){var f=Tn();si(o,t,u,f),Dh(o,i,u)}}function Bv(t,i,o){var u=fr(t),f={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Ph(t))Lh(i,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var E=i.lastRenderedState,D=p(E,o);if(f.hasEagerState=!0,f.eagerState=D,ei(D,E)){var O=i.interleaved;O===null?(f.next=f,Au(i)):(f.next=O.next,O.next=f),i.interleaved=f;return}}catch{}finally{}o=ah(t,i,f,u),o!==null&&(f=Tn(),si(o,t,u,f),Dh(o,i,u))}}function Ph(t){var i=t.alternate;return t===Bt||i!==null&&i===Bt}function Lh(t,i){vo=Ra=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Dh(t,i,o){if((o&4194240)!==0){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,rn(t,o)}}var La={readContext:Yn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},zv={readContext:Yn,useCallback:function(t,i){return gi().memoizedState=[t,i===void 0?null:i],t},useContext:Yn,useEffect:Sh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,ba(4194308,4,Th.bind(null,i,t),o)},useLayoutEffect:function(t,i){return ba(4194308,4,t,i)},useInsertionEffect:function(t,i){return ba(4,2,t,i)},useMemo:function(t,i){var o=gi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var u=gi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=kv.bind(null,Bt,t),[u.memoizedState,t]},useRef:function(t){var i=gi();return t={current:t},i.memoizedState=t},useState:xh,useDebugValue:Bu,useDeferredValue:function(t){return gi().memoizedState=t},useTransition:function(){var t=xh(!1),i=t[0];return t=Ov.bind(null,t[1]),gi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var u=Bt,f=gi();if(Ot){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),on===null)throw Error(n(349));(Ur&30)!==0||ph(u,i,o)}f.memoizedState=o;var p={value:o,getSnapshot:i};return f.queue=p,Sh(gh.bind(null,u,p,t),[t]),u.flags|=2048,yo(9,mh.bind(null,u,p,o,i),void 0,null),o},useId:function(){var t=gi(),i=on.identifierPrefix;if(Ot){var o=Ci,u=Ai;o=(u&~(1<<32-lt(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=_o++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Fv++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Hv={readContext:Yn,useCallback:Ah,useContext:Yn,useEffect:ku,useImperativeHandle:wh,useInsertionEffect:Eh,useLayoutEffect:Mh,useMemo:Ch,useReducer:Fu,useRef:yh,useState:function(){return Fu(xo)},useDebugValue:Bu,useDeferredValue:function(t){var i=qn();return Rh(i,Qt.memoizedState,t)},useTransition:function(){var t=Fu(xo)[0],i=qn().memoizedState;return[t,i]},useMutableSource:dh,useSyncExternalStore:hh,useId:bh,unstable_isNewReconciler:!1},Vv={readContext:Yn,useCallback:Ah,useContext:Yn,useEffect:ku,useImperativeHandle:wh,useInsertionEffect:Eh,useLayoutEffect:Mh,useMemo:Ch,useReducer:Ou,useRef:yh,useState:function(){return Ou(xo)},useDebugValue:Bu,useDeferredValue:function(t){var i=qn();return Qt===null?i.memoizedState=t:Rh(i,Qt.memoizedState,t)},useTransition:function(){var t=Ou(xo)[0],i=qn().memoizedState;return[t,i]},useMutableSource:dh,useSyncExternalStore:hh,useId:bh,unstable_isNewReconciler:!1};function ni(t,i){if(t&&t.defaultProps){i=F({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function zu(t,i,o,u){i=t.memoizedState,o=o(u,i),o=o==null?i:F({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Da={isMounted:function(t){return(t=t._reactInternals)?di(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var u=Tn(),f=fr(t),p=bi(u,f);p.payload=i,o!=null&&(p.callback=o),i=ar(t,p,f),i!==null&&(si(i,t,f,u),Ta(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var u=Tn(),f=fr(t),p=bi(u,f);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=ar(t,p,f),i!==null&&(si(i,t,f,u),Ta(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Tn(),u=fr(t),f=bi(o,u);f.tag=2,i!=null&&(f.callback=i),i=ar(t,f,u),i!==null&&(si(i,t,u,o),Ta(i,t,u))}};function Ih(t,i,o,u,f,p,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,p,E):i.prototype&&i.prototype.isPureReactComponent?!so(o,u)||!so(f,p):!0}function Nh(t,i,o){var u=!1,f=rr,p=i.contextType;return typeof p=="object"&&p!==null?p=Yn(p):(f=bn(i)?Pr:pn.current,u=i.contextTypes,p=(u=u!=null)?ds(t,f):rr),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Da,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=p),i}function Uh(t,i,o,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==t&&Da.enqueueReplaceState(i,i.state,null)}function Hu(t,i,o,u){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},Cu(t);var p=i.contextType;typeof p=="object"&&p!==null?f.context=Yn(p):(p=bn(i)?Pr:pn.current,f.context=ds(t,p)),f.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(zu(t,i,p,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Da.enqueueReplaceState(f,f.state,null),wa(t,o,f,u),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function ys(t,i){try{var o="",u=i;do o+=ce(u),u=u.return;while(u);var f=o}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:f,digest:null}}function Vu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Gu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Gv=typeof WeakMap=="function"?WeakMap:Map;function Fh(t,i,o){o=bi(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Ba||(Ba=!0,rc=u),Gu(t,i)},o}function Oh(t,i,o){o=bi(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;o.payload=function(){return u(f)},o.callback=function(){Gu(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Gu(t,i),typeof u!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function kh(t,i,o){var u=t.pingCache;if(u===null){u=t.pingCache=new Gv;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(o)||(f.add(o),t=i_.bind(null,t,i,o),i.then(t,t))}function Bh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function zh(t,i,o,u,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=bi(-1,1),i.tag=2,ar(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var Wv=b.ReactCurrentOwner,Pn=!1;function Mn(t,i,o,u){i.child=t===null?oh(i,null,o,u):gs(i,t.child,o,u)}function Hh(t,i,o,u,f){o=o.render;var p=i.ref;return _s(i,f),u=Nu(t,i,o,u,p,f),o=Uu(),t!==null&&!Pn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Pi(t,i,f)):(Ot&&o&&vu(i),i.flags|=1,Mn(t,i,u,f),i.child)}function Vh(t,i,o,u,f){if(t===null){var p=o.type;return typeof p=="function"&&!fc(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Gh(t,i,p,u,f)):(t=Xa(o.type,null,u,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&f)===0){var E=p.memoizedProps;if(o=o.compare,o=o!==null?o:so,o(E,u)&&t.ref===i.ref)return Pi(t,i,f)}return i.flags|=1,t=hr(p,u),t.ref=i.ref,t.return=i,i.child=t}function Gh(t,i,o,u,f){if(t!==null){var p=t.memoizedProps;if(so(p,u)&&t.ref===i.ref)if(Pn=!1,i.pendingProps=u=p,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Pn=!0);else return i.lanes=t.lanes,Pi(t,i,f)}return Wu(t,i,o,u,f)}function Wh(t,i,o){var u=i.pendingProps,f=u.children,p=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(Es,Hn),Hn|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Dt(Es,Hn),Hn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:o,Dt(Es,Hn),Hn|=u}else p!==null?(u=p.baseLanes|o,i.memoizedState=null):u=o,Dt(Es,Hn),Hn|=u;return Mn(t,i,f,o),i.child}function Xh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Wu(t,i,o,u,f){var p=bn(o)?Pr:pn.current;return p=ds(i,p),_s(i,f),o=Nu(t,i,o,u,p,f),u=Uu(),t!==null&&!Pn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Pi(t,i,f)):(Ot&&u&&vu(i),i.flags|=1,Mn(t,i,o,f),i.child)}function jh(t,i,o,u,f){if(bn(o)){var p=!0;ga(i)}else p=!1;if(_s(i,f),i.stateNode===null)Na(t,i),Nh(i,o,u),Hu(i,o,u,f),u=!0;else if(t===null){var E=i.stateNode,D=i.memoizedProps;E.props=D;var O=E.context,te=o.contextType;typeof te=="object"&&te!==null?te=Yn(te):(te=bn(o)?Pr:pn.current,te=ds(i,te));var xe=o.getDerivedStateFromProps,Ee=typeof xe=="function"||typeof E.getSnapshotBeforeUpdate=="function";Ee||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==u||O!==te)&&Uh(i,E,u,te),or=!1;var ve=i.memoizedState;E.state=ve,wa(i,u,E,f),O=i.memoizedState,D!==u||ve!==O||Rn.current||or?(typeof xe=="function"&&(zu(i,o,xe,u),O=i.memoizedState),(D=or||Ih(i,o,D,u,ve,O,te))?(Ee||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=O),E.props=u,E.state=O,E.context=te,u=D):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{E=i.stateNode,lh(t,i),D=i.memoizedProps,te=i.type===i.elementType?D:ni(i.type,D),E.props=te,Ee=i.pendingProps,ve=E.context,O=o.contextType,typeof O=="object"&&O!==null?O=Yn(O):(O=bn(o)?Pr:pn.current,O=ds(i,O));var Ne=o.getDerivedStateFromProps;(xe=typeof Ne=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==Ee||ve!==O)&&Uh(i,E,u,O),or=!1,ve=i.memoizedState,E.state=ve,wa(i,u,E,f);var ze=i.memoizedState;D!==Ee||ve!==ze||Rn.current||or?(typeof Ne=="function"&&(zu(i,o,Ne,u),ze=i.memoizedState),(te=or||Ih(i,o,te,u,ve,ze,O)||!1)?(xe||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,ze,O),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,ze,O)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||D===t.memoizedProps&&ve===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ve===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=ze),E.props=u,E.state=ze,E.context=O,u=te):(typeof E.componentDidUpdate!="function"||D===t.memoizedProps&&ve===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ve===t.memoizedState||(i.flags|=1024),u=!1)}return Xu(t,i,o,u,p,f)}function Xu(t,i,o,u,f,p){Xh(t,i);var E=(i.flags&128)!==0;if(!u&&!E)return f&&Zd(i,o,!1),Pi(t,i,p);u=i.stateNode,Wv.current=i;var D=E&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&E?(i.child=gs(i,t.child,null,p),i.child=gs(i,null,D,p)):Mn(t,i,D,p),i.memoizedState=u.state,f&&Zd(i,o,!0),i.child}function Yh(t){var i=t.stateNode;i.pendingContext?$d(t,i.pendingContext,i.pendingContext!==i.context):i.context&&$d(t,i.context,!1),Ru(t,i.containerInfo)}function qh(t,i,o,u,f){return ms(),Su(f),i.flags|=256,Mn(t,i,o,u),i.child}var ju={dehydrated:null,treeContext:null,retryLane:0};function Yu(t){return{baseLanes:t,cachePool:null,transitions:null}}function $h(t,i,o){var u=i.pendingProps,f=kt.current,p=!1,E=(i.flags&128)!==0,D;if((D=E)||(D=t!==null&&t.memoizedState===null?!1:(f&2)!==0),D?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Dt(kt,f&1),t===null)return yu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=u.children,t=u.fallback,p?(u=i.mode,p=i.child,E={mode:"hidden",children:E},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=E):p=ja(E,u,0,null),t=zr(t,u,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Yu(o),i.memoizedState=ju,t):qu(i,E));if(f=t.memoizedState,f!==null&&(D=f.dehydrated,D!==null))return Xv(t,i,E,u,D,f,o);if(p){p=u.fallback,E=i.mode,f=t.child,D=f.sibling;var O={mode:"hidden",children:u.children};return(E&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=O,i.deletions=null):(u=hr(f,O),u.subtreeFlags=f.subtreeFlags&14680064),D!==null?p=hr(D,p):(p=zr(p,E,o,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,E=t.child.memoizedState,E=E===null?Yu(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},p.memoizedState=E,p.childLanes=t.childLanes&~o,i.memoizedState=ju,u}return p=t.child,t=p.sibling,u=hr(p,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=u,i.memoizedState=null,u}function qu(t,i){return i=ja({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ia(t,i,o,u){return u!==null&&Su(u),gs(i,t.child,null,o),t=qu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Xv(t,i,o,u,f,p,E){if(o)return i.flags&256?(i.flags&=-257,u=Vu(Error(n(422))),Ia(t,i,E,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=u.fallback,f=i.mode,u=ja({mode:"visible",children:u.children},f,0,null),p=zr(p,f,E,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,(i.mode&1)!==0&&gs(i,t.child,null,E),i.child.memoizedState=Yu(E),i.memoizedState=ju,p);if((i.mode&1)===0)return Ia(t,i,E,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var D=u.dgst;return u=D,p=Error(n(419)),u=Vu(p,u,void 0),Ia(t,i,E,u)}if(D=(E&t.childLanes)!==0,Pn||D){if(u=on,u!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|E))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,Ri(t,f),si(u,t,f,-1))}return cc(),u=Vu(Error(n(421))),Ia(t,i,E,u)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=r_.bind(null,t),f._reactRetry=i,null):(t=p.treeContext,zn=nr(f.nextSibling),Bn=i,Ot=!0,ti=null,t!==null&&(Xn[jn++]=Ai,Xn[jn++]=Ci,Xn[jn++]=Lr,Ai=t.id,Ci=t.overflow,Lr=i),i=qu(i,u.children),i.flags|=4096,i)}function Kh(t,i,o){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),wu(t.return,i,o)}function $u(t,i,o,u,f){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=f)}function Zh(t,i,o){var u=i.pendingProps,f=u.revealOrder,p=u.tail;if(Mn(t,i,u.children,o),u=kt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kh(t,o,i);else if(t.tag===19)Kh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(Dt(kt,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&Aa(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),$u(i,!1,f,o,p);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Aa(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}$u(i,!0,o,null,p);break;case"together":$u(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Na(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Pi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Fr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=hr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=hr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function jv(t,i,o){switch(i.tag){case 3:Yh(i),ms();break;case 5:fh(i);break;case 1:bn(i.type)&&ga(i);break;case 4:Ru(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;Dt(Ea,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Dt(kt,kt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?$h(t,i,o):(Dt(kt,kt.current&1),t=Pi(t,i,o),t!==null?t.sibling:null);Dt(kt,kt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(t.flags&128)!==0){if(u)return Zh(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Dt(kt,kt.current),u)break;return null;case 22:case 23:return i.lanes=0,Wh(t,i,o)}return Pi(t,i,o)}var Qh,Ku,Jh,ep;Qh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ku=function(){},Jh=function(t,i,o,u){var f=t.memoizedProps;if(f!==u){t=i.stateNode,Nr(mi.current);var p=null;switch(o){case"input":f=k(t,f),u=k(t,u),p=[];break;case"select":f=F({},f,{value:void 0}),u=F({},u,{value:void 0}),p=[];break;case"textarea":f=M(t,f),u=M(t,u),p=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=ha)}dt(o,u);var E;o=null;for(te in f)if(!u.hasOwnProperty(te)&&f.hasOwnProperty(te)&&f[te]!=null)if(te==="style"){var D=f[te];for(E in D)D.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?p||(p=[]):(p=p||[]).push(te,null));for(te in u){var O=u[te];if(D=f!=null?f[te]:void 0,u.hasOwnProperty(te)&&O!==D&&(O!=null||D!=null))if(te==="style")if(D){for(E in D)!D.hasOwnProperty(E)||O&&O.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in O)O.hasOwnProperty(E)&&D[E]!==O[E]&&(o||(o={}),o[E]=O[E])}else o||(p||(p=[]),p.push(te,o)),o=O;else te==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,D=D?D.__html:void 0,O!=null&&D!==O&&(p=p||[]).push(te,O)):te==="children"?typeof O!="string"&&typeof O!="number"||(p=p||[]).push(te,""+O):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(O!=null&&te==="onScroll"&&Nt("scroll",t),p||D===O||(p=[])):(p=p||[]).push(te,O))}o&&(p=p||[]).push("style",o);var te=p;(i.updateQueue=te)&&(i.flags|=4)}},ep=function(t,i,o,u){o!==u&&(i.flags|=4)};function So(t,i){if(!Ot)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function gn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=u,t.childLanes=o,i}function Yv(t,i,o){var u=i.pendingProps;switch(_u(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return bn(i.type)&&ma(),gn(i),null;case 3:return u=i.stateNode,xs(),Ut(Rn),Ut(pn),Lu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(ya(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ti!==null&&(ac(ti),ti=null))),Ku(t,i),gn(i),null;case 5:bu(i);var f=Nr(go.current);if(o=i.type,t!==null&&i.stateNode!=null)Jh(t,i,o,u,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return gn(i),null}if(t=Nr(mi.current),ya(i)){u=i.stateNode,o=i.type;var p=i.memoizedProps;switch(u[pi]=i,u[co]=p,t=(i.mode&1)!==0,o){case"dialog":Nt("cancel",u),Nt("close",u);break;case"iframe":case"object":case"embed":Nt("load",u);break;case"video":case"audio":for(f=0;f<ao.length;f++)Nt(ao[f],u);break;case"source":Nt("error",u);break;case"img":case"image":case"link":Nt("error",u),Nt("load",u);break;case"details":Nt("toggle",u);break;case"input":yn(u,p),Nt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Nt("invalid",u);break;case"textarea":J(u,p),Nt("invalid",u)}dt(o,p),f=null;for(var E in p)if(p.hasOwnProperty(E)){var D=p[E];E==="children"?typeof D=="string"?u.textContent!==D&&(p.suppressHydrationWarning!==!0&&da(u.textContent,D,t),f=["children",D]):typeof D=="number"&&u.textContent!==""+D&&(p.suppressHydrationWarning!==!0&&da(u.textContent,D,t),f=["children",""+D]):a.hasOwnProperty(E)&&D!=null&&E==="onScroll"&&Nt("scroll",u)}switch(o){case"input":tt(u),Ye(u,p,!0);break;case"textarea":tt(u),ye(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=ha)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=he(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=E.createElement(o,{is:u.is}):(t=E.createElement(o),o==="select"&&(E=t,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):t=E.createElementNS(t,o),t[pi]=i,t[co]=u,Qh(t,i,!1,!1),i.stateNode=t;e:{switch(E=st(o,u),o){case"dialog":Nt("cancel",t),Nt("close",t),f=u;break;case"iframe":case"object":case"embed":Nt("load",t),f=u;break;case"video":case"audio":for(f=0;f<ao.length;f++)Nt(ao[f],t);f=u;break;case"source":Nt("error",t),f=u;break;case"img":case"image":case"link":Nt("error",t),Nt("load",t),f=u;break;case"details":Nt("toggle",t),f=u;break;case"input":yn(t,u),f=k(t,u),Nt("invalid",t);break;case"option":f=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},f=F({},u,{value:void 0}),Nt("invalid",t);break;case"textarea":J(t,u),f=M(t,u),Nt("invalid",t);break;default:f=u}dt(o,f),D=f;for(p in D)if(D.hasOwnProperty(p)){var O=D[p];p==="style"?nt(t,O):p==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Ke(t,O)):p==="children"?typeof O=="string"?(o!=="textarea"||O!=="")&&$e(t,O):typeof O=="number"&&$e(t,""+O):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?O!=null&&p==="onScroll"&&Nt("scroll",t):O!=null&&I(t,p,O,E))}switch(o){case"input":tt(t),Ye(t,u,!1);break;case"textarea":tt(t),ye(t);break;case"option":u.value!=null&&t.setAttribute("value",""+we(u.value));break;case"select":t.multiple=!!u.multiple,p=u.value,p!=null?L(t,!!u.multiple,p,!1):u.defaultValue!=null&&L(t,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=ha)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(t&&i.stateNode!=null)ep(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(o=Nr(go.current),Nr(mi.current),ya(i)){if(u=i.stateNode,o=i.memoizedProps,u[pi]=i,(p=u.nodeValue!==o)&&(t=Bn,t!==null))switch(t.tag){case 3:da(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&da(u.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[pi]=i,i.stateNode=u}return gn(i),null;case 13:if(Ut(kt),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ot&&zn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)ih(),ms(),i.flags|=98560,p=!1;else if(p=ya(i),u!==null&&u.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[pi]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;gn(i),p=!1}else ti!==null&&(ac(ti),ti=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(kt.current&1)!==0?Jt===0&&(Jt=3):cc())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return xs(),Ku(t,i),t===null&&lo(i.stateNode.containerInfo),gn(i),null;case 10:return Tu(i.type._context),gn(i),null;case 17:return bn(i.type)&&ma(),gn(i),null;case 19:if(Ut(kt),p=i.memoizedState,p===null)return gn(i),null;if(u=(i.flags&128)!==0,E=p.rendering,E===null)if(u)So(p,!1);else{if(Jt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Aa(t),E!==null){for(i.flags|=128,So(p,!1),u=E.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)p=o,t=u,p.flags&=14680066,E=p.alternate,E===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=E.childLanes,p.lanes=E.lanes,p.child=E.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=E.memoizedProps,p.memoizedState=E.memoizedState,p.updateQueue=E.updateQueue,p.type=E.type,t=E.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Dt(kt,kt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Z()>Ms&&(i.flags|=128,u=!0,So(p,!1),i.lanes=4194304)}else{if(!u)if(t=Aa(E),t!==null){if(i.flags|=128,u=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),So(p,!0),p.tail===null&&p.tailMode==="hidden"&&!E.alternate&&!Ot)return gn(i),null}else 2*Z()-p.renderingStartTime>Ms&&o!==1073741824&&(i.flags|=128,u=!0,So(p,!1),i.lanes=4194304);p.isBackwards?(E.sibling=i.child,i.child=E):(o=p.last,o!==null?o.sibling=E:i.child=E,p.last=E)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Z(),i.sibling=null,o=kt.current,Dt(kt,u?o&1|2:o&1),i):(gn(i),null);case 22:case 23:return uc(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Hn&1073741824)!==0&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function qv(t,i){switch(_u(i),i.tag){case 1:return bn(i.type)&&ma(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return xs(),Ut(Rn),Ut(pn),Lu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return bu(i),null;case 13:if(Ut(kt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ms()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ut(kt),null;case 4:return xs(),null;case 10:return Tu(i.type._context),null;case 22:case 23:return uc(),null;case 24:return null;default:return null}}var Ua=!1,vn=!1,$v=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function Ss(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Gt(t,i,u)}else o.current=null}function Zu(t,i,o){try{o()}catch(u){Gt(t,i,u)}}var tp=!1;function Kv(t,i){if(uu=ta,t=Id(),tu(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var E=0,D=-1,O=-1,te=0,xe=0,Ee=t,ve=null;t:for(;;){for(var Ne;Ee!==o||f!==0&&Ee.nodeType!==3||(D=E+f),Ee!==p||u!==0&&Ee.nodeType!==3||(O=E+u),Ee.nodeType===3&&(E+=Ee.nodeValue.length),(Ne=Ee.firstChild)!==null;)ve=Ee,Ee=Ne;for(;;){if(Ee===t)break t;if(ve===o&&++te===f&&(D=E),ve===p&&++xe===u&&(O=E),(Ne=Ee.nextSibling)!==null)break;Ee=ve,ve=Ee.parentNode}Ee=Ne}o=D===-1||O===-1?null:{start:D,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(cu={focusedElem:t,selectionRange:o},ta=!1,Fe=i;Fe!==null;)if(i=Fe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Fe=t;else for(;Fe!==null;){i=Fe;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ge=ze.memoizedProps,Wt=ze.memoizedState,K=i.stateNode,V=K.getSnapshotBeforeUpdate(i.elementType===i.type?Ge:ni(i.type,Ge),Wt);K.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var Q=i.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ae){Gt(i,i.return,Ae)}if(t=i.sibling,t!==null){t.return=i.return,Fe=t;break}Fe=i.return}return ze=tp,tp=!1,ze}function Eo(t,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&t)===t){var p=f.destroy;f.destroy=void 0,p!==void 0&&Zu(i,o,p)}f=f.next}while(f!==u)}}function Fa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Qu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function np(t){var i=t.alternate;i!==null&&(t.alternate=null,np(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[pi],delete i[co],delete i[pu],delete i[Dv],delete i[Iv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ip(t){return t.tag===5||t.tag===3||t.tag===4}function rp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ip(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ju(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ha));else if(u!==4&&(t=t.child,t!==null))for(Ju(t,i,o),t=t.sibling;t!==null;)Ju(t,i,o),t=t.sibling}function ec(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(ec(t,i,o),t=t.sibling;t!==null;)ec(t,i,o),t=t.sibling}var cn=null,ii=!1;function lr(t,i,o){for(o=o.child;o!==null;)sp(t,i,o),o=o.sibling}function sp(t,i,o){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(Je,o)}catch{}switch(o.tag){case 5:vn||Ss(o,i);case 6:var u=cn,f=ii;cn=null,lr(t,i,o),cn=u,ii=f,cn!==null&&(ii?(t=cn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):cn.removeChild(o.stateNode));break;case 18:cn!==null&&(ii?(t=cn,o=o.stateNode,t.nodeType===8?hu(t.parentNode,o):t.nodeType===1&&hu(t,o),Js(t)):hu(cn,o.stateNode));break;case 4:u=cn,f=ii,cn=o.stateNode.containerInfo,ii=!0,lr(t,i,o),cn=u,ii=f;break;case 0:case 11:case 14:case 15:if(!vn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var p=f,E=p.destroy;p=p.tag,E!==void 0&&((p&2)!==0||(p&4)!==0)&&Zu(o,i,E),f=f.next}while(f!==u)}lr(t,i,o);break;case 1:if(!vn&&(Ss(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(D){Gt(o,i,D)}lr(t,i,o);break;case 21:lr(t,i,o);break;case 22:o.mode&1?(vn=(u=vn)||o.memoizedState!==null,lr(t,i,o),vn=u):lr(t,i,o);break;default:lr(t,i,o)}}function op(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new $v),i.forEach(function(u){var f=s_.bind(null,t,u);o.has(u)||(o.add(u),u.then(f,f))})}}function ri(t,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u];try{var p=t,E=i,D=E;e:for(;D!==null;){switch(D.tag){case 5:cn=D.stateNode,ii=!1;break e;case 3:cn=D.stateNode.containerInfo,ii=!0;break e;case 4:cn=D.stateNode.containerInfo,ii=!0;break e}D=D.return}if(cn===null)throw Error(n(160));sp(p,E,f),cn=null,ii=!1;var O=f.alternate;O!==null&&(O.return=null),f.return=null}catch(te){Gt(f,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ap(i,t),i=i.sibling}function ap(t,i){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ri(i,t),vi(t),u&4){try{Eo(3,t,t.return),Fa(3,t)}catch(Ge){Gt(t,t.return,Ge)}try{Eo(5,t,t.return)}catch(Ge){Gt(t,t.return,Ge)}}break;case 1:ri(i,t),vi(t),u&512&&o!==null&&Ss(o,o.return);break;case 5:if(ri(i,t),vi(t),u&512&&o!==null&&Ss(o,o.return),t.flags&32){var f=t.stateNode;try{$e(f,"")}catch(Ge){Gt(t,t.return,Ge)}}if(u&4&&(f=t.stateNode,f!=null)){var p=t.memoizedProps,E=o!==null?o.memoizedProps:p,D=t.type,O=t.updateQueue;if(t.updateQueue=null,O!==null)try{D==="input"&&p.type==="radio"&&p.name!=null&&pt(f,p),st(D,E);var te=st(D,p);for(E=0;E<O.length;E+=2){var xe=O[E],Ee=O[E+1];xe==="style"?nt(f,Ee):xe==="dangerouslySetInnerHTML"?Ke(f,Ee):xe==="children"?$e(f,Ee):I(f,xe,Ee,te)}switch(D){case"input":ft(f,p);break;case"textarea":pe(f,p);break;case"select":var ve=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var Ne=p.value;Ne!=null?L(f,!!p.multiple,Ne,!1):ve!==!!p.multiple&&(p.defaultValue!=null?L(f,!!p.multiple,p.defaultValue,!0):L(f,!!p.multiple,p.multiple?[]:"",!1))}f[co]=p}catch(Ge){Gt(t,t.return,Ge)}}break;case 6:if(ri(i,t),vi(t),u&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,p=t.memoizedProps;try{f.nodeValue=p}catch(Ge){Gt(t,t.return,Ge)}}break;case 3:if(ri(i,t),vi(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Js(i.containerInfo)}catch(Ge){Gt(t,t.return,Ge)}break;case 4:ri(i,t),vi(t);break;case 13:ri(i,t),vi(t),f=t.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(ic=Z())),u&4&&op(t);break;case 22:if(xe=o!==null&&o.memoizedState!==null,t.mode&1?(vn=(te=vn)||xe,ri(i,t),vn=te):ri(i,t),vi(t),u&8192){if(te=t.memoizedState!==null,(t.stateNode.isHidden=te)&&!xe&&(t.mode&1)!==0)for(Fe=t,xe=t.child;xe!==null;){for(Ee=Fe=xe;Fe!==null;){switch(ve=Fe,Ne=ve.child,ve.tag){case 0:case 11:case 14:case 15:Eo(4,ve,ve.return);break;case 1:Ss(ve,ve.return);var ze=ve.stateNode;if(typeof ze.componentWillUnmount=="function"){u=ve,o=ve.return;try{i=u,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(Ge){Gt(u,o,Ge)}}break;case 5:Ss(ve,ve.return);break;case 22:if(ve.memoizedState!==null){cp(Ee);continue}}Ne!==null?(Ne.return=ve,Fe=Ne):cp(Ee)}xe=xe.sibling}e:for(xe=null,Ee=t;;){if(Ee.tag===5){if(xe===null){xe=Ee;try{f=Ee.stateNode,te?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(D=Ee.stateNode,O=Ee.memoizedProps.style,E=O!=null&&O.hasOwnProperty("display")?O.display:null,D.style.display=et("display",E))}catch(Ge){Gt(t,t.return,Ge)}}}else if(Ee.tag===6){if(xe===null)try{Ee.stateNode.nodeValue=te?"":Ee.memoizedProps}catch(Ge){Gt(t,t.return,Ge)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===t)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===t)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===t)break e;xe===Ee&&(xe=null),Ee=Ee.return}xe===Ee&&(xe=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:ri(i,t),vi(t),u&4&&op(t);break;case 21:break;default:ri(i,t),vi(t)}}function vi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(ip(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&($e(f,""),u.flags&=-33);var p=rp(t);ec(t,p,f);break;case 3:case 4:var E=u.stateNode.containerInfo,D=rp(t);Ju(t,D,E);break;default:throw Error(n(161))}}catch(O){Gt(t,t.return,O)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Zv(t,i,o){Fe=t,lp(t)}function lp(t,i,o){for(var u=(t.mode&1)!==0;Fe!==null;){var f=Fe,p=f.child;if(f.tag===22&&u){var E=f.memoizedState!==null||Ua;if(!E){var D=f.alternate,O=D!==null&&D.memoizedState!==null||vn;D=Ua;var te=vn;if(Ua=E,(vn=O)&&!te)for(Fe=f;Fe!==null;)E=Fe,O=E.child,E.tag===22&&E.memoizedState!==null?fp(f):O!==null?(O.return=E,Fe=O):fp(f);for(;p!==null;)Fe=p,lp(p),p=p.sibling;Fe=f,Ua=D,vn=te}up(t)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,Fe=p):up(t)}}function up(t){for(;Fe!==null;){var i=Fe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:vn||Fa(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!vn)if(o===null)u.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:ni(i.type,o.memoizedProps);u.componentDidUpdate(f,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&ch(i,p,u);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}ch(i,E,o)}break;case 5:var D=i.stateNode;if(o===null&&i.flags&4){o=D;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&o.focus();break;case"img":O.src&&(o.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var xe=te.memoizedState;if(xe!==null){var Ee=xe.dehydrated;Ee!==null&&Js(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}vn||i.flags&512&&Qu(i)}catch(ve){Gt(i,i.return,ve)}}if(i===t){Fe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function cp(t){for(;Fe!==null;){var i=Fe;if(i===t){Fe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function fp(t){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Fa(4,i)}catch(O){Gt(i,o,O)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(O){Gt(i,f,O)}}var p=i.return;try{Qu(i)}catch(O){Gt(i,p,O)}break;case 5:var E=i.return;try{Qu(i)}catch(O){Gt(i,E,O)}}}catch(O){Gt(i,i.return,O)}if(i===t){Fe=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Fe=D;break}Fe=i.return}}var Qv=Math.ceil,Oa=b.ReactCurrentDispatcher,tc=b.ReactCurrentOwner,$n=b.ReactCurrentBatchConfig,St=0,on=null,Yt=null,fn=0,Hn=0,Es=ir(0),Jt=0,Mo=null,Fr=0,ka=0,nc=0,To=null,Ln=null,ic=0,Ms=1/0,Li=null,Ba=!1,rc=null,ur=null,za=!1,cr=null,Ha=0,wo=0,sc=null,Va=-1,Ga=0;function Tn(){return(St&6)!==0?Z():Va!==-1?Va:Va=Z()}function fr(t){return(t.mode&1)===0?1:(St&2)!==0&&fn!==0?fn&-fn:Uv.transition!==null?(Ga===0&&(Ga=Pt()),Ga):(t=yt,t!==0||(t=window.event,t=t===void 0?16:hd(t.type)),t)}function si(t,i,o,u){if(50<wo)throw wo=0,sc=null,Error(n(185));nn(t,o,u),((St&2)===0||t!==on)&&(t===on&&((St&2)===0&&(ka|=o),Jt===4&&dr(t,fn)),Dn(t,u),o===1&&St===0&&(i.mode&1)===0&&(Ms=Z()+500,va&&sr()))}function Dn(t,i){var o=t.callbackNode;En(t,i);var u=dn(t,t===on?fn:0);if(u===0)o!==null&&A(o),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(o!=null&&A(o),i===1)t.tag===0?Nv(hp.bind(null,t)):Qd(hp.bind(null,t)),Pv(function(){(St&6)===0&&sr()}),o=null;else{switch(hi(u)){case 1:o=Te;break;case 4:o=be;break;case 16:o=Ie;break;case 536870912:o=it;break;default:o=Ie}o=Sp(o,dp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function dp(t,i){if(Va=-1,Ga=0,(St&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Ts()&&t.callbackNode!==o)return null;var u=dn(t,t===on?fn:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||i)i=Wa(t,u);else{i=u;var f=St;St|=2;var p=mp();(on!==t||fn!==i)&&(Li=null,Ms=Z()+500,kr(t,i));do try{t_();break}catch(D){pp(t,D)}while(!0);Mu(),Oa.current=p,St=f,Yt!==null?i=0:(on=null,fn=0,i=Jt)}if(i!==0){if(i===2&&(f=Mi(t),f!==0&&(u=f,i=oc(t,f))),i===1)throw o=Mo,kr(t,0),dr(t,u),Dn(t,Z()),o;if(i===6)dr(t,u);else{if(f=t.current.alternate,(u&30)===0&&!Jv(f)&&(i=Wa(t,u),i===2&&(p=Mi(t),p!==0&&(u=p,i=oc(t,p))),i===1))throw o=Mo,kr(t,0),dr(t,u),Dn(t,Z()),o;switch(t.finishedWork=f,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:Br(t,Ln,Li);break;case 3:if(dr(t,u),(u&130023424)===u&&(i=ic+500-Z(),10<i)){if(dn(t,0)!==0)break;if(f=t.suspendedLanes,(f&u)!==u){Tn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=du(Br.bind(null,t,Ln,Li),i);break}Br(t,Ln,Li);break;case 4:if(dr(t,u),(u&4194240)===u)break;for(i=t.eventTimes,f=-1;0<u;){var E=31-lt(u);p=1<<E,E=i[E],E>f&&(f=E),u&=~p}if(u=f,u=Z()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Qv(u/1960))-u,10<u){t.timeoutHandle=du(Br.bind(null,t,Ln,Li),u);break}Br(t,Ln,Li);break;case 5:Br(t,Ln,Li);break;default:throw Error(n(329))}}}return Dn(t,Z()),t.callbackNode===o?dp.bind(null,t):null}function oc(t,i){var o=To;return t.current.memoizedState.isDehydrated&&(kr(t,i).flags|=256),t=Wa(t,i),t!==2&&(i=Ln,Ln=o,i!==null&&ac(i)),t}function ac(t){Ln===null?Ln=t:Ln.push.apply(Ln,t)}function Jv(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var f=o[u],p=f.getSnapshot;f=f.value;try{if(!ei(p(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function dr(t,i){for(i&=~nc,i&=~ka,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-lt(i),u=1<<o;t[o]=-1,i&=~u}}function hp(t){if((St&6)!==0)throw Error(n(327));Ts();var i=dn(t,0);if((i&1)===0)return Dn(t,Z()),null;var o=Wa(t,i);if(t.tag!==0&&o===2){var u=Mi(t);u!==0&&(i=u,o=oc(t,u))}if(o===1)throw o=Mo,kr(t,0),dr(t,i),Dn(t,Z()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Br(t,Ln,Li),Dn(t,Z()),null}function lc(t,i){var o=St;St|=1;try{return t(i)}finally{St=o,St===0&&(Ms=Z()+500,va&&sr())}}function Or(t){cr!==null&&cr.tag===0&&(St&6)===0&&Ts();var i=St;St|=1;var o=$n.transition,u=yt;try{if($n.transition=null,yt=1,t)return t()}finally{yt=u,$n.transition=o,St=i,(St&6)===0&&sr()}}function uc(){Hn=Es.current,Ut(Es)}function kr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,bv(o)),Yt!==null)for(o=Yt.return;o!==null;){var u=o;switch(_u(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&ma();break;case 3:xs(),Ut(Rn),Ut(pn),Lu();break;case 5:bu(u);break;case 4:xs();break;case 13:Ut(kt);break;case 19:Ut(kt);break;case 10:Tu(u.type._context);break;case 22:case 23:uc()}o=o.return}if(on=t,Yt=t=hr(t.current,null),fn=Hn=i,Jt=0,Mo=null,nc=ka=Fr=0,Ln=To=null,Ir!==null){for(i=0;i<Ir.length;i++)if(o=Ir[i],u=o.interleaved,u!==null){o.interleaved=null;var f=u.next,p=o.pending;if(p!==null){var E=p.next;p.next=f,u.next=E}o.pending=u}Ir=null}return t}function pp(t,i){do{var o=Yt;try{if(Mu(),Ca.current=La,Ra){for(var u=Bt.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}Ra=!1}if(Ur=0,sn=Qt=Bt=null,vo=!1,_o=0,tc.current=null,o===null||o.return===null){Jt=1,Mo=i,Yt=null;break}e:{var p=t,E=o.return,D=o,O=i;if(i=fn,D.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var te=O,xe=D,Ee=xe.tag;if((xe.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Ne=Bh(E);if(Ne!==null){Ne.flags&=-257,zh(Ne,E,D,p,i),Ne.mode&1&&kh(p,te,i),i=Ne,O=te;var ze=i.updateQueue;if(ze===null){var Ge=new Set;Ge.add(O),i.updateQueue=Ge}else ze.add(O);break e}else{if((i&1)===0){kh(p,te,i),cc();break e}O=Error(n(426))}}else if(Ot&&D.mode&1){var Wt=Bh(E);if(Wt!==null){(Wt.flags&65536)===0&&(Wt.flags|=256),zh(Wt,E,D,p,i),Su(ys(O,D));break e}}p=O=ys(O,D),Jt!==4&&(Jt=2),To===null?To=[p]:To.push(p),p=E;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var K=Fh(p,O,i);uh(p,K);break e;case 1:D=O;var V=p.type,Q=p.stateNode;if((p.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(ur===null||!ur.has(Q)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ae=Oh(p,D,i);uh(p,Ae);break e}}p=p.return}while(p!==null)}vp(o)}catch(je){i=je,Yt===o&&o!==null&&(Yt=o=o.return);continue}break}while(!0)}function mp(){var t=Oa.current;return Oa.current=La,t===null?La:t}function cc(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),on===null||(Fr&268435455)===0&&(ka&268435455)===0||dr(on,fn)}function Wa(t,i){var o=St;St|=2;var u=mp();(on!==t||fn!==i)&&(Li=null,kr(t,i));do try{e_();break}catch(f){pp(t,f)}while(!0);if(Mu(),St=o,Oa.current=u,Yt!==null)throw Error(n(261));return on=null,fn=0,Jt}function e_(){for(;Yt!==null;)gp(Yt)}function t_(){for(;Yt!==null&&!X();)gp(Yt)}function gp(t){var i=yp(t.alternate,t,Hn);t.memoizedProps=t.pendingProps,i===null?vp(t):Yt=i,tc.current=null}function vp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=Yv(o,i,Hn),o!==null){Yt=o;return}}else{if(o=qv(o,i),o!==null){o.flags&=32767,Yt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Jt=6,Yt=null;return}}if(i=i.sibling,i!==null){Yt=i;return}Yt=i=t}while(i!==null);Jt===0&&(Jt=5)}function Br(t,i,o){var u=yt,f=$n.transition;try{$n.transition=null,yt=1,n_(t,i,o,u)}finally{$n.transition=f,yt=u}return null}function n_(t,i,o,u){do Ts();while(cr!==null);if((St&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(un(t,p),t===on&&(Yt=on=null,fn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||za||(za=!0,Sp(Ie,function(){return Ts(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=$n.transition,$n.transition=null;var E=yt;yt=1;var D=St;St|=4,tc.current=null,Kv(t,o),ap(o,t),Ev(cu),ta=!!uu,cu=uu=null,t.current=o,Zv(o),ne(),St=D,yt=E,$n.transition=p}else t.current=o;if(za&&(za=!1,cr=t,Ha=f),p=t.pendingLanes,p===0&&(ur=null),gt(o.stateNode),Dn(t,Z()),i!==null)for(u=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],u(f.value,{componentStack:f.stack,digest:f.digest});if(Ba)throw Ba=!1,t=rc,rc=null,t;return(Ha&1)!==0&&t.tag!==0&&Ts(),p=t.pendingLanes,(p&1)!==0?t===sc?wo++:(wo=0,sc=t):wo=0,sr(),null}function Ts(){if(cr!==null){var t=hi(Ha),i=$n.transition,o=yt;try{if($n.transition=null,yt=16>t?16:t,cr===null)var u=!1;else{if(t=cr,cr=null,Ha=0,(St&6)!==0)throw Error(n(331));var f=St;for(St|=4,Fe=t.current;Fe!==null;){var p=Fe,E=p.child;if((Fe.flags&16)!==0){var D=p.deletions;if(D!==null){for(var O=0;O<D.length;O++){var te=D[O];for(Fe=te;Fe!==null;){var xe=Fe;switch(xe.tag){case 0:case 11:case 15:Eo(8,xe,p)}var Ee=xe.child;if(Ee!==null)Ee.return=xe,Fe=Ee;else for(;Fe!==null;){xe=Fe;var ve=xe.sibling,Ne=xe.return;if(np(xe),xe===te){Fe=null;break}if(ve!==null){ve.return=Ne,Fe=ve;break}Fe=Ne}}}var ze=p.alternate;if(ze!==null){var Ge=ze.child;if(Ge!==null){ze.child=null;do{var Wt=Ge.sibling;Ge.sibling=null,Ge=Wt}while(Ge!==null)}}Fe=p}}if((p.subtreeFlags&2064)!==0&&E!==null)E.return=p,Fe=E;else e:for(;Fe!==null;){if(p=Fe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Eo(9,p,p.return)}var K=p.sibling;if(K!==null){K.return=p.return,Fe=K;break e}Fe=p.return}}var V=t.current;for(Fe=V;Fe!==null;){E=Fe;var Q=E.child;if((E.subtreeFlags&2064)!==0&&Q!==null)Q.return=E,Fe=Q;else e:for(E=V;Fe!==null;){if(D=Fe,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Fa(9,D)}}catch(je){Gt(D,D.return,je)}if(D===E){Fe=null;break e}var Ae=D.sibling;if(Ae!==null){Ae.return=D.return,Fe=Ae;break e}Fe=D.return}}if(St=f,sr(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(Je,t)}catch{}u=!0}return u}finally{yt=o,$n.transition=i}}return!1}function _p(t,i,o){i=ys(o,i),i=Fh(t,i,1),t=ar(t,i,1),i=Tn(),t!==null&&(nn(t,1,i),Dn(t,i))}function Gt(t,i,o){if(t.tag===3)_p(t,t,o);else for(;i!==null;){if(i.tag===3){_p(i,t,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ur===null||!ur.has(u))){t=ys(o,t),t=Oh(i,t,1),i=ar(i,t,1),t=Tn(),i!==null&&(nn(i,1,t),Dn(i,t));break}}i=i.return}}function i_(t,i,o){var u=t.pingCache;u!==null&&u.delete(i),i=Tn(),t.pingedLanes|=t.suspendedLanes&o,on===t&&(fn&o)===o&&(Jt===4||Jt===3&&(fn&130023424)===fn&&500>Z()-ic?kr(t,0):nc|=o),Dn(t,i)}function xp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Vt,Vt<<=1,(Vt&130023424)===0&&(Vt=4194304)));var o=Tn();t=Ri(t,i),t!==null&&(nn(t,i,o),Dn(t,o))}function r_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),xp(t,o)}function s_(t,i){var o=0;switch(t.tag){case 13:var u=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),xp(t,o)}var yp;yp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Rn.current)Pn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Pn=!1,jv(t,i,o);Pn=(t.flags&131072)!==0}else Pn=!1,Ot&&(i.flags&1048576)!==0&&Jd(i,xa,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Na(t,i),t=i.pendingProps;var f=ds(i,pn.current);_s(i,o),f=Nu(null,i,u,t,f,o);var p=Uu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,bn(u)?(p=!0,ga(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Cu(i),f.updater=Da,i.stateNode=f,f._reactInternals=i,Hu(i,u,t,o),i=Xu(null,i,u,!0,p,o)):(i.tag=0,Ot&&p&&vu(i),Mn(null,i,f,o),i=i.child),i;case 16:u=i.elementType;e:{switch(Na(t,i),t=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=a_(u),t=ni(u,t),f){case 0:i=Wu(null,i,u,t,o);break e;case 1:i=jh(null,i,u,t,o);break e;case 11:i=Hh(null,i,u,t,o);break e;case 14:i=Vh(null,i,u,ni(u.type,t),o);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ni(u,f),Wu(t,i,u,f,o);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ni(u,f),jh(t,i,u,f,o);case 3:e:{if(Yh(i),t===null)throw Error(n(387));u=i.pendingProps,p=i.memoizedState,f=p.element,lh(t,i),wa(i,u,null,o);var E=i.memoizedState;if(u=E.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=ys(Error(n(423)),i),i=qh(t,i,u,o,f);break e}else if(u!==f){f=ys(Error(n(424)),i),i=qh(t,i,u,o,f);break e}else for(zn=nr(i.stateNode.containerInfo.firstChild),Bn=i,Ot=!0,ti=null,o=oh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ms(),u===f){i=Pi(t,i,o);break e}Mn(t,i,u,o)}i=i.child}return i;case 5:return fh(i),t===null&&yu(i),u=i.type,f=i.pendingProps,p=t!==null?t.memoizedProps:null,E=f.children,fu(u,f)?E=null:p!==null&&fu(u,p)&&(i.flags|=32),Xh(t,i),Mn(t,i,E,o),i.child;case 6:return t===null&&yu(i),null;case 13:return $h(t,i,o);case 4:return Ru(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=gs(i,null,u,o):Mn(t,i,u,o),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ni(u,f),Hh(t,i,u,f,o);case 7:return Mn(t,i,i.pendingProps,o),i.child;case 8:return Mn(t,i,i.pendingProps.children,o),i.child;case 12:return Mn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,p=i.memoizedProps,E=f.value,Dt(Ea,u._currentValue),u._currentValue=E,p!==null)if(ei(p.value,E)){if(p.children===f.children&&!Rn.current){i=Pi(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var D=p.dependencies;if(D!==null){E=p.child;for(var O=D.firstContext;O!==null;){if(O.context===u){if(p.tag===1){O=bi(-1,o&-o),O.tag=2;var te=p.updateQueue;if(te!==null){te=te.shared;var xe=te.pending;xe===null?O.next=O:(O.next=xe.next,xe.next=O),te.pending=O}}p.lanes|=o,O=p.alternate,O!==null&&(O.lanes|=o),wu(p.return,o,i),D.lanes|=o;break}O=O.next}}else if(p.tag===10)E=p.type===i.type?null:p.child;else if(p.tag===18){if(E=p.return,E===null)throw Error(n(341));E.lanes|=o,D=E.alternate,D!==null&&(D.lanes|=o),wu(E,o,i),E=p.sibling}else E=p.child;if(E!==null)E.return=p;else for(E=p;E!==null;){if(E===i){E=null;break}if(p=E.sibling,p!==null){p.return=E.return,E=p;break}E=E.return}p=E}Mn(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,_s(i,o),f=Yn(f),u=u(f),i.flags|=1,Mn(t,i,u,o),i.child;case 14:return u=i.type,f=ni(u,i.pendingProps),f=ni(u.type,f),Vh(t,i,u,f,o);case 15:return Gh(t,i,i.type,i.pendingProps,o);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ni(u,f),Na(t,i),i.tag=1,bn(u)?(t=!0,ga(i)):t=!1,_s(i,o),Nh(i,u,f),Hu(i,u,f,o),Xu(null,i,u,!0,t,o);case 19:return Zh(t,i,o);case 22:return Wh(t,i,o)}throw Error(n(156,i.tag))};function Sp(t,i){return Qo(t,i)}function o_(t,i,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,i,o,u){return new o_(t,i,o,u)}function fc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function a_(t){if(typeof t=="function")return fc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===re)return 11;if(t===ue)return 14}return 2}function hr(t,i){var o=t.alternate;return o===null?(o=Kn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Xa(t,i,o,u,f,p){var E=2;if(u=t,typeof t=="function")fc(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case U:return zr(o.children,f,p,i);case q:E=8,f|=8;break;case P:return t=Kn(12,o,i,f|2),t.elementType=P,t.lanes=p,t;case ee:return t=Kn(13,o,i,f),t.elementType=ee,t.lanes=p,t;case de:return t=Kn(19,o,i,f),t.elementType=de,t.lanes=p,t;case oe:return ja(o,f,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:E=10;break e;case z:E=9;break e;case re:E=11;break e;case ue:E=14;break e;case le:E=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Kn(E,o,i,f),i.elementType=t,i.type=u,i.lanes=p,i}function zr(t,i,o,u){return t=Kn(7,t,u,i),t.lanes=o,t}function ja(t,i,o,u){return t=Kn(22,t,u,i),t.elementType=oe,t.lanes=o,t.stateNode={isHidden:!1},t}function dc(t,i,o){return t=Kn(6,t,null,i),t.lanes=o,t}function hc(t,i,o){return i=Kn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function l_(t,i,o,u,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hn(0),this.expirationTimes=hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hn(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function pc(t,i,o,u,f,p,E,D,O){return t=new l_(t,i,o,D,O),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Kn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cu(p),t}function u_(t,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:u==null?null:""+u,children:t,containerInfo:i,implementation:o}}function Ep(t){if(!t)return rr;t=t._reactInternals;e:{if(di(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(bn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(bn(o))return Kd(t,o,i)}return i}function Mp(t,i,o,u,f,p,E,D,O){return t=pc(o,u,!0,t,f,p,E,D,O),t.context=Ep(null),o=t.current,u=Tn(),f=fr(o),p=bi(u,f),p.callback=i??null,ar(o,p,f),t.current.lanes=f,nn(t,f,u),Dn(t,u),t}function Ya(t,i,o,u){var f=i.current,p=Tn(),E=fr(f);return o=Ep(o),i.context===null?i.context=o:i.pendingContext=o,i=bi(p,E),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=ar(f,i,E),t!==null&&(si(t,f,E,p),Ta(t,f,E)),E}function qa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function mc(t,i){Tp(t,i),(t=t.alternate)&&Tp(t,i)}function c_(){return null}var wp=typeof reportError=="function"?reportError:function(t){console.error(t)};function gc(t){this._internalRoot=t}$a.prototype.render=gc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ya(t,i,null,null)},$a.prototype.unmount=gc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Or(function(){Ya(null,t,null,null)}),i[Ti]=null}};function $a(t){this._internalRoot=t}$a.prototype.unstable_scheduleHydration=function(t){if(t){var i=ld();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Ji.length&&i!==0&&i<Ji[o].priority;o++);Ji.splice(o,0,t),o===0&&fd(t)}};function vc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ka(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ap(){}function f_(t,i,o,u,f){if(f){if(typeof u=="function"){var p=u;u=function(){var te=qa(E);p.call(te)}}var E=Mp(i,u,t,0,null,!1,!1,"",Ap);return t._reactRootContainer=E,t[Ti]=E.current,lo(t.nodeType===8?t.parentNode:t),Or(),E}for(;f=t.lastChild;)t.removeChild(f);if(typeof u=="function"){var D=u;u=function(){var te=qa(O);D.call(te)}}var O=pc(t,0,!1,null,null,!1,!1,"",Ap);return t._reactRootContainer=O,t[Ti]=O.current,lo(t.nodeType===8?t.parentNode:t),Or(function(){Ya(i,O,o,u)}),O}function Za(t,i,o,u,f){var p=o._reactRootContainer;if(p){var E=p;if(typeof f=="function"){var D=f;f=function(){var O=qa(E);D.call(O)}}Ya(i,E,t,f)}else E=f_(o,i,t,f,u);return qa(E)}od=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=mt(i.pendingLanes);o!==0&&(rn(i,o|1),Dn(i,Z()),(St&6)===0&&(Ms=Z()+500,sr()))}break;case 13:Or(function(){var u=Ri(t,1);if(u!==null){var f=Tn();si(u,t,1,f)}}),mc(t,1)}},Vl=function(t){if(t.tag===13){var i=Ri(t,134217728);if(i!==null){var o=Tn();si(i,t,134217728,o)}mc(t,134217728)}},ad=function(t){if(t.tag===13){var i=fr(t),o=Ri(t,i);if(o!==null){var u=Tn();si(o,t,i,u)}mc(t,i)}},ld=function(){return yt},ud=function(t,i){var o=yt;try{return yt=t,i()}finally{yt=o}},Re=function(t,i,o){switch(i){case"input":if(ft(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==t&&u.form===t.form){var f=pa(u);if(!f)throw Error(n(90));wt(u),ft(u,f)}}}break;case"textarea":pe(t,o);break;case"select":i=o.value,i!=null&&L(t,!!o.multiple,i,!1)}},It=lc,Zt=Or;var d_={usingClientEntryPoint:!1,Events:[fo,cs,pa,Le,ot,lc]},Ao={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},h_={bundleType:Ao.bundleType,version:Ao.version,rendererPackageName:Ao.rendererPackageName,rendererConfig:Ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ko(t),t===null?null:t.stateNode},findFiberByHostInstance:Ao.findFiberByHostInstance||c_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qa.isDisabled&&Qa.supportsFiber)try{Je=Qa.inject(h_),Ve=Qa}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d_,In.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vc(i))throw Error(n(200));return u_(t,i,null,o)},In.createRoot=function(t,i){if(!vc(t))throw Error(n(299));var o=!1,u="",f=wp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=pc(t,1,!1,null,null,o,!1,u,f),t[Ti]=i.current,lo(t.nodeType===8?t.parentNode:t),new gc(i)},In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Ko(i),t=t===null?null:t.stateNode,t},In.flushSync=function(t){return Or(t)},In.hydrate=function(t,i,o){if(!Ka(i))throw Error(n(200));return Za(null,t,i,!0,o)},In.hydrateRoot=function(t,i,o){if(!vc(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,f=!1,p="",E=wp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=Mp(i,null,t,1,o??null,f,!1,p,E),t[Ti]=i.current,lo(t),u)for(t=0;t<u.length;t++)o=u[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new $a(i)},In.render=function(t,i,o){if(!Ka(i))throw Error(n(200));return Za(null,t,i,!1,o)},In.unmountComponentAtNode=function(t){if(!Ka(t))throw Error(n(40));return t._reactRootContainer?(Or(function(){Za(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1},In.unstable_batchedUpdates=lc,In.unstable_renderSubtreeIntoContainer=function(t,i,o,u){if(!Ka(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Za(t,i,o,!1,u)},In.version="18.3.1-next-f1338f8080-20240426",In}var Np;function S_(){if(Np)return yc.exports;Np=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),yc.exports=y_(),yc.exports}var Up;function E_(){if(Up)return Ja;Up=1;var s=S_();return Ja.createRoot=s.createRoot,Ja.hydrateRoot=s.hydrateRoot,Ja}var M_=E_();const T_=Yf(M_),w_=({title:s,children:e})=>(Un.useEffect(()=>{document.title=s},[s]),fe.jsx(fe.Fragment,{children:fe.jsx("main",{className:"flex flex-col gap-y-20 md:gap-y-32 overflow-hidden",children:e})})),qm=({href:s,text:e,className:n=""})=>fe.jsx("a",{href:s,className:`px-3 py-3 rounded-full outline-none relative 
        overflow-hidden border-3 border-box-border bg-link-bg-aux cursor-pointer
         ${n}`,children:fe.jsxs("span",{className:"relative z-10 font-bold text-heading-1",children:[" ",e]})}),A_=({links:s,className:e=""})=>fe.jsx("div",{className:"relative flex flex-col items-center",children:s.map((n,r)=>fe.jsx("div",{className:"",children:fe.jsx(qm,{href:n.url,className:`mb-4 flex w-56 items-center justify-center gap-3 rounded-lg \r
                 px-6 py-3 shadow-md transition-all duration-300 \r
                sm:w-64 md:w-72 ease-in-out hover:scale-105`,text:n.name,children:n.icon},r)}))}),$m=({children:s,className:e=""})=>fe.jsxs("p",{className:`text-heading-3 md:text-lg ${e}`,children:[" ",s," "]}),Fp=({title:s,description:e,children:n})=>fe.jsxs("div",{className:`p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg\r
                    shadow-box-shadow relative overflow-hidden`,children:[fe.jsx("div",{className:"rounded-xl bg-body p-3 text-heading-1 w-max relative",children:n}),fe.jsx("h2",{className:"text-heading-2 w-max relative font-semibold md:text-xl",children:s}),fe.jsx($m,{children:e})]}),Fl=({children:s,className:e=""})=>fe.jsx("div",{className:`mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5  ${e}`,children:s}),Km=({children:s})=>fe.jsxs("h1",{className:"text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl",children:[" ",s," "]}),C_=()=>fe.jsxs("section",{id:"about-me",children:[" ",fe.jsxs(Fl,{className:"flex flex-col md:flex-row gap-10 lg:gap-12 items-center",children:[fe.jsx("div",{className:"w-full md:w-5/12 lg:w-1/2",children:fe.jsx("div",{className:"w-full h-80 sm:h-96 relative",children:fe.jsx("img",{src:"/assets/images/working.JPG",className:"w-full h-full object-cover rounded-3xl shadow-lg relative z-10",alt:"me at computer"})})}),fe.jsxs("div",{className:"w-full md:w-7/12 lg:w-1/2 flex flex-col",children:[fe.jsx(Km,{children:" developer, drummer, dreamer "}),fe.jsx($m,{children:"I am a passionate developer with a love for technology and innovation. I believe in the power of AI to transform businesses and improve lives. My goal is to create solutions that are not only effective but also ethical and sustainable. I am committed to using my skills to help bring your projects to life."}),fe.jsxs("div",{className:"pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl",children:[fe.jsx(Fp,{title:"Current Project",description:"This website, and learning how to React to changes in the web dev ecosystem.",children:fe.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-4 h-4 sm:w-5 sm:h-5",children:fe.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"})})}),fe.jsx(Fp,{title:"Built to last",description:"Beyond products, and services, I aim to build robust organizations that bring people closer to their passions.",children:fe.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-4 h-4 sm:w-5 sm:h-5",children:fe.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"})})})]})]})]})]}),Zm="/assets/icon-B-XMf65N.svg",Qm=({href:s,text:e})=>fe.jsx("li",{children:fe.jsx("a",{href:s,className:"duration-300 font-medium ease-linear hover:text-primary py-3",children:e})}),Op=s=>{let e;const n=new Set,r=(m,g)=>{const v=typeof m=="function"?m(e):m;if(!Object.is(v,e)){const x=e;e=g??(typeof v!="object"||v===null)?v:Object.assign({},e,v),n.forEach(S=>S(e,x))}},a=()=>e,d={setState:r,getState:a,getInitialState:()=>h,subscribe:m=>(n.add(m),()=>n.delete(m))},h=e=s(r,a,d);return d},R_=s=>s?Op(s):Op,b_=s=>s;function P_(s,e=b_){const n=At.useSyncExternalStore(s.subscribe,()=>e(s.getState()),()=>e(s.getInitialState()));return At.useDebugValue(n),n}const L_=s=>{const e=R_(s),n=r=>P_(e,r);return Object.assign(n,e),n},D_=s=>L_;function I_(s,e){let n;try{n=s()}catch{return}return{getItem:a=>{var l;const c=h=>h===null?null:JSON.parse(h,void 0),d=(l=n.getItem(a))!=null?l:null;return d instanceof Promise?d.then(c):c(d)},setItem:(a,l)=>n.setItem(a,JSON.stringify(l,void 0)),removeItem:a=>n.removeItem(a)}}const rf=s=>e=>{try{const n=s(e);return n instanceof Promise?n:{then(r){return rf(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return rf(r)(n)}}}},N_=(s,e)=>(n,r,a)=>{let l={storage:I_(()=>localStorage),partialize:w=>w,version:0,merge:(w,y)=>({...y,...w}),...e},c=!1;const d=new Set,h=new Set;let m=l.storage;if(!m)return s((...w)=>{console.warn(`[zustand persist middleware] Unable to update item '${l.name}', the given storage is currently unavailable.`),n(...w)},r,a);const g=()=>{const w=l.partialize({...r()});return m.setItem(l.name,{state:w,version:l.version})},v=a.setState;a.setState=(w,y)=>{v(w,y),g()};const x=s((...w)=>{n(...w),g()},r,a);a.getInitialState=()=>x;let S;const T=()=>{var w,y;if(!m)return;c=!1,d.forEach(N=>{var I;return N((I=r())!=null?I:x)});const _=((y=l.onRehydrateStorage)==null?void 0:y.call(l,(w=r())!=null?w:x))||void 0;return rf(m.getItem.bind(m))(l.name).then(N=>{if(N)if(typeof N.version=="number"&&N.version!==l.version){if(l.migrate){const I=l.migrate(N.state,N.version);return I instanceof Promise?I.then(b=>[!0,b]):[!0,I]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,N.state];return[!1,void 0]}).then(N=>{var I;const[b,j]=N;if(S=l.merge(j,(I=r())!=null?I:x),n(S,!0),b)return g()}).then(()=>{_==null||_(S,void 0),S=r(),c=!0,h.forEach(N=>N(S))}).catch(N=>{_==null||_(void 0,N)})};return a.persist={setOptions:w=>{l={...l,...w},w.storage&&(m=w.storage)},clearStorage:()=>{m==null||m.removeItem(l.name)},getOptions:()=>l,rehydrate:()=>T(),hasHydrated:()=>c,onHydrate:w=>(d.add(w),()=>{d.delete(w)}),onFinishHydration:w=>(h.add(w),()=>{h.delete(w)})},l.skipHydration||T(),S||x},U_=N_,Jm=D_()(U_((s,e)=>({theme:typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",toggleTheme:()=>{const n=e().theme==="light"?"dark":"light";typeof document<"u"&&document.documentElement.classList.toggle("dark",n==="dark"),s({theme:n})}}),{name:"theme",onRehydrateStorage:()=>s=>{(s==null?void 0:s.theme)==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}})),eg=[{href:"#",text:"Home"},{href:"#services",text:"Services"},{href:"#about-me",text:"About"}],F_=()=>{const{toggleTheme:s,theme:e}=Jm();return fe.jsx("header",{className:"absolute inset-x-0 top-0 z-50 py-6",children:fe.jsx(Fl,{children:fe.jsxs("nav",{className:"w-full flex justify-between gap-6 relative",children:[fe.jsx("div",{className:"min-w-max inline-flex relative",children:fe.jsxs("a",{href:"/",className:"relative flex items-center gap-3",children:[fe.jsx("img",{src:Zm,alt:"tahaListens Logo",className:"w-10 h-10"}),fe.jsx("div",{className:"inline-flex text-lg font-semibold text-heading-1",children:"tahaListens"})]})}),fe.jsxs("div",{className:`flex flex-col lg:flex-row w-full lg:justify-between lg:items-center \r
                      absolute top-full left-0 lg:static lg:top-0 bg-transparent \r
                      border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden`,children:[fe.jsx("ul",{className:`border-t border-box-border lg:border-t-0 px-6 lg:px-0 \r
                           pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 \r
                           text-lg text-heading-1 w-full lg:justify-center lg:items-center`,children:eg.map((n,r)=>fe.jsx(Qm,{href:n.href,text:n.text},r))}),fe.jsx("div",{className:`lg:min-w-max flex items-center sm:w-max w-full pb-6 \r
                            lg:pb-0 border-b border-box-border lg:border-0\r
                            px-6 lg:px-0`,children:fe.jsx(qm,{text:"Contact",href:"#contact",className:""})})]}),fe.jsx("div",{className:"min-w-max flex items-center gap-x-3",children:fe.jsx("button",{onClick:s,className:"outline-hidden flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border cursor-pointer",children:e==="dark"?fe.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:fe.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})}):fe.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:fe.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})})})})]})})})},O_=()=>fe.jsx("footer",{className:"relative  pt-28 rounded-t-3xl bg-transparent",children:fe.jsx(Fl,{className:" pt-3 pb-8",children:fe.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[fe.jsxs("div",{className:"flex items-center gap-3 mb-4 md:mb-0",children:[fe.jsx("img",{src:Zm,className:"w-7 h-7",alt:"tahaListens Logo"}),fe.jsx("span",{className:"text-lg font-semibold text-heading-1",children:"TahaListens"})]}),fe.jsx("ul",{className:"flex gap-6 text-heading-1",children:eg.map((s,e)=>fe.jsx(Qm,{href:s.href,text:s.text},e))})]})})});function k_(){return fe.jsx("div",{className:" flex justify-center",children:fe.jsx("img",{src:"/assets/images/headshot.jpg",alt:"My Headshot",className:"w-50 h-auto rounded-full border-4  border-box-border shadow-lg"})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $f="176",B_=0,kp=1,z_=2,tg=1,H_=2,Oi=3,wr=0,Fn=1,ki=2,Er=0,zs=1,Bp=2,zp=3,Hp=4,V_=5,$r=100,G_=101,W_=102,X_=103,j_=104,Y_=200,q_=201,$_=202,K_=203,sf=204,of=205,Z_=206,Q_=207,J_=208,e0=209,t0=210,n0=211,i0=212,r0=213,s0=214,af=0,lf=1,uf=2,Vs=3,cf=4,ff=5,df=6,hf=7,ng=0,o0=1,a0=2,Mr=0,l0=1,u0=2,c0=3,f0=4,d0=5,h0=6,p0=7,ig=300,Gs=301,Ws=302,pf=303,mf=304,Ol=306,gf=1e3,Zr=1001,vf=1002,fi=1003,m0=1004,el=1005,xi=1006,Mc=1007,Qr=1008,Gi=1009,rg=1010,sg=1011,Uo=1012,Kf=1013,Jr=1014,Bi=1015,zo=1016,Zf=1017,Qf=1018,Fo=1020,og=35902,ag=1021,lg=1022,ci=1023,Oo=1026,ko=1027,ug=1028,Jf=1029,cg=1030,ed=1031,td=1033,Ml=33776,Tl=33777,wl=33778,Al=33779,_f=35840,xf=35841,yf=35842,Sf=35843,Ef=36196,Mf=37492,Tf=37496,wf=37808,Af=37809,Cf=37810,Rf=37811,bf=37812,Pf=37813,Lf=37814,Df=37815,If=37816,Nf=37817,Uf=37818,Ff=37819,Of=37820,kf=37821,Cl=36492,Bf=36494,zf=36495,fg=36283,Hf=36284,Vf=36285,Gf=36286,g0=3200,v0=3201,_0=0,x0=1,Sr="",Qn="srgb",Xs="srgb-linear",Ll="linear",bt="srgb",ws=7680,Vp=519,y0=512,S0=513,E0=514,dg=515,M0=516,T0=517,w0=518,A0=519,Gp=35044,Wp="300 es",zi=2e3,Dl=2001;class Ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tc=Math.PI/180,Wf=180/Math.PI;function Ho(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(_n[s&255]+_n[s>>8&255]+_n[s>>16&255]+_n[s>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[n&63|128]+_n[n>>8&255]+"-"+_n[n>>16&255]+_n[n>>24&255]+_n[r&255]+_n[r>>8&255]+_n[r>>16&255]+_n[r>>24&255]).toLowerCase()}function vt(s,e,n){return Math.max(e,Math.min(n,s))}function C0(s,e){return(s%e+e)%e}function wc(s,e,n){return(1-n)*s+n*e}function Ro(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Nn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Lt{constructor(e=0,n=0){Lt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,n,r,a,l,c,d,h,m){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,c,d,h,m)}set(e,n,r,a,l,c,d,h,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=d,g[3]=n,g[4]=l,g[5]=h,g[6]=r,g[7]=c,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,c=r[0],d=r[3],h=r[6],m=r[1],g=r[4],v=r[7],x=r[2],S=r[5],T=r[8],w=a[0],y=a[3],_=a[6],N=a[1],I=a[4],b=a[7],j=a[2],H=a[5],U=a[8];return l[0]=c*w+d*N+h*j,l[3]=c*y+d*I+h*H,l[6]=c*_+d*b+h*U,l[1]=m*w+g*N+v*j,l[4]=m*y+g*I+v*H,l[7]=m*_+g*b+v*U,l[2]=x*w+S*N+T*j,l[5]=x*y+S*I+T*H,l[8]=x*_+S*b+T*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],g=e[8];return n*c*g-n*d*m-r*l*g+r*d*h+a*l*m-a*c*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],g=e[8],v=g*c-d*m,x=d*h-g*l,S=m*l-c*h,T=n*v+r*x+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=v*w,e[1]=(a*m-g*r)*w,e[2]=(d*r-a*c)*w,e[3]=x*w,e[4]=(g*n-a*h)*w,e[5]=(a*l-d*n)*w,e[6]=S*w,e[7]=(r*h-m*n)*w,e[8]=(c*n-r*l)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,l,c,d){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*c+m*d)+c+e,-a*m,a*h,-a*(-m*c+h*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Ac.makeScale(e,n)),this}rotate(e){return this.premultiply(Ac.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ac.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ac=new ut;function hg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Bo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function R0(){const s=Bo("canvas");return s.style.display="block",s}const Xp={};function Rl(s){s in Xp||(Xp[s]=!0,console.warn(s))}function b0(s,e,n){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}function P0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function L0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const jp=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yp=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function D0(){const s={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===bt&&(a.r=Vi(a.r),a.g=Vi(a.g),a.b=Vi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===bt&&(a.r=Hs(a.r),a.g=Hs(a.g),a.b=Hs(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Sr?Ll:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Xs]:{primaries:e,whitePoint:r,transfer:Ll,toXYZ:jp,fromXYZ:Yp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:e,whitePoint:r,transfer:bt,toXYZ:jp,fromXYZ:Yp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),s}const Tt=D0();function Vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let As;class I0{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{As===void 0&&(As=Bo("canvas")),As.width=e.width,As.height=e.height;const a=As.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=As}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Bo("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Vi(l[c]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Vi(n[r]/255)*255):n[r]=Vi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let N0=0;class nd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=Ho(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?l.push(Cc(a[c].image)):l.push(Cc(a[c]))}else l=Cc(a);r.url=l}return n||(e.images[this.uuid]=r),r}}function Cc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?I0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let U0=0;class An extends Ys{constructor(e=An.DEFAULT_IMAGE,n=An.DEFAULT_MAPPING,r=Zr,a=Zr,l=xi,c=Qr,d=ci,h=Gi,m=An.DEFAULT_ANISOTROPY,g=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Ho(),this.name="",this.source=new nd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ig)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gf:e.x=e.x-Math.floor(e.x);break;case Zr:e.x=e.x<0?0:1;break;case vf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gf:e.y=e.y-Math.floor(e.y);break;case Zr:e.y=e.y<0?0:1;break;case vf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=ig;An.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,n=0,r=0,a=1){Xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*n+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*n+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*n+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,l;const h=e.elements,m=h[0],g=h[4],v=h[8],x=h[1],S=h[5],T=h[9],w=h[2],y=h[6],_=h[10];if(Math.abs(g-x)<.01&&Math.abs(v-w)<.01&&Math.abs(T-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+w)<.1&&Math.abs(T+y)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const I=(m+1)/2,b=(S+1)/2,j=(_+1)/2,H=(g+x)/4,U=(v+w)/4,q=(T+y)/4;return I>b&&I>j?I<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(I),a=H/r,l=U/r):b>j?b<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(b),r=H/a,l=q/a):j<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(j),r=U/l,a=q/l),this.set(r,a,l,n),this}let N=Math.sqrt((y-T)*(y-T)+(v-w)*(v-w)+(x-g)*(x-g));return Math.abs(N)<.001&&(N=1),this.x=(y-T)/N,this.y=(v-w)/N,this.z=(x-g)/N,this.w=Math.acos((m+S+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this.w=vt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this.w=vt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class F0 extends Ys{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth?r.depth:1,this.scissor=new Xt(0,0,e,n),this.scissorTest=!1,this.viewport=new Xt(0,0,e,n);const a={width:e,height:n,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const l=new An(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new nd(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends F0{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class pg extends An{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=fi,this.minFilter=fi,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class O0 extends An{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=fi,this.minFilter=fi,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,l,c,d){let h=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];const x=l[c+0],S=l[c+1],T=l[c+2],w=l[c+3];if(d===0){e[n+0]=h,e[n+1]=m,e[n+2]=g,e[n+3]=v;return}if(d===1){e[n+0]=x,e[n+1]=S,e[n+2]=T,e[n+3]=w;return}if(v!==w||h!==x||m!==S||g!==T){let y=1-d;const _=h*x+m*S+g*T+v*w,N=_>=0?1:-1,I=1-_*_;if(I>Number.EPSILON){const j=Math.sqrt(I),H=Math.atan2(j,_*N);y=Math.sin(y*H)/j,d=Math.sin(d*H)/j}const b=d*N;if(h=h*y+x*b,m=m*y+S*b,g=g*y+T*b,v=v*y+w*b,y===1-d){const j=1/Math.sqrt(h*h+m*m+g*g+v*v);h*=j,m*=j,g*=j,v*=j}}e[n]=h,e[n+1]=m,e[n+2]=g,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,l,c){const d=r[a],h=r[a+1],m=r[a+2],g=r[a+3],v=l[c],x=l[c+1],S=l[c+2],T=l[c+3];return e[n]=d*T+g*v+h*S-m*x,e[n+1]=h*T+g*x+m*v-d*S,e[n+2]=m*T+g*S+d*x-h*v,e[n+3]=g*T-d*v-h*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,l=e._z,c=e._order,d=Math.cos,h=Math.sin,m=d(r/2),g=d(a/2),v=d(l/2),x=h(r/2),S=h(a/2),T=h(l/2);switch(c){case"XYZ":this._x=x*g*v+m*S*T,this._y=m*S*v-x*g*T,this._z=m*g*T+x*S*v,this._w=m*g*v-x*S*T;break;case"YXZ":this._x=x*g*v+m*S*T,this._y=m*S*v-x*g*T,this._z=m*g*T-x*S*v,this._w=m*g*v+x*S*T;break;case"ZXY":this._x=x*g*v-m*S*T,this._y=m*S*v+x*g*T,this._z=m*g*T+x*S*v,this._w=m*g*v-x*S*T;break;case"ZYX":this._x=x*g*v-m*S*T,this._y=m*S*v+x*g*T,this._z=m*g*T-x*S*v,this._w=m*g*v+x*S*T;break;case"YZX":this._x=x*g*v+m*S*T,this._y=m*S*v+x*g*T,this._z=m*g*T-x*S*v,this._w=m*g*v-x*S*T;break;case"XZY":this._x=x*g*v-m*S*T,this._y=m*S*v-x*g*T,this._z=m*g*T+x*S*v,this._w=m*g*v+x*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],l=n[8],c=n[1],d=n[5],h=n[9],m=n[2],g=n[6],v=n[10],x=r+d+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-m)*S,this._z=(c-a)*S}else if(r>d&&r>v){const S=2*Math.sqrt(1+r-d-v);this._w=(g-h)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+m)/S}else if(d>v){const S=2*Math.sqrt(1+d-r-v);this._w=(l-m)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+v-r-d);this._w=(c-a)/S,this._x=(l+m)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,l=e._z,c=e._w,d=n._x,h=n._y,m=n._z,g=n._w;return this._x=r*g+c*d+a*m-l*h,this._y=a*g+c*h+l*d-r*m,this._z=l*g+c*m+r*h-a*d,this._w=c*g-r*d-a*h-l*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,c=this._w;let d=c*e._w+r*e._x+a*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=c,this._x=r,this._y=a,this._z=l,this;const h=1-d*d;if(h<=Number.EPSILON){const S=1-n;return this._w=S*c+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*l+n*this._z,this.normalize(),this}const m=Math.sqrt(h),g=Math.atan2(m,d),v=Math.sin((1-n)*g)/m,x=Math.sin(n*g)/m;return this._w=c*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=l*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,n=0,r=0){ie.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(qp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(qp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,l=e.x,c=e.y,d=e.z,h=e.w,m=2*(c*a-d*r),g=2*(d*n-l*a),v=2*(l*r-c*n);return this.x=n+h*m+c*v-d*g,this.y=r+h*g+d*m-l*v,this.z=a+h*v+l*g-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,l=e.z,c=n.x,d=n.y,h=n.z;return this.x=a*h-l*d,this.y=l*c-r*h,this.z=r*d-a*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Rc.copy(this).projectOnVector(e),this.sub(Rc)}reflect(e){return this.sub(Rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rc=new ie,qp=new Vo;class Go{constructor(e=new ie(1/0,1/0,1/0),n=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,oi):oi.fromBufferAttribute(l,c),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),tl.copy(r.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bo),nl.subVectors(this.max,bo),Cs.subVectors(e.a,bo),Rs.subVectors(e.b,bo),bs.subVectors(e.c,bo),mr.subVectors(Rs,Cs),gr.subVectors(bs,Rs),Hr.subVectors(Cs,bs);let n=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Hr.z,Hr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Hr.z,0,-Hr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Hr.y,Hr.x,0];return!bc(n,Cs,Rs,bs,nl)||(n=[1,0,0,0,1,0,0,0,1],!bc(n,Cs,Rs,bs,nl))?!1:(il.crossVectors(mr,gr),n=[il.x,il.y,il.z],bc(n,Cs,Rs,bs,nl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],oi=new ie,tl=new Go,Cs=new ie,Rs=new ie,bs=new ie,mr=new ie,gr=new ie,Hr=new ie,bo=new ie,nl=new ie,il=new ie,Vr=new ie;function bc(s,e,n,r,a){for(let l=0,c=s.length-3;l<=c;l+=3){Vr.fromArray(s,l);const d=a.x*Math.abs(Vr.x)+a.y*Math.abs(Vr.y)+a.z*Math.abs(Vr.z),h=e.dot(Vr),m=n.dot(Vr),g=r.dot(Vr);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>d)return!1}return!0}const k0=new Go,Po=new ie,Pc=new ie;class kl{constructor(e=new ie,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):k0.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const n=Po.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Po,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(Pc)),this.expandByPoint(Po.copy(e.center).sub(Pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new ie,Lc=new ie,rl=new ie,vr=new ie,Dc=new ie,sl=new ie,Ic=new ie;class mg{constructor(e=new ie,n=new ie(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,n),Ii.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Lc.copy(e).add(n).multiplyScalar(.5),rl.copy(n).sub(e).normalize(),vr.copy(this.origin).sub(Lc);const l=e.distanceTo(n)*.5,c=-this.direction.dot(rl),d=vr.dot(this.direction),h=-vr.dot(rl),m=vr.lengthSq(),g=Math.abs(1-c*c);let v,x,S,T;if(g>0)if(v=c*h-d,x=c*d-h,T=l*g,v>=0)if(x>=-T)if(x<=T){const w=1/g;v*=w,x*=w,S=v*(v+c*x+2*d)+x*(c*v+x+2*h)+m}else x=l,v=Math.max(0,-(c*x+d)),S=-v*v+x*(x+2*h)+m;else x=-l,v=Math.max(0,-(c*x+d)),S=-v*v+x*(x+2*h)+m;else x<=-T?(v=Math.max(0,-(-c*l+d)),x=v>0?-l:Math.min(Math.max(-l,-h),l),S=-v*v+x*(x+2*h)+m):x<=T?(v=0,x=Math.min(Math.max(-l,-h),l),S=x*(x+2*h)+m):(v=Math.max(0,-(c*l+d)),x=v>0?l:Math.min(Math.max(-l,-h),l),S=-v*v+x*(x+2*h)+m);else x=c>0?-l:l,v=Math.max(0,-(c*x+d)),S=-v*v+x*(x+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Lc).addScaledVector(rl,x),S}intersectSphere(e,n){Ii.subVectors(e.center,this.origin);const r=Ii.dot(this.direction),a=Ii.dot(Ii)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),d=r-c,h=r+c;return h<0?null:d<0?this.at(h,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,l,c,d,h;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),g>=0?(l=(e.min.y-x.y)*g,c=(e.max.y-x.y)*g):(l=(e.max.y-x.y)*g,c=(e.min.y-x.y)*g),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),v>=0?(d=(e.min.z-x.z)*v,h=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,h=(e.min.z-x.z)*v),r>h||d>a)||((d>r||r!==r)&&(r=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,n,r,a,l){Dc.subVectors(n,e),sl.subVectors(r,e),Ic.crossVectors(Dc,sl);let c=this.direction.dot(Ic),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;vr.subVectors(this.origin,e);const h=d*this.direction.dot(sl.crossVectors(vr,sl));if(h<0)return null;const m=d*this.direction.dot(Dc.cross(vr));if(m<0||h+m>c)return null;const g=-d*vr.dot(Ic);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,n,r,a,l,c,d,h,m,g,v,x,S,T,w,y){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,c,d,h,m,g,v,x,S,T,w,y)}set(e,n,r,a,l,c,d,h,m,g,v,x,S,T,w,y){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=l,_[5]=c,_[9]=d,_[13]=h,_[2]=m,_[6]=g,_[10]=v,_[14]=x,_[3]=S,_[7]=T,_[11]=w,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ps.setFromMatrixColumn(e,0).length(),l=1/Ps.setFromMatrixColumn(e,1).length(),c=1/Ps.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),d=Math.sin(r),h=Math.cos(a),m=Math.sin(a),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const x=c*g,S=c*v,T=d*g,w=d*v;n[0]=h*g,n[4]=-h*v,n[8]=m,n[1]=S+T*m,n[5]=x-w*m,n[9]=-d*h,n[2]=w-x*m,n[6]=T+S*m,n[10]=c*h}else if(e.order==="YXZ"){const x=h*g,S=h*v,T=m*g,w=m*v;n[0]=x+w*d,n[4]=T*d-S,n[8]=c*m,n[1]=c*v,n[5]=c*g,n[9]=-d,n[2]=S*d-T,n[6]=w+x*d,n[10]=c*h}else if(e.order==="ZXY"){const x=h*g,S=h*v,T=m*g,w=m*v;n[0]=x-w*d,n[4]=-c*v,n[8]=T+S*d,n[1]=S+T*d,n[5]=c*g,n[9]=w-x*d,n[2]=-c*m,n[6]=d,n[10]=c*h}else if(e.order==="ZYX"){const x=c*g,S=c*v,T=d*g,w=d*v;n[0]=h*g,n[4]=T*m-S,n[8]=x*m+w,n[1]=h*v,n[5]=w*m+x,n[9]=S*m-T,n[2]=-m,n[6]=d*h,n[10]=c*h}else if(e.order==="YZX"){const x=c*h,S=c*m,T=d*h,w=d*m;n[0]=h*g,n[4]=w-x*v,n[8]=T*v+S,n[1]=v,n[5]=c*g,n[9]=-d*g,n[2]=-m*g,n[6]=S*v+T,n[10]=x-w*v}else if(e.order==="XZY"){const x=c*h,S=c*m,T=d*h,w=d*m;n[0]=h*g,n[4]=-v,n[8]=m*g,n[1]=x*v+w,n[5]=c*g,n[9]=S*v-T,n[2]=T*v-S,n[6]=d*g,n[10]=w*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(B0,e,z0)}lookAt(e,n,r){const a=this.elements;return Vn.subVectors(e,n),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),_r.crossVectors(r,Vn),_r.lengthSq()===0&&(Math.abs(r.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),_r.crossVectors(r,Vn)),_r.normalize(),ol.crossVectors(Vn,_r),a[0]=_r.x,a[4]=ol.x,a[8]=Vn.x,a[1]=_r.y,a[5]=ol.y,a[9]=Vn.y,a[2]=_r.z,a[6]=ol.z,a[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,c=r[0],d=r[4],h=r[8],m=r[12],g=r[1],v=r[5],x=r[9],S=r[13],T=r[2],w=r[6],y=r[10],_=r[14],N=r[3],I=r[7],b=r[11],j=r[15],H=a[0],U=a[4],q=a[8],P=a[12],C=a[1],z=a[5],re=a[9],ee=a[13],de=a[2],ue=a[6],le=a[10],oe=a[14],B=a[3],ae=a[7],F=a[11],R=a[15];return l[0]=c*H+d*C+h*de+m*B,l[4]=c*U+d*z+h*ue+m*ae,l[8]=c*q+d*re+h*le+m*F,l[12]=c*P+d*ee+h*oe+m*R,l[1]=g*H+v*C+x*de+S*B,l[5]=g*U+v*z+x*ue+S*ae,l[9]=g*q+v*re+x*le+S*F,l[13]=g*P+v*ee+x*oe+S*R,l[2]=T*H+w*C+y*de+_*B,l[6]=T*U+w*z+y*ue+_*ae,l[10]=T*q+w*re+y*le+_*F,l[14]=T*P+w*ee+y*oe+_*R,l[3]=N*H+I*C+b*de+j*B,l[7]=N*U+I*z+b*ue+j*ae,l[11]=N*q+I*re+b*le+j*F,l[15]=N*P+I*ee+b*oe+j*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[12],c=e[1],d=e[5],h=e[9],m=e[13],g=e[2],v=e[6],x=e[10],S=e[14],T=e[3],w=e[7],y=e[11],_=e[15];return T*(+l*h*v-a*m*v-l*d*x+r*m*x+a*d*S-r*h*S)+w*(+n*h*S-n*m*x+l*c*x-a*c*S+a*m*g-l*h*g)+y*(+n*m*v-n*d*S-l*c*v+r*c*S+l*d*g-r*m*g)+_*(-a*d*g-n*h*v+n*d*x+a*c*v-r*c*x+r*h*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],g=e[8],v=e[9],x=e[10],S=e[11],T=e[12],w=e[13],y=e[14],_=e[15],N=v*y*m-w*x*m+w*h*S-d*y*S-v*h*_+d*x*_,I=T*x*m-g*y*m-T*h*S+c*y*S+g*h*_-c*x*_,b=g*w*m-T*v*m+T*d*S-c*w*S-g*d*_+c*v*_,j=T*v*h-g*w*h-T*d*x+c*w*x+g*d*y-c*v*y,H=n*N+r*I+a*b+l*j;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/H;return e[0]=N*U,e[1]=(w*x*l-v*y*l-w*a*S+r*y*S+v*a*_-r*x*_)*U,e[2]=(d*y*l-w*h*l+w*a*m-r*y*m-d*a*_+r*h*_)*U,e[3]=(v*h*l-d*x*l-v*a*m+r*x*m+d*a*S-r*h*S)*U,e[4]=I*U,e[5]=(g*y*l-T*x*l+T*a*S-n*y*S-g*a*_+n*x*_)*U,e[6]=(T*h*l-c*y*l-T*a*m+n*y*m+c*a*_-n*h*_)*U,e[7]=(c*x*l-g*h*l+g*a*m-n*x*m-c*a*S+n*h*S)*U,e[8]=b*U,e[9]=(T*v*l-g*w*l-T*r*S+n*w*S+g*r*_-n*v*_)*U,e[10]=(c*w*l-T*d*l+T*r*m-n*w*m-c*r*_+n*d*_)*U,e[11]=(g*d*l-c*v*l-g*r*m+n*v*m+c*r*S-n*d*S)*U,e[12]=j*U,e[13]=(g*w*a-T*v*a+T*r*x-n*w*x-g*r*y+n*v*y)*U,e[14]=(T*d*a-c*w*a-T*r*h+n*w*h+c*r*y-n*d*y)*U,e[15]=(c*v*a-g*d*a+g*r*h-n*v*h-c*r*x+n*d*x)*U,this}scale(e){const n=this.elements,r=e.x,a=e.y,l=e.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,c=e.x,d=e.y,h=e.z,m=l*c,g=l*d;return this.set(m*c+r,m*d-a*h,m*h+a*d,0,m*d+a*h,g*d+r,g*h-a*c,0,m*h-a*d,g*h+a*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,l=n._x,c=n._y,d=n._z,h=n._w,m=l+l,g=c+c,v=d+d,x=l*m,S=l*g,T=l*v,w=c*g,y=c*v,_=d*v,N=h*m,I=h*g,b=h*v,j=r.x,H=r.y,U=r.z;return a[0]=(1-(w+_))*j,a[1]=(S+b)*j,a[2]=(T-I)*j,a[3]=0,a[4]=(S-b)*H,a[5]=(1-(x+_))*H,a[6]=(y+N)*H,a[7]=0,a[8]=(T+I)*U,a[9]=(y-N)*U,a[10]=(1-(x+w))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let l=Ps.set(a[0],a[1],a[2]).length();const c=Ps.set(a[4],a[5],a[6]).length(),d=Ps.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],ai.copy(this);const m=1/l,g=1/c,v=1/d;return ai.elements[0]*=m,ai.elements[1]*=m,ai.elements[2]*=m,ai.elements[4]*=g,ai.elements[5]*=g,ai.elements[6]*=g,ai.elements[8]*=v,ai.elements[9]*=v,ai.elements[10]*=v,n.setFromRotationMatrix(ai),r.x=l,r.y=c,r.z=d,this}makePerspective(e,n,r,a,l,c,d=zi){const h=this.elements,m=2*l/(n-e),g=2*l/(r-a),v=(n+e)/(n-e),x=(r+a)/(r-a);let S,T;if(d===zi)S=-(c+l)/(c-l),T=-2*c*l/(c-l);else if(d===Dl)S=-c/(c-l),T=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,l,c,d=zi){const h=this.elements,m=1/(n-e),g=1/(r-a),v=1/(c-l),x=(n+e)*m,S=(r+a)*g;let T,w;if(d===zi)T=(c+l)*v,w=-2*v;else if(d===Dl)T=l*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=w,h[14]=-T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ps=new ie,ai=new jt,B0=new ie(0,0,0),z0=new ie(1,1,1),_r=new ie,ol=new ie,Vn=new ie,$p=new jt,Kp=new Vo;class Wi{constructor(e=0,n=0,r=0,a=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],d=a[8],h=a[1],m=a[5],g=a[9],v=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(vt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-vt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return $p.makeRotationFromQuaternion(e),this.setFromRotationMatrix($p,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Kp.setFromEuler(this),this.setFromQuaternion(Kp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class gg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let H0=0;const Zp=new ie,Ls=new Vo,Ni=new jt,al=new ie,Lo=new ie,V0=new ie,G0=new Vo,Qp=new ie(1,0,0),Jp=new ie(0,1,0),em=new ie(0,0,1),tm={type:"added"},W0={type:"removed"},Ds={type:"childadded",child:null},Nc={type:"childremoved",child:null};class On extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new ie,n=new Wi,r=new Vo,a=new ie(1,1,1);function l(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new jt},normalMatrix:{value:new ut}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(Qp,e)}rotateY(e){return this.rotateOnAxis(Jp,e)}rotateZ(e){return this.rotateOnAxis(em,e)}translateOnAxis(e,n){return Zp.copy(e).applyQuaternion(this.quaternion),this.position.add(Zp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qp,e)}translateY(e){return this.translateOnAxis(Jp,e)}translateZ(e){return this.translateOnAxis(em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?al.copy(e):al.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Lo,al,this.up):Ni.lookAt(al,Lo,this.up),this.quaternion.setFromRotationMatrix(Ni),a&&(Ni.extractRotation(a.matrixWorld),Ls.setFromRotationMatrix(Ni),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(W0),Nc.child=e,this.dispatchEvent(Nc),Nc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,V0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,G0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const v=h[m];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(l(e.materials,this.material[h]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(l(e.animations,h))}}if(n){const d=c(e.geometries),h=c(e.materials),m=c(e.textures),g=c(e.images),v=c(e.shapes),x=c(e.skeletons),S=c(e.animations),T=c(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=a,r;function c(d){const h=[];for(const m in d){const g=d[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}On.DEFAULT_UP=new ie(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new ie,Ui=new ie,Uc=new ie,Fi=new ie,Is=new ie,Ns=new ie,nm=new ie,Fc=new ie,Oc=new ie,kc=new ie,Bc=new Xt,zc=new Xt,Hc=new Xt;class ui{constructor(e=new ie,n=new ie,r=new ie){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),li.subVectors(e,n),a.cross(li);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,r,a,l){li.subVectors(a,n),Ui.subVectors(r,n),Uc.subVectors(e,n);const c=li.dot(li),d=li.dot(Ui),h=li.dot(Uc),m=Ui.dot(Ui),g=Ui.dot(Uc),v=c*m-d*d;if(v===0)return l.set(0,0,0),null;const x=1/v,S=(m*h-d*g)*x,T=(c*g-d*h)*x;return l.set(1-S-T,T,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,r,a,l,c,d,h){return this.getBarycoord(e,n,r,a,Fi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Fi.x),h.addScaledVector(c,Fi.y),h.addScaledVector(d,Fi.z),h)}static getInterpolatedAttribute(e,n,r,a,l,c){return Bc.setScalar(0),zc.setScalar(0),Hc.setScalar(0),Bc.fromBufferAttribute(e,n),zc.fromBufferAttribute(e,r),Hc.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Bc,l.x),c.addScaledVector(zc,l.y),c.addScaledVector(Hc,l.z),c}static isFrontFacing(e,n,r,a){return li.subVectors(r,n),Ui.subVectors(e,n),li.cross(Ui).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),li.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ui.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,l){return ui.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,l=this.c;let c,d;Is.subVectors(a,r),Ns.subVectors(l,r),Fc.subVectors(e,r);const h=Is.dot(Fc),m=Ns.dot(Fc);if(h<=0&&m<=0)return n.copy(r);Oc.subVectors(e,a);const g=Is.dot(Oc),v=Ns.dot(Oc);if(g>=0&&v<=g)return n.copy(a);const x=h*v-g*m;if(x<=0&&h>=0&&g<=0)return c=h/(h-g),n.copy(r).addScaledVector(Is,c);kc.subVectors(e,l);const S=Is.dot(kc),T=Ns.dot(kc);if(T>=0&&S<=T)return n.copy(l);const w=S*m-h*T;if(w<=0&&m>=0&&T<=0)return d=m/(m-T),n.copy(r).addScaledVector(Ns,d);const y=g*T-S*v;if(y<=0&&v-g>=0&&S-T>=0)return nm.subVectors(l,a),d=(v-g)/(v-g+(S-T)),n.copy(a).addScaledVector(nm,d);const _=1/(y+w+x);return c=w*_,d=x*_,n.copy(r).addScaledVector(Is,c).addScaledVector(Ns,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},ll={h:0,s:0,l:0};function Vc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Et{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Tt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Tt.workingColorSpace){if(e=C0(e,1),n=vt(n,0,1),r=vt(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,c=2*r-l;this.r=Vc(c,l,e+1/3),this.g=Vc(c,l,e),this.b=Vc(c,l,e-1/3)}return Tt.toWorkingColorSpace(this,a),this}setStyle(e,n=Qn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Qn){const r=vg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return Tt.fromWorkingColorSpace(xn.copy(this),e),Math.round(vt(xn.r*255,0,255))*65536+Math.round(vt(xn.g*255,0,255))*256+Math.round(vt(xn.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.fromWorkingColorSpace(xn.copy(this),n);const r=xn.r,a=xn.g,l=xn.b,c=Math.max(r,a,l),d=Math.min(r,a,l);let h,m;const g=(d+c)/2;if(d===c)h=0,m=0;else{const v=c-d;switch(m=g<=.5?v/(c+d):v/(2-c-d),c){case r:h=(a-l)/v+(a<l?6:0);break;case a:h=(l-r)/v+2;break;case l:h=(r-a)/v+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,n=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(xn.copy(this),n),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Qn){Tt.fromWorkingColorSpace(xn.copy(this),e);const n=xn.r,r=xn.g,a=xn.b;return e!==Qn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+n,xr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(xr),e.getHSL(ll);const r=wc(xr.h,ll.h,n),a=wc(xr.s,ll.s,n),l=wc(xr.l,ll.l,n);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new Et;Et.NAMES=vg;let X0=0;class Wo extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=Ho(),this.name="",this.type="Material",this.blending=zs,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sf,this.blendDst=of,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(r.blending=this.blending),this.side!==wr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==sf&&(r.blendSrc=this.blendSrc),this.blendDst!==of&&(r.blendDst=this.blendDst),this.blendEquation!==$r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const d in l){const h=l[d];delete h.metadata,c.push(h)}return c}if(n){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _g extends Wo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=ng,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new ie,ul=new Lt;let j0=0;class yi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:j0++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Gp,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ul.fromBufferAttribute(this,n),ul.applyMatrix3(e),this.setXY(n,ul.x,ul.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix3(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix4(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyNormalMatrix(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.transformDirection(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ro(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Nn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ro(n,this.array)),n}setX(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ro(n,this.array)),n}setY(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ro(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ro(n,this.array)),n}setW(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array),a=Nn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array),a=Nn(a,this.array),l=Nn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gp&&(e.usage=this.usage),e}}class xg extends yi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class yg extends yi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Tr extends yi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Y0=0;const Zn=new jt,Gc=new On,Us=new ie,Gn=new Go,Do=new Go,ln=new ie;class Xi extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hg(e)?yg:xg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ut().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,n,r){return Zn.makeTranslation(e,n,r),this.applyMatrix4(Zn),this}scale(e,n,r){return Zn.makeScale(e,n,r),this.applyMatrix4(Zn),this}lookAt(e){return Gc.lookAt(e),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Tr(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const l=e[a];n.setXYZ(a,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];Gn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),n)for(let l=0,c=n.length;l<c;l++){const d=n[l];Do.setFromBufferAttribute(d),this.morphTargetsRelative?(ln.addVectors(Gn.min,Do.min),Gn.expandByPoint(ln),ln.addVectors(Gn.max,Do.max),Gn.expandByPoint(ln)):(Gn.expandByPoint(Do.min),Gn.expandByPoint(Do.max))}Gn.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)ln.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(ln));if(n)for(let l=0,c=n.length;l<c;l++){const d=n[l],h=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)ln.fromBufferAttribute(d,m),h&&(Us.fromBufferAttribute(e,m),ln.add(Us)),a=Math.max(a,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),d=[],h=[];for(let q=0;q<r.count;q++)d[q]=new ie,h[q]=new ie;const m=new ie,g=new ie,v=new ie,x=new Lt,S=new Lt,T=new Lt,w=new ie,y=new ie;function _(q,P,C){m.fromBufferAttribute(r,q),g.fromBufferAttribute(r,P),v.fromBufferAttribute(r,C),x.fromBufferAttribute(l,q),S.fromBufferAttribute(l,P),T.fromBufferAttribute(l,C),g.sub(m),v.sub(m),S.sub(x),T.sub(x);const z=1/(S.x*T.y-T.x*S.y);isFinite(z)&&(w.copy(g).multiplyScalar(T.y).addScaledVector(v,-S.y).multiplyScalar(z),y.copy(v).multiplyScalar(S.x).addScaledVector(g,-T.x).multiplyScalar(z),d[q].add(w),d[P].add(w),d[C].add(w),h[q].add(y),h[P].add(y),h[C].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let q=0,P=N.length;q<P;++q){const C=N[q],z=C.start,re=C.count;for(let ee=z,de=z+re;ee<de;ee+=3)_(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const I=new ie,b=new ie,j=new ie,H=new ie;function U(q){j.fromBufferAttribute(a,q),H.copy(j);const P=d[q];I.copy(P),I.sub(j.multiplyScalar(j.dot(P))).normalize(),b.crossVectors(H,P);const z=b.dot(h[q])<0?-1:1;c.setXYZW(q,I.x,I.y,I.z,z)}for(let q=0,P=N.length;q<P;++q){const C=N[q],z=C.start,re=C.count;for(let ee=z,de=z+re;ee<de;ee+=3)U(e.getX(ee+0)),U(e.getX(ee+1)),U(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new yi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new ie,l=new ie,c=new ie,d=new ie,h=new ie,m=new ie,g=new ie,v=new ie;if(e)for(let x=0,S=e.count;x<S;x+=3){const T=e.getX(x+0),w=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,T),l.fromBufferAttribute(n,w),c.fromBufferAttribute(n,y),g.subVectors(c,l),v.subVectors(a,l),g.cross(v),d.fromBufferAttribute(r,T),h.fromBufferAttribute(r,w),m.fromBufferAttribute(r,y),d.add(g),h.add(g),m.add(g),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),l.fromBufferAttribute(n,x+1),c.fromBufferAttribute(n,x+2),g.subVectors(c,l),v.subVectors(a,l),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)ln.fromBufferAttribute(e,n),ln.normalize(),e.setXYZ(n,ln.x,ln.y,ln.z)}toNonIndexed(){function e(d,h){const m=d.array,g=d.itemSize,v=d.normalized,x=new m.constructor(h.length*g);let S=0,T=0;for(let w=0,y=h.length;w<y;w++){d.isInterleavedBufferAttribute?S=h[w]*d.data.stride+d.offset:S=h[w]*g;for(let _=0;_<g;_++)x[T++]=m[S++]}return new yi(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Xi,r=this.index.array,a=this.attributes;for(const d in a){const h=a[d],m=e(h,r);n.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const h=[],m=l[d];for(let g=0,v=m.length;g<v;g++){const x=m[g],S=e(x,r);h.push(S)}n.morphAttributes[d]=h}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,h=c.length;d<h;d++){const m=c[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let v=0,x=m.length;v<x;v++){const S=m[v];g.push(S.toJSON(e.data))}g.length>0&&(a[h]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(n))}const l=e.morphAttributes;for(const m in l){const g=[],v=l[m];for(let x=0,S=v.length;x<S;x++)g.push(v[x].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,g=c.length;m<g;m++){const v=c[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const im=new jt,Gr=new mg,cl=new kl,rm=new ie,fl=new ie,dl=new ie,hl=new ie,Wc=new ie,pl=new ie,sm=new ie,ml=new ie;class Hi extends On{constructor(e=new Xi,n=new _g){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){pl.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const g=d[h],v=l[h];g!==0&&(Wc.fromBufferAttribute(v,e),c?pl.addScaledVector(Wc,g):pl.addScaledVector(Wc.sub(n),g))}n.add(pl)}return n}raycast(e,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),cl.copy(r.boundingSphere),cl.applyMatrix4(l),Gr.copy(e.ray).recast(e.near),!(cl.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(cl,rm)===null||Gr.origin.distanceToSquared(rm)>(e.far-e.near)**2))&&(im.copy(l).invert(),Gr.copy(e.ray).applyMatrix4(im),!(r.boundingBox!==null&&Gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Gr)))}_computeIntersections(e,n,r){let a;const l=this.geometry,c=this.material,d=l.index,h=l.attributes.position,m=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,x=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(c))for(let T=0,w=x.length;T<w;T++){const y=x[T],_=c[y.materialIndex],N=Math.max(y.start,S.start),I=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let b=N,j=I;b<j;b+=3){const H=d.getX(b),U=d.getX(b+1),q=d.getX(b+2);a=gl(this,_,e,r,m,g,v,H,U,q),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let y=T,_=w;y<_;y+=3){const N=d.getX(y),I=d.getX(y+1),b=d.getX(y+2);a=gl(this,c,e,r,m,g,v,N,I,b),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let T=0,w=x.length;T<w;T++){const y=x[T],_=c[y.materialIndex],N=Math.max(y.start,S.start),I=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let b=N,j=I;b<j;b+=3){const H=b,U=b+1,q=b+2;a=gl(this,_,e,r,m,g,v,H,U,q),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let y=T,_=w;y<_;y+=3){const N=y,I=y+1,b=y+2;a=gl(this,c,e,r,m,g,v,N,I,b),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function q0(s,e,n,r,a,l,c,d){let h;if(e.side===Fn?h=r.intersectTriangle(c,l,a,!0,d):h=r.intersectTriangle(a,l,c,e.side===wr,d),h===null)return null;ml.copy(d),ml.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(ml);return m<n.near||m>n.far?null:{distance:m,point:ml.clone(),object:s}}function gl(s,e,n,r,a,l,c,d,h,m){s.getVertexPosition(d,fl),s.getVertexPosition(h,dl),s.getVertexPosition(m,hl);const g=q0(s,e,n,r,fl,dl,hl,sm);if(g){const v=new ie;ui.getBarycoord(sm,fl,dl,hl,v),a&&(g.uv=ui.getInterpolatedAttribute(a,d,h,m,v,new Lt)),l&&(g.uv1=ui.getInterpolatedAttribute(l,d,h,m,v,new Lt)),c&&(g.normal=ui.getInterpolatedAttribute(c,d,h,m,v,new ie),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:h,c:m,normal:new ie,materialIndex:0};ui.getNormal(fl,dl,hl,x.normal),g.face=x,g.barycoord=v}return g}class Xo extends Xi{constructor(e=1,n=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const d=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],m=[],g=[],v=[];let x=0,S=0;T("z","y","x",-1,-1,r,n,e,c,l,0),T("z","y","x",1,-1,r,n,-e,c,l,1),T("x","z","y",1,1,e,r,n,a,c,2),T("x","z","y",1,-1,e,r,-n,a,c,3),T("x","y","z",1,-1,e,n,r,a,l,4),T("x","y","z",-1,-1,e,n,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new Tr(m,3)),this.setAttribute("normal",new Tr(g,3)),this.setAttribute("uv",new Tr(v,2));function T(w,y,_,N,I,b,j,H,U,q,P){const C=b/U,z=j/q,re=b/2,ee=j/2,de=H/2,ue=U+1,le=q+1;let oe=0,B=0;const ae=new ie;for(let F=0;F<le;F++){const R=F*z-ee;for(let W=0;W<ue;W++){const Me=W*C-re;ae[w]=Me*N,ae[y]=R*I,ae[_]=de,m.push(ae.x,ae.y,ae.z),ae[w]=0,ae[y]=0,ae[_]=H>0?1:-1,g.push(ae.x,ae.y,ae.z),v.push(W/U),v.push(1-F/q),oe+=1}}for(let F=0;F<q;F++)for(let R=0;R<U;R++){const W=x+R+ue*F,Me=x+R+ue*(F+1),$=x+(R+1)+ue*(F+1),ce=x+(R+1)+ue*F;h.push(W,Me,ce),h.push(Me,$,ce),B+=6}d.addGroup(S,B,P),S+=B,x+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function wn(s){const e={};for(let n=0;n<s.length;n++){const r=js(s[n]);for(const a in r)e[a]=r[a]}return e}function $0(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Sg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const K0={clone:js,merge:wn};var Z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Q0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ar extends Wo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Z0,this.fragmentShader=Q0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=$0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?n.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[a]={type:"m4",value:c.toArray()}:n.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Eg extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=zi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new ie,om=new Lt,am=new Lt;class Jn extends Eg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Wf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wf*2*Math.atan(Math.tan(Tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,n){return this.getViewBounds(e,om,am),n.subVectors(am,om)}setViewOffset(e,n,r,a,l,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Tc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,m=c.fullHeight;l+=c.offsetX*a/h,n-=c.offsetY*r/m,a*=c.width/h,r*=c.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fs=-90,Os=1;class J0 extends On{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Jn(Fs,Os,e,n);a.layers=this.layers,this.add(a);const l=new Jn(Fs,Os,e,n);l.layers=this.layers,this.add(l);const c=new Jn(Fs,Os,e,n);c.layers=this.layers,this.add(c);const d=new Jn(Fs,Os,e,n);d.layers=this.layers,this.add(d);const h=new Jn(Fs,Os,e,n);h.layers=this.layers,this.add(h);const m=new Jn(Fs,Os,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,l,c,d,h]=n;for(const m of n)this.remove(m);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Dl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,h,m,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,l),e.setRenderTarget(r,1,a),e.render(n,c),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,a),e.render(n,g),e.setRenderTarget(v,x,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Mg extends An{constructor(e=[],n=Gs,r,a,l,c,d,h,m,g){super(e,n,r,a,l,c,d,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ex extends es{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Mg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Xo(5,5,5),l=new Ar({name:"CubemapFromEquirect",uniforms:js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:Er});l.uniforms.tEquirect.value=n;const c=new Hi(a,l),d=n.minFilter;return n.minFilter===Qr&&(n.minFilter=xi),new J0(1,10,this).update(e,c),n.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,n=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,a);e.setRenderTarget(l)}}class Io extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tx={type:"move"};class Xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Io,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Io,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Io,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,l=null,c=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const w of e.hand.values()){const y=n.getJointPose(w,r),_=this._getHandJoint(m,w);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=g.position.distanceTo(v.position),S=.02,T=.005;m.inputState.pinching&&x>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(tx)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Io;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class nx extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const jc=new ie,ix=new ie,rx=new ut;class Yr{constructor(e=new ie(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=jc.subVectors(r,n).cross(ix.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(jc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||rx.getNormalMatrix(e),a=this.coplanarPoint(jc).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new kl,vl=new ie;class Tg{constructor(e=new Yr,n=new Yr,r=new Yr,a=new Yr,l=new Yr,c=new Yr){this.planes=[e,n,r,a,l,c]}set(e,n,r,a,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(l),d[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=zi){const r=this.planes,a=e.elements,l=a[0],c=a[1],d=a[2],h=a[3],m=a[4],g=a[5],v=a[6],x=a[7],S=a[8],T=a[9],w=a[10],y=a[11],_=a[12],N=a[13],I=a[14],b=a[15];if(r[0].setComponents(h-l,x-m,y-S,b-_).normalize(),r[1].setComponents(h+l,x+m,y+S,b+_).normalize(),r[2].setComponents(h+c,x+g,y+T,b+N).normalize(),r[3].setComponents(h-c,x-g,y-T,b-N).normalize(),r[4].setComponents(h-d,x-v,y-w,b-I).normalize(),n===zi)r[5].setComponents(h+d,x+v,y+w,b+I).normalize();else if(n===Dl)r[5].setComponents(d,v,w,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){return Wr.center.set(0,0,0),Wr.radius=.7071067811865476,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(vl.x=a.normal.x>0?e.max.x:e.min.x,vl.y=a.normal.y>0?e.max.y:e.min.y,vl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(vl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wg extends Wo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const lm=new jt,Xf=new mg,_l=new kl,xl=new ie;class sx extends On{constructor(e=new Xi,n=new wg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),_l.copy(r.boundingSphere),_l.applyMatrix4(a),_l.radius+=l,e.ray.intersectsSphere(_l)===!1)return;lm.copy(a).invert(),Xf.copy(e.ray).applyMatrix4(lm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=r.index,v=r.attributes.position;if(m!==null){const x=Math.max(0,c.start),S=Math.min(m.count,c.start+c.count);for(let T=x,w=S;T<w;T++){const y=m.getX(T);xl.fromBufferAttribute(v,y),um(xl,y,h,a,e,n,this)}}else{const x=Math.max(0,c.start),S=Math.min(v.count,c.start+c.count);for(let T=x,w=S;T<w;T++)xl.fromBufferAttribute(v,T),um(xl,T,h,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function um(s,e,n,r,a,l,c){const d=Xf.distanceSqToPoint(s);if(d<n){const h=new ie;Xf.closestPointToPoint(s,h),h.applyMatrix4(r);const m=a.ray.origin.distanceTo(h);if(m<a.near||m>a.far)return;l.push({distance:m,distanceToRay:Math.sqrt(d),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Ag extends An{constructor(e,n,r=Jr,a,l,c,d=fi,h=fi,m,g=Oo){if(g!==Oo&&g!==ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,a,l,c,d,h,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Bl extends Xi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const l=e/2,c=n/2,d=Math.floor(r),h=Math.floor(a),m=d+1,g=h+1,v=e/d,x=n/h,S=[],T=[],w=[],y=[];for(let _=0;_<g;_++){const N=_*x-c;for(let I=0;I<m;I++){const b=I*v-l;T.push(b,-N,0),w.push(0,0,1),y.push(I/d),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let N=0;N<d;N++){const I=N+m*_,b=N+m*(_+1),j=N+1+m*(_+1),H=N+1+m*_;S.push(I,b,H),S.push(b,j,H)}this.setIndex(S),this.setAttribute("position",new Tr(T,3)),this.setAttribute("normal",new Tr(w,3)),this.setAttribute("uv",new Tr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.width,e.height,e.widthSegments,e.heightSegments)}}class ox extends Wo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=g0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ax extends Wo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cm={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class lx{constructor(e,n,r){const a=this;let l=!1,c=0,d=0,h;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this.itemStart=function(g){d++,l===!1&&a.onStart!==void 0&&a.onStart(g,c,d),l=!0},this.itemEnd=function(g){c++,a.onProgress!==void 0&&a.onProgress(g,c,d),c===d&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(g){a.onError!==void 0&&a.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,v){return m.push(g,v),this},this.removeHandler=function(g){const v=m.indexOf(g);return v!==-1&&m.splice(v,2),this},this.getHandler=function(g){for(let v=0,x=m.length;v<x;v+=2){const S=m[v],T=m[v+1];if(S.global&&(S.lastIndex=0),S.test(g))return T}return null}}}const ux=new lx;class id{constructor(e){this.manager=e!==void 0?e:ux,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const r=this;return new Promise(function(a,l){r.load(e,a,n,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}id.DEFAULT_MATERIAL_NAME="__DEFAULT";class cx extends id{constructor(e){super(e)}load(e,n,r,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=cm.get(e);if(c!==void 0)return l.manager.itemStart(e),setTimeout(function(){n&&n(c),l.manager.itemEnd(e)},0),c;const d=Bo("img");function h(){g(),cm.add(e,this),n&&n(this),l.manager.itemEnd(e)}function m(v){g(),a&&a(v),l.manager.itemError(e),l.manager.itemEnd(e)}function g(){d.removeEventListener("load",h,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",h,!1),d.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),l.manager.itemStart(e),d.src=e,d}}class fx extends id{constructor(e){super(e)}load(e,n,r,a){const l=new An,c=new cx(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(d){l.image=d,l.needsUpdate=!0,n!==void 0&&n(l)},r,a),l}}class dx extends Eg{constructor(e=-1,n=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,d=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,c=l+m*this.view.width,d-=g*this.view.offsetY,h=d-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class hx extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function fm(s,e,n,r){const a=px(r);switch(n){case ag:return s*e;case ug:return s*e/a.components*a.byteLength;case Jf:return s*e/a.components*a.byteLength;case cg:return s*e*2/a.components*a.byteLength;case ed:return s*e*2/a.components*a.byteLength;case lg:return s*e*3/a.components*a.byteLength;case ci:return s*e*4/a.components*a.byteLength;case td:return s*e*4/a.components*a.byteLength;case Ml:case Tl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wl:case Al:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xf:case Sf:return Math.max(s,16)*Math.max(e,8)/4;case _f:case yf:return Math.max(s,8)*Math.max(e,8)/2;case Ef:case Mf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Tf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Af:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case bf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Pf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Df:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case If:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Uf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ff:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Of:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case kf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Cl:case Bf:case zf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case fg:case Hf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Vf:case Gf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function px(s){switch(s){case Gi:case rg:return{byteLength:1,components:1};case Uo:case sg:case zo:return{byteLength:2,components:1};case Zf:case Qf:return{byteLength:2,components:4};case Jr:case Kf:case Bi:return{byteLength:4,components:1};case og:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$f}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$f);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cg(){let s=null,e=!1,n=null,r=null;function a(l,c){n(l,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function mx(s){const e=new WeakMap;function n(d,h){const m=d.array,g=d.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,m,g),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,h,m){const g=h.array,v=h.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,g);else{v.sort((S,T)=>S.start-T.start);let x=0;for(let S=1;S<v.length;S++){const T=v[x],w=v[S];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++x,v[x]=w)}v.length=x+1;for(let S=0,T=v.length;S<T;S++){const w=v[S];s.bufferSubData(m,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function c(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,h),m.version=d.version}}return{get:a,remove:l,update:c}}var gx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ex=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ax=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Px=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ox=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Bx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$x=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ey=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ty=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ny=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ry=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ay=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ly=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,py=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,my=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_y=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ey=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,My=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ty=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ay=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ry=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,by=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Py=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ly=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Dy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ny=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ky=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,By=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$y=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ky=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Qy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,eS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,iS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_S=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ES=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,MS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,TS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,PS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,US=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,FS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,OS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,WS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,YS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:gx,alphahash_pars_fragment:vx,alphamap_fragment:_x,alphamap_pars_fragment:xx,alphatest_fragment:yx,alphatest_pars_fragment:Sx,aomap_fragment:Ex,aomap_pars_fragment:Mx,batching_pars_vertex:Tx,batching_vertex:wx,begin_vertex:Ax,beginnormal_vertex:Cx,bsdfs:Rx,iridescence_fragment:bx,bumpmap_pars_fragment:Px,clipping_planes_fragment:Lx,clipping_planes_pars_fragment:Dx,clipping_planes_pars_vertex:Ix,clipping_planes_vertex:Nx,color_fragment:Ux,color_pars_fragment:Fx,color_pars_vertex:Ox,color_vertex:kx,common:Bx,cube_uv_reflection_fragment:zx,defaultnormal_vertex:Hx,displacementmap_pars_vertex:Vx,displacementmap_vertex:Gx,emissivemap_fragment:Wx,emissivemap_pars_fragment:Xx,colorspace_fragment:jx,colorspace_pars_fragment:Yx,envmap_fragment:qx,envmap_common_pars_fragment:$x,envmap_pars_fragment:Kx,envmap_pars_vertex:Zx,envmap_physical_pars_fragment:ly,envmap_vertex:Qx,fog_vertex:Jx,fog_pars_vertex:ey,fog_fragment:ty,fog_pars_fragment:ny,gradientmap_pars_fragment:iy,lightmap_pars_fragment:ry,lights_lambert_fragment:sy,lights_lambert_pars_fragment:oy,lights_pars_begin:ay,lights_toon_fragment:uy,lights_toon_pars_fragment:cy,lights_phong_fragment:fy,lights_phong_pars_fragment:dy,lights_physical_fragment:hy,lights_physical_pars_fragment:py,lights_fragment_begin:my,lights_fragment_maps:gy,lights_fragment_end:vy,logdepthbuf_fragment:_y,logdepthbuf_pars_fragment:xy,logdepthbuf_pars_vertex:yy,logdepthbuf_vertex:Sy,map_fragment:Ey,map_pars_fragment:My,map_particle_fragment:Ty,map_particle_pars_fragment:wy,metalnessmap_fragment:Ay,metalnessmap_pars_fragment:Cy,morphinstance_vertex:Ry,morphcolor_vertex:by,morphnormal_vertex:Py,morphtarget_pars_vertex:Ly,morphtarget_vertex:Dy,normal_fragment_begin:Iy,normal_fragment_maps:Ny,normal_pars_fragment:Uy,normal_pars_vertex:Fy,normal_vertex:Oy,normalmap_pars_fragment:ky,clearcoat_normal_fragment_begin:By,clearcoat_normal_fragment_maps:zy,clearcoat_pars_fragment:Hy,iridescence_pars_fragment:Vy,opaque_fragment:Gy,packing:Wy,premultiplied_alpha_fragment:Xy,project_vertex:jy,dithering_fragment:Yy,dithering_pars_fragment:qy,roughnessmap_fragment:$y,roughnessmap_pars_fragment:Ky,shadowmap_pars_fragment:Zy,shadowmap_pars_vertex:Qy,shadowmap_vertex:Jy,shadowmask_pars_fragment:eS,skinbase_vertex:tS,skinning_pars_vertex:nS,skinning_vertex:iS,skinnormal_vertex:rS,specularmap_fragment:sS,specularmap_pars_fragment:oS,tonemapping_fragment:aS,tonemapping_pars_fragment:lS,transmission_fragment:uS,transmission_pars_fragment:cS,uv_pars_fragment:fS,uv_pars_vertex:dS,uv_vertex:hS,worldpos_vertex:pS,background_vert:mS,background_frag:gS,backgroundCube_vert:vS,backgroundCube_frag:_S,cube_vert:xS,cube_frag:yS,depth_vert:SS,depth_frag:ES,distanceRGBA_vert:MS,distanceRGBA_frag:TS,equirect_vert:wS,equirect_frag:AS,linedashed_vert:CS,linedashed_frag:RS,meshbasic_vert:bS,meshbasic_frag:PS,meshlambert_vert:LS,meshlambert_frag:DS,meshmatcap_vert:IS,meshmatcap_frag:NS,meshnormal_vert:US,meshnormal_frag:FS,meshphong_vert:OS,meshphong_frag:kS,meshphysical_vert:BS,meshphysical_frag:zS,meshtoon_vert:HS,meshtoon_frag:VS,points_vert:GS,points_frag:WS,shadow_vert:XS,shadow_frag:jS,sprite_vert:YS,sprite_frag:qS},Pe={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},_i={basic:{uniforms:wn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:wn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:wn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:wn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:wn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:wn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:wn([Pe.points,Pe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:wn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:wn([Pe.common,Pe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:wn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:wn([Pe.sprite,Pe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:wn([Pe.common,Pe.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:wn([Pe.lights,Pe.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};_i.physical={uniforms:wn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const yl={r:0,b:0,g:0},Xr=new Wi,$S=new jt;function KS(s,e,n,r,a,l,c){const d=new Et(0);let h=l===!0?0:1,m,g,v=null,x=0,S=null;function T(I){let b=I.isScene===!0?I.background:null;return b&&b.isTexture&&(b=(I.backgroundBlurriness>0?n:e).get(b)),b}function w(I){let b=!1;const j=T(I);j===null?_(d,h):j&&j.isColor&&(_(j,1),b=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,c):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(I,b){const j=T(b);j&&(j.isCubeTexture||j.mapping===Ol)?(g===void 0&&(g=new Hi(new Xo(1,1,1),new Ar({name:"BackgroundCubeMaterial",uniforms:js(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,U,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Xr.copy(b.backgroundRotation),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,j.isCubeTexture&&j.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),g.material.uniforms.envMap.value=j,g.material.uniforms.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4($S.makeRotationFromEuler(Xr)),g.material.toneMapped=Tt.getTransfer(j.colorSpace)!==bt,(v!==j||x!==j.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,v=j,x=j.version,S=s.toneMapping),g.layers.enableAll(),I.unshift(g,g.geometry,g.material,0,0,null)):j&&j.isTexture&&(m===void 0&&(m=new Hi(new Bl(2,2),new Ar({name:"BackgroundMaterial",uniforms:js(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=j,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(j.colorSpace)!==bt,j.matrixAutoUpdate===!0&&j.updateMatrix(),m.material.uniforms.uvTransform.value.copy(j.matrix),(v!==j||x!==j.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,v=j,x=j.version,S=s.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function _(I,b){I.getRGB(yl,Sg(s)),r.buffers.color.setClear(yl.r,yl.g,yl.b,b,c)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(I,b=1){d.set(I),h=b,_(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,_(d,h)},render:w,addToRenderList:y,dispose:N}}function ZS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let l=a,c=!1;function d(C,z,re,ee,de){let ue=!1;const le=v(ee,re,z);l!==le&&(l=le,m(l.object)),ue=S(C,ee,re,de),ue&&T(C,ee,re,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(ue||c)&&(c=!1,b(C,z,re,ee),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function h(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function v(C,z,re){const ee=re.wireframe===!0;let de=r[C.id];de===void 0&&(de={},r[C.id]=de);let ue=de[z.id];ue===void 0&&(ue={},de[z.id]=ue);let le=ue[ee];return le===void 0&&(le=x(h()),ue[ee]=le),le}function x(C){const z=[],re=[],ee=[];for(let de=0;de<n;de++)z[de]=0,re[de]=0,ee[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:re,attributeDivisors:ee,object:C,attributes:{},index:null}}function S(C,z,re,ee){const de=l.attributes,ue=z.attributes;let le=0;const oe=re.getAttributes();for(const B in oe)if(oe[B].location>=0){const F=de[B];let R=ue[B];if(R===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(R=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(R=C.instanceColor)),F===void 0||F.attribute!==R||R&&F.data!==R.data)return!0;le++}return l.attributesNum!==le||l.index!==ee}function T(C,z,re,ee){const de={},ue=z.attributes;let le=0;const oe=re.getAttributes();for(const B in oe)if(oe[B].location>=0){let F=ue[B];F===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(F=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(F=C.instanceColor));const R={};R.attribute=F,F&&F.data&&(R.data=F.data),de[B]=R,le++}l.attributes=de,l.attributesNum=le,l.index=ee}function w(){const C=l.newAttributes;for(let z=0,re=C.length;z<re;z++)C[z]=0}function y(C){_(C,0)}function _(C,z){const re=l.newAttributes,ee=l.enabledAttributes,de=l.attributeDivisors;re[C]=1,ee[C]===0&&(s.enableVertexAttribArray(C),ee[C]=1),de[C]!==z&&(s.vertexAttribDivisor(C,z),de[C]=z)}function N(){const C=l.newAttributes,z=l.enabledAttributes;for(let re=0,ee=z.length;re<ee;re++)z[re]!==C[re]&&(s.disableVertexAttribArray(re),z[re]=0)}function I(C,z,re,ee,de,ue,le){le===!0?s.vertexAttribIPointer(C,z,re,de,ue):s.vertexAttribPointer(C,z,re,ee,de,ue)}function b(C,z,re,ee){w();const de=ee.attributes,ue=re.getAttributes(),le=z.defaultAttributeValues;for(const oe in ue){const B=ue[oe];if(B.location>=0){let ae=de[oe];if(ae===void 0&&(oe==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),oe==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor)),ae!==void 0){const F=ae.normalized,R=ae.itemSize,W=e.get(ae);if(W===void 0)continue;const Me=W.buffer,$=W.type,ce=W.bytesPerElement,_e=$===s.INT||$===s.UNSIGNED_INT||ae.gpuType===Kf;if(ae.isInterleavedBufferAttribute){const ge=ae.data,we=ge.stride,He=ae.offset;if(ge.isInstancedInterleavedBuffer){for(let Ue=0;Ue<B.locationSize;Ue++)_(B.location+Ue,ge.meshPerAttribute);C.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ue=0;Ue<B.locationSize;Ue++)y(B.location+Ue);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let Ue=0;Ue<B.locationSize;Ue++)I(B.location+Ue,R/B.locationSize,$,F,we*ce,(He+R/B.locationSize*Ue)*ce,_e)}else{if(ae.isInstancedBufferAttribute){for(let ge=0;ge<B.locationSize;ge++)_(B.location+ge,ae.meshPerAttribute);C.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ge=0;ge<B.locationSize;ge++)y(B.location+ge);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let ge=0;ge<B.locationSize;ge++)I(B.location+ge,R/B.locationSize,$,F,R*ce,R/B.locationSize*ge*ce,_e)}}else if(le!==void 0){const F=le[oe];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(B.location,F);break;case 3:s.vertexAttrib3fv(B.location,F);break;case 4:s.vertexAttrib4fv(B.location,F);break;default:s.vertexAttrib1fv(B.location,F)}}}}N()}function j(){q();for(const C in r){const z=r[C];for(const re in z){const ee=z[re];for(const de in ee)g(ee[de].object),delete ee[de];delete z[re]}delete r[C]}}function H(C){if(r[C.id]===void 0)return;const z=r[C.id];for(const re in z){const ee=z[re];for(const de in ee)g(ee[de].object),delete ee[de];delete z[re]}delete r[C.id]}function U(C){for(const z in r){const re=r[z];if(re[C.id]===void 0)continue;const ee=re[C.id];for(const de in ee)g(ee[de].object),delete ee[de];delete re[C.id]}}function q(){P(),c=!0,l!==a&&(l=a,m(l.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:q,resetDefaultState:P,dispose:j,releaseStatesOfGeometry:H,releaseStatesOfProgram:U,initAttributes:w,enableAttribute:y,disableUnusedAttributes:N}}function QS(s,e,n){let r;function a(m){r=m}function l(m,g){s.drawArrays(r,m,g),n.update(g,r,1)}function c(m,g,v){v!==0&&(s.drawArraysInstanced(r,m,g,v),n.update(g,r,v))}function d(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,v);let S=0;for(let T=0;T<v;T++)S+=g[T];n.update(S,r,1)}function h(m,g,v,x){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<m.length;T++)c(m[T],g[T],x[T]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,g,0,x,0,v);let T=0;for(let w=0;w<v;w++)T+=g[w]*x[w];n.update(T,r,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function JS(s,e,n,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(U){return!(U!==ci&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const q=U===zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Gi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Bi&&!q)}function h(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=h(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),j=T>0,H=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:N,maxVaryings:I,maxFragmentUniforms:b,vertexTextures:j,maxSamples:H}}function eE(s){const e=this;let n=null,r=0,a=!1,l=!1;const c=new Yr,d=new ut,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||r!==0||a;return a=x,r=v.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,x){n=g(v,x,0)},this.setState=function(v,x,S){const T=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,_=s.get(v);if(!a||T===null||T.length===0||l&&!y)l?g(null):m();else{const N=l?0:r,I=N*4;let b=_.clippingState||null;h.value=b,b=g(T,x,I,S);for(let j=0;j!==I;++j)b[j]=n[j];_.clippingState=b,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=N}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,S,T){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=h.value,T!==!0||y===null){const _=S+w*4,N=x.matrixWorldInverse;d.getNormalMatrix(N),(y===null||y.length<_)&&(y=new Float32Array(_));for(let I=0,b=S;I!==w;++I,b+=4)c.copy(v[I]).applyMatrix4(N,d),c.normal.toArray(y,b),y[b+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function tE(s){let e=new WeakMap;function n(c,d){return d===pf?c.mapping=Gs:d===mf&&(c.mapping=Ws),c}function r(c){if(c&&c.isTexture){const d=c.mapping;if(d===pf||d===mf)if(e.has(c)){const h=e.get(c).texture;return n(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const m=new ex(h.height);return m.fromEquirectangularTexture(s,c),e.set(c,m),c.addEventListener("dispose",a),n(m.texture,c.mapping)}else return null}}return c}function a(c){const d=c.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Bs=4,dm=[.125,.215,.35,.446,.526,.582],Kr=20,Yc=new dx,hm=new Et;let qc=null,$c=0,Kc=0,Zc=!1;const qr=(1+Math.sqrt(5))/2,ks=1/qr,pm=[new ie(-qr,ks,0),new ie(qr,ks,0),new ie(-ks,0,qr),new ie(ks,0,qr),new ie(0,qr,-ks),new ie(0,qr,ks),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)],nE=new ie;class mm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100,l={}){const{size:c=256,position:d=nE}=l;qc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,a,h,d),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_m(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qc,$c,Kc),this._renderer.xr.enabled=Zc,e.scissorTest=!1,Sl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:zo,format:ci,colorSpace:Xs,depthBuffer:!1},a=gm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gm(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iE(l)),this._blurMaterial=rE(l,e,n)}return a}_compileMaterial(e){const n=new Hi(this._lodPlanes[0],e);this._renderer.compile(n,Yc)}_sceneToCubeUV(e,n,r,a,l){const h=new Jn(90,1,n,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,S=v.toneMapping;v.getClearColor(hm),v.toneMapping=Mr,v.autoClear=!1;const T=new _g({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),w=new Hi(new Xo,T);let y=!1;const _=e.background;_?_.isColor&&(T.color.copy(_),e.background=null,y=!0):(T.color.copy(hm),y=!0);for(let N=0;N<6;N++){const I=N%3;I===0?(h.up.set(0,m[N],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+g[N],l.y,l.z)):I===1?(h.up.set(0,0,m[N]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+g[N],l.z)):(h.up.set(0,m[N],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+g[N]));const b=this._cubeSize;Sl(a,I*b,N>2?b:0,b,b),v.setRenderTarget(a),y&&v.render(w,h),v.render(e,h)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=S,v.autoClear=x,e.background=_}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Gs||e.mapping===Ws;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=_m()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vm());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new Hi(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;Sl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(c,Yc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=pm[(a-l-1)%pm.length];this._blur(e,l-1,l,c,d)}n.autoClear=r}_blur(e,n,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,n,r,a,l,c,d){const h=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Hi(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Kr-1),w=l/T,y=isFinite(l)?1+Math.floor(g*w):Kr;y>Kr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Kr}`);const _=[];let N=0;for(let U=0;U<Kr;++U){const q=U/w,P=Math.exp(-q*q/2);_.push(P),U===0?N+=P:U<y&&(N+=2*P)}for(let U=0;U<_.length;U++)_[U]=_[U]/N;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=c==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:I}=this;x.dTheta.value=T,x.mipInt.value=I-r;const b=this._sizeLods[a],j=3*b*(a>I-Bs?a-I+Bs:0),H=4*(this._cubeSize-b);Sl(n,j,H,3*b,2*b),h.setRenderTarget(n),h.render(v,Yc)}}function iE(s){const e=[],n=[],r=[];let a=s;const l=s-Bs+1+dm.length;for(let c=0;c<l;c++){const d=Math.pow(2,a);n.push(d);let h=1/d;c>s-Bs?h=dm[c-s+Bs-1]:c===0&&(h=0),r.push(h);const m=1/(d-2),g=-m,v=1+m,x=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,T=6,w=3,y=2,_=1,N=new Float32Array(w*T*S),I=new Float32Array(y*T*S),b=new Float32Array(_*T*S);for(let H=0;H<S;H++){const U=H%3*2/3-1,q=H>2?0:-1,P=[U,q,0,U+2/3,q,0,U+2/3,q+1,0,U,q,0,U+2/3,q+1,0,U,q+1,0];N.set(P,w*T*H),I.set(x,y*T*H);const C=[H,H,H,H,H,H];b.set(C,_*T*H)}const j=new Xi;j.setAttribute("position",new yi(N,w)),j.setAttribute("uv",new yi(I,y)),j.setAttribute("faceIndex",new yi(b,_)),e.push(j),a>Bs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function gm(s,e,n){const r=new es(s,e,n);return r.texture.mapping=Ol,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Sl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function rE(s,e,n){const r=new Float32Array(Kr),a=new ie(0,1,0);return new Ar({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function vm(){return new Ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function _m(){return new Ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function rd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sE(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const h=d.mapping,m=h===pf||h===mf,g=h===Gs||h===Ws;if(m||g){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new mm(s)),v=m?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return m&&S&&S.height>0||g&&S&&a(S)?(n===null&&(n=new mm(s)),v=m?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",l),v.texture):null}}}return d}function a(d){let h=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&h++;return h===m}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:c}}function oE(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Rl("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function aE(s,e,n,r){const a={},l=new WeakMap;function c(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",c),delete a[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(v,x){return a[x.id]===!0||(x.addEventListener("dispose",c),a[x.id]=!0,n.memory.geometries++),x}function h(v){const x=v.attributes;for(const S in x)e.update(x[S],s.ARRAY_BUFFER)}function m(v){const x=[],S=v.index,T=v.attributes.position;let w=0;if(S!==null){const N=S.array;w=S.version;for(let I=0,b=N.length;I<b;I+=3){const j=N[I+0],H=N[I+1],U=N[I+2];x.push(j,H,H,U,U,j)}}else if(T!==void 0){const N=T.array;w=T.version;for(let I=0,b=N.length/3-1;I<b;I+=3){const j=I+0,H=I+1,U=I+2;x.push(j,H,H,U,U,j)}}else return;const y=new(hg(x)?yg:xg)(x,1);y.version=w;const _=l.get(v);_&&e.remove(_),l.set(v,y)}function g(v){const x=l.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&m(v)}else m(v);return l.get(v)}return{get:d,update:h,getWireframeAttribute:g}}function lE(s,e,n){let r;function a(x){r=x}let l,c;function d(x){l=x.type,c=x.bytesPerElement}function h(x,S){s.drawElements(r,S,l,x*c),n.update(S,r,1)}function m(x,S,T){T!==0&&(s.drawElementsInstanced(r,S,l,x*c,T),n.update(S,r,T))}function g(x,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,x,0,T);let y=0;for(let _=0;_<T;_++)y+=S[_];n.update(y,r,1)}function v(x,S,T,w){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)m(x[_]/c,S[_],w[_]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,x,0,w,0,T);let _=0;for(let N=0;N<T;N++)_+=S[N]*w[N];n.update(_,r,1)}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function uE(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,d){switch(n.calls++,c){case s.TRIANGLES:n.triangles+=d*(l/3);break;case s.LINES:n.lines+=d*(l/2);break;case s.LINE_STRIP:n.lines+=d*(l-1);break;case s.LINE_LOOP:n.lines+=d*l;break;case s.POINTS:n.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function cE(s,e,n){const r=new WeakMap,a=new Xt;function l(c,d,h){const m=c.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let C=function(){q.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var S=C;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],I=d.morphAttributes.color||[];let b=0;T===!0&&(b=1),w===!0&&(b=2),y===!0&&(b=3);let j=d.attributes.position.count*b,H=1;j>e.maxTextureSize&&(H=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const U=new Float32Array(j*H*4*v),q=new pg(U,j,H,v);q.type=Bi,q.needsUpdate=!0;const P=b*4;for(let z=0;z<v;z++){const re=_[z],ee=N[z],de=I[z],ue=j*H*4*z;for(let le=0;le<re.count;le++){const oe=le*P;T===!0&&(a.fromBufferAttribute(re,le),U[ue+oe+0]=a.x,U[ue+oe+1]=a.y,U[ue+oe+2]=a.z,U[ue+oe+3]=0),w===!0&&(a.fromBufferAttribute(ee,le),U[ue+oe+4]=a.x,U[ue+oe+5]=a.y,U[ue+oe+6]=a.z,U[ue+oe+7]=0),y===!0&&(a.fromBufferAttribute(de,le),U[ue+oe+8]=a.x,U[ue+oe+9]=a.y,U[ue+oe+10]=a.z,U[ue+oe+11]=de.itemSize===4?a.w:1)}}x={count:v,texture:q,size:new Lt(j,H)},r.set(d,x),d.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,n);else{let T=0;for(let y=0;y<m.length;y++)T+=m[y];const w=d.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",w),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function fE(s,e,n,r){let a=new WeakMap;function l(h){const m=r.render.frame,g=h.geometry,v=e.get(h,g);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return v}function c(){a=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:l,dispose:c}}const Rg=new An,xm=new Ag(1,1),bg=new pg,Pg=new O0,Lg=new Mg,ym=[],Sm=[],Em=new Float32Array(16),Mm=new Float32Array(9),Tm=new Float32Array(4);function qs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let l=ym[a];if(l===void 0&&(l=new Float32Array(a),ym[a]=l),e!==0){r.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=n,s[c].toArray(l,d)}return l}function en(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function tn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function zl(s,e){let n=Sm[e];n===void 0&&(n=new Int32Array(e),Sm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function dE(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function hE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2fv(this.addr,e),tn(n,e)}}function pE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(en(n,e))return;s.uniform3fv(this.addr,e),tn(n,e)}}function mE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4fv(this.addr,e),tn(n,e)}}function gE(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;Tm.set(r),s.uniformMatrix2fv(this.addr,!1,Tm),tn(n,r)}}function vE(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;Mm.set(r),s.uniformMatrix3fv(this.addr,!1,Mm),tn(n,r)}}function _E(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;Em.set(r),s.uniformMatrix4fv(this.addr,!1,Em),tn(n,r)}}function xE(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function yE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2iv(this.addr,e),tn(n,e)}}function SE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;s.uniform3iv(this.addr,e),tn(n,e)}}function EE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4iv(this.addr,e),tn(n,e)}}function ME(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function TE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2uiv(this.addr,e),tn(n,e)}}function wE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;s.uniform3uiv(this.addr,e),tn(n,e)}}function AE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4uiv(this.addr,e),tn(n,e)}}function CE(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(xm.compareFunction=dg,l=xm):l=Rg,n.setTexture2D(e||l,a)}function RE(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Pg,a)}function bE(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Lg,a)}function PE(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||bg,a)}function LE(s){switch(s){case 5126:return dE;case 35664:return hE;case 35665:return pE;case 35666:return mE;case 35674:return gE;case 35675:return vE;case 35676:return _E;case 5124:case 35670:return xE;case 35667:case 35671:return yE;case 35668:case 35672:return SE;case 35669:case 35673:return EE;case 5125:return ME;case 36294:return TE;case 36295:return wE;case 36296:return AE;case 35678:case 36198:case 36298:case 36306:case 35682:return CE;case 35679:case 36299:case 36307:return RE;case 35680:case 36300:case 36308:case 36293:return bE;case 36289:case 36303:case 36311:case 36292:return PE}}function DE(s,e){s.uniform1fv(this.addr,e)}function IE(s,e){const n=qs(e,this.size,2);s.uniform2fv(this.addr,n)}function NE(s,e){const n=qs(e,this.size,3);s.uniform3fv(this.addr,n)}function UE(s,e){const n=qs(e,this.size,4);s.uniform4fv(this.addr,n)}function FE(s,e){const n=qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function OE(s,e){const n=qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function kE(s,e){const n=qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function BE(s,e){s.uniform1iv(this.addr,e)}function zE(s,e){s.uniform2iv(this.addr,e)}function HE(s,e){s.uniform3iv(this.addr,e)}function VE(s,e){s.uniform4iv(this.addr,e)}function GE(s,e){s.uniform1uiv(this.addr,e)}function WE(s,e){s.uniform2uiv(this.addr,e)}function XE(s,e){s.uniform3uiv(this.addr,e)}function jE(s,e){s.uniform4uiv(this.addr,e)}function YE(s,e,n){const r=this.cache,a=e.length,l=zl(n,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let c=0;c!==a;++c)n.setTexture2D(e[c]||Rg,l[c])}function qE(s,e,n){const r=this.cache,a=e.length,l=zl(n,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let c=0;c!==a;++c)n.setTexture3D(e[c]||Pg,l[c])}function $E(s,e,n){const r=this.cache,a=e.length,l=zl(n,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let c=0;c!==a;++c)n.setTextureCube(e[c]||Lg,l[c])}function KE(s,e,n){const r=this.cache,a=e.length,l=zl(n,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let c=0;c!==a;++c)n.setTexture2DArray(e[c]||bg,l[c])}function ZE(s){switch(s){case 5126:return DE;case 35664:return IE;case 35665:return NE;case 35666:return UE;case 35674:return FE;case 35675:return OE;case 35676:return kE;case 5124:case 35670:return BE;case 35667:case 35671:return zE;case 35668:case 35672:return HE;case 35669:case 35673:return VE;case 5125:return GE;case 36294:return WE;case 36295:return XE;case 36296:return jE;case 35678:case 36198:case 36298:case 36306:case 35682:return YE;case 35679:case 36299:case 36307:return qE;case 35680:case 36300:case 36308:case 36293:return $E;case 36289:case 36303:case 36311:case 36292:return KE}}class QE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=LE(n.type)}}class JE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ZE(n.type)}}class eM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const d=a[l];d.setValue(e,n[d.id],r)}}}const Qc=/(\w+)(\])?(\[|\.)?/g;function wm(s,e){s.seq.push(e),s.map[e.id]=e}function tM(s,e,n){const r=s.name,a=r.length;for(Qc.lastIndex=0;;){const l=Qc.exec(r),c=Qc.lastIndex;let d=l[1];const h=l[2]==="]",m=l[3];if(h&&(d=d|0),m===void 0||m==="["&&c+2===a){wm(n,m===void 0?new QE(d,s,e):new JE(d,s,e));break}else{let v=n.map[d];v===void 0&&(v=new eM(d),wm(n,v)),n=v}}}class bl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(n,a),c=e.getUniformLocation(n,l.name);tM(l,c,this)}}setValue(e,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let l=0,c=n.length;l!==c;++l){const d=n[l],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in n&&r.push(c)}return r}}function Am(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const nM=37297;let iM=0;function rM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let c=a;c<l;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${n[c]}`)}return r.join(`
`)}const Cm=new ut;function sM(s){Tt._getMatrix(Cm,Tt.workingColorSpace,s);const e=`mat3( ${Cm.elements.map(n=>n.toFixed(4))} )`;switch(Tt.getTransfer(s)){case Ll:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Rm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return n.toUpperCase()+`

`+a+`

`+rM(s.getShaderSource(e),c)}else return a}function oM(s,e){const n=sM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function aM(s,e){let n;switch(e){case l0:n="Linear";break;case u0:n="Reinhard";break;case c0:n="Cineon";break;case f0:n="ACESFilmic";break;case h0:n="AgX";break;case p0:n="Neutral";break;case d0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const El=new ie;function lM(){Tt.getLuminanceCoefficients(El);const s=El.x.toFixed(4),e=El.y.toFixed(4),n=El.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function cM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function fM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),c=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),n[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:d}}return n}function No(s){return s!==""}function bm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dM=/^[ \t]*#include +<([\w\d./]+)>/gm;function jf(s){return s.replace(dM,pM)}const hM=new Map;function pM(s,e){let n=ct[e];if(n===void 0){const r=hM.get(e);if(r!==void 0)n=ct[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return jf(n)}const mM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lm(s){return s.replace(mM,gM)}function gM(s,e,n,r){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Dm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===tg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===H_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function _M(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Gs:case Ws:e="ENVMAP_TYPE_CUBE";break;case Ol:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function yM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ng:e="ENVMAP_BLENDING_MULTIPLY";break;case o0:e="ENVMAP_BLENDING_MIX";break;case a0:e="ENVMAP_BLENDING_ADD";break}return e}function SM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function EM(s,e,n,r){const a=s.getContext(),l=n.defines;let c=n.vertexShader,d=n.fragmentShader;const h=vM(n),m=_M(n),g=xM(n),v=yM(n),x=SM(n),S=uM(n),T=cM(l),w=a.createProgram();let y,_,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(No).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(No).join(`
`),_.length>0&&(_+=`
`)):(y=[Dm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),_=[Dm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mr?"#define TONE_MAPPING":"",n.toneMapping!==Mr?ct.tonemapping_pars_fragment:"",n.toneMapping!==Mr?aM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,oM("linearToOutputTexel",n.outputColorSpace),lM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(No).join(`
`)),c=jf(c),c=bm(c,n),c=Pm(c,n),d=jf(d),d=bm(d,n),d=Pm(d,n),c=Lm(c),d=Lm(d),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",n.glslVersion===Wp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const I=N+y+c,b=N+_+d,j=Am(a,a.VERTEX_SHADER,I),H=Am(a,a.FRAGMENT_SHADER,b);a.attachShader(w,j),a.attachShader(w,H),n.index0AttributeName!==void 0?a.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function U(z){if(s.debug.checkShaderErrors){const re=a.getProgramInfoLog(w).trim(),ee=a.getShaderInfoLog(j).trim(),de=a.getShaderInfoLog(H).trim();let ue=!0,le=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(ue=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,w,j,H);else{const oe=Rm(a,j,"vertex"),B=Rm(a,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+re+`
`+oe+`
`+B)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(ee===""||de==="")&&(le=!1);le&&(z.diagnostics={runnable:ue,programLog:re,vertexShader:{log:ee,prefix:y},fragmentShader:{log:de,prefix:_}})}a.deleteShader(j),a.deleteShader(H),q=new bl(a,w),P=fM(a,w)}let q;this.getUniforms=function(){return q===void 0&&U(this),q};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(w,nM)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=iM++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=j,this.fragmentShader=H,this}let MM=0;class TM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new wM(e),n.set(e,r)),r}}class wM{constructor(e){this.id=MM++,this.code=e,this.usedTimes=0}}function AM(s,e,n,r,a,l,c){const d=new gg,h=new TM,m=new Set,g=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(P){return m.add(P),P===0?"uv":`uv${P}`}function y(P,C,z,re,ee){const de=re.fog,ue=ee.geometry,le=P.isMeshStandardMaterial?re.environment:null,oe=(P.isMeshStandardMaterial?n:e).get(P.envMap||le),B=oe&&oe.mapping===Ol?oe.image.height:null,ae=T[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const F=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,R=F!==void 0?F.length:0;let W=0;ue.morphAttributes.position!==void 0&&(W=1),ue.morphAttributes.normal!==void 0&&(W=2),ue.morphAttributes.color!==void 0&&(W=3);let Me,$,ce,_e;if(ae){const xt=_i[ae];Me=xt.vertexShader,$=xt.fragmentShader}else Me=P.vertexShader,$=P.fragmentShader,h.update(P),ce=h.getVertexShaderID(P),_e=h.getFragmentShaderID(P);const ge=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),He=ee.isInstancedMesh===!0,Ue=ee.isBatchedMesh===!0,tt=!!P.map,wt=!!P.matcap,at=!!oe,k=!!P.aoMap,yn=!!P.lightMap,pt=!!P.bumpMap,ft=!!P.normalMap,Ye=!!P.displacementMap,Rt=!!P.emissiveMap,Xe=!!P.metalnessMap,L=!!P.roughnessMap,M=P.anisotropy>0,J=P.clearcoat>0,pe=P.dispersion>0,ye=P.iridescence>0,he=P.sheen>0,We=P.transmission>0,Ce=M&&!!P.anisotropyMap,Ke=J&&!!P.clearcoatMap,$e=J&&!!P.clearcoatNormalMap,Se=J&&!!P.clearcoatRoughnessMap,Oe=ye&&!!P.iridescenceMap,et=ye&&!!P.iridescenceThicknessMap,nt=he&&!!P.sheenColorMap,ke=he&&!!P.sheenRoughnessMap,dt=!!P.specularMap,st=!!P.specularColorMap,Ct=!!P.specularIntensityMap,G=We&&!!P.transmissionMap,Re=We&&!!P.thicknessMap,se=!!P.gradientMap,me=!!P.alphaMap,De=P.alphaTest>0,Le=!!P.alphaHash,ot=!!P.extensions;let It=Mr;P.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(It=s.toneMapping);const Zt={shaderID:ae,shaderType:P.type,shaderName:P.name,vertexShader:Me,fragmentShader:$,defines:P.defines,customVertexShaderID:ce,customFragmentShaderID:_e,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Ue,batchingColor:Ue&&ee._colorsTexture!==null,instancing:He,instancingColor:He&&ee.instanceColor!==null,instancingMorph:He&&ee.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Xs,alphaToCoverage:!!P.alphaToCoverage,map:tt,matcap:wt,envMap:at,envMapMode:at&&oe.mapping,envMapCubeUVHeight:B,aoMap:k,lightMap:yn,bumpMap:pt,normalMap:ft,displacementMap:x&&Ye,emissiveMap:Rt,normalMapObjectSpace:ft&&P.normalMapType===x0,normalMapTangentSpace:ft&&P.normalMapType===_0,metalnessMap:Xe,roughnessMap:L,anisotropy:M,anisotropyMap:Ce,clearcoat:J,clearcoatMap:Ke,clearcoatNormalMap:$e,clearcoatRoughnessMap:Se,dispersion:pe,iridescence:ye,iridescenceMap:Oe,iridescenceThicknessMap:et,sheen:he,sheenColorMap:nt,sheenRoughnessMap:ke,specularMap:dt,specularColorMap:st,specularIntensityMap:Ct,transmission:We,transmissionMap:G,thicknessMap:Re,gradientMap:se,opaque:P.transparent===!1&&P.blending===zs&&P.alphaToCoverage===!1,alphaMap:me,alphaTest:De,alphaHash:Le,combine:P.combine,mapUv:tt&&w(P.map.channel),aoMapUv:k&&w(P.aoMap.channel),lightMapUv:yn&&w(P.lightMap.channel),bumpMapUv:pt&&w(P.bumpMap.channel),normalMapUv:ft&&w(P.normalMap.channel),displacementMapUv:Ye&&w(P.displacementMap.channel),emissiveMapUv:Rt&&w(P.emissiveMap.channel),metalnessMapUv:Xe&&w(P.metalnessMap.channel),roughnessMapUv:L&&w(P.roughnessMap.channel),anisotropyMapUv:Ce&&w(P.anisotropyMap.channel),clearcoatMapUv:Ke&&w(P.clearcoatMap.channel),clearcoatNormalMapUv:$e&&w(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&w(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&w(P.iridescenceMap.channel),iridescenceThicknessMapUv:et&&w(P.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&w(P.sheenColorMap.channel),sheenRoughnessMapUv:ke&&w(P.sheenRoughnessMap.channel),specularMapUv:dt&&w(P.specularMap.channel),specularColorMapUv:st&&w(P.specularColorMap.channel),specularIntensityMapUv:Ct&&w(P.specularIntensityMap.channel),transmissionMapUv:G&&w(P.transmissionMap.channel),thicknessMapUv:Re&&w(P.thicknessMap.channel),alphaMapUv:me&&w(P.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(ft||M),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!ue.attributes.uv&&(tt||me),fog:!!de,useFog:P.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:we,skinning:ee.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:W,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:tt&&P.map.isVideoTexture===!0&&Tt.getTransfer(P.map.colorSpace)===bt,decodeVideoTextureEmissive:Rt&&P.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(P.emissiveMap.colorSpace)===bt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===ki,flipSided:P.side===Fn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ot&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&P.extensions.multiDraw===!0||Ue)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Zt.vertexUv1s=m.has(1),Zt.vertexUv2s=m.has(2),Zt.vertexUv3s=m.has(3),m.clear(),Zt}function _(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const z in P.defines)C.push(z),C.push(P.defines[z]);return P.isRawShaderMaterial===!1&&(N(C,P),I(C,P),C.push(s.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function N(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function I(P,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),P.push(d.mask)}function b(P){const C=T[P.type];let z;if(C){const re=_i[C];z=K0.clone(re.uniforms)}else z=P.uniforms;return z}function j(P,C){let z;for(let re=0,ee=g.length;re<ee;re++){const de=g[re];if(de.cacheKey===C){z=de,++z.usedTimes;break}}return z===void 0&&(z=new EM(s,C,P,l),g.push(z)),z}function H(P){if(--P.usedTimes===0){const C=g.indexOf(P);g[C]=g[g.length-1],g.pop(),P.destroy()}}function U(P){h.remove(P)}function q(){h.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:b,acquireProgram:j,releaseProgram:H,releaseShaderCache:U,programs:g,dispose:q}}function CM(){let s=new WeakMap;function e(c){return s.has(c)}function n(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function a(c,d,h){s.get(c)[d]=h}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:l}}function RM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Im(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Nm(){const s=[];let e=0;const n=[],r=[],a=[];function l(){e=0,n.length=0,r.length=0,a.length=0}function c(v,x,S,T,w,y){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:S,groupOrder:T,renderOrder:v.renderOrder,z:w,group:y},s[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=S,_.groupOrder=T,_.renderOrder=v.renderOrder,_.z=w,_.group=y),e++,_}function d(v,x,S,T,w,y){const _=c(v,x,S,T,w,y);S.transmission>0?r.push(_):S.transparent===!0?a.push(_):n.push(_)}function h(v,x,S,T,w,y){const _=c(v,x,S,T,w,y);S.transmission>0?r.unshift(_):S.transparent===!0?a.unshift(_):n.unshift(_)}function m(v,x){n.length>1&&n.sort(v||RM),r.length>1&&r.sort(x||Im),a.length>1&&a.sort(x||Im)}function g(){for(let v=e,x=s.length;v<x;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:d,unshift:h,finish:g,sort:m}}function bM(){let s=new WeakMap;function e(r,a){const l=s.get(r);let c;return l===void 0?(c=new Nm,s.set(r,[c])):a>=l.length?(c=new Nm,l.push(c)):c=l[a],c}function n(){s=new WeakMap}return{get:e,dispose:n}}function PM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ie,color:new Et};break;case"SpotLight":n={position:new ie,direction:new ie,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ie,color:new Et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ie,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":n={color:new Et,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return s[e.id]=n,n}}}function LM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let DM=0;function IM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function NM(s){const e=new PM,n=LM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ie);const a=new ie,l=new jt,c=new jt;function d(m){let g=0,v=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,T=0,w=0,y=0,_=0,N=0,I=0,b=0,j=0,H=0,U=0;m.sort(IM);for(let P=0,C=m.length;P<C;P++){const z=m[P],re=z.color,ee=z.intensity,de=z.distance,ue=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)g+=re.r*ee,v+=re.g*ee,x+=re.b*ee;else if(z.isLightProbe){for(let le=0;le<9;le++)r.probe[le].addScaledVector(z.sh.coefficients[le],ee);U++}else if(z.isDirectionalLight){const le=e.get(z);if(le.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const oe=z.shadow,B=n.get(z);B.shadowIntensity=oe.intensity,B.shadowBias=oe.bias,B.shadowNormalBias=oe.normalBias,B.shadowRadius=oe.radius,B.shadowMapSize=oe.mapSize,r.directionalShadow[S]=B,r.directionalShadowMap[S]=ue,r.directionalShadowMatrix[S]=z.shadow.matrix,N++}r.directional[S]=le,S++}else if(z.isSpotLight){const le=e.get(z);le.position.setFromMatrixPosition(z.matrixWorld),le.color.copy(re).multiplyScalar(ee),le.distance=de,le.coneCos=Math.cos(z.angle),le.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),le.decay=z.decay,r.spot[w]=le;const oe=z.shadow;if(z.map&&(r.spotLightMap[j]=z.map,j++,oe.updateMatrices(z),z.castShadow&&H++),r.spotLightMatrix[w]=oe.matrix,z.castShadow){const B=n.get(z);B.shadowIntensity=oe.intensity,B.shadowBias=oe.bias,B.shadowNormalBias=oe.normalBias,B.shadowRadius=oe.radius,B.shadowMapSize=oe.mapSize,r.spotShadow[w]=B,r.spotShadowMap[w]=ue,b++}w++}else if(z.isRectAreaLight){const le=e.get(z);le.color.copy(re).multiplyScalar(ee),le.halfWidth.set(z.width*.5,0,0),le.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=le,y++}else if(z.isPointLight){const le=e.get(z);if(le.color.copy(z.color).multiplyScalar(z.intensity),le.distance=z.distance,le.decay=z.decay,z.castShadow){const oe=z.shadow,B=n.get(z);B.shadowIntensity=oe.intensity,B.shadowBias=oe.bias,B.shadowNormalBias=oe.normalBias,B.shadowRadius=oe.radius,B.shadowMapSize=oe.mapSize,B.shadowCameraNear=oe.camera.near,B.shadowCameraFar=oe.camera.far,r.pointShadow[T]=B,r.pointShadowMap[T]=ue,r.pointShadowMatrix[T]=z.shadow.matrix,I++}r.point[T]=le,T++}else if(z.isHemisphereLight){const le=e.get(z);le.skyColor.copy(z.color).multiplyScalar(ee),le.groundColor.copy(z.groundColor).multiplyScalar(ee),r.hemi[_]=le,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const q=r.hash;(q.directionalLength!==S||q.pointLength!==T||q.spotLength!==w||q.rectAreaLength!==y||q.hemiLength!==_||q.numDirectionalShadows!==N||q.numPointShadows!==I||q.numSpotShadows!==b||q.numSpotMaps!==j||q.numLightProbes!==U)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=y,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=b+j-H,r.spotLightMap.length=j,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=U,q.directionalLength=S,q.pointLength=T,q.spotLength=w,q.rectAreaLength=y,q.hemiLength=_,q.numDirectionalShadows=N,q.numPointShadows=I,q.numSpotShadows=b,q.numSpotMaps=j,q.numLightProbes=U,r.version=DM++)}function h(m,g){let v=0,x=0,S=0,T=0,w=0;const y=g.matrixWorldInverse;for(let _=0,N=m.length;_<N;_++){const I=m[_];if(I.isDirectionalLight){const b=r.directional[v];b.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(y),v++}else if(I.isSpotLight){const b=r.spot[S];b.position.setFromMatrixPosition(I.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(y),S++}else if(I.isRectAreaLight){const b=r.rectArea[T];b.position.setFromMatrixPosition(I.matrixWorld),b.position.applyMatrix4(y),c.identity(),l.copy(I.matrixWorld),l.premultiply(y),c.extractRotation(l),b.halfWidth.set(I.width*.5,0,0),b.halfHeight.set(0,I.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),T++}else if(I.isPointLight){const b=r.point[x];b.position.setFromMatrixPosition(I.matrixWorld),b.position.applyMatrix4(y),x++}else if(I.isHemisphereLight){const b=r.hemi[w];b.direction.setFromMatrixPosition(I.matrixWorld),b.direction.transformDirection(y),w++}}}return{setup:d,setupView:h,state:r}}function Um(s){const e=new NM(s),n=[],r=[];function a(g){m.camera=g,n.length=0,r.length=0}function l(g){n.push(g)}function c(g){r.push(g)}function d(){e.setup(n)}function h(g){e.setupView(n,g)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:h,pushLight:l,pushShadow:c}}function UM(s){let e=new WeakMap;function n(a,l=0){const c=e.get(a);let d;return c===void 0?(d=new Um(s),e.set(a,[d])):l>=c.length?(d=new Um(s),c.push(d)):d=c[l],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const FM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kM(s,e,n){let r=new Tg;const a=new Lt,l=new Lt,c=new Xt,d=new ox({depthPacking:v0}),h=new ax,m={},g=n.maxTextureSize,v={[wr]:Fn,[Fn]:wr,[ki]:ki},x=new Ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:FM,fragmentShader:OM}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const T=new Xi;T.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Hi(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tg;let _=this.type;this.render=function(H,U,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;const P=s.getRenderTarget(),C=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),re=s.state;re.setBlending(Er),re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const ee=_!==Oi&&this.type===Oi,de=_===Oi&&this.type!==Oi;for(let ue=0,le=H.length;ue<le;ue++){const oe=H[ue],B=oe.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const ae=B.getFrameExtents();if(a.multiply(ae),l.copy(B.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/ae.x),a.x=l.x*ae.x,B.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/ae.y),a.y=l.y*ae.y,B.mapSize.y=l.y)),B.map===null||ee===!0||de===!0){const R=this.type!==Oi?{minFilter:fi,magFilter:fi}:{};B.map!==null&&B.map.dispose(),B.map=new es(a.x,a.y,R),B.map.texture.name=oe.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const F=B.getViewportCount();for(let R=0;R<F;R++){const W=B.getViewport(R);c.set(l.x*W.x,l.y*W.y,l.x*W.z,l.y*W.w),re.viewport(c),B.updateMatrices(oe,R),r=B.getFrustum(),b(U,q,B.camera,oe,this.type)}B.isPointLightShadow!==!0&&this.type===Oi&&N(B,q),B.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(P,C,z)};function N(H,U){const q=e.update(w);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,S.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new es(a.x,a.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(U,null,q,x,w,null),S.uniforms.shadow_pass.value=H.mapPass.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(U,null,q,S,w,null)}function I(H,U,q,P){let C=null;const z=q.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(z!==void 0)C=z;else if(C=q.isPointLight===!0?h:d,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const re=C.uuid,ee=U.uuid;let de=m[re];de===void 0&&(de={},m[re]=de);let ue=de[ee];ue===void 0&&(ue=C.clone(),de[ee]=ue,U.addEventListener("dispose",j)),C=ue}if(C.visible=U.visible,C.wireframe=U.wireframe,P===Oi?C.side=U.shadowSide!==null?U.shadowSide:U.side:C.side=U.shadowSide!==null?U.shadowSide:v[U.side],C.alphaMap=U.alphaMap,C.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,C.map=U.map,C.clipShadows=U.clipShadows,C.clippingPlanes=U.clippingPlanes,C.clipIntersection=U.clipIntersection,C.displacementMap=U.displacementMap,C.displacementScale=U.displacementScale,C.displacementBias=U.displacementBias,C.wireframeLinewidth=U.wireframeLinewidth,C.linewidth=U.linewidth,q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const re=s.properties.get(C);re.light=q}return C}function b(H,U,q,P,C){if(H.visible===!1)return;if(H.layers.test(U.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===Oi)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,H.matrixWorld);const ee=e.update(H),de=H.material;if(Array.isArray(de)){const ue=ee.groups;for(let le=0,oe=ue.length;le<oe;le++){const B=ue[le],ae=de[B.materialIndex];if(ae&&ae.visible){const F=I(H,ae,P,C);H.onBeforeShadow(s,H,U,q,ee,F,B),s.renderBufferDirect(q,null,ee,F,H,B),H.onAfterShadow(s,H,U,q,ee,F,B)}}}else if(de.visible){const ue=I(H,de,P,C);H.onBeforeShadow(s,H,U,q,ee,ue,null),s.renderBufferDirect(q,null,ee,ue,H,null),H.onAfterShadow(s,H,U,q,ee,ue,null)}}const re=H.children;for(let ee=0,de=re.length;ee<de;ee++)b(re[ee],U,q,P,C)}function j(H){H.target.removeEventListener("dispose",j);for(const q in m){const P=m[q],C=H.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const BM={[af]:lf,[uf]:df,[cf]:hf,[Vs]:ff,[lf]:af,[df]:uf,[hf]:cf,[ff]:Vs};function zM(s,e){function n(){let G=!1;const Re=new Xt;let se=null;const me=new Xt(0,0,0,0);return{setMask:function(De){se!==De&&!G&&(s.colorMask(De,De,De,De),se=De)},setLocked:function(De){G=De},setClear:function(De,Le,ot,It,Zt){Zt===!0&&(De*=It,Le*=It,ot*=It),Re.set(De,Le,ot,It),me.equals(Re)===!1&&(s.clearColor(De,Le,ot,It),me.copy(Re))},reset:function(){G=!1,se=null,me.set(-1,0,0,0)}}}function r(){let G=!1,Re=!1,se=null,me=null,De=null;return{setReversed:function(Le){if(Re!==Le){const ot=e.get("EXT_clip_control");Le?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT),Re=Le;const It=De;De=null,this.setClear(It)}},getReversed:function(){return Re},setTest:function(Le){Le?ge(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(Le){se!==Le&&!G&&(s.depthMask(Le),se=Le)},setFunc:function(Le){if(Re&&(Le=BM[Le]),me!==Le){switch(Le){case af:s.depthFunc(s.NEVER);break;case lf:s.depthFunc(s.ALWAYS);break;case uf:s.depthFunc(s.LESS);break;case Vs:s.depthFunc(s.LEQUAL);break;case cf:s.depthFunc(s.EQUAL);break;case ff:s.depthFunc(s.GEQUAL);break;case df:s.depthFunc(s.GREATER);break;case hf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=Le}},setLocked:function(Le){G=Le},setClear:function(Le){De!==Le&&(Re&&(Le=1-Le),s.clearDepth(Le),De=Le)},reset:function(){G=!1,se=null,me=null,De=null,Re=!1}}}function a(){let G=!1,Re=null,se=null,me=null,De=null,Le=null,ot=null,It=null,Zt=null;return{setTest:function(xt){G||(xt?ge(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(xt){Re!==xt&&!G&&(s.stencilMask(xt),Re=xt)},setFunc:function(xt,Cn,Sn){(se!==xt||me!==Cn||De!==Sn)&&(s.stencilFunc(xt,Cn,Sn),se=xt,me=Cn,De=Sn)},setOp:function(xt,Cn,Sn){(Le!==xt||ot!==Cn||It!==Sn)&&(s.stencilOp(xt,Cn,Sn),Le=xt,ot=Cn,It=Sn)},setLocked:function(xt){G=xt},setClear:function(xt){Zt!==xt&&(s.clearStencil(xt),Zt=xt)},reset:function(){G=!1,Re=null,se=null,me=null,De=null,Le=null,ot=null,It=null,Zt=null}}}const l=new n,c=new r,d=new a,h=new WeakMap,m=new WeakMap;let g={},v={},x=new WeakMap,S=[],T=null,w=!1,y=null,_=null,N=null,I=null,b=null,j=null,H=null,U=new Et(0,0,0),q=0,P=!1,C=null,z=null,re=null,ee=null,de=null;const ue=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,oe=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(B)[1]),le=oe>=1):B.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),le=oe>=2);let ae=null,F={};const R=s.getParameter(s.SCISSOR_BOX),W=s.getParameter(s.VIEWPORT),Me=new Xt().fromArray(R),$=new Xt().fromArray(W);function ce(G,Re,se,me){const De=new Uint8Array(4),Le=s.createTexture();s.bindTexture(G,Le),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ot=0;ot<se;ot++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(Re+ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return Le}const _e={};_e[s.TEXTURE_2D]=ce(s.TEXTURE_2D,s.TEXTURE_2D,1),_e[s.TEXTURE_CUBE_MAP]=ce(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[s.TEXTURE_2D_ARRAY]=ce(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_e[s.TEXTURE_3D]=ce(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ge(s.DEPTH_TEST),c.setFunc(Vs),pt(!1),ft(kp),ge(s.CULL_FACE),k(Er);function ge(G){g[G]!==!0&&(s.enable(G),g[G]=!0)}function we(G){g[G]!==!1&&(s.disable(G),g[G]=!1)}function He(G,Re){return v[G]!==Re?(s.bindFramebuffer(G,Re),v[G]=Re,G===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Re),G===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ue(G,Re){let se=S,me=!1;if(G){se=x.get(Re),se===void 0&&(se=[],x.set(Re,se));const De=G.textures;if(se.length!==De.length||se[0]!==s.COLOR_ATTACHMENT0){for(let Le=0,ot=De.length;Le<ot;Le++)se[Le]=s.COLOR_ATTACHMENT0+Le;se.length=De.length,me=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,me=!0);me&&s.drawBuffers(se)}function tt(G){return T!==G?(s.useProgram(G),T=G,!0):!1}const wt={[$r]:s.FUNC_ADD,[G_]:s.FUNC_SUBTRACT,[W_]:s.FUNC_REVERSE_SUBTRACT};wt[X_]=s.MIN,wt[j_]=s.MAX;const at={[Y_]:s.ZERO,[q_]:s.ONE,[$_]:s.SRC_COLOR,[sf]:s.SRC_ALPHA,[t0]:s.SRC_ALPHA_SATURATE,[J_]:s.DST_COLOR,[Z_]:s.DST_ALPHA,[K_]:s.ONE_MINUS_SRC_COLOR,[of]:s.ONE_MINUS_SRC_ALPHA,[e0]:s.ONE_MINUS_DST_COLOR,[Q_]:s.ONE_MINUS_DST_ALPHA,[n0]:s.CONSTANT_COLOR,[i0]:s.ONE_MINUS_CONSTANT_COLOR,[r0]:s.CONSTANT_ALPHA,[s0]:s.ONE_MINUS_CONSTANT_ALPHA};function k(G,Re,se,me,De,Le,ot,It,Zt,xt){if(G===Er){w===!0&&(we(s.BLEND),w=!1);return}if(w===!1&&(ge(s.BLEND),w=!0),G!==V_){if(G!==y||xt!==P){if((_!==$r||b!==$r)&&(s.blendEquation(s.FUNC_ADD),_=$r,b=$r),xt)switch(G){case zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bp:s.blendFunc(s.ONE,s.ONE);break;case zp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case zp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}N=null,I=null,j=null,H=null,U.set(0,0,0),q=0,y=G,P=xt}return}De=De||Re,Le=Le||se,ot=ot||me,(Re!==_||De!==b)&&(s.blendEquationSeparate(wt[Re],wt[De]),_=Re,b=De),(se!==N||me!==I||Le!==j||ot!==H)&&(s.blendFuncSeparate(at[se],at[me],at[Le],at[ot]),N=se,I=me,j=Le,H=ot),(It.equals(U)===!1||Zt!==q)&&(s.blendColor(It.r,It.g,It.b,Zt),U.copy(It),q=Zt),y=G,P=!1}function yn(G,Re){G.side===ki?we(s.CULL_FACE):ge(s.CULL_FACE);let se=G.side===Fn;Re&&(se=!se),pt(se),G.blending===zs&&G.transparent===!1?k(Er):k(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),l.setMask(G.colorWrite);const me=G.stencilWrite;d.setTest(me),me&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Rt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ge(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(G){C!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),C=G)}function ft(G){G!==B_?(ge(s.CULL_FACE),G!==z&&(G===kp?s.cullFace(s.BACK):G===z_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),z=G}function Ye(G){G!==re&&(le&&s.lineWidth(G),re=G)}function Rt(G,Re,se){G?(ge(s.POLYGON_OFFSET_FILL),(ee!==Re||de!==se)&&(s.polygonOffset(Re,se),ee=Re,de=se)):we(s.POLYGON_OFFSET_FILL)}function Xe(G){G?ge(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function L(G){G===void 0&&(G=s.TEXTURE0+ue-1),ae!==G&&(s.activeTexture(G),ae=G)}function M(G,Re,se){se===void 0&&(ae===null?se=s.TEXTURE0+ue-1:se=ae);let me=F[se];me===void 0&&(me={type:void 0,texture:void 0},F[se]=me),(me.type!==G||me.texture!==Re)&&(ae!==se&&(s.activeTexture(se),ae=se),s.bindTexture(G,Re||_e[G]),me.type=G,me.texture=Re)}function J(){const G=F[ae];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function pe(){try{s.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{s.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(){try{s.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(){try{s.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ce(){try{s.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ke(){try{s.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $e(){try{s.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{s.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{s.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{s.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function nt(G){Me.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Me.copy(G))}function ke(G){$.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),$.copy(G))}function dt(G,Re){let se=m.get(Re);se===void 0&&(se=new WeakMap,m.set(Re,se));let me=se.get(G);me===void 0&&(me=s.getUniformBlockIndex(Re,G.name),se.set(G,me))}function st(G,Re){const me=m.get(Re).get(G);h.get(Re)!==me&&(s.uniformBlockBinding(Re,me,G.__bindingPointIndex),h.set(Re,me))}function Ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ae=null,F={},v={},x=new WeakMap,S=[],T=null,w=!1,y=null,_=null,N=null,I=null,b=null,j=null,H=null,U=new Et(0,0,0),q=0,P=!1,C=null,z=null,re=null,ee=null,de=null,Me.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:ge,disable:we,bindFramebuffer:He,drawBuffers:Ue,useProgram:tt,setBlending:k,setMaterial:yn,setFlipSided:pt,setCullFace:ft,setLineWidth:Ye,setPolygonOffset:Rt,setScissorTest:Xe,activeTexture:L,bindTexture:M,unbindTexture:J,compressedTexImage2D:pe,compressedTexImage3D:ye,texImage2D:Oe,texImage3D:et,updateUBOMapping:dt,uniformBlockBinding:st,texStorage2D:$e,texStorage3D:Se,texSubImage2D:he,texSubImage3D:We,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ke,scissor:nt,viewport:ke,reset:Ct}}function HM(s,e,n,r,a,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Lt,g=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,M){return S?new OffscreenCanvas(L,M):Bo("canvas")}function w(L,M,J){let pe=1;const ye=Xe(L);if((ye.width>J||ye.height>J)&&(pe=J/Math.max(ye.width,ye.height)),pe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const he=Math.floor(pe*ye.width),We=Math.floor(pe*ye.height);v===void 0&&(v=T(he,We));const Ce=M?T(he,We):v;return Ce.width=he,Ce.height=We,Ce.getContext("2d").drawImage(L,0,0,he,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+he+"x"+We+")."),Ce}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),L;return L}function y(L){return L.generateMipmaps}function _(L){s.generateMipmap(L)}function N(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function I(L,M,J,pe,ye=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let he=M;if(M===s.RED&&(J===s.FLOAT&&(he=s.R32F),J===s.HALF_FLOAT&&(he=s.R16F),J===s.UNSIGNED_BYTE&&(he=s.R8)),M===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(he=s.R8UI),J===s.UNSIGNED_SHORT&&(he=s.R16UI),J===s.UNSIGNED_INT&&(he=s.R32UI),J===s.BYTE&&(he=s.R8I),J===s.SHORT&&(he=s.R16I),J===s.INT&&(he=s.R32I)),M===s.RG&&(J===s.FLOAT&&(he=s.RG32F),J===s.HALF_FLOAT&&(he=s.RG16F),J===s.UNSIGNED_BYTE&&(he=s.RG8)),M===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(he=s.RG8UI),J===s.UNSIGNED_SHORT&&(he=s.RG16UI),J===s.UNSIGNED_INT&&(he=s.RG32UI),J===s.BYTE&&(he=s.RG8I),J===s.SHORT&&(he=s.RG16I),J===s.INT&&(he=s.RG32I)),M===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(he=s.RGB8UI),J===s.UNSIGNED_SHORT&&(he=s.RGB16UI),J===s.UNSIGNED_INT&&(he=s.RGB32UI),J===s.BYTE&&(he=s.RGB8I),J===s.SHORT&&(he=s.RGB16I),J===s.INT&&(he=s.RGB32I)),M===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),J===s.UNSIGNED_INT&&(he=s.RGBA32UI),J===s.BYTE&&(he=s.RGBA8I),J===s.SHORT&&(he=s.RGBA16I),J===s.INT&&(he=s.RGBA32I)),M===s.RGB&&J===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),M===s.RGBA){const We=ye?Ll:Tt.getTransfer(pe);J===s.FLOAT&&(he=s.RGBA32F),J===s.HALF_FLOAT&&(he=s.RGBA16F),J===s.UNSIGNED_BYTE&&(he=We===bt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function b(L,M){let J;return L?M===null||M===Jr||M===Fo?J=s.DEPTH24_STENCIL8:M===Bi?J=s.DEPTH32F_STENCIL8:M===Uo&&(J=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Jr||M===Fo?J=s.DEPTH_COMPONENT24:M===Bi?J=s.DEPTH_COMPONENT32F:M===Uo&&(J=s.DEPTH_COMPONENT16),J}function j(L,M){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==fi&&L.minFilter!==xi?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function H(L){const M=L.target;M.removeEventListener("dispose",H),q(M),M.isVideoTexture&&g.delete(M)}function U(L){const M=L.target;M.removeEventListener("dispose",U),C(M)}function q(L){const M=r.get(L);if(M.__webglInit===void 0)return;const J=L.source,pe=x.get(J);if(pe){const ye=pe[M.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&P(L),Object.keys(pe).length===0&&x.delete(J)}r.remove(L)}function P(L){const M=r.get(L);s.deleteTexture(M.__webglTexture);const J=L.source,pe=x.get(J);delete pe[M.__cacheKey],c.memory.textures--}function C(L){const M=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(M.__webglFramebuffer[pe]))for(let ye=0;ye<M.__webglFramebuffer[pe].length;ye++)s.deleteFramebuffer(M.__webglFramebuffer[pe][ye]);else s.deleteFramebuffer(M.__webglFramebuffer[pe]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[pe])}else{if(Array.isArray(M.__webglFramebuffer))for(let pe=0;pe<M.__webglFramebuffer.length;pe++)s.deleteFramebuffer(M.__webglFramebuffer[pe]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let pe=0;pe<M.__webglColorRenderbuffer.length;pe++)M.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[pe]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const J=L.textures;for(let pe=0,ye=J.length;pe<ye;pe++){const he=r.get(J[pe]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),c.memory.textures--),r.remove(J[pe])}r.remove(L)}let z=0;function re(){z=0}function ee(){const L=z;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),z+=1,L}function de(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function ue(L,M){const J=r.get(L);if(L.isVideoTexture&&Ye(L),L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){const pe=L.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(J,L,M);return}}n.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+M)}function le(L,M){const J=r.get(L);if(L.version>0&&J.__version!==L.version){$(J,L,M);return}n.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+M)}function oe(L,M){const J=r.get(L);if(L.version>0&&J.__version!==L.version){$(J,L,M);return}n.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+M)}function B(L,M){const J=r.get(L);if(L.version>0&&J.__version!==L.version){ce(J,L,M);return}n.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+M)}const ae={[gf]:s.REPEAT,[Zr]:s.CLAMP_TO_EDGE,[vf]:s.MIRRORED_REPEAT},F={[fi]:s.NEAREST,[m0]:s.NEAREST_MIPMAP_NEAREST,[el]:s.NEAREST_MIPMAP_LINEAR,[xi]:s.LINEAR,[Mc]:s.LINEAR_MIPMAP_NEAREST,[Qr]:s.LINEAR_MIPMAP_LINEAR},R={[y0]:s.NEVER,[A0]:s.ALWAYS,[S0]:s.LESS,[dg]:s.LEQUAL,[E0]:s.EQUAL,[w0]:s.GEQUAL,[M0]:s.GREATER,[T0]:s.NOTEQUAL};function W(L,M){if(M.type===Bi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===xi||M.magFilter===Mc||M.magFilter===el||M.magFilter===Qr||M.minFilter===xi||M.minFilter===Mc||M.minFilter===el||M.minFilter===Qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ae[M.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ae[M.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ae[M.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,F[M.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,F[M.minFilter]),M.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,R[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===fi||M.minFilter!==el&&M.minFilter!==Qr||M.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function Me(L,M){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",H));const pe=M.source;let ye=x.get(pe);ye===void 0&&(ye={},x.set(pe,ye));const he=de(M);if(he!==L.__cacheKey){ye[he]===void 0&&(ye[he]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,J=!0),ye[he].usedTimes++;const We=ye[L.__cacheKey];We!==void 0&&(ye[L.__cacheKey].usedTimes--,We.usedTimes===0&&P(M)),L.__cacheKey=he,L.__webglTexture=ye[he].texture}return J}function $(L,M,J){let pe=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(pe=s.TEXTURE_3D);const ye=Me(L,M),he=M.source;n.bindTexture(pe,L.__webglTexture,s.TEXTURE0+J);const We=r.get(he);if(he.version!==We.__version||ye===!0){n.activeTexture(s.TEXTURE0+J);const Ce=Tt.getPrimaries(Tt.workingColorSpace),Ke=M.colorSpace===Sr?null:Tt.getPrimaries(M.colorSpace),$e=M.colorSpace===Sr||Ce===Ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Se=w(M.image,!1,a.maxTextureSize);Se=Rt(M,Se);const Oe=l.convert(M.format,M.colorSpace),et=l.convert(M.type);let nt=I(M.internalFormat,Oe,et,M.colorSpace,M.isVideoTexture);W(pe,M);let ke;const dt=M.mipmaps,st=M.isVideoTexture!==!0,Ct=We.__version===void 0||ye===!0,G=he.dataReady,Re=j(M,Se);if(M.isDepthTexture)nt=b(M.format===ko,M.type),Ct&&(st?n.texStorage2D(s.TEXTURE_2D,1,nt,Se.width,Se.height):n.texImage2D(s.TEXTURE_2D,0,nt,Se.width,Se.height,0,Oe,et,null));else if(M.isDataTexture)if(dt.length>0){st&&Ct&&n.texStorage2D(s.TEXTURE_2D,Re,nt,dt[0].width,dt[0].height);for(let se=0,me=dt.length;se<me;se++)ke=dt[se],st?G&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,ke.width,ke.height,Oe,et,ke.data):n.texImage2D(s.TEXTURE_2D,se,nt,ke.width,ke.height,0,Oe,et,ke.data);M.generateMipmaps=!1}else st?(Ct&&n.texStorage2D(s.TEXTURE_2D,Re,nt,Se.width,Se.height),G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Se.width,Se.height,Oe,et,Se.data)):n.texImage2D(s.TEXTURE_2D,0,nt,Se.width,Se.height,0,Oe,et,Se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){st&&Ct&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,nt,dt[0].width,dt[0].height,Se.depth);for(let se=0,me=dt.length;se<me;se++)if(ke=dt[se],M.format!==ci)if(Oe!==null)if(st){if(G)if(M.layerUpdates.size>0){const De=fm(ke.width,ke.height,M.format,M.type);for(const Le of M.layerUpdates){const ot=ke.data.subarray(Le*De/ke.data.BYTES_PER_ELEMENT,(Le+1)*De/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,Le,ke.width,ke.height,1,Oe,ot)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ke.width,ke.height,Se.depth,Oe,ke.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,nt,ke.width,ke.height,Se.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?G&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ke.width,ke.height,Se.depth,Oe,et,ke.data):n.texImage3D(s.TEXTURE_2D_ARRAY,se,nt,ke.width,ke.height,Se.depth,0,Oe,et,ke.data)}else{st&&Ct&&n.texStorage2D(s.TEXTURE_2D,Re,nt,dt[0].width,dt[0].height);for(let se=0,me=dt.length;se<me;se++)ke=dt[se],M.format!==ci?Oe!==null?st?G&&n.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,ke.width,ke.height,Oe,ke.data):n.compressedTexImage2D(s.TEXTURE_2D,se,nt,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?G&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,ke.width,ke.height,Oe,et,ke.data):n.texImage2D(s.TEXTURE_2D,se,nt,ke.width,ke.height,0,Oe,et,ke.data)}else if(M.isDataArrayTexture)if(st){if(Ct&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,nt,Se.width,Se.height,Se.depth),G)if(M.layerUpdates.size>0){const se=fm(Se.width,Se.height,M.format,M.type);for(const me of M.layerUpdates){const De=Se.data.subarray(me*se/Se.data.BYTES_PER_ELEMENT,(me+1)*se/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,Se.width,Se.height,1,Oe,et,De)}M.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Oe,et,Se.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,nt,Se.width,Se.height,Se.depth,0,Oe,et,Se.data);else if(M.isData3DTexture)st?(Ct&&n.texStorage3D(s.TEXTURE_3D,Re,nt,Se.width,Se.height,Se.depth),G&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Oe,et,Se.data)):n.texImage3D(s.TEXTURE_3D,0,nt,Se.width,Se.height,Se.depth,0,Oe,et,Se.data);else if(M.isFramebufferTexture){if(Ct)if(st)n.texStorage2D(s.TEXTURE_2D,Re,nt,Se.width,Se.height);else{let se=Se.width,me=Se.height;for(let De=0;De<Re;De++)n.texImage2D(s.TEXTURE_2D,De,nt,se,me,0,Oe,et,null),se>>=1,me>>=1}}else if(dt.length>0){if(st&&Ct){const se=Xe(dt[0]);n.texStorage2D(s.TEXTURE_2D,Re,nt,se.width,se.height)}for(let se=0,me=dt.length;se<me;se++)ke=dt[se],st?G&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,Oe,et,ke):n.texImage2D(s.TEXTURE_2D,se,nt,Oe,et,ke);M.generateMipmaps=!1}else if(st){if(Ct){const se=Xe(Se);n.texStorage2D(s.TEXTURE_2D,Re,nt,se.width,se.height)}G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,et,Se)}else n.texImage2D(s.TEXTURE_2D,0,nt,Oe,et,Se);y(M)&&_(pe),We.__version=he.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function ce(L,M,J){if(M.image.length!==6)return;const pe=Me(L,M),ye=M.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+J);const he=r.get(ye);if(ye.version!==he.__version||pe===!0){n.activeTexture(s.TEXTURE0+J);const We=Tt.getPrimaries(Tt.workingColorSpace),Ce=M.colorSpace===Sr?null:Tt.getPrimaries(M.colorSpace),Ke=M.colorSpace===Sr||We===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);const $e=M.isCompressedTexture||M.image[0].isCompressedTexture,Se=M.image[0]&&M.image[0].isDataTexture,Oe=[];for(let me=0;me<6;me++)!$e&&!Se?Oe[me]=w(M.image[me],!0,a.maxCubemapSize):Oe[me]=Se?M.image[me].image:M.image[me],Oe[me]=Rt(M,Oe[me]);const et=Oe[0],nt=l.convert(M.format,M.colorSpace),ke=l.convert(M.type),dt=I(M.internalFormat,nt,ke,M.colorSpace),st=M.isVideoTexture!==!0,Ct=he.__version===void 0||pe===!0,G=ye.dataReady;let Re=j(M,et);W(s.TEXTURE_CUBE_MAP,M);let se;if($e){st&&Ct&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,dt,et.width,et.height);for(let me=0;me<6;me++){se=Oe[me].mipmaps;for(let De=0;De<se.length;De++){const Le=se[De];M.format!==ci?nt!==null?st?G&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,0,0,Le.width,Le.height,nt,Le.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,dt,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,0,0,Le.width,Le.height,nt,ke,Le.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,dt,Le.width,Le.height,0,nt,ke,Le.data)}}}else{if(se=M.mipmaps,st&&Ct){se.length>0&&Re++;const me=Xe(Oe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,dt,me.width,me.height)}for(let me=0;me<6;me++)if(Se){st?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Oe[me].width,Oe[me].height,nt,ke,Oe[me].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,dt,Oe[me].width,Oe[me].height,0,nt,ke,Oe[me].data);for(let De=0;De<se.length;De++){const ot=se[De].image[me].image;st?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,0,0,ot.width,ot.height,nt,ke,ot.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,dt,ot.width,ot.height,0,nt,ke,ot.data)}}else{st?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,nt,ke,Oe[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,dt,nt,ke,Oe[me]);for(let De=0;De<se.length;De++){const Le=se[De];st?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,0,0,nt,ke,Le.image[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,dt,nt,ke,Le.image[me])}}}y(M)&&_(s.TEXTURE_CUBE_MAP),he.__version=ye.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function _e(L,M,J,pe,ye,he){const We=l.convert(J.format,J.colorSpace),Ce=l.convert(J.type),Ke=I(J.internalFormat,We,Ce,J.colorSpace),$e=r.get(M),Se=r.get(J);if(Se.__renderTarget=M,!$e.__hasExternalTextures){const Oe=Math.max(1,M.width>>he),et=Math.max(1,M.height>>he);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?n.texImage3D(ye,he,Ke,Oe,et,M.depth,0,We,Ce,null):n.texImage2D(ye,he,Ke,Oe,et,0,We,Ce,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),ft(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ye,Se.__webglTexture,0,pt(M)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ye,Se.__webglTexture,he),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(L,M,J){if(s.bindRenderbuffer(s.RENDERBUFFER,L),M.depthBuffer){const pe=M.depthTexture,ye=pe&&pe.isDepthTexture?pe.type:null,he=b(M.stencilBuffer,ye),We=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=pt(M);ft(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,he,M.width,M.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,he,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,he,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,L)}else{const pe=M.textures;for(let ye=0;ye<pe.length;ye++){const he=pe[ye],We=l.convert(he.format,he.colorSpace),Ce=l.convert(he.type),Ke=I(he.internalFormat,We,Ce,he.colorSpace),$e=pt(M);J&&ft(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,Ke,M.width,M.height):ft(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$e,Ke,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Ke,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(L,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(M.depthTexture);pe.__renderTarget=M,(!pe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ue(M.depthTexture,0);const ye=pe.__webglTexture,he=pt(M);if(M.depthTexture.format===Oo)ft(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0);else if(M.depthTexture.format===ko)ft(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function He(L){const M=r.get(L),J=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const pe=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),pe){const ye=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,pe.removeEventListener("dispose",ye)};pe.addEventListener("dispose",ye),M.__depthDisposeCallback=ye}M.__boundDepthTexture=pe}if(L.depthTexture&&!M.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const pe=L.texture.mipmaps;pe&&pe.length>0?we(M.__webglFramebuffer[0],L):we(M.__webglFramebuffer,L)}else if(J){M.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[pe]),M.__webglDepthbuffer[pe]===void 0)M.__webglDepthbuffer[pe]=s.createRenderbuffer(),ge(M.__webglDepthbuffer[pe],L,!1);else{const ye=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=M.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,he)}}else{const pe=L.texture.mipmaps;if(pe&&pe.length>0?n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),ge(M.__webglDepthbuffer,L,!1);else{const ye=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,he)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(L,M,J){const pe=r.get(L);M!==void 0&&_e(pe.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&He(L)}function tt(L){const M=L.texture,J=r.get(L),pe=r.get(M);L.addEventListener("dispose",U);const ye=L.textures,he=L.isWebGLCubeRenderTarget===!0,We=ye.length>1;if(We||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=M.version,c.memory.textures++),he){J.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(M.mipmaps&&M.mipmaps.length>0){J.__webglFramebuffer[Ce]=[];for(let Ke=0;Ke<M.mipmaps.length;Ke++)J.__webglFramebuffer[Ce][Ke]=s.createFramebuffer()}else J.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ce=0;Ce<M.mipmaps.length;Ce++)J.__webglFramebuffer[Ce]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(We)for(let Ce=0,Ke=ye.length;Ce<Ke;Ce++){const $e=r.get(ye[Ce]);$e.__webglTexture===void 0&&($e.__webglTexture=s.createTexture(),c.memory.textures++)}if(L.samples>0&&ft(L)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ye.length;Ce++){const Ke=ye[Ce];J.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[Ce]);const $e=l.convert(Ke.format,Ke.colorSpace),Se=l.convert(Ke.type),Oe=I(Ke.internalFormat,$e,Se,Ke.colorSpace,L.isXRRenderTarget===!0),et=pt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,et,Oe,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,J.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),ge(J.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){n.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),W(s.TEXTURE_CUBE_MAP,M);for(let Ce=0;Ce<6;Ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ke=0;Ke<M.mipmaps.length;Ke++)_e(J.__webglFramebuffer[Ce][Ke],L,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ke);else _e(J.__webglFramebuffer[Ce],L,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(M)&&_(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(We){for(let Ce=0,Ke=ye.length;Ce<Ke;Ce++){const $e=ye[Ce],Se=r.get($e);n.bindTexture(s.TEXTURE_2D,Se.__webglTexture),W(s.TEXTURE_2D,$e),_e(J.__webglFramebuffer,L,$e,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),y($e)&&_(s.TEXTURE_2D)}n.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ce,pe.__webglTexture),W(Ce,M),M.mipmaps&&M.mipmaps.length>0)for(let Ke=0;Ke<M.mipmaps.length;Ke++)_e(J.__webglFramebuffer[Ke],L,M,s.COLOR_ATTACHMENT0,Ce,Ke);else _e(J.__webglFramebuffer,L,M,s.COLOR_ATTACHMENT0,Ce,0);y(M)&&_(Ce),n.unbindTexture()}L.depthBuffer&&He(L)}function wt(L){const M=L.textures;for(let J=0,pe=M.length;J<pe;J++){const ye=M[J];if(y(ye)){const he=N(L),We=r.get(ye).__webglTexture;n.bindTexture(he,We),_(he),n.unbindTexture()}}}const at=[],k=[];function yn(L){if(L.samples>0){if(ft(L)===!1){const M=L.textures,J=L.width,pe=L.height;let ye=s.COLOR_BUFFER_BIT;const he=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(L),Ce=M.length>1;if(Ce)for(let $e=0;$e<M.length;$e++)n.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer);const Ke=L.texture.mipmaps;Ke&&Ke.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let $e=0;$e<M.length;$e++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[$e]);const Se=r.get(M[$e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Se,0)}s.blitFramebuffer(0,0,J,pe,0,0,J,pe,ye,s.NEAREST),h===!0&&(at.length=0,k.length=0,at.push(s.COLOR_ATTACHMENT0+$e),L.depthBuffer&&L.resolveDepthBuffer===!1&&(at.push(he),k.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,k)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,at))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let $e=0;$e<M.length;$e++){n.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,We.__webglColorRenderbuffer[$e]);const Se=r.get(M[$e]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,Se,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const M=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function pt(L){return Math.min(a.maxSamples,L.samples)}function ft(L){const M=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ye(L){const M=c.render.frame;g.get(L)!==M&&(g.set(L,M),L.update())}function Rt(L,M){const J=L.colorSpace,pe=L.format,ye=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==Xs&&J!==Sr&&(Tt.getTransfer(J)===bt?(pe!==ci||ye!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),M}function Xe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=ee,this.resetTextureUnits=re,this.setTexture2D=ue,this.setTexture2DArray=le,this.setTexture3D=oe,this.setTextureCube=B,this.rebindTextures=Ue,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=yn,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ft}function VM(s,e){function n(r,a=Sr){let l;const c=Tt.getTransfer(a);if(r===Gi)return s.UNSIGNED_BYTE;if(r===Zf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Qf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===og)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===rg)return s.BYTE;if(r===sg)return s.SHORT;if(r===Uo)return s.UNSIGNED_SHORT;if(r===Kf)return s.INT;if(r===Jr)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===zo)return s.HALF_FLOAT;if(r===ag)return s.ALPHA;if(r===lg)return s.RGB;if(r===ci)return s.RGBA;if(r===Oo)return s.DEPTH_COMPONENT;if(r===ko)return s.DEPTH_STENCIL;if(r===ug)return s.RED;if(r===Jf)return s.RED_INTEGER;if(r===cg)return s.RG;if(r===ed)return s.RG_INTEGER;if(r===td)return s.RGBA_INTEGER;if(r===Ml||r===Tl||r===wl||r===Al)if(c===bt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ml)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Tl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Al)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ml)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Tl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Al)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===_f||r===xf||r===yf||r===Sf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===_f)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ef||r===Mf||r===Tf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Ef||r===Mf)return c===bt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Tf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===wf||r===Af||r===Cf||r===Rf||r===bf||r===Pf||r===Lf||r===Df||r===If||r===Nf||r===Uf||r===Ff||r===Of||r===kf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===wf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Af)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Cf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Rf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===bf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Pf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Lf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Df)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===If)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Nf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Uf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ff)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Of)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===kf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Cl||r===Bf||r===zf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Cl)return c===bt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Bf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===zf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===fg||r===Hf||r===Vf||r===Gf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Cl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Hf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Vf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Gf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Fo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const GM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class XM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new An,l=e.properties.get(a);l.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Ar({vertexShader:GM,fragmentShader:WM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Hi(new Bl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jM extends Ys{constructor(e,n){super();const r=this;let a=null,l=1,c=null,d="local-floor",h=1,m=null,g=null,v=null,x=null,S=null,T=null;const w=new XM,y=n.getContextAttributes();let _=null,N=null;const I=[],b=[],j=new Lt;let H=null;const U=new Jn;U.viewport=new Xt;const q=new Jn;q.viewport=new Xt;const P=[U,q],C=new hx;let z=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ce=I[$];return ce===void 0&&(ce=new Xc,I[$]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function($){let ce=I[$];return ce===void 0&&(ce=new Xc,I[$]=ce),ce.getGripSpace()},this.getHand=function($){let ce=I[$];return ce===void 0&&(ce=new Xc,I[$]=ce),ce.getHandSpace()};function ee($){const ce=b.indexOf($.inputSource);if(ce===-1)return;const _e=I[ce];_e!==void 0&&(_e.update($.inputSource,$.frame,m||c),_e.dispatchEvent({type:$.type,data:$.inputSource}))}function de(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",de),a.removeEventListener("inputsourceschange",ue);for(let $=0;$<I.length;$++){const ce=b[$];ce!==null&&(b[$]=null,I[$].disconnect(ce))}z=null,re=null,w.reset(),e.setRenderTarget(_),S=null,x=null,v=null,a=null,N=null,Me.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(j.width,j.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){l=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function($){m=$},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function($){if(a=$,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",de),a.addEventListener("inputsourceschange",ue),y.xrCompatible!==!0&&await n.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(j),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,ge=null,we=null;y.depth&&(we=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,_e=y.stencil?ko:Oo,ge=y.stencil?Fo:Jr);const He={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:l};v=new XRWebGLBinding(a,n),x=v.createProjectionLayer(He),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new es(x.textureWidth,x.textureHeight,{format:ci,type:Gi,depthTexture:new Ag(x.textureWidth,x.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const _e={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,n,_e),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new es(S.framebufferWidth,S.framebufferHeight,{format:ci,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(h),m=null,c=await a.requestReferenceSpace(d),Me.setContext(a),Me.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ue($){for(let ce=0;ce<$.removed.length;ce++){const _e=$.removed[ce],ge=b.indexOf(_e);ge>=0&&(b[ge]=null,I[ge].disconnect(_e))}for(let ce=0;ce<$.added.length;ce++){const _e=$.added[ce];let ge=b.indexOf(_e);if(ge===-1){for(let He=0;He<I.length;He++)if(He>=b.length){b.push(_e),ge=He;break}else if(b[He]===null){b[He]=_e,ge=He;break}if(ge===-1)break}const we=I[ge];we&&we.connect(_e)}}const le=new ie,oe=new ie;function B($,ce,_e){le.setFromMatrixPosition(ce.matrixWorld),oe.setFromMatrixPosition(_e.matrixWorld);const ge=le.distanceTo(oe),we=ce.projectionMatrix.elements,He=_e.projectionMatrix.elements,Ue=we[14]/(we[10]-1),tt=we[14]/(we[10]+1),wt=(we[9]+1)/we[5],at=(we[9]-1)/we[5],k=(we[8]-1)/we[0],yn=(He[8]+1)/He[0],pt=Ue*k,ft=Ue*yn,Ye=ge/(-k+yn),Rt=Ye*-k;if(ce.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Rt),$.translateZ(Ye),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),we[10]===-1)$.projectionMatrix.copy(ce.projectionMatrix),$.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Xe=Ue+Ye,L=tt+Ye,M=pt-Rt,J=ft+(ge-Rt),pe=wt*tt/L*Xe,ye=at*tt/L*Xe;$.projectionMatrix.makePerspective(M,J,pe,ye,Xe,L),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ae($,ce){ce===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ce.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(a===null)return;let ce=$.near,_e=$.far;w.texture!==null&&(w.depthNear>0&&(ce=w.depthNear),w.depthFar>0&&(_e=w.depthFar)),C.near=q.near=U.near=ce,C.far=q.far=U.far=_e,(z!==C.near||re!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,re=C.far),U.layers.mask=$.layers.mask|2,q.layers.mask=$.layers.mask|4,C.layers.mask=U.layers.mask|q.layers.mask;const ge=$.parent,we=C.cameras;ae(C,ge);for(let He=0;He<we.length;He++)ae(we[He],ge);we.length===2?B(C,U,q):C.projectionMatrix.copy(U.projectionMatrix),F($,C,ge)};function F($,ce,_e){_e===null?$.matrix.copy(ce.matrixWorld):($.matrix.copy(_e.matrixWorld),$.matrix.invert(),$.matrix.multiply(ce.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ce.projectionMatrix),$.projectionMatrixInverse.copy(ce.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Wf*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function($){h=$,x!==null&&(x.fixedFoveation=$),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=$)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(C)};let R=null;function W($,ce){if(g=ce.getViewerPose(m||c),T=ce,g!==null){const _e=g.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let ge=!1;_e.length!==C.cameras.length&&(C.cameras.length=0,ge=!0);for(let Ue=0;Ue<_e.length;Ue++){const tt=_e[Ue];let wt=null;if(S!==null)wt=S.getViewport(tt);else{const k=v.getViewSubImage(x,tt);wt=k.viewport,Ue===0&&(e.setRenderTargetTextures(N,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(N))}let at=P[Ue];at===void 0&&(at=new Jn,at.layers.enable(Ue),at.viewport=new Xt,P[Ue]=at),at.matrix.fromArray(tt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(tt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(wt.x,wt.y,wt.width,wt.height),Ue===0&&(C.matrix.copy(at.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ge===!0&&C.cameras.push(at)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&v){const Ue=v.getDepthInformation(_e[0]);Ue&&Ue.isValid&&Ue.texture&&w.init(e,Ue,a.renderState)}}for(let _e=0;_e<I.length;_e++){const ge=b[_e],we=I[_e];ge!==null&&we!==void 0&&we.update(ge,ce,m||c)}R&&R($,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),T=null}const Me=new Cg;Me.setAnimationLoop(W),this.setAnimationLoop=function($){R=$},this.dispose=function(){}}}const jr=new Wi,YM=new jt;function qM(s,e){function n(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,Sg(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function a(y,_,N,I,b){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(y,_):_.isMeshToonMaterial?(l(y,_),v(y,_)):_.isMeshPhongMaterial?(l(y,_),g(y,_)):_.isMeshStandardMaterial?(l(y,_),x(y,_),_.isMeshPhysicalMaterial&&S(y,_,b)):_.isMeshMatcapMaterial?(l(y,_),T(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),w(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(c(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?h(y,_,N,I):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,n(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,n(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Fn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,n(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Fn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,n(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,n(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const N=e.get(_),I=N.envMap,b=N.envMapRotation;I&&(y.envMap.value=I,jr.copy(b),jr.x*=-1,jr.y*=-1,jr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),y.envMapRotation.value.setFromMatrix4(YM.makeRotationFromEuler(jr)),y.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,y.aoMapTransform))}function c(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,n(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,N,I){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*N,y.scale.value=I*.5,_.map&&(y.map.value=_.map,n(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,n(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,N){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Fn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,_){_.matcap&&(y.matcap.value=_.matcap)}function w(y,_){const N=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function $M(s,e,n,r){let a={},l={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(N,I){const b=I.program;r.uniformBlockBinding(N,b)}function m(N,I){let b=a[N.id];b===void 0&&(T(N),b=g(N),a[N.id]=b,N.addEventListener("dispose",y));const j=I.program;r.updateUBOMapping(N,j);const H=e.render.frame;l[N.id]!==H&&(x(N),l[N.id]=H)}function g(N){const I=v();N.__bindingPointIndex=I;const b=s.createBuffer(),j=N.__size,H=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,j,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,b),b}function v(){for(let N=0;N<d;N++)if(c.indexOf(N)===-1)return c.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const I=a[N.id],b=N.uniforms,j=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let H=0,U=b.length;H<U;H++){const q=Array.isArray(b[H])?b[H]:[b[H]];for(let P=0,C=q.length;P<C;P++){const z=q[P];if(S(z,H,P,j)===!0){const re=z.__offset,ee=Array.isArray(z.value)?z.value:[z.value];let de=0;for(let ue=0;ue<ee.length;ue++){const le=ee[ue],oe=w(le);typeof le=="number"||typeof le=="boolean"?(z.__data[0]=le,s.bufferSubData(s.UNIFORM_BUFFER,re+de,z.__data)):le.isMatrix3?(z.__data[0]=le.elements[0],z.__data[1]=le.elements[1],z.__data[2]=le.elements[2],z.__data[3]=0,z.__data[4]=le.elements[3],z.__data[5]=le.elements[4],z.__data[6]=le.elements[5],z.__data[7]=0,z.__data[8]=le.elements[6],z.__data[9]=le.elements[7],z.__data[10]=le.elements[8],z.__data[11]=0):(le.toArray(z.__data,de),de+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,re,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(N,I,b,j){const H=N.value,U=I+"_"+b;if(j[U]===void 0)return typeof H=="number"||typeof H=="boolean"?j[U]=H:j[U]=H.clone(),!0;{const q=j[U];if(typeof H=="number"||typeof H=="boolean"){if(q!==H)return j[U]=H,!0}else if(q.equals(H)===!1)return q.copy(H),!0}return!1}function T(N){const I=N.uniforms;let b=0;const j=16;for(let U=0,q=I.length;U<q;U++){const P=Array.isArray(I[U])?I[U]:[I[U]];for(let C=0,z=P.length;C<z;C++){const re=P[C],ee=Array.isArray(re.value)?re.value:[re.value];for(let de=0,ue=ee.length;de<ue;de++){const le=ee[de],oe=w(le),B=b%j,ae=B%oe.boundary,F=B+ae;b+=ae,F!==0&&j-F<oe.storage&&(b+=j-F),re.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=b,b+=oe.storage}}}const H=b%j;return H>0&&(b+=j-H),N.__size=b,N.__cache={},this}function w(N){const I={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(I.boundary=4,I.storage=4):N.isVector2?(I.boundary=8,I.storage=8):N.isVector3||N.isColor?(I.boundary=16,I.storage=12):N.isVector4?(I.boundary=16,I.storage=16):N.isMatrix3?(I.boundary=48,I.storage=48):N.isMatrix4?(I.boundary=64,I.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),I}function y(N){const I=N.target;I.removeEventListener("dispose",y);const b=c.indexOf(I.__bindingPointIndex);c.splice(b,1),s.deleteBuffer(a[I.id]),delete a[I.id],delete l[I.id]}function _(){for(const N in a)s.deleteBuffer(a[N]);c=[],a={},l={}}return{bind:h,update:m,dispose:_}}class KM{constructor(e={}){const{canvas:n=R0(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const T=new Uint32Array(4),w=new Int32Array(4);let y=null,_=null;const N=[],I=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let j=!1;this._outputColorSpace=Qn;let H=0,U=0,q=null,P=-1,C=null;const z=new Xt,re=new Xt;let ee=null;const de=new Et(0);let ue=0,le=n.width,oe=n.height,B=1,ae=null,F=null;const R=new Xt(0,0,le,oe),W=new Xt(0,0,le,oe);let Me=!1;const $=new Tg;let ce=!1,_e=!1;const ge=new jt,we=new jt,He=new ie,Ue=new Xt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function at(){return q===null?B:1}let k=r;function yn(A,X){return n.getContext(A,X)}try{const A={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${$f}`),n.addEventListener("webglcontextlost",me,!1),n.addEventListener("webglcontextrestored",De,!1),n.addEventListener("webglcontextcreationerror",Le,!1),k===null){const X="webgl2";if(k=yn(X,A),k===null)throw yn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let pt,ft,Ye,Rt,Xe,L,M,J,pe,ye,he,We,Ce,Ke,$e,Se,Oe,et,nt,ke,dt,st,Ct,G;function Re(){pt=new oE(k),pt.init(),st=new VM(k,pt),ft=new JS(k,pt,e,st),Ye=new zM(k,pt),ft.reverseDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),Rt=new uE(k),Xe=new CM,L=new HM(k,pt,Ye,Xe,ft,st,Rt),M=new tE(b),J=new sE(b),pe=new mx(k),Ct=new ZS(k,pe),ye=new aE(k,pe,Rt,Ct),he=new fE(k,ye,pe,Rt),nt=new cE(k,ft,L),Se=new eE(Xe),We=new AM(b,M,J,pt,ft,Ct,Se),Ce=new qM(b,Xe),Ke=new bM,$e=new UM(pt),et=new KS(b,M,J,Ye,he,S,h),Oe=new kM(b,he,ft),G=new $M(k,Rt,ft,Ye),ke=new QS(k,pt,Rt),dt=new lE(k,pt,Rt),Rt.programs=We.programs,b.capabilities=ft,b.extensions=pt,b.properties=Xe,b.renderLists=Ke,b.shadowMap=Oe,b.state=Ye,b.info=Rt}Re();const se=new jM(b,k);this.xr=se,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(A){A!==void 0&&(B=A,this.setSize(le,oe,!1))},this.getSize=function(A){return A.set(le,oe)},this.setSize=function(A,X,ne=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=A,oe=X,n.width=Math.floor(A*B),n.height=Math.floor(X*B),ne===!0&&(n.style.width=A+"px",n.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(le*B,oe*B).floor()},this.setDrawingBufferSize=function(A,X,ne){le=A,oe=X,B=ne,n.width=Math.floor(A*ne),n.height=Math.floor(X*ne),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(R)},this.setViewport=function(A,X,ne,Z){A.isVector4?R.set(A.x,A.y,A.z,A.w):R.set(A,X,ne,Z),Ye.viewport(z.copy(R).multiplyScalar(B).round())},this.getScissor=function(A){return A.copy(W)},this.setScissor=function(A,X,ne,Z){A.isVector4?W.set(A.x,A.y,A.z,A.w):W.set(A,X,ne,Z),Ye.scissor(re.copy(W).multiplyScalar(B).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(A){Ye.setScissorTest(Me=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){F=A},this.getClearColor=function(A){return A.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,ne=!0){let Z=0;if(A){let Y=!1;if(q!==null){const Te=q.texture.format;Y=Te===td||Te===ed||Te===Jf}if(Y){const Te=q.texture.type,be=Te===Gi||Te===Jr||Te===Uo||Te===Fo||Te===Zf||Te===Qf,Ie=et.getClearColor(),Be=et.getClearAlpha(),it=Ie.r,Je=Ie.g,Ve=Ie.b;be?(T[0]=it,T[1]=Je,T[2]=Ve,T[3]=Be,k.clearBufferuiv(k.COLOR,0,T)):(w[0]=it,w[1]=Je,w[2]=Ve,w[3]=Be,k.clearBufferiv(k.COLOR,0,w))}else Z|=k.COLOR_BUFFER_BIT}X&&(Z|=k.DEPTH_BUFFER_BIT),ne&&(Z|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",me,!1),n.removeEventListener("webglcontextrestored",De,!1),n.removeEventListener("webglcontextcreationerror",Le,!1),et.dispose(),Ke.dispose(),$e.dispose(),Xe.dispose(),M.dispose(),J.dispose(),he.dispose(),Ct.dispose(),G.dispose(),We.dispose(),se.dispose(),se.removeEventListener("sessionstart",ts),se.removeEventListener("sessionend",Yi),Si.stop()};function me(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),j=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),j=!1;const A=Rt.autoReset,X=Oe.enabled,ne=Oe.autoUpdate,Z=Oe.needsUpdate,Y=Oe.type;Re(),Rt.autoReset=A,Oe.enabled=X,Oe.autoUpdate=ne,Oe.needsUpdate=Z,Oe.type=Y}function Le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ot(A){const X=A.target;X.removeEventListener("dispose",ot),It(X)}function It(A){Zt(A),Xe.remove(A)}function Zt(A){const X=Xe.get(A).programs;X!==void 0&&(X.forEach(function(ne){We.releaseProgram(ne)}),A.isShaderMaterial&&We.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,ne,Z,Y,Te){X===null&&(X=tt);const be=Y.isMesh&&Y.matrixWorld.determinant()<0,Ie=qo(A,X,ne,Z,Y);Ye.setMaterial(Z,be);let Be=ne.index,it=1;if(Z.wireframe===!0){if(Be=ye.getWireframeAttribute(ne),Be===void 0)return;it=2}const Je=ne.drawRange,Ve=ne.attributes.position;let gt=Je.start*it,lt=(Je.start+Je.count)*it;Te!==null&&(gt=Math.max(gt,Te.start*it),lt=Math.min(lt,(Te.start+Te.count)*it)),Be!==null?(gt=Math.max(gt,0),lt=Math.min(lt,Be.count)):Ve!=null&&(gt=Math.max(gt,0),lt=Math.min(lt,Ve.count));const Ht=lt-gt;if(Ht<0||Ht===1/0)return;Ct.setup(Y,Z,Ie,ne,Be);let Ft,_t=ke;if(Be!==null&&(Ft=pe.get(Be),_t=dt,_t.setIndex(Ft)),Y.isMesh)Z.wireframe===!0?(Ye.setLineWidth(Z.wireframeLinewidth*at()),_t.setMode(k.LINES)):_t.setMode(k.TRIANGLES);else if(Y.isLine){let qe=Z.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*at()),Y.isLineSegments?_t.setMode(k.LINES):Y.isLineLoop?_t.setMode(k.LINE_LOOP):_t.setMode(k.LINE_STRIP)}else Y.isPoints?_t.setMode(k.POINTS):Y.isSprite&&_t.setMode(k.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Rl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))_t.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const qe=Y._multiDrawStarts,Vt=Y._multiDrawCounts,mt=Y._multiDrawCount,dn=Be?pe.get(Be).bytesPerElement:1,$i=Xe.get(Z).currentProgram.getUniforms();for(let En=0;En<mt;En++)$i.setValue(k,"_gl_DrawID",En),_t.render(qe[En]/dn,Vt[En])}else if(Y.isInstancedMesh)_t.renderInstances(gt,Ht,Y.count);else if(ne.isInstancedBufferGeometry){const qe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Vt=Math.min(ne.instanceCount,qe);_t.renderInstances(gt,Ht,Vt)}else _t.render(gt,Ht)};function xt(A,X,ne){A.transparent===!0&&A.side===ki&&A.forceSinglePass===!1?(A.side=Fn,A.needsUpdate=!0,ns(A,X,ne),A.side=wr,A.needsUpdate=!0,ns(A,X,ne),A.side=ki):ns(A,X,ne)}this.compile=function(A,X,ne=null){ne===null&&(ne=A),_=$e.get(ne),_.init(X),I.push(_),ne.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),A!==ne&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights();const Z=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Te=Y.material;if(Te)if(Array.isArray(Te))for(let be=0;be<Te.length;be++){const Ie=Te[be];xt(Ie,ne,Y),Z.add(Ie)}else xt(Te,ne,Y),Z.add(Te)}),_=I.pop(),Z},this.compileAsync=function(A,X,ne=null){const Z=this.compile(A,X,ne);return new Promise(Y=>{function Te(){if(Z.forEach(function(be){Xe.get(be).currentProgram.isReady()&&Z.delete(be)}),Z.size===0){Y(A);return}setTimeout(Te,10)}pt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Cn=null;function Sn(A){Cn&&Cn(A)}function ts(){Si.stop()}function Yi(){Si.start()}const Si=new Cg;Si.setAnimationLoop(Sn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(A){Cn=A,se.setAnimationLoop(A),A===null?Si.stop():Si.start()},se.addEventListener("sessionstart",ts),se.addEventListener("sessionend",Yi),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(X),X=se.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,X,q),_=$e.get(A,I.length),_.init(X),I.push(_),we.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),$.setFromProjectionMatrix(we),_e=this.localClippingEnabled,ce=Se.init(this.clippingPlanes,_e),y=Ke.get(A,N.length),y.init(),N.push(y),se.enabled===!0&&se.isPresenting===!0){const Te=b.xr.getDepthSensingMesh();Te!==null&&Ei(Te,X,-1/0,b.sortObjects)}Ei(A,X,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(ae,F),wt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,wt&&et.addToRenderList(y,A),this.info.render.frame++,ce===!0&&Se.beginShadows();const ne=_.state.shadowsArray;Oe.render(ne,A,X),ce===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=y.opaque,Y=y.transmissive;if(_.setupLights(),X.isArrayCamera){const Te=X.cameras;if(Y.length>0)for(let be=0,Ie=Te.length;be<Ie;be++){const Be=Te[be];Rr(Z,Y,A,Be)}wt&&et.render(A);for(let be=0,Ie=Te.length;be<Ie;be++){const Be=Te[be];Cr(y,A,Be,Be.viewport)}}else Y.length>0&&Rr(Z,Y,A,X),wt&&et.render(A),Cr(y,A,X);q!==null&&U===0&&(L.updateMultisampleRenderTarget(q),L.updateRenderTargetMipmap(q)),A.isScene===!0&&A.onAfterRender(b,A,X),Ct.resetDefaultState(),P=-1,C=null,I.pop(),I.length>0?(_=I[I.length-1],ce===!0&&Se.setGlobalState(b.clippingPlanes,_.state.camera)):_=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function Ei(A,X,ne,Z){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)ne=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$.intersectsSprite(A)){Z&&Ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(we);const be=he.update(A),Ie=A.material;Ie.visible&&y.push(A,be,Ie,ne,Ue.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||$.intersectsObject(A))){const be=he.update(A),Ie=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ue.copy(A.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ue.copy(be.boundingSphere.center)),Ue.applyMatrix4(A.matrixWorld).applyMatrix4(we)),Array.isArray(Ie)){const Be=be.groups;for(let it=0,Je=Be.length;it<Je;it++){const Ve=Be[it],gt=Ie[Ve.materialIndex];gt&&gt.visible&&y.push(A,be,gt,ne,Ue.z,Ve)}}else Ie.visible&&y.push(A,be,Ie,ne,Ue.z,null)}}const Te=A.children;for(let be=0,Ie=Te.length;be<Ie;be++)Ei(Te[be],X,ne,Z)}function Cr(A,X,ne,Z){const Y=A.opaque,Te=A.transmissive,be=A.transparent;_.setupLightsView(ne),ce===!0&&Se.setGlobalState(b.clippingPlanes,ne),Z&&Ye.viewport(z.copy(Z)),Y.length>0&&qi(Y,X,ne),Te.length>0&&qi(Te,X,ne),be.length>0&&qi(be,X,ne),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Rr(A,X,ne,Z){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[Z.id]===void 0&&(_.state.transmissionRenderTarget[Z.id]=new es(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?zo:Gi,minFilter:Qr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Te=_.state.transmissionRenderTarget[Z.id],be=Z.viewport||z;Te.setSize(be.z*b.transmissionResolutionScale,be.w*b.transmissionResolutionScale);const Ie=b.getRenderTarget();b.setRenderTarget(Te),b.getClearColor(de),ue=b.getClearAlpha(),ue<1&&b.setClearColor(16777215,.5),b.clear(),wt&&et.render(ne);const Be=b.toneMapping;b.toneMapping=Mr;const it=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),_.setupLightsView(Z),ce===!0&&Se.setGlobalState(b.clippingPlanes,Z),qi(A,ne,Z),L.updateMultisampleRenderTarget(Te),L.updateRenderTargetMipmap(Te),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Ve=0,gt=X.length;Ve<gt;Ve++){const lt=X[Ve],Ht=lt.object,Ft=lt.geometry,_t=lt.material,qe=lt.group;if(_t.side===ki&&Ht.layers.test(Z.layers)){const Vt=_t.side;_t.side=Fn,_t.needsUpdate=!0,jo(Ht,ne,Z,Ft,_t,qe),_t.side=Vt,_t.needsUpdate=!0,Je=!0}}Je===!0&&(L.updateMultisampleRenderTarget(Te),L.updateRenderTargetMipmap(Te))}b.setRenderTarget(Ie),b.setClearColor(de,ue),it!==void 0&&(Z.viewport=it),b.toneMapping=Be}function qi(A,X,ne){const Z=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Te=A.length;Y<Te;Y++){const be=A[Y],Ie=be.object,Be=be.geometry,it=be.group;let Je=be.material;Je.allowOverride===!0&&Z!==null&&(Je=Z),Ie.layers.test(ne.layers)&&jo(Ie,X,ne,Be,Je,it)}}function jo(A,X,ne,Z,Y,Te){A.onBeforeRender(b,X,ne,Z,Y,Te),A.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(b,X,ne,Z,A,Te),Y.transparent===!0&&Y.side===ki&&Y.forceSinglePass===!1?(Y.side=Fn,Y.needsUpdate=!0,b.renderBufferDirect(ne,X,Z,Y,A,Te),Y.side=wr,Y.needsUpdate=!0,b.renderBufferDirect(ne,X,Z,Y,A,Te),Y.side=ki):b.renderBufferDirect(ne,X,Z,Y,A,Te),A.onAfterRender(b,X,ne,Z,Y,Te)}function ns(A,X,ne){X.isScene!==!0&&(X=tt);const Z=Xe.get(A),Y=_.state.lights,Te=_.state.shadowsArray,be=Y.state.version,Ie=We.getParameters(A,Y.state,Te,X,ne),Be=We.getProgramCacheKey(Ie);let it=Z.programs;Z.environment=A.isMeshStandardMaterial?X.environment:null,Z.fog=X.fog,Z.envMap=(A.isMeshStandardMaterial?J:M).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,it===void 0&&(A.addEventListener("dispose",ot),it=new Map,Z.programs=it);let Je=it.get(Be);if(Je!==void 0){if(Z.currentProgram===Je&&Z.lightsStateVersion===be)return di(A,Ie),Je}else Ie.uniforms=We.getUniforms(A),A.onBeforeCompile(Ie,b),Je=We.acquireProgram(Ie,Be),it.set(Be,Je),Z.uniforms=Ie.uniforms;const Ve=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ve.clippingPlanes=Se.uniform),di(A,Ie),Z.needsLights=Hl(A),Z.lightsStateVersion=be,Z.needsLights&&(Ve.ambientLightColor.value=Y.state.ambient,Ve.lightProbe.value=Y.state.probe,Ve.directionalLights.value=Y.state.directional,Ve.directionalLightShadows.value=Y.state.directionalShadow,Ve.spotLights.value=Y.state.spot,Ve.spotLightShadows.value=Y.state.spotShadow,Ve.rectAreaLights.value=Y.state.rectArea,Ve.ltc_1.value=Y.state.rectAreaLTC1,Ve.ltc_2.value=Y.state.rectAreaLTC2,Ve.pointLights.value=Y.state.point,Ve.pointLightShadows.value=Y.state.pointShadow,Ve.hemisphereLights.value=Y.state.hemi,Ve.directionalShadowMap.value=Y.state.directionalShadowMap,Ve.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ve.spotShadowMap.value=Y.state.spotShadowMap,Ve.spotLightMatrix.value=Y.state.spotLightMatrix,Ve.spotLightMap.value=Y.state.spotLightMap,Ve.pointShadowMap.value=Y.state.pointShadowMap,Ve.pointShadowMatrix.value=Y.state.pointShadowMatrix),Z.currentProgram=Je,Z.uniformsList=null,Je}function Yo(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=bl.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function di(A,X){const ne=Xe.get(A);ne.outputColorSpace=X.outputColorSpace,ne.batching=X.batching,ne.batchingColor=X.batchingColor,ne.instancing=X.instancing,ne.instancingColor=X.instancingColor,ne.instancingMorph=X.instancingMorph,ne.skinning=X.skinning,ne.morphTargets=X.morphTargets,ne.morphNormals=X.morphNormals,ne.morphColors=X.morphColors,ne.morphTargetsCount=X.morphTargetsCount,ne.numClippingPlanes=X.numClippingPlanes,ne.numIntersection=X.numClipIntersection,ne.vertexAlphas=X.vertexAlphas,ne.vertexTangents=X.vertexTangents,ne.toneMapping=X.toneMapping}function qo(A,X,ne,Z,Y){X.isScene!==!0&&(X=tt),L.resetTextureUnits();const Te=X.fog,be=Z.isMeshStandardMaterial?X.environment:null,Ie=q===null?b.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Xs,Be=(Z.isMeshStandardMaterial?J:M).get(Z.envMap||be),it=Z.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Je=!!ne.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ve=!!ne.morphAttributes.position,gt=!!ne.morphAttributes.normal,lt=!!ne.morphAttributes.color;let Ht=Mr;Z.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ht=b.toneMapping);const Ft=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,_t=Ft!==void 0?Ft.length:0,qe=Xe.get(Z),Vt=_.state.lights;if(ce===!0&&(_e===!0||A!==C)){const un=A===C&&Z.id===P;Se.setState(Z,A,un)}let mt=!1;Z.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Vt.state.version||qe.outputColorSpace!==Ie||Y.isBatchedMesh&&qe.batching===!1||!Y.isBatchedMesh&&qe.batching===!0||Y.isBatchedMesh&&qe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&qe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&qe.instancing===!1||!Y.isInstancedMesh&&qe.instancing===!0||Y.isSkinnedMesh&&qe.skinning===!1||!Y.isSkinnedMesh&&qe.skinning===!0||Y.isInstancedMesh&&qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&qe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&qe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&qe.instancingMorph===!1&&Y.morphTexture!==null||qe.envMap!==Be||Z.fog===!0&&qe.fog!==Te||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Se.numPlanes||qe.numIntersection!==Se.numIntersection)||qe.vertexAlphas!==it||qe.vertexTangents!==Je||qe.morphTargets!==Ve||qe.morphNormals!==gt||qe.morphColors!==lt||qe.toneMapping!==Ht||qe.morphTargetsCount!==_t)&&(mt=!0):(mt=!0,qe.__version=Z.version);let dn=qe.currentProgram;mt===!0&&(dn=ns(Z,X,Y));let $i=!1,En=!1,Mi=!1;const Pt=dn.getUniforms(),hn=qe.uniforms;if(Ye.useProgram(dn.program)&&($i=!0,En=!0,Mi=!0),Z.id!==P&&(P=Z.id,En=!0),$i||C!==A){Ye.buffers.depth.getReversed()?(ge.copy(A.projectionMatrix),P0(ge),L0(ge),Pt.setValue(k,"projectionMatrix",ge)):Pt.setValue(k,"projectionMatrix",A.projectionMatrix),Pt.setValue(k,"viewMatrix",A.matrixWorldInverse);const rn=Pt.map.cameraPosition;rn!==void 0&&rn.setValue(k,He.setFromMatrixPosition(A.matrixWorld)),ft.logarithmicDepthBuffer&&Pt.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Pt.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,En=!0,Mi=!0)}if(Y.isSkinnedMesh){Pt.setOptional(k,Y,"bindMatrix"),Pt.setOptional(k,Y,"bindMatrixInverse");const un=Y.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Pt.setValue(k,"boneTexture",un.boneTexture,L))}Y.isBatchedMesh&&(Pt.setOptional(k,Y,"batchingTexture"),Pt.setValue(k,"batchingTexture",Y._matricesTexture,L),Pt.setOptional(k,Y,"batchingIdTexture"),Pt.setValue(k,"batchingIdTexture",Y._indirectTexture,L),Pt.setOptional(k,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Pt.setValue(k,"batchingColorTexture",Y._colorsTexture,L));const nn=ne.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&nt.update(Y,ne,dn),(En||qe.receiveShadow!==Y.receiveShadow)&&(qe.receiveShadow=Y.receiveShadow,Pt.setValue(k,"receiveShadow",Y.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(hn.envMap.value=Be,hn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&X.environment!==null&&(hn.envMapIntensity.value=X.environmentIntensity),En&&(Pt.setValue(k,"toneMappingExposure",b.toneMappingExposure),qe.needsLights&&$o(hn,Mi),Te&&Z.fog===!0&&Ce.refreshFogUniforms(hn,Te),Ce.refreshMaterialUniforms(hn,Z,B,oe,_.state.transmissionRenderTarget[A.id]),bl.upload(k,Yo(qe),hn,L)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(bl.upload(k,Yo(qe),hn,L),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Pt.setValue(k,"center",Y.center),Pt.setValue(k,"modelViewMatrix",Y.modelViewMatrix),Pt.setValue(k,"normalMatrix",Y.normalMatrix),Pt.setValue(k,"modelMatrix",Y.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const un=Z.uniformsGroups;for(let rn=0,yt=un.length;rn<yt;rn++){const hi=un[rn];G.update(hi,dn),G.bind(hi,dn)}}return dn}function $o(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Hl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,X,ne){const Z=Xe.get(A);Z.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Xe.get(A.texture).__webglTexture=X,Xe.get(A.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:ne,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const ne=Xe.get(A);ne.__webglFramebuffer=X,ne.__useDefaultFramebuffer=X===void 0};const Ko=k.createFramebuffer();this.setRenderTarget=function(A,X=0,ne=0){q=A,H=X,U=ne;let Z=!0,Y=null,Te=!1,be=!1;if(A){const Be=Xe.get(A);if(Be.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(k.FRAMEBUFFER,null),Z=!1;else if(Be.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(Be.__hasExternalTextures)L.rebindTextures(A,Xe.get(A.texture).__webglTexture,Xe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ve=A.depthTexture;if(Be.__boundDepthTexture!==Ve){if(Ve!==null&&Xe.has(Ve)&&(A.width!==Ve.image.width||A.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const it=A.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(be=!0);const Je=Xe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[X])?Y=Je[X][ne]:Y=Je[X],Te=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?Y=Xe.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?Y=Je[ne]:Y=Je,z.copy(A.viewport),re.copy(A.scissor),ee=A.scissorTest}else z.copy(R).multiplyScalar(B).floor(),re.copy(W).multiplyScalar(B).floor(),ee=Me;if(ne!==0&&(Y=Ko),Ye.bindFramebuffer(k.FRAMEBUFFER,Y)&&Z&&Ye.drawBuffers(A,Y),Ye.viewport(z),Ye.scissor(re),Ye.setScissorTest(ee),Te){const Be=Xe.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+X,Be.__webglTexture,ne)}else if(be){const Be=Xe.get(A.texture),it=X;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Be.__webglTexture,ne,it)}else if(A!==null&&ne!==0){const Be=Xe.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Be.__webglTexture,ne)}P=-1},this.readRenderTargetPixels=function(A,X,ne,Z,Y,Te,be){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Ie=Ie[be]),Ie){Ye.bindFramebuffer(k.FRAMEBUFFER,Ie);try{const Be=A.texture,it=Be.format,Je=Be.type;if(!ft.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-Z&&ne>=0&&ne<=A.height-Y&&k.readPixels(X,ne,Z,Y,st.convert(it),st.convert(Je),Te)}finally{const Be=q!==null?Xe.get(q).__webglFramebuffer:null;Ye.bindFramebuffer(k.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,X,ne,Z,Y,Te,be){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Ie=Ie[be]),Ie)if(X>=0&&X<=A.width-Z&&ne>=0&&ne<=A.height-Y){Ye.bindFramebuffer(k.FRAMEBUFFER,Ie);const Be=A.texture,it=Be.format,Je=Be.type;if(!ft.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ve),k.bufferData(k.PIXEL_PACK_BUFFER,Te.byteLength,k.STREAM_READ),k.readPixels(X,ne,Z,Y,st.convert(it),st.convert(Je),0);const gt=q!==null?Xe.get(q).__webglFramebuffer:null;Ye.bindFramebuffer(k.FRAMEBUFFER,gt);const lt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await b0(k,lt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ve),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Te),k.deleteBuffer(Ve),k.deleteSync(lt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,ne=0){const Z=Math.pow(2,-ne),Y=Math.floor(A.image.width*Z),Te=Math.floor(A.image.height*Z),be=X!==null?X.x:0,Ie=X!==null?X.y:0;L.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,ne,0,0,be,Ie,Y,Te),Ye.unbindTexture()};const Zo=k.createFramebuffer(),Qo=k.createFramebuffer();this.copyTextureToTexture=function(A,X,ne=null,Z=null,Y=0,Te=null){Te===null&&(Y!==0?(Rl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=Y,Y=0):Te=0);let be,Ie,Be,it,Je,Ve,gt,lt,Ht;const Ft=A.isCompressedTexture?A.mipmaps[Te]:A.image;if(ne!==null)be=ne.max.x-ne.min.x,Ie=ne.max.y-ne.min.y,Be=ne.isBox3?ne.max.z-ne.min.z:1,it=ne.min.x,Je=ne.min.y,Ve=ne.isBox3?ne.min.z:0;else{const nn=Math.pow(2,-Y);be=Math.floor(Ft.width*nn),Ie=Math.floor(Ft.height*nn),A.isDataArrayTexture?Be=Ft.depth:A.isData3DTexture?Be=Math.floor(Ft.depth*nn):Be=1,it=0,Je=0,Ve=0}Z!==null?(gt=Z.x,lt=Z.y,Ht=Z.z):(gt=0,lt=0,Ht=0);const _t=st.convert(X.format),qe=st.convert(X.type);let Vt;X.isData3DTexture?(L.setTexture3D(X,0),Vt=k.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(L.setTexture2DArray(X,0),Vt=k.TEXTURE_2D_ARRAY):(L.setTexture2D(X,0),Vt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);const mt=k.getParameter(k.UNPACK_ROW_LENGTH),dn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),$i=k.getParameter(k.UNPACK_SKIP_PIXELS),En=k.getParameter(k.UNPACK_SKIP_ROWS),Mi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ft.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ft.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,it),k.pixelStorei(k.UNPACK_SKIP_ROWS,Je),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ve);const Pt=A.isDataArrayTexture||A.isData3DTexture,hn=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const nn=Xe.get(A),un=Xe.get(X),rn=Xe.get(nn.__renderTarget),yt=Xe.get(un.__renderTarget);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,rn.__webglFramebuffer),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let hi=0;hi<Be;hi++)Pt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Xe.get(A).__webglTexture,Y,Ve+hi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Xe.get(X).__webglTexture,Te,Ht+hi)),k.blitFramebuffer(it,Je,be,Ie,gt,lt,be,Ie,k.DEPTH_BUFFER_BIT,k.NEAREST);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||Xe.has(A)){const nn=Xe.get(A),un=Xe.get(X);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,Zo),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,Qo);for(let rn=0;rn<Be;rn++)Pt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,nn.__webglTexture,Y,Ve+rn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,nn.__webglTexture,Y),hn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,un.__webglTexture,Te,Ht+rn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,un.__webglTexture,Te),Y!==0?k.blitFramebuffer(it,Je,be,Ie,gt,lt,be,Ie,k.COLOR_BUFFER_BIT,k.NEAREST):hn?k.copyTexSubImage3D(Vt,Te,gt,lt,Ht+rn,it,Je,be,Ie):k.copyTexSubImage2D(Vt,Te,gt,lt,it,Je,be,Ie);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else hn?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Vt,Te,gt,lt,Ht,be,Ie,Be,_t,qe,Ft.data):X.isCompressedArrayTexture?k.compressedTexSubImage3D(Vt,Te,gt,lt,Ht,be,Ie,Be,_t,Ft.data):k.texSubImage3D(Vt,Te,gt,lt,Ht,be,Ie,Be,_t,qe,Ft):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Te,gt,lt,be,Ie,_t,qe,Ft.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Te,gt,lt,Ft.width,Ft.height,_t,Ft.data):k.texSubImage2D(k.TEXTURE_2D,Te,gt,lt,be,Ie,_t,qe,Ft);k.pixelStorei(k.UNPACK_ROW_LENGTH,mt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,dn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,$i),k.pixelStorei(k.UNPACK_SKIP_ROWS,En),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Mi),Te===0&&X.generateMipmaps&&k.generateMipmap(Vt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(A,X,ne=null,Z=null,Y=0){return Rl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,ne,Z,Y)},this.initRenderTarget=function(A){Xe.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Ye.unbindTexture()},this.resetState=function(){H=0,U=0,q=null,Ye.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Tt._getUnpackColorSpace()}}const ZM=()=>{const s=Un.useRef(null),e=Jm(c=>c.theme),n=Un.useRef(null),r=Un.useRef(null),a=1e3,l=[];for(let c=0;c<a;c++){const d=(Math.random()-.5)*1e3,h=(Math.random()-.5)*1e3,m=(Math.random()-.5)*1e3;l.push(d,h,m)}return Un.useEffect(()=>{if(!s.current)return;const c=new nx;n.current=c,c.background=e==="dark"?new Et(0):new Et(16777215);const d=new Jn(75,window.innerWidth/window.innerHeight,.1,1e3);d.position.z=7;const h=new KM({antialias:!0});h.setSize(window.innerWidth,window.innerHeight),h.setPixelRatio(window.devicePixelRatio),s.current.appendChild(h.domElement);const m=new Xi,v=new fx().load("https://threejs.org/examples/textures/sprites/disc.png");m.setAttribute("position",new Tr(l,3));const x=new wg({color:e==="dark"?16777215:0,size:4,map:v,alphaTest:.9,transparent:!0});r.current=x;const S=new sx(m,x),T=new Io;T.position.z=-100,T.add(S),c.add(T);const w=()=>{requestAnimationFrame(w),S.rotation.z+=9e-4,S.rotation.y-=9e-4,h.render(c,d)};w();const y=()=>{d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y),s.current&&s.current.removeChild(h.domElement),h.dispose()}},[]),Un.useEffect(()=>{n.current&&(n.current.background=e==="dark"?new Et(0):new Et(16777215)),r.current&&r.current.color.set(e==="dark"?16777215:0)},[e]),fe.jsx("div",{ref:s,className:"fixed inset-0 -z-10"})};var Jc={exports:{}},ef,Fm;function QM(){if(Fm)return ef;Fm=1;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ef=s,ef}var tf,Om;function JM(){if(Om)return tf;Om=1;var s=QM();function e(){}function n(){}return n.resetWarningCache=e,tf=function(){function r(c,d,h,m,g,v){if(v!==s){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}r.isRequired=r;function a(){return r}var l={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:e};return l.PropTypes=l,l},tf}var km;function e1(){return km||(km=1,Jc.exports=JM()()),Jc.exports}var t1=e1();const zt=Yf(t1);function Bm(s,e){var n=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(s,a).enumerable})),n.push.apply(n,r)}return n}function zm(s){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Bm(Object(n),!0).forEach(function(r){Dg(s,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(n)):Bm(Object(n)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(n,r))})}return s}function Pl(s){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Pl=function(e){return typeof e}:Pl=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pl(s)}function Dg(s,e,n){return e in s?Object.defineProperty(s,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):s[e]=n,s}function n1(s,e){if(s==null)return{};var n={},r=Object.keys(s),a,l;for(l=0;l<r.length;l++)a=r[l],!(e.indexOf(a)>=0)&&(n[a]=s[a]);return n}function i1(s,e){if(s==null)return{};var n=n1(s,e),r,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(s);for(a=0;a<l.length;a++)r=l[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(s,r)&&(n[r]=s[r])}return n}function r1(s,e){return s1(s)||o1(s,e)||a1(s,e)||l1()}function s1(s){if(Array.isArray(s))return s}function o1(s,e){var n=s&&(typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"]);if(n!=null){var r=[],a=!0,l=!1,c,d;try{for(n=n.call(s);!(a=(c=n.next()).done)&&(r.push(c.value),!(e&&r.length===e));a=!0);}catch(h){l=!0,d=h}finally{try{!a&&n.return!=null&&n.return()}finally{if(l)throw d}}return r}}function a1(s,e){if(s){if(typeof s=="string")return Hm(s,e);var n=Object.prototype.toString.call(s).slice(8,-1);if(n==="Object"&&s.constructor&&(n=s.constructor.name),n==="Map"||n==="Set")return Array.from(s);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hm(s,e)}}function Hm(s,e){(e==null||e>s.length)&&(e=s.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=s[n];return r}function l1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Wn=function(e,n,r){var a=!!r,l=At.useRef(r);At.useEffect(function(){l.current=r},[r]),At.useEffect(function(){if(!a||!e)return function(){};var c=function(){l.current&&l.current.apply(l,arguments)};return e.on(n,c),function(){e.off(n,c)}},[a,n,e,l])},u1=function(e){var n=At.useRef(e);return At.useEffect(function(){n.current=e},[e]),n.current},Il=function(e){return e!==null&&Pl(e)==="object"},Vm="[object Object]",c1=function s(e,n){if(!Il(e)||!Il(n))return e===n;var r=Array.isArray(e),a=Array.isArray(n);if(r!==a)return!1;var l=Object.prototype.toString.call(e)===Vm,c=Object.prototype.toString.call(n)===Vm;if(l!==c)return!1;if(!l&&!r)return e===n;var d=Object.keys(e),h=Object.keys(n);if(d.length!==h.length)return!1;for(var m={},g=0;g<d.length;g+=1)m[d[g]]=!0;for(var v=0;v<h.length;v+=1)m[h[v]]=!0;var x=Object.keys(m);if(x.length!==d.length)return!1;var S=e,T=n,w=function(_){return s(S[_],T[_])};return x.every(w)},f1=function(e,n,r){return Il(e)?Object.keys(e).reduce(function(a,l){var c=!Il(n)||!c1(e[l],n[l]);return r.includes(l)?(c&&console.warn("Unsupported prop change: options.".concat(l," is not a mutable property.")),a):c?zm(zm({},a||{}),{},Dg({},l,e[l])):a},null):null},Ig=At.createContext(null);Ig.displayName="ElementsContext";var d1=function(e,n){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(n," in an <Elements> provider."));return e};zt.any,zt.object;zt.func.isRequired;var Ng=At.createContext(null);Ng.displayName="CheckoutSdkContext";var h1=function(e,n){if(!e)throw new Error("Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(n," in an <CheckoutProvider> provider."));return e},p1=At.createContext(null);p1.displayName="CheckoutContext";zt.any,zt.shape({fetchClientSecret:zt.func.isRequired,elementsOptions:zt.object}).isRequired;var Gm=function(e){var n=At.useContext(Ng),r=At.useContext(Ig);if(n&&r)throw new Error("You cannot wrap the part of your app that ".concat(e," in both <CheckoutProvider> and <Elements> providers."));return n?h1(n,e):d1(r,e)},m1=["mode"],g1=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},$t=function(e,n){var r="".concat(g1(e),"Element"),a=function(h){var m=h.id,g=h.className,v=h.options,x=v===void 0?{}:v,S=h.onBlur,T=h.onFocus,w=h.onReady,y=h.onChange,_=h.onEscape,N=h.onClick,I=h.onLoadError,b=h.onLoaderStart,j=h.onNetworksChange,H=h.onConfirm,U=h.onCancel,q=h.onShippingAddressChange,P=h.onShippingRateChange,C=Gm("mounts <".concat(r,">")),z="elements"in C?C.elements:null,re="checkoutSdk"in C?C.checkoutSdk:null,ee=At.useState(null),de=r1(ee,2),ue=de[0],le=de[1],oe=At.useRef(null),B=At.useRef(null);Wn(ue,"blur",S),Wn(ue,"focus",T),Wn(ue,"escape",_),Wn(ue,"click",N),Wn(ue,"loaderror",I),Wn(ue,"loaderstart",b),Wn(ue,"networkschange",j),Wn(ue,"confirm",H),Wn(ue,"cancel",U),Wn(ue,"shippingaddresschange",q),Wn(ue,"shippingratechange",P),Wn(ue,"change",y);var ae;w&&(e==="expressCheckout"?ae=w:ae=function(){w(ue)}),Wn(ue,"ready",ae),At.useLayoutEffect(function(){if(oe.current===null&&B.current!==null&&(z||re)){var R=null;if(re)switch(e){case"payment":R=re.createPaymentElement(x);break;case"address":if("mode"in x){var W=x.mode,Me=i1(x,m1);if(W==="shipping")R=re.createShippingAddressElement(Me);else if(W==="billing")R=re.createBillingAddressElement(Me);else throw new Error("Invalid options.mode. mode must be 'billing' or 'shipping'.")}else throw new Error("You must supply options.mode. mode must be 'billing' or 'shipping'.");break;case"expressCheckout":R=re.createExpressCheckoutElement(x);break;case"currencySelector":R=re.createCurrencySelectorElement();break;default:throw new Error("Invalid Element type ".concat(r,". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />."))}else z&&(R=z.create(e,x));oe.current=R,le(R),R&&R.mount(B.current)}},[z,re,x]);var F=u1(x);return At.useEffect(function(){if(oe.current){var R=f1(x,F,["paymentRequest"]);R&&"update"in oe.current&&oe.current.update(R)}},[x,F]),At.useLayoutEffect(function(){return function(){if(oe.current&&typeof oe.current.destroy=="function")try{oe.current.destroy(),oe.current=null}catch{}}},[]),At.createElement("div",{id:m,className:g,ref:B})},l=function(h){Gm("mounts <".concat(r,">"));var m=h.id,g=h.className;return At.createElement("div",{id:m,className:g})},c=n?l:a;return c.propTypes={id:zt.string,className:zt.string,onChange:zt.func,onBlur:zt.func,onFocus:zt.func,onReady:zt.func,onEscape:zt.func,onClick:zt.func,onLoadError:zt.func,onLoaderStart:zt.func,onNetworksChange:zt.func,onConfirm:zt.func,onCancel:zt.func,onShippingAddressChange:zt.func,onShippingRateChange:zt.func,options:zt.object},c.displayName=r,c.__elementType=e,c},Kt=typeof window>"u",v1=At.createContext(null);v1.displayName="EmbeddedCheckoutProviderContext";$t("auBankAccount",Kt);var _1=$t("card",Kt);$t("cardNumber",Kt);$t("cardExpiry",Kt);$t("cardCvc",Kt);$t("fpxBank",Kt);$t("iban",Kt);$t("idealBank",Kt);$t("p24Bank",Kt);$t("epsBank",Kt);$t("payment",Kt);$t("expressCheckout",Kt);$t("currencySelector",Kt);$t("paymentRequestButton",Kt);$t("linkAuthentication",Kt);$t("address",Kt);$t("shippingAddress",Kt);$t("paymentMethodMessaging",Kt);$t("affirmMessage",Kt);$t("afterpayClearpayMessage",Kt);var nf,Wm;function x1(){if(Wm)return nf;Wm=1;var s=Object.defineProperty,e=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,r=Object.prototype.hasOwnProperty,a=(F,R)=>{for(var W in R)s(F,W,{get:R[W],enumerable:!0})},l=(F,R,W,Me)=>{if(R&&typeof R=="object"||typeof R=="function")for(let $ of n(R))!r.call(F,$)&&$!==W&&s(F,$,{get:()=>R[$],enumerable:!(Me=e(R,$))||Me.enumerable});return F},c=F=>l(s({},"__esModule",{value:!0}),F),d=(F,R,W)=>new Promise((Me,$)=>{var ce=we=>{try{ge(W.next(we))}catch(He){$(He)}},_e=we=>{try{ge(W.throw(we))}catch(He){$(He)}},ge=we=>we.done?Me(we.value):Promise.resolve(we.value).then(ce,_e);ge((W=W.apply(F,R)).next())}),h={};a(h,{SubmissionError:()=>b,appendExtraData:()=>ee,createClient:()=>oe,getDefaultClient:()=>B,isSubmissionError:()=>I}),nf=c(h);var m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",g=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;function v(F){F=String(F);for(var R,W,Me,$,ce="",_e=0,ge=F.length%3;_e<F.length;){if((W=F.charCodeAt(_e++))>255||(Me=F.charCodeAt(_e++))>255||($=F.charCodeAt(_e++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");R=W<<16|Me<<8|$,ce+=m.charAt(R>>18&63)+m.charAt(R>>12&63)+m.charAt(R>>6&63)+m.charAt(R&63)}return ge?ce.slice(0,ge-3)+"===".substring(ge):ce}function x(F){if(F=String(F).replace(/[\t\n\f\r ]+/g,""),!g.test(F))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");F+="==".slice(2-(F.length&3));for(var R,W="",Me,$,ce=0;ce<F.length;)R=m.indexOf(F.charAt(ce++))<<18|m.indexOf(F.charAt(ce++))<<12|(Me=m.indexOf(F.charAt(ce++)))<<6|($=m.indexOf(F.charAt(ce++))),W+=Me===64?String.fromCharCode(R>>16&255):$===64?String.fromCharCode(R>>16&255,R>>8&255):String.fromCharCode(R>>16&255,R>>8&255,R&255);return W}var S=()=>navigator.webdriver||!!document.documentElement.getAttribute(x("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom,T=class{constructor(){this.loadedAt=Date.now(),this.webdriver=S()}data(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}},w=class{constructor(F){this.kind="success",this.next=F.next}};function y(F){return"next"in F&&typeof F.next=="string"}var _=class{constructor(F,R){this.paymentIntentClientSecret=F,this.resubmitKey=R,this.kind="stripePluginPending"}};function N(F){if("stripe"in F&&"resubmitKey"in F&&typeof F.resubmitKey=="string"){let{stripe:R}=F;return typeof R=="object"&&R!=null&&"paymentIntentClientSecret"in R&&typeof R.paymentIntentClientSecret=="string"}return!1}function I(F){return F.kind==="error"}var b=class{constructor(...F){this.kind="error",this.formErrors=[],this.fieldErrors=new Map;var R;for(let W of F){if(!W.field){this.formErrors.push({code:W.code&&j(W.code)?W.code:"UNSPECIFIED",message:W.message});continue}let Me=(R=this.fieldErrors.get(W.field))!=null?R:[];Me.push({code:W.code&&U(W.code)?W.code:"UNSPECIFIED",message:W.message}),this.fieldErrors.set(W.field,Me)}}getFormErrors(){return[...this.formErrors]}getFieldErrors(F){var R;return(R=this.fieldErrors.get(F))!=null?R:[]}getAllFieldErrors(){return Array.from(this.fieldErrors)}};function j(F){return F in H}var H={BLOCKED:"BLOCKED",EMPTY:"EMPTY",FILES_TOO_BIG:"FILES_TOO_BIG",FORM_NOT_FOUND:"FORM_NOT_FOUND",INACTIVE:"INACTIVE",NO_FILE_UPLOADS:"NO_FILE_UPLOADS",PROJECT_NOT_FOUND:"PROJECT_NOT_FOUND",TOO_MANY_FILES:"TOO_MANY_FILES"};function U(F){return F in q}var q={REQUIRED_FIELD_EMPTY:"REQUIRED_FIELD_EMPTY",REQUIRED_FIELD_MISSING:"REQUIRED_FIELD_MISSING",STRIPE_CLIENT_ERROR:"STRIPE_CLIENT_ERROR",STRIPE_SCA_ERROR:"STRIPE_SCA_ERROR",TYPE_EMAIL:"TYPE_EMAIL",TYPE_NUMERIC:"TYPE_NUMERIC",TYPE_TEXT:"TYPE_TEXT"};function P(F){return"errors"in F&&Array.isArray(F.errors)&&F.errors.every(R=>typeof R.message=="string")||"error"in F&&typeof F.error=="string"}var C="4.0.0",z=F=>v(JSON.stringify(F)),re=F=>{let R=`@formspree/core@${C}`;return F?`${F} ${R}`:R};function ee(F,R,W){F instanceof FormData?F.append(R,W):F[R]=W}function de(F){return F!==null&&typeof F=="object"}var ue=class{constructor(F={}){this.project=F.project,this.stripe=F.stripe,typeof window<"u"&&(this.session=new T)}submitForm(F,R){return d(this,arguments,function*(W,Me,$={}){let ce=$.endpoint||"https://formspree.io",_e=this.project?`${ce}/p/${this.project}/f/${W}`:`${ce}/f/${W}`,ge={Accept:"application/json","Formspree-Client":re($.clientName)};this.session&&(ge["Formspree-Session-Data"]=z(this.session.data())),Me instanceof FormData||(ge["Content-Type"]="application/json");function we(Ue){return d(this,null,function*(){try{let tt=yield(yield fetch(_e,{method:"POST",mode:"cors",body:Ue instanceof FormData?Ue:JSON.stringify(Ue),headers:ge})).json();if(de(tt)){if(P(tt))return Array.isArray(tt.errors)?new b(...tt.errors):new b({message:tt.error});if(N(tt))return new _(tt.stripe.paymentIntentClientSecret,tt.resubmitKey);if(y(tt))return new w({next:tt.next})}return new b({message:"Unexpected response format"})}catch(tt){let wt=tt instanceof Error?tt.message:`Unknown error while posting to Formspree: ${JSON.stringify(tt)}`;return new b({message:wt})}})}if(this.stripe&&$.createPaymentMethod){let Ue=yield $.createPaymentMethod();if(Ue.error)return new b({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Error creating payment method"});ee(Me,"paymentMethod",Ue.paymentMethod.id);let tt=yield we(Me);if(tt.kind==="error")return tt;if(tt.kind==="stripePluginPending"){let wt=yield this.stripe.handleCardAction(tt.paymentIntentClientSecret);if(wt.error)return new b({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Stripe SCA error"});Me instanceof FormData?Me.delete("paymentMethod"):delete Me.paymentMethod,ee(Me,"paymentIntent",wt.paymentIntent.id),ee(Me,"resubmitKey",tt.resubmitKey);let at=yield we(Me);return le(at),at}return tt}let He=yield we(Me);return le(He),He})}};function le(F){let{kind:R}=F;if(R!=="success"&&R!=="error")throw new Error(`Unexpected submission result (kind: ${R})`)}var oe=F=>new ue(F),B=()=>(ae||(ae=oe()),ae),ae;return nf}var sd=x1();function Xm(s){let{prefix:e,field:n,errors:r,...a}=s;if(r==null)return null;let l=n?r.getFieldErrors(n):r.getFormErrors();return l.length===0?null:At.createElement("div",{...a},e?`${e} `:null,l.map(c=>c.message).join(", "))}var y1=Un.createContext({elements:null});function S1(){return Un.useContext(y1)}var E1=At.createContext(null);function M1(){return Un.useContext(E1)??{client:sd.getDefaultClient()}}var T1="3.0.0",w1=`@formspree/react@${T1}`;function A1(s,e={}){let n=M1(),{client:r=n.client,extraData:a,origin:l}=e,{elements:c}=S1(),{stripe:d}=r;return async function(h){let m=C1(h)?R1(h):h;if(typeof a=="object")for(let[x,S]of Object.entries(a)){let T;typeof S=="function"?T=await S():T=S,T!==void 0&&sd.appendExtraData(m,x,T)}let g=c==null?void 0:c.getElement(_1),v=d&&g?()=>d.createPaymentMethod({type:"card",card:g,billing_details:b1(m)}):void 0;return r.submitForm(s,m,{endpoint:l,clientName:w1,createPaymentMethod:v})}}function C1(s){return"preventDefault"in s&&typeof s.preventDefault=="function"}function R1(s){s.preventDefault();let e=s.currentTarget;if(e.tagName!="FORM")throw new Error("submit was triggered for a non-form element");return new FormData(e)}function b1(s){let e={address:P1(s)};for(let n of["name","email","phone"]){let r=s instanceof FormData?s.get(n):s[n];r&&typeof r=="string"&&(e[n]=r)}return e}function P1(s){let e={};for(let[n,r]of[["address_line1","line1"],["address_line2","line2"],["address_city","city"],["address_country","country"],["address_state","state"],["address_postal_code","postal_code"]]){let a=s instanceof FormData?s.get(n):s[n];a&&typeof a=="string"&&(e[r]=a)}return e}function L1(s,e={}){let[n,r]=Un.useState(null),[a,l]=Un.useState(null),[c,d]=Un.useState(!1),[h,m]=Un.useState(!1),g=A1(s,{client:e.client,extraData:e.data,origin:e.endpoint});return[{errors:n,result:a,submitting:c,succeeded:h},async function(v){d(!0);let x=await g(v);d(!1),sd.isSubmissionError(x)?(r(x),m(!1)):(r(null),l(x),m(!0))},function(){r(null),l(null),d(!1),m(!1)}]}const D1=()=>{const[s,e,n]=L1("xvgaqzng");return s.succeeded?fe.jsx("div",{children:"Thanks for reaching out! "}):fe.jsx("section",{id:"contact",className:`relative z-0 scroll-mt-24 relative z-[500] flex \r
          justify-center p-8 l:scroll-mt-24 l:px-0 l:pb-24 l:pt-8`,children:fe.jsxs("div",{className:` w-full max-w-3xl rounded-xl border-3 border-box-border bg-body-bg \r
                      p-4 py-8 l:mx-auto l:max-w-[50rem] l:p-16 bg-box-bg`,children:[fe.jsxs("div",{className:"relative flex flex-col items-center justify-center gap-8 l:gap-16",children:[fe.jsxs(Km,{children:[" ",fe.jsx("span",{className:"!bg-gradient-to-r !from-purple-300 !to-blue-600 !bg-clip-text !text-transparent",children:"Contact Me"})]}),fe.jsx("p",{className:"text-lg mb-10 text-white justify-center text-center",children:"I would love to hear from you! Please fill out the form below and I will get back to you as soon as possible."})]}),fe.jsx("div",{className:"w-full max-w-xl mx-auto ",children:fe.jsx("form",{className:"relative w-full scroll-mt-32",onSubmit:e,children:fe.jsxs("div",{className:"flex w-full flex-col gap-6 transition duration-300 ease-in-out l:grid l:grid-cols-2",children:[fe.jsx("div",{className:"contents active-cursor relative rounded-lg",children:fe.jsxs("div",{className:`relative inline-flex h-16 w-full items-center justify-center rounded-lg \r
                                transition duration-100 ease-in-out border ring-box-border `,children:[fe.jsx("input",{className:`relative rounded-lg  w-full scroll-mt-32 !border-none bg-transparent pt-7 p-4 \r
                              text-sm font-normal l:pr-4 l:text-sm focus:ring-2 focus:ring-offset-2 hover:cursor-pointer hover:ring-2\r
                              transition duration-200 text-heading-1 text-heading-1`,placeholder:" ",required:!0,type:"text"}),fe.jsx("label",{className:`filled-text-fade absolute left-0 top-0 z-0 scroll-mt-32 pl-3 pt-1 font-sohne text-sm font-bold uppercase tracking-widest transition duration-300 ease-in-out\r
                   text-heading-1 !bg-gradient-to-r !from-purple-300 !to-blue-600 !bg-clip-text !text-transparent`,children:"Your Name"})]})}),fe.jsx("div",{className:"contents active-cursor relative rounded-xl bg-gradient-to-r from-pink via-yellow to-blue p-1.5",children:fe.jsxs("div",{className:`relative inline-flex h-16 w-full items-center justify-center rounded-lg transition duration-300 ease-in-out \r
                              border  hover:ring-2`,children:[fe.jsx("input",{id:"email",type:"email",name:"email",className:`relative  z-10 w-full scroll-mt-32 border rounded-lg bg-transparent p-4 pr-4 pt-7 text-sm \r
                    font-normal focus:ring-2 focus:ring-offset-2 \r
                    hover:cursor-pointer hover:ring-2\r
                    transition duration-200 text-heading-1`,placeholder:""}),fe.jsx("label",{htmlFor:"email",className:`filled-text-fade absolute left-0 top-0 z-0 scroll-mt-32 pl-3 pt-2 font-sohne text-sm font-bold uppercase tracking-widest transition duration-300 ease-in-out text-white \r
                      !bg-gradient-to-r !from-purple-300 !to-blue-600 !bg-clip-text !text-transparent`,children:"Email Address"}),fe.jsx(Xm,{prefix:"Email",field:"email",errors:s.errors})]})}),fe.jsx("div",{className:"contents active-cursor relative rounded-xl bg-gradient-to-r from-pink via-yellow to-blue p-1.5 col-span-2",children:fe.jsxs("div",{className:"relative inline-flex h-full w-full items-center justify-center rounded-lg transition duration-300 ease-in border border-gray-900 bg-gray-1100",children:[fe.jsx("textarea",{id:"message",name:"message",rows:"6",className:`w-full px-4 py-8 rounded-lg border text-sm\r
                    focus:ring-2 focus:ring-offset-2 \r
                    hover:cursor-pointer hover:ring-2\r
                    transition duration-200 text-heading-1`}),fe.jsx("label",{className:`filled-text-fade absolute left-3 top-3 z-10 scroll-mt-32 font-sohne text-8pt font-bold uppercase tracking-widest transition duration-300 ease-in-out text-sm\r
                       !bg-gradient-to-r !from-purple-300 !to-blue-600 !bg-clip-text !text-transparent`,children:"What's on your mind?"}),fe.jsx(Xm,{prefix:"Message",field:"message",errors:s.errors})]})}),fe.jsx("div",{className:"relative mt-4 block w-full l:mt-8",children:fe.jsx("div",{className:"relative inset-0 z-10 flex h-full w-full items-center justify-center p-8",children:fe.jsx("div",{className:"bg-white text-black rounded-full   group/button inline-block border-px border-transparent transition duration-300 ease-in-out hover:scale-105 cursor-pointer",children:fe.jsx("button",{type:"submit",disabled:s.submitting,className:"px-6 py-3 rounded-full font-semibold border-4 border-box-border transition duration-200 hover:shadow-lg disabled:opacity-50",children:"Submit"})})})})]})})})]})})};var Ug={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},jm=At.createContext&&At.createContext(Ug),I1=["attr","size","title"];function N1(s,e){if(s==null)return{};var n=U1(s,e),r,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(s);for(a=0;a<l.length;a++)r=l[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(s,r)&&(n[r]=s[r])}return n}function U1(s,e){if(s==null)return{};var n={};for(var r in s)if(Object.prototype.hasOwnProperty.call(s,r)){if(e.indexOf(r)>=0)continue;n[r]=s[r]}return n}function Nl(){return Nl=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(s[r]=n[r])}return s},Nl.apply(this,arguments)}function Ym(s,e){var n=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(s,a).enumerable})),n.push.apply(n,r)}return n}function Ul(s){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ym(Object(n),!0).forEach(function(r){F1(s,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(n)):Ym(Object(n)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(n,r))})}return s}function F1(s,e,n){return e=O1(e),e in s?Object.defineProperty(s,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):s[e]=n,s}function O1(s){var e=k1(s,"string");return typeof e=="symbol"?e:e+""}function k1(s,e){if(typeof s!="object"||!s)return s;var n=s[Symbol.toPrimitive];if(n!==void 0){var r=n.call(s,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function Fg(s){return s&&s.map((e,n)=>At.createElement(e.tag,Ul({key:n},e.attr),Fg(e.child)))}function ji(s){return e=>At.createElement(B1,Nl({attr:Ul({},s.attr)},e),Fg(s.child))}function B1(s){var e=n=>{var{attr:r,size:a,title:l}=s,c=N1(s,I1),d=a||n.size||"1em",h;return n.className&&(h=n.className),s.className&&(h=(h?h+" ":"")+s.className),At.createElement("svg",Nl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,c,{className:h,style:Ul(Ul({color:s.color||n.color},n.style),s.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&At.createElement("title",null,l),s.children)};return jm!==void 0?At.createElement(jm.Consumer,null,n=>e(n)):e(Ug)}function z1(s){return ji({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"},child:[]}]})(s)}function H1(s){return ji({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(s)}function V1(s){return ji({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(s)}function G1(s){return ji({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(s)}function W1(s){return ji({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"},child:[]}]})(s)}function X1(s){return ji({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"},child:[]}]})(s)}function j1(s){return ji({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8.9 0 1.8.1 2.8.2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7.3 13.7.3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1zM504 256c0 136.8-111.3 248-248 248C119.2 504 8 392.7 8 256 8 119.2 119.2 8 256 8c136.7 0 248 111.2 248 248zm-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6z"},child:[]}]})(s)}function Y1(s){return ji({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(s)}function q1(s){return ji({attr:{viewBox:"0 0 288 512"},child:[{tag:"path",attr:{d:"M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"},child:[]}]})(s)}const $1=[{title:"Web Development",description:"Custom websites built with modern technologies like React, TypeScript, and Tailwind CSS.",icon:"🌐"},{title:"UI/UX Design",description:"Creating intuitive and beautiful user interfaces that engage and delight users.",icon:"🎨"},{title:"Technical Writing",description:"Clear and concise documentation, blog posts, and technical articles.",icon:"✍️"}],K1=({title:s,description:e,icon:n})=>fe.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300",children:[fe.jsx("div",{className:"text-4xl mb-4",children:n}),fe.jsx("h3",{className:"text-xl font-bold mb-2 text-gray-900 dark:text-white",children:s}),fe.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:e})]}),Z1=()=>fe.jsx("section",{id:"services",className:"py-20 bg-body-bg",children:fe.jsxs(Fl,{children:[fe.jsxs("div",{className:"text-center mb-12",children:[fe.jsx("h2",{className:"text-4xl font-bold mb-4",children:fe.jsx("span",{className:"gradient-text",children:" Services "})}),fe.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300",children:"I offer a range of services to help you achieve your goals."})]}),fe.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:$1.map((s,e)=>fe.jsx(K1,{...s},e))})]})}),Q1=[{name:"GitHub",url:"https://github.com/tahaListens",icon:fe.jsx(H1,{})},{name:"Blog",url:"https://teeheetaha.wordpress.com",icon:fe.jsx(j1,{})},{name:"Youtube",url:"https://www.youtube.com/@tahaListens",icon:fe.jsx(Y1,{})},{name:"Twitch",url:"https://www.twitch.tv/tahalistens",icon:fe.jsx(X1,{})},{name:"LinkedIn",url:"https://linkedin.com/in/tahalistens",icon:fe.jsx(G1,{})},{name:"Instagram",url:"https://www.instagram.com/tahalistens",icon:fe.jsx(V1,{})},{name:"Discord",url:"https://discord.gg/kuym92hC6P",icon:fe.jsx(z1,{})},{name:"TikTok",url:"https://www.tiktok.com/@tahalistens",icon:fe.jsx(W1,{})},{name:"Donate",url:"https://paypal.me/tahaListens?country.x=US&locale.x=en_US",icon:fe.jsx(q1,{})}],J1=()=>fe.jsxs("div",{children:[fe.jsx(ZM,{}),fe.jsx("div",{className:" flex min-h-screen flex-col pt-20",children:fe.jsxs(w_,{title:"tahaListens",children:[fe.jsx(F_,{}),fe.jsx(k_,{}),fe.jsx(A_,{links:Q1}),fe.jsx(Z1,{}),fe.jsx(C_,{}),fe.jsx(D1,{}),fe.jsx(O_,{})]})})]});T_.createRoot(document.getElementById("root")).render(fe.jsx(At.StrictMode,{children:fe.jsx(J1,{})}));
