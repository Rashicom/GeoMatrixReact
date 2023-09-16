import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Style.css'


function Govsignup() {
  return (
    <>

        <div className='govsignupmain-div'>
            <Container className='py-5'>
                <Row>

                    {/* login left side */}
                    <Col md={6}>
                        <h3>Government User Signup</h3>
                    </Col>
                    
                    {/* main side: login right side */}
                    <Col md={6} className='govsignup-colorwrap p-3'>

                        <h3 className='p'>Signup</h3>
                        <hr />
                        <Row>
                            
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" required />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Government body Name</Form.Label>
                                    <Form.Control type="text" placeholder="Government body Name" required/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Role</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Select Role</option>
                                        <option value="LOCAL">LOCAL</option>
                                        <option value="DISTRICT">DISTRICT</option>
                                        <option value="STATE">STATE</option>
                                    </Form.Select>
                                </Form.Group>
                                
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Profile photo</Form.Label>
                                    <Form.Control type="text" placeholder="Contact number" required />
                                </Form.Group>

                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Default file input example</Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>

                                <hr />
                                <h4>Address details</h4>

                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label>Locality</Form.Label>
                                    <Form.Control type="text" placeholder="Locality" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label>District</Form.Label>
                                    <Form.Control type="text" placeholder="District" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control type="text" placeholder="State" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control type="text" placeholder="Country" defaultValue="INDIA" required />
                                </Form.Group>
                                
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm password" required />
                                </Form.Group>

                                <br />
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </Row>


                    </Col>
                </Row>
            </Container>

        </div>
    
    </>
  )
}

export default Govsignup