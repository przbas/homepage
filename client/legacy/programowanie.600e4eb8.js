import{_ as t,a as n,b as r,c as a,i,s as e,d as c,S as o,f as s,t as u,e as l,j as f,k as h,l as p,g as v,h as m,m as d,n as g,o as y,r as w,u as b,p as k,v as z,w as $,x as R,y as j,z as D,A as P,B as E,q as x,C as S,D as M,E as A,F as B}from"./client.5a968b47.js";import{D as C}from"./Disqus.f5679c92.js";function H(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,e=n(t);if(a){var c=n(this).constructor;i=Reflect.construct(e,arguments,c)}else i=e.apply(this,arguments);return r(this,i)}}function I(t){var n,r,a,i,e,c,o,z,$,R;return{c:function(){n=s("div"),r=s("h3"),a=u(t[0]),i=l(),e=s("a"),c=s("img"),z=l(),$=s("p"),R=u(t[3]),this.h()},l:function(o){n=f(o,"DIV",{class:!0});var s=h(n);r=f(s,"H3",{class:!0});var u=h(r);a=p(u,t[0]),u.forEach(v),i=m(s),e=f(s,"A",{href:!0,target:!0,class:!0});var l=h(e);c=f(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(v),z=m(s),$=f(s,"P",{class:!0});var d=h($);R=p(d,t[3]),d.forEach(v),s.forEach(v),this.h()},h:function(){d(r,"class","title svelte-1vkw4cl"),c.src!==(o=t[2])&&d(c,"src",o),d(c,"alt",t[0]),d(c,"class","svelte-1vkw4cl"),d(e,"href",t[1]),d(e,"target","_blank"),d(e,"class","svelte-1vkw4cl"),d($,"class","svelte-1vkw4cl"),d(n,"class","svelte-1vkw4cl")},m:function(t,o){g(t,n,o),y(n,r),y(r,a),y(n,i),y(n,e),y(e,c),y(n,z),y(n,$),y($,R)},p:function(t,n){var r=w(n,1)[0];1&r&&b(a,t[0]),4&r&&c.src!==(o=t[2])&&d(c,"src",o),1&r&&d(c,"alt",t[0]),2&r&&d(e,"href",t[1]),8&r&&b(R,t[3])},i:k,o:k,d:function(t){t&&v(n)}}}function T(t,n,r){var a=n.title,i=n.url,e=n.thumbnail,c=n.description;return t.$$set=function(t){"title"in t&&r(0,a=t.title),"url"in t&&r(1,i=t.url),"thumbnail"in t&&r(2,e=t.thumbnail),"description"in t&&r(3,c=t.description)},[a,i,e,c]}var q=function(n){t(s,o);var r=H(s);function s(t){var n;return a(this,s),n=r.call(this),i(c(n),t,T,I,e,{title:0,url:1,thumbnail:2,description:3}),n}return s}(),V=[{id:1,title:"Nauka w klasach nauczania początkowego",url:"https://przbas.github.io/nauka/",thumbnail:"nauka.png",description:"Pomoce w nauce rachowania, mnożenia, języka angielskiego. Czysty html, css, js. Strona responsywna."},{id:2,title:"Solver Tantrix Match",url:"http://185.119.210.70/solve-tantrix-match/",thumbnail:"solver.png",description:"Rozwiązywacz do układanki Tantrix MATCH. Strona w php z pobieraniem rozwiązań z bazy danych."},{id:3,title:"Zegar do nauki",url:"https://scratch.mit.edu/projects/331586761",thumbnail:"zegar.png",description:"Projekt wykonany w scratch. Pomoc do nauki zegara."}];function _(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,e=n(t);if(a){var c=n(this).constructor;i=Reflect.construct(e,arguments,c)}else i=e.apply(this,arguments);return r(this,i)}}function F(t,n,r){var a=t.slice();return a[0]=n[r],a}function G(t,n){var r,a,i;return a=new q({props:{title:n[0].title,url:n[0].url,thumbnail:n[0].thumbnail,description:n[0].description}}),{key:t,first:null,c:function(){r=z(),$(a.$$.fragment),this.h()},l:function(t){r=z(),R(a.$$.fragment,t),this.h()},h:function(){this.first=r},m:function(t,n){g(t,r,n),j(a,t,n),i=!0},p:k,i:function(t){i||(D(a.$$.fragment,t),i=!0)},o:function(t){P(a.$$.fragment,t),i=!1},d:function(t){t&&v(r),E(a,t)}}}function N(t){for(var n,r,a,i,e,c,o,b,k,z,H,I,T=[],q=new Map,_=V,N=function(t){return t[0].id},Z=0;Z<_.length;Z+=1){var J=F(t,_,Z),K=N(J);q.set(K,T[Z]=G(K,J))}return k=new C({props:{identifier:"przbas-homepage-pasje-programowanie",url:"https://przbas.github.io/homepage/pasje/programowanie"}}),{c:function(){n=l(),r=s("h1"),a=u("Portfolio"),i=l(),e=s("div");for(var t=0;t<T.length;t+=1)T[t].c();c=l(),o=s("br"),b=l(),$(k.$$.fragment),z=l(),H=s("br"),this.h()},l:function(t){x('[data-svelte="svelte-14tyva1"]',document.head).forEach(v),n=m(t),r=f(t,"H1",{});var s=h(r);a=p(s,"Portfolio"),s.forEach(v),i=m(t),e=f(t,"DIV",{id:!0,class:!0});for(var u=h(e),l=0;l<T.length;l+=1)T[l].l(u);u.forEach(v),c=m(t),o=f(t,"BR",{}),b=m(t),R(k.$$.fragment,t),z=m(t),H=f(t,"BR",{}),this.h()},h:function(){document.title="Programowanie",d(e,"id","container"),d(e,"class","svelte-p3b8og")},m:function(t,s){g(t,n,s),g(t,r,s),y(r,a),g(t,i,s),g(t,e,s);for(var u=0;u<T.length;u+=1)T[u].m(e,null);g(t,c,s),g(t,o,s),g(t,b,s),j(k,t,s),g(t,z,s),g(t,H,s),I=!0},p:function(t,n){var r=w(n,1)[0];if(0&r){var a=V;A(),T=S(T,r,N,1,t,a,q,e,B,G,null,F),M()}},i:function(t){if(!I){for(var n=0;n<_.length;n+=1)D(T[n]);D(k.$$.fragment,t),I=!0}},o:function(t){for(var n=0;n<T.length;n+=1)P(T[n]);P(k.$$.fragment,t),I=!1},d:function(t){t&&v(n),t&&v(r),t&&v(i),t&&v(e);for(var a=0;a<T.length;a+=1)T[a].d();t&&v(c),t&&v(o),t&&v(b),E(k,t),t&&v(z),t&&v(H)}}}var Z=function(n){t(s,o);var r=_(s);function s(t){var n;return a(this,s),n=r.call(this),i(c(n),t,null,N,e,{}),n}return s}();export default Z;
