import{j as e,a as o,B as a,r as h,L as p,R as u,b as m,c as f,d as g,e as A}from"./vendor.0f12278f.js";const y=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function c(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(r){if(r.ep)return;r.ep=!0;const t=c(r);fetch(r.href,t)}};y();var l="/assets/fish.7a7f1771.png";const b=()=>e("div",{className:"App",children:o("header",{className:"App-header",children:[e("img",{src:l,className:"App-logo",alt:"logo"}),"About",e(a,{onClick:()=>{window.history.go(-1)},children:"GoBack"})]})}),N=()=>{const[n,s]=h.exports.useState(0);return e("div",{className:"App",children:o("header",{className:"App-header",children:[e("img",{src:l,className:"App-logo",alt:"logo"}),o("p",{className:"header",children:["\u{1F680} + React + Typescript \u{1F918} & ",e("br",{}),"Eslint \u{1F525}+ Prettier"]}),o("div",{className:"body",children:[e(a,{type:"primary",children:e(p,{to:"/home",children:"Home"})}),o(a,{onClick:()=>s(c=>c+1),children:["\u{1FA82} Click me : ",n]}),e(a,{type:"primary",children:e(p,{to:"/about",children:"About"})}),e("p",{children:" Don't forgot to install Eslint and Prettier in Your Vscode."}),o("p",{children:["Mess up the code in ",e("code",{children:"App.tsx "})," and save the file."]}),o("p",{children:[e("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})," | ",e("a",{className:"App-link",href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener noreferrer",children:"Vite Docs"})," | ",e("a",{className:"App-link",href:"https://github.com/wuqiren",target:"_blank",rel:"noopener noreferrer",children:"Fish's blog"})]})]})]})})},v=()=>e("div",{className:"App",children:o("header",{className:"App-header",children:[e("img",{src:l,className:"App-logo",alt:"logo"}),"Home",e(a,{onClick:()=>{window.history.go(-1)},children:"GoBack"})]})}),k=[{path:"/",component:e(N,{})},{path:"/home",component:e(v,{})},{path:"/about",component:e(b,{})}];u.render(e(m.StrictMode,{children:e(f,{children:e(g,{children:k.map(n=>e(A,{path:n.path,element:n.component},n.path))})})}),document.getElementById("root"));