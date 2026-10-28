import Signup from '../Models/Signup.js';

const LoginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await Signup.findOne({ email });

        if (!user || user.password !== password) {
            return res.status(401).json({
                message: 'Invalid email or password'
            });
        }

        return res.status(200).json({
            message: 'Login successful',
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email
            }
        });
    } catch (error) {
        console.error('Login error:', error.message);
        return res.status(500).json({
            message: 'Internal server error'
        });
    }
};

export default LoginController;