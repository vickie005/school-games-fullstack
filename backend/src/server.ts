import express from 'express';
// import type { Request, Response } from 'express';
import { logger } from './config/logger';
import { rateLimiterMiddleware } from './config/rate-limiter';
import db from './drizzle/db';
import { users } from './drizzle/schema';
import cors from 'cors';
import AuthRouter from './auth/auth.router';


const initilizeApp = () => {
  const app = express();
  app.use(express.json());
  app.use(cors({
    origin: '*',// accept all IP addresses
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }));

  app.use(logger);
  // Rate Limiter middleware
  app.use(rateLimiterMiddleware);


  // Database connection test route
  app.get('/test-db', async (req, res) => {
    try {
      console.log('Testing database connection...');
      const result = await db.select().from(users).limit(1);
      console.log('Database connection successful:', result);
      res.json({ success: true, result });
    } catch (err: unknown) {
      console.error('Database connection failed:', err);
      if (err instanceof Error) {
        res.status(500).json({ success: false, error: err.message });
      } else {
        res.status(500).json({ success: false, error: 'Unknown database error' });
      }
    }
  });

  // Mount auth routes
  app.use('/api/auth', AuthRouter);

  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  return app;
};

const app = initilizeApp();
export default app;
