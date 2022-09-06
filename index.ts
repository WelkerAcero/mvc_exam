import App from './app';

import { ProductModel } from './App/Models/ProductModel';
import Connection from './App/DB/connection';
import userRoutes from './App/routes/user';

import userBanRoutes from './App/routes/userBan';
import commentRoutes from './App/routes/comments';
import productRoutes from './App/routes/product';

class Server extends App {
    private _PORT: number = this.app.get('PORT')

    routes() {
        this.app.use(userRoutes);
        this.app.use(userBanRoutes);
        this.app.use(commentRoutes);
        this.app.use(productRoutes);
    }

    listen(){
        this.app.listen(this._PORT, ()=> {
            console.log('listening on port ' + this._PORT)
        })
    }
}

const ser = new Server();

const db = new Connection()
db.listen()
ser.listen()
ser.routes()
