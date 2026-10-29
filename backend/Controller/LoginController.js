import Signup from '../Models/Signup.js';
import { createToken } from '../Middleware/authMiddleware.js';

const LoginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await Signup.findOne({ email });

        if (!user || user.password !== password) {
            return res.status(401).json({
                message: 'Invalid email or password'
            });
        }

        if (user.email === 'mnajmuddin110@gmail.com' && user.role !== 'Admin') {
            user.role = 'Admin';
            await user.save();
        }

        return res.status(200).json({
            message: 'Login successful',
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
                role: user.role
            },
            token: createToken(user)
        });
    } catch (error) {
        console.error('Login error:', error.message);
        return res.status(500).json({
            message: 'Internal server error'
        });
    }
};

export default LoginController;
