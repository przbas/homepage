!function(){"use strict";const e=1611211418653,t="cache"+e,n=["/client/index.d21369b4.js","/client/[slug].a949ad2c.js","/client/index.69f991a4.js","/client/index.e0d987af.js","/client/programowanie.ec141700.js","/client/praca.896154ec.js","/client/client.3bbad605.js"].concat(["/service-worker-index.html","/favicon.png","/foto.png","/global.css","/i_facebook.svg","/i_github.svg","/i_linkedin.svg","/i_mail.svg","/manifest.json","/nauka.png","/solver.png","/zegar.png"]),s=new Set(n);self.addEventListener("install",e=>{e.waitUntil(caches.open(t).then(e=>e.addAll(n)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&s.has(n.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then(async e=>{try{const n=await fetch(t.request);return e.put(t.request,n.clone()),n}catch(n){const s=await e.match(t.request);if(s)return s;throw n}}))))})}();
