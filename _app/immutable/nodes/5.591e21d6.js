import{s as z,c as E,h as D}from"../chunks/scheduler.8c6941b7.js";import{S as G,i as L,r as x,s as I,u as P,c as q,v as C,a as k,d as p,b as M,t as w,f as _,w as y,z as V,g as h,h as $,A as W,p as j,m as B,j as b,n as N,k as u,x as v}from"../chunks/index.6d34e091.js";import{e as A}from"../chunks/each.e59479a4.js";import{W as Y}from"../chunks/Window.6e8a6a84.js";import{T as F}from"../chunks/TextWindow.346daed3.js";function K(r,t,a){const n=r.slice();return n[1]=t[a].title,n[2]=t[a].imgPath,n[3]=t[a].link,n[5]=a,n}function H(r){let t,a="You can contact me on any of the profiles below!";return{c(){t=h("li"),t.textContent=a},l(n){t=$(n,"LI",{"data-svelte-h":!0}),W(t)!=="svelte-zffl1g"&&(t.textContent=a)},m(n,o){k(n,t,o)},p:E,d(n){n&&_(t)}}}function J(r){let t,a,n,o,f,c,s=r[1]+"",g;return{c(){t=h("a"),a=h("div"),n=h("img"),f=I(),c=h("div"),g=B(s),this.h()},l(e){t=$(e,"A",{target:!0,href:!0,class:!0});var l=b(t);a=$(l,"DIV",{class:!0});var m=b(a);n=$(m,"IMG",{src:!0,alt:!0,class:!0}),m.forEach(_),f=q(l),c=$(l,"DIV",{class:!0});var d=b(c);g=N(d,s),d.forEach(_),l.forEach(_),this.h()},h(){D(n.src,o="contacts/"+r[2]+".png")||u(n,"src",o),u(n,"alt",r[1]+" Icon"),u(n,"class","svelte-1uqyrim"),u(a,"class","contactIcon svelte-1uqyrim"),u(c,"class","contactTitle svelte-1uqyrim"),u(t,"target","_blank"),u(t,"href",r[3]),u(t,"class","svelte-1uqyrim")},m(e,l){k(e,t,l),v(t,a),v(a,n),v(t,f),v(t,c),v(c,g)},p:E,d(e){e&&_(t)}}}function S(r){let t,a;return t=new Y({props:{title:r[1]+".ico",$$slots:{default:[J]},$$scope:{ctx:r}}}),{c(){x(t.$$.fragment)},l(n){P(t.$$.fragment,n)},m(n,o){C(t,n,o),a=!0},p(n,o){const f={};o&64&&(f.$$scope={dirty:o,ctx:n}),t.$set(f)},i(n){a||(p(t.$$.fragment,n),a=!0)},o(n){w(t.$$.fragment,n),a=!1},d(n){y(t,n)}}}function O(r){let t,a="I can also be found under FlaringK on most other platforms, like discord and the site that used to be twitter.";return{c(){t=h("li"),t.textContent=a},l(n){t=$(n,"LI",{"data-svelte-h":!0}),W(t)!=="svelte-bmq3s"&&(t.textContent=a)},m(n,o){k(n,t,o)},p:E,d(n){n&&_(t)}}}function Q(r){let t,a,n,o,f;t=new F({props:{title:"contact_me.txt",$$slots:{default:[H]},$$scope:{ctx:r}}});let c=A(r[0]),s=[];for(let e=0;e<c.length;e+=1)s[e]=S(K(r,c,e));const g=e=>w(s[e],1,1,()=>{s[e]=null});return o=new F({props:{title:"contact_me.txt",$$slots:{default:[O]},$$scope:{ctx:r}}}),{c(){x(t.$$.fragment),a=I();for(let e=0;e<s.length;e+=1)s[e].c();n=I(),x(o.$$.fragment)},l(e){P(t.$$.fragment,e),a=q(e);for(let l=0;l<s.length;l+=1)s[l].l(e);n=q(e),P(o.$$.fragment,e)},m(e,l){C(t,e,l),k(e,a,l);for(let m=0;m<s.length;m+=1)s[m]&&s[m].m(e,l);k(e,n,l),C(o,e,l),f=!0},p(e,[l]){const m={};if(l&64&&(m.$$scope={dirty:l,ctx:e}),t.$set(m),l&1){c=A(e[0]);let i;for(i=0;i<c.length;i+=1){const T=K(e,c,i);s[i]?(s[i].p(T,l),p(s[i],1)):(s[i]=S(T),s[i].c(),p(s[i],1),s[i].m(n.parentNode,n))}for(j(),i=c.length;i<s.length;i+=1)g(i);M()}const d={};l&64&&(d.$$scope={dirty:l,ctx:e}),o.$set(d)},i(e){if(!f){p(t.$$.fragment,e);for(let l=0;l<c.length;l+=1)p(s[l]);p(o.$$.fragment,e),f=!0}},o(e){w(t.$$.fragment,e),s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)w(s[l]);w(o.$$.fragment,e),f=!1},d(e){e&&(_(a),_(n)),y(t,e),V(s,e),y(o,e)}}}function R(r){return[[{title:"Email",imgPath:"email",link:"mailto:caelans@iinet.net.au"},{title:"Tumblr",imgPath:"tumblr",link:"https://flaringk.tumblr.com/"},{title:"Kofi",imgPath:"kofi",link:"https://ko-fi.com/flaringk"},{title:"MSPFA",imgPath:"mspfa",link:"https://mspfa.com/user/?u=100855018780708322446"},{title:"Github",imgPath:"github",link:"https://github.com/FlaringK"}]]}class nt extends G{constructor(t){super(),L(this,t,R,Q,z,{})}}export{nt as component};
