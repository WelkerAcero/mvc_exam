import cassandra from 'cassandra-driver'
import dotenv from 'dotenv'

dotenv.config();



class Database{

    private _authProvider = new cassandra.auth.PlainTextAuthProvider('', '');// user and password
    private _contactPoints = [process.env.CASSANDRA_POINT || '127.0.0.1']; //localhost
    private _localDataCenter = process.env.CASSANDRA_DATACENTER || 'datacenter1'; //number sucursls
    protected keyspace = process.env.CASSANDRA_KEYSPACE; // name database


    get create() {

        const client = new cassandra.Client({
            contactPoints: this._contactPoints,
            authProvider: this._authProvider,
            localDataCenter: this._localDataCenter,
            keyspace: this.keyspace,
        });
        return client;
    }
}

export default Database;