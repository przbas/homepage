import{S as t,i as s,s as e,e as l,t as a,a as r,b as o,f as n,g as h,d as c,c as f,h as i,j as u,k as p,l as g,q as d,n as m,C as v}from"./client.619be86b.js";function b(t,s,e){const l=t.slice();return l[1]=s[e],l}function x(t){let s,e,d,m,v,b,x,E=t[1].title+"",j=t[1].date+"";return{c(){s=l("li"),e=l("a"),d=a(E),v=r(),b=l("p"),x=a(j),this.h()},l(t){s=o(t,"LI",{class:!0});var l=n(s);e=o(l,"A",{rel:!0,href:!0});var a=n(e);d=h(a,E),a.forEach(c),v=f(l),b=o(l,"P",{class:!0});var r=n(b);x=h(r,j),r.forEach(c),l.forEach(c),this.h()},h(){i(e,"rel","prefetch"),i(e,"href",m="blog/"+t[1].slug),i(b,"class","svelte-173x5m7"),i(s,"class","svelte-173x5m7")},m(t,l){u(t,s,l),p(s,e),p(e,d),p(s,v),p(s,b),p(b,x)},p(t,s){1&s&&E!==(E=t[1].title+"")&&g(d,E),1&s&&m!==(m="blog/"+t[1].slug)&&i(e,"href",m),1&s&&j!==(j=t[1].date+"")&&g(x,j)},d(t){t&&c(s)}}}function E(t){let s,e,g,E,j,y=t[0],P=[];for(let s=0;s<y.length;s+=1)P[s]=x(b(t,y,s));return{c(){s=r(),e=l("h1"),g=a("Posty"),E=r(),j=l("ul");for(let t=0;t<P.length;t+=1)P[t].c();this.h()},l(t){d('[data-svelte="svelte-hfp9t8"]',document.head).forEach(c),s=f(t),e=o(t,"H1",{});var l=n(e);g=h(l,"Posty"),l.forEach(c),E=f(t),j=o(t,"UL",{class:!0});var a=n(j);for(let t=0;t<P.length;t+=1)P[t].l(a);a.forEach(c),this.h()},h(){document.title="Blog",i(j,"class","svelte-173x5m7")},m(t,l){u(t,s,l),u(t,e,l),p(e,g),u(t,E,l),u(t,j,l);for(let t=0;t<P.length;t+=1)P[t].m(j,null)},p(t,[s]){if(1&s){let e;for(y=t[0],e=0;e<y.length;e+=1){const l=b(t,y,e);P[e]?P[e].p(l,s):(P[e]=x(l),P[e].c(),P[e].m(j,null))}for(;e<P.length;e+=1)P[e].d(1);P.length=y.length}},i:m,o:m,d(t){t&&c(s),t&&c(e),t&&c(E),t&&c(j),v(P,t)}}}function j({params:t,query:s}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function y(t,s,e){let{posts:l}=s;return t.$$set=t=>{"posts"in t&&e(0,l=t.posts)},[l]}export default class extends t{constructor(t){super(),s(this,t,y,E,e,{posts:0})}}export{j as preload};
