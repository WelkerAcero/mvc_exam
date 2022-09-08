import { Router } from 'express';
import { ProductController } from '../Controllers/ProductController';
import body from 'body-parser'
const objProduct = new ProductController();

const router = Router();

const parse = body.json() //Creado para poder usar el body

router.get('/product/', parse, objProduct.getProducts);
router.get('/product/:id', parse, objProduct.getProduct);
router.post('/product/', parse, objProduct.postProduct);
router.put('/product/:id', parse, objProduct.putProduct);
router.delete('/product/:id', objProduct.deleteProduct);


export default router;