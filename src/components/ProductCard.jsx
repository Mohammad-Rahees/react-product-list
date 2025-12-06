import React from 'react';

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    console.log(`Added to cart: ${product.name}`);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100">
      <div className="h-48 overflow-hidden bg-gray-200">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
        />
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-3">{product.category}</p>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold text-blue-600">${product.price}</span>
          <span className="flex items-center text-yellow-500 font-medium">
            ★ {product.rating}
          </span>
        </div>

        <button 
          onClick={handleAddToCart} 
          className="mt-auto w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-700 transition-colors duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;