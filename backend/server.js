import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {loginController} from './Controller/loginController.js';
controllers/loginController.js


const app = express();
app.use(cors());
app.use(express.json());

app.post('/pages/Login', (req, res) => {
    console.log('Login request received/pages/Login');
    res.send('Backend is working!');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})