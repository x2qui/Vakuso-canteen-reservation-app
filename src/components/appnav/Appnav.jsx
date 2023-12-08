import React from 'react';
import './appnav.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/LOGO.png';
import basket from '../../assets/basket-icon.png';
import promo from '../../assets/promotions-icon.png';

const Appnav = () => {
  return (
    <div className='vakuso__appnav-container'>
        <div className='vakuso__appnav-content'>
            <div className='vakuso__appnav-Logo'>
                <Link to="/home">
                <img src={Logo} alt='Logo' />
                </Link>
            </div>
            <div className='vakuso__appnav-icon'>
                <Link>
                <img src={basket} alt='basket' />
                </Link>
                <Link>
                <img src={promo} alt='promotion' />
                </Link>
            </div>
        </div>
      
    </div>
  );
}

export default Appnav;
