import express from 'express';

import {
    listUsers,
    getProfile
} from '../controllers/userController.js';

import authMiddleware from '../middlewares/authMiddleware.js';
import artistMiddleware from '../middlewares/artistMiddleware.js';

const router = express.Router();

router.get(
    '/profile',
    authMiddleware,
    getProfile
);

router.get(
    '/',
    authMiddleware,
    artistMiddleware,
    listUsers
);

export default router;