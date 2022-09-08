import { Router } from 'express';
import { ProductController } from '../Controllers/ProductController';
import body from 'body-parser'
const objProduct = new ProductController();

const router = Router();

// const parse = body.json() //Creado para poder usar el body

router.get('/product/',  objProduct.getProducts);
router.get('/product/:id',  objProduct.getProduct);
router.post('/product/',  objProduct.postProduct);
router.put('/product/:id',  objProduct.putProduct);
router.delete('/product/:id', objProduct.deleteProduct);


export default router;