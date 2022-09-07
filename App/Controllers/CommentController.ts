import { Request, Response } from "express";
import { ModelQuery } from "../Models/ModelQuery";
let obj = new ModelQuery();

export const getComments = async (req: Request, res: Response) => {
    
    const { idArticle } = req.params;
    
    console.log('Trae todos los comentarios de un articulo en especifico');
} 

export const getComment = async (req: Request, res: Response) => {
    
    const { idArticle } = req.params;
    const { idUser } = req.params;
    
    console.log('Trae un Comentario de un usuario en especifico');
} 

export const postComment = async (req: Request, res: Response) => {
    
    const idArticle  = req.params.idArticle;
    const bod = req.body;
    
    let bringData = obj.put_data(`INSERT INTO mvc_exam.comments(idComment,idUser,idArticle,comment) VALUES (UUID(),UUID(), UUID(), '${ bod.description }');`);
    return res.json(`Se creo correctamente ${bod.description}`);
} 

export const putComment = async (req: Request, res: Response) => {
    
    const { idArticle } = req.params;
    const { idComment } = req.params;
    const { body } = req;
    
    console.log('actualiza un Comentario de un articulo');
} 

export const deleteComment = async (req: Request, res: Response) => {
    
    const { id } = req.params;
    const { idComment } = req.params;


    
    console.log('elimina un Comentario de un articulo');
} 

