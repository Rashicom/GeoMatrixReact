import React from 'react'
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Govforhead() {
  return (
    <>
        <Card>  

          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#first">
              
              <Nav.Item>
                <Nav.Link as={Link} to="dashboard" >Dashboard</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="maps" >Maps</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="land-tax" >Land Tax</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="indemnity-analysis" >Indemnity analysis</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="blogs" >Manage Blogs</Nav.Link>
              </Nav.Item>
              
            </Nav>
          </Card.Header>

        </Card>
    </>
  )
}

export default Govforhead