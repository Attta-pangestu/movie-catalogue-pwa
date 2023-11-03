import Config from "../config/config"
const CacheHelper = {
    async cachingAppShell(request_url) {
        const cache = await this._openCacheStatic() ;
        cache.addAll(request_url) ; 
    }, 

    async revalidateCache(request_url) {
        const response = await caches.match(request_url) ; 
        if(!response) {
            console.log('Tidak ditemukan di cache') ; 
            return await this._fetchRequest(request_url) ; 
        }else{
            return response ; 
        }

    },

    async _fetchRequest(request_url) {
        const response = await fetch(request_url) ;
        // save to static first 
        // const staticCache = await this._openCacheStatic() ;
        await this._addCache(request_url, response.clone()) ; 
        return response ; 
    }, 

    async _openCacheStatic() {
        return caches.open(Config.CACHE_NAME) ; 
    }, 

    async _openCacheDynamic() {
        return await caches.open(Config.DYNAMIC_CACHE_NAME) ; 
    }, 
    async _addCache(request_url, response) {
        const cache = await this._openCacheDynamic() ; 
        await cache.put(request_url,response) ;
    }, 

    


}

export default CacheHelper ; 