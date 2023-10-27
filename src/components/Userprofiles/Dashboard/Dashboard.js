import React,{ useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';
import { fetchuserInfo } from '../../../Api/users/Users';
import { useDispatch, useSelector } from 'react-redux';
import { setUserifo } from '../../../redux/Normaluser/User';
import { Container } from 'react-bootstrap';

function Dashboard() {
  
  const dispatch = useDispatch()
  const userdata = useSelector((state) => state.user.userinfo)

  useEffect( ()=> {
    console.log("call user info fetch api here")
    
    //difine method to call api to collect user info
    const fetch_user_info = async ()=> {

      try {
        const response = await fetchuserInfo()
        dispatch(setUserifo(response))
      }
      catch (error) {
        console.log("user info fetching failed")
        console.log(error)
      }
    }

    //call api to collect user info if no user data found
    // if user data is in redux use it, else call api and update data
    if (!userdata) {
      console.log("No user info, procede to call api to coolect user info")
      fetch_user_info() 
    }
    
  },[])

  return (
    <>
        <section className='p-3'>
          <Row>
            {/* side sectin */}
            <Col md={4} className='text-center'>
              
              <Card border="secondary" style={{ width: '18rem' }}>
                <Card.Header>
                  image
                  <Image src='' roundedCircle />
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    {userdata ? userdata.first_name : "Name.."}
                  </Card.Title>
                  <Card.Text>
                    <p>{userdata ? userdata.email : "Email.."}</p>
                    <p>{userdata ? userdata.social_rank : "Social rank.."}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={8} className=''>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>User unique ID :{userdata ? userdata.id : "id.."}</ListGroup.Item>
                <ListGroup.Item>Name :{userdata ? userdata.first_name : "Name.."}</ListGroup.Item>
                <ListGroup.Item>Email :{userdata ? userdata.email : "Email.."}</ListGroup.Item>
                <ListGroup.Item>Contact Number :{userdata ? userdata.contact_number : "Number.."}</ListGroup.Item>
                <ListGroup.Item>Adhar ID :{userdata ? userdata.adhar_id : "Adhar id.."}</ListGroup.Item>
                <ListGroup.Item>Social Rank :{userdata ? userdata.social_rank : "Social rank.."}</ListGroup.Item>

              </ListGroup>
            </Card>
            </Col>
          </Row>
        </section>

        {/* notification and alert section */}
        <section className='p-3'>
          <h3>Notification And Alerts</h3>

          {/* iterate alerts here */}
          <Alert variant={'danger'}>
            This is a danger alert
          </Alert>
          <Alert variant={'danger'}>
            This is a danger alert
          </Alert>
          <Alert variant={'warning'}>
            This is a danger alert
          </Alert>
          <Alert variant={'info'}>
            This is a danger alert
          </Alert>
          
        </section>
 
    </>
  )
}

export default Dashboard