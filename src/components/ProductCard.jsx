import { Link } from 'react-router-dom';
import { FaStar, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { formatInrPrice } from '../utils';

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
      <Link to={`/product/${product.id}`}>
        <div className="h-48 bg-gray-100">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>
      </Link>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold text-black hover:text-gray-700 transition-colors">{product.name}</h3>
          </Link>
          <button className="text-gray-400 hover:text-black transition-colors">
            <FaHeart />
          </button>
        </div>
        
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar 
              key={i} 
              className={i < product.rating ? "text-black" : "text-gray-300"} 
              size={14} 
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
        </div>
        
        <div className="flex justify-between items-center mb-3">
          <span className="text-lg font-bold text-black">{formatInrPrice(product.price)}</span>
          {product.oldPrice && (
            <span className="text-sm text-gray-500 line-through">{formatInrPrice(product.oldPrice)}</span>
          )}
        </div>
        
        <button 
          onClick={handleAddToCart}
          className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center"
        >
          <FaShoppingCart className="mr-2" /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
