function v(){}function W(t,n){for(const e in n)t[e]=n[e];return t}function T(t){return t()}function M(){return Object.create(null)}function y(t){t.forEach(T)}function D(t){return typeof t=="function"}function lt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function ft(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function G(t){return Object.keys(t).length===0}function J(t,...n){if(t==null)return v;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function at(t,n,e){t.$$.on_destroy.push(J(n,e))}function _t(t,n,e,i){if(t){const r=q(t,n,e,i);return t[0](r)}}function q(t,n,e,i){return t[1]&&i?W(e.ctx.slice(),t[1](i(n))):e.ctx}function dt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],c=Math.max(n.dirty.length,r.length);for(let o=0;o<c;o+=1)l[o]=n.dirty[o]|r[o];return l}return n.dirty|r}return n.dirty}function ht(t,n,e,i,r,l){if(r){const c=q(n,e,i,l);t.p(c,r)}}function mt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function pt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}let w=!1;function K(){w=!0}function Q(){w=!1}function R(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&s.push(a)}n=s}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let s=0;s<n.length;s++){const u=n[s].claim_order,a=(r>0&&n[e[r]].claim_order<=u?r+1:R(1,r,g=>n[e[g]].claim_order,u))-1;i[s]=e[a]+1;const f=a+1;e[f]=s,r=Math.max(f,r)}const l=[],c=[];let o=n.length-1;for(let s=e[r]+1;s!=0;s=i[s-1]){for(l.push(n[s-1]);o>=s;o--)c.push(n[o]);o--}for(;o>=0;o--)c.push(n[o]);l.reverse(),c.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<c.length;s++){for(;u<l.length&&c[s].claim_order>=l[u].claim_order;)u++;const a=u<l.length?l[u]:null;t.insertBefore(c[s],a)}}function V(t,n){if(w){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function yt(t,n,e){w&&!e?V(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function X(t){t.parentNode&&t.parentNode.removeChild(t)}function gt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function Y(t){return document.createElement(t)}function Z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function xt(){return S(" ")}function bt(){return S("")}function $t(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function B(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function vt(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set?t[i]=n[i]:B(t,i,n[i])}function wt(t,n){for(const e in n)B(t,e,n[e])}function tt(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,n,e,i,r=!1){nt(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(n(o)){const s=e(o);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(n(o)){const s=e(o);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function z(t,n,e,i){return L(t,r=>r.nodeName===n,r=>{const l=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];e[o.name]||l.push(o.name)}l.forEach(c=>r.removeAttribute(c))},()=>i(n))}function Et(t,n,e){return z(t,n,e,Y)}function kt(t,n,e){return z(t,n,e,Z)}function et(t,n){return L(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function Nt(t){return et(t," ")}function At(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function St(t,n){t.value=n??""}function jt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function it(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}function Ct(t,n){return new t(n)}let p;function m(t){p=t}function E(){if(!p)throw new Error("Function called outside component initialization");return p}function Mt(t){E().$$.on_mount.push(t)}function Ot(t){E().$$.after_update.push(t)}function Pt(t){E().$$.on_destroy.push(t)}function Tt(){const t=E();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const l=it(n,e,{cancelable:i});return r.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}const h=[],O=[],b=[],P=[],F=Promise.resolve();let N=!1;function H(){N||(N=!0,F.then(I))}function Dt(){return H(),F}function A(t){b.push(t)}const k=new Set;let d=0;function I(){if(d!==0)return;const t=p;do{try{for(;d<h.length;){const n=h[d];d++,m(n),rt(n.$$)}}catch(n){throw h.length=0,d=0,n}for(m(null),h.length=0,d=0;O.length;)O.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];k.has(e)||(k.add(e),e())}b.length=0}while(h.length);for(;P.length;)P.pop()();N=!1,k.clear(),m(t)}function rt(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const $=new Set;let _;function qt(){_={r:0,c:[],p:_}}function Bt(){_.r||y(_.c),_=_.p}function ct(t,n){t&&t.i&&($.delete(t),t.i(n))}function Lt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function zt(t,n){const e={},i={},r={$$scope:1};let l=t.length;for(;l--;){const c=t[l],o=n[l];if(o){for(const s in c)s in o||(i[s]=1);for(const s in o)r[s]||(e[s]=o[s],r[s]=1);t[l]=o}else for(const s in c)r[s]=1}for(const c in i)c in e||(e[c]=void 0);return e}function Ft(t){t&&t.c()}function Ht(t,n){t&&t.l(n)}function st(t,n,e,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(n,e),i||A(()=>{const c=t.$$.on_mount.map(T).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...c):y(c),t.$$.on_mount=[]}),l.forEach(A)}function ot(t,n){const e=t.$$;e.fragment!==null&&(y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&(h.push(t),H(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function It(t,n,e,i,r,l,c,o=[-1]){const s=p;m(t);const u=t.$$={fragment:null,ctx:[],props:l,update:v,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(s?s.$$.context:[])),callbacks:M(),dirty:o,skip_bound:!1,root:n.target||s.$$.root};c&&c(u.root);let a=!1;if(u.ctx=e?e(t,n.props||{},(f,g,...j)=>{const C=j.length?j[0]:g;return u.ctx&&r(u.ctx[f],u.ctx[f]=C)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](C),a&&ut(t,f)),g}):[],u.update(),a=!0,y(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){K();const f=tt(n.target);u.fragment&&u.fragment.l(f),f.forEach(X)}else u.fragment&&u.fragment.c();n.intro&&ct(t.$$.fragment),st(t,n.target,n.anchor,n.customElement),Q(),I()}m(s)}class Wt{$destroy(){ot(this,1),this.$destroy=v}$on(n,e){if(!D(e))return v;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{ot as A,Dt as B,v as C,Pt as D,W as E,pt as F,vt as G,zt as H,Z as I,kt as J,wt as K,Tt as L,V as M,St as N,$t as O,y as P,_t as Q,ht as R,Wt as S,mt as T,dt as U,at as V,gt as W,ft as X,xt as a,yt as b,Nt as c,Bt as d,bt as e,ct as f,qt as g,X as h,It as i,Ot as j,Y as k,Et as l,tt as m,B as n,Mt as o,jt as p,S as q,et as r,lt as s,Lt as t,At as u,O as v,Ct as w,Ft as x,Ht as y,st as z};
