import cassandra from 'cassandra-driver';
import dotenv from 'dotenv';

dotenv.config();

export abstract class Model {

    private static db_host: string = "127.0.0.1";
    /*private static db_port: number = 3000;*/
    private static db_user: string = "";
    private static db_pass: string = "";
    private static db_name: string = "mvc_exam";
    private static db_sucursal: string = "datacenter1";

    private _contactPoints = [process.env.CASSANDRA_POINT || Model.db_host]; //localhost
    private _authProvider = new cassandra.auth.PlainTextAuthProvider(Model.db_user, Model.db_pass);// user and password
    private _localDataCenter = process.env.CASSANDRA_DATACENTER || Model.db_sucursal; //number sucursals
    protected keyspace = process.env.CASSANDRA_KEYSPACE || Model.db_name;

    private connection: any; //Will save connection with DB
    protected query: string = "";

    abstract get_data(userQuery: string): any; // method abstract inheritance

    private async db_connection(): Promise<void> {

        this.connection = new cassandra.Client({
            contactPoints: this._contactPoints,
            authProvider: this._authProvider,
            localDataCenter: this._localDataCenter,
            keyspace: this.keyspace
        });

        /* app.listen(Model.db_port); */
        return this.connection;
    }

    private async db_close(): Promise<void> {
        this.connection.shutdown();
    }


    protected async get_query(): Promise<any>  {
        return new Promise((resolve, rejects) => {
            this.db_connection();
            this.connection.execute(this.query, [], (err: any, rows: any) => {
                if (err) {
                    console.error(err)
                    return rejects(err);
                }
                
                console.log(Object.values(rows['rows']));
                return resolve(rows);
            });
            this.db_close();
        });

        
    }

    protected async set_query(): Promise<any> {
        return new Promise((resolve, rejects) => {
            this.db_connection();
            this.connection.execute(this.query, [], (err: any) => {
                if (err) {
                    console.error(err)
                    return rejects(err);
                }
                console.log("Connected database...")
            });
            this.db_close();
        });
    }

}

/* CRUD

*/