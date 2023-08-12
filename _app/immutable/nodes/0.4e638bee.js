import{s as H,n as M,c as I,d as se,e as le,f as ne,u as ae,g as re,h as ie}from"../chunks/scheduler.81e61739.js";import{S as x,i as G,g as F,s as D,m as j,h as K,j as w,f as v,c as E,n as A,k as c,a as k,x as h,y as J,o as te,z as oe,A as Q,r as O,u as L,v as q,d as V,t as y,w as B}from"../chunks/index.a16ca3cc.js";import{e as Y}from"../chunks/each.e59479a4.js";import{p as ce}from"../chunks/stores.d0ca6518.js";import{W as U}from"../chunks/Window.971b780f.js";function Z(r,e,s){const t=r.slice();return t[6]=e[s].route,t[7]=e[s].name,t[9]=s,t}function ee(r){let e,s,t=r[7]+"",a,_,o,$,p;return{c(){e=F("li"),s=F("a"),a=j(t),_=D(),this.h()},l(u){e=K(u,"LI",{class:!0});var d=w(e);s=K(d,"A",{href:!0,class:!0});var f=w(s);a=A(f,t),f.forEach(v),_=E(d),d.forEach(v),this.h()},h(){c(s,"href",r[6]),c(s,"class","svelte-bsev7"),c(e,"class",o=M(r[1]==r[6]?"active":"")+" svelte-bsev7")},m(u,d){k(u,e,d),h(e,s),h(s,a),h(e,_),$||(p=J(s,"click",r[4]),$=!0)},p(u,d){d&2&&o!==(o=M(u[1]==u[6]?"active":"")+" svelte-bsev7")&&c(e,"class",o)},d(u){u&&v(e),$=!1,p()}}}function ue(r){let e,s,t,a,_=r[0]?"Close":"Open",o,$,p,u,d=Y(r[2]),f=[];for(let l=0;l<d.length;l+=1)f[l]=ee(Z(r,d,l));return{c(){e=F("div"),s=F("ul");for(let l=0;l<f.length;l+=1)f[l].c();t=D(),a=F("div"),o=j(_),this.h()},l(l){e=K(l,"DIV",{id:!0,class:!0});var n=w(e);s=K(n,"UL",{class:!0});var i=w(s);for(let z=0;z<f.length;z+=1)f[z].l(i);i.forEach(v),t=E(n),a=K(n,"DIV",{id:!0,class:!0});var b=w(a);o=A(b,_),b.forEach(v),n.forEach(v),this.h()},h(){c(s,"class","svelte-bsev7"),c(a,"id","openButton"),c(a,"class","svelte-bsev7"),c(e,"id","navWrap"),c(e,"class",$=M(r[0]?"open":"")+" svelte-bsev7")},m(l,n){k(l,e,n),h(e,s);for(let i=0;i<f.length;i+=1)f[i]&&f[i].m(s,null);h(e,t),h(e,a),h(a,o),p||(u=J(a,"click",r[5]),p=!0)},p(l,[n]){if(n&7){d=Y(l[2]);let i;for(i=0;i<d.length;i+=1){const b=Z(l,d,i);f[i]?f[i].p(b,n):(f[i]=ee(b),f[i].c(),f[i].m(s,null))}for(;i<f.length;i+=1)f[i].d(1);f.length=d.length}n&1&&_!==(_=l[0]?"Close":"Open")&&te(o,_),n&1&&$!==($=M(l[0]?"open":"")+" svelte-bsev7")&&c(e,"class",$)},i:I,o:I,d(l){l&&v(e),oe(f,l),p=!1,u()}}}function fe(r,e,s){let t,a;se(r,ce,u=>s(3,a=u));let _=[{route:"/",name:"Home"},{route:"/about",name:"About"},{route:"/projects",name:"Projects"},{route:"/gallery",name:"Gallery"},{route:"/commissions",name:"Commissions"},{route:"/contact",name:"Contact Me"}],o=!1;const $=()=>{s(0,o=!1)},p=()=>{s(0,o=!o)};return r.$$.update=()=>{r.$$.dirty&8&&s(1,t=a.url.pathname)},[o,t,_,a,$,p]}class de extends x{constructor(e){super(),G(this,e,fe,ue,H,{})}}function _e(r){let e,s=`<span class="svelte-1nxbnof">FlaringK</span> 
  FlaringK 
  <span class="svelte-1nxbnof">FlaringK FlaringK FlaringK FlaringK FlaringK FlaringK FlaringK FlaringK FlaringK FlaringK FlaringK FlaringK
	  FlaringK FlaringK FlaringK FlaringK FlaringK FlaringK FlaringK FlaringK FlaringK FlaringK FlaringK FlaringK FlaringK FlaringK FlaringK FlaringK</span>`;return{c(){e=F("div"),e.innerHTML=s,this.h()},l(t){e=K(t,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),Q(e)!=="svelte-1byhcpc"&&(e.innerHTML=s),this.h()},h(){c(e,"id","title"),c(e,"class","svelte-1nxbnof")},m(t,a){k(t,e,a)},p:I,i:I,o:I,d(t){t&&v(e)}}}class ve extends x{constructor(e){super(),G(this,e,null,_e,H,{})}}function pe(r){let e,s;return{c(){e=F("img"),this.h()},l(t){e=K(t,"IMG",{src:!0,alt:!0}),this.h()},h(){le(e.src,s="./favicon.png")||c(e,"src",s),c(e,"alt","")},m(t,a){k(t,e,a)},p:I,d(t){t&&v(e)}}}function ge(r){let e,s=" _._     _,-'\"\"`-._\r\n(,-.`._,'(       |\\`-/|\r\n    `-.-' \\ )-`( , o o)\r\n          `-    \\`_`\"'-";return{c(){e=F("div"),e.textContent=s,this.h()},l(t){e=K(t,"DIV",{class:!0,"data-svelte-h":!0}),Q(e)!=="svelte-1yds1ik"&&(e.textContent=s),this.h()},h(){c(e,"class","ascii svelte-zzpdsl")},m(t,a){k(t,e,a)},p:I,d(t){t&&v(e)}}}function he(r){let e,s="  |\\      _,,,--,,_    \r\n  /,`.-'`'   ._  \\-;;,_ \r\n |,4-  ) )_   .;.(  `'-' \r\n'---''(_/._)-'(_\\_)";return{c(){e=F("div"),e.textContent=s,this.h()},l(t){e=K(t,"DIV",{class:!0,"data-svelte-h":!0}),Q(e)!=="svelte-14q1dq0"&&(e.textContent=s),this.h()},h(){c(e,"class","ascii svelte-zzpdsl")},m(t,a){k(t,e,a)},p:I,d(t){t&&v(e)}}}function me(r){let e,s,t,a,_,o,$,p,u,d,f,l,n,i,b=r[0]?"On":"Off",z,C,N,R;return t=new U({props:{title:"moon.png",$$slots:{default:[pe]},$$scope:{ctx:r}}}),o=new U({props:{title:"prowler.txt",$$slots:{default:[ge]},$$scope:{ctx:r}}}),u=new U({props:{title:"sleepy.txt",$$slots:{default:[he]},$$scope:{ctx:r}}}),{c(){e=F("div"),s=F("div"),O(t.$$.fragment),a=D(),_=F("div"),O(o.$$.fragment),$=D(),p=F("div"),O(u.$$.fragment),f=D(),l=F("div"),n=F("div"),i=j("Scrolling: "),z=j(b),this.h()},l(g){e=K(g,"DIV",{id:!0,class:!0});var m=w(e);s=K(m,"DIV",{class:!0});var S=w(s);L(t.$$.fragment,S),S.forEach(v),a=E(m),_=K(m,"DIV",{class:!0});var T=w(_);L(o.$$.fragment,T),T.forEach(v),$=E(m),p=K(m,"DIV",{class:!0});var W=w(p);L(u.$$.fragment,W),W.forEach(v),m.forEach(v),f=E(g),l=K(g,"DIV",{id:!0,class:!0});var X=w(l);n=K(X,"DIV",{id:!0,class:!0});var P=w(n);i=A(P,"Scrolling: "),z=A(P,b),P.forEach(v),X.forEach(v),this.h()},h(){c(s,"class","moon svelte-zzpdsl"),c(_,"class","cat svelte-zzpdsl"),c(p,"class","cat2 svelte-zzpdsl"),c(e,"id","background"),c(e,"class",d=M(r[0]?"":"noscroll")+" svelte-zzpdsl"),c(n,"id","scrollBtn"),c(n,"class","svelte-zzpdsl"),c(l,"id","settings"),c(l,"class","svelte-zzpdsl")},m(g,m){k(g,e,m),h(e,s),q(t,s,null),h(e,a),h(e,_),q(o,_,null),h(e,$),h(e,p),q(u,p,null),k(g,f,m),k(g,l,m),h(l,n),h(n,i),h(n,z),C=!0,N||(R=J(n,"click",r[1]),N=!0)},p(g,[m]){const S={};m&4&&(S.$$scope={dirty:m,ctx:g}),t.$set(S);const T={};m&4&&(T.$$scope={dirty:m,ctx:g}),o.$set(T);const W={};m&4&&(W.$$scope={dirty:m,ctx:g}),u.$set(W),(!C||m&1&&d!==(d=M(g[0]?"":"noscroll")+" svelte-zzpdsl"))&&c(e,"class",d),(!C||m&1)&&b!==(b=g[0]?"On":"Off")&&te(z,b)},i(g){C||(V(t.$$.fragment,g),V(o.$$.fragment,g),V(u.$$.fragment,g),C=!0)},o(g){y(t.$$.fragment,g),y(o.$$.fragment,g),y(u.$$.fragment,g),C=!1},d(g){g&&(v(e),v(f),v(l)),B(t),B(o),B(u),N=!1,R()}}}function $e(r,e,s){let t=!0;return[t,()=>{s(0,t=!t)}]}class Fe extends x{constructor(e){super(),G(this,e,$e,me,H,{})}}function Ke(r){let e,s,t,a,_,o,$,p,u,d;s=new ve({}),a=new de({}),o=new Fe({});const f=r[2].default,l=ne(f,r,r[1],null);return{c(){e=F("div"),O(s.$$.fragment),t=D(),O(a.$$.fragment),_=D(),O(o.$$.fragment),$=D(),p=F("div"),u=F("div"),l&&l.c(),this.h()},l(n){e=K(n,"DIV",{id:!0,class:!0});var i=w(e);L(s.$$.fragment,i),t=E(i),L(a.$$.fragment,i),_=E(i),L(o.$$.fragment,i),$=E(i),p=K(i,"DIV",{id:!0,class:!0});var b=w(p);u=K(b,"DIV",{id:!0});var z=w(u);l&&l.l(z),z.forEach(v),b.forEach(v),i.forEach(v),this.h()},h(){c(u,"id","main"),c(p,"id","mainWrap"),c(p,"class","svelte-fpbkfg"),c(e,"id","wrapper"),c(e,"class","svelte-fpbkfg")},m(n,i){k(n,e,i),q(s,e,null),h(e,t),q(a,e,null),h(e,_),q(o,e,null),h(e,$),h(e,p),h(p,u),l&&l.m(u,null),d=!0},p(n,[i]){l&&l.p&&(!d||i&2)&&ae(l,f,n,n[1],d?ie(f,n[1],i,null):re(n[1]),null)},i(n){d||(V(s.$$.fragment,n),V(a.$$.fragment,n),V(o.$$.fragment,n),V(l,n),d=!0)},o(n){y(s.$$.fragment,n),y(a.$$.fragment,n),y(o.$$.fragment,n),y(l,n),d=!1},d(n){n&&v(e),B(s),B(a),B(o),l&&l.d(n)}}}function be(r,e,s){let{$$slots:t={},$$scope:a}=e;const _=!0;return r.$$set=o=>{"$$scope"in o&&s(1,a=o.$$scope)},[_,a,t]}class Ee extends x{constructor(e){super(),G(this,e,be,Ke,H,{prerender:0})}get prerender(){return this.$$.ctx[0]}}export{Ee as component};
