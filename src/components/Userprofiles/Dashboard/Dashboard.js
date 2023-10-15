import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';

function Dashboard() {
    
  useEffect( ()=> {
    console.log("call user info fetch api here")

  },[])

  return (
    <>
        <Row className='py-3'>

            <Col md={4}>
                <img src="..." alt="profile photo" class="rounded-circle" />
            </Col>
            
            <Col md={8}>
                <h3>Email id</h3>
                <h4>Name</h4>
            </Col>

        </Row>
 
    </>
  )
}

export default Dashboard