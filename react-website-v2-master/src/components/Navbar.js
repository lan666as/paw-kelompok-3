import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return() => 
    window.removeEventListener('resize', showButton)
    
  }, []);


  return (
    
    <div >
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            VOTING <i class="fas fa-vote-yea"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click?'fas fa-times' : 'fas fa-bars'}/>
          </div>
          <ul className={click? 'nav-menu active':'nav-menu'}>
            <li className="nav-item">
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/candidates' className='nav-links' onClick={closeMobileMenu}>
                Candidate
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/sign-in' className='nav-links' onClick={closeMobileMenu}>
                Sign-in
              </Link>
            </li>
            <li className="nav-btn">
            {button ? (
                  <Link to='/admin-login' className='btn-link'>
                    <Button buttonStyle='btn--outline'>Login as Admin</Button>
                  </Link>
                ) : (
                  <Link to='/admin-login' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      Login As Admin
                    </Button>
                  </Link>
                )}
            </li>

          </ul>
          
        </div>
      </nav>
    </div>
      
      



    
    
  )
}

export default Navbar;
