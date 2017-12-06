import { Service, LoggerCore } from 'miter';
import { SocketService, SocketMetadata } from 'miter-socket-service';
import * as http from 'http';
import * as https from 'https';

@Service()
export class ChatroomSocketService extends SocketService {
    constructor(
        sockMeta: SocketMetadata,
        loggerCore: LoggerCore
    ) {
        super(sockMeta, loggerCore.getSubsystem('socket-service'));
    }

    async start() {
        await super.start();
        
        this.handle('chat-msg', (socket, msg: string) => {
            this.broadcast('chat-msg', msg);
        });
    }
}
