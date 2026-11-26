
import { verifyAccessToken } from '../Utils/tokens.js';

// Verify JWT token
export const requireAuth = (req, res, next) => {
    try {
        // Retrieve token from Authorization header
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                message: 'Authentication required'
            });
        }

        const token = authHeader.split(' ')[1];

        // Verify token
        const payload = verifyAccessToken(token);

        // Store authenticated user information
        req.user = {
            id: payload.sub,
            _id: payload.sub,
            role: payload.role
        };

        next();

    } catch (error) {
        return res.status(401).json({
            message: 'Invalid or expired token'
        });
    }
};

// Check user role
export const requireAdmin = (req, res, next) => {
    if (req.user.role !== 'Admin') {
        return res.status(403).json({
            message: 'Admin access required'
        });
    }

    next();
};
