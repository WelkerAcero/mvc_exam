import { Request, Response } from "express";
import { ModelQuery } from "../Models/ModelQuery";

let obj = new ModelQuery();

export const getUsersBan = async (req: Request, res: Response) => {
    
    const body = req.body.idArticle;
    let bringData = obj.get_data(`SELECT * FROM mvc_exam.usersBlock WHERE iduserblock = ${body} ;`);
    const data = await bringData;
    console.log(data);
    return res.json(data);
    
} 

export const postUserBan = async (req: Request, res: Response) => {
    
    //Falta validaciones
   
    const bod = req.body;
    let bringData = obj.put_data(`INSERT INTO mvc_exam.usersBlock(idUserBlock,idUser,idArticle) VALUES (UUID(),UUID(), UUID() );`);
    return res.json(`Se creo correctamente`);

} 

export const putUserBan = async (req: Request, res: Response) => {
    
    const { idArticle } = req.params;
    const { idUser } = req.params;
    const { body } = req;
    
    console.log('actualiza un usuario bandeado de un articulo');
} 

export const deleteUserBan = async (req: Request, res: Response) => {
    
    const { id } = req.params;
    const { idUser } = req.params;


    
    console.log('elimina un usuario bandeado de un articulo');
} 

