import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


function Changeownership() {

  const [current_owner, setCurrent_owner] = useState(null)
  const [new_owner, setNew_owner] = useState(null)
  const [land_id,setLand_id] = useState(null)

  const submit_change_ownership = ()=> {
    console.log("submit change ownership")
    console.log(current_owner)
    console.log(new_owner)
    console.log(land_id)

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
                  <Form.Control type="email" onChange={(e)=>setNew_owner(e.target.value)} placeholder="Enter land ID" />
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
                  <Form.Control type="text" onChange={(e)=>setLand_id(e.target.value)} placeholder="Enter email" />
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