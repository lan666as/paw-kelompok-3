import React from 'react';
import { useState } from 'react';
import { Button } from './Button';
import './Votes.css';
import { FaFire } from 'react-icons/fa';
import {BiMale} from  'react-icons/bi';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';

import { Link } from 'react-router-dom';




function Votes() {
  const [openVoteModal, setModalOpen] = useState(false);
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='votes__section'>
        <div className='votes__wrapper'>
          <h1 className='votes__heading'>VOTES</h1>
          <div className='votes__container'>
            <div className='votes__container-card'>
              <div className='votes__container-cardInfo'>
                <div className='icon'>
                  <BiMale />
                </div>
                <h3>Bulan Ayu Puspita</h3>
                <h4>TI 2020</h4>
                
                <ul className='votes__container-features'>
                  <li>Tegas</li>
                  <li>Disiplin</li>
                  <li>Terarah</li>
                </ul>
                
                
              </div>
            </div>
            <div to='/sign-up' className='votes__container-card'>
              <div className='votes__container-cardInfo'>
                <div className='icon'>
                  <BiMale />
                </div>
                <h3>Dani Sudarmana</h3>
                <h4>TE 2020 </h4>
                
                <ul className='votes__container-features'>
                  <li>Berani</li>
                  <li>Kritis</li>
                  <li>Tanggap dan Cerdas </li>
                </ul>
                
              </div>
            </div>
            <div to='/sign-up' className='votes__container-card'>
              <div className='votes__container-cardInfo'>
                <div className='icon'>
                  <BiMale />
                </div>
                <h3>Kukuh Putra</h3>
                <h4>TB 2020</h4>
                
                <ul className='votes__container-features'>
                  <li>Kerja</li>
                  <li>Kerja</li>
                  <li>Kerja</li>
                </ul>
                
                
              </div>
            </div>
            
          </div>
          <Link to='/vote-form' className='btn-link'>
                    <Button className='VoteBtn' buttonStyle='btn-primary' buttonSize='btn--wide' buttonColor='blue'>Click to Vote</Button>
          </Link>
      </div>
        </div>
        
    </IconContext.Provider>
  );
}
export default Votes;
