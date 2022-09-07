import { Router } from 'express';
import { getUsersBan, getUserBan, postUserBan, deleteUserBan  } from '../Controllers/UserBanController';
import body from 'body-parser'

const router = Router();
const parse = body.json()

router.get('/userban/', parse, getUsersBan);
router.get('/userban/:idArticle',parse, getUserBan);
router.post('/userban',parse, postUserBan);

router.delete('/userban/:idUserBlock',parse, deleteUserBan);

export default router;
