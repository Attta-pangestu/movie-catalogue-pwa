import { precacheAndRoute } from "workbox-precaching"; 
import { registerRoute, Route } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";

// Do prechaching
precacheAndRoute(self.__WB_MANIFEST) ; 

// TheMovieDB Routing
const theMovieApi = new Route(
    ({url}) => url.href.startsWith('https://api.themoviedb.org/3/'), 
    new StaleWhileRevalidate({
        cacheName: 'themoviedb-api', 
    }), 
); 

const themoviedbImageApi = new Route(({url}) => {
    url.href.startsWith('https://image.tmdb.org/t/p/w500/')
}, new StaleWhileRevalidate({
    cacheName : 'themoviedb-image-api', 
}));

registerRoute(theMovieApi);
registerRoute(themoviedbImageApi);

self.addEventListener('install', () => {
    console.log('Service Worker Installed') ; 
    self.skipWaiting() ; 
});

self.addEventListener('push', (event) => {
    console.log('Service Worker Pushed', event) ;
    const notificationMovie = event.data.json();
  const notificationData = {
    title: notificationMovie.title,
    options: {
      body: notificationMovie.options.body,
      icon: notificationMovie.options.icon,
      image: notificationMovie.options.image,
    },
  };

  const showNotification = self.registration.showNotification(
    notificationData.title,
    notificationData.options,
  );

  event.waitUntil(showNotification);
});