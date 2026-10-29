import crypto from 'crypto';
import Signup from '../Models/Signup.js';

const secret = process.env.AUTH_SECRET || 'campusbazaar-auth-secret';

export const createToken = (user) => {
  const payload = Buffer.from(JSON.stringify({ id: user._id, email: user.email })).toString('base64url');
  const signature = crypto.createHmac('sha256', secret).update(payload).digest('base64url');
  return `${payload}.${signature}`;
};

export const requireAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ message: 'Authentication required' });
    const [payload, signature] = token.split('.');
    const expected = crypto.createHmac('sha256', secret).update(payload).digest('base64url');
    if (!signature || !crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return res.status(401).json({ message: 'Invalid token' });
    const { id } = JSON.parse(Buffer.from(payload, 'base64url').toString());
    const user = await Signup.findById(id);
    if (!user) return res.status(401).json({ message: 'User not found' });
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export const requireAdmin = (req, res, next) => {
  if (req.user.role !== 'Admin') return res.status(403).json({ message: 'Admin access required' });
  next();
};
