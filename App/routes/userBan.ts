import { Router } from 'express';
import { getUsersBan, getUserBan, postUserBan, putUserBan, deleteUserBan  } from '../Controllers/UserBanController';
import body from 'body-parser'

const router = Router();
const parse = body.json()

router.get('/userban/', parse, getUsersBan);
router.get('/userban/:idArticle',parse, getUserBan);
router.post('/userban',parse, postUserBan);
router.put('/userban/:idArticle/:idUser',parse, putUserBan);
router.delete('/userban/:idUserBlock',parse, deleteUserBan);

export default router;