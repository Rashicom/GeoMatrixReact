import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import './Style.css';

function Indemnitysidebar() {
  return (
    
    <>
        <ListGroup as="ul" className='py-3'>
          <ListGroup.Item className='indemnity-calculator' as={Link} active>Indemnity Calculator</ListGroup.Item>
          <ListGroup.Item className='list_item' as={Link} >Etc</ListGroup.Item>
        </ListGroup>

    </>
  )
}

export default Indemnitysidebar