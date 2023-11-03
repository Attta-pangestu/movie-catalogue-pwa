import 'regenerator-runtime';
import '../styles/style.css' ;
import '../styles/responsive.css' ; 
import App from './views/app';


const newApp = new App({
    button : document.querySelector('#hamburgerButton'),
    drawer : document.querySelector('#navigationDrawer'),
    content : document.querySelector('#mainContent'),    
}) ; 

const swRegister = async () => {
    if (!('serviceWorker' in navigator)) {
        console.log('Service Worker not supported in the browser');
        return;
      }

    try {
        navigator.serviceWorker.register('./sw.bundle.js'); 
        console.log('berhasil melakukan registrasi service worker ') ;

    }
    catch(err) {
        console.log('Terjadi error saat melakukan register service worker : ', err) ; 
    }

}

window.addEventListener('load', () => {
    swRegister() ; 
    newApp.pageRender() ; 
});

window.addEventListener('hashchange', ()  => {
    newApp.pageRender(); 
});