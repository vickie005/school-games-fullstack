import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { roleEnum } from '../drizzle/schema';

// Define JWT payload type matching your schema
interface JwtPayload {
    sub: string;
    user_id: number;
    fullname: string;
    email: string;
    role: typeof roleEnum.enumValues[number]; // 'user' | 'admin' | 'superadmin' | 'disabled'
    exp: number;
}

// Define role hierarchy for permission checking
const ROLE_HIERARCHY = {
  'disabled': 0,
  'user': 1,
  'admin': 2,
  'superadmin': 3
} as const;

type RoleType = keyof typeof ROLE_HIERARCHY;

export const checkRoles = (requiredRole: 'admin' | 'user' | 'superadmin' | 'both' | 'any') => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ message: 'Unauthorized - No token provided' });
      return;
    }

    const token = authHeader.split(' ')[1];
    const secret = process.env.JWT_SECRET as string;

    if (!secret) {
      res.status(500).json({ message: 'Server configuration error' });
      return;
    }

    try {
      const decoded = jwt.verify(token, secret) as JwtPayload;
      (req as Request & { user: JwtPayload }).user = decoded; // Attach user to request object

      // Check if user is disabled
      if (decoded.role === 'disabled') {
        res.status(403).json({ message: 'Account is disabled' });
        return;
      }

      // Role verification with hierarchy support
      switch (requiredRole) {
        case 'any':
          // Any authenticated user (except disabled)
          return next();
          
        case 'both':
          // Both user and admin roles (but not superadmin)
          if (decoded.role === 'user' || decoded.role === 'admin') {
            return next();
          }
          break;
          
        case 'user':
          // User role or higher
          if (ROLE_HIERARCHY[decoded.role as RoleType] >= ROLE_HIERARCHY.user) {
            return next();
          }
          break;
          
        case 'admin':
          // Admin role or higher
          if (ROLE_HIERARCHY[decoded.role as RoleType] >= ROLE_HIERARCHY.admin) {
            return next();
          }
          break;
          
        case 'superadmin':
          // Only superadmin role
          if (decoded.role === 'superadmin') {
            return next();
          }
          break;
      }

      res.status(403).json({
        message: `Forbidden - Requires ${requiredRole} role`,
        requiredRole,
        userRole: decoded.role,
      });

    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        res.status(401).json({ message: 'Token expired' });
      } else if (error instanceof jwt.JsonWebTokenError) {
        res.status(401).json({ message: 'Invalid token' });
      } else {
        res.status(401).json({ message: 'Authentication failed' });
      }
    }
  };
};

// Specific role middlewares
export const adminRoleAuth = checkRoles('admin');
export const userRoleAuth = checkRoles('user');
export const superadminRoleAuth = checkRoles('superadmin');
export const bothRoleAuth = checkRoles('both');
export const anyRoleAuth = checkRoles('any');

// Optional: Enhanced role checker with permissions
export const checkPermissions = (_requiredPermissions: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // Implement permission checking logic here
    // You might want to query the database for user permissions
    next();
  };
};
