!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).transitions=t()}}(function(){return function t(e,n,r){function o(a,s){if(!n[a]){if(!e[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var f=n[a]={exports:{}};e[a][0].call(f.exports,function(t){var n=e[a][1][t];return o(n||t)},f,f.exports,t,e,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(t,e,n){function r(t){t.parentNode&&t.parentNode.removeChild(t)}function o(t,e){e.style.transition=`all ${t.easing} ${t.time}ms`}function i(t){return e=>{var n="function"==typeof t?t():t;return Object.assign({},l,n)}}function a(t,e){return function(n){const r=i(n),o=(...t)=>e(r(),...t);return function(e){const n=e.data[t]||(t=>{});return e.data[t]=((...t)=>{n(...t),o(...t)}),e}}}function s(t){const e=+t.getAttribute("data-t-x"),n=+t.getAttribute("data-t-y"),{left:r,top:o}=t.getBoundingClientRect();return t.setAttribute("data-t-x",r),t.setAttribute("data-t-y",o),e?[e-r,n-o]:[null,null]}function u(...t){const e=[...t],n=e.length;var r=e[0];if(1===n)return r;var o;return o=n>2?u(...e.slice(1)):e[1],t=>r(o(t))}const l={name:"",time:0,delay:0,ready:0,easing:"",last:!0},f=a("onremove",(t,e)=>{const n=`${t.name}-leave`;e.style.transition="all 99s",e.style.transform="",e.classList.add(n);const i=getComputedStyle(e).getPropertyValue("transform"),[a,u,l,f,c,d]="none"===i?[1,0,0,1,0,0]:i.match(/^matrix\(([^\)]*)\)$/)[1].split(", ").map(t=>+t);e.classList.remove(n);const[m,y]=s(e);e.style.transform=`translate(${m}px, ${y}px)`,setTimeout(i=>{e.classList.add(n),e.style.transform=`matrix(${a}, ${u}, ${l}, ${f}, ${c+m}, ${d+y})`,o(t,e),t.last&&setTimeout(t=>r(e),t.time)},t.delay)}),c=a("oncreate",(t,e)=>setTimeout(t=>s(e),t.ready)),d=a("oncreate",(t,e)=>{const n=`${t.name}-enter`;e.classList.add(n),setTimeout(r=>{o(t,e),e.classList.remove(n)},t.delay)}),m=a("oncreate",(t,e)=>o(t,e)),y=a("onupdate",(t,e)=>{const[n,r]=s(e);e.style.transition="",e.style.transform=`translate(${n}px, ${r}px)`,setTimeout(n=>{o(t,e),e.style.transition=`all ${t.easing} ${t.time}ms`,e.style.transform="translate(0,0)",setTimeout(t=>{e.style.transform="",e.style.transition=""},t.time)})}),p=a("oncreate",(t,e)=>setTimeout(t=>s(e),t.ready));e.exports={change:m,enter:d,leave:t=>u(c(t),f(t)),move:t=>u(p(t),y(t)),group:function(t){return e=>(e.children.forEach(t),e)},combine:u}},{}]},{},[1])(1)});
