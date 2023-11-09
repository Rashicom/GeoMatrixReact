import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';



function Splitcadastre() {

  const [owner_email, setOwner_email] = useState(null)
  const [land_id, setLand_id] = useState(null)
  const [land_file, setLand_file] = useState(null)

  const submit_split_cadastre = ()=> {
    console.log("splic cadastre")
    console.log(owner_email)
    console.log(land_id)
    console.log(land_file)

  }
  

  return (
    
    <>
    
      <div className='my-3'>

        <Card>
          <Card.Header>Select Owner User</Card.Header>
          <Card.Body>
            <Card.Text>
              Enter Land owners email id, who is plitting the land
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
          <Card.Header>Enter Parent Land ID </Card.Header>
          <Card.Body>
            <Card.Text>
              Enter Land id, which is going to split to child lands for other users 
            </Card.Text>
            <Form>
    
              <Row className="mb-3">
    
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Land ID</Form.Label>
                  <Form.Control type="text" onChange={(e)=>setLand_id(e.target.value)} placeholder="Enter Land id" />
                </Form.Group>
    
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </div>


      <div className='my-3'>

        <Card>
          <Card.Header>Upload Split Exel file</Card.Header>
          <Card.Body>
            <Card.Text>
              Upload the cadastre file. the file must be in the prefered format and contain enough information 
              to create cadastre.
            </Card.Text>
            <Form>

              <Row className="mb-3">

                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Choose landfile in a prefered format</Form.Label>
                  <Form.Control type="file" onChange={(e)=>setLand_file(e.target.files[0])} accept='.xls' />
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

              <Button variant="success" onClick={()=>submit_split_cadastre()} >Submit</Button>

            </Row>  
          </Form>

        </Card.Body>
      </Card>

      </div>

    </>

  )
}

export default Splitcadastre