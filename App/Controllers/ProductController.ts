import { Request, Response } from "express";
import { ProductModel } from "../Models/ProductModel";
import body from 'body-parser'

let obj = new ProductModel();

export const getProducts =  async (req: Request, res: Response) => {
    const { body } = req;

    
    // return obj.get_data(body);
    let bringData = obj.get_data("select * from articles;");
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
    // let bringData = await obj.put_data(`INSERT INTO mvc_exam.articles(idUser,idArticle,name,description) VALUES (UUID(),UUID(), ${name}, 'Jean');`);
    return res.json(`Se creo correctamente ${bod.name}`);
}

export const putProduct = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    console.log('actualiza un producto');
}

export const deleteProduct = async (req: Request, res: Response) => {

    const { id } = req.params;

    console.log('elimina un producto');
}

