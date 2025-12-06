import React from 'react';

const FilterBar = ({ 
  onSearch, 
  onCategoryChange, 
  onSortChange, 
  categories 
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col md:flex-row gap-4 border border-gray-200">
      
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => onSearch(e.target.value)}
        className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

    
      <select 
        onChange={(e) => onCategoryChange(e.target.value)}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-1/4"
      >
        <option value="All">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      
      <select 
        onChange={(e) => onSortChange(e.target.value)}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-1/4"
      >
        <option value="default">Sort By</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
        <option value="rating-high-low">Rating: High to Low</option>
      </select>
    </div>
  );
};

export default FilterBar;