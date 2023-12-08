import React,{useState} from 'react';
import './signup.css';
import { Topnavigation } from '../../components';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [name, setName]= useState()
    const [email, setEmail]= useState()
    const [password, setPassword]= useState()
   
    const navigate = useNavigate() 
  
    const handleSubmit =(e) => {
      e.preventDefault()
      axios.post('http://127.0.0.1:4000/signup', { name, email, password })
      .then(result => {
        const { data } = result;
        console.log(data);
        
        if (data._id) {
          navigate('/login');
        }
      })
      .catch(err=> console.log(err))
    } 

  return (
    <div className='vakuso__signup-container'>
      <Topnavigation />
      
      <div className='vakuso__signup-content'>
        <div className='vakuso__signup-header'>
        <h2> Please fill the form ?</h2>
        </div>
        <form onSubmit={handleSubmit}>
        
          <div className='vakuso__signupform'>
         <input type='text' onChange={(e)=> {setName(e.target.value)}} placeholder='Name' name='name'  />
          <input type='email' onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter email' name='email' ></input>
          <input type='password' onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter password' name='password'></input>
          <button  className='submitbtn' type='submit'>Continue</button>
          </div>
        </form>
        
        <br />
        <div className='vakuso__signup-header'>
        <h2> OR </h2>
        </div>
        <br />
        <Link to='/login'><button className='redirectbtn'> Log in as a student</button></Link>

      </div>
    </div>
  );
}

export default Signup;
