import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsFacebook, BsInstagram, BsLinkedin,BsGithub } from "react-icons/bs";




function Footer() {
  return (
    <div className='bg-primary'>
      <Container className='p-4'>
        <Row>
          <Col className='text-center'><h6>ABOUT GEOMATRIX</h6></Col>
          <Col className='text-center'><h6>DATA LAB</h6></Col>
          <Col className='text-center'><h6>JOIN US</h6></Col>
          <Col className='text-center'><h6>CONTACT</h6></Col>
          
        </Row>
        
        <hr />

        <Row className='m-5'>
          <Col className='text-center'>Empowering Insights, Driving Change. Unleash the power of data with GeoMatrix, your ultimate destination for intelligent data solutions. With our cutting-edge cadastral mapping technology and user-friendly platform, you can visualize complex patterns effortlessly, gaining valuable insights to make informed decisions. </Col>
        </Row>

        <Row className='m-5'>
          <Col className='text-center'></Col>
          <Col className='text-center'>
            <Row>
              
              <Col><a href="#fb" style={{  color: 'inherit' }}><BsFacebook /></a></Col>
              <Col><a href="#insta" style={{ color: 'inherit'}}><BsInstagram /></a></Col>
              <Col><a href="#linkdin" style={{ color: 'inherit'}}><BsLinkedin /></a></Col>
              <Col><a href="#git" style={{ color: 'inherit'}}><BsGithub /></a></Col>
            </Row>
          </Col>
          <Col className='text-center'></Col>

        </Row>

      </Container>
      <Row className='p-2' style={{backgroundColor: 'blue'}}>
          <Col className='text-center'>© 2020 Copyright:GeoMatrix.com</Col>
      </Row>
      
    </div>
  )
}

export default Footer