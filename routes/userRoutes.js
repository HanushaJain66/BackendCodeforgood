import express from 'express';
import { signUpUser , LoginUser } from '../controller/userController.js';
const userRoutes = express.Router();

userRoutes.route('/sign')
.post(signUpUser);

userRoutes.route('/login')
.post(LoginUser);

userRoutes.route('/user');

export default userRoutes;