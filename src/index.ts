import { Miter } from 'miter';
import { MiterSocketService } from 'miter-socket-service';
import { AppControllers } from './controllers';

Miter.launch({
    name: 'chat-room-demo',
    
    router: {
        controllers: AppControllers
    },
    
    services: [MiterSocketService]
});
