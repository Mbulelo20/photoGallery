import React, {Fragment, useEffect, useState} from 'react';
import Form from '../form/Form';
import Posts from '../posts/Posts';
import {useDispatch} from 'react-redux';
import {getPhotos} from '../../actions/posts';


const Home = () => {
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos());
  },[dispatch, currentId])

  return (
    <Fragment>
      <div style={{ width:'75%', margin: 'auto'}} >
        <Fragment>
          <Form currentId={currentId} setCurrentId={setCurrentId}/>
          <Posts setCurrentId={setCurrentId} current={currentId}/>
        </Fragment>
      </div>
    </Fragment>
  )
}

export default Home