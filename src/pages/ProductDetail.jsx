// pages/ProductDetail.jsx
import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaHeart, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';
import products from '../data/mockData';
import ProductCard from '../components/ProductCard';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);
  
  if (!product) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow-md mx-4 mt-4">
        <h2 className="text-2xl font-bold text-black">Product not found</h2>
        <Link to="/products" className="text-black mt-4 inline-block hover:text-gray-700 transition-colors">
          Back to products
        </Link>
      </div>
    );
  }

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setZoomPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  // Find related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="space-y-12 bg-gray-50 p-4 min-h-screen">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500">
        <Link to="/" className="hover:text-black transition-colors">Home</Link> / 
        <Link to="/products" className="hover:text-black transition-colors ml-1">Products</Link> / 
        <Link to={`/products/${product.category}`} className="hover:text-black transition-colors ml-1">{product.category}</Link> / 
        <span className="ml-1 text-black">{product.name}</span>
      </nav>

      {/* Product Details */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image with Zoom */}
        <div className="md:w-1/2">
          <div 
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 relative"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={imageRef}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-96 object-cover cursor-zoom-in"
            />
            {isZoomed && (
              <div 
                className="absolute top-0 left-0 w-full h-96 overflow-hidden pointer-events-none"
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  backgroundSize: '200%',
                  backgroundRepeat: 'no-repeat',
                  transform: 'scale(1.5)',
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  opacity: 1,
                  zIndex: 10
                }}
              />
            )}
          </div>
          {/* <p className="text-sm text-gray-500 mt-2 text-center">Hover over image to zoom</p> */}
        </div>

        {/* Product Info */}
        <div className="md:w-1/2">
          <Link to="/products" className="inline-flex items-center text-gray-600 mb-4 hover:text-black transition-colors">
            <FaArrowLeft className="mr-2" /> Back to products
          </Link>
          
          <h1 className="text-3xl font-bold mb-2 text-black">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                className={i < product.rating ? "text-black" : "text-gray-300"} 
              />
            ))}
            <span className="ml-2 text-gray-600">({product.reviewCount} reviews)</span>
          </div>

          <div className="mb-6">
            {product.oldPrice ? (
              <div className="flex items-center">
                <span className="text-3xl font-bold text-black">₹{product.price}</span>
                <span className="text-xl text-gray-500 line-through ml-2">₹{product.oldPrice}</span>
                <span className="ml-4 bg-gray-200 text-black px-2 py-1 rounded text-sm">
                  {Math.round((1 - product.price / product.oldPrice) * 100)}% OFF
                </span>
              </div>
            ) : (
              <span className="text-3xl font-bold text-black">₹{product.price}</span>
            )}
          </div>

          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="mb-6">
            <h3 className="font-semibold mb-2 text-black">Details:</h3>
            <ul className="list-disc list-inside text-gray-700 pl-4">
              <li>Material: {product.details?.material || 'Not specified'}</li>
              <li>Color: {product.details?.color || 'Not specified'}</li>
              <li>Dimensions: {product.details?.dimensions || 'Not specified'}</li>
              <li>Weight: {product.details?.weight || 'Not specified'}</li>
            </ul>
          </div>

          <div className="flex space-x-4">
            <button 
              onClick={() => addToCart(product)}
              className="flex-1 bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center"
            >
              <FaShoppingCart className="mr-2" /> Add to Cart
            </button>
            <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-black">
              <FaHeart />
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6 text-black">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} addToCart={addToCart} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;