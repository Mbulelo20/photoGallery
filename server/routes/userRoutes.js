import express from 'express';
const userRouter = express.Router();
import {registerUser, loginUser, getUser} from '../controllers/user.js'
import {protect} from '../middleware/authMiddleware.js'

userRouter.post('/', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/me', protect, getUser)
export default userRouter;