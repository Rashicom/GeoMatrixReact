import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Subnavbar() {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="info">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Data lab</Nav.Link>
                <Nav.Link href="#land">Land map</Nav.Link>
                <Nav.Link href="#type">Landtype map</Nav.Link>
                <Nav.Link href="#growth">Growth map</Nav.Link>
                <Nav.Link href="#indestrial">Indestrial map</Nav.Link>
                <Nav.Link href="#snapshort">Snapshort map</Nav.Link>
                <Nav.Link href="#plastic">plastic map</Nav.Link>
                <Nav.Link href="#water">waterconsuming map</Nav.Link>
                <Nav.Link href="#filter">Mapfilter</Nav.Link>
                <Nav.Link href="#more">More maps</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

    </>
  )
}

export default Subnavbar