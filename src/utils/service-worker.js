const CACHE_NAME = "e-comas";
const htmlURL = /\.html(\?[^#]*)?(#.*)?$/;

async function networkFetch(cachePromise, request) {
  const [cache, response] = await Promise.all([cachePromise, request]);
  cache.put(request, response.clone());
  return response;
}
self.addEventListener("fetch", (event) => {
  // Let the browser do its default thing
  // for non-GET requests.
  if (event.request.method != "GET") return;

  event.respondWith(async () => {
    const cachePromise = caches.open(CACHE_NAME);

    if (htmlURL.test(event.request.url))
      return networkFetch(cachePromise, event.request);

    const response = await (await cachePromise).match(event.request);
    return response || networkFetch(cachePromise, event.request);
  });
});
