if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/pwa-countries-raster-map/sw.js')
        .then(function () {
            console.log('Service worker registered');
        })
        .catch((err) => {
            console.log('Service Worker registration failed: ', err);
        });
}
