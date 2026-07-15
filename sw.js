const CACHE_NAME = 'e7-calc-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'https://i.ibb.co/6R22tP9G/image.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
