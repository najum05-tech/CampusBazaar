import express from 'express';
import { getProfile, updateProfile } from '../Controller/profileController.js';
import { requireAuth } from '../Middleware/authMiddleware.js';

const router = express.Router();

router.get('/Profile/:id', requireAuth, getProfile);
router.put('/Profile/:id', requireAuth, updateProfile);

export default router;
