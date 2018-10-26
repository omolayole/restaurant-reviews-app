const cacheName = 'v1';

const cacheAsset = [
    '/',
  '/index.html',
  '/restaurant.html',
  '/css/styles.css',
  '/css/responsive.css',
  '/data/restaurants.json',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg'
];

//call install event
self.addEventListener('install', e => {
    console.log('Service worker installed');

    e.waitUntil(
        caches
        .open(cacheName)
        .then(cache => {
            console.log('Service worker is caching file');
            return cache.addAll(cacheAsset)
        })
    );
});

//call fetch event
self.addEventListener('fetch', e => {
    e.respondWith(
        caches
        .match(e.request)
        .then(response => {
            return response || fetch(e.request);
        })
    );
});