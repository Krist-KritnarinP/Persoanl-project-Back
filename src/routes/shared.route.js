import express from 'express';
import { getSharedTrip } from '../controllers/trips.controller.js';

const SharedRoute = express.Router();

// Public — ดูทริปผ่านลิงก์แชร์โดยไม่ต้อง login: GET /api/shared/:token
SharedRoute.get('/:token', getSharedTrip);

export default SharedRoute
