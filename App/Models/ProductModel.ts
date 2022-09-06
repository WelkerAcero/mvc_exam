import { Model } from "./Models";

export class ProductModel extends Model {

    async get_data(userQuery: string) {
        this.query = userQuery;
        let receive_data = await this.listen();
        return receive_data;
    }

}

