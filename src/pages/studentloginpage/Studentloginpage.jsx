import React,{ useState}from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Topnavigation from '../../components/topnavigation/Topnavigation';
import { Link } from 'react-router-dom';
import './studentloginpage.css';

const Studentloginpage = () => {

  const [email, setEmail]= useState()
  const [password, setPassword]= useState()
  const navigate = useNavigate()
  
  const handleSubmit =(e) => {
    e.preventDefault()
    axios.post('http://127.0.0.1:3001/student-log-in',{email, password})
    .then(result => {console.log(result)
      if(result.data === 'success'){
         navigate('/home')
      }
    })
    .catch(err=> console.log(err))
  }
  
  return (
    <div className='vakuso__studentloginpage-container'>
        <Topnavigation />
        <div className='vakuso__studentloginpage-content'>
        <div className='vakuso__signup-header'> 
        <h2> What's your Student email ?</h2>
        </div>
        <form >
        <div className='vakuso__studentloginpage-form'>
          <input type='email' onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter email' name='email'></input>
          <input type='password' onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter password' name='password'></input>
          <button onClick={handleSubmit} className='submitbtn' type='submit' >Continue</button>
          </div>
        </form>
        <br />
        <div className='vakuso__signup-header'> 
        <h2> OR </h2>
        </div>
        <br />
        <Link to='/log-in'><button className='redirectbtn'>Not a student?</button></Link>

      </div>
      
    </div>
  );
}

export default Studentloginpage;
