// UserRegister.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import logo from '/3.png';
import { Link } from 'react-router-dom';


const Copyright = () => {
  return (
    <div id="CopyrightComponent">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="d-flex">
              <FontAwesomeIcon icon={faCircleCheck} className='circle_check'/>
              <div className="content">
                <h5>PMC Verified Doctors</h5>
                <h6>Authentic & updated information</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="d-flex">
              <FontAwesomeIcon icon={faCircleCheck} className='circle_check'/>
              <div className="content">
                <h5>Money back guarantee</h5>
                <h6>We return money within 48 hours</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="d-flex">
              <FontAwesomeIcon icon={faCircleCheck} className='circle_check'/>
              <div className="content">
                <h5>15/7 customer support</h5>
                <h6>Well-trained & Supportive team</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="d-flex">
              <FontAwesomeIcon icon={faCircleCheck} className='circle_check'/>
              <div className="content">
                <h5>Secure online payment</h5>
                <h6>We possess SSL / Secure сertificate</h6>
              </div>
            </div>
          </div>
          <hr />
          <div className="col-6">
            <h6 className='copyright'>Copyright @ 
            <Link to="/clinic_registration" className="highlight">
              DATP 
            </Link>  
            | All rights reserved since 2024</h6>
          </div>
          <div className="col-6">
            <h6 className='copyright'>Designed & Developed by 
              <a href="https://shahrukhdeveloper.com" target='_blank' className="highlight">
                Shahrukh Developer
              </a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Copyright;
