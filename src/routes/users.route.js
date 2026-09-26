import express from 'express'
import { editMe, getMe, logout } from '../controllers/users.controller.js';
import authCheck from '../middlewares/auth.middleware.js';

const UsersRoute = express.Router()

// ดึงข้อมูลผู้ใช้ปัจจุบันที่ล็อกอินอยู่ (ใช้เช็ค Token และ User
UsersRoute.get('/me', authCheck, getMe);

// แก้ไขข้อมูลส่วนตัว (Username, Email)
UsersRoute.put('/me', authCheck,editMe );

UsersRoute.post('/logout', authCheck, logout);
export default UsersRoute