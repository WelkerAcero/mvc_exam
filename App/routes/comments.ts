import { Router } from 'express';
import { getComments, getComment, postComment, putComment, deleteComment  } from '../Controllers/CommentController';
import body from 'body-parser'

const router = Router();

const parse = body.json() //Creado para poder usar el body

router.get('/comment/:idArticle', parse, getComments);
router.get('/comment/:idArticle/:idUser', parse, getComment);
router.post('/comment/:idArticle', parse, postComment);
router.put('/comment/:idArticle/:idComment', parse, putComment);
router.delete('/comment/:idArticle/:idComment', deleteComment);


export default router;