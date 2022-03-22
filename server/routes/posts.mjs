import express from 'express';
import {getPhotos, uploadPhoto, updatePhoto, deletePhoto} from '../controllers/posts.js'
import {protect} from '../middleware/authMiddleware.js'
const router = express.Router();

router.get('/', protect, getPhotos)
router.post('/', protect, uploadPhoto)
router.patch('/:id', protect, updatePhoto)
router.delete('/:id', protect, deletePhoto)

export default router;