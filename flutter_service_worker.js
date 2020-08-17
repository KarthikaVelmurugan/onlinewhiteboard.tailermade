'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "96e31c3bf8f90ff7b2aa0b18ff164ffb",
"index.html": "5ac8dd56419839f69d67d0262e5b7b62",
"/": "5ac8dd56419839f69d67d0262e5b7b62",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/objects/44/1d3baab4f3bfc1ce251942e420988fac12a8f4": "ac3a2ba50af07d40313ad29d8023a3b1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/a8/198b156dc4269a3a21b2ba6356cdd9d8707396": "7f492dae02494d6e7963596887c25a53",
".git/objects/e7/16b798164986898ff1f2b65e983f7eb9f8320d": "bdbb9914c3783965380cdd7f3824d067",
".git/objects/f2/62f517079c873165aa831e0795259f55b08eae": "58afb683b6df1a96ab555984755d327f",
".git/objects/c5/47b00440661e21710f135e1113fb779cbc4b8b": "118788f34192a590384b45a7ed4f90b3",
".git/objects/fb/ae8dbfb0a996c646af7d6b5eb82ab7bb90c83f": "223e4b8a0434fa22d047e57a07d05131",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/7a/c7af1d9471773d096ab652712fa198d256b6ec": "75363efe592ecf405ab83a2fc74e7c52",
".git/objects/bd/3d17265780a60f93ff9e1d887972b05f084c0a": "0a01ccff5da65fd15fae3fdf3e828b75",
".git/objects/59/1b00f03530b83fc693a88d5c7eaf97e7e2d5de": "edb3ab246cc652286aede81e7e042e20",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/05/31be989a3a7062740e5a6c6a3ebad00c05bec6": "70d5a0c2463f0a239362ba5f78137a62",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9c/7789b9391c252120992b141e9d3efed34a058a": "730ea5774b15c7fc785296d7dc4233c8",
".git/objects/7c/e0d8949290ae271001af49de36c1498399eb41": "54a50f888955a4c5c4f7bce90e8106c9",
".git/objects/f9/54d39736c8b3085fd38260b4f0d644f912dd16": "0481b3a5896c14916600ea34b6a9e0dc",
".git/objects/b2/71c97467a06d8cf480979339ffd017e58de8ab": "b05304a7d7234dd2b7174e5322fc2132",
".git/objects/a9/fd8e62f04c58d0e7258df545ce3378e285b014": "4a835cd3dcd951eb660e6fc262b8e6a4",
".git/objects/0d/329fd72650c0662cb8fdca6fba6889c601a971": "f69865ec657d7fecc8c0ca13c1a476ee",
".git/objects/b8/b6ffbc700d683220d2a6faecb24f140c3842e2": "ddd2b41f97efff5dec5160871c7cd994",
".git/objects/43/f3f2532f5d1a9287f9a1ea5c53aa6c392faf7d": "6d9fb2383ea24f9c5e3301910479e05d",
".git/objects/8c/bbc8e25e6b27c882417a8fb11cc957c4bca0de": "c59bda944549d4cc9091fe8a223488ca",
".git/objects/6d/e356dd301b142e479ef8989a444b4939263b39": "1ed517363d108c17a42d144b8cc85a02",
".git/objects/1d/c57a9cf20dfedd1cf55aec3208281287c7dad5": "0540708a0c812f093ebd96354c0234aa",
".git/objects/dd/d972661dd1caf8c4ad137637ecd51d290eb715": "2a8a5de790fa2f7699f3d45fb82e39a1",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/84/5f54f5a733faafa8d60b3e80d006e2d460ce20": "1b5f2947e5e54f1106df9c48bf10c6f4",
".git/objects/84/cb5a32b85efc67d9177672df8cd913d3ce69a3": "963902c4988f3145e63d82650ed603fe",
".git/objects/58/21d91d09da8084e355648f2a6897609a4344ab": "e7f4e5d75cb1a6a9ab03f8edc80ac0ae",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/f7/5a773bffa3a1362efeaa56e8643f127c3f47b9": "d846085c4628a3b56a1453617f477a1d",
".git/objects/6e/26de76d46d7e4c28d19acb691cc8a4b41b4287": "9ce195e87d87f63da6937cdbbc944c14",
".git/objects/89/aae6b6afc9a15381aec165494e81e99f93499f": "9c7151550eef40498f44a528a908f173",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/81/f88bd914982fa1e747903c52a8bd6702eaa990": "efc1ced6c4d2aef8dcee399d48faddc8",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/config": "d845e0f6d681cb54fac9b41f87746d97",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/HEAD": "bbcec0ce3fd12aee1f6facaf7f741dfd",
".git/logs/refs/heads/master": "bbcec0ce3fd12aee1f6facaf7f741dfd",
".git/logs/refs/remotes/origin/master": "f23c7cf3019905c71fc8499ab78a5dc0",
".git/index": "c2c47306611bcd931c111b59dbba648d",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/refs/heads/master": "d05e8fb4d4ea54253dc2ff51b54d65f9",
".git/refs/remotes/origin/master": "d05e8fb4d4ea54253dc2ff51b54d65f9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"README.md": "58f7a89afbbab736e8dba92ae4376f78",
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
