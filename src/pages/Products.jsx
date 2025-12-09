// pages/Products.jsx
import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { FaFilter, FaTimes } from 'react-icons/fa';

const Products = ({ products, categories, searchTerm, addToCart }) => {
  const { category } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(category ? [category] : []);
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [sortBy, setSortBy] = useState('featured');
  
  const productsPerPage = 12;

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = products;
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter(product => 
        selectedCategories.includes(product.category)
      );
    }
    
    // Filter by price range
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Sort products
    switch(sortBy) {
      case 'priceLow':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'priceHigh':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Default sorting (featured)
        break;
    }
    
    return result;
  }, [products, searchTerm, selectedCategories, priceRange, sortBy]);

  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Handle category filter
  const handleCategoryChange = (categoryName) => {
    if (selectedCategories.includes(categoryName)) {
      setSelectedCategories(selectedCategories.filter(c => c !== categoryName));
    } else {
      setSelectedCategories([...selectedCategories, categoryName]);
    }
    setCurrentPage(1);
  };

  // Handle price range filter
  const handlePriceRangeChange = (e, index) => {
    const newPriceRange = [...priceRange];
    newPriceRange[index] = parseInt(e.target.value);
    setPriceRange(newPriceRange);
    setCurrentPage(1);
  };

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 bg-gray-50 p-4 min-h-screen">
      {/* Filters Sidebar */}
      <div className={`md:w-1/4 bg-white p-4 rounded-lg shadow-md border border-gray-200 ${showFilters ? 'block fixed inset-0 z-50 overflow-y-auto md:static md:block' : 'hidden md:block'}`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg text-black">Filters</h3>
          <button 
            onClick={() => setShowFilters(false)} 
            className="md:hidden text-black"
          >
            <FaTimes />
          </button>
        </div>
        
        {/* Categories Filter */}
        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-black">Categories</h4>
          <div className="max-h-48 overflow-y-auto">
            {categories.map(cat => (
              <div key={cat.id} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`category-${cat.id}`}
                  checked={selectedCategories.includes(cat.name)}
                  onChange={() => handleCategoryChange(cat.name)}
                  className="mr-2 text-black focus:ring-black"
                />
                <label htmlFor={`category-${cat.id}`} className="text-gray-700">{cat.name} ({cat.productCount})</label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Price Filter */}
        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-black">Price Range</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-black">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[0]}
              onChange={(e) => handlePriceRangeChange(e, 0)}
              className="w-full accent-black"
            />
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => handlePriceRangeChange(e, 1)}
              className="w-full accent-black"
            />
          </div>
        </div>
        
        {/* Sort By */}
        <div>
          <h4 className="font-semibold mb-2 text-black">Sort By</h4>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded bg-white text-black focus:ring-black focus:border-black"
          >
            <option value="featured">Featured</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
        
        {/* Clear Filters Button */}
        <button 
          onClick={() => {
            setSelectedCategories(category ? [category] : []);
            setPriceRange([0, 1000]);
            setSortBy('featured');
          }}
          className="w-full mt-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Clear Filters
        </button>
      </div>

      {/* Products Grid */}
      <div className="md:w-3/4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-black">
            {category ? `${category} Products` : 'All Products'}
            <span className="text-gray-500 text-lg ml-2">({filteredProducts.length} products)</span>
          </h2>
          <button 
            onClick={() => setShowFilters(!showFilters)} 
            className="md:hidden flex items-center bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <FaFilter className="mr-2" /> Filters
          </button>
        </div>

        {currentProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <nav className="flex space-x-2">
                  {currentPage > 1 && (
                    <button
                      onClick={() => paginate(currentPage - 1)}
                      className="px-3 py-1 rounded border border-gray-300 text-black hover:bg-gray-100 transition-colors"
                    >
                      Previous
                    </button>
                  )}
                  
                  {pageNumbers.map(number => (
                    <button
                      key={number}
                      onClick={() => paginate(number)}
                      className={`px-3 py-1 rounded border ${
                        currentPage === number 
                          ? 'bg-black text-white border-black' 
                          : 'border-gray-300 text-black hover:bg-gray-100'
                      } transition-colors`}
                    >
                      {number}
                    </button>
                  ))}
                  
                  {currentPage < totalPages && (
                    <button
                      onClick={() => paginate(currentPage + 1)}
                      className="px-3 py-1 rounded border border-gray-300 text-black hover:bg-gray-100 transition-colors"
                    >
                      Next
                    </button>
                  )}
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-black">No products found</h3>
            <p className="text-gray-500">Try adjusting your filters or search term</p>
            <button 
              onClick={() => {
                setSelectedCategories(category ? [category] : []);
                setPriceRange([0, 1000]);
                setSortBy('featured');
              }}
              className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;