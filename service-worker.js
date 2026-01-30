// Simple service worker for PWA install support
self.addEventListener("install", (event) => {
  // Immediately activate new SW
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  // Start controlling clients without reload
  event.waitUntil(self.clients.claim());
});

// Optional: handle fetch only to confirm SW controls the page
self.addEventListener("fetch", (event) => {
  // Default network behaviour (no caching yet)
  return;
});
