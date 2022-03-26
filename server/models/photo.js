import mongoose from 'mongoose';

const photoSchema = mongoose.Schema({
    tags: [String],
    photo: String,
    createdAt: {
        type: Date, default: new Date(),
    }
})

const PostPhoto = mongoose.model('PostPhoto', photoSchema);

export default PostPhoto;