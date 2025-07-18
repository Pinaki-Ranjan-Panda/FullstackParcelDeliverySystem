import express from 'express';
//const {registerUser} = require('../controllers/auth');
import { registerUser } from '../controllers/auth.js'; 
import { loginUser } from '../controllers/auth.js';
//const {loginUser} = require('../controllers/auth');
const router = express.Router();

// Register a new user
router.post('/register', registerUser);
// Login an existing user
router.post('/login', loginUser);

// ...define your routes here...

export default router;
