import { Request, Response } from "express";


export const getProducts = async (req: Request, res: Response) => {
    console.log('Trae todos los productos');
} 

export const getProduct = async (req: Request, res: Response) => {
    
    const { id } = req.params;
    
    console.log('Trae un producto');
} 

export const postProduct = async (req: Request, res: Response) => {
    
    const { body } = req;

    console.log('Insertar un producto');
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

