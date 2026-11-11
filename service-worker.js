const CACHE_NAME = 'polka-librium-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Простая стратегия: сеть в приоритете, кэш как запасной вариант
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
