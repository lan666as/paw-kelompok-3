import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './VoteForm.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Insert your Name and NIU to Vote
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>NIU</label>
          <input
            className='form-input'
            type='text'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Vote</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your choice form (1-3)'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        
        <button className='form-input-btn' type='submit'>
          Votes
        </button>
       
      </form>
    </div>
  );
};

export default FormSignup;
