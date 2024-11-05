// UserRegister.js
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Questions = () => {
  return (
    <div className="container mt-5" id='QuestionsComponent'>
      <div className="row">
        <div className="col-6">
            <h3 className='heading'>Get free medical advice by asking a doctor</h3>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faCheck} className='icon'/>
                    Ask a question anonymously
                </li>
                <li>
                    <FontAwesomeIcon icon={faCheck} className='icon'/>
                    Get a reply from PMC verified doctors
                </li>
            </ul>
        </div>
        <div className="col-6 d-flex flex-row align-items-center justify-content-end">
            <button className='all_questions_btn'>View all Questions</button>
            <button className='ask_question_btn'>Ask a Question</button>
        </div>
      </div>
    </div>
  );
};
export default Questions;
