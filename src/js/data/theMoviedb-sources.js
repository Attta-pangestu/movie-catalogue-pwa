import ApiEndpoint from "../config/api-endpoint";

class ThemovieDBSources {
    static async getNowPlaying() {
        const response = await fetch(ApiEndpoint.NOW_PLAYING) ; 
        const responseJSON = await response.json() ; 
        console.log('Berhasil melakukan fetch movies : ' ) ;
        return responseJSON ; 
    }
    


}

export default ThemovieDBSources;