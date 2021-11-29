import React, { useState } from 'react';
import './VoteForm.css';
import FormSignup from './SignupForm';
import FormSuccess from './FormSucces';

function VoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default VoteForm;
