const UrlParser = {
    parseActiveUrlWithCombiner() {
        const url = window.location.hash.slice(1).toLowerCase() ; 
        console.log('Anda sedang mengakses url : ', url) ; 
    }, 

    parseActiveUrlWithoutCombiner() {
        const url = window.location.hash.slice(1).toLowerCase() ; 
        return this._urlSplitter(url) ;
    },

    _urlSplitter(url) {
        const urlSplits = url.splits('/') ; 
        return {
            resource : urlSplits[1] || null, 
            id : urlSplits[2] || null, 
            verb : urlSplits[3] || null,
        }
    }

}

export default UrlParser;