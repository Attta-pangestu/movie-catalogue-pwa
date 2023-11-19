import {openDB} from 'idb' ;
import Config from '../config/config' ;

const {DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME}= Config ;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(database) {
        database.createObjectStore(OBJECT_STORE_NAME, {keyPath : 'id'}) ; 
    }, 
});

const FavoriteMovieIdb = {
    async putMovie(movie) {
        console.log('sedang menambahkan indexDB ') ; 
        return (await dbPromise).put(OBJECT_STORE_NAME, movie) ; 
    }, 
    async deleteMovie(id) {
        console.log('Sedang menghapus indexDB') ; 
        return (await dbPromise).delete(OBJECT_STORE_NAME, id) ; 
    }, 
    async getMovie(id) {
        return (await dbPromise).get(OBJECT_STORE_NAME, id) ; 
    }, 
    async getAllMovie() {
        return (await dbPromise).getAll(OBJECT_STORE_NAME) ; 
    }
}

export default FavoriteMovieIdb ; 