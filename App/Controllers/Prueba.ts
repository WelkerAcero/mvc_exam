import {Request, Response, Router} from 'express';
import body from 'body-parser'



    
    
        const router:Router =  Router();
    let parse = body.json()
        router.post('/prueba', parse, async (req:Request, res:Response) => {  

            const body = await req.body;

        res.send('Probando ' + body.id);

        })
    
export default router


