import React, { useState } from 'react';
import Topnavigation from '../../components/topnavigation/Topnavigation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './loginpage.css';


const Loginpage = () => {
  const [email, setEmail]= useState()
  const [password, setPassword]= useState()
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://127.0.0.1:4000/login', { email, password });

        if (response.data.status === 'success') {
            if (response.data.isAdmin) {
                navigate('/admin');
            } else {
                navigate('/home');
            }
        }
    } catch (error) {
        console.log('Login error:', error);
    }
};

 

  return (
    <div className='vakuso__loginpage-container'>
      <Topnavigation/>
      <div className='vakuso__loginpage-content'>
      <div className='vakuso__signup-header'> 
        <h2> What's your login details ?</h2>
        </div>
        <form onSubmit={handleSubmit} >
        <div className='vakuso__loginpage-form'>
          <input type='email' onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter email' name='email' ></input>
          <input type='password' onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter password' name='password' ></input>
         <button className='submitbtn' type='submit'>Continue</button>
          </div>
        </form>
       

      </div>

    </div>
  );
}

export default Loginpage;
