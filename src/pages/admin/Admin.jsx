import React, { useState, useEffect } from 'react';
import { Appnav } from '../../components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './admin.css';

const Admin = () => {
  const [orders, setOrders] = useState([]);
  const [sumProducts, setTotalProducts] = useState(0);
  const [sumPrice, setTotalPrice] = useState(0);
  const [sumCategories, setTotalCategories] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const ordersPerPage = 5;

  useEffect(() => {
    axios.get('http://localhost:4000/products/stats')
    .then(response => {
      setTotalProducts(response.data.sumProducts);
      setTotalPrice(response.data.sumPrice);
      setTotalCategories(response.data.sumCategories);
    })
    .catch(error => console.error('Error fetching product statistics:', error));
}, []);

  useEffect(() => {
    axios.get('http://127.0.0.1:4000/admin')
      .then(({ data }) => setOrders(data))
      .catch(error => console.log('Error fetching orders:', error));
  }, []);

  useEffect(() => {
    axios.get('http://127.0.0.1:4000/products')
      .then(({ data }) => setProducts(data))
      .catch(error => console.log('Error fetching products:', error));
  }, []);



  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const ordersRow = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  const productsRow = products.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(orders.length/ ordersPerPage)

 

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className='vakuso__admin-container'>
      <Appnav />
    
    
      <div className='vakuso__admin-content'>
        <div className='inventory-box'>
        <h2>Inventory</h2>
        <div className='vakuso__inventory'>
          <div className='vakuso__sumproducts'>
            <h3>Total Products</h3>
            <p> {sumProducts}</p>
          </div>
          <div className='vakuso__sumprice'>
            <h3>Total Purchase</h3>
            <p> £{sumPrice}</p>
          </div>
          <div className='vakuso__sumcategories'>
            <h3>Categories</h3>
            <p> {sumCategories}</p>
          </div>

        </div>
        </div>
        <div className='inventory-box'>
        <div><h2>Orders</h2></div>
        <div>
        <table className='vakuso__admintable'>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Availability</th>
            <th>Customer Name</th>
            <th>Pickup Time</th>
          </tr>
        </thead>
        <tbody>
        {ordersRow.map(order => (
            <tr key={order._id}>
              <td>{order.productName}</td>
              <td>${order.price}</td>
              <td>{order.availability}</td>
              <td>{order.customerName}</td>
              <td>{order.pickupTime}</td>
            </tr>
          ))}
        </tbody>
        </table>

        <div className='pagination'>
          <button className='navorders' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
          </button>
          <span>{currentPage} / {totalPages}</span>
          <button  className='navorders' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
          </button>
        </div>
        </div>
        </div>
        <div className='inventory-box'>
        <div className='vakuso__product_tab'><h2>Products</h2>
        <Link to ="/products"><button className='navorders'>+ Add Product</button></Link></div>
          <table className='vakuso__admintable'>
         <thead>
          <tr>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Category</th>
            
          </tr>
         </thead>
         <tbody>
          {productsRow.map(product => (
            <tr key={product._id}>
              <td>
                {product.pictures && product.pictures.length > 0 && (
                  <div className='vakuso__product-tabimg'>
                    {product.pictures.map(pic => (
                      <img key={pic.public_id} src={pic.url} alt={`Product ${product.name}`} />
                    ))}
                  </div>
                )}
              </td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
              
            </tr>
             ))}
          </tbody>
         </table>
        </div>
      </div>
    
    </div>
  );
}

export default Admin;
