import { Request, Response } from "express";
import { ModelQuery } from "../Models/ModelQuery";

let obj = new ModelQuery();



export const getUsers = async (req: Request, res: Response) => {
    let bringData = obj.get_data("SELECT * FROM mvc_exam.users;");
    const data = await bringData;
    console.log(data);
    return res.json(data.rows);
} 

export const getUser = async (req: Request, res: Response) => {
    
    const  id  = req.params.id;

    let bringData = obj.get_data(`SELECT * FROM mvc_exam.users WHERE idUser = ${id};`);
    const data = await bringData;
    console.log(data);
    return res.json(data.rows);
} 

export const postUser = async (req: Request, res: Response) => {
    
    const bod = req.body;
    
    let bringData = obj.put_data(`INSERT INTO mvc_exam.users(idUser,age,lastname,name) VALUES (UUID(), ${bod.age}, '${bod.lastname}', '${bod.name}');`);
    return res.json(`Se creó correctamente ${bod.name}`);
} 

export const putUser = async (req: Request, res: Response) => {
    
    const id  = req.params.id;
    const bod = req.body;
    let deleted = obj.get_data(`UPDATE mvc_exam.users SET name = '${bod.name}', lastname = '${bod.lastname}', age = ${bod.age} WHERE iduser = ${id};`);
    return res.json('Se actualizó el articulo ' + id)
} 

export const deleteUser = async (req: Request, res: Response) => {
    
    const id  = req.params.id;
    let deleted = obj.get_data(`DELETE FROM mvc_exam.users WHERE iduser = ${id};`);
    return res.json('Se eliminó el articulo' + id)
} 

