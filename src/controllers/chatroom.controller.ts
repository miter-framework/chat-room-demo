import { Controller, Get } from 'miter';
import { Request, Response } from 'express';

@Controller()
export class ChatroomController {
    constructor() { }
    
    @Get('/')
    public async home(req: Request, res: Response) {
        res.status(200).send(`
        <!doctype html>
        <html>
            <head>
                <title>Chat Room Demo</title>
                <script src="/socket.io/socket.io.js"></script>
                <script>console.log(io);</script>
            </head>
            <body>
                Here's your chat client!
            </body>
        </html>
        `);
    }
}
