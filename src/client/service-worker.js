export const CACHE_NAME = new Date().getTime().toString();

self.addEventListener('install', (event) => {
  console.log(`[SW] - New cache name - '${CACHE_NAME}' just installed!`);
  event.waitUntil(caches.open(CACHE_NAME));
});

self.addEventListener('activate', (event) => {
  console.log('[SW] - has just activated!');
  event.waitUntil(caches.keys().then((cacheNames) => {
    return Promise.all(cacheNames.map((cacheName) => {
      if (cacheName.indexOf(CACHE_NAME) === 0) {
        return null;
      }
      console.log(`[SW] - Old '${cacheName}' has been deleted!`);
      return caches.delete(cacheName);
    }));
  }));
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const requestUrl = new URL(request.url);
  const generalError = new Response('', {
    status: 500,
    headers: { 'Content-Type': 'application/json' },
  });

  event.respondWith(caches.match(request).then((response) => {
    if (response) {
      console.log(`[SW] - Fetch URL ${requestUrl.href} from cache`);
      return response;
    }

    console.log(`[SW] URL ${requestUrl.href} fetched`);
    return fetch(request, { credentials: 'same-origin' }).then(d => d).catch(() => generalError);
  }));
});
