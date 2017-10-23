"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","3d3d24adc82b1a01fdfdb617642f7870"],["static/css/main.92f4cd7f.css","915d4f841d5b7c33ddda30a6ef0e60cf"],["static/js/0.d95d2703.chunk.js","fc8932b3472f5db598eff06cec8ba832"],["static/js/1.9e251cca.chunk.js","d7eb0f6196b2e23fb0bf1c43d006164b"],["static/js/2.6ebe0aa8.chunk.js","b0d419d75e0b4d983d5b51c55c1ea86a"],["static/js/3.d3dc8996.chunk.js","e12089282b943e13fb825ab2cc829c75"],["static/js/4.cdf2e3ef.chunk.js","4d267c01c2ddf10ee3001c7a8c038cb7"],["static/js/5.f6428abc.chunk.js","cb9ee47c0327e8084959859c5e50ccf9"],["static/js/6.d81421d4.chunk.js","38e30c752b74c1612cc63a0dc94d598f"],["static/js/7.b064e277.chunk.js","169f20cb334cccd2687129307b1bb5cd"],["static/js/8.436bbc6e.chunk.js","00abed648a4d89f5b5eb37c774ff61ef"],["static/js/9.e980bcca.chunk.js","94df3545466c61917f20875d84ea0fbe"],["static/js/main.f0975e0b.js","88b35b88d7e78c7403a1ece94aec9916"],["static/media/default-card.7c96c896.png","7c96c8965188131419fdf7b36db5eee7"],["static/media/keyrune.2b12897b.svg","2b12897bf884fe41c4dc048f4e13b9ca"],["static/media/keyrune.3e01a33c.eot","3e01a33ce92564d11811a11274b53815"],["static/media/keyrune.4d1bc67c.woff","4d1bc67c5d2474abaed168123751dc02"],["static/media/keyrune.7eeff522.ttf","7eeff52256db25311b5f685e1636ad46"],["static/media/keyrune.e0bf31e9.woff2","e0bf31e964570f1d96fddfe6bde4c684"],["static/media/mana.12a08476.woff","12a084765994fad4f1212320727ede65"],["static/media/mana.33d1f9b5.svg","33d1f9b5d0a2498500eff3c2c8343d21"],["static/media/mana.c110dae7.eot","c110dae71f2c1a70250f9808a4f11fe5"],["static/media/mana.c6bc932c.ttf","c6bc932cfe42c37d144bbd6d59ef35fc"],["static/media/mplantin.7f51b354.svg","7f51b3545752eb40bb4b63661f584d7d"],["static/media/mplantin.b09923e4.woff","b09923e4e9b689572c4d30429491b892"],["static/media/mplantin.c64fa9e7.ttf","c64fa9e74b60a46076fce0b1a4b631dc"],["static/media/mplantin.daf8b76b.eot","daf8b76ba2ad29eac149b6a26a5747d7"],["static/media/searchIcon.5e934606.png","5e934606555dc20909d27b3929dd341c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/suggester/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});