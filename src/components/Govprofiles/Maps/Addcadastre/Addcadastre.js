import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import CloseButton from 'react-bootstrap/CloseButton';

function Addcadastre() {
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
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                
              </Row>  
            </Form>
            
          </Card.Body>
        </Card>

      </div>


      <div className='my-3'>

        <Card>
          <Card.Header>Select Cadastre Address</Card.Header>
          <Card.Body>
            <Card.Text>
              Enter Cadasre address, where the land address is located. beware that the address is taken as the further land based operation
            </Card.Text>
              <Form>             

                <Row className="mb-3">

                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Locality</Form.Label>
                    <Form.Control />
                    </Form.Group>

                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>District</Form.Label>
                    <Form.Control />
                  </Form.Group>

                </Row>

                <Row className="mb-3">
                  
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>State</Form.Label>
                    <Form.Control />
                    </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip cope</Form.Label>
                    <Form.Control />
                  </Form.Group>

                </Row>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Land type</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>RESIDENTIAL</option>
                      <option>AGRICULTURAL</option>
                      <option>COMMERCIAL</option>
                      <option>INDUSTRIAL</option>
                      <option>TRANSPORT</option>
                      <option>RECREATIONAL</option>
                      <option>INVESTMENT</option>
                      <option>ECOSENSITIVE</option>
                      <option>FOREST</option>
                      <option>WET</option>
                      <option>RANGE</option>
                      <option>BARREN</option>            

                    </Form.Select>
                </Form.Group>

                
              </Form>
            
          </Card.Body>
        </Card>


      </div>


      <div className='my-3'>

        <Card>
          <Card.Header>Create Land Bounderies</Card.Header>
          <Card.Body>
            <Card.Text>
              Add longitude and latitude of the land bounderies correctly. the provided cordinates must be
              at least 3 in numbers to form a valied polygon
            </Card.Text>
              <Form>             

                <Row className="mb-3">

                  <Form.Group as={Col} controlId="formGridNumbers">
                    
                    <Form.Control placeholder="Longitude" />

                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridNumbers">
                    
                    <Form.Control placeholder="Latitude" />
                    
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridNumbers">
                    
                    <Button variant="success">Add Cordinate</Button>{' '}
                    
                  </Form.Group>

                </Row>

                
              </Form>

                <Table>
                
                  <tbody>

                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td><CloseButton /></td>

                    </tr>

                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td><CloseButton /></td>

                    </tr>

                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td><CloseButton /></td>

                    </tr>
                    
                  </tbody>
                </Table>
            
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

                <Button variant="success">Submit</Button>{' '}
              
              </Row>  
            </Form>
            
          </Card.Body>
        </Card>

      </div>

    </>
  )
}

export default Addcadastre