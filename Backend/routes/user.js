import express from 'express';
import { deleteUser, getUser } from '../controlllers/user.js';

const router = express.Router();

// DELETE USER
router.delete('/:id', deleteUser);

// GET USER
router.get('/:id', getUser);

export default router;