import React, {useEffect, useState} from 'react';
import Form from '../form/Form'
import Posts from '../posts/Posts'
import {useDispatch} from 'react-redux';
import {getPhotos} from '../../actions/posts'
import LoginForm from '../LoginForm/LoginForm'
const Home = () => {

    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch();
    const user = null;
    useEffect(() => {
        dispatch(getPhotos());
        console.log("crr", currentId);
    }, [dispatch])

  return (
    <>
        <div style={{textAlign:'right', marginRight: '10em'}} onClick={() => {}}>
          M
        </div>
        <div style={{ width:'75%', margin: 'auto'}} >
           
                <>
                    <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    <Posts setCurrentId={setCurrentId} current={currentId}/>
                </>
            )
                <LoginForm />
          
          
        </div>
    </>
  )
}

export default Home