function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function i(t,e,n,r,s,o,a){const i=function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(e,r,s,o);if(i){const s=c(e,n,r,a);t.p(s,i)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function g(){return h("")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function v(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;const o=[];for(;e<s.attributes.length;){const t=s.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)s.removeAttribute(o[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):d(e)}function _(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return h(e)}function b(t){return _(t," ")}function E(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e=document.body){return Array.from(e.querySelectorAll(t))}let S;function x(t){S=t}function P(){if(!S)throw new Error("Function called outside component initialization");return S}const j=[],N=[],A=[],R=[],k=Promise.resolve();let C=!1;function I(t){A.push(t)}let L=!1;const O=new Set;function T(){if(!L){L=!0;do{for(let t=0;t<j.length;t+=1){const e=j[t];x(e),U(e.$$)}for(x(null),j.length=0;N.length;)N.pop()();for(let t=0;t<A.length;t+=1){const e=A[t];O.has(e)||(O.add(e),e())}A.length=0}while(j.length);for(;R.length;)R.pop()();C=!1,L=!1,O.clear()}}function U(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const q=new Set;let z;function J(){z={r:0,c:[],p:z}}function B(){z.r||s(z.c),z=z.p}function M(t,e){t&&t.i&&(q.delete(t),t.i(e))}function V(t,e,n,r){if(t&&t.o){if(q.has(t))return;q.add(t),z.c.push(()=>{q.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const D="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function K(t,e){V(t,1,1,()=>{e.delete(t.key)})}function F(t,e,n,r,s,o,a,c,i,l,u,f){let p=t.length,d=o.length,h=p;const m={};for(;h--;)m[t[h].key]=h;const g=[],$=new Map,y=new Map;for(h=d;h--;){const t=f(s,o,h),c=n(t);let i=a.get(c);i?r&&i.p(t,e):(i=l(c,t),i.c()),$.set(c,g[h]=i),c in m&&y.set(c,Math.abs(h-m[c]))}const v=new Set,_=new Set;function b(t){M(t,1),t.m(c,u),a.set(t.key,t),u=t.first,d--}for(;p&&d;){const e=g[d-1],n=t[p-1],r=e.key,s=n.key;e===n?(u=e.first,p--,d--):$.has(s)?!a.has(r)||v.has(r)?b(e):_.has(s)?p--:y.get(r)>y.get(s)?(_.add(r),b(e)):(v.add(s),p--):(i(n,a),p--)}for(;p--;){const e=t[p];$.has(e.key)||i(e,a)}for(;d;)b(g[d-1]);return g}function H(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function Y(t){return"object"==typeof t&&null!==t?t:{}}function G(t){t&&t.c()}function W(t,e){t&&t.l(e)}function X(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),I(()=>{const e=c.map(n).filter(o);i?i.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(I)}function Q(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e){-1===t.$$.dirty[0]&&(j.push(t),C||(C=!0,k.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(e,n,o,a,c,i,l=[-1]){const u=S;x(e);const p=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let h=!1;if(d.ctx=o?o(e,p,(t,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=s)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](s),h&&Z(e,t)),n}):[],d.update(),h=!0,s(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=y(n.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();n.intro&&M(e.$$.fragment),X(e,n.target,n.anchor),T()}x(u)}class et{$destroy(){Q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const nt=[];function rt(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!nt.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),nt.push(n,e)}if(t){for(let t=0;t<nt.length;t+=2)nt[t][0](nt[t+1]);nt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const i=[a,c];return s.push(i),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const st={};function ot(e){let n,r,s,o,a,c,i,p,g,E,w,S,x,P,j,N,A,R,k,C,I,L,O;return{c(){n=d("div"),r=d("nav"),s=d("ul"),o=d("li"),a=d("a"),c=h("Przemysław Baśkiewicz"),p=m(),g=d("ul"),E=d("li"),w=d("a"),S=h("praca"),P=m(),j=d("li"),N=d("a"),A=h("pasje"),k=m(),C=d("li"),I=d("a"),L=h("blog"),this.h()},l(t){n=v(t,"DIV",{class:!0});var e=y(n);r=v(e,"NAV",{class:!0});var i=y(r);s=v(i,"UL",{class:!0});var l=y(s);o=v(l,"LI",{class:!0});var u=y(o);a=v(u,"A",{"aria-current":!0,href:!0,class:!0});var d=y(a);c=_(d,"Przemysław Baśkiewicz"),d.forEach(f),u.forEach(f),l.forEach(f),p=b(i),g=v(i,"UL",{class:!0});var h=y(g);E=v(h,"LI",{class:!0});var m=y(E);w=v(m,"A",{"aria-current":!0,href:!0,class:!0});var $=y(w);S=_($,"praca"),$.forEach(f),m.forEach(f),P=b(h),j=v(h,"LI",{class:!0});var x=y(j);N=v(x,"A",{"aria-current":!0,href:!0,class:!0});var R=y(N);A=_(R,"pasje"),R.forEach(f),x.forEach(f),k=b(h),C=v(h,"LI",{class:!0});var O=y(C);I=v(O,"A",{"aria-current":!0,href:!0,class:!0});var T=y(I);L=_(T,"blog"),T.forEach(f),O.forEach(f),h.forEach(f),i.forEach(f),e.forEach(f),this.h()},h(){$(a,"aria-current",i=void 0===e[0]?"page":void 0),$(a,"href","."),$(a,"class","svelte-1m6ysup"),$(o,"class","svelte-1m6ysup"),$(s,"class","svelte-1m6ysup"),$(w,"aria-current",x="praca"===e[0]?"page":void 0),$(w,"href","praca"),$(w,"class","svelte-1m6ysup"),$(E,"class","svelte-1m6ysup"),$(N,"aria-current",R="pasje"===e[0]?"page":void 0),$(N,"href","pasje"),$(N,"class","svelte-1m6ysup"),$(j,"class","svelte-1m6ysup"),$(I,"aria-current",O="blog"===e[0]?"page":void 0),$(I,"href","blog"),$(I,"class","svelte-1m6ysup"),$(C,"class","svelte-1m6ysup"),$(g,"class","svelte-1m6ysup"),$(r,"class","svelte-1m6ysup"),$(n,"class","svelte-1m6ysup")},m(t,e){u(t,n,e),l(n,r),l(r,s),l(s,o),l(o,a),l(a,c),l(r,p),l(r,g),l(g,E),l(E,w),l(w,S),l(g,P),l(g,j),l(j,N),l(N,A),l(g,k),l(g,C),l(C,I),l(I,L)},p(t,[e]){1&e&&i!==(i=void 0===t[0]?"page":void 0)&&$(a,"aria-current",i),1&e&&x!==(x="praca"===t[0]?"page":void 0)&&$(w,"aria-current",x),1&e&&R!==(R="pasje"===t[0]?"page":void 0)&&$(N,"aria-current",R),1&e&&O!==(O="blog"===t[0]?"page":void 0)&&$(I,"aria-current",O)},i:t,o:t,d(t){t&&f(n)}}}function at(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class ct extends et{constructor(t){super(),tt(this,t,at,ot,a,{segment:0})}}function it(e){let n,r,s;return{c(){n=d("footer"),r=d("div"),s=h("Copyright 2021 Przemysław Baśkiewicz"),this.h()},l(t){n=v(t,"FOOTER",{class:!0});var e=y(n);r=v(e,"DIV",{class:!0});var o=y(r);s=_(o,"Copyright 2021 Przemysław Baśkiewicz"),o.forEach(f),e.forEach(f),this.h()},h(){$(r,"class","svelte-j329h9"),$(n,"class","svelte-j329h9")},m(t,e){u(t,n,e),l(n,r),l(r,s)},p:t,i:t,o:t,d(t){t&&f(n)}}}class lt extends et{constructor(t){super(),tt(this,t,null,it,a,{})}}function ut(t){let e,n,r,s,o,a;e=new ct({props:{segment:t[0]}});const l=t[2].default,p=function(t,e,n,r){if(t){const s=c(t,e,n,r);return t[0](s)}}(l,t,t[1],null);return o=new lt({}),{c(){G(e.$$.fragment),n=m(),r=d("main"),p&&p.c(),s=m(),G(o.$$.fragment),this.h()},l(t){W(e.$$.fragment,t),n=b(t),r=v(t,"MAIN",{class:!0});var a=y(r);p&&p.l(a),a.forEach(f),s=b(t),W(o.$$.fragment,t),this.h()},h(){$(r,"class","svelte-ieqlj8")},m(t,c){X(e,t,c),u(t,n,c),u(t,r,c),p&&p.m(r,null),u(t,s,c),X(o,t,c),a=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),p&&p.p&&2&n&&i(p,l,t,t[1],n,null,null)},i(t){a||(M(e.$$.fragment,t),M(p,t),M(o.$$.fragment,t),a=!0)},o(t){V(e.$$.fragment,t),V(p,t),V(o.$$.fragment,t),a=!1},d(t){Q(e,t),t&&f(n),t&&f(r),p&&p.d(t),t&&f(s),Q(o,t)}}}function ft(t,e,n){let{$$slots:r={},$$scope:s}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[o,s,r]}class pt extends et{constructor(t){super(),tt(this,t,ft,ut,a,{segment:0})}}function dt(t){let e,n,r=t[1].stack+"";return{c(){e=d("pre"),n=h(r)},l(t){e=v(t,"PRE",{});var s=y(e);n=_(s,r),s.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&E(n,r)},d(t){t&&f(e)}}}function ht(e){let n,r,s,o,a,c,i,p,S,x=e[1].message+"";document.title=n=e[0];let P=e[2]&&e[1].stack&&dt(e);return{c(){r=m(),s=d("h1"),o=h(e[0]),a=m(),c=d("p"),i=h(x),p=m(),P&&P.c(),S=g(),this.h()},l(t){w('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=b(t),s=v(t,"H1",{class:!0});var n=y(s);o=_(n,e[0]),n.forEach(f),a=b(t),c=v(t,"P",{class:!0});var l=y(c);i=_(l,x),l.forEach(f),p=b(t),P&&P.l(t),S=g(),this.h()},h(){$(s,"class","svelte-8od9u6"),$(c,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,s,e),l(s,o),u(t,a,e),u(t,c,e),l(c,i),u(t,p,e),P&&P.m(t,e),u(t,S,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&E(o,t[0]),2&e&&x!==(x=t[1].message+"")&&E(i,x),t[2]&&t[1].stack?P?P.p(t,e):(P=dt(t),P.c(),P.m(S.parentNode,S)):P&&(P.d(1),P=null)},i:t,o:t,d(t){t&&f(r),t&&f(s),t&&f(a),t&&f(c),t&&f(p),P&&P.d(t),t&&f(S)}}}function mt(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,false]}class gt extends et{constructor(t){super(),tt(this,t,mt,ht,a,{status:0,error:1})}}function $t(t){let n,r,s;const o=[t[4].props];var a=t[4].component;function c(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=new a(c())),{c(){n&&G(n.$$.fragment),r=g()},l(t){n&&W(n.$$.fragment,t),r=g()},m(t,e){n&&X(n,t,e),u(t,r,e),s=!0},p(t,e){const s=16&e?H(o,[Y(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){J();const t=n;V(t.$$.fragment,1,0,()=>{Q(t,1)}),B()}a?(n=new a(c()),G(n.$$.fragment),M(n.$$.fragment,1),X(n,r.parentNode,r)):n=null}else a&&n.$set(s)},i(t){s||(n&&M(n.$$.fragment,t),s=!0)},o(t){n&&V(n.$$.fragment,t),s=!1},d(t){t&&f(r),n&&Q(n,t)}}}function yt(t){let e,n;return e=new gt({props:{error:t[0],status:t[1]}}),{c(){G(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){X(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){Q(e,t)}}}function vt(t){let e,n,r,s;const o=[yt,$t],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){a[e].m(t,n),u(t,r,n),s=!0},p(t,s){let i=e;e=c(t),e===i?a[e].p(t,s):(J(),V(a[i],1,1,()=>{a[i]=null}),B(),n=a[e],n||(n=a[e]=o[e](t),n.c()),M(n,1),n.m(r.parentNode,r))},i(t){s||(M(n),s=!0)},o(t){V(n),s=!1},d(t){a[e].d(t),t&&f(r)}}}function _t(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[vt]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new pt({props:o}),{c(){G(n.$$.fragment)},l(t){W(n.$$.fragment,t)},m(t,e){X(n,t,e),r=!0},p(t,[e]){const r=12&e?H(s,[4&e&&{segment:t[2][0]},8&e&&Y(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(M(n.$$.fragment,t),r=!0)},o(t){V(n.$$.fragment,t),r=!1},d(t){Q(n,t)}}}function bt(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var u,f,p;return u=l,P().$$.after_update.push(u),f=st,p=r,P().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,a,c,i,r,l]}class Et extends et{constructor(t){super(),tt(this,t,bt,_t,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const wt=[/^\/blog\.json$/,/^\/blog\/([^/]+?)\.json$/],St=[{js:()=>Promise.all([import("./index.4d7fdbb7.js"),__inject_styles(["client-535ad722.css","index-7247e915.css"])]).then(t=>t[0])},{js:()=>Promise.all([import("./index.5c3b94cf.js"),__inject_styles(["client-535ad722.css","index-75648f1d.css"])]).then(t=>t[0])},{js:()=>Promise.all([import("./programowanie.6dfc1b44.js"),__inject_styles(["client-535ad722.css","programowanie-2b805b3d.css"])]).then(t=>t[0])},{js:()=>Promise.all([import("./praca.a7ade019.js"),__inject_styles(["client-535ad722.css"])]).then(t=>t[0])},{js:()=>Promise.all([import("./index.95b4fdab.js"),__inject_styles(["client-535ad722.css","index-a064aeb5.css"])]).then(t=>t[0])},{js:()=>Promise.all([import("./[slug].4470e169.js"),__inject_styles(["client-535ad722.css","[slug]-a52d3719.css"])]).then(t=>t[0])}],xt=(Pt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/pasje\/?$/,parts:[{i:1}]},{pattern:/^\/pasje\/programowanie\/?$/,parts:[null,{i:2}]},{pattern:/^\/praca\/?$/,parts:[{i:3}]},{pattern:/^\/blog\/?$/,parts:[{i:4}]},{pattern:/^\/blog\/([^/]+?)\/?$/,parts:[null,{i:5,params:t=>({slug:Pt(t[1])})}]}]);var Pt;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function jt(t,e,n,r){return new(n||(n=Promise))((function(s,o){function a(t){try{i(r.next(t))}catch(t){o(t)}}function c(t){try{i(r.throw(t))}catch(t){o(t)}}function i(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}i((r=r.apply(t,e||[])).next())}))}function Nt(t,e={noscroll:!1,replaceState:!1}){const n=Ft(new URL(t,document.baseURI));return n?(Vt[e.replaceState?"replaceState":"pushState"]({id:Bt},"",t),Yt(n,null,e.noscroll).then(()=>{})):(location.href=t,new Promise(t=>{}))}const At="undefined"!=typeof __SAPPER__&&__SAPPER__;let Rt,kt,Ct,It=!1,Lt=[],Ot="{}";const Tt={page:function(t){const e=rt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:rt(null),session:rt(At&&At.session)};let Ut,qt;Tt.session.subscribe(t=>jt(void 0,void 0,void 0,(function*(){if(Ut=t,!It)return;qt=!0;const e=Ft(new URL(location.href)),n=kt={},{redirect:r,props:s,branch:o}=yield Wt(e);n===kt&&(r?yield Nt(r.location,{replaceState:!0}):yield Gt(o,s,e.page))})));let zt,Jt=null;let Bt,Mt=1;const Vt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Dt={};function Kt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Ft(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(At.baseUrl))return null;let e=t.pathname.slice(At.baseUrl.length);if(""===e&&(e="/"),!wt.some(t=>t.test(e)))for(let n=0;n<xt.length;n+=1){const r=xt[n],s=r.pattern.exec(e);if(s){const n=Kt(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function Ht(){return{x:pageXOffset,y:pageYOffset}}function Yt(t,e,n,r){return jt(this,void 0,void 0,(function*(){if(e)Bt=e;else{const t=Ht();Dt[Bt]=t,e=Bt=++Mt,Dt[Bt]=n?t:{x:0,y:0}}Bt=e,Rt&&Tt.preloading.set(!0);const s=Jt&&Jt.href===t.href?Jt.promise:Wt(t);Jt=null;const o=kt={},a=yield s,{redirect:c}=a;if(o===kt){if(c)yield Nt(c.location,{replaceState:!0});else{const{props:e,branch:n}=a;yield Gt(n,e,t.page)}if(document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t=Dt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Dt[Bt]=t,t&&(c?scrollTo(0,0):scrollTo(t.x,t.y))}}}))}function Gt(t,e,n){return jt(this,void 0,void 0,(function*(){Tt.page.set(n),Tt.preloading.set(!1),Rt?Rt.$set(e):(e.stores={page:{subscribe:Tt.page.subscribe},preloading:{subscribe:Tt.preloading.subscribe},session:Tt.session},e.level0={props:yield Ct},e.notify=Tt.page.notify,Rt=new Et({target:zt,props:e,hydrate:!0})),Lt=t,Ot=JSON.stringify(n.query),It=!0,qt=!1}))}function Wt(t){return jt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Ct){const t=()=>{};Ct=At.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ut)}let c,i=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=yield Promise.all(e.parts.map((e,c)=>jt(this,void 0,void 0,(function*(){const f=r[c];if(function(t,e,n,r){if(r!==Ot)return!0;const s=Lt[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,s)&&(u=!0),o.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!qt&&!u&&Lt[c]&&Lt[c].part===e.i)return Lt[c];u=!1;const{default:d,preload:h}=yield function(t){const e=[t.js()];return Promise.all(e).then(t=>t[0])}(St[e.i]);let m;return m=It||!At.preloaded[c+1]?h?yield h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ut):{}:At.preloaded[c+1],o["level"+p]={component:d,props:m,segment:f,match:l,part:e.i}}))))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}))}function Xt(t){const e=Ft(new URL(t,document.baseURI));if(e)return Jt&&t===Jt.href||function(t,e){Jt={href:t,promise:e}}(t,Wt(e)),Jt.promise}let Qt;function Zt(t){clearTimeout(Qt),Qt=setTimeout(()=>{te(t)},20)}function te(t){const e=ne(t.target);e&&"prefetch"===e.rel&&Xt(e.href)}function ee(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=ne(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Ft(s);if(o){Yt(o,null,e.hasAttribute("sapper:noscroll"),s.hash),t.preventDefault(),Vt.pushState({id:Bt},"",s.href)}}function ne(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function re(t){if(Dt[Bt]=Ht(),t.state){const e=Ft(new URL(location.href));e?Yt(e,t.state.id):location.href=location.href}else Mt=Mt+1,function(t){Bt=t}(Mt),Vt.replaceState({id:Bt},"",location.href)}var se;se={target:document.querySelector("#sapper")},"scrollRestoration"in Vt&&(Vt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Vt.scrollRestoration="auto"}),addEventListener("load",()=>{Vt.scrollRestoration="manual"}),function(t){zt=t}(se.target),addEventListener("click",ee),addEventListener("popstate",re),addEventListener("touchstart",te),addEventListener("mousemove",Zt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Vt.replaceState({id:Mt},"",e);const n=new URL(location.href);if(At.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=At;Ct||(Ct=o&&o[0]),Gt([],{error:c,status:a,session:s,level0:{props:Ct},level1:{props:{status:a,error:c},component:gt},segments:o},{host:e,path:n,query:Kt(r),params:{}})}();const r=Ft(n);return r?Yt(r,Mt,!0,t):void 0});export{J as A,K as B,p as C,et as S,m as a,v as b,b as c,f as d,d as e,y as f,_ as g,$ as h,tt as i,u as j,l as k,E as l,g as m,t as n,G as o,W as p,w as q,X as r,a as s,h as t,M as u,V as v,Q as w,F as x,B as y,D as z};

import __inject_styles from './inject_styles.js';