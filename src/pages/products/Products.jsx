import React, {useState} from 'react';
import { useNavigate } from 'react-router';
import './products.css';
import { Appnav } from '../../components';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';


const Products = () => {


const [name, setName] = useState("");
const [availability, setAvailability] = useState("");
const [price, setPrice] = useState("");
const [category, setCategory] = useState("");
const [pictures, setPictures] = useState([]);
const navigate = useNavigate();

const handleSubmit =(e) => {
    e.preventDefault()
    if(!name || !availability || !price || !category || !pictures){
      return alert("Please complete the form")
    }
    axios.post('http://127.0.0.1:4000/products', { name, availability, price, category, pictures }, { timeout: 5000 })
    .then(({ data }) => {
        if (data.length>0) {
            setTimeout(() => {
                navigate('/home');
            }, 1500);
        }
    })
    .catch(err => console.error(err));

  }

function showWidget(){
    const widget = window.cloudinary.createUploadWidget({
        cloudName: 'dqgb5ahf2',
        uploadPreset: 'ml_default'
    },
    (error, result) =>{
      if (!error && result.event === "success") {
        console.log(result); 
        setPictures((prev) => [...prev, { url: result.info.url, public_id: result.info.public_id }]);
    }
      
    }
    );
    widget.open();
}
  
  return (
    <div className='vakuso__products-container'>
      <Appnav />
     
      <div className='vakuso__studentloginpage-content'>
        <div className='vakuso__signup-header'> 
        <h2> Create a Product</h2>
        </div>
        <form className='Products-form' onSubmit={handleSubmit}>
        <div className='vakuso__studentloginpage-form'>
          <input type='text' onChange={(e) => { setName(e.target.value) }} placeholder='Product Name' name='name' />
          <input type='text' onChange={(e) => { setAvailability(e.target.value) }} placeholder='Set time till out of order' name='availability' />
          <input type='number' onChange={(e) => { setPrice(e.target.value) }} placeholder='($) Price' name='price'/>
          <select className='section__padding section__margin'onChange={(e) => { setCategory(e.target.value) }}>
            <option  defaultValue >--Set category--</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snacks">Snacks</option>
            <option value="drinks">Drinks</option>
          </select>
          <button className='submitbtn section__margin' type='button' onClick={showWidget}>Upload product</button>
          <div className='vakuso__upload-preview-container '>
            {pictures.map((image) => (
                <div className='image-preview'>
                    <img alt="upload" src={image.url} />
                    
                </div>
            ) )}
          </div> 
            
         
          <button  className='submitbtn' type='submit' >Create Product</button>
         
          </div>
        </form>
        <div className='section__margin' />
        <Link to="/admin"> <h2 className="goback">GO BACK</h2></Link>
        </div>
        
    </div>
  );
}

export default Products;
