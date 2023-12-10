import React,{useState} from 'react';
import './homepage.css';
import { Appnav, Footernav, Categories } from '../../components';
import Homeimg from '../../assets/homepage-mobile.png';
import axios from 'axios';


const Homepage = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };
  return (
    <div className='vakuso__home-container'>
      <Appnav />
      <Footernav/>
      <div className='vakuso__home-content'>
        <div className='vakusp__home-headerbg' />
        <div className='vakuso__home-header appcontainer'>
            <p>Hello,</p>
            <h2>Here's today's Menu</h2>
            <img className='vakuso__home-headerimg' src={Homeimg} />
        </div>
        <div className='vakuso__meals appcontainer'>
          <div className='vakuso__breakfast' onClick={() => handleCategoryClick('breakfast')}>
            <h3>Breakfast</h3>
            {activeCategory === 'breakfast' && (
            <div className='vakuso__breakfast-content'>
            <Categories category="breakfast" />
            </div>
             )}
          </div>
         <div className='vakuso__lunch' onClick={() => handleCategoryClick('lunch')}>
          <h3>Lunch</h3>
          {activeCategory === 'lunch' && (
            <div className='vakuso__breakfast-content'>
            <Categories category="breakfast" />
            </div>
             )}
          <div className='vakuso__lunch-content'>
          <Categories category="lunch" />
          </div>
         </div>
         <div className='vakuso__dinner' onClick={() => handleCategoryClick('dinner')}>
          <h3>Dinner</h3>
          {activeCategory === 'dinner' && (
            <div className='vakuso__breakfast-content'>
            <Categories category="dinner" />
            </div>
             )}
          
         </div>
         <div className='vakuso__snacks' onClick={() => handleCategoryClick('snacks')}>
          <h3>Snacks</h3>
          {activeCategory === 'snacks' && (
            <div className='vakuso__breakfast-content'>
            <Categories category="snacks" />
            </div>
             )}
         
         </div>
         <div className='vakuso__drinks' onClick={() => handleCategoryClick('drinks')}>
          <h3>Drinks</h3>
          {activeCategory === 'snacks' && (
            <div className='vakuso__breakfast-content'>
            <Categories category="drinks" />
            </div>
             )}
          
         </div>

        </div>
      </div>
      
        
    </div>
  );
}

export default Homepage;
