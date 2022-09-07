import Database from './database';

class Connection {


    private _query = `SELECT * FROM system.local`;
    protected _db = new Database();

    listen(){
        this._db.create.execute(this._query, [], (err:any, res:any) => {
            if (err) {
                console.log(`Error ${err}`);
                return false;
            }
            console.log('Connected database');
        });
    }
}

export default Connection;
