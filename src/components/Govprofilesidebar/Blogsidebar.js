import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import './Style.css';


function Blogsidebar() {
  return (
    
    <>
        <ListGroup as="ul" className='py-3'>
          <ListGroup.Item className='indemnity-calculator' as={Link} active>Blogs</ListGroup.Item>
          <ListGroup.Item className='list_item' as={Link} >Voating</ListGroup.Item>
        </ListGroup>
    </>

  )
}

export default Blogsidebar