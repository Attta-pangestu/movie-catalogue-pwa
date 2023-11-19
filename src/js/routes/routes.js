import NowPlaying from "../views/pages/now-playing";
import Upcoming from "../views/pages/upcoming";
import Detail from "../views/pages/detail";
import LikeMovie from "../views/pages/like";

const routes = {
    '/' : NowPlaying, 
    '/upcoming' : Upcoming, 
    '/detail/id' : Detail,
    '/like' : LikeMovie,
}

export default routes ; 