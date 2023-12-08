import React from 'react';
import './footernav.css';
import { Link } from 'react-router-dom';
import Homeicon from '../../assets/home-icon.png';
import Searchicon from '../../assets/search-icon.png';
import Order from '../../assets/order-icon.png';
import Accct from '../../assets/account-icon.png';

const Footernav = () => {
  return (
    <div className='vakuso__footer-container'>
        <div className='vakuso__footer-contents'>
            <div className='vakuso__footer-icon'>
                <Link to= '/home'>
                    <img src={Homeicon} alt='go to home' />
                    <h3>Home</h3>
                </Link>
            </div>
            <div className='vakuso__footer-icon'>
                <Link>
                    <img src={Searchicon} alt="search meals" />
                    <h3>Search</h3>
                </Link>
            </div>
            <div className='vakuso__footer-icon'>
                <Link>
                    <img src={Order} alt="my orders" />
                    <h3>Orders</h3>
                </Link>
            </div>
            <div className='vakuso__footer-icon'>
                <Link>
                    <img src={Accct} alt='my account'/>
                    <h3>Account</h3>
                </Link>
            </div>

        </div>
      
    </div>
  );
}

export default Footernav;
