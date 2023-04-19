import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <MDBFooter bgColor='#685858' style={{ marginTop:"120px" }} className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='text-uppercase fw-bold mb-4'style={{ color: '#75b91d'  }}>
          <span>CONTACT US:</span>
        </div>

        <div>
          <a href='https://www.facebook.com' className='me-4 text-reset'>
            <MDBIcon  icon="facebook-f" style={{ color: 'blue' }} />
          </a>
          <a href='https://twitter.com' className='me-4 text-reset'>
            <MDBIcon  icon="twitter" style={{ color: 'blue' }}/>
          </a>
          <a href='https://google.com' className='me-4 text-reset'>
            <MDBIcon  icon="google" style={{ color: 'red' }} />
          </a>
          <a href='https://instgram.com' className='me-4 text-reset'>
            <MDBIcon  icon="instagram" style={{ color: 'pink' }}/>
          </a>
          <a href='https://github.com' className='me-4 text-reset'>
            <MDBIcon  icon="github" style={{ color: 'black' }}/>
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'style={{ color: '#75b91d'  }}>
                <MDBIcon icon="gem" className="me-3" />
              About US :
              </h6>
              <p>
              Our mission is to give our customers peace of mind when it comes to food selection.
        
              </p>
            </MDBCol>


            

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'style={{ color: '#75b91d'  }}>Contact Information:</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                 location: Jordan , Amman 
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                 email: info@my_fridge.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />
                phone: + 01 234 567 88
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright
        <a className='text-reset fw-bold' href='j' style={{ padding: '350px'  }}>
                  MY-FRIDGE.com
        </a>
      </div>
    </MDBFooter>
  );
}