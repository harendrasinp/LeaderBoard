import express from 'express';
const router = express.Router();
import { getUsers, addUser, claimPoints, getLeaderboard } from '../controllers/userController.js';


router.get('/', getUsers);
router.post('/add', addUser);
router.post('/claim/:id', claimPoints);
router.get('/leaderboard', getLeaderboard);

export default router;
