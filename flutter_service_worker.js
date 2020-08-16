'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "a8e85dd2efe9646c038889dfe83a9049",
"index.html": "5ac8dd56419839f69d67d0262e5b7b62",
"/": "5ac8dd56419839f69d67d0262e5b7b62",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cef27a7a09a4cb1a8969ae3b14aff5ce",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/FontManifest.json": "6cea2198f4887e18a0577bf98258f577",
"assets/AssetManifest.json": "61d457675d64cdabd7fb136d69cc6aa3",
"assets/LICENSE": "8020c746365c31468dae9f17d1c18cfa",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "41e8dead03fb979ecc23b8dfb0fef627",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "c23534acbeddbaadfd0ab2d2bbfdfc84",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "ba95810b56f476990ca71d15139d5111",
"assets/assets/scan.jpg": "e0eb99d066245066fb1e55d0f641ea5a",
"assets/assets/login_logo.png": "8131563a4747dd8b818222de72eb6208"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
