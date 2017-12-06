import { CtorT, ServiceT } from 'miter';
import { SocketService } from 'miter-socket-service';

export const AppServices: CtorT<ServiceT>[] = [
    SocketService
];
