import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

function registerSW() {
    // This is the service worker with the combined offline experience (Offline page + Offline copy of pages)
  
    // Add this below content to your HTML page, or add the js file to your page at the very top to register sercie worker
    if ('serviceWorker' in navigator) {
      if (navigator.serviceWorker.controller) {
        console.log('[Code-Sages] active service worker found, no need to register');
        navigator.serviceWorker.getRegistration().then((registration) => {
          
          }); 
      } else {
        // Register the ServiceWorker
        navigator.serviceWorker.register('./service-worker.js', {
          scope: './'
        })
          .then((registration) => {
            console.log('Service worker has been registered for scope:' + registration.scope);
            
          });
      }
    }
  
  }
  

platformBrowserDynamic().bootstrapModule(AppModule).then(res=> {
    registerSW();
});
