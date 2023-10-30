import '../styles/style.css' ;
import App from './views/app';

const newApp = new App({
    button : document.querySelector('#hamburgerButton'),
    drawer : document.querySelector('#navigationDrawer'),
    content : document.querySelector('#mainContent'),    
}) ; 

window.addEventListener('load', () => {
    newApp.pageRender() ; 
});