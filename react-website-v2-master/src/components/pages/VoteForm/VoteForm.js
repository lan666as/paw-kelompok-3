import React, { useState } from 'react';
import './VoteForm.css';
import SignupForm from './SignupForm';
import FormSuccess from './FormSucces';
import { Link } from 'react-router-dom';

function VoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        
        
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <SignupForm submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default VoteForm;
