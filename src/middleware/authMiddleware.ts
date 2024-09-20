import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Define an interface that extends the Request object to include the `user` property
interface AuthenticatedRequest extends Request {
  user?: string;
}

export const verifyToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access Denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    req.user = verified.id; // Attach the user ID to the request
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid Token' });
  }
};
