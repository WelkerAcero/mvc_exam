import { Router } from 'express';
import { getComments, getComment, postComment, putComment, deleteComment  } from '../Controllers/CommentController';
import body from 'body-parser'

const router = Router();

const parse = body.json() //Creado para poder usar el body

router.get('/comment/', parse, getComments);
router.get('/comment/:idArticle/:idComment/:idUser', parse, getComment);
router.post('/comment/', parse, postComment);
router.put('/comment/:idArticle/:idComment/:idUser', parse, putComment);
router.delete('/comment/:idComment', deleteComment);


export default router;