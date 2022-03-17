export default (photos = [], action) => {
    switch (action.type) {
        case 'DELETE':
            return photos.filter((photo) => photo._id !== action.payload )
        case 'UPDATE':
            return photos.map((photo) => photo._id === action.payload._id  ? action.payload : photo )
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...photos, action.payload]
        
        default:
            return photos;
    }
}