import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

export function startNotification () {  
   if (process.client) {
      
      window.Pusher = Pusher
      window.Echo = new Echo({
         broadcaster: 'pusher',
         key: 'app-key',
         wsHost: 'soketi.db.app.br',
         // wsPort: '6001',
         // wssPort: '6001',
         forceTLS: false,
         encrypted: true,
         disableStats: true,
         enabledTransports: ['ws', 'wss'],
         cluster: 'sa1'
      });
      
   }
}