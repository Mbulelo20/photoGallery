import mongoose from 'mongoose';
import PostPhoto from '../models/photo.js'

export const getPhotos = async (req, res) => {
    
    try {
        const photos = await PostPhoto.find()
        res.status(200).json(photos)
    } catch (error) {
        
    }
}

export const uploadPhoto =  async (req, res) => {
    const photo = req.body;

    const newPhoto = PostPhoto(photo);

    try {
        await newPhoto.save();
        res.status(201).json(newPhoto)
    } catch (error) {
        
    }
}

export const updatePhoto = async (req, res) => {
    const { id: _id } = req.params;

    const photo = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No photo with that id')

    const updatedPhoto = await PostPhoto.findByIdAndUpdate(_id, photo, {new: true})

    res.json(updatedPhoto)
}

export const deletePhoto = async(req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostPhoto.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}