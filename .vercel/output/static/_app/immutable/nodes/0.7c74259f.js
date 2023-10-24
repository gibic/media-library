import{s as ee,f as _,a as L,l as le,g as p,h as x,c as I,m as ne,d as b,r as N,j as n,i as K,u as o,v as te,n as re,w as Y,x as ie,y as oe,z as ce,A as fe,B as ue,C as me}from"../chunks/scheduler.3ec7a0a7.js";import{S as se,i as ae,b as T,d as q,m as G,a as M,t as V,e as H}from"../chunks/index.54d36a3d.js";import{i as de,s as ge,a as he}from"../chunks/client.76eb14c7.js";import{S as _e}from"../chunks/Search.96974e3e.js";function pe(i){let e,t,s,r,l,u,c,v;return{c(){e=_("a"),t=_("img"),r=L(),l=_("span"),u=le(i[0]),this.h()},l(d){e=p(d,"A",{href:!0,class:!0});var f=x(e);t=p(f,"IMG",{src:!0,alt:!0,class:!0}),r=I(f),l=p(f,"SPAN",{class:!0});var k=x(l);u=ne(k,i[0]),k.forEach(b),f.forEach(b),this.h()},h(){N(t.src,s=`/${i[1]}`)||n(t,"src",s),n(t,"alt",i[0]),n(t,"class","md:mr-2"),n(l,"class","text-[10px] md:text-sm font"),n(e,"href",i[2]),n(e,"class","text-center md:text-left flex flex-col md:flex-row items-center justify-center md:justify-start text-white border-b border-slate-500/20 pb-2 mb-2 cursor-pointer")},m(d,f){K(d,e,f),o(e,t),o(e,r),o(e,l),o(l,u),c||(v=te(e,"click",i[3]),c=!0)},p(d,[f]){f&2&&!N(t.src,s=`/${d[1]}`)&&n(t,"src",s),f&1&&n(t,"alt",d[0]),f&1&&re(u,d[0]),f&4&&n(e,"href",d[2])},i:Y,o:Y,d(d){d&&b(e),c=!1,v()}}}function ve(i,e,t){const s=ie();let{text:r}=e,{icon:l}=e,{link:u}=e;function c(){s("my-event",{message:r.toLowerCase().replace(/\s/g,"-")})}return i.$$set=v=>{"text"in v&&t(0,r=v.text),"icon"in v&&t(1,l=v.icon),"link"in v&&t(2,u=v.link)},[r,l,u,c]}class J extends se{constructor(e){super(),ae(this,e,ve,pe,ee,{text:0,icon:1,link:2})}}function Z(i){let e,t='<img src="/log-out.png" alt="logout"/> <span class="text-[10px] md:text-sm font">Logout</span>',s,r;return{c(){e=_("button"),e.innerHTML=t,this.h()},l(l){e=p(l,"BUTTON",{class:!0,"data-svelte-h":!0}),me(e)!=="svelte-1jrp0il"&&(e.innerHTML=t),this.h()},h(){n(e,"class","text-center flex flex-col md:hidden items-center justify-center text-white border-b border-slate-500/20 pb-2 mb-2 cursor-pointer")},m(l,u){K(l,e,u),s||(r=te(e,"click",i[3]),s=!0)},d(l){l&&b(e),s=!1,r()}}}function be(i){let e,t,s,r,l,u,c,v,d,f,k,U,C,g,y,z,A,B,D,O,F,S,j;k=new _e({}),y=new J({props:{link:"/",icon:"home.png",text:"Home"}}),A=new J({props:{link:"/all",icon:"image.png",text:"All Files"}}),D=new J({props:{link:"/upload",icon:"cloud.png",text:"Upload"}});let m=i[0].auth.user&&Z(i);const P=i[2].default,h=oe(P,i,i[1],null);return{c(){e=_("div"),t=_("aside"),s=_("div"),r=_("img"),u=L(),c=_("img"),d=L(),f=_("div"),T(k.$$.fragment),U=L(),C=_("nav"),g=_("ul"),T(y.$$.fragment),z=L(),T(A.$$.fragment),B=L(),T(D.$$.fragment),O=L(),m&&m.c(),F=L(),S=_("div"),h&&h.c(),this.h()},l(a){e=p(a,"DIV",{class:!0});var $=x(e);t=p($,"ASIDE",{class:!0});var Q=x(t);s=p(Q,"DIV",{class:!0});var E=x(s);r=p(E,"IMG",{src:!0,alt:!0,class:!0}),u=I(E),c=p(E,"IMG",{src:!0,alt:!0,class:!0}),d=I(E),f=p(E,"DIV",{class:!0});var R=x(f);q(k.$$.fragment,R),R.forEach(b),U=I(E),C=p(E,"NAV",{});var W=x(C);g=p(W,"UL",{class:!0});var w=x(g);q(y.$$.fragment,w),z=I(w),q(A.$$.fragment,w),B=I(w),q(D.$$.fragment,w),O=I(w),m&&m.l(w),w.forEach(b),W.forEach(b),E.forEach(b),Q.forEach(b),F=I($),S=p($,"DIV",{class:!0});var X=x(S);h&&h.l(X),X.forEach(b),$.forEach(b),this.h()},h(){N(r.src,l="/logo.png")||n(r,"src",l),n(r,"alt","Logo spektakel"),n(r,"class","hidden md:block"),N(c.src,v="/logo-square.png")||n(c,"src",v),n(c,"alt","Logo spektakel"),n(c,"class","block md:hidden"),n(f,"class","hidden md:block mt-11"),n(g,"class","mt-5 d:mt-10 pt-8 border-t border-slate-500/20"),n(s,"class","sticky top-4"),n(t,"class","p-5 bg-slate-800/50 border border-r border-slate-700/50"),n(S,"class","container mx-auto p-5"),n(e,"class","flex bg-slate-900 min-h-screen")},m(a,$){K(a,e,$),o(e,t),o(t,s),o(s,r),o(s,u),o(s,c),o(s,d),o(s,f),G(k,f,null),o(s,U),o(s,C),o(C,g),G(y,g,null),o(g,z),G(A,g,null),o(g,B),G(D,g,null),o(g,O),m&&m.m(g,null),o(e,F),o(e,S),h&&h.m(S,null),j=!0},p(a,[$]){a[0].auth.user?m||(m=Z(a),m.c(),m.m(g,null)):m&&(m.d(1),m=null),h&&h.p&&(!j||$&2)&&ce(h,P,a,a[1],j?ue(P,a[1],$,null):fe(a[1]),null)},i(a){j||(M(k.$$.fragment,a),M(y.$$.fragment,a),M(A.$$.fragment,a),M(D.$$.fragment,a),M(h,a),j=!0)},o(a){V(k.$$.fragment,a),V(y.$$.fragment,a),V(A.$$.fragment,a),V(D.$$.fragment,a),V(h,a),j=!1},d(a){a&&b(e),H(k),H(y),H(A),H(D),m&&m.d(),h&&h.d(a)}}}function ke(i,e,t){let{$$slots:s={},$$scope:r}=e,{data:l}=e;de(l,he);const u=()=>ge();return i.$$set=c=>{"data"in c&&t(0,l=c.data),"$$scope"in c&&t(1,r=c.$$scope)},[l,r,s,u]}class Le extends se{constructor(e){super(),ae(this,e,ke,be,ee,{data:0})}}export{Le as component};
