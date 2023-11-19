import routes from "../routes/routes";
import UrlParser from "../routes/urlParser";
import DrawerIniator from "../utils/drawerInitiator";
import searchMovie from "../utils/search-movie";
import { renderMovieListToItem } from "./templates/movieTemplate";

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
        console.log('Anda akan mengakses url : ', url)
        const pageScript = routes[url]  ; 
        this._content.innerHTML =  pageScript.render();
        const fetchData = await  pageScript.renderMovieContent();
        this._initListener(fetchData);
    }

    _initListener(movieList){
        const searchElem = document.querySelector('#search-film');
        searchElem.addEventListener('change', () => {
            const filteredMovies = searchMovie(movieList, searchElem.value); 
            renderMovieListToItem(filteredMovies);
        })
    }
}

export default App ; 