import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';


function Addbulkcadastre() {

  const [owner_email, setOwner_email] = useState(null)
  const [land_file, setLand_file] = useState(null)

  const submit_bulk_land_creation = ()=> {
    console.log("bulk creation")
    console.log(owner_email)
    console.log(land_file)

  }
  

  return (
    <>
    
        <div className='my-3'>

            <Card>
              <Card.Header>Select Owner User</Card.Header>
              <Card.Body>
                <Card.Text>
                  Enter Land owners email id
                </Card.Text>
                <Form>

                  <Row className="mb-3">

                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" onChange={(e)=>setOwner_email(e.target.value)} placeholder="Enter email" />
                    </Form.Group>

                  </Row>
                </Form>
              </Card.Body>
            </Card>
        </div>


        <div className='my-3'>

            <Card>
              <Card.Header>Upload Exel file</Card.Header>
              <Card.Body>
                <Card.Text>
                  upload the cadastre file. the file must be in the prefered format and contain enough information 
                  to create cadastre.
                </Card.Text>
                <Form>
                
                  <Row className="mb-3">
                    
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Choose landfile in a prefered format</Form.Label>
                      <Form.Control type="file" accept='.xls' onChange={(e)=>setLand_file(e.target.files[0])} />
                    </Form.Group>

                  </Row> 

                    <Alert variant={"warning"}>
                      PLEASE NOTE : Land file must be in the prefered format !
                    </Alert>

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

                  <Button variant="success" onClick={()=>submit_bulk_land_creation()} >Submit</Button>

                </Row>  
              </Form>

            </Card.Body>
          </Card>

        </div>

    </>
  )
}

export default Addbulkcadastre