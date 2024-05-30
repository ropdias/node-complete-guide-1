import http from 'http';
import { requestHandler } from './routes-assignment';

const server = http.createServer(requestHandler);

server.listen(3000);
