// Service Worker mínimo para que la PWA sea instalable.
// No realiza cacheo offline para mantener la simplicidad.

self.addEventListener('install', (event) => {
    // Salta la espera para que el SW se active inmediatamente
    self.skipWaiting();
    console.log('Service Worker: Instalado');
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activado');
    // Toma control de las pestañas abiertas inmediatamente
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // No hace nada, solo deja pasar la petición a la red.
    // Esto es suficiente para cumplir el criterio de PWA instalable en muchos navegadores.
    event.respondWith(fetch(event.request));
});