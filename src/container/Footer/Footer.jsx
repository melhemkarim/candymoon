import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit'
import './Footer.css';
import logo from '../Footer/logo.png'
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';


export const Footer = () => {


    
return(
    <section className='Footer' id='Footer'>
      <MDBFooter className='footer text-white text-center text-lg-left'>
      <MDBContainer className='container-footer  p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <img src={logo} alt="" />
          </MDBCol>

          <MDBCol lg='3' md='6' className='links mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' >
                  Home
                </a>
              </li>
              <li>
                <a href='#!' >
                  Categories
                </a>
              </li>
              <li>
                <a href='#!' >
                  About
                </a>
              </li>
              <li>
                <a href='#!' >
                  Contact
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='socials mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Socials</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' >
                <FiFacebook />
                </a>
              </li>
              <li>
                <a href='#!' >
                <FiInstagram />

                </a>
              </li>
              <li>
                <a href='#!' >
                <FiTwitter />

                </a>
              </li>
              <li>
                <a href='#!' >
                <FiYoutube />

                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: '#FF5757' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://mdbootstrap.com/'>
          Candy Moon
        </a>
      </div>
    </MDBFooter>
   
    </section>

)

}
export default Footer;
