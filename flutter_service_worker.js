'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "169adf4f66b2f0041e332a360d00d796",
"assets/AssetManifest.smcbin": "cc0c6aade8c6cc2ac941299a8bc589cc",
"assets/assets/a.png": "5e2ac48e68a49a55752c5ac7dca2e925",
"assets/assets/back.png": "372dcd5412841d1ffbc7d0c7528c3d2c",
"assets/assets/c.png": "099f7194278240dd433783d9b1f01ca8",
"assets/assets/cc.png": "7e61994841214e1fb8b77574cd1f28ba",
"assets/assets/cn.png": "eece3061f8744587aca2b21a10661f3a",
"assets/assets/co.png": "ba9d4331ef3e24173f711e8c77774dc7",
"assets/assets/codechef.png": "38727eede420948de646a3fa5903e0b2",
"assets/assets/cp.png": "d2beffcee9a70977ca305a2f603065e8",
"assets/assets/cpp.jpg": "4dbf5283464cf1ddec38b989c5e19bc2",
"assets/assets/cse.png": "43c1e25f6760b6d195ec11a882cc6bd9",
"assets/assets/cupimage.png": "a8298b66ed85e0ced736567ed1fa752e",
"assets/assets/dbms.png": "6e719a8c4e87df28c7b8bc2746256aab",
"assets/assets/DevST.png": "a3f21305133b565fccd75bc6fca89277",
"assets/assets/flutter.png": "6637b6c64481c76692760d0729b9c10a",
"assets/assets/g.gif": "1385636a916a4ec54737566357ddddb6",
"assets/assets/gfg.png": "2917683668aef716108f749119153ec9",
"assets/assets/github.png": "34b5c148be9a6d30727644d26ed03dae",
"assets/assets/home.png": "5974541d004144b01f293713a7cd2732",
"assets/assets/homologoleft.png": "094a0c7251c351726ddac9bc5dc22753",
"assets/assets/i.png": "c9acdb991ced2d52b1dad01134619b98",
"assets/assets/imageblur.png": "1d67b7cdd32e91ba40d454eaff925204",
"assets/assets/imagesmall.png": "f74754eeb6467d1bca2eadaf101b8b25",
"assets/assets/imagetop.png": "46fc91f36287c3648af569ddf7b5e8a2",
"assets/assets/instagram.png": "6d4e8f2e7b946483b6374ed9603bdd63",
"assets/assets/integrity.png": "59ebc45febfcf9a9eb9c2a0ad850f9b2",
"assets/assets/java.png": "3c2903a4f26814e78dc3638adf4922d1",
"assets/assets/jetpack.png": "0185b491c2c275060d654b5b88b06abc",
"assets/assets/kotlin.png": "25764684d91ab355c512f1adfdbe971b",
"assets/assets/l.png": "dcfea0fe78d0ba6462b9b161c752d6a7",
"assets/assets/layers.png": "1950955c1bc419166494ea69a503b1c6",
"assets/assets/leetcode.png": "12b0b66250fe72c009fc3e9ff90bcf9e",
"assets/assets/link.png": "7a1fe0cbc52ac0142cd71f20c4913356",
"assets/assets/linkedin.png": "28feebffb9050bafab007a3c42387fc8",
"assets/assets/ml.png": "6d4670b4703d72565a0037153f8f34c1",
"assets/assets/mw.png": "85df4762832279567f7f63b19ae1e9b4",
"assets/assets/next.png": "50be92a90da8a3b55e374e2373f509ab",
"assets/assets/os.png": "0c4fe72dba26f0370aa5fd246e0adef6",
"assets/assets/p.jpeg": "61d137c478adc7714e962736b35a1003",
"assets/assets/profile.png": "5d99a6ca28a0ad4eede4157fa3309821",
"assets/assets/project.png": "4e66f5166094b9ecb73e45f85e9da862",
"assets/assets/r.png": "c50da99138264cadd99e1e3690154786",
"assets/assets/right.png": "5a43b1b8fc6f59ff26b8970025b7ab8a",
"assets/font/SourceSansPro-Regular.ttf": "47dbe5824a2d82b794ef1f52809699a5",
"assets/FontManifest.json": "1c87b4ca782a8130cfeb1225584d0e58",
"assets/fonts/MaterialIcons-Regular.otf": "893b58736073866721a2c7d76521f115",
"assets/NOTICES": "d3da72205f443e8ba3e8a3cd413bb835",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1f1e21b5c78786672c39bd41d0957a2b",
"/": "1f1e21b5c78786672c39bd41d0957a2b",
"main.dart.js": "bc85a57f6a2cf44a5367be546bbe7eb6",
"manifest.json": "9583ebe54188295a4768ae1aa040030b",
"version.json": "cc1fa9cce5af273c0909d105387fee89"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
