import routes from "../routes/routes";
import UrlParser from "../routes/urlParser";
import DrawerIniator from "../utils/drawerInitiator";


class App {
    constructor({button, drawer, content}) {
        this._button = button ; 
        this._drawer = drawer ; 
        this._content = content ; 
        this._initialAppShell() ;
    } 
    
    _initialAppShell() {
        DrawerIniator.init({
            button : this._button,
            drawer : this._drawer, 
            content : this._content,
        });
    }

    pageRender() {
        const url = UrlParser.parseActiveUrlWithCombiner() ; 
        const pageScript = routes[url] ; 
        this._content.innerHTML = ;
        
    }
}

export default App ; 