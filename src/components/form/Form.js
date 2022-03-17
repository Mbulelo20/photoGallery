import React, { useState, useEffect } from 'react';
import {Button} from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useSelector} from 'react-redux'

import {uploadPhoto, updatePhoto} from '../../actions/posts'
import {useDispatch} from 'react-redux'


const Form = ({currentId, setCurrentId}) => {
  
  const [photoData, setPhotoData] = useState({tags: '',  photo:''})
  const dispatch = useDispatch() 
  const photofile = useSelector((state) => currentId ? state.photos.find((p) => p._id === currentId  ) : null)
 
  useEffect(() => {
    if(photofile) {
      console.log(photofile);
      setPhotoData(photofile)
    }
    
  }, [photofile])
  
 
  const handleSubmit  = (e) => {
    e.preventDefault();
    if(currentId){
    dispatch(updatePhoto(currentId, photoData))
    
    }else{
      dispatch(uploadPhoto(photoData))
    }
    clear();
  }

  const clear  = () => {
    setPhotoData({tags: ''})
      setCurrentId(null)
  }
  return (
    <div style={{marginTop:'2em'}}>
      <form onSubmit={handleSubmit} >        
        <div className="d-grid gap-2">
          <div className="file-upload" style={{margin:'auto'}}>
            <FileBase type="file" multiple={false} onDone={({base64}) => setPhotoData({...photoData,photo: base64})} />
          </div>
          <input name="tags"  placeholder="#holiday #yolo" style={{width:'70%', margin:'auto'}}  label="tags (coma separated)" value={photoData.tags} onChange={(e) => setPhotoData({...photoData,tags: e.target.value})}/> 
          <Button size="large" style={{backgroundColor:'lightBlue', width:'70%', margin:'auto'}} type="submit">
            {currentId ? 'Edit' : 'Upload'}
          </Button>
        </div>
      </form>
        {/* <Form.Group  className="mb-3" onSubmit={handleSubmit}>
          <Form.Label>Multiple files input example</Form.Label>
          <Form.Control type="file" value={photoData.photo} onChange={fileUpload}  />
          <button className="btn btn-blue" type="submit" onClick={handleSubmit} style={button}>submit</button>

        </Form.Group> */}
    </div>
  );
}

// const button = {
  
//     border: 'none',
//     color: 'white',
//     padding: '15px 32px',
//     textAlign: 'center',
//     textDecoration: 'none',
//     display: 'inline-block',
//     fontSize:' 12px',
  
// }
export default Form;
