const CACHE_NAME = 'ghostgrid-offline-v1';
self.addEventListener('install', event => { self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    try {
      const response = await fetch(event.request);
      if (response.ok && new URL(event.request.url).origin === self.location.origin) {
        cache.put(event.request, response.clone());
      }
      return response;
    } catch (error) {
      const cached = await cache.match(event.request);
      if (cached) return cached;
      if (event.request.mode === 'navigate') {
        const shell = await cache.match('./DocumentfromAbhirup_GhostGrid_AI_PWA.html');
        if (shell) return shell;
      }
      return new Response('GhostGrid is offline and this resource is not cached yet.', { status: 503, headers: { 'Content-Type': 'text/plain' } });
    }
  })());
});
