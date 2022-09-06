import { Router } from 'express';
import { getUsersBan, postUserBan, putUserBan, deleteUserBan  } from '../Controllers/UserBanController';

const router = Router();

router.get('/userban/:idArticle', getUsersBan);
router.post('/userban/:idArticle', postUserBan);
router.put('/userban/:idArticle/:idUser', putUserBan);
router.delete('/userban/:idArticle/:idUser', deleteUserBan);


export default router;