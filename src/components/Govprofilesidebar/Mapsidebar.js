import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import './Style.css';

function Mapsidebar() {
  return (
    
    <>
        <ListGroup as="ul" className='py-3'>
          
          <ListGroup.Item className='list_item' as={Link} to="" >Base map</ListGroup.Item>
          <ListGroup.Item className='list_item' as={Link} to="add-cadastre" >Add cadastre</ListGroup.Item>
          <ListGroup.Item className='list_item' as={Link} to="add-bulkcadastre" >Bulk Cadastre creation</ListGroup.Item>
          <ListGroup.Item className='list_item' as={Link} to="change-ownership" >Change ownership</ListGroup.Item>
          <ListGroup.Item className='list_item' as={Link} to="split-cadastre" >Split cadastre</ListGroup.Item>
          
        </ListGroup>

    </>

  )
}

export default Mapsidebar