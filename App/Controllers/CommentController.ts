import { Request, Response } from "express";
import { ModelQuery } from "../Models/ModelQuery";
let obj = new ModelQuery();

export const getComments = async (req: Request, res: Response) => {
        
    let bringData = obj.get_data(`select * from mvc_exam.comments;`);
     const data = await bringData;
    console.log(data);
    return res.json(data.rows);
} 

export const getComment = async (req: Request, res: Response) => {
    
    const  idArticle  = req.params.idArticle;
    const idComment  = req.params.idComment;
    const idUser = req.params.idUser;
    
    let bringData = obj.get_data(`select * from mvc_exam.comments where idArticle = ${idArticle} and idComment = ${idComment} and idUser = ${idUser};`);
    const data = await bringData;
    console.log(data);
    return res.json(data.rows);
} 

export const postComment = async (req: Request, res: Response) => {
    
    const bod = req.body;
    
    obj.put_data(`INSERT INTO mvc_exam.comments(idComment,idUser,idArticle,comment) VALUES (UUID(),UUID(), UUID(), '${ bod.comment }');`);
    return res.json(`Se creo correctamente ${bod.comment}`);
} 

export const putComment = async (req: Request, res: Response) => {
    
    const  idArticle  = req.params.idArticle;
    const  idComment  = req.params.idComment;
    const idUser = req.params.idUser;

    const bod = req.body;
    
    obj.get_data(`UPDATE mvc_exam.comments SET comment = '${bod.comment}' WHERE idArticle = ${idArticle} AND idComment = ${idComment} and idUser = ${idUser};`);
    return res.json(`Se actualizo correctamente ${bod.comment}`);
} 

export const deleteComment = async (req: Request, res: Response) => {
    
    const  idComment  = req.params.idComment;

    obj.get_data(`DELETE FROM mvc_exam.comments WHERE idComment = ${idComment}`);
    return res.json('Se eliminó el articulo' + idComment)
} 

