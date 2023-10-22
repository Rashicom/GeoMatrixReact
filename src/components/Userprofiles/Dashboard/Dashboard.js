import React,{ useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';
import { fetchuserInfo } from '../../../Api/users/Users';
import { useDispatch } from 'react-redux';
import { setUserifo } from '../../../redux/Normaluser/User';
import { Container } from 'react-bootstrap';

function Dashboard() {
  
  const dispatch = useDispatch()

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
    //call the method
    fetch_user_info()

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
                    Rashid
                  </Card.Title>
                  <Card.Text>
                    <p>email id</p>
                    <p>social rank</p>
                  </Card.Text>
                </Card.Body>
              </Card>
              
            </Col>

            <Col md={8} className=''>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>User unique ID :</ListGroup.Item>
                <ListGroup.Item>Name :</ListGroup.Item>
                <ListGroup.Item>Email :</ListGroup.Item>
                <ListGroup.Item>Contact Number :</ListGroup.Item>
                <ListGroup.Item>Adhar ID :</ListGroup.Item>
                <ListGroup.Item>Social Rank :</ListGroup.Item>

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