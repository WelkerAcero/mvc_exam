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
        const bod = req.body;
        let bringData = await this.model.put_data(`INSERT INTO mvc_exam.articles(idUser,idArticle,name,description) VALUES (UUID(),UUID(), '${bod.name}', '${bod.description}');`);
        return res.json(`Se creó correctamente ${bod.name}`);
    }

    putProduct = async (req: Request, res: Response) => {
        const id = req.params.id;
        const bod = req.body;
        let deleted = this.model.get_data(`UPDATE mvc_exam.articles SET name = '${bod.name}', description = '${bod.description}' WHERE idArticle = ${id} AND iduser = ${bod.iduser};`);
        return res.json('Se actualizó el articulo ' + id)
    }

    deleteProduct = async (req: Request, res: Response) => {
        const id = req.params.id;
        let deleted = this.model.get_data(`DELETE FROM mvc_exam.articles WHERE idArticle = ${id}`);
        return res.json('Se eliminó el articulo' + id)
    }

}
