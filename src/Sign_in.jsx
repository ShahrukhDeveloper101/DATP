// Sign_in.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sign_in = () => {
  return (
    <div className="container mt-5" id='userRegistrationPage'>
      <div className="row justify-content-center">
        <div className="col-4">
          <h3 className='heading'>Sign in</h3>
          <h5 className="subheading">to continue to DATP</h5>
          <form action="" className='mt-4'>
            <label htmlFor="" className='mb-2' >Email adress</label>
            <input type="text" name="" id="" className="form-control email"/>
            <button className='btn create_account_btn'>Continue</button>
            <h6 className='sign_in_line'>Don't have an account? <Link to="/register" >Create account</Link> </h6>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default Sign_in;
