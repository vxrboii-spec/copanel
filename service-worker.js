self.addEventListener('install', (event) => {
  console.log('Service Worker installed.');
});

self.addEventListener('fetch', (event) => {
  // For now, just pass through
});
