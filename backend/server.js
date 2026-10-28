import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { SignupController } from './Controller/SignupController.js';
import signupRoutes from './Routes/signupRoutes.js';
import loginRoutes from './Routes/loginRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/pages', (req, res, next) => {
    console.log("Request received:", req.method, req.url);
    next();
});
// Signup route
app.use('/pages', signupRoutes);

// Login route
app.use('/pages', loginRoutes);


app.listen(process.env.port || 5000, () => {
    console.log('Server is running on port 5000');
});


// Connect to MongoDB

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('Connected to MongoDB');
}).catch((error)=>{
    console.error('Error connecting to MongoDB:', error);
});

export default app;
