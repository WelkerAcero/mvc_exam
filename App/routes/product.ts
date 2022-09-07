import { Router } from 'express';
import { getProducts, getProduct, postProduct, putProduct, deleteProduct } from '../Controllers/ProductController';
import body from 'body-parser'

const router = Router();

const parse = body.json() //Creado para poder usar el body


router.get('/product/', parse, getProducts);
router.get('/product/:id', parse, getProduct);
router.post('/product/', parse, postProduct);
router.put('/product/:id', putProduct);
router.delete('/product/:id', deleteProduct);


export default router;