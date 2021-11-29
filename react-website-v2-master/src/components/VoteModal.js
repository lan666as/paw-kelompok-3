import React from 'react'
import { Button } from './Button'; 
import './VoteModal.css';


function VoteModal({setOpenModal}) {
  return (
    <div>
      <div className="modalBackground">
        <div className="modalContainer">
        <Button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
        </Button>
          <div className="title">
            <h1>Input Your Name and NIU to Vote</h1>
          </div>

          <h3 className='modalInput'> Name</h3>
          <input
              className='footer-input'
              name='Name'
              type='Name'
              placeholder='Your Name'
            />
          <h3 className='modalInput'> NIM</h3>
          <input
              className='footer-input'
              name='NIM'
              type='NIM'
              placeholder='Your NIM'
            />
           <div className="footer">
           <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
         
          <button>Continue</button>
        </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default VoteModal
