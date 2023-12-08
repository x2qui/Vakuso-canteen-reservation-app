import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './categories.css';
import { Link } from 'react-router-dom';

const Categories = ({category}) => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        axios.get(`http://127.0.0.1:4000/products/category/${category}`)
        .then(({data}) => setProducts(data))
        .catch(error => console.log('did not fetch products', error));
    }, [category])
  return (
    <div>
      <div className='vakuso__product-list'>
         {products.map(product => (
            <div key={product._id} className='vakuso__product-item'>
                {product.pictures && product.pictures.length > 0 && (
                    <div className='vakuso__product-images'>
                        {product.pictures.map(pic => (
                        <img key={pic.public_id} src={pic.url} alt={`Product ${product.name}`} />
                        ))}
                    </div>
                 )}
                     <div className='Vakuso__product-name'>
                        <h3>{product.name}</h3>
                     </div>
                      {/*  <p>Availability: {product.availability}</p>*/} 
                    <div className='Vakuso__product-price'>
                        <p>${product.price}</p>
                    </div>
                    <div className='vakuso__product-btn'>
                    <Link to ={`/products/${product._id}`}>
                    <button>ADD TO BASKET</button>
                    </Link>
                    </div>             
                        
             </div>
        ))}

                
         </div>
      
    </div>
  );
}

export default Categories;
