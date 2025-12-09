// pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar } from 'react-icons/fa';

const Home = ({ categories, featuredProducts }) => {
  return (
    <div className="space-y-12 bg-gray-50 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-800 text-white rounded-lg p-8 md:p-12 mx-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Elevate Your Style</h1>
          <p className="text-lg mb-6">Discover the latest trends and exclusive collections</p>
          <Link 
            to="/products" 
            className="inline-flex items-center bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Shop Now <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Categories Section - EVEN MORE COMPACT */}
      <section className="px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-black">Shop by Category</h2>
          {/* <Link 
            to="/categories" 
            className="text-black text-sm flex items-center hover:text-gray-700 transition-colors"
          >
            View All <FaArrowRight className="ml-1" size={12} />
          </Link> */}
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
          {categories.map(category => (
            <Link 
              key={category.id} 
              to={`/products/${category.name}`}
              className="block bg-white rounded-md p-2 shadow-xs hover:shadow-sm transition-all border border-gray-100 text-center group"
            >
              <div className="h-8 w-8 mx-auto mb-1 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                <span className="text-sm">{category.icon}</span>
              </div>
              <div>
                <h3 className="font-medium text-black text-xs truncate">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-black">Featured Products</h2>
          <Link 
            to="/products" 
            className="text-black font-medium flex items-center hover:text-gray-700 transition-colors"
          >
            View All <FaArrowRight className="ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
              <Link to={`/product/${product.id}`}>
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1 text-black">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < product.rating ? "text-yellow-500" : "text-gray-300"} 
                        size={14} 
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-black">₹{product.price}</span>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-500 line-through">₹{product.oldPrice}</span>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-black text-white rounded-lg p-8 mx-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Summer Sale</h2>
          <p className="text-lg mb-6">Up to 50% off on selected items. Limited time only!</p>
          <Link 
            to="/products" 
            className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Shop Sale
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;