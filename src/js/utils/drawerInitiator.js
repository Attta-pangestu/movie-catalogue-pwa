const DrawerIniator = {
    init({button, drawer, content}) {
        
        console.log('Memanggil Drawer Initor')

        button.addEventListener('click', (event) => {
            this._toggleDrawer(drawer,event) ; 
            console.log('HAMBURGER MENU') ;
        });

        content.addEventListener('click', event => {
            this._closeDrawer(drawer, event) ; 
        });
    }, 

    _toggleDrawer(drawer, event) {
        // event.stopPropagation() ;
        drawer.classList.toggle('open') ; 
    },

    _closeDrawer(drawer,event) {
        event.stopPropagation() ; 
        drawer.classList.remove('open') ;
    }
}

export default DrawerIniator ; 