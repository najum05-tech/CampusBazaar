import express from 'express';
import  LoginController  from '../Controller/LoginController.js';

const router = express.Router();

router.post('/Login', LoginController);

export default router;