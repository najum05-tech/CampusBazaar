import express from 'express';
import { SignupController } from '../Controller/SignupController.js';

const router = express.Router();

// Signup route
router.post('/Signup', SignupController);

export default router;