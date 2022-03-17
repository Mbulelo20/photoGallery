import React, {useEffect, useState} from 'react';
import Form from './components/form/Form'
import Posts from './components/posts/Posts'
import {useDispatch} from 'react-redux';
import {getPhotos} from './actions/posts'
const App = () => {

  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos());
    console.log("crr", currentId);
  }, [dispatch])
  
  return (
    <div style={{ width:'75%', margin: 'auto'}}>
      <Form currentId={currentId} setCurrentId={setCurrentId}/>
      <Posts setCurrentId={setCurrentId} current={currentId}/>
    </div>
  );
}

export default App;
