import { Request, Response } from "express";
import { ModelQuery} from "../Models/ModelQuery";


export class ProductController{

    private model: ModelQuery;

    constructor() {
        this.model = new ModelQuery();
    }

    getProducts = async (req: Request, res: Response) => {
        let bringData = await this.model.get_data("select * from mvc_exam.articles;");
        return res.json(bringData.rows);
    }

    getProduct = async (req: Request, res: Response) => {
        const id = req.params.id;
        let bringData = await this.model.get_data(`select * from mvc_exam.articles where idArticle = ${id};`);
        console.log(bringData);
        return res.json(bringData.rows);
    }

    postProduct = async (req: Request, res: Response) => {
        await this.model.put_data(`INSERT INTO mvc_exam.articles(idUser,idArticle,name,description) VALUES (UUID(),UUID(), '${req.body.name}', '${req.body.description}');`);
        return res.json(`Se creó correctamente ${req.body.name}`);
    }

    putProduct = async (req: Request, res: Response) => {
        const id = req.params.id;
        this.model.get_data(`UPDATE mvc_exam.articles SET name = '${req.body.name}', description = '${req.body.description}' WHERE idArticle = ${id} AND iduser = ${req.body.iduser};`);
        return res.json('Se actualizó el articulo ' + id)
    }

    deleteProduct = async (req: Request, res: Response) => {
        const id = req.params.id;
        this.model.get_data(`DELETE FROM mvc_exam.articles WHERE idArticle = ${id}`);
        return res.json('Se eliminó el articulo' + id)
    }

}
