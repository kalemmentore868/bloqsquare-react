let cacheData = "appV1";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/static/js/bundle.js",
        "/logo.png",
        "/audio/end.wav",
        "/audio/background-music.wav",
        "/audio/opponent.wav",
        "/audio/you.wav",
        "/icon-2x.ico",
        "/icon-2x.png",
        "/icon-3x.png",
        "/icon.svg",
        "/icon.png",
        "/robots.txt",
        "/fonts/Owners-Regular.ttf",
        "/fonts/Owners-Regular.woff",
        "/fonts/Owners-Regular.woff2",
        "/fonts/Roboto-Regular.ttf",
        "/fonts/Roboto-Regular.woff",
        "/fonts/Roboto-Regular.woff2",
        "/fonts/Silom.woff2",
        "/fonts/Silom.woff",
        "/fonts/Silom.ttf",
        "/index.html",
        "/",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((res) => {
        if (res) {
          return res;
        }
        let requestUrl = event.request.clone();
        fetch(requestUrl);
      })
    );
  }
});
