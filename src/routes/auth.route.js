import express from 'express'
import rateLimit from 'express-rate-limit';
import { login, register } from '../controllers/auth.controller.js';
import { googleLogin } from '../controllers/google-auth.controller.js';
import { forgotPassword, resetPassword } from '../controllers/password-reset.controller.js';

import { refresh } from '../controllers/refresh.controller.js';
import { requireRefreshOrigin } from '../security/refresh-session.js';

const authRoute = express.Router()
const resetRequestLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 5, standardHeaders: true, legacyHeaders: false });
const resetCompletionLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 10, standardHeaders: true, legacyHeaders: false });
const googleLoginLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 30, standardHeaders: true, legacyHeaders: false });

// สมัครสมาชิก
authRoute.post('/refresh', requireRefreshOrigin, refresh);
authRoute.post('/login', login);
authRoute.post('/google', googleLoginLimiter, googleLogin);
authRoute.post('/forgot-password', resetRequestLimiter, forgotPassword);
authRoute.post('/reset-password', resetCompletionLimiter, resetPassword);

// เข้าสู่ระบบ (คืนค่า JWT Token)
authRoute.post('/register', register);
export default authRoute
