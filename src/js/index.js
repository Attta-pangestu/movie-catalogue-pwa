import '../styles/style.css' ;
import App from './views/app';

const newApp = new App ; 

window.addEventListener('load', () => {
    newApp.renderPage() ; 
});