import express, { Express } from 'express';
import { ProductController } from './App/Controllers/ProductController';
import productRoutes from './App/routes/product';
const obj = new ProductController();

export default class MyServer extends ProductController{

    private _app: Express = express();
    private _port: number = this._app.get('PORT') || 3000

    constructor() {

        super()
        this._app.use(express.json());
        
    }

    routes() {      
   /*      this._app.use(userRoutes);
        this._app.use(userBanRoutes);
        this._app.use(commentRoutes); */
        this._app.use(productRoutes);
    }

    listen() {
        this.routes()
        this._app.listen(this._port, () => {
            console.log('listening on port ' + this._port)
        });
    }
}
new MyServer().listen()
