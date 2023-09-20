import React, {useState} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Style.css'




function Usersignup() {

    // signup state
    const [signupinfo,setSignupinfo] = useState({email:"",first_name:"",last_name:"",adhar_id:"",contact_number:"",password:""})
    
    // validation state
    const [validated, setValidated] = useState(false);
    
    // signup button method
    const handleSignupsubmit = (event)=>{
        /*
        this method is called when the signup button clicked
        this function prevent the default behaviour and also prevent propogation(bubble up)
        then set the validation state to true to validate all fields
        if validated procede for signup api call 
        */
        event.preventDefault()
        event.stopPropagation()

        // geting form element and check validation
        const form = event.currentTarget;
        if (form.checkValidity() === true){
            console.log("procede for api call")


        }
        // setvalidate trigger all the validation methods
        setValidated(true);
    }

  
  
    return (
    <>
        <div className='signupmain-div'>
            <Container className='py-5'>
                <Row>

                    {/* login left side */}
                    <Col md={6}>
                        <h3>User Signup</h3>
                    </Col>
                    
                    {/* main side: login right side */}
                    <Col md={6} className='signup-colorwrap p-3'>

                        <h3 className='p'>Signup</h3>
                        <hr />
                        <Row>
                            
                            <Form noValidate validated={validated} onSubmit={handleSignupsubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" required onChange={(e)=>{setSignupinfo({...signupinfo,"email":e.target.value})}} />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="First name" required onChange={(e)=>{setSignupinfo({...signupinfo,"first_name":e.target.value})}} />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Last name" required onChange={(e)=>{setSignupinfo({...signupinfo,"last_name":e.target.value})}} />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Adhar number</Form.Label>
                                    <Form.Control type="text" placeholder="adhar number" required onChange={(e)=>{setSignupinfo({...signupinfo,"adhar_id":e.target.value})}} />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Contact number</Form.Label>
                                    <Form.Control type="text" placeholder="contact number" required onChange={(e)=>{setSignupinfo({...signupinfo,"contact_number":e.target.value})}} />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" required onChange={(e)=>{setSignupinfo({...signupinfo,"password":e.target.value})}} />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                
                                <br />
                                <Button variant="primary" type="submit" >
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

export default Usersignup