import{S as t,i as a,s,e,t as l,a as r,b as i,f as n,g as o,d as c,c as h,h as u,j as f,k as d,l as p,n as m,m as g,o as v,p as k,r as w,u as b,v as z,w as y,q as $,x,y as E,z as P,A as j}from"./client.36f84085.js";function M(t){let a,s,g,v,k,w,b,z,y,$;return{c(){a=e("div"),s=e("h3"),g=l(t[0]),v=r(),k=e("a"),w=e("img"),z=r(),y=e("p"),$=l(t[3]),this.h()},l(e){a=i(e,"DIV",{class:!0});var l=n(a);s=i(l,"H3",{class:!0});var r=n(s);g=o(r,t[0]),r.forEach(c),v=h(l),k=i(l,"A",{href:!0,target:!0,class:!0});var u=n(k);w=i(u,"IMG",{src:!0,alt:!0,class:!0}),u.forEach(c),z=h(l),y=i(l,"P",{class:!0});var f=n(y);$=o(f,t[3]),f.forEach(c),l.forEach(c),this.h()},h(){u(s,"class","title svelte-1vkw4cl"),w.src!==(b=t[2])&&u(w,"src",b),u(w,"alt",t[0]),u(w,"class","svelte-1vkw4cl"),u(k,"href",t[1]),u(k,"target","_blank"),u(k,"class","svelte-1vkw4cl"),u(y,"class","svelte-1vkw4cl"),u(a,"class","svelte-1vkw4cl")},m(t,e){f(t,a,e),d(a,s),d(s,g),d(a,v),d(a,k),d(k,w),d(a,z),d(a,y),d(y,$)},p(t,[a]){1&a&&p(g,t[0]),4&a&&w.src!==(b=t[2])&&u(w,"src",b),1&a&&u(w,"alt",t[0]),2&a&&u(k,"href",t[1]),8&a&&p($,t[3])},i:m,o:m,d(t){t&&c(a)}}}function S(t,a,s){let{title:e}=a,{url:l}=a,{thumbnail:r}=a,{description:i}=a;return t.$$set=t=>{"title"in t&&s(0,e=t.title),"url"in t&&s(1,l=t.url),"thumbnail"in t&&s(2,r=t.thumbnail),"description"in t&&s(3,i=t.description)},[e,l,r,i]}class A extends t{constructor(t){super(),a(this,t,S,M,s,{title:0,url:1,thumbnail:2,description:3})}}const H=[{id:1,title:"Nauka w klasach nauczania początkowego",url:"https://przbas.github.io/nauka/",thumbnail:"nauka.png",description:"Pomoce w nauce rachowania, mnożenia, języka angielskiego. Czysty html, css, js. Strona responsywna."},{id:2,title:"Solver Tantrix Match",url:"http://185.119.210.70/solve-tantrix-match/",thumbnail:"solver.png",description:"Rozwiązywacz do układanki Tantrix MATCH. Strona w php z pobieraniem rozwiązań z bazy danych."},{id:3,title:"Zegar do nauki",url:"https://scratch.mit.edu/projects/331586761",thumbnail:"zegar.png",description:"Projekt wykonany w scratch. Pomoc do nauki zegara."}];function I(t,a,s){const e=t.slice();return e[0]=a[s],e}function T(t,a){let s,e,l;return e=new A({props:{title:a[0].title,url:a[0].url,thumbnail:a[0].thumbnail,description:a[0].description}}),{key:t,first:null,c(){s=g(),v(e.$$.fragment),this.h()},l(t){s=g(),k(e.$$.fragment,t),this.h()},h(){this.first=s},m(t,a){f(t,s,a),w(e,t,a),l=!0},p:m,i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){z(e.$$.fragment,t),l=!1},d(t){t&&c(s),y(e,t)}}}function C(t){let a,s,p,m,g,v,k,w,y=[],M=new Map,S=H;const A=t=>t[0].id;for(let a=0;a<S.length;a+=1){let s=I(t,S,a),e=A(s);M.set(e,y[a]=T(e,s))}return{c(){a=r(),s=e("h1"),p=l("Portfolio"),m=r(),g=e("div");for(let t=0;t<y.length;t+=1)y[t].c();v=r(),k=e("br"),this.h()},l(t){$('[data-svelte="svelte-14tyva1"]',document.head).forEach(c),a=h(t),s=i(t,"H1",{});var e=n(s);p=o(e,"Portfolio"),e.forEach(c),m=h(t),g=i(t,"DIV",{id:!0,class:!0});var l=n(g);for(let t=0;t<y.length;t+=1)y[t].l(l);l.forEach(c),v=h(t),k=i(t,"BR",{}),this.h()},h(){document.title="Programowanie",u(g,"id","container"),u(g,"class","svelte-p3b8og")},m(t,e){f(t,a,e),f(t,s,e),d(s,p),f(t,m,e),f(t,g,e);for(let t=0;t<y.length;t+=1)y[t].m(g,null);f(t,v,e),f(t,k,e),w=!0},p(t,[a]){if(0&a){const s=H;P(),y=x(y,a,A,1,t,s,M,g,j,T,null,I),E()}},i(t){if(!w){for(let t=0;t<S.length;t+=1)b(y[t]);w=!0}},o(t){for(let t=0;t<y.length;t+=1)z(y[t]);w=!1},d(t){t&&c(a),t&&c(s),t&&c(m),t&&c(g);for(let t=0;t<y.length;t+=1)y[t].d();t&&c(v),t&&c(k)}}}export default class extends t{constructor(t){super(),a(this,t,null,C,s,{})}}
