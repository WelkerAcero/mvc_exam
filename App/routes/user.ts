import { Router } from 'express';
import { getUsers, getUser, postUser, putUser, deleteUser,  } from '../Controllers/UserController';
import body from 'body-parser'

const router = Router();

const parse = body.json()

router.get('/user/', parse, getUsers);
router.get('/user/:id', parse, getUser);
router.post('/user/', parse, postUser);
router.put('/user/:id', parse, putUser);
router.delete('/user/:id', deleteUser);


export default router;