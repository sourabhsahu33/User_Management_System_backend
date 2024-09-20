import express from 'express';
import User from '../models/User';  // Adjust path as necessary
import { verifyToken } from '../middleware/authMiddleware';  // Adjust path as necessary

const router = express.Router();

// Define an interface that extends the Request object to include the `user` property
interface AuthenticatedRequest extends express.Request {
  user?: string; // Adjust the type according to how you are storing user information
}

// Get user profile (protected route)
router.get('/profile', verifyToken, async (req: AuthenticatedRequest, res) => {
  try {
    const userId = req.user as string; // Cast `req.user` to string
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'No user found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
