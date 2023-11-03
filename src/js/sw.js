import 'regenerator-runtime' ; 
import CacheHelper from './utils/cacheHelper';

const assetCache = [
    './',
    './icons/icon-72x72.png',
    './icons/icon-96x96.png',
    './icons/icon-128x128.png',
    './icons/icon-144x144.png',
    './icons/icon-152x152.png',
    './icons/icon-192x192.png',
    './icons/icon-384x384.png',
    './icons/icon-512x512.png',
    './index.html',
    './favicon.png',
    './app.bundle.js',
    './manifest.json',
    './sw.bundle.js',
] ;

self.addEventListener('install', event => {
    console.log('sedang menginstall service worker ') ; 
    event.waitUntil(CacheHelper.cachingAppShell(assetCache)); 
});

self.addEventListener('activate', event => {
    console.log('sedang mengaktivasi service worker ') ; 
});

self.addEventListener('fetch', event => {
    console.log('Service worker intercept : ', event.request) ; 
    if(event.request.url.startsWith('http')) {
        event.respondWith(CacheHelper.revalidateCache(event.request)) ; 
    }
    
});