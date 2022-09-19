import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icepop from '../Sale/imgs/icepop.png'
import orange from '../Sale/imgs/orange.png'
import blue from '../Sale/imgs/blue.png'
import lemon from '../Sale/imgs/lemon.png'
import grape from '../Sale/imgs/grape.png'




import './Sale.css';

export const Sale = () => {


    
return(
    <section className='Sale' id='Sale'>
        <div className='p__opensans title-sale blink-me'>
            <h1>Sale</h1>
            
        </div>
        <div className='title-prime'><h4 className='p__opensans'>50% on all prime drinks </h4></div>

        <div className='prime'>
    <Container>
        <Row>
            <Col size={12}>
                <img src={grape} alt="icepop" />
            </Col>
            <Col size={12}>
                <img src={blue} alt="icepop" />
            </Col>
            <Col size={12}>
                 <img src={lemon} alt="icepop" />
             </Col>
             <Col size={12}>
                 <img src={orange} alt="icepop" />
             </Col>
             
      </Row>
    </Container>
        </div>
   
    </section>

)

}
export default Sale;
