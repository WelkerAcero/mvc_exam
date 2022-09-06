import App from './app';
import { ProductModel } from './App/Models/ProductModel';

class Server extends App {
    private _PORT: number = this.app.get('PORT')

    listen() {
        this.app.listen(this._PORT, () => {
            console.log('listening on port ' + this._PORT)
        })
    }
}

const ser = new Server();

const obj = new ProductModel();
obj.get_data("SELECT * FROM system.local");


ser.listen()