import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from './api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(response => {
        setProducts(response);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link> - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;