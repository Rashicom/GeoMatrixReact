import React,{useState} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setGovuser,setLoading,logout,setError } from '../../../redux/govuser/govuser';
import { loginGovuser } from '../../../Api/users/Users';

function Govuserlogin() {

    const [govlogininfo,setGovlogininfo] = useState({email:"",password:""})
    
    // validation state
    const [validated, setValidated] = useState(false);

    const govuser = useSelector((state)=>state.govuser)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const govloginHandler = async (event)=>{
        /*
        this handle the signup . 
        */
        let email = govlogininfo.email
        let password = govlogininfo.password
        
        // privent default behaviour
        event.preventDefault()
        event.stopPropagation()

        // setvalidate trigger all the validation methods
        setValidated(true);
        
        // geting form element and check validation
        const form = event.currentTarget;
        if (form.checkValidity() === true){
            console.log("procede for api call")
            
            // set loading
            dispatch(setLoading(true))

            //call api
            const creadencials = {"email":email, "password":password}
            try {
                const response = await loginGovuser(creadencials)
                dispatch(setGovuser(response))
                dispatch(setLoading(false))
                
                // set access and refresh tocken in the local storage
                let accessToken = response.access
                let refreshToken = response.access
                localStorage.setItem('accessToken',accessToken)
                localStorage.setItem('refreshToken',refreshToken)

                // after successfull login redirect to the gov user dashbord
                navigate('/govprofile/dashboard/')
            }
            
            catch (error) {
                dispatch(setLoading(false))
                dispatch(setError(error.data.details))
            }



        }
    }


  return (
    <>
    
        <div className='loginmain-div'>
            <Container className='py-5'>
                <Row>

                    {/* login left side */}
                    <Col md={6}>
                        <h3>Government body Login</h3>
                    </Col>
                    
                    {/* main side: login right side */}
                    <Col md={6} className='login-colorwrap p-3'>

                        <h3 className='p'>Login</h3>
                        <p className='error'>{govuser.error}</p>
                        <hr />
                        <Row>
                            
                            <Form noValidate validated={validated} onSubmit={govloginHandler}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" required onChange={(e)=>{setGovlogininfo({...govlogininfo,"email":e.target.value})}} />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" required onChange={(e)=>{setGovlogininfo({...govlogininfo,"password":e.target.value})}} />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Text className="text-muted">
                                            <a href="#forgotpassword">Forgot Password?</a>
                                        </Form.Text>
                                    </Col>
                                    <Col className='d-flex justify-content-end'>
                                        <Form.Text className="text-muted">
                                            <Link to="/signup/govsignup">Signup</Link>
                                        </Form.Text>
                                    </Col>
                                </Row>
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

export default Govuserlogin