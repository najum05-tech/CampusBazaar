import express from 'express';
import { addContact } from '../Controller/contactController.js';

const router = express.Router();

router.post('/Contact', addContact);

export default router;
