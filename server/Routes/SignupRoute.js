import express from 'express';
import { SignupController } from '../Controller/SignupController.js';

const router = express.Router();

router.post('/signup', SignupController)

export default router;