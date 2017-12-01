import { Controller, Get } from 'miter';
import { Request, Response } from 'express';
import path = require('path');

const ROOT = path.resolve(__dirname, '../../');

@Controller()
export class ChatroomController {
    constructor() { }
    
    @Get('/')
    public async home(req: Request, res: Response) {
        await res.sendFile(path.resolve(ROOT, 'public/index.html'));
    }
}
