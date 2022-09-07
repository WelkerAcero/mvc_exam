import { Request, Response } from "express";
import { ModelQuery } from "../Models/ModelQuery";
import body from 'body-parser'

let obj = new ModelQuery();

export const getProducts =  async (req: Request, res: Response) => {

    let bringData = obj.get_data("select * from usersblock;");
    const data = await bringData;
    console.log(data);
    return res.json(data);
}

export const getProduct = async (req: Request, res: Response) => {

    const { id } = req.params;
    console.log('Trae un producto');
}


export const postProduct = async (req: Request, res: Response) => {
    
    
    const bod = req.body;
    
    let bringData = obj.put_data(`INSERT INTO mvc_exam.articles(idUser,idArticle,name,description) VALUES (UUID(),UUID(), '${ bod.name }', '${ bod.description }');`);
    return res.json(`Se creo correctamente ${bod.name}`);
}

export const putProduct = async (req: Request, res: Response) => {

    const id  = req.params.id;
    const bod = req.body;
    let deleted = obj.get_data(`UPDATE mvc_exam.articles SET name = '${bod.name}', description = '${bod.description}' WHERE idArticle = ${id} AND iduser = ${bod.iduser};`);
    return res.json('Se actualizó el articulo ' + id)
}

export const deleteProduct = async (req: Request, res: Response) => {

    const id  = req.params.id;
    let deleted = obj.get_data(`DELETE FROM mvc_exam.articles WHERE idArticle = ${id}`);
    return res.json('Se eliminó el articulo' + id)
}

