import { Request, Response } from "express";


export const getUsersBan = async (req: Request, res: Response) => {
    
    const { idArticle } = req.params;
    
    console.log('Trae todos los usuarios baneados de un articulo');
} 

export const postUserBan = async (req: Request, res: Response) => {
    
    const { idArticle } = req.params;
    const { body } = req;

    console.log('Insertar un usuario bandeado en un articulo');
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

