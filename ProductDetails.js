import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from './api';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(productId)
      .then(response => {
        console.log('API Response:', response);
        setProduct(response);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [productId]);

  return (
    <div>
      <h2>Product Details</h2>
      {product ? (
        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetails;



