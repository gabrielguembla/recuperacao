import express from 'express';

import { listSongs } from '../controllers/songController.js';

import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get(
    '/',
    authMiddleware,
    listSongs
);

export default router;