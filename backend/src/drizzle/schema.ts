import { pgTable, serial, text, boolean, timestamp, pgEnum, integer, varchar } from 'drizzle-orm/pg-core';


// Enum
export const roleEnum = pgEnum('role', ['user', 'admin', 'superadmin','disabled']);

// User table schema
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullname: text('fullname').notNull(),
  email: text('email').notNull().unique(),
  phoneNumber: varchar('phone_number', { length: 20 }).notNull().unique(),
  password: text('password').notNull(),
  role: roleEnum('role').notNull().default('user'),
  isActive: boolean('is_active').notNull().default(true),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
  lastLoginAt: timestamp('last_login_at'),
});

// infer types
export type TIUser = typeof users.$inferInsert
export type TSUser = typeof users.$inferSelect

// Type aliases for better readability
export type User = TSUser