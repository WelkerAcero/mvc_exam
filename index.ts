import App from './app';
import Connection from './App/DB/connection';
import userRoutes from './App/routes/user';

class Server extends App {
    private _PORT:number = this.app.get('PORT')

    routes() {
        this.app.use(userRoutes);
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