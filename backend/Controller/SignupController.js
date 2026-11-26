
import Signup from '../Models/Signup.js';
import bcrypt from 'bcryptjs';

export const SignupController = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new Signup({
            fullName: fullName,
            email: email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).send("User registered successfully");

    } catch (error) {
        console.error("Signup error:", error.message);

        res.status(500).send("Error registering user: " + error.message);
    }
};
