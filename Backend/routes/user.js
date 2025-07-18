import express from 'express';
import { deleteUser} from '../controllers/user.js';
import { getAllUser} from '../controllers/user.js';

const router = express.Router();

// DELETE USER
router.delete('/', deleteUser);

// GET USER
router.get('/', getAllUser);

export default router;