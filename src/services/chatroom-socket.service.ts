import { Service } from 'miter';
import { MiterSocketService } from 'miter-socket-service';
import * as http from 'http';
import * as https from 'https';

@Service()
export class ChatroomSocketService extends MiterSocketService {
    constructor() {
        super();
    }
    
    async start() {
        await super.start();
    }
    async listen(webServer: http.Server | https.Server) {
        await super.listen(webServer);
        
    }
}
