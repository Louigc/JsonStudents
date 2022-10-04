const cacheName = 'cache-members';
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(['/JsonStudents/', '/JsonStudents/index.html', '/JsonStudents/members.json', '/JsonStudents/javascript.js' , '/JsonStudents/morten.png', '/JsonStudents/mystyle.css', '/JsonStudents/nina.png', '/JsonStudents/olivia.png']);
    })
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.open(cacheName).then(cache => cache.match(event.request))
    )
  );
});