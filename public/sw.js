
// Controls which files are stored in cache
// TO UPDATE: Just increment the version number below, which will build and reference a new cache

const version = '0.1';
const cacheName = `fuel-${version}`;


self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/*',
        '/js/*',
        '/static/**/*',
      ])
      .then(() => self.skipWaiting());
    })
  );
});


self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});


self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});