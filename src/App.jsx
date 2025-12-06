/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useMemo, useEffect } from 'react';
import { products } from './data/products';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import ProductCard from './components/ProductCard';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('default');
  
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  
  const categories = [...new Set(products.map((p) => p.category))];

  
  const filteredProducts = useMemo(() => {
    let result = products;

    if (searchTerm) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (sortOption === 'price-low-high') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high-low') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortOption === 'rating-high-low') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [searchTerm, selectedCategory, sortOption]);

  
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, sortOption]);

  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
     
      <main className="container mx-auto px-4 py-8 flex-grow">
        <FilterBar
          onSearch={setSearchTerm}
          onCategoryChange={setSelectedCategory}
          onSortChange={setSortOption}
          categories={categories}
        />

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-gray-500 text-lg">
              No products found matching your criteria.
            </div>
          )}
        </div>

       
        {filteredProducts.length > itemsPerPage && (
          <div className="flex justify-center items-center mt-10 space-x-4">
            <button 
              onClick={() => handlePageChange(currentPage - 1)} 
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded font-medium transition ${
                currentPage === 1 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Previous
            </button>
            
            <span className="text-gray-700 font-medium">
              Page {currentPage} of {totalPages}
            </span>
            
            <button 
              onClick={() => handlePageChange(currentPage + 1)} 
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded font-medium transition ${
                currentPage === totalPages 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Next
            </button>
          </div>
        )}
      </main>
      
   
      <footer className="bg-gray-900 text-gray-400 py-6 text-center mt-auto">
        <p>&copy; 2024 ShopEasy Product List Assignment</p>
      </footer>
    </div>
  );
}

export default App;