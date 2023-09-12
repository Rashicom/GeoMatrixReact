import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigationbar() {
  return (
    <>

      <Navbar bg="primary" data-bs-theme="dark" className='sticky-top'>
        <Container>
          <Navbar.Brand href="#home">Geo Matrix</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#datalab">Data Lab</Nav.Link>
            <Nav.Link href="#blogs">Blogs</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>

          </Nav>
        </Container>
      </Navbar>

    </>
  )
}

export default Navigationbar