import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import './Style.css';


function Dashboardsidebar() {
  return (
    
    <>
        <ListGroup as="ul" className='py-3'>
          <ListGroup.Item className='indemnity-calculator' as={Link} to="" >Dashboard</ListGroup.Item>
          <ListGroup.Item className='list_item' as={Link} to="" >Notifications</ListGroup.Item>
        </ListGroup>
    </>

  )
}

export default Dashboardsidebar