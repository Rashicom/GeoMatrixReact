import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Navigationbar() {
  return (
    <>

      <Navbar bg="primary" data-bs-theme="dark" className='sticky-top'>
        <Container>
          <Navbar.Brand as={Link} to="/">Geo Matrix</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/datalab">Data Lab</Nav.Link>
            <Nav.Link href="#blogs">Blogs</Nav.Link>
            
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            

          </Nav>
        </Container>
      </Navbar>

    </>
  )
}

export default Navigationbar