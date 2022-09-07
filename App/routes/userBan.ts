import { Router } from 'express';
import { getUsersBan, postUserBan, putUserBan, deleteUserBan  } from '../Controllers/UserBanController';
import body from 'body-parser'

const router = Router();
const parse = body.json()

router.get('/userban/:idArticle',parse, getUsersBan);
router.post('/userban',parse, postUserBan);
router.put('/userban/:idArticle/:idUser',parse, putUserBan);
router.delete('/userban/:idArticle/:idUser',parse, deleteUserBan);

export default router;