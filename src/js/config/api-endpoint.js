import Config from "./config";

const ApiEndpoint = {
    NOW_PLAYING : `${Config.BASE_URL}movie/now_playing?language=${Config.DEFAULT_LANGUAGE}&page=1`,
    
}

export default ApiEndpoint; 