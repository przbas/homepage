!function(){"use strict";const e=1611171639122,t="cache"+e,n=["/client/[slug].ac25443b.js","/client/index.043a9e05.js","/client/index.50964582.js","/client/index.732bc98c.js","/client/programowanie.ce3d0e22.js","/client/praca.65582d00.js","/client/client.a5aeca54.js"].concat(["/service-worker-index.html","/favicon.png","/foto.png","/global.css","/i_facebook.svg","/i_github.svg","/i_linkedin.svg","/i_mail.svg","/manifest.json","/nauka.png","/solver.png","/zegar.png"]),s=new Set(n);self.addEventListener("install",e=>{e.waitUntil(caches.open(t).then(e=>e.addAll(n)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&s.has(n.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then(async e=>{try{const n=await fetch(t.request);return e.put(t.request,n.clone()),n}catch(n){const s=await e.match(t.request);if(s)return s;throw n}}))))})}();
