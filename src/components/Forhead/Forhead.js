import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap'
import './Style.css'

function Forhead() {
  return (
    <div className='forhead-banner'>
        <div className='forhead-colorwraper'>
            <Container>
                <Row>

                    <Col className='py-4'>
                        <h5>Geo Matrix | passed props</h5>
                    </Col>
                    
                </Row>
            </Container>

        </div>

    </div>
  )
}

export default Forhead