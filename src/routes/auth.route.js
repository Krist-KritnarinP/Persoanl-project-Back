import express from 'express'
import { login, register } from '../controllers/auth.controller.js';

const authRoute = express.Router()

// สมัครสมาชิก
authRoute.post('/login', login);

// เข้าสู่ระบบ (คืนค่า JWT Token)
authRoute.post('/register', register);
;

export default authRoute