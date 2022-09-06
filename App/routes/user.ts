import { Router } from 'express';
import { getUsers, getUser, postUser, putUser, deleteUser,  } from '../Controllers/UserController';

const router = Router();

router.get('/user/', getUsers);
router.get('/user/:id', getUser);
router.post('/user/', postUser);
router.put('/user/:id', putUser);
router.delete('/user/:id', deleteUser);


export default router;