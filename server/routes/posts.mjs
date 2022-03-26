import express from 'express';
import {getPhotos, uploadPhoto, updatePhoto, deletePhoto} from '../controllers/posts.js'
// import {protect} from '../middleware/authMiddleware.js'
const router = express.Router();

router.get('/', getPhotos)
router.post('/', uploadPhoto)
router.patch('/:id', updatePhoto)
router.delete('/:id', deletePhoto)

export default router;