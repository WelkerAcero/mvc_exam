import { Request, Response } from "express";


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
    
    const { idArticle } = req.params;
    const { body } = req;

    console.log('Insertar un Comentario en un articulo');
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

