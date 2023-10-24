import{s as ge,f as T,g as G,h as A,d as _,j as k,i as d,E as be,x as Ee,a as C,c as $,F as w,u as Y,v as Pe,y as x,z as ee,A as te,B as le,l as Se,m as Ie,n as ke,G as j,H as q,k as J,w as ae,C as se}from"../chunks/scheduler.3ec7a0a7.js";import{S as ye,i as ve,a as y,g as K,c as Q,t as P,b as X,d as z,m as M,e as D}from"../chunks/index.54d36a3d.js";import{e as W,T as Le,L as we,a as Ae}from"../chunks/TagAdd.3925cbec.js";import{S as Oe}from"../chunks/Search.96974e3e.js";function Ne({items:t,pageSize:e,currentPage:n}){return t.slice((n-1)*e,(n-1)*e+e)}var b;(function(t){t.PREVIOUS_PAGE="PREVIOUS_PAGE",t.NEXT_PAGE="NEXT_PAGE",t.ELLIPSIS="ELLIPSIS"})(b||(b={}));function Te({totalItems:t,pageSize:e,currentPage:n,limit:s,showStepOptions:l=!1}){const a=Math.ceil(t/e),f=s&&a>Be(s)?Ce({totalPages:a,limit:s,currentPage:n}):Ge({totalPages:a});return l?$e({options:f,currentPage:n,totalPages:a}):f}function Ge({totalPages:t}){return new Array(t).fill(null).map((e,n)=>({type:"number",value:n+1}))}function Ce({totalPages:t,limit:e,currentPage:n}){const s=e*2+2,l=1+s,a=t-s,o=l+2;return n<=l-e?Array(o).fill(null).map((f,r)=>r===o-1?{type:"number",value:t}:r===o-2?{type:"symbol",symbol:b.ELLIPSIS,value:l+1}:{type:"number",value:r+1}):n>=a+e?Array(o).fill(null).map((f,r)=>r===0?{type:"number",value:1}:r===1?{type:"symbol",symbol:b.ELLIPSIS,value:a-1}:{type:"number",value:a+r-2}):n>=l-e&&n<=a+e?Array(o).fill(null).map((f,r)=>r===0?{type:"number",value:1}:r===1?{type:"symbol",symbol:b.ELLIPSIS,value:n-e+(r-2)}:r===o-1?{type:"number",value:t}:r===o-2?{type:"symbol",symbol:b.ELLIPSIS,value:n+e+1}:{type:"number",value:n-e+(r-2)}):[]}function $e({options:t,currentPage:e,totalPages:n}){return[{type:"symbol",symbol:b.PREVIOUS_PAGE,value:e<=1?1:e-1},...t||[],{type:"symbol",symbol:b.NEXT_PAGE,value:e>=n?n:e+1}]}function Be(t){return t*2+3+2}function oe(t,e,n){const s=t.slice();return s[12]=e[n],s}const Ue=t=>({}),ie=t=>({}),Ve=t=>({}),re=t=>({}),Re=t=>({}),fe=t=>({}),Xe=t=>({value:t&4}),ue=t=>({value:t[12].value});function ze(t){let e;const n=t[9].next,s=x(n,t,t[8],ie),l=s||Fe();return{c(){l&&l.c()},l(a){l&&l.l(a)},m(a,o){l&&l.m(a,o),e=!0},p(a,o){s&&s.p&&(!e||o&256)&&ee(s,n,a,a[8],e?le(n,a[8],o,Ue):te(a[8]),ie)},i(a){e||(y(l,a),e=!0)},o(a){P(l,a),e=!1},d(a){l&&l.d(a)}}}function Me(t){let e;const n=t[9].prev,s=x(n,t,t[8],re),l=s||Ze();return{c(){l&&l.c()},l(a){l&&l.l(a)},m(a,o){l&&l.m(a,o),e=!0},p(a,o){s&&s.p&&(!e||o&256)&&ee(s,n,a,a[8],e?le(n,a[8],o,Ve):te(a[8]),re)},i(a){e||(y(l,a),e=!0)},o(a){P(l,a),e=!1},d(a){l&&l.d(a)}}}function De(t){let e;const n=t[9].ellipsis,s=x(n,t,t[8],fe),l=s||je();return{c(){l&&l.c()},l(a){l&&l.l(a)},m(a,o){l&&l.m(a,o),e=!0},p(a,o){s&&s.p&&(!e||o&256)&&ee(s,n,a,a[8],e?le(n,a[8],o,Re):te(a[8]),fe)},i(a){e||(y(l,a),e=!0)},o(a){P(l,a),e=!1},d(a){l&&l.d(a)}}}function He(t){let e;const n=t[9].number,s=x(n,t,t[8],ue),l=s||qe(t);return{c(){l&&l.c()},l(a){l&&l.l(a)},m(a,o){l&&l.m(a,o),e=!0},p(a,o){s?s.p&&(!e||o&260)&&ee(s,n,a,a[8],e?le(n,a[8],o,Xe):te(a[8]),ue):l&&l.p&&(!e||o&4)&&l.p(a,e?o:-1)},i(a){e||(y(l,a),e=!0)},o(a){P(l,a),e=!1},d(a){l&&l.d(a)}}}function Fe(t){let e,n;return{c(){e=j("svg"),n=j("path"),this.h()},l(s){e=q(s,"svg",{style:!0,viewBox:!0});var l=A(e);n=q(l,"path",{fill:!0,d:!0}),A(n).forEach(_),l.forEach(_),this.h()},h(){k(n,"fill","#000000"),k(n,"d","M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"),J(e,"width","24px"),J(e,"height","24px"),k(e,"viewBox","0 0 24 24")},m(s,l){d(s,e,l),Y(e,n)},p:ae,d(s){s&&_(e)}}}function Ze(t){let e,n;return{c(){e=j("svg"),n=j("path"),this.h()},l(s){e=q(s,"svg",{style:!0,viewBox:!0});var l=A(e);n=q(l,"path",{fill:!0,d:!0}),A(n).forEach(_),l.forEach(_),this.h()},h(){k(n,"fill","#000000"),k(n,"d","M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"),J(e,"width","24px"),J(e,"height","24px"),k(e,"viewBox","0 0 24 24")},m(s,l){d(s,e,l),Y(e,n)},p:ae,d(s){s&&_(e)}}}function je(t){let e,n="...";return{c(){e=T("span"),e.textContent=n},l(s){e=G(s,"SPAN",{"data-svelte-h":!0}),se(e)!=="svelte-9cz974"&&(e.textContent=n)},m(s,l){d(s,e,l)},p:ae,d(s){s&&_(e)}}}function qe(t){let e,n=t[12].value+"",s;return{c(){e=T("span"),s=Se(n)},l(l){e=G(l,"SPAN",{});var a=A(e);s=Ie(a,n),a.forEach(_)},m(l,a){d(l,e,a),Y(e,s)},p(l,a){a&4&&n!==(n=l[12].value+"")&&ke(s,n)},d(l){l&&_(e)}}}function me(t){let e,n,s,l,a,o,f;const r=[He,De,Me,ze],h=[];function I(p,c){return p[12].type==="number"?0:p[12].type==="symbol"&&p[12].symbol===b.ELLIPSIS?1:p[12].type==="symbol"&&p[12].symbol===b.PREVIOUS_PAGE?2:p[12].type==="symbol"&&p[12].symbol===b.NEXT_PAGE?3:-1}~(n=I(t))&&(s=h[n]=r[n](t));function S(){return t[10](t[12])}return{c(){e=T("span"),s&&s.c(),l=C(),this.h()},l(p){e=G(p,"SPAN",{class:!0,role:!0});var c=A(e);s&&s.l(c),l=$(c),c.forEach(_),this.h()},h(){k(e,"class","option"),k(e,"role","presentation"),w(e,"number",t[12].type==="number"),w(e,"prev",t[12].type==="symbol"&&t[12].symbol===b.PREVIOUS_PAGE),w(e,"next",t[12].type==="symbol"&&t[12].symbol===b.NEXT_PAGE),w(e,"disabled",t[12].type==="symbol"&&t[12].symbol===b.NEXT_PAGE&&t[0]>=t[1]||t[12].type==="symbol"&&t[12].symbol===b.PREVIOUS_PAGE&&t[0]<=1),w(e,"ellipsis",t[12].type==="symbol"&&t[12].symbol===b.ELLIPSIS),w(e,"active",t[12].type==="number"&&t[12].value===t[0])},m(p,c){d(p,e,c),~n&&h[n].m(e,null),Y(e,l),a=!0,o||(f=Pe(e,"click",S),o=!0)},p(p,c){t=p;let L=n;n=I(t),n===L?~n&&h[n].p(t,c):(s&&(K(),P(h[L],1,1,()=>{h[L]=null}),Q()),~n?(s=h[n],s?s.p(t,c):(s=h[n]=r[n](t),s.c()),y(s,1),s.m(e,l)):s=null),(!a||c&4)&&w(e,"number",t[12].type==="number"),(!a||c&4)&&w(e,"prev",t[12].type==="symbol"&&t[12].symbol===b.PREVIOUS_PAGE),(!a||c&4)&&w(e,"next",t[12].type==="symbol"&&t[12].symbol===b.NEXT_PAGE),(!a||c&7)&&w(e,"disabled",t[12].type==="symbol"&&t[12].symbol===b.NEXT_PAGE&&t[0]>=t[1]||t[12].type==="symbol"&&t[12].symbol===b.PREVIOUS_PAGE&&t[0]<=1),(!a||c&4)&&w(e,"ellipsis",t[12].type==="symbol"&&t[12].symbol===b.ELLIPSIS),(!a||c&5)&&w(e,"active",t[12].type==="number"&&t[12].value===t[0])},i(p){a||(y(s),a=!0)},o(p){P(s),a=!1},d(p){p&&_(e),~n&&h[n].d(),o=!1,f()}}}function Je(t){let e,n,s=W(t[2]),l=[];for(let o=0;o<s.length;o+=1)l[o]=me(oe(t,s,o));const a=o=>P(l[o],1,1,()=>{l[o]=null});return{c(){e=T("div");for(let o=0;o<l.length;o+=1)l[o].c();this.h()},l(o){e=G(o,"DIV",{class:!0});var f=A(e);for(let r=0;r<l.length;r+=1)l[r].l(f);f.forEach(_),this.h()},h(){k(e,"class","pagination-nav")},m(o,f){d(o,e,f);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(e,null);n=!0},p(o,[f]){if(f&271){s=W(o[2]);let r;for(r=0;r<s.length;r+=1){const h=oe(o,s,r);l[r]?(l[r].p(h,f),y(l[r],1)):(l[r]=me(h),l[r].c(),y(l[r],1),l[r].m(e,null))}for(K(),r=s.length;r<l.length;r+=1)a(r);Q()}},i(o){if(!n){for(let f=0;f<s.length;f+=1)y(l[f]);n=!0}},o(o){l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)P(l[f]);n=!1},d(o){o&&_(e),be(l,o)}}}function Ke(t,e,n){let s,l,{$$slots:a={},$$scope:o}=e;const f=Ee();let{totalItems:r=0}=e,{pageSize:h=1}=e,{currentPage:I=1}=e,{limit:S=void 0}=e,{showStepOptions:p=!1}=e;function c(u){f("setPage",{page:u.value})}const L=u=>c(u);return t.$$set=u=>{"totalItems"in u&&n(4,r=u.totalItems),"pageSize"in u&&n(5,h=u.pageSize),"currentPage"in u&&n(0,I=u.currentPage),"limit"in u&&n(6,S=u.limit),"showStepOptions"in u&&n(7,p=u.showStepOptions),"$$scope"in u&&n(8,o=u.$$scope)},t.$$.update=()=>{t.$$.dirty&241&&n(2,s=Te({totalItems:r,pageSize:h,currentPage:I,limit:S,showStepOptions:p})),t.$$.dirty&48&&n(1,l=Math.ceil(r/h))},[I,l,s,c,r,h,S,p,o,a,L]}class _e extends ye{constructor(e){super(),ve(this,e,Ke,Je,ge,{totalItems:4,pageSize:5,currentPage:0,limit:6,showStepOptions:7})}}function ce(t,e,n){const s=t.slice();return s[6]=e[n],s}function pe(t){let e,n;return e=new we({props:{thumbnail:t[6].thumbnail,fileName:t[6].name,filePath:t[6].filePath,fileTags:t[6].tags,fileId:t[6].fileId,url:t[4]}}),e.$on("toast",t[5]),{c(){X(e.$$.fragment)},l(s){z(e.$$.fragment,s)},m(s,l){M(e,s,l),n=!0},p(s,l){const a={};l&8&&(a.thumbnail=s[6].thumbnail),l&8&&(a.fileName=s[6].name),l&8&&(a.filePath=s[6].filePath),l&8&&(a.fileTags=s[6].tags),l&8&&(a.fileId=s[6].fileId),e.$set(a)},i(s){n||(y(e.$$.fragment,s),n=!0)},o(s){P(e.$$.fragment,s),n=!1},d(s){D(e,s)}}}function he(t){let e,n;return e=new Ae({props:{message:t[1]}}),{c(){X(e.$$.fragment)},l(s){z(e.$$.fragment,s)},m(s,l){M(e,s,l),n=!0},p(s,l){const a={};l&2&&(a.message=s[1]),e.$set(a)},i(s){n||(y(e.$$.fragment,s),n=!0)},o(s){P(e.$$.fragment,s),n=!1},d(s){D(e,s)}}}function Qe(t){let e,n="Media Library",s,l,a,o,f,r="Home » All Files",h,I,S,p,c,L,u,O,F,V,B,Z;a=new Oe({}),S=new _e({props:{totalItems:t[6].length,pageSize:ne,currentPage:t[0],limit:1,showStepOptions:!0}}),S.$on("setPage",t[8]);let U=W(t[3]),g=[];for(let i=0;i<U.length;i+=1)g[i]=pe(ce(t,U,i));const de=i=>P(g[i],1,1,()=>{g[i]=null});O=new _e({props:{totalItems:t[6].length,pageSize:ne,currentPage:t[0],limit:1,showStepOptions:!0}}),O.$on("setPage",t[9]);let v=t[2]&&he(t);return B=new Le({}),{c(){e=T("h1"),e.textContent=n,s=C(),l=T("div"),X(a.$$.fragment),o=C(),f=T("span"),f.textContent=r,h=C(),I=T("section"),X(S.$$.fragment),p=C(),c=T("article");for(let i=0;i<g.length;i+=1)g[i].c();L=C(),u=T("section"),X(O.$$.fragment),F=C(),v&&v.c(),V=C(),X(B.$$.fragment),this.h()},l(i){e=G(i,"H1",{class:!0,"data-svelte-h":!0}),se(e)!=="svelte-1ezin3f"&&(e.textContent=n),s=$(i),l=G(i,"DIV",{class:!0});var m=A(l);z(a.$$.fragment,m),m.forEach(_),o=$(i),f=G(i,"SPAN",{class:!0,"data-svelte-h":!0}),se(f)!=="svelte-c10mmu"&&(f.textContent=r),h=$(i),I=G(i,"SECTION",{class:!0});var N=A(I);z(S.$$.fragment,N),N.forEach(_),p=$(i),c=G(i,"ARTICLE",{class:!0});var H=A(c);for(let R=0;R<g.length;R+=1)g[R].l(H);H.forEach(_),L=$(i),u=G(i,"SECTION",{class:!0});var E=A(u);z(O.$$.fragment,E),E.forEach(_),F=$(i),v&&v.l(i),V=$(i),z(B.$$.fragment,i),this.h()},h(){k(e,"class","text-white md:text-8xl mb-8 max-w-xs font-bold"),k(l,"class","block md:hidden"),k(f,"class","text-sm text-slate-300"),k(I,"class","my-5 text-xs md:text-base text-slate-300"),k(c,"class","grid grid-cols-1 md:grid-cols-4 gap-4 border-t border-slate-700/40 pt-5"),k(u,"class","my-5 text-xs md:text-base text-slate-300")},m(i,m){d(i,e,m),d(i,s,m),d(i,l,m),M(a,l,null),d(i,o,m),d(i,f,m),d(i,h,m),d(i,I,m),M(S,I,null),d(i,p,m),d(i,c,m);for(let N=0;N<g.length;N+=1)g[N]&&g[N].m(c,null);d(i,L,m),d(i,u,m),M(O,u,null),d(i,F,m),v&&v.m(i,m),d(i,V,m),M(B,i,m),Z=!0},p(i,[m]){const N={};if(m&1&&(N.currentPage=i[0]),S.$set(N),m&56){U=W(i[3]);let E;for(E=0;E<U.length;E+=1){const R=ce(i,U,E);g[E]?(g[E].p(R,m),y(g[E],1)):(g[E]=pe(R),g[E].c(),y(g[E],1),g[E].m(c,null))}for(K(),E=U.length;E<g.length;E+=1)de(E);Q()}const H={};m&1&&(H.currentPage=i[0]),O.$set(H),i[2]?v?(v.p(i,m),m&4&&y(v,1)):(v=he(i),v.c(),y(v,1),v.m(V.parentNode,V)):v&&(K(),P(v,1,1,()=>{v=null}),Q())},i(i){if(!Z){y(a.$$.fragment,i),y(S.$$.fragment,i);for(let m=0;m<U.length;m+=1)y(g[m]);y(O.$$.fragment,i),y(v),y(B.$$.fragment,i),Z=!0}},o(i){P(a.$$.fragment,i),P(S.$$.fragment,i),g=g.filter(Boolean);for(let m=0;m<g.length;m+=1)P(g[m]);P(O.$$.fragment,i),P(v),P(B.$$.fragment,i),Z=!1},d(i){i&&(_(e),_(s),_(l),_(o),_(f),_(h),_(I),_(p),_(c),_(L),_(u),_(F),_(V)),D(a),D(S),be(g,i),D(O),v&&v.d(i),D(B,i)}}}let ne=12;function We(t,e,n){let s,{data:l}=e,a=l.post.items,o=1;{const u=window.localStorage.getItem("page");u&&(o=Number(u))}const f=l.post.host;let r="",h=!1;function I(){S("Copied to clipboard!")}function S(u,O){n(1,r=u),n(2,h=!0),setTimeout(p,3e3)}function p(){n(2,h=!1)}const c=u=>n(0,o=u.detail.page),L=u=>n(0,o=u.detail.page);return t.$$set=u=>{"data"in u&&n(7,l=u.data)},t.$$.update=()=>{t.$$.dirty&1&&n(3,s=Ne({items:a,pageSize:ne,currentPage:o})),t.$$.dirty&1&&window.localStorage.setItem("page",JSON.stringify(o))},[o,r,h,s,f,I,a,l,c,L]}class lt extends ye{constructor(e){super(),ve(this,e,We,Qe,ge,{data:7})}}export{lt as component};