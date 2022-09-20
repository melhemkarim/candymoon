import React from 'react';
import './Navbarr.css';
import logo from './logo.png'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { Container, Col , Row , Button , Form , Nav, Navbar } from 'react-bootstrap';
const Navbarr = () => {

  return(
    <Navbar style={{background: "ffeaea" }} expand="lg">
      <Container >
        <Navbar.Brand href="#"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' ,  }}
            navbarScroll
          >
            
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
