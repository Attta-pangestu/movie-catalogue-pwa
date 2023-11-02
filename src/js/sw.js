import 'regenerator-runtime' ; 
import CacheHelper from './utils/cacheHelper';

const assetCache = [
    '/', 
    './index.html', 
    '/pages/fallback.html',
    './css/styles.css',
    './css/materialize.min.css',
    './js/app.js', 
    './js/materialize.min.js', 
    './js/script.js',
    './img/dish.png',
    './js/firebase-app.js',
    './js/db.js',
    './js/ui.js',
    'https://www.gstatic.com/firebasejs/10.5.0/firebase-app-compat.js', 
    'https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore-compat.js',
    'https://fonts.gstatic.com/s/materialicons/v140/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2',
] ;

self.addEventListener('install', event => {
    console.log('sedang menginstall service worker ') ; 
    event.waitUntil(CacheHelper.cachingAppShell(assetCache)); 
});

self.addEventListener('activate', event => {
    console.log('sedang mengaktivasi service worker ') ; 
});

self.addEventListener('fetch', event => {
    event.waitUntil(CacheHelper.fetchRequest(event.request.url)) ; 
});