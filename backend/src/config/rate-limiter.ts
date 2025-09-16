import { RateLimiterMemory } from 'rate-limiter-flexible';
import { NextFunction, Request, Response } from 'express';

const rateLimiter = new RateLimiterMemory({
  points: 50,   // 💡 Max requests allowed
  duration: 60, // ⏱️ Time window in seconds
});

export const rateLimiterMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await rateLimiter.consume(req.ip || 'unknown');
    console.log(`✅ Rate limit check passed 💚 for IP: ${req.ip} 🌍`);
    next();
  } catch {
    console.warn(`⚠️ Too many requests 🚫 from IP: ${req.ip} ❌`);
    res.status(429).json({ error: '⏳ Too many requests, please try again later.' });
  }
};
