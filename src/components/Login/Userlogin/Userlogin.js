import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Style.css'

function Userlogin() {
  return (
    <>
        <div className='loginmain-div'>
            <Container className='py-5'>
                <Row>

                    {/* login left side */}
                    <Col md={6}>
                        <h3>User Login</h3>
                    </Col>
                    
                    {/* main side: login right side */}
                    <Col md={6} className='login-colorwrap p-3'>

                        <h3 className='p'>Login</h3>
                        <hr />
                        <Row>
                            
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Text className="text-muted">
                                            <a href="#forgotpassword">Forgot Password?</a>
                                        </Form.Text>
                                    </Col>
                                    <Col className='d-flex justify-content-end'>
                                        <Form.Text className="text-muted">
                                            
                                            <Link to="/signup">Signup</Link>
                                            
                                        </Form.Text>
                                    </Col>
                                </Row>
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

        <div className='adminsection'>
            
            <div className='adminsection-colorwrap'>
                <Container className='py-4'>

                    <h3 className='my-3'>Are You a Government Organization ?</h3>     
                    <p>Geo Matrix provides you a place to track and coordinates the land activities and land information and provide better service to the people and other organizations. Geo Matrix dashboard gives you a better insights to the data.</p>
                    <hr />
                    <h3 className='my-3'>Login as a Government body</h3>

                    <Link to="govuserlogin">
                        <Button variant="outline-primary">LOGIN</Button>
                    </Link>
                                      

                </Container>

            </div>      

        </div>
    </>
  )
}

export default Userlogin