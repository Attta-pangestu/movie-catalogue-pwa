import Config from "../config/config";
import NotificationHelper from "./notification-helper";

const WebsocketIniator = {
    init(url) {
        const Websocket = new WebSocket(url) ;
        Websocket.onmessage = this._onMessageHandler ; 
    }, 

    _onMessageHandler(message) {
        console.log(message.data) ; 
        const movie = JSON.parse(message.data) ; 
        NotificationHelper.sendNotification({
            title : `${movie.title} is on Cinema`, 
            options : {
                body : movie.overview, 
                image : `${Config.BASE_IMAGE_URL + movie.poster_path}`
            },  
        });
    }
}

export default WebsocketIniator ; 