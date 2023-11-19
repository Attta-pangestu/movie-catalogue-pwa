import ApiEndpoint from "../config/api-endpoint";
class ThemovieDBSources {
    static async getNowPlaying() {
        try{
            const response = await fetch(ApiEndpoint.NOW_PLAYING, ApiEndpoint.HEADERS) ; 
            const responseJSON = await response.json() ; 
            return responseJSON.results ; 
        }catch(err) {
            console.log('Error Fetch Now Playing : ', err) ;
        }
    }

    static async detailMoviePlaying(id) {
        try{
            const response = await fetch(ApiEndpoint.DETAIL_MOVIE+id, ApiEndpoint.HEADERS);
            const responseJSON = await response.json() ;
            return responseJSON ; 
        }
        catch(err) {
            console.log('Terjadi error saat ', err)
        }
    }

    static async upcomingMovies() {
        try{
            const response = await fetch(ApiEndpoint.UPCOMING, ApiEndpoint.HEADERS) ; 
            const responseJSON = await response.json() ;
            return responseJSON.results ; 
        }
        catch(err) {
            console.log('Terjadi error saat mengambil data upcoming movies : ', err) ; 
        }
        
    }
    


}

export default ThemovieDBSources;