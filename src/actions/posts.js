import * as api from '../api';

// Action createHttpErrorConstructor
export const getPhotos = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPhotos();
        dispatch({ type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message);
    }
    
}

export const uploadPhoto =  (photo) => async (dispatch) => {
    try {
        const {data} = await api.uploadPhoto(photo);
        dispatch({type: 'CREATE', payload: data})
        console.log('data:',data)
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePhoto = (id, photo) => async (dispatch) => {
    try {
        const {data} = await api.updatePhoto(id, photo)
        dispatch({type: 'UPDATE', payload: data})
    } catch(error) { 
        console.log(error)
    }
    
}

export const deletePhoto = (id) => async(dispatch) => {
    try {
        await api.deletePhoto(id);

        dispatch({type: 'DELETE', payload: id})
    } catch (error) {
        console.log(error)
    }
}