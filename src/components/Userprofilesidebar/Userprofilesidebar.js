import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import './Style.css';

function Userprofilesidebar() {
  return (
    <>
        <ListGroup as="ul" className='py-3'>
          <ListGroup.Item className='list_item' as={Link} to="dashboard/" active>Dashboard</ListGroup.Item>
          <ListGroup.Item className='list_item' as={Link} to="land/">Land</ListGroup.Item>
          <ListGroup.Item className='list_item' as={Link} to="tax/">Tax</ListGroup.Item>
          <ListGroup.Item className='list_item' as={Link} to="accounts/">Accounts</ListGroup.Item>
          <ListGroup.Item className='list_item' as={Link} to="notifications/">Notifications</ListGroup.Item>
          <ListGroup.Item className='list_item' as={Link} to="dashboard/">Settings</ListGroup.Item>
        </ListGroup>

    </>
  )
}

export default Userprofilesidebar