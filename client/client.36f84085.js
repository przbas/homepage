function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function i(t,e,n,r,s,o,a){const i=function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(e,r,s,o);if(i){const s=c(e,n,r,a);t.p(s,i)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function g(){return d("")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t){return Array.from(t.childNodes)}function y(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;const o=[];for(;e<s.attributes.length;){const t=s.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)s.removeAttribute(o[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):h(e)}function _(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return d(e)}function b(t){return _(t," ")}function E(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e=document.body){return Array.from(e.querySelectorAll(t))}let S;function x(t){S=t}function P(){if(!S)throw new Error("Function called outside component initialization");return S}const j=[],N=[],A=[],R=[],k=Promise.resolve();let I=!1;function C(t){A.push(t)}let L=!1;const O=new Set;function T(){if(!L){L=!0;do{for(let t=0;t<j.length;t+=1){const e=j[t];x(e),U(e.$$)}for(x(null),j.length=0;N.length;)N.pop()();for(let t=0;t<A.length;t+=1){const e=A[t];O.has(e)||(O.add(e),e())}A.length=0}while(j.length);for(;R.length;)R.pop()();I=!1,L=!1,O.clear()}}function U(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const q=new Set;let z;function J(){z={r:0,c:[],p:z}}function B(){z.r||s(z.c),z=z.p}function M(t,e){t&&t.i&&(q.delete(t),t.i(e))}function V(t,e,n,r){if(t&&t.o){if(q.has(t))return;q.add(t),z.c.push(()=>{q.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function D(t,e){V(t,1,1,()=>{e.delete(t.key)})}function K(t,e,n,r,s,o,a,c,i,l,u,f){let p=t.length,h=o.length,d=p;const m={};for(;d--;)m[t[d].key]=d;const g=[],$=new Map,v=new Map;for(d=h;d--;){const t=f(s,o,d),c=n(t);let i=a.get(c);i?r&&i.p(t,e):(i=l(c,t),i.c()),$.set(c,g[d]=i),c in m&&v.set(c,Math.abs(d-m[c]))}const y=new Set,_=new Set;function b(t){M(t,1),t.m(c,u),a.set(t.key,t),u=t.first,h--}for(;p&&h;){const e=g[h-1],n=t[p-1],r=e.key,s=n.key;e===n?(u=e.first,p--,h--):$.has(s)?!a.has(r)||y.has(r)?b(e):_.has(s)?p--:v.get(r)>v.get(s)?(_.add(r),b(e)):(y.add(s),p--):(i(n,a),p--)}for(;p--;){const e=t[p];$.has(e.key)||i(e,a)}for(;h;)b(g[h-1]);return g}function F(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function H(t){return"object"==typeof t&&null!==t?t:{}}function Y(t){t&&t.c()}function G(t,e){t&&t.l(e)}function W(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),C(()=>{const e=c.map(n).filter(o);i?i.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(C)}function X(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,e){-1===t.$$.dirty[0]&&(j.push(t),I||(I=!0,k.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(e,n,o,a,c,i,l=[-1]){const u=S;x(e);const p=n.props||{},h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let d=!1;if(h.ctx=o?o(e,p,(t,n,...r)=>{const s=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=s)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](s),d&&Q(e,t)),n}):[],h.update(),d=!0,s(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){const t=v(n.target);h.fragment&&h.fragment.l(t),t.forEach(f)}else h.fragment&&h.fragment.c();n.intro&&M(e.$$.fragment),W(e,n.target,n.anchor),T()}x(u)}class tt{$destroy(){X(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const et=[];function nt(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!et.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),et.push(n,e)}if(t){for(let t=0;t<et.length;t+=2)et[t][0](et[t+1]);et.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const i=[a,c];return s.push(i),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const rt={};function st(e){let n,r,s,o,a,c,i,p,g,E,w,S,x,P,j,N,A,R,k,I,C,L,O;return{c(){n=h("div"),r=h("nav"),s=h("ul"),o=h("li"),a=h("a"),c=d("Przemysław Baśkiewicz"),p=m(),g=h("ul"),E=h("li"),w=h("a"),S=d("praca"),P=m(),j=h("li"),N=h("a"),A=d("pasje"),k=m(),I=h("li"),C=h("a"),L=d("blog"),this.h()},l(t){n=y(t,"DIV",{class:!0});var e=v(n);r=y(e,"NAV",{class:!0});var i=v(r);s=y(i,"UL",{class:!0});var l=v(s);o=y(l,"LI",{class:!0});var u=v(o);a=y(u,"A",{"aria-current":!0,href:!0,class:!0});var h=v(a);c=_(h,"Przemysław Baśkiewicz"),h.forEach(f),u.forEach(f),l.forEach(f),p=b(i),g=y(i,"UL",{class:!0});var d=v(g);E=y(d,"LI",{class:!0});var m=v(E);w=y(m,"A",{"aria-current":!0,href:!0,class:!0});var $=v(w);S=_($,"praca"),$.forEach(f),m.forEach(f),P=b(d),j=y(d,"LI",{class:!0});var x=v(j);N=y(x,"A",{"aria-current":!0,href:!0,class:!0});var R=v(N);A=_(R,"pasje"),R.forEach(f),x.forEach(f),k=b(d),I=y(d,"LI",{class:!0});var O=v(I);C=y(O,"A",{"aria-current":!0,href:!0,class:!0});var T=v(C);L=_(T,"blog"),T.forEach(f),O.forEach(f),d.forEach(f),i.forEach(f),e.forEach(f),this.h()},h(){$(a,"aria-current",i=void 0===e[0]?"page":void 0),$(a,"href","."),$(a,"class","svelte-1m6ysup"),$(o,"class","svelte-1m6ysup"),$(s,"class","svelte-1m6ysup"),$(w,"aria-current",x="praca"===e[0]?"page":void 0),$(w,"href","praca"),$(w,"class","svelte-1m6ysup"),$(E,"class","svelte-1m6ysup"),$(N,"aria-current",R="pasje"===e[0]?"page":void 0),$(N,"href","pasje"),$(N,"class","svelte-1m6ysup"),$(j,"class","svelte-1m6ysup"),$(C,"aria-current",O="blog"===e[0]?"page":void 0),$(C,"href","blog"),$(C,"class","svelte-1m6ysup"),$(I,"class","svelte-1m6ysup"),$(g,"class","svelte-1m6ysup"),$(r,"class","svelte-1m6ysup"),$(n,"class","svelte-1m6ysup")},m(t,e){u(t,n,e),l(n,r),l(r,s),l(s,o),l(o,a),l(a,c),l(r,p),l(r,g),l(g,E),l(E,w),l(w,S),l(g,P),l(g,j),l(j,N),l(N,A),l(g,k),l(g,I),l(I,C),l(C,L)},p(t,[e]){1&e&&i!==(i=void 0===t[0]?"page":void 0)&&$(a,"aria-current",i),1&e&&x!==(x="praca"===t[0]?"page":void 0)&&$(w,"aria-current",x),1&e&&R!==(R="pasje"===t[0]?"page":void 0)&&$(N,"aria-current",R),1&e&&O!==(O="blog"===t[0]?"page":void 0)&&$(C,"aria-current",O)},i:t,o:t,d(t){t&&f(n)}}}function ot(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class at extends tt{constructor(t){super(),Z(this,t,ot,st,a,{segment:0})}}function ct(e){let n,r,s;return{c(){n=h("footer"),r=h("div"),s=d("Copyright 2021 Przemysław Baśkiewicz"),this.h()},l(t){n=y(t,"FOOTER",{class:!0});var e=v(n);r=y(e,"DIV",{class:!0});var o=v(r);s=_(o,"Copyright 2021 Przemysław Baśkiewicz"),o.forEach(f),e.forEach(f),this.h()},h(){$(r,"class","svelte-j329h9"),$(n,"class","svelte-j329h9")},m(t,e){u(t,n,e),l(n,r),l(r,s)},p:t,i:t,o:t,d(t){t&&f(n)}}}class it extends tt{constructor(t){super(),Z(this,t,null,ct,a,{})}}function lt(t){let e,n,r,s,o,a;e=new at({props:{segment:t[0]}});const l=t[2].default,p=function(t,e,n,r){if(t){const s=c(t,e,n,r);return t[0](s)}}(l,t,t[1],null);return o=new it({}),{c(){Y(e.$$.fragment),n=m(),r=h("main"),p&&p.c(),s=m(),Y(o.$$.fragment),this.h()},l(t){G(e.$$.fragment,t),n=b(t),r=y(t,"MAIN",{class:!0});var a=v(r);p&&p.l(a),a.forEach(f),s=b(t),G(o.$$.fragment,t),this.h()},h(){$(r,"class","svelte-ieqlj8")},m(t,c){W(e,t,c),u(t,n,c),u(t,r,c),p&&p.m(r,null),u(t,s,c),W(o,t,c),a=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),p&&p.p&&2&n&&i(p,l,t,t[1],n,null,null)},i(t){a||(M(e.$$.fragment,t),M(p,t),M(o.$$.fragment,t),a=!0)},o(t){V(e.$$.fragment,t),V(p,t),V(o.$$.fragment,t),a=!1},d(t){X(e,t),t&&f(n),t&&f(r),p&&p.d(t),t&&f(s),X(o,t)}}}function ut(t,e,n){let{$$slots:r={},$$scope:s}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[o,s,r]}class ft extends tt{constructor(t){super(),Z(this,t,ut,lt,a,{segment:0})}}function pt(t){let e,n,r=t[1].stack+"";return{c(){e=h("pre"),n=d(r)},l(t){e=y(t,"PRE",{});var s=v(e);n=_(s,r),s.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&E(n,r)},d(t){t&&f(e)}}}function ht(e){let n,r,s,o,a,c,i,p,S,x=e[1].message+"";document.title=n=e[0];let P=e[2]&&e[1].stack&&pt(e);return{c(){r=m(),s=h("h1"),o=d(e[0]),a=m(),c=h("p"),i=d(x),p=m(),P&&P.c(),S=g(),this.h()},l(t){w('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=b(t),s=y(t,"H1",{class:!0});var n=v(s);o=_(n,e[0]),n.forEach(f),a=b(t),c=y(t,"P",{class:!0});var l=v(c);i=_(l,x),l.forEach(f),p=b(t),P&&P.l(t),S=g(),this.h()},h(){$(s,"class","svelte-8od9u6"),$(c,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,s,e),l(s,o),u(t,a,e),u(t,c,e),l(c,i),u(t,p,e),P&&P.m(t,e),u(t,S,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&E(o,t[0]),2&e&&x!==(x=t[1].message+"")&&E(i,x),t[2]&&t[1].stack?P?P.p(t,e):(P=pt(t),P.c(),P.m(S.parentNode,S)):P&&(P.d(1),P=null)},i:t,o:t,d(t){t&&f(r),t&&f(s),t&&f(a),t&&f(c),t&&f(p),P&&P.d(t),t&&f(S)}}}function dt(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,false]}class mt extends tt{constructor(t){super(),Z(this,t,dt,ht,a,{status:0,error:1})}}function gt(t){let n,r,s;const o=[t[4].props];var a=t[4].component;function c(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=new a(c())),{c(){n&&Y(n.$$.fragment),r=g()},l(t){n&&G(n.$$.fragment,t),r=g()},m(t,e){n&&W(n,t,e),u(t,r,e),s=!0},p(t,e){const s=16&e?F(o,[H(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){J();const t=n;V(t.$$.fragment,1,0,()=>{X(t,1)}),B()}a?(n=new a(c()),Y(n.$$.fragment),M(n.$$.fragment,1),W(n,r.parentNode,r)):n=null}else a&&n.$set(s)},i(t){s||(n&&M(n.$$.fragment,t),s=!0)},o(t){n&&V(n.$$.fragment,t),s=!1},d(t){t&&f(r),n&&X(n,t)}}}function $t(t){let e,n;return e=new mt({props:{error:t[0],status:t[1]}}),{c(){Y(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,r){W(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function vt(t){let e,n,r,s;const o=[$t,gt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){a[e].m(t,n),u(t,r,n),s=!0},p(t,s){let i=e;e=c(t),e===i?a[e].p(t,s):(J(),V(a[i],1,1,()=>{a[i]=null}),B(),n=a[e],n||(n=a[e]=o[e](t),n.c()),M(n,1),n.m(r.parentNode,r))},i(t){s||(M(n),s=!0)},o(t){V(n),s=!1},d(t){a[e].d(t),t&&f(r)}}}function yt(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[vt]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new ft({props:o}),{c(){Y(n.$$.fragment)},l(t){G(n.$$.fragment,t)},m(t,e){W(n,t,e),r=!0},p(t,[e]){const r=12&e?F(s,[4&e&&{segment:t[2][0]},8&e&&H(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(M(n.$$.fragment,t),r=!0)},o(t){V(n.$$.fragment,t),r=!1},d(t){X(n,t)}}}function _t(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var u,f,p;return u=l,P().$$.after_update.push(u),f=rt,p=r,P().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,a,c,i,r,l]}class bt extends tt{constructor(t){super(),Z(this,t,_t,yt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Et=[/^\/blog\.json$/,/^\/blog\/([^/]+?)\.json$/],wt=[{js:()=>Promise.all([import("./index.314730c0.js"),__inject_styles(["client-535ad722.css","index-7247e915.css"])]).then(t=>t[0])},{js:()=>Promise.all([import("./index.133ad204.js"),__inject_styles(["client-535ad722.css","index-75648f1d.css"])]).then(t=>t[0])},{js:()=>Promise.all([import("./programowanie.e9782452.js"),__inject_styles(["client-535ad722.css","programowanie-2b805b3d.css"])]).then(t=>t[0])},{js:()=>Promise.all([import("./praca.fdc21dc9.js"),__inject_styles(["client-535ad722.css"])]).then(t=>t[0])},{js:()=>Promise.all([import("./index.60f03bf9.js"),__inject_styles(["client-535ad722.css","index-a064aeb5.css"])]).then(t=>t[0])},{js:()=>Promise.all([import("./[slug].3e0fd19d.js"),__inject_styles(["client-535ad722.css","[slug]-a52d3719.css"])]).then(t=>t[0])}],St=(xt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/pasje\/?$/,parts:[{i:1}]},{pattern:/^\/pasje\/programowanie\/?$/,parts:[null,{i:2}]},{pattern:/^\/praca\/?$/,parts:[{i:3}]},{pattern:/^\/blog\/?$/,parts:[{i:4}]},{pattern:/^\/blog\/([^/]+?)\/?$/,parts:[null,{i:5,params:t=>({slug:xt(t[1])})}]}]);var xt;
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
function Pt(t,e,n,r){return new(n||(n=Promise))((function(s,o){function a(t){try{i(r.next(t))}catch(t){o(t)}}function c(t){try{i(r.throw(t))}catch(t){o(t)}}function i(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}i((r=r.apply(t,e||[])).next())}))}function jt(t,e={noscroll:!1,replaceState:!1}){const n=Kt(new URL(t,document.baseURI));return n?(Mt[e.replaceState?"replaceState":"pushState"]({id:Jt},"",t),Ht(n,null,e.noscroll).then(()=>{})):(location.href=t,new Promise(t=>{}))}const Nt="undefined"!=typeof __SAPPER__&&__SAPPER__;let At,Rt,kt,It=!1,Ct=[],Lt="{}";const Ot={page:function(t){const e=nt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:nt(null),session:nt(Nt&&Nt.session)};let Tt,Ut;Ot.session.subscribe(t=>Pt(void 0,void 0,void 0,(function*(){if(Tt=t,!It)return;Ut=!0;const e=Kt(new URL(location.href)),n=Rt={},{redirect:r,props:s,branch:o}=yield Gt(e);n===Rt&&(r?yield jt(r.location,{replaceState:!0}):yield Yt(o,s,e.page))})));let qt,zt=null;let Jt,Bt=1;const Mt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Vt={};function Dt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Kt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Nt.baseUrl))return null;let e=t.pathname.slice(Nt.baseUrl.length);if(""===e&&(e="/"),!Et.some(t=>t.test(e)))for(let n=0;n<St.length;n+=1){const r=St[n],s=r.pattern.exec(e);if(s){const n=Dt(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function Ft(){return{x:pageXOffset,y:pageYOffset}}function Ht(t,e,n,r){return Pt(this,void 0,void 0,(function*(){if(e)Jt=e;else{const t=Ft();Vt[Jt]=t,e=Jt=++Bt,Vt[Jt]=n?t:{x:0,y:0}}Jt=e,At&&Ot.preloading.set(!0);const s=zt&&zt.href===t.href?zt.promise:Gt(t);zt=null;const o=Rt={},a=yield s,{redirect:c}=a;if(o===Rt){if(c)yield jt(c.location,{replaceState:!0});else{const{props:e,branch:n}=a;yield Yt(n,e,t.page)}if(document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t=Vt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Vt[Jt]=t,t&&(c?scrollTo(0,0):scrollTo(t.x,t.y))}}}))}function Yt(t,e,n){return Pt(this,void 0,void 0,(function*(){Ot.page.set(n),Ot.preloading.set(!1),At?At.$set(e):(e.stores={page:{subscribe:Ot.page.subscribe},preloading:{subscribe:Ot.preloading.subscribe},session:Ot.session},e.level0={props:yield kt},e.notify=Ot.page.notify,At=new bt({target:qt,props:e,hydrate:!0})),Ct=t,Lt=JSON.stringify(n.query),It=!0,Ut=!1}))}function Gt(t){return Pt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!kt){const t=()=>{};kt=Nt.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Tt)}let c,i=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=yield Promise.all(e.parts.map((e,c)=>Pt(this,void 0,void 0,(function*(){const f=r[c];if(function(t,e,n,r){if(r!==Lt)return!0;const s=Ct[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,s)&&(u=!0),o.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Ut&&!u&&Ct[c]&&Ct[c].part===e.i)return Ct[c];u=!1;const{default:h,preload:d}=yield function(t){const e=[t.js()];return Promise.all(e).then(t=>t[0])}(wt[e.i]);let m;return m=It||!Nt.preloaded[c+1]?d?yield d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Tt):{}:Nt.preloaded[c+1],o["level"+p]={component:h,props:m,segment:f,match:l,part:e.i}}))))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}))}function Wt(t){const e=Kt(new URL(t,document.baseURI));if(e)return zt&&t===zt.href||function(t,e){zt={href:t,promise:e}}(t,Gt(e)),zt.promise}let Xt;function Qt(t){clearTimeout(Xt),Xt=setTimeout(()=>{Zt(t)},20)}function Zt(t){const e=ee(t.target);e&&"prefetch"===e.rel&&Wt(e.href)}function te(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=ee(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Kt(s);if(o){Ht(o,null,e.hasAttribute("sapper:noscroll"),s.hash),t.preventDefault(),Mt.pushState({id:Jt},"",s.href)}}function ee(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ne(t){if(Vt[Jt]=Ft(),t.state){const e=Kt(new URL(location.href));e?Ht(e,t.state.id):location.href=location.href}else Bt=Bt+1,function(t){Jt=t}(Bt),Mt.replaceState({id:Jt},"",location.href)}var re;re={target:document.querySelector("#sapper")},"scrollRestoration"in Mt&&(Mt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Mt.scrollRestoration="auto"}),addEventListener("load",()=>{Mt.scrollRestoration="manual"}),function(t){qt=t}(re.target),addEventListener("click",te),addEventListener("popstate",ne),addEventListener("touchstart",Zt),addEventListener("mousemove",Qt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Mt.replaceState({id:Bt},"",e);const n=new URL(location.href);if(Nt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=Nt;kt||(kt=o&&o[0]),Yt([],{error:c,status:a,session:s,level0:{props:kt},level1:{props:{status:a,error:c},component:mt},segments:o},{host:e,path:n,query:Dt(r),params:{}})}();const r=Kt(n);return r?Ht(r,Bt,!0,t):void 0});export{D as A,p as B,tt as S,m as a,y as b,b as c,f as d,h as e,v as f,_ as g,$ as h,Z as i,u as j,l as k,E as l,g as m,t as n,Y as o,G as p,w as q,W as r,a as s,d as t,M as u,V as v,X as w,K as x,B as y,J as z};

import __inject_styles from './inject_styles.js';