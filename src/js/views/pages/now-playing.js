import ThemovieDBSources from "../../data/theMoviedb-sources";

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
        
    }
};

export default NowPlaying;