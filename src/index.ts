import { Miter } from 'miter';
import { AppControllers } from './controllers';
import { AppServices } from './services';

import { SocketService } from 'miter-socket-service';
import { ChatroomSocketService } from './services/chatroom-socket.service';

Miter.launch({
    name: 'chat-room-demo',
    port: 8080,
    logLevel: {
        default: 'info',
        // 'socket-service': 'verbose'
    },
    
    router: {
        controllers: AppControllers
    },
    
    services: AppServices,
    
    inject: [
        { provide: SocketService, useClass: ChatroomSocketService }
    ]
});
