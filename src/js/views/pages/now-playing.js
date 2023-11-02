import ThemovieDBSources from "../../data/theMoviedb-sources";
import movieTemplate from "../../template/movieTemplate";

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
            moviesContainer.innerHTML += movieTemplate.renderMovieTemplate(movie);
        });
    }, 

    
};

export default NowPlaying;