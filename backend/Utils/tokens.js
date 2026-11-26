
import jwt from 'jsonwebtoken';

const ACCESS_TTL = '15m';

// Create access token
export const signAccessToken = (user) =>
    jwt.sign(
        { role: user.role },
        process.env.ACCESS_TOKEN_SECRET,
        {
            algorithm: 'HS256',
            subject: String(user._id),
            expiresIn: ACCESS_TTL
        }
    );

// Verify access token
export const verifyAccessToken = (token) =>
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        {
            algorithms: ['HS256']
        }
    );
