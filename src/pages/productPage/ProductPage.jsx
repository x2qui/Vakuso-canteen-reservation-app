import React,{ useState, useEffect } from 'react';
import './productPage.css';
import { Appnav, Footernav } from '../../components';
import { Link, useParams } from 'react-router-dom';
import QRCode from 'react-qr-code';
import axios from 'axios';

const ProductPage = () => {

  const {productId} = useParams()
  const [product, setProduct] = useState(null);
  const [customerName, setCustomerName] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);
  const [qrData, setQRData] = useState(null);

  useEffect(()=>{
    axios.get(`http://127.0.0.1:4000/products/${productId}`)
    .then(({data})=> setProduct(data))
    .catch(error => console.log('Error fetching product details', error));
  },[productId])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      productName: product.name,
      price: product.price,
      availability: product.availability,
      customerName,
      pickupTime,
    };
    setQRData(data);

    try {
      await axios.post('http://127.0.0.1:4000/admin', data);

      setShowQRCode(true);
    } catch (error) {
      console.error('Error posting data to admin page:', error);
    }
  };

  

  if(!product){
    return<div>Cannot access this product. contact the store</div>
  }
  return (
    <div className='vakuso__productpage-container'>
      <Appnav />
      <Footernav/>
      <div className='vakusp__home-headerbg' />
      <div className='vakuso__productpage-content'>
      
        <div className='vakuso__productpage-items'>
          {product.pictures && product.pictures.length > 0 && (
            <div className='vakuso__productpage-image'>
          {product.pictures.map(pic => (
            <img key={pic.public_id} src={pic.url} alt={`Product ${product.name}`} />
          ))}
          </div>
          )}
        </div>
        <div className='vakuso__productpage-display'>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </div>
        <div className='vakuso__availablity'>
          <p>{product.availability}</p>
         
        </div>
        <div className='vakuso__qr-code'>
            {qrData && <QRCode value={JSON.stringify(qrData)} />}
          </div>

        <form onSubmit={handleSubmit} className='vakuso__productpage-form'>
        <div className='vakuso__loginpage-form'>
          <input className='forminput' type='text'  placeholder='Enter your name' name='name' value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
          <select className='section__padding section__margin ' value={pickupTime} onChange={(e) => setPickupTime(e.target.value)}>
            <option  defaultValue >--Set pick up time--</option>
            <option value="10:00am">10:00am</option>
            <option value="10:30am">10:30am</option>
            <option value="11:00am">11:00am</option>
            <option value="11:30am">11:30am</option>
          </select>
         <button className='submitbtn' type='submit'>Continue</button>
          </div>
        </form>
       
      </div>
      
    </div>
  );
}

export default ProductPage;
