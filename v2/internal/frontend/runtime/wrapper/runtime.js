(()=>{var u=Object.defineProperty;var d=n=>u(n,"__esModule",{value:!0});var t=(n,i)=>{d(n);for(var o in i)u(n,o,{get:i[o],enumerable:!0})};var e={};t(e,{LogDebug:()=>p,LogError:()=>x,LogFatal:()=>f,LogInfo:()=>W,LogTrace:()=>m,LogWarning:()=>c});function m(n){window.runtime.LogTrace(n)}function p(n){window.runtime.LogDebug(n)}function W(n){window.runtime.LogInfo(n)}function c(n){window.runtime.LogWarning(n)}function x(n){window.runtime.LogError(n)}function f(n){window.runtime.LogFatal(n)}var w={};t(w,{EventsEmit:()=>S,EventsOn:()=>s,EventsOnMultiple:()=>l,EventsOnce:()=>a});function l(n,i,o){window.runtime.EventsOnMultiple(n,i,o)}function s(n,i){OnMultiple(n,i,-1)}function a(n,i){OnMultiple(n,i,1)}function S(n){let i=[n].slice.call(arguments);return window.runtime.EventsEmit.apply(null,i)}var r={};t(r,{WindowCenter:()=>L,WindowFullscreen:()=>E,WindowGetPosition:()=>P,WindowGetSize:()=>z,WindowHide:()=>R,WindowMaximise:()=>b,WindowMinimise:()=>A,WindowReload:()=>g,WindowSetMaxSize:()=>G,WindowSetMinSize:()=>O,WindowSetPosition:()=>U,WindowSetRGBA:()=>C,WindowSetSize:()=>F,WindowSetTitle:()=>M,WindowShow:()=>T,WindowUnFullscreen:()=>v,WindowUnmaximise:()=>h,WindowUnminimise:()=>B});function g(){window.runtime.WindowReload()}function L(){window.runtime.WindowCenter()}function M(n){window.runtime.WindowSetTitle(n)}function E(){window.runtime.WindowFullscreen()}function v(){window.runtime.WindowUnFullscreen()}function z(){window.runtime.WindowGetSize()}function F(n,i){window.runtime.WindowSetSize(n,i)}function G(n,i){window.runtime.WindowSetMaxSize(n,i)}function O(n,i){window.runtime.WindowSetMinSize(n,i)}function U(n,i){window.runtime.WindowSetPosition(n,i)}function P(){window.runtime.WindowGetPosition()}function R(){window.runtime.WindowHide()}function T(){window.runtime.WindowShow()}function b(){window.runtime.WindowMaximise()}function h(){window.runtime.WindowUnmaximise()}function A(){window.runtime.WindowMinimise()}function B(){window.runtime.WindowUnminimise()}function C(n){window.runtime.WindowSetRGBA(n)}function D(){window.runtime.Quit()}var I={...e,...w,...r,Quit:D};})();
