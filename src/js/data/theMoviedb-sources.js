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
    


}

export default ThemovieDBSources;