import React from 'react';
import './topnavigation.css';
import Logo from '../../assets/LOGO.png';
import Loginicon from '../../assets/Login_icon.png';

import {Link} from 'react-router-dom';

const Topnavigation = () => {
    
  return (
    <div className='vakuso__topnav'>
        <div className='vakuso__topnav-content'>
            <div className='vakuso__topnav-logo'>
                <Link to='/'><img src={Logo} alt='VAKUSO_LOGO' /></Link>
            </div>
            <div className='vakuso__topnav-items'>
                <div className='vakuso__topnav-login-btn'>
                   <Link to="/login"> <button className='topnavlogin'><img src={Loginicon} alt='Login'/><span>Log in</span></button></Link>
                </div>
                <div className='vakuso__topnav-signup-btn'>
                <Link to="/signup"><button className='topnavsignup'>Sign up</button></Link>
                </div>
               
            </div>
        </div>
      
    </div>
  );
}

export default Topnavigation;
