import{m as e,o as t,u as r,R as n,B as a,r as c,a as s}from"./vendor.fa7accd1.js";var m=new class{constructor(){this.amount=1,e(this)}get price(){return`$${this.amount}`}increment(){this.amount+=1}};var o="_Index_71rvu_1";var l=t((function(){const e=r((()=>m));return n.createElement("div",{className:o},n.createElement(a,{theme:"primary",onClick:()=>e.increment()},"Plus 1"),n.createElement("div",null,m.price))}));var i=new class{constructor(){this.amount=1,e(this)}get price(){return`$${this.amount}`}};const u=c.exports.createContext({dataStore:i,uiStore:m});var d="_Index_1fxym_1";var p=t((function(){const{uiStore:e}=c.exports.useContext(u);return n.createElement("div",{className:d},n.createElement(a,{theme:"primary",onClick:()=>e.increment()},"inject: Plus 1"),e.price)}));function E(){return c.exports.useEffect((()=>{document.documentElement.style.setProperty("--theme-primary","#108ee9")}),[]),n.createElement("div",{className:"App"},n.createElement("header",{className:"App-header"},n.createElement(l,null),n.createElement(p,null)))}s.render(n.createElement(n.StrictMode,null,n.createElement(E,null)),document.getElementById("root"));
