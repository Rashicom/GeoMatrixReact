import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import CloseButton from 'react-bootstrap/CloseButton';
import { useState } from 'react';

function Addcadastre() {


  // form values state
  const [email, setEmail] = useState("")
  const [locality, setLocality] = useState("")
  const [district, setDistrict] = useState("")
  const [state, setState] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [landtype, setLandtype] = useState("")
  
  const [longitude, setLongitude] = useState("")
  const [latitude, setLatitude] = useState("")
  
  const [polygons, setPolygon] = useState([])

  const deleteCordinate = (indx)=> { 
    // copy all poligon to a list and delete insx matching record
    // then append new updated array to the polygon
    console.log(indx)
    const updatedPolygons = [...polygons]
    
    updatedPolygons.splice(indx,1)
    setPolygon(updatedPolygons)
  }

  const registerCadastre = ()=> {
    
    console.log("new land registration")
    console.log(email)
    console.log(locality)
    console.log(district)
    console.log(state)
    console.log(zipcode)
    console.log(landtype)
    console.log(polygons)


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
                  <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
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
                    <Form.Control onChange={(e)=>setLocality(e.target.value)} />
                    </Form.Group>

                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>District</Form.Label>
                    <Form.Control onChange={(e)=>setDistrict(e.target.value)} />
                  </Form.Group>

                </Row>

                <Row className="mb-3">
                  
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>State</Form.Label>
                    <Form.Control onChange={(e)=>setState(e.target.value)} />
                    </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip cope</Form.Label>
                    <Form.Control onChange={(e)=>setZipcode(e.target.value)} />
                  </Form.Group>

                </Row>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Land type</Form.Label>
                    <Form.Select onChange={(e)=>setLandtype(e.target.value)} defaultValue="Choose...">
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
                    
                    <Form.Control value={longitude || ''} onChange={(e)=> setLongitude(e.target.value)} placeholder="Longitude" />

                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridNumbers">
                    
                    <Form.Control value={latitude || ''} onChange={(e)=> setLatitude(e.target.value)} placeholder="Latitude" />
                    
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridNumbers">
                    
                    <Button type='button' onClick={()=>{
                      
                      //collect latitude and longitude and add to polygon list
                      if (latitude !== null && longitude !== null) {

                        setPolygon([...polygons,[longitude,latitude]])
                        setLatitude(null)
                        setLongitude(null)

                      }
                      
                    }} 
                    >Add Cordinate</Button>
                    
                  </Form.Group>

                </Row>

                
              </Form>

                <Table>
                
                  <tbody>

                    {
                      polygons.map((cordinate,indx)=> {
                        return(

                          // iterate through polygon which is user entered
                          <tr key={indx}>

                            <td>{indx}</td>
                            <td>{cordinate[0]}</td>
                            <td>{cordinate[1]}</td>

                            {/* 
                              if user clicked closed button of a perticular cordinate close button
                              delete record  
                            */}
                            <td><CloseButton onClick={()=> {
                              
                              deleteCordinate(indx)
                            }} /></td>

                          </tr>
                        )
                      })
                    }
                    
                    
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

                <Button variant="success" onClick={()=>registerCadastre()} >Submit</Button>
              
              </Row>  
            </Form>
            
          </Card.Body>
        </Card>

      </div>

    </>
  )
}

export default Addcadastre