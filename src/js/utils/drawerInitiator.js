const DrawerIniator = {
    init({button, drawer, content}) {
        button.addEventListener('click', (event) => {
            this._toggleDrawer(drawer,event) ; 
        });

        content.addEventListener('click', event => {
            this._closeDrawer(drawer, event) ; 
        });
    }, 

    _toggleDrawer(drawer, event) {
        event.stopPropagation() ;
        drawer.classList.toggle('open') ; 
    },

    _closeDrawer(drawer,event) {
        event.stopPropagation() ; 
        drawer.classList.remove('open') ;
    }
}

export default DrawerIniator ; 