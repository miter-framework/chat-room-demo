import { Miter } from 'miter';
import { AppControllers } from './controllers';
import { AppServices } from './services';

import { MiterSocketService } from 'miter-socket-service';
import { ChatroomSocketService } from './services/chatroom-socket.service';

Miter.launch({
    name: 'chat-room-demo',
    port: 8080,
    
    router: {
        controllers: AppControllers
    },
    
    services: AppServices,
    
    inject: [
        { provide: MiterSocketService, useClass: ChatroomSocketService }
    ]
});
