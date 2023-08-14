const products = [
    { id: 0, name: 'Alternator', description: '12V alternator 2009 Toyota Camry', price: 150 },
    { id: 1, name: 'Product 2', description: 'Description of Product 2', price: 20 },
    { id: 2, name: 'Product 3', description: 'Description of Product 3', price: 30 },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  };
  
  export const getProductById = (productId) => {
    console.log('Products Array:', products); // Add this console log
    return new Promise((resolve, reject) => {
      const product = products.find((product) => product.id === productId);
  
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Product not found'));
      }
    });
  };
  
  