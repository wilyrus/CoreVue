this.addEventListener('install', event => {
    event.waitUntil(
        caches.open('v1').then(cache => {
            return cache.addAll(['bundle.js']);
        })
    );
});

this.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return (
                response ||
                fetch(event.request).then(async response => {
                    const cache = await caches.open('v1');

                    cache.put(event.request, response.clone());
                    return response;
                })
            );
        })
    );
});
