import React, {useState} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Style.css'


function Govsignup() {

    // signup state
    const [govsignupinfo,setGovsignupinfo] = useState({email:"",gov_body_name:"",contact_number:"",profile_photo:null,role:"",password:"",confirm_password:"",locality:"",district:"",state:"",country:"INDIA"})
    
    // validation state
    const [validated, setValidated] = useState(false);

    // govsignup button handler
    const handleSignupsubmit = (event)=>{
        /*
        this method is called when the govsignup button clicked
        this function prevent the default behaviour and also prevent propogation(bubble up)
        then set the validation state to true to validate all fields
        if validated procede for signup api call 
        */
        event.preventDefault()
        event.stopPropagation()
        console.log(govsignupinfo)
        // geting form element and check validation
        const form = event.currentTarget;
        
        // setvalidate trigger all the validation methods
        setValidated(true);
        
        if (form.checkValidity() === true){
            console.log("procede for api call")


        }
        
    }

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
                            
                            <Form noValidate validated={validated} onSubmit={handleSignupsubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" required onChange={(e)=>{setGovsignupinfo({...govsignupinfo,"email":e.target.value})}} />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Government body Name</Form.Label>
                                    <Form.Control type="text" placeholder="Government body Name" required onChange={(e)=>{setGovsignupinfo({...govsignupinfo,"gov_body_name":e.target.value})}} />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Role</Form.Label>
                                    <Form.Select aria-label="Default select example" onChange={(e)=>{setGovsignupinfo({...govsignupinfo,"role":e.target.value})}}>
                                        <option>Select Role</option>
                                        <option value="LOCAL">LOCAL</option>
                                        <option value="DISTRICT">DISTRICT</option>
                                        <option value="STATE">STATE</option>
                                    </Form.Select>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Contact number</Form.Label>
                                    <Form.Control type="text" placeholder="Contact number" required onChange={(e)=>{setGovsignupinfo({...govsignupinfo,"contact_number":e.target.value})}}/>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Profile photo</Form.Label>
                                    <Form.Control type="file" required onChange={(e)=>{setGovsignupinfo({...govsignupinfo,"profile_photo":e.target.value})}} />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <hr />
                                <h4>Address details</h4>

                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label>Locality</Form.Label>
                                    <Form.Control type="text" placeholder="Locality" required onChange={(e)=>{setGovsignupinfo({...govsignupinfo,"locality":e.target.value})}} />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label>District</Form.Label>
                                    <Form.Control type="text" placeholder="District" required onChange={(e)=>{setGovsignupinfo({...govsignupinfo,"district":e.target.value})}} />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control type="text" placeholder="State" required onChange={(e)=>{setGovsignupinfo({...govsignupinfo,"state":e.target.value})}} />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control type="text" placeholder="Country" defaultValue="INDIA" required onChange={(e)=>{setGovsignupinfo({...govsignupinfo,"country":e.target.value})}} />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" required onChange={(e)=>{setGovsignupinfo({...govsignupinfo,"password":e.target.value})}} />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm password" required onChange={(e)=>{setGovsignupinfo({...govsignupinfo,"confirm_password":e.target.value})}} />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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