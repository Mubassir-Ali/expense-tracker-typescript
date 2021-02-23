const cacheData = "quiz App";

this.addEventListener("install", (event) => {
  event.waitUntill(
    caches.open(cacheData).then((cache) => {
      cache.addAll([  
          "/static/js/main.chunk.js",
          "/static/js/vendors~main.chunk.js",
          "/static/js/bundle.js",
          "/icon?family=Material+Icons",
          "/css?family=Roboto:300,400,500,700&display=swap",
        "/",
        "index.html",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
      event.respondWith(
        caches.match(event.request).then((resp) => {
          if (resp) {
            return resp;
          }
  
          let requestUrl =event.request.clone()
          return fetch(requestUrl)
  
  
        })
      );
    }
  });