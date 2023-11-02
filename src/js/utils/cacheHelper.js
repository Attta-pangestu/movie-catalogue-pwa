import Config from "../config/config"
const CacheHelper = {
    async cachingAppShell(request_url) {
        const cache = await this._openCache() ;
        cache.addAll(request_url) ; 
    }, 

    async fetchRequest(request_url) {
        const response = await fetch(request_url) ; 
        await this._addCache(request_url) ; 
        return response ; 
    }, 

    async _openCache() {
        return caches.open(Config.CACHE_NAME) ; 
    }, 
    async _addCache(request_url) {
        const cache = await this._openCache() ; 
        cache.add(request_url) ; 
    }, 


}

export default CacheHelper ; 