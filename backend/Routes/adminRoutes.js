import express from 'express';
import { addContent, addUser, deleteContent, deleteUser, getContent, getSingleContent, getSingleUser, getUsers, updateContent, updateUser } from '../Controller/adminController.js';
import { requireAdmin, requireAuth } from '../Middleware/authMiddleware.js';

const router = express.Router();
router.use(requireAuth, requireAdmin);
router.get('/Admin/Users', getUsers);
router.post('/Admin/Users', addUser);
router.get('/Admin/Users/:id', getSingleUser);
router.put('/Admin/Users/:id', updateUser);
router.delete('/Admin/Users/:id', deleteUser);
router.get('/Admin/:type', getContent);
router.get('/Admin/:type/:id', getSingleContent);
router.post('/Admin/:type', addContent);
router.put('/Admin/:type/:id', updateContent);
router.delete('/Admin/:type/:id', deleteContent);
export default router;
