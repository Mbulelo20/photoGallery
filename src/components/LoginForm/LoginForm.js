import React, { useState, useEffect } from 'react';
import {Form, Row, Col} from 'react-bootstrap'
import {Button} from '@material-ui/core';

const LoginForm = () => {
  
  
 
  const handleSubmit  = (e) => {
    
  }
  return (
    <div style={{marginTop:'2em'}}>
      <Form style={{marginTop:'2em'}}>
            <Row style={{width:'70%', margin:'auto'}}>
                <Col>
                    <Form.Control placeholder="Email" />
                </Col>
                <Col>
                    <Form.Control placeholder="Password" />
                </Col>
            </Row>
            <Row style={{ margin:'auto', marginTop:'1em'}}>
                <Button size="large" style={{backgroundColor:'lightBlue', width:'70%', margin:'auto'}} type="submit">
                    Login
                </Button>
            </Row>
        </Form>
        <Form style={{marginTop:'2em'}}>
            <Row style={{width:'70%', margin:'auto'}}>
                <Col>
                    <Form.Control placeholder="First name" />
                </Col>
                <Col>
                    <Form.Control placeholder="Last name" />
                </Col>
            </Row>
            <Row>
            <Form.Control placeholder="Email" />
            <Form.Control placeholder="Password" />

            </Row>
            <Row style={{ margin:'auto', marginTop:'1em'}}>
                <Button size="large" style={{backgroundColor:'lightBlue', width:'70%', margin:'auto'}} type="submit">
                    Sign up
                </Button>
            </Row>
        </Form>
    </div>
  );
}

export default LoginForm;
