import{S as t,i as a,s,e,t as r,a as i,b as l,f as n,g as o,d as c,c as h,h as u,j as p,k as f,l as m,n as d,m as g,o as v,p as b,r as w,u as k,v as z,w as $,q as y,x as j,y as x,z as E,A as P}from"./client.488fa3c9.js";import{D}from"./Disqus.d33cb4ab.js";function M(t){let a,s,g,v,b,w,k,z,$,y;return{c(){a=e("div"),s=e("h3"),g=r(t[0]),v=i(),b=e("a"),w=e("img"),z=i(),$=e("p"),y=r(t[3]),this.h()},l(e){a=l(e,"DIV",{class:!0});var r=n(a);s=l(r,"H3",{class:!0});var i=n(s);g=o(i,t[0]),i.forEach(c),v=h(r),b=l(r,"A",{href:!0,target:!0,class:!0});var u=n(b);w=l(u,"IMG",{src:!0,alt:!0,class:!0}),u.forEach(c),z=h(r),$=l(r,"P",{class:!0});var p=n($);y=o(p,t[3]),p.forEach(c),r.forEach(c),this.h()},h(){u(s,"class","title svelte-1vkw4cl"),w.src!==(k=t[2])&&u(w,"src",k),u(w,"alt",t[0]),u(w,"class","svelte-1vkw4cl"),u(b,"href",t[1]),u(b,"target","_blank"),u(b,"class","svelte-1vkw4cl"),u($,"class","svelte-1vkw4cl"),u(a,"class","svelte-1vkw4cl")},m(t,e){p(t,a,e),f(a,s),f(s,g),f(a,v),f(a,b),f(b,w),f(a,z),f(a,$),f($,y)},p(t,[a]){1&a&&m(g,t[0]),4&a&&w.src!==(k=t[2])&&u(w,"src",k),1&a&&u(w,"alt",t[0]),2&a&&u(b,"href",t[1]),8&a&&m(y,t[3])},i:d,o:d,d(t){t&&c(a)}}}function S(t,a,s){let{title:e}=a,{url:r}=a,{thumbnail:i}=a,{description:l}=a;return t.$$set=t=>{"title"in t&&s(0,e=t.title),"url"in t&&s(1,r=t.url),"thumbnail"in t&&s(2,i=t.thumbnail),"description"in t&&s(3,l=t.description)},[e,r,i,l]}class A extends t{constructor(t){super(),a(this,t,S,M,s,{title:0,url:1,thumbnail:2,description:3})}}const H=[{id:1,title:"Nauka w klasach nauczania początkowego",url:"https://przbas.github.io/nauka/",thumbnail:"nauka.png",description:"Pomoce w nauce rachowania, mnożenia, języka angielskiego. Czysty html, css, js. Strona responsywna."},{id:2,title:"Solver Tantrix Match",url:"http://185.119.210.70/solve-tantrix-match/",thumbnail:"solver.png",description:"Rozwiązywacz do układanki Tantrix MATCH. Strona w php z pobieraniem rozwiązań z bazy danych."},{id:3,title:"Zegar do nauki",url:"https://scratch.mit.edu/projects/331586761",thumbnail:"zegar.png",description:"Projekt wykonany w scratch. Pomoc do nauki zegara."}];function I(t,a,s){const e=t.slice();return e[0]=a[s],e}function R(t,a){let s,e,r;return e=new A({props:{title:a[0].title,url:a[0].url,thumbnail:a[0].thumbnail,description:a[0].description}}),{key:t,first:null,c(){s=g(),v(e.$$.fragment),this.h()},l(t){s=g(),b(e.$$.fragment,t),this.h()},h(){this.first=s},m(t,a){p(t,s,a),w(e,t,a),r=!0},p:d,i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){z(e.$$.fragment,t),r=!1},d(t){t&&c(s),$(e,t)}}}function T(t){let a,s,m,d,g,M,S,A,T,q,B,C,V=[],G=new Map,N=H;const Z=t=>t[0].id;for(let a=0;a<N.length;a+=1){let s=I(t,N,a),e=Z(s);G.set(e,V[a]=R(e,s))}return T=new D({props:{identifier:"przbas-homepage-pasje-programowanie",url:"https://przbas.github.io/homepage/pasje/programowanie"}}),{c(){a=i(),s=e("h1"),m=r("Portfolio"),d=i(),g=e("div");for(let t=0;t<V.length;t+=1)V[t].c();M=i(),S=e("br"),A=i(),v(T.$$.fragment),q=i(),B=e("br"),this.h()},l(t){y('[data-svelte="svelte-14tyva1"]',document.head).forEach(c),a=h(t),s=l(t,"H1",{});var e=n(s);m=o(e,"Portfolio"),e.forEach(c),d=h(t),g=l(t,"DIV",{id:!0,class:!0});var r=n(g);for(let t=0;t<V.length;t+=1)V[t].l(r);r.forEach(c),M=h(t),S=l(t,"BR",{}),A=h(t),b(T.$$.fragment,t),q=h(t),B=l(t,"BR",{}),this.h()},h(){document.title="Programowanie",u(g,"id","container"),u(g,"class","svelte-p3b8og")},m(t,e){p(t,a,e),p(t,s,e),f(s,m),p(t,d,e),p(t,g,e);for(let t=0;t<V.length;t+=1)V[t].m(g,null);p(t,M,e),p(t,S,e),p(t,A,e),w(T,t,e),p(t,q,e),p(t,B,e),C=!0},p(t,[a]){if(0&a){const s=H;E(),V=j(V,a,Z,1,t,s,G,g,P,R,null,I),x()}},i(t){if(!C){for(let t=0;t<N.length;t+=1)k(V[t]);k(T.$$.fragment,t),C=!0}},o(t){for(let t=0;t<V.length;t+=1)z(V[t]);z(T.$$.fragment,t),C=!1},d(t){t&&c(a),t&&c(s),t&&c(d),t&&c(g);for(let t=0;t<V.length;t+=1)V[t].d();t&&c(M),t&&c(S),t&&c(A),$(T,t),t&&c(q),t&&c(B)}}}export default class extends t{constructor(t){super(),a(this,t,null,T,s,{})}}
