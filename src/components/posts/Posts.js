import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useDispatch} from 'react-redux'
import {deletePhoto} from '../../actions/posts'
import {Modal, Button} from 'react-bootstrap'


const Posts = ({setCurrentId}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    handleShow()
  },[])

  return (
    <div style={userStyle}>
      {photos.map((photo) => (
        <Row xs={1} md={2} className="g-4" key={photo._id}>
          <Col>
            <Card  style={{ width: '18rem', marginTop:'1em', backgroundColor:'#f6f6f6', textAlign: 'center' }}>
              <Card.Img variant="top" src={photo.photo} style={{ width: '100%', height:'180px'}}/>
              <Card.Body>
                <Card.Text style={{textAlign: 'left', marginTop: '-1em'}}>
                    {photo.tags}
                </Card.Text>
                <div style={{textAlign:'right'}} >
                  <svg onClick={() => setCurrentId(photo._id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                  </svg>
                  <svg  onClick={() => dispatch(deletePhoto(photo._id))} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
      

          {/* Modal */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Hello there!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Work on this website is still in progress. Register and Login features, COMING SOON!
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

const userStyle ={
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '3px',
  marginTop: '5em', 
  gridRows: 'auto',
}

export default Posts;

