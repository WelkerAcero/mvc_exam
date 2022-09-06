import { Request, Response } from "express";
import { ProductModel } from "../Models/ProductModel";

let obj = new ProductModel();

export const getProducts = async (req: Request, res: Response) => {
    const { body } = req;
    // return obj.get_data(body);
    let bringData = obj.get_data("select * from articles");
    return res.json({ bringData });
}

export const getProduct = async (req: Request, res: Response) => {

    const { id } = req.params;

    console.log('Trae un producto');
}


export const postProduct = async (req: Request, res: Response) => {
    
    const { body } = req;
    let bringData = obj.put_data("INSERT INTO mvc_exam.articles (campos articles) VALUES (" + `${body.name}` + ", " + `${body.lastname}` + ", " + `${body.age}` + ") ");
    return res.json({ bringData }); }

export const putProduct = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    console.log('actualiza un producto');
}

export const deleteProduct = async (req: Request, res: Response) => {

    const { id } = req.params;

    console.log('elimina un producto');
}

