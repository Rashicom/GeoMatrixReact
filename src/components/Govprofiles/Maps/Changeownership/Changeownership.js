import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { wait } from '@testing-library/user-event/dist/utils';
import { change_land_ownership } from '../../../../Api/cadastre/cadastreoperations';
import { setCadastre } from '../../../../redux/Cadastre/Cadastreslice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function Changeownership() {

  const [current_owner, setCurrent_owner] = useState(null)
  const [new_owner, setNew_owner] = useState(null)
  const [land_id,setLand_id] = useState(null)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const submit_change_ownership = async ()=> {
    
    const data = {
      owner_email:current_owner,
      land_number:land_id,
      new_owner_email:new_owner
    }
    console.log(data)
    // calling api to post the request
    try{
      const response = await change_land_ownership(data)
      console.log(response)

      // delete present cadastre, then the reloading the map page, forced to call api because of the cadastre not found
      // change to best practice is : add the single cadastre response to the remaning cadastre list
      // present response is not a well formated to add
      dispatch(setCadastre(null))
      navigate("/govprofile/maps/base-map/")
      
    }
    catch(error){
      console.log(error)
    }

  }


  return (
    <>
    
    <div className='my-3'>

      <Card>
        <Card.Header>Select Owner Email</Card.Header>
        <Card.Body>
          <Card.Text>
            Enter the current Land owner email
          </Card.Text>
          <Form>
        
            <Row className="mb-3">
        
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" onChange={(e)=>setCurrent_owner(e.target.value)} placeholder="Enter email" />
              </Form.Group>
        
            </Row>
          </Form>
        </Card.Body>
      </Card>
      </div>


      <div className='my-3'>

        <Card>
          <Card.Header>Select Land ID</Card.Header>
          <Card.Body>
            <Card.Text>
              Enter the land id which is changed to new ownership
            </Card.Text>
            <Form>

              <Row className="mb-3">

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Land ID</Form.Label>
                  <Form.Control type="email" onChange={(e)=>setLand_id(e.target.value)} placeholder="Enter land ID" />
                </Form.Group>

              </Row>
            </Form>
          </Card.Body>
        </Card>

      </div>
        
        
      <div className='my-3'>
        
        <Card>
          <Card.Header>Enter New Owner Email</Card.Header>
          <Card.Body>
            <Card.Text>
              Enter New land uer Email id here
            </Card.Text>
            <Form>

              <Row className="mb-3">

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" onChange={(e)=>setNew_owner(e.target.value)} placeholder="Enter email" />
                </Form.Group>

              </Row>

            </Form>
          </Card.Body>
        </Card>
      </div>
        
        
      <div className='my-3'>
        
      <Card className="text-center">
      <Card.Header>Submit response</Card.Header>
      <Card.Body>
        <Card.Text>
          Please varify entered data Before submitting cadastre creation.
        </Card.Text>
        <Form>
        
          <Row className="mb-3">
        
            <Button variant="success" onClick={()=>submit_change_ownership()} >Submit</Button>
        
          </Row>  
        </Form>
        
      </Card.Body>
      </Card>
        
      </div>

    </>
  )
}

export default Changeownership