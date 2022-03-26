import mongoose from 'mongoose';
import PostPhoto from '../models/photo.js'

export const getPhotos = async (req, res) => {
    
    try {
        const photos = await PostPhoto.find()
        res.status(200).json(photos)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const uploadPhoto =  async (req, res) => {
    const { photo, tags } = req.body;
    const newPhoto = new PostPhoto({ photo, tags })

    try {
        const photo = newPhoto.save();
        res.status(201).json(photo)
    } catch (error) {
        console.error(error)
    }
}

export const updatePhoto = async (req, res) => {
    const { id: _id } = req.params;
    const photo = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No photo with that id');
    const updatedPhoto = await PostPhoto.findByIdAndUpdate(_id, photo, {new: true})
    res.json(updatedPhoto)
}

export const deletePhoto = async(req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostPhoto.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}