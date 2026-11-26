
import Signup from '../Models/Signup.js';
import bcrypt from 'bcryptjs';
import { signAccessToken } from '../Utils/tokens.js';

const LoginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await Signup.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: 'Invalid email or password'
            });
        }

        // Check password
        let isPasswordValid;

        const isHashedPassword = /^\$2[aby]\$\d{2}\$/.test(user.password);

        if (isHashedPassword) {
            isPasswordValid = await bcrypt.compare(password, user.password);
        } else {
            // Support accounts created before password hashing
            isPasswordValid = user.password === password;

            // Upgrade old plaintext password to a bcrypt hash
            if (isPasswordValid) {
                user.password = await bcrypt.hash(password, 10);
                await user.save();
            }
        }

        if (!isPasswordValid) {
            return res.status(401).json({
                message: 'Invalid email or password'
            });
        }

        // Assign Admin role to the designated admin account
        if (user.email === 'mnajmuddin110@gmail.com' && user.role !== 'Admin') {
            user.role = 'Admin';
            await user.save();
        }

        // Create JWT access token
        const token = signAccessToken(user);

        return res.status(200).json({
            message: 'Login successful',
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
                role: user.role
            },
            token: token
        });

    } catch (error) {
        console.error('Login error:', error.message);

        return res.status(500).json({
            message: 'Internal server error'
        });
    }
};

export default LoginController;
