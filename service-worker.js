"use strict";var storeData="{}";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/suggester/index.html","52a819e3255aa2c40b0a8aaafee4950c"],["/suggester/static/css/main.fe21944c.css","c6f6d167ae1ddab4319a2639bcee1714"],["/suggester/static/js/0.d207cfe0.chunk.js","a44fd1a1045139f2f1d8f6304daec2a4"],["/suggester/static/js/1.64ee23e3.chunk.js","ba29d338e4d2bd23f89b192f2a4f9943"],["/suggester/static/js/2.c3810b4e.chunk.js","491af60be937c63a17622f2c9ec1e898"],["/suggester/static/js/3.f4e0f2b4.chunk.js","452ed1a12026808dc0828a2fa74fef3a"],["/suggester/static/js/4.7466531d.chunk.js","a0322becac61bba8649e78e280a4af58"],["/suggester/static/js/5.ad8764c3.chunk.js","2ec992b5d670686ddf848ea0097815b5"],["/suggester/static/js/6.be18e349.chunk.js","2f4b7120deb6262e5c55c1831e4cb905"],["/suggester/static/js/7.11afcc85.chunk.js","24bd083d77d08d61709e0726f7e07710"],["/suggester/static/js/main.6e784b1c.js","2f70da38b8f6686ccafb54f6504e03f1"],["/suggester/static/media/background.722674ce.jpg","722674ce59ffc9a52b17da5e531ce09d"],["/suggester/static/media/default-card.7c96c896.png","7c96c8965188131419fdf7b36db5eee7"],["/suggester/static/media/keyrune.2b12897b.svg","2b12897bf884fe41c4dc048f4e13b9ca"],["/suggester/static/media/keyrune.3e01a33c.eot","3e01a33ce92564d11811a11274b53815"],["/suggester/static/media/keyrune.4d1bc67c.woff","4d1bc67c5d2474abaed168123751dc02"],["/suggester/static/media/keyrune.7eeff522.ttf","7eeff52256db25311b5f685e1636ad46"],["/suggester/static/media/keyrune.e0bf31e9.woff2","e0bf31e964570f1d96fddfe6bde4c684"],["/suggester/static/media/mana.12a08476.woff","12a084765994fad4f1212320727ede65"],["/suggester/static/media/mana.33d1f9b5.svg","33d1f9b5d0a2498500eff3c2c8343d21"],["/suggester/static/media/mana.c110dae7.eot","c110dae71f2c1a70250f9808a4f11fe5"],["/suggester/static/media/mana.c6bc932c.ttf","c6bc932cfe42c37d144bbd6d59ef35fc"],["/suggester/static/media/mplantin.7f51b354.svg","7f51b3545752eb40bb4b63661f584d7d"],["/suggester/static/media/mplantin.b09923e4.woff","b09923e4e9b689572c4d30429491b892"],["/suggester/static/media/mplantin.c64fa9e7.ttf","c64fa9e74b60a46076fce0b1a4b631dc"],["/suggester/static/media/mplantin.daf8b76b.eot","daf8b76ba2ad29eac149b6a26a5747d7"],["/suggester/static/media/oversize-default-card.4b3a1fc4.jpeg","4b3a1fc46c696562726fc4a73cf95474"],["/suggester/static/media/searchIcon.5e934606.png","5e934606555dc20909d27b3929dd341c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,s){var n=new URL(e);return s&&n.pathname.match(s)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],s=new URL(t,self.location),n=createCacheKey(s,hashParamName,a,/\.\w{8}\./);return[s.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var s=new Request(a,{credentials:"same-origin"});return fetch(s).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a)),!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/suggester/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),self.addEventListener("message",function(e){"getStore"===e.data?e.ports[0].postMessage(JSON.parse(storeData)):storeData=e.data});
