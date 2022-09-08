import express, { Express } from 'express';

import userRoutes from './App/routes/user';
import userBanRoutes from './App/routes/userBan';
import commentRoutes from './App/routes/comments';
import productRoutes from './App/routes/product';

export default class MyServer{

    private _app: Express = express();
    private _port: Express = this._app.set('PORT', 3000);

    routes() {
        this._app.use(userRoutes);
        this._app.use(userBanRoutes);
        this._app.use(commentRoutes);
        this._app.use(productRoutes);
    }

    listen() {
        this._app.listen(this._port, () => {
            console.log('listening on port ' + this._port)
        });
    }
}

const server = new MyServer();
server.listen()
server.routes()
