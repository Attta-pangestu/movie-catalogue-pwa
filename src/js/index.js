import 'regenerator-runtime';
import '../styles/style.css' ;
import '../styles/responsive.css' ; 
import App from './views/app';
import swRegister from './utils/sw-register';

const newApp = new App({
    button : document.querySelector('#hamburgerButton'),
    drawer : document.querySelector('#navigationDrawer'),
    content : document.querySelector('#mainContent'),    
}) ; 


window.addEventListener('load', () => {
    swRegister() ; 
    newApp.pageRender() ; 
});

window.addEventListener('hashchange', ()  => {
    newApp.pageRender(); 
});