import { Request, Response } from "express";


export const getUsers = async (req: Request, res: Response) => {
    console.log('Trae todos los Usuarios');
} 

export const getUser = async (req: Request, res: Response) => {
    
    const { id } = req.params;
    
    console.log('Trae un Usuario');
} 

export const postUser = async (req: Request, res: Response) => {
    
    const { body } = req;

    console.log('Insertar un Usuario');
} 

export const putUser = async (req: Request, res: Response) => {
    
    const { id } = req.params;
    const { body } = req;
    
    console.log('actualiza un Usuario');
} 

export const deleteUser = async (req: Request, res: Response) => {
    
    const { id } = req.params;
    
    console.log('elimina un Usuario');
} 

