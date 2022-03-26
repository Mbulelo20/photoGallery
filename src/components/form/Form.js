import React, { useState, useEffect } from 'react';
import {Button} from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useSelector} from 'react-redux';
import {uploadPhoto, updatePhoto} from '../../actions/posts';
import {useDispatch} from 'react-redux';
import {Modal} from 'react-bootstrap';

const Form = ({currentId, setCurrentId}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [photoData, setPhotoData] = useState({tags: '',  photo:''})
  const dispatch = useDispatch() 
  const photofile = useSelector((state) => currentId ? state.photos.find((p) => p._id === currentId  ) : null)
 
  useEffect(() => {
    if(photofile) {
      setPhotoData(photofile)
    }
  },[photofile])
  
  const handleSubmit  = (e) => {
    e.preventDefault();

    if(currentId) {
      dispatch(updatePhoto(currentId, photoData))
    } else {
      dispatch(uploadPhoto(photoData))
    }
    handleShow()
    clear();
  }

  const clear  = () => {
    setPhotoData({tags: '', photo:''})
    setCurrentId(null)
  }

  return (
    <div style={{marginTop:'2em'}}>
      {/* Form to handle file upload */}
      <form onSubmit={handleSubmit} >        
        <div className="d-grid gap-2">
          <div className="file-upload" style={{margin:'auto'}}>
            <FileBase type="file" multiple={false} onDone={({base64}) => setPhotoData({...photoData,photo: base64})} />
          </div>
          <input name="tags"  placeholder="#holiday #yolo" style={{width:'70%', margin:'auto'}}  label="tags (coma separated)" value={photoData.tags} onChange={(e) => setPhotoData({...photoData, tags: e.target.value.split(',')})}/> 
          <Button size="large" style={{backgroundColor:'lightBlue', width:'70%', margin:'auto'}} type="submit">
            {currentId ? 'Edit' : 'Upload'}
          </Button>
        </div>
      </form>

       {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please refresh the page if you do not see your photo
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Form;
