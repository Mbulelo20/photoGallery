import axios from 'axios';

const url = 'http://localhost:5000/photos';

export const fetchPhotos = () => axios.get('http://localhost:5000/photos');
export const uploadPhoto = (newPhoto) => axios.post('http://localhost:5000/photos', newPhoto);
export const updatePhoto = (id, updatedPhoto) => axios.patch(`${url}/${id}`, updatedPhoto);
export const deletePhoto = (id) => axios.delete(`${url}/${id}`);