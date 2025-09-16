import { z } from 'zod';

// Validation schema for creating a user, aligned with database schema
export const createUserSchema = z.object({
  fullname: z.string().min(1, 'Full name is required').max(100, 'Full name must be less than 100 characters'),
  email: z.string().email('Invalid email format'),
  phoneNumber: z.string().min(7, 'Phone number is required').max(20, 'Phone number must be less than 20 characters'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  // Role enum must match the database enum: ['user','admin','superadmin','disabled']
  role: z.enum(['user', 'admin', 'superadmin', 'disabled']).optional().default('user'),
});

// Validation schema for login
export const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(1, 'Password is required'),
});

// Validation schema for updating a user; all fields are optional
export const updateUserSchema = z.object({
  fullname: z.string().min(1).max(100).optional(),
  email: z.string().email().optional(),
  phoneNumber: z.string().min(7).max(20).optional(),
  role: z.enum(['user', 'admin', 'superadmin', 'disabled']).optional(),
  isActive: z.boolean().optional(),
  password: z.string().min(6).optional(),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
