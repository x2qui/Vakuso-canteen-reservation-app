import React from 'react';
import './frontpage.css';
import { Link } from 'react-router-dom';
import { Topnavigation } from '../../components';

const Frontpage = () => {
  return (
    <div className='x2q__vakuso-home-container home '>
      <Topnavigation />
      <div className='x2q__vakuso-home-content section__padding' >
            <div className='x2q__vakuso-home-content-text'>
                <h1>Satisfy your <br /> cravings in <br />Ambience</h1>
            </div>
            <div className='x2q__vakuso-home-content-btn'>
            <Link to ='/login'><button className='primarybtn2' >Log in </button></Link> <br />
            <Link to ='/signup'>   <button className='primarybtn'>sign up </button></Link>
            </div>

        </div>
    </div>
  );
}

export default Frontpage;
