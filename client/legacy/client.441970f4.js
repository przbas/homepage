function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function r(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(t,e)||r(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o,a,i,c=(function(e){var r=function(e){var r,n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new P(n||[]);return a._invoke=function(t,e,r){var n=p;return function(o,a){if(n===v)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=v;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",h="suspendedYield",v="executing",d="completed",m={};function y(){}function g(){}function b(){}var $={};$[i]=function(){return this};var w=Object.getPrototypeOf,_=w&&w(w(L([])));_&&_!==n&&o.call(_,i)&&($=_);var x=b.prototype=y.prototype=Object.create($);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,r){function n(a,i,c,u){var s=l(e[a],e,i);if("throw"!==s.type){var f=s.arg,p=f.value;return p&&"object"===t(p)&&o.call(p,"__await")?r.resolve(p.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(p).then((function(t){f.value=t,c(f)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var a;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return a=a?a.then(o,o):o()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function L(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:r,done:!0}}return g.prototype=x.constructor=b,b.constructor=g,g.displayName=s(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},E(S.prototype),S.prototype[c]=function(){return this},e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(f(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(x),s(x,u,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),R(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;R(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}},e}(e.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}(a={path:o,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&a.path)}},a.exports),a.exports);function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(e,r){return!r||"object"!==t(r)&&"function"!=typeof r?l(e):r}function h(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||r(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function m(){}function y(t,e){for(var r in e)t[r]=e[r];return t}function g(t){return t()}function b(){return Object.create(null)}function $(t){t.forEach(g)}function w(t){return"function"==typeof t}function _(e,r){return e!=e?r==r:e!==r||e&&"object"===t(e)||"function"==typeof e}function x(t,e,r,n){return t[1]&&n?y(r.ctx.slice(),t[1](n(e))):r.ctx}function E(e,r,n,o,a,i,c){var u=function(e,r,n,o){if(e[2]&&o){var a=e[2](o(n));if(void 0===r.dirty)return a;if("object"===t(a)){for(var i=[],c=Math.max(r.dirty.length,a.length),u=0;u<c;u+=1)i[u]=r.dirty[u]|a[u];return i}return r.dirty|a}return r.dirty}(r,o,a,i);if(u){var s=x(r,n,o,c);e.p(s,u)}}function S(t,e){t.appendChild(e)}function j(t,e,r){t.insertBefore(e,r||null)}function k(t){t.parentNode.removeChild(t)}function R(t,e){for(var r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}function P(t){return document.createElement(t)}function L(t){return document.createTextNode(t)}function O(){return L(" ")}function A(){return L("")}function N(t,e,r){null==r?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function I(t){return Array.from(t.childNodes)}function C(t,e,r,n){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===e){for(var i=0,c=[];i<a.attributes.length;){var u=a.attributes[i++];r[u.name]||c.push(u.name)}for(var s=0;s<c.length;s++)a.removeAttribute(c[s]);return t.splice(o,1)[0]}}return n?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):P(e)}function T(t,e){for(var r=0;r<t.length;r+=1){var n=t[r];if(3===n.nodeType)return n.data=""+e,t.splice(r,1)[0]}return L(e)}function D(t){return T(t," ")}function U(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function q(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function z(t){i=t}function G(){if(!i)throw new Error("Function called outside component initialization");return i}var J=[],B=[],F=[],M=[],V=Promise.resolve(),K=!1;function Y(t){F.push(t)}var H=!1,W=new Set;function X(){if(!H){H=!0;do{for(var t=0;t<J.length;t+=1){var e=J[t];z(e),Q(e.$$)}for(z(null),J.length=0;B.length;)B.pop()();for(var r=0;r<F.length;r+=1){var n=F[r];W.has(n)||(W.add(n),n())}F.length=0}while(J.length);for(;M.length;)M.pop()();K=!1,H=!1,W.clear()}}function Q(t){if(null!==t.fragment){t.update(),$(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Y)}}var Z,tt=new Set;function et(){Z={r:0,c:[],p:Z}}function rt(){Z.r||$(Z.c),Z=Z.p}function nt(t,e){t&&t.i&&(tt.delete(t),t.i(e))}function ot(t,e,r,n){if(t&&t.o){if(tt.has(t))return;tt.add(t),Z.c.push((function(){tt.delete(t),n&&(r&&t.d(1),n())})),t.o(e)}}function at(t,e){ot(t,1,1,(function(){e.delete(t.key)}))}function it(t,e,r,n,o,a,i,c,u,s,f,l){for(var p=t.length,h=a.length,v=p,d={};v--;)d[t[v].key]=v;var m=[],y=new Map,g=new Map;for(v=h;v--;){var b=l(o,a,v),$=r(b),w=i.get($);w?n&&w.p(b,e):(w=s($,b)).c(),y.set($,m[v]=w),$ in d&&g.set($,Math.abs(v-d[$]))}var _=new Set,x=new Set;function E(t){nt(t,1),t.m(c,f),i.set(t.key,t),f=t.first,h--}for(;p&&h;){var S=m[h-1],j=t[p-1],k=S.key,R=j.key;S===j?(f=S.first,p--,h--):y.has(R)?!i.has(k)||_.has(k)?E(S):x.has(R)?p--:g.get(k)>g.get(R)?(x.add(k),E(S)):(_.add(R),p--):(u(j,i),p--)}for(;p--;){var P=t[p];y.has(P.key)||u(P,i)}for(;h;)E(m[h-1]);return m}function ct(t,e){for(var r={},n={},o={$$scope:1},a=t.length;a--;){var i=t[a],c=e[a];if(c){for(var u in i)u in c||(n[u]=1);for(var s in c)o[s]||(r[s]=c[s],o[s]=1);t[a]=c}else for(var f in i)o[f]=1}for(var l in n)l in r||(r[l]=void 0);return r}function ut(e){return"object"===t(e)&&null!==e?e:{}}function st(t){t&&t.c()}function ft(t,e){t&&t.l(e)}function lt(t,e,r){var n=t.$$,o=n.fragment,a=n.on_mount,i=n.on_destroy,c=n.after_update;o&&o.m(e,r),Y((function(){var e=a.map(g).filter(w);i?i.push.apply(i,h(e)):$(e),t.$$.on_mount=[]})),c.forEach(Y)}function pt(t,e){var r=t.$$;null!==r.fragment&&($(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function ht(t,e){-1===t.$$.dirty[0]&&(J.push(t),K||(K=!0,V.then(X)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function vt(t,e,r,n,o,a){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],u=i;z(t);var s=e.props||{},f=t.$$={fragment:null,ctx:null,props:a,update:m,not_equal:o,bound:b(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:b(),dirty:c,skip_bound:!1},l=!1;if(f.ctx=r?r(t,s,(function(e,r){var n=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:r;return f.ctx&&o(f.ctx[e],f.ctx[e]=n)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](n),l&&ht(t,e)),r})):[],f.update(),l=!0,$(f.before_update),f.fragment=!!n&&n(f.ctx),e.target){if(e.hydrate){var p=I(e.target);f.fragment&&f.fragment.l(p),p.forEach(k)}else f.fragment&&f.fragment.c();e.intro&&nt(t.$$.fragment),lt(t,e.target,e.anchor),X()}z(u)}var dt=function(){function t(){v(this,t)}var e,r,n;return e=t,(r=[{key:"$destroy",value:function(){pt(this,1),this.$destroy=m}},{key:"$on",value:function(t,e){var r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),function(){var t=r.indexOf(e);-1!==t&&r.splice(t,1)}}},{key:"$set",value:function(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}])&&d(e.prototype,r),n&&d(e,n),t}(),mt=[];function yt(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,n=[];function o(r){if(_(t,r)&&(t=r,e)){for(var o=!mt.length,a=0;a<n.length;a+=1){var i=n[a];i[1](),mt.push(i,t)}if(o){for(var c=0;c<mt.length;c+=2)mt[c][0](mt[c+1]);mt.length=0}}}function a(e){o(e(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,c=[a,i];return n.push(c),1===n.length&&(e=r(o)||m),a(t),function(){var t=n.indexOf(c);-1!==t&&n.splice(t,1),0===n.length&&(e(),e=null)}}return{set:o,update:a,subscribe:i}}var gt={};function bt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function $t(t){var e,r,o,a,i,c,u,s,f,l,p,h,v,d,y,g,b,$,w,_,x,E,R;return{c:function(){e=P("div"),r=P("nav"),o=P("ul"),a=P("li"),i=P("a"),c=L("Przemysław Baśkiewicz"),s=O(),f=P("ul"),l=P("li"),p=P("a"),h=L("praca"),d=O(),y=P("li"),g=P("a"),b=L("pasje"),w=O(),_=P("li"),x=P("a"),E=L("blog"),this.h()},l:function(t){var n=I(e=C(t,"DIV",{class:!0})),u=I(r=C(n,"NAV",{class:!0})),v=I(o=C(u,"UL",{class:!0})),m=I(a=C(v,"LI",{class:!0})),$=I(i=C(m,"A",{"aria-current":!0,href:!0,class:!0}));c=T($,"Przemysław Baśkiewicz"),$.forEach(k),m.forEach(k),v.forEach(k),s=D(u);var S=I(f=C(u,"UL",{class:!0})),j=I(l=C(S,"LI",{class:!0})),R=I(p=C(j,"A",{"aria-current":!0,href:!0,class:!0}));h=T(R,"praca"),R.forEach(k),j.forEach(k),d=D(S);var P=I(y=C(S,"LI",{class:!0})),L=I(g=C(P,"A",{"aria-current":!0,href:!0,class:!0}));b=T(L,"pasje"),L.forEach(k),P.forEach(k),w=D(S);var O=I(_=C(S,"LI",{class:!0})),A=I(x=C(O,"A",{"aria-current":!0,href:!0,class:!0}));E=T(A,"blog"),A.forEach(k),O.forEach(k),S.forEach(k),u.forEach(k),n.forEach(k),this.h()},h:function(){N(i,"aria-current",u=void 0===t[0]?"page":void 0),N(i,"href","."),N(i,"class","svelte-1m6ysup"),N(a,"class","svelte-1m6ysup"),N(o,"class","svelte-1m6ysup"),N(p,"aria-current",v="praca"===t[0]?"page":void 0),N(p,"href","praca"),N(p,"class","svelte-1m6ysup"),N(l,"class","svelte-1m6ysup"),N(g,"aria-current",$="pasje"===t[0]?"page":void 0),N(g,"href","pasje"),N(g,"class","svelte-1m6ysup"),N(y,"class","svelte-1m6ysup"),N(x,"aria-current",R="blog"===t[0]?"page":void 0),N(x,"href","blog"),N(x,"class","svelte-1m6ysup"),N(_,"class","svelte-1m6ysup"),N(f,"class","svelte-1m6ysup"),N(r,"class","svelte-1m6ysup"),N(e,"class","svelte-1m6ysup")},m:function(t,n){j(t,e,n),S(e,r),S(r,o),S(o,a),S(a,i),S(i,c),S(r,s),S(r,f),S(f,l),S(l,p),S(p,h),S(f,d),S(f,y),S(y,g),S(g,b),S(f,w),S(f,_),S(_,x),S(x,E)},p:function(t,e){var r=n(e,1)[0];1&r&&u!==(u=void 0===t[0]?"page":void 0)&&N(i,"aria-current",u),1&r&&v!==(v="praca"===t[0]?"page":void 0)&&N(p,"aria-current",v),1&r&&$!==($="pasje"===t[0]?"page":void 0)&&N(g,"aria-current",$),1&r&&R!==(R="blog"===t[0]?"page":void 0)&&N(x,"aria-current",R)},i:m,o:m,d:function(t){t&&k(e)}}}function wt(t,e,r){var n=e.segment;return t.$$set=function(t){"segment"in t&&r(0,n=t.segment)},[n]}var _t=function(t){f(r,dt);var e=bt(r);function r(t){var n;return v(this,r),vt(l(n=e.call(this)),t,wt,$t,_,{segment:0}),n}return r}();function xt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function Et(t){var e,r,n;return{c:function(){e=P("footer"),r=P("div"),n=L("Copyright 2021 Przemysław Baśkiewicz"),this.h()},l:function(t){var o=I(e=C(t,"FOOTER",{class:!0})),a=I(r=C(o,"DIV",{class:!0}));n=T(a,"Copyright 2021 Przemysław Baśkiewicz"),a.forEach(k),o.forEach(k),this.h()},h:function(){N(r,"class","svelte-j329h9"),N(e,"class","svelte-j329h9")},m:function(t,o){j(t,e,o),S(e,r),S(r,n)},p:m,i:m,o:m,d:function(t){t&&k(e)}}}var St=function(t){f(r,dt);var e=xt(r);function r(t){var n;return v(this,r),vt(l(n=e.call(this)),t,null,Et,_,{}),n}return r}();function jt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function kt(t){var e,r,o,a,i,c;e=new _t({props:{segment:t[0]}});var u=t[2].default,s=function(t,e,r,n){if(t){var o=x(t,e,r,n);return t[0](o)}}(u,t,t[1],null);return i=new St({}),{c:function(){st(e.$$.fragment),r=O(),o=P("main"),s&&s.c(),a=O(),st(i.$$.fragment),this.h()},l:function(t){ft(e.$$.fragment,t),r=D(t);var n=I(o=C(t,"MAIN",{class:!0}));s&&s.l(n),n.forEach(k),a=D(t),ft(i.$$.fragment,t),this.h()},h:function(){N(o,"class","svelte-ieqlj8")},m:function(t,n){lt(e,t,n),j(t,r,n),j(t,o,n),s&&s.m(o,null),j(t,a,n),lt(i,t,n),c=!0},p:function(t,r){var o=n(r,1)[0],a={};1&o&&(a.segment=t[0]),e.$set(a),s&&s.p&&2&o&&E(s,u,t,t[1],o,null,null)},i:function(t){c||(nt(e.$$.fragment,t),nt(s,t),nt(i.$$.fragment,t),c=!0)},o:function(t){ot(e.$$.fragment,t),ot(s,t),ot(i.$$.fragment,t),c=!1},d:function(t){pt(e,t),t&&k(r),t&&k(o),s&&s.d(t),t&&k(a),pt(i,t)}}}function Rt(t,e,r){var n=e.$$slots,o=void 0===n?{}:n,a=e.$$scope,i=e.segment;return t.$$set=function(t){"segment"in t&&r(0,i=t.segment),"$$scope"in t&&r(1,a=t.$$scope)},[i,a,o]}var Pt=function(t){f(r,dt);var e=jt(r);function r(t){var n;return v(this,r),vt(l(n=e.call(this)),t,Rt,kt,_,{segment:0}),n}return r}();function Lt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function Ot(t){var e,r,n=t[1].stack+"";return{c:function(){e=P("pre"),r=L(n)},l:function(t){var o=I(e=C(t,"PRE",{}));r=T(o,n),o.forEach(k)},m:function(t,n){j(t,e,n),S(e,r)},p:function(t,e){2&e&&n!==(n=t[1].stack+"")&&U(r,n)},d:function(t){t&&k(e)}}}function At(t){var e,r,o,a,i,c,u,s,f,l=t[1].message+"";document.title=e=t[0];var p=t[2]&&t[1].stack&&Ot(t);return{c:function(){r=O(),o=P("h1"),a=L(t[0]),i=O(),c=P("p"),u=L(l),s=O(),p&&p.c(),f=A(),this.h()},l:function(e){q('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(k),r=D(e);var n=I(o=C(e,"H1",{class:!0}));a=T(n,t[0]),n.forEach(k),i=D(e);var h=I(c=C(e,"P",{class:!0}));u=T(h,l),h.forEach(k),s=D(e),p&&p.l(e),f=A(),this.h()},h:function(){N(o,"class","svelte-8od9u6"),N(c,"class","svelte-8od9u6")},m:function(t,e){j(t,r,e),j(t,o,e),S(o,a),j(t,i,e),j(t,c,e),S(c,u),j(t,s,e),p&&p.m(t,e),j(t,f,e)},p:function(t,r){var o=n(r,1)[0];1&o&&e!==(e=t[0])&&(document.title=e),1&o&&U(a,t[0]),2&o&&l!==(l=t[1].message+"")&&U(u,l),t[2]&&t[1].stack?p?p.p(t,o):((p=Ot(t)).c(),p.m(f.parentNode,f)):p&&(p.d(1),p=null)},i:m,o:m,d:function(t){t&&k(r),t&&k(o),t&&k(i),t&&k(c),t&&k(s),p&&p.d(t),t&&k(f)}}}function Nt(t,e,r){var n=e.status,o=e.error;return t.$$set=function(t){"status"in t&&r(0,n=t.status),"error"in t&&r(1,o=t.error)},[n,o,false]}var It=function(t){f(r,dt);var e=Lt(r);function r(t){var n;return v(this,r),vt(l(n=e.call(this)),t,Nt,At,_,{status:0,error:1}),n}return r}();function Ct(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function Tt(t){var e,r,n,o=[t[4].props],a=t[4].component;function i(t){for(var e={},r=0;r<o.length;r+=1)e=y(e,o[r]);return{props:e}}return a&&(e=new a(i())),{c:function(){e&&st(e.$$.fragment),r=A()},l:function(t){e&&ft(e.$$.fragment,t),r=A()},m:function(t,o){e&&lt(e,t,o),j(t,r,o),n=!0},p:function(t,n){var c=16&n?ct(o,[ut(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){et();var u=e;ot(u.$$.fragment,1,0,(function(){pt(u,1)})),rt()}a?(st((e=new a(i())).$$.fragment),nt(e.$$.fragment,1),lt(e,r.parentNode,r)):e=null}else a&&e.$set(c)},i:function(t){n||(e&&nt(e.$$.fragment,t),n=!0)},o:function(t){e&&ot(e.$$.fragment,t),n=!1},d:function(t){t&&k(r),e&&pt(e,t)}}}function Dt(t){var e,r;return e=new It({props:{error:t[0],status:t[1]}}),{c:function(){st(e.$$.fragment)},l:function(t){ft(e.$$.fragment,t)},m:function(t,n){lt(e,t,n),r=!0},p:function(t,r){var n={};1&r&&(n.error=t[0]),2&r&&(n.status=t[1]),e.$set(n)},i:function(t){r||(nt(e.$$.fragment,t),r=!0)},o:function(t){ot(e.$$.fragment,t),r=!1},d:function(t){pt(e,t)}}}function Ut(t){var e,r,n,o,a=[Dt,Tt],i=[];function c(t,e){return t[0]?0:1}return e=c(t),r=i[e]=a[e](t),{c:function(){r.c(),n=A()},l:function(t){r.l(t),n=A()},m:function(t,r){i[e].m(t,r),j(t,n,r),o=!0},p:function(t,o){var u=e;(e=c(t))===u?i[e].p(t,o):(et(),ot(i[u],1,1,(function(){i[u]=null})),rt(),(r=i[e])||(r=i[e]=a[e](t)).c(),nt(r,1),r.m(n.parentNode,n))},i:function(t){o||(nt(r),o=!0)},o:function(t){ot(r),o=!1},d:function(t){i[e].d(t),t&&k(n)}}}function qt(t){for(var e,r,o=[{segment:t[2][0]},t[3].props],a={$$slots:{default:[Ut]},$$scope:{ctx:t}},i=0;i<o.length;i+=1)a=y(a,o[i]);return e=new Pt({props:a}),{c:function(){st(e.$$.fragment)},l:function(t){ft(e.$$.fragment,t)},m:function(t,n){lt(e,t,n),r=!0},p:function(t,r){var a=n(r,1)[0],i=12&a?ct(o,[4&a&&{segment:t[2][0]},8&a&&ut(t[3].props)]):{};147&a&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i:function(t){r||(nt(e.$$.fragment,t),r=!0)},o:function(t){ot(e.$$.fragment,t),r=!1},d:function(t){pt(e,t)}}}function zt(t,e,r){var n,o,a=e.stores,i=e.error,c=e.status,u=e.segments,s=e.level0,f=e.level1,l=void 0===f?null:f,p=e.notify;return function(t){G().$$.after_update.push(t)}(p),n=gt,o=a,G().$$.context.set(n,o),t.$$set=function(t){"stores"in t&&r(5,a=t.stores),"error"in t&&r(0,i=t.error),"status"in t&&r(1,c=t.status),"segments"in t&&r(2,u=t.segments),"level0"in t&&r(3,s=t.level0),"level1"in t&&r(4,l=t.level1),"notify"in t&&r(6,p=t.notify)},[i,c,u,s,l,a,p]}var Gt,Jt=function(t){f(r,dt);var e=Ct(r);function r(t){var n;return v(this,r),vt(l(n=e.call(this)),t,zt,qt,_,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),n}return r}(),Bt=[/^\/blog\.json$/,/^\/blog\/([^/]+?)\.json$/],Ft=[{js:function(){return Promise.all([import("./index.d868b79c.js"),__inject_styles(["client-535ad722.css","index-7247e915.css"])]).then(t=>t[0])}},{js:function(){return Promise.all([import("./index.8f5c4489.js"),__inject_styles(["client-535ad722.css","index-75648f1d.css"])]).then(t=>t[0])}},{js:function(){return Promise.all([import("./programowanie.fc19262c.js"),__inject_styles(["client-535ad722.css","programowanie-2b805b3d.css"])]).then(t=>t[0])}},{js:function(){return Promise.all([import("./praca.22e2b671.js"),__inject_styles(["client-535ad722.css"])]).then(t=>t[0])}},{js:function(){return Promise.all([import("./index.bd5a60ad.js"),__inject_styles(["client-535ad722.css","index-a064aeb5.css"])]).then(t=>t[0])}},{js:function(){return Promise.all([import("./[slug].63cc3a7b.js"),__inject_styles(["client-535ad722.css","[slug]-a52d3719.css"])]).then(t=>t[0])}}],Mt=(Gt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/pasje\/?$/,parts:[{i:1}]},{pattern:/^\/pasje\/programowanie\/?$/,parts:[null,{i:2}]},{pattern:/^\/praca\/?$/,parts:[{i:3}]},{pattern:/^\/blog\/?$/,parts:[{i:4}]},{pattern:/^\/blog\/([^/]+?)\/?$/,parts:[null,{i:5,params:function(t){return{slug:Gt(t[1])}}}]}]);
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
function Vt(t,e,r,n){return new(r||(r=Promise))((function(o,a){function i(t){try{u(n.next(t))}catch(t){a(t)}}function c(t){try{u(n.throw(t))}catch(t){a(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(i,c)}u((n=n.apply(t,e||[])).next())}))}function Kt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{noscroll:!1,replaceState:!1},r=he(new URL(t,document.baseURI));return r?(fe[e.replaceState?"replaceState":"pushState"]({id:ie},"",t),de(r,null,e.noscroll).then((function(){}))):(location.href=t,new Promise((function(t){})))}var Yt,Ht,Wt,Xt,Qt,Zt="undefined"!=typeof __SAPPER__&&__SAPPER__,te=!1,ee=[],re="{}",ne={page:function(t){var e=yt(t),r=!0;return{notify:function(){r=!0,e.update((function(t){return t}))},set:function(t){r=!1,e.set(t)},subscribe:function(t){var n;return e.subscribe((function(e){(void 0===n||r&&e!==n)&&t(n=e)}))}}}({}),preloading:yt(null),session:yt(Zt&&Zt.session)};ne.session.subscribe((function(t){return Vt(void 0,void 0,void 0,c.mark((function e(){var r,n,o,a,i,u;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Xt=t,te){e.next=3;break}return e.abrupt("return");case 3:return Qt=!0,r=he(new URL(location.href)),n=Ht={},e.next=8,ge(r);case 8:if(o=e.sent,a=o.redirect,i=o.props,u=o.branch,n===Ht){e.next=14;break}return e.abrupt("return");case 14:if(!a){e.next=19;break}return e.next=17,Kt(a.location,{replaceState:!0});case 17:e.next=21;break;case 19:return e.next=21,me(u,i,r.page);case 21:case"end":return e.stop()}}),e)})))}));var oe,ae=null;var ie,ce=1;var ue,se,fe="undefined"!=typeof history?history:{pushState:function(t,e,r){},replaceState:function(t,e,r){},scrollRestoration:""},le={};function pe(e){var r=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var o=n(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),a=o[1],i=o[2],c=void 0===i?"":i;"string"==typeof r[a]&&(r[a]=[r[a]]),"object"===t(r[a])?r[a].push(c):r[a]=c})),r}function he(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Zt.baseUrl))return null;var e=t.pathname.slice(Zt.baseUrl.length);if(""===e&&(e="/"),!Bt.some((function(t){return t.test(e)})))for(var r=0;r<Mt.length;r+=1){var n=Mt[r],o=n.pattern.exec(e);if(o){var a=pe(t.search),i=n.parts[n.parts.length-1],c=i.params?i.params(o):{},u={host:location.host,path:e,query:a,params:c};return{href:t.href,route:n,match:o,page:u}}}}function ve(){return{x:pageXOffset,y:pageYOffset}}function de(t,e,r,n){return Vt(this,void 0,void 0,c.mark((function o(){var a,i,u,s,f,l,p,h,v;return c.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e?ie=e:(a=ve(),le[ie]=a,e=ie=++ce,le[ie]=r?a:{x:0,y:0}),ie=e,Yt&&ne.preloading.set(!0),i=ae&&ae.href===t.href?ae.promise:ge(t),ae=null,u=Ht={},o.next=8,i;case 8:if(s=o.sent,f=s.redirect,u===Ht){o.next=12;break}return o.abrupt("return");case 12:if(!f){o.next=17;break}return o.next=15,Kt(f.location,{replaceState:!0});case 15:o.next=20;break;case 17:return l=s.props,p=s.branch,o.next=20,me(p,l,t.page);case 20:document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),r||(h=le[e],n&&(v=document.getElementById(n.slice(1)))&&(h={x:0,y:v.getBoundingClientRect().top+scrollY}),le[ie]=h,h&&(f?scrollTo(0,0):scrollTo(h.x,h.y)));case 22:case"end":return o.stop()}}),o)})))}function me(t,e,r){return Vt(this,void 0,void 0,c.mark((function n(){return c.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(ne.page.set(r),ne.preloading.set(!1),!Yt){n.next=6;break}Yt.$set(e),n.next=13;break;case 6:return e.stores={page:{subscribe:ne.page.subscribe},preloading:{subscribe:ne.preloading.subscribe},session:ne.session},n.next=9,Wt;case 9:n.t0=n.sent,e.level0={props:n.t0},e.notify=ne.page.notify,Yt=new Jt({target:oe,props:e,hydrate:!0});case 13:ee=t,re=JSON.stringify(r.query),te=!0,Qt=!1;case 17:case"end":return n.stop()}}),n)})))}function ye(t,e,r,n){if(n!==re)return!0;var o=ee[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(r.slice(1,t+2)))||void 0))}function ge(t){return Vt(this,void 0,void 0,c.mark((function e(){var r,n,o,a,i,u,s,f,l,p,h,v,d=this;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.route,n=t.page,o=n.path.split("/").filter(Boolean),a=null,i={error:null,status:200,segments:[o[0]]},u={fetch:function(t){function e(e,r){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(a&&(a.statusCode!==t||a.location!==e))throw new Error("Conflicting redirects");a={statusCode:t,location:e}},error:function(t,e){i.error="string"==typeof e?new Error(e):e,i.status=t}},Wt||(s=function(){},Wt=Zt.preloaded[0]||s.call(u,{host:n.host,path:n.path,query:n.query,params:{}},Xt)),l=1,e.prev=7,p=JSON.stringify(n.query),h=r.pattern.exec(n.path),v=!1,e.next=13,Promise.all(r.parts.map((function(e,r){return Vt(d,void 0,void 0,c.mark((function a(){var s,f,d,m,y,g;return c.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(s=o[r],ye(r,s,h,p)&&(v=!0),i.segments[l]=o[r+1],e){a.next=5;break}return a.abrupt("return",{segment:s});case 5:if(f=l++,Qt||v||!ee[r]||ee[r].part!==e.i){a.next=8;break}return a.abrupt("return",ee[r]);case 8:return v=!1,a.next=11,be(Ft[e.i]);case 11:if(d=a.sent,m=d.default,y=d.preload,!te&&Zt.preloaded[r+1]){a.next=25;break}if(!y){a.next=21;break}return a.next=18,y.call(u,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Xt);case 18:a.t0=a.sent,a.next=22;break;case 21:a.t0={};case 22:g=a.t0,a.next=26;break;case 25:g=Zt.preloaded[r+1];case 26:return a.abrupt("return",i["level".concat(f)]={component:m,props:g,segment:s,match:h,part:e.i});case 27:case"end":return a.stop()}}),a)})))})));case 13:f=e.sent,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(7),i.error=e.t0,i.status=500,f=[];case 21:return e.abrupt("return",{redirect:a,props:i,branch:f});case 22:case"end":return e.stop()}}),e,null,[[7,16]])})))}function be(t){var e=[t.js()];return Promise.all(e).then((function(t){return t[0]}))}function $e(t){var e=he(new URL(t,document.baseURI));if(e)return ae&&t===ae.href||function(t,e){ae={href:t,promise:e}}(t,ge(e)),ae.promise}function we(t){clearTimeout(ue),ue=setTimeout((function(){_e(t)}),20)}function _e(t){var e=Ee(t.target);e&&"prefetch"===e.rel&&$e(e.href)}function xe(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)){var r=Ee(e.target);if(r&&r.href){var n="object"===t(r.href)&&"SVGAnimatedString"===r.href.constructor.name,o=String(n?r.href.baseVal:r.href);if(o!==location.href){if(!r.hasAttribute("download")&&"external"!==r.getAttribute("rel")&&!(n?r.target.baseVal:r.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=he(a);if(i)de(i,null,r.hasAttribute("sapper:noscroll"),a.hash),e.preventDefault(),fe.pushState({id:ie},"",a.href)}}}else location.hash||e.preventDefault()}}}function Ee(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Se(t){if(le[ie]=ve(),t.state){var e=he(new URL(location.href));e?de(e,t.state.id):location.href=location.href}else(function(t){ie=t})(ce=ce+1),fe.replaceState({id:ie},"",location.href)}se={target:document.querySelector("#sapper")},"scrollRestoration"in fe&&(fe.scrollRestoration="manual"),addEventListener("beforeunload",(function(){fe.scrollRestoration="auto"})),addEventListener("load",(function(){fe.scrollRestoration="manual"})),function(t){oe=t}(se.target),addEventListener("click",xe),addEventListener("popstate",Se),addEventListener("touchstart",_e),addEventListener("mousemove",we),Promise.resolve().then((function(){var t=location,e=t.hash,r=t.href;fe.replaceState({id:ce},"",r);var n,o,a,i,c,u,s,f,l=new URL(location.href);if(Zt.error)return n=location,o=n.host,a=n.pathname,i=n.search,c=Zt.session,u=Zt.preloaded,s=Zt.status,f=Zt.error,Wt||(Wt=u&&u[0]),void me([],{error:f,status:s,session:c,level0:{props:Wt},level1:{props:{status:s,error:f},component:It},segments:u},{host:o,path:a,query:pe(i),params:{}});var p=he(l);return p?de(p,ce,!0,e):void 0}));export{ot as A,pt as B,it as C,rt as D,et as E,at as F,R as G,c as H,dt as S,f as _,u as a,p as b,v as c,l as d,O as e,P as f,k as g,D as h,vt as i,C as j,I as k,T as l,N as m,j as n,S as o,m as p,q,n as r,_ as s,L as t,U as u,A as v,st as w,ft as x,lt as y,nt as z};

import __inject_styles from './inject_styles.js';