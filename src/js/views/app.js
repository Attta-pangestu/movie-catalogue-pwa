import routes from "../routes/routes";
import UrlParser from "../routes/urlParser";
import DrawerIniator from "../utils/drawerInitiator";
import NowPlaying from "./pages/now-playing";

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

    async pageRender() {
        const url = UrlParser.parseActiveUrlWithCombiner() ; 
        const pageScript = NowPlaying  ; 
        this._content.innerHTML =  pageScript.render();
        await  pageScript.renderMovieContent();
    }
}

export default App ; 