import React from 'react'
import './Style.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import second_section_image from '../../Assets/Images/secondsection_image.webp'
import Button from 'react-bootstrap/Button';

const handleDragStart = (e) => e.preventDefault();




function Home() {

  // items to show inside alice carousel
  // call api for datalab service
  const items = [
    <div className='carousel-slider mx-5' onDragStart={handleDragStart} role="presentation">
      <div className='carousal-colorwrap p-3'>
        <h5>Geo Matrix released new data on plastic waste generation activity</h5>
        <a href="#readmore">Learn more</a>
      </div>
    </div>,

    <div className='carousel-slider mx-5' onDragStart={handleDragStart} role="presentation">
      <div className='carousal-colorwrap p-3'>
        <h5>Geo Matrix released new data on Land types</h5>
        <a href="#readmore">Learn more</a>
      </div>
    </div>, 

    <div className='carousel-slider mx-5' onDragStart={handleDragStart} role="presentation">
      <div className='carousal-colorwrap p-3'>
        <h5>Geo Matrix released new data on plastic waste generation activity</h5>
        <a href="#readmore">Learn more</a>
      </div>
    </div>, 

    <div className='carousel-slider mx-5' onDragStart={handleDragStart} role="presentation">
      <div className='carousal-colorwrap p-3'>
        <h5>Geo Matrix released new data on plastic waste generation activity</h5>
        <a href="#readmore">Learn more</a>
      </div>
    </div>, 

  ];

  return (
    <>
        {/* main banner section */}
        <div className='home-banner'>
          <div className='banner-colorwrap'>
            <Container>

              <Row>
                <Col md={6} className='pt-5'>
                  <h1>Transforming Possibilities with Cadastral Data</h1>
                  <h6>Geo Matrix generating cadastral data that helps businesses, governments, researchers, and journalists understand the physical world and take action.</h6>
                </Col>
              </Row>

              <Row className='pt-5'>
                <AliceCarousel 
                  mouseTracking items={items} 
                  autoPlay={true} 
                  infinite={true} 
                  autoPlayInterval={'2000'}
                  responsive={{0:{items:3}}}
                  disableButtonsControls={true}
                />
              </Row>
            </Container>
          </div>   
        </div>

        {/* second section */}

        <div className='home-secondsection py-4'>

          <Container>
            <Row>
              <Col>
                <h3>Collecting, analysing and generating new meaningful data</h3>
                <p>Planet’s data is transforming the way companies and governments use satellite imagery data, delivering insights at the daily pace of change on earth. This differentiated data set powers decision-making in a myriad of industries including agriculture, forestry, mapping, and government. Our fleet of over 200 earth imaging satellites, the largest in history, images the whole Earth land mass daily.</p>
                <Button variant="outline-primary">WHY GEOMATRIX ?</Button>
              </Col>

              <Col className='d-flex justify-content-end'>
                <img className='secondsection_img' src={second_section_image} alt="sectionimage" />
              </Col>
            </Row>
          </Container>

        </div>

        {/* third section */}

        <div className='home-thirdsection'>

          <div className='home-thirdsection-colorwrap'>
            <Container>

              <Row className='py-4'>
                <Col md={6}>
                  <h3 className='my-2'>We are providing better solution for solving new problems</h3>
                  
                  <p>GeoMatrix revolutionized the earth observation industry with the highest frequency satellite data commercially available.</p>
                  
                  <Button className='mt-3' variant="outline-primary">INSIGHTS TO DATA </Button>
                </Col>
              </Row>

              <Row className='pt-5'>
                <Col md={4} className='text-center'>
                  <h5>Public Sector</h5>
                  <hr />
                  <p>GeoMatrix provides instant access to land ownership, property details, and environmental data. Stay prepared with real-time weather alerts and keep up with town planning and infrastructure developments in your area, empowering you to engage in your community's growth.</p>
                </Col>
                <Col md ={4} className='text-center'>
                  <h5>Government Sector</h5>
                  <hr />
                  <p>Efficiently manage cadastral records, make informed decisions with town planning tools, and respond effectively to disasters using real-time weather data. Access up-to-date land and environmental information to support policy implementation and governance.</p>
                </Col>
                <Col md={4} className='text-center'>
                  <h5>Business Sector</h5>
                  <hr />
                  <p>Access comprehensive land and property data for market research, identify investment opportunities in infrastructure development, and make well-informed real estate and logistics decisions. Ensure environmental compliance and sustainability, contributing to responsible business practices.</p>
                </Col>
              </Row>

            </Container>
          </div>
          

        </div>

        {/* fourth section */}
        <div className='home-fourthsection'>
          <div className='home-fourthsection-colorwrap py-4'>

            <Container>

              <Row>
                <Col>
                  <h3>Service for next Gen</h3>
                  <p>In our commitment to sustainability and future generations, we are dedicated to providing innovative services that harness data-driven insights for responsible decision-making, fostering a more informed, resilient, and equitable world.</p>
                  <Button variant="outline-primary">SUGN IN TO GEOMATRIX</Button>
                </Col>

                <Col className='d-flex justify-content-end'>
                  <img className='secondsection_img' src={second_section_image} alt="sectionimage" />
                </Col>
              </Row>

              <Row className='pt-5'>
                  <Col md={4} className='text-center'>
                    <h5>Empowering Land Management</h5>
                    <hr />
                    <p>Our Cadastral Mapping Service revolutionizes land management by delivering precise and up-to-date cadastral maps. Harness the power of accurate land information to make informed decisions, enhance land administration, and ensure sustainable development.</p>
                  </Col>
                  <Col md ={4} className='text-center'>
                    <h5>Innovative Land Solutions</h5>
                    <hr />
                    <p>Our Land-Based Services provide a comprehensive range of solutions for efficient land use planning, infrastructure development, and environmental management. We offer data-driven tools and insights to optimize land resources, supporting responsible growth and urban development.</p>
                  </Col>
                  <Col md={4} className='text-center'>
                    <h5>Data-Driven Decision Support</h5>
                    <hr />
                    <p>Our Generated Insights service leverages cutting-edge data analytics to deliver actionable intelligence. Gain valuable insights into land-related trends, weather alerts, and environmental patterns. Use this information to make informed decisions, mitigate risks, and drive positive change for future generations.</p>
                  </Col>
                </Row>
                
              </Container>

          </div>
          

        </div>

    </>
  )
}

export default Home