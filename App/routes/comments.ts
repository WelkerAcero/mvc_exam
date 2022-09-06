import { Router } from 'express';
import { getComments, getComment, postComment, putComment, deleteComment  } from '../Controllers/CommentController';

const router = Router();

router.get('/comment/:idArticle', getComments);
router.get('/comment/:idArticle/:idUser', getComment);
router.post('/comment/:idArticle', postComment);
router.put('/comment/:idArticle/:idComment', putComment);
router.delete('/comment/:idArticle/:idComment', deleteComment);


export default router;