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
    </>
  )
}

export default Home