import React from 'react';
import './Follow.css';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';
import { Container , Button , Col , Row } from 'react-bootstrap';


const Follow = () => {
  return (
    <Container>
   <div className='follow'>
    <h1 className='follow-title'>Follow Us</h1>
    <div className='follow-socials'>
      <Container>
    <Row>
        <Col><Button className='socials-btn rounded-circle' variant="primary"><a href=""><FiFacebook/></a></Button>{' '}</Col>
        <Col>    <Button className='socials-btn rounded-circle' variant="info"><a href=""><FiTwitter /></a></Button>{' '}</Col>
        <Col> <Button className='socials-btn rounded-circle' variant="warning"><a href=""><FiInstagram /></a></Button>{' '}</Col>
        <Col> <Button className='socials-btn rounded-circle' variant="danger"><a href=""><FiYoutube/></a></Button>{' '}</Col>
      </Row>

      </Container>

    </div>

   </div>
   </Container>
  );
};


export default Follow;
