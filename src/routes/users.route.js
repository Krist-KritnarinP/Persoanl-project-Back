import express from 'express'
import { editMe, getMe, logout } from '../controllers/users.controller.js';
import authCheck from '../middlewares/auth.middleware.js';

import rateLimit from 'express-rate-limit';
import { exportAccount, deleteAccount } from '../controllers/account-data.controller.js';

const UsersRoute = express.Router()

const sensitiveLimiter = rateLimit({ windowMs: 15 * 60000, limit: 10, keyGenerator: req => String(req.user.id), standardHeaders: true, legacyHeaders: false });
UsersRoute.post('/me/export', authCheck, sensitiveLimiter, exportAccount);
UsersRoute.delete('/me', authCheck, sensitiveLimiter, deleteAccount);

// ดึงข้อมูลผู้ใช้ปัจจุบันที่ล็อกอินอยู่ (ใช้เช็ค Token และ User
UsersRoute.get('/me', authCheck, getMe);

// แก้ไขข้อมูลส่วนตัว (Username, Email)
UsersRoute.put('/me', authCheck,editMe );

UsersRoute.post('/logout', authCheck, logout);
export default UsersRoute