import express, {Express} from 'express';


class App{

    private _app:Express = express();
    
    get app(){
        this._app.set('PORT', 3000)
        return this._app
    }
    
}

export default App