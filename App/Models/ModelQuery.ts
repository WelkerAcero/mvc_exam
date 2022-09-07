import { Model } from "./Models";

export class ModelQuery extends Model {

    async get_data(userQuery: string) {
        this.query = userQuery;
        let receive_data = await this.get_query();
        return receive_data;
    }

    async put_data(userQuery: string) {
        this.query = userQuery;
        this.set_query();
        console.log("Data created");
    }

}

