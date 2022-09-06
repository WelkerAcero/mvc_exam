import App from './app';
<<<<<<< HEAD
import { ProductModel } from './App/Models/ProductModel';
=======
import Connection from './App/DB/connection';
import userRoutes from './App/routes/user';
<<<<<<< HEAD
>>>>>>> e32af81f2b84d29378b0f4ec9640c185aa4ac3b9
=======
import userBanRoutes from './App/routes/userBan';
import commentRoutes from './App/routes/comments';
import productRoutes from './App/routes/product';

>>>>>>> 7f3625d519a519278186c36f6cfb666fa37eeaaf

class Server extends App {
    private _PORT: number = this.app.get('PORT')

<<<<<<< HEAD
    listen() {
        this.app.listen(this._PORT, () => {
=======
    routes() {
        this.app.use(userRoutes);
        this.app.use(userBanRoutes);
        this.app.use(commentRoutes);
        this.app.use(productRoutes);
    }

    listen(){
        this.app.listen(this._PORT, ()=> {
>>>>>>> e32af81f2b84d29378b0f4ec9640c185aa4ac3b9
            console.log('listening on port ' + this._PORT)
        })
    }
}

const ser = new Server();

<<<<<<< HEAD
const obj = new ProductModel();
obj.get_data("SELECT * FROM system.local");


ser.listen()
=======
const db = new Connection()
db.listen()
ser.listen()
ser.routes()
>>>>>>> e32af81f2b84d29378b0f4ec9640c185aa4ac3b9
