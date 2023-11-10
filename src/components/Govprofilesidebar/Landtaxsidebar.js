import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import './Style.css';


function Landtaxsidebar() {
  return (
    
    <>
        <ListGroup as="ul" className='py-3'>

          <ListGroup.Item className='list_item' as={Link} to="" >Tax map</ListGroup.Item>
          <ListGroup.Item className='list_item' as={Link} to="" >Tax details</ListGroup.Item>
          <ListGroup.Item className='list_item' as={Link} to="tax-filter" >Tax filter</ListGroup.Item>
          <ListGroup.Item className='list_item' as={Link} to="generate-land-tax" >Generate Tax</ListGroup.Item>
          <ListGroup.Item className='list_item' as={Link} to="update-land-tax" >Update Tax</ListGroup.Item>

        </ListGroup>

    </>

  )
}

export default Landtaxsidebar