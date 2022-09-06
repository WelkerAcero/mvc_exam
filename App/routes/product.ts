import { Router } from 'express';
import { getProducts, getProduct, postProduct, putProduct, deleteProduct,  } from '../Controllers/ProductController';

const router = Router();

router.get('/product/', getProducts);
router.get('/product/:id', getProduct);
router.post('/product/', postProduct);
router.put('/product/:id', putProduct);
router.delete('/product/:id', deleteProduct);


export default router;