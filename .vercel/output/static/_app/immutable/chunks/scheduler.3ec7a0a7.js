function D(){}const X=t=>t;function P(t,e){for(const n in e)t[n]=e[n];return t}function B(t){return t()}function Y(){return Object.create(null)}function L(t){t.forEach(B)}function Z(t){return typeof t=="function"}function $(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let h;function tt(t,e){return t===e?!0:(h||(h=document.createElement("a")),h.href=e,t===h.href)}function et(t){return Object.keys(t).length===0}function M(t,...e){if(t==null){for(const i of e)i(void 0);return D}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function nt(t,e,n){t.$$.on_destroy.push(M(e,n))}function it(t,e,n,i){if(t){const r=k(t,e,n,i);return t[0](r)}}function k(t,e,n,i){return t[1]&&i?P(n.ctx.slice(),t[1](i(e))):n.ctx}function rt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(e.dirty.length,r.length);for(let u=0;u<c;u+=1)s[u]=e.dirty[u]|r[u];return s}return e.dirty|r}return e.dirty}function ct(t,e,n,i,r,s){if(r){const c=k(e,n,i,s);t.p(c,r)}}function lt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let p=!1;function ut(){p=!0}function st(){p=!1}function O(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function T(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let o=0;o<e.length;o++){const a=e[o];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const o=e[l].claim_order,a=(r>0&&e[n[r]].claim_order<=o?r+1:O(1,r,q=>e[n[q]].claim_order,o))-1;i[l]=n[a]+1;const w=a+1;n[w]=l,r=Math.max(w,r)}const s=[],c=[];let u=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(s.push(e[l-1]);u>=l;u--)c.push(e[u]);u--}for(;u>=0;u--)c.push(e[u]);s.reverse(),c.sort((l,o)=>l.claim_order-o.claim_order);for(let l=0,o=0;l<c.length;l++){for(;o<s.length&&c[l].claim_order>=s[o].claim_order;)o++;const a=o<s.length?s[o]:null;t.insertBefore(c[l],a)}}function H(t,e){t.appendChild(e)}function I(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ot(t){const e=A("style");return e.textContent="/* empty */",R(I(t),e),e.sheet}function R(t,e){return H(t.head||t,e),e.sheet}function z(t,e){if(p){for(T(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function at(t,e,n){p&&!n?z(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ft(t){t.parentNode&&t.parentNode.removeChild(t)}function _t(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function A(t){return document.createElement(t)}function F(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function x(t){return document.createTextNode(t)}function dt(){return x(" ")}function ht(){return x("")}function mt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function pt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function yt(t){return t.dataset.svelteH}function bt(t){return Array.from(t.childNodes)}function U(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function j(t,e,n,i,r=!1){U(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(e(u)){const l=n(u);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(e(u)){const l=n(u);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function C(t,e,n,i){return j(t,r=>r.nodeName===e,r=>{const s=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];n[u.name]||s.push(u.name)}s.forEach(c=>r.removeAttribute(c))},()=>i(e))}function gt(t,e,n){return C(t,e,n,A)}function xt(t,e,n){return C(t,e,n,F)}function W(t,e){return j(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(e),!0)}function vt(t){return W(t," ")}function wt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Et(t,e){t.value=e??""}function Nt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function kt(t,e,n){t.classList.toggle(e,!!n)}function G(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function At(t,e){return new t(e)}let m;function y(t){m=t}function v(){if(!m)throw new Error("Function called outside component initialization");return m}function jt(t){v().$$.on_mount.push(t)}function Ct(t){v().$$.after_update.push(t)}function St(){const t=v();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const s=G(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,s)}),!s.defaultPrevented}return!0}}const d=[],E=[];let _=[];const N=[],S=Promise.resolve();let g=!1;function J(){g||(g=!0,S.then(Q))}function qt(){return J(),S}function K(t){_.push(t)}const b=new Set;let f=0;function Q(){if(f!==0)return;const t=m;do{try{for(;f<d.length;){const e=d[f];f++,y(e),V(e.$$)}}catch(e){throw d.length=0,f=0,e}for(y(null),d.length=0,f=0;E.length;)E.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];b.has(n)||(b.add(n),n())}_.length=0}while(d.length);for(;N.length;)N.pop()();g=!1,b.clear(),y(t)}function V(t){if(t.fragment!==null){t.update(),L(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}function Dt(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{lt as A,rt as B,yt as C,nt as D,_t as E,kt as F,F as G,xt as H,L as I,X as J,K,Et as L,I as M,ot as N,Z as O,G as P,Y as Q,Q as R,et as S,Dt as T,m as U,y as V,B as W,d as X,J as Y,ut as Z,st as _,dt as a,Ct as b,vt as c,ft as d,ht as e,A as f,gt as g,bt as h,at as i,pt as j,Nt as k,x as l,W as m,wt as n,jt as o,E as p,At as q,tt as r,$ as s,qt as t,z as u,mt as v,D as w,St as x,it as y,ct as z};