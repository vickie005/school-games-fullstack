import { Router } from 'express';
import {
  createUserController,
  loginUserController,
  getAllUsersController,
  getUserByIdController,
  updateUserByIdController,
  deactivateUserController,
  getCurrentUserProfileController,
} from './auth.controllers';
import { 
  adminRoleAuth, 
  bothRoleAuth, 
  superadminRoleAuth, 
  anyRoleAuth 
} from '../middleware/bearAuth';

const AuthRouter = Router();

// Public routes (no authentication required)
AuthRouter.post('/register', createUserController);
AuthRouter.post('/login', loginUserController);

// User profile routes (any authenticated user)
AuthRouter.get('/profile', anyRoleAuth, getCurrentUserProfileController);

// Admin routes (admin or superadmin)
AuthRouter.get('/users', adminRoleAuth, getAllUsersController);
AuthRouter.get('/users/:id', adminRoleAuth, getUserByIdController);
AuthRouter.put('/users/:id', adminRoleAuth, updateUserByIdController);

// Superadmin only routes
AuthRouter.post('/users/:id/deactivate', superadminRoleAuth, deactivateUserController);

export default AuthRouter;
