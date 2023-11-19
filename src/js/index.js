import 'regenerator-runtime';
import 'lazysizes' ;
import 'lazysizes/plugins/parent-fit/ls.parent-fit' ;

import '../styles/style.css' ;
import '../styles/responsive.css' ; 

import App from './views/app';
import swRegister from './utils/sw-register';
import FooterToolsInitiator from './views/pages/footer-tools-iniator';

const newApp = new App({
    button : document.querySelector('#hamburgerButton'),
    drawer : document.querySelector('#navigationDrawer'),
    content : document.querySelector('#mainContent'),    
}) ; 


window.addEventListener('load', async () => {
    await swRegister() ; 
    newApp.pageRender() ; 
    // WebsocketIniator.init(Config.WEB_SOCKET_SERVER) ; 
    FooterToolsInitiator.init({
        subscribeButton : document.querySelector('#subscribePushNotification'), 
        unsubscribeButton : document.querySelector('#unsubscribePushNotification'), 
    })
});

window.addEventListener('hashchange', ()  => {
    newApp.pageRender(); 

});