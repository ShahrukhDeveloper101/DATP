// UserRegister.js
import React from 'react';
import {Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home_Categories = () => {
  return (
    <div className="container mt-5" id='CategoriesComponent'>
      <div className="row">
        <h3 className='heading'>Popular Categories</h3>
        <div className="col-2 my-2">
          <button className="category_area">
            Common Health Issues
          </button>
        </div>
        <div className="col-2 my-2">
          <button className="category_area">
            Skin & Hair
          </button>
        </div>
        <div className="col-2 my-2">
          <button className="category_area">
            Women's Health
          </button>
        </div>
        <div className="col-2 my-2">
          <button className="category_area">
            Digestion Problem
          </button>
        </div>
        <div className="col-2 my-2">
          <button className="category_area">
            Diabetic Problems
          </button>
        </div>
        <div className="col-2 my-2">
          <button className="category_area">
            Weight & Diet Counselling
          </button>
        </div>
        <h3 className='heading mt-4'>Other Categories</h3>
        <div className="col-2 my-2">
          <button className="category_area">
            Fertility Issues
          </button>
        </div>
        <div className="col-2 my-2">
          <button className="category_area">
            Surgery Issues
          </button>
        </div>
        <div className="col-2 my-2">
          <button className="category_area">
            Brain Surgery
          </button>
        </div>
        <div className="col-2 my-2">
          <button className="category_area">
            Kidney Problem
          </button>
        </div>
        <div className="col-2 my-2">
          <button className="category_area">
            Hormone Problems
          </button>
        </div>
        <div className="col-2 my-2">
          <button className="category_area">
            Teeth Related Problems
          </button>
        </div>
        <div className="col-2 my-2">
          <button className="category_area">
            Inflammatory Problems
          </button>
        </div>
        <div className="col-2 my-2">
          <button className="category_area">
            Eye Related Problems
          </button>
        </div>
        <div className="col-2 my-2">
          <button className="category_area">
            Stomach Problem
          </button>
        </div>
        <div className="col-2 my-2">
          <button className="category_area">
            Nerve & Brain Problems
          </button>
        </div>
        <div className="col-2 my-2">
          <button className="category_area">
            Piles
          </button>
        </div>
        <div className="col-2 my-2">
          <button className="category_area">
            Depression / Anxiety
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home_Categories;
