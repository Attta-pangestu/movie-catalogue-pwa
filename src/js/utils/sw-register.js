import * as WorkboxWindow from 'workbox-window' ; 

const swRegister = async () => {
    if (!('serviceWorker' in navigator)) {
        console.log('Service Worker not supported in the browser');
        return;
    }

    const wb = new WorkboxWindow.Workbox('/sw.bundle.js') ; 
    try {
        await wb.register() ; 
        console.log('berhasil melakukan registrasi service worker ') ;

    }
    catch(err) {
        console.log('Terjadi error saat melakukan register service worker : ', err) ; 
    }
}

export default swRegister ; 