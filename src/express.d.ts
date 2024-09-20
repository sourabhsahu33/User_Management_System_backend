// src/express.d.ts

import { UserDocument } from './models/User'; // Adjust the path as necessary

declare global {
  namespace Express {
    interface Request {
      user?: string | UserDocument; // Modify this type based on what your middleware assigns
    }
  }
}
