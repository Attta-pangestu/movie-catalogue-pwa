import ThemovieDBSources from "../../data/theMoviedb-sources";
import Config from "../../config/config";

const NowPlaying = {
    render() {
        return `
            <div class="content">
                <h2 class="content__heading">Now Playing In Cinema</h2>
                <div id="movies"></div>
            </div>
        `;
    }, 

    async renderMovieContent(){
        const movies = await ThemovieDBSources.getNowPlaying() ; 
        const moviesContainer = document.querySelector('#movies') ;
        console.log('Berhasil melakukan fetch list now playing : ', movies) ; 
        movies.forEach(movie => {
            moviesContainer.innerHTML += this.renderMovieTemplate(movie);
        });
    }, 

   
};

export default NowPlaying;