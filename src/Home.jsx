// UserRegister.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import user_icon_img from '/user.png';
import user_1 from '/1.jpg';
import user_2 from '/2.jpg';
import user_3 from '/3.jpg';
import user_4 from '/4.jpg';
import user_6 from '/v5.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import Search_doc from './Search_doc'; 

const Home = () => {
  return (
    <div className="container mt-5" id='HomeComponent'>
      <div className="row">
        <div className="col-5">
          <button className='doctors_btn'>19000+ Doctor's of Pakistan</button>
          <h1 className='heading'>Look for top doctors <br />close to you</h1>
          <h5 className="subheading">DATP connect you with thousands of doctors and clinics, <br /> making it easy for you to find the right healthcare whenever you need it!</h5>
          <Search_doc placeholder="Search for speciality, city, etc."/>
          <div className="row my-3">
            <div className="col-12 row">
              <div className="col-1 p-0">
                <div className="img_area">
                  <img src={user_1} className="img-fluid"/>
                </div>
              </div>
              <div className="col-1 p-0">
                <div className="img_area img_area_move1">
                  <img src={user_2} className="img-fluid"/>
                </div>
              </div>
              <div className="col-1 p-0">
                <div className="img_area img_area_move2">
                  <img src={user_3} className="img-fluid"/>
                </div>
              </div>
              <div className="col-1 p-0">
                <div className="img_area img_area_move3">
                  <img src={user_4} className="img-fluid"/>
                </div>
              </div>
              <div className="col-1 p-0">
                <div className="img_area img_area_move4">
                  <img src={user_2} className="img-fluid"/>
                </div>
              </div>
              <div className="col-1 p-0">
                <div className="img_area img_area_move5">
                  <img src={user_6} className="img-fluid"/>
                </div>
              </div>
              <div className="col-12"></div>
              <div className="col-3 justify-content-between mt-2 d-flex">
                <FontAwesomeIcon icon={faStar} className='star_rating'/>
                <FontAwesomeIcon icon={faStar} className='star_rating'/>
                <FontAwesomeIcon icon={faStar} className='star_rating'/>
                <FontAwesomeIcon icon={faStar} className='star_rating'/>
                <FontAwesomeIcon icon={faStar} className='star_rating'/>
              </div>
              <div className="col-9">
                <h5 className='rating_data'>4.8  <p>(2000+ Reviews)</p></h5>
              </div>
            </div>
          </div>
          <div className="points_row">
            <div className="row">
              <div className="col-12 p-0 d-flex">
                <FontAwesomeIcon icon={faCircleCheck} className='check_mark'/>
                <h5 className='bullet_point'>Thousands of doctors available!</h5>
              </div>
              <div className="col-12 p-0 d-flex">
                <FontAwesomeIcon icon={faCircleCheck} className='check_mark'/>
                <h5 className='bullet_point'>Book appointments directly!</h5>
              </div>
              <div className="col-12 p-0 d-flex">
                <FontAwesomeIcon icon={faCircleCheck} className='check_mark'/>
                <h5 className='bullet_point'>No waiting time needed!</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-7">
          <video autoPlay loop muted className="animation_video">
            <source src="/video_2.mp4" type="video/mp4" /> Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};
export default Home;
