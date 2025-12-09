// pages/Cart.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaMinus, FaTrash, FaArrowRight, FaShoppingBag } from 'react-icons/fa';

const Cart = ({ cart, removeFromCart, updateQuantity, getCartTotal }) => {
  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-md">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
              <FaShoppingBag className="text-2xl text-gray-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
          <Link 
            to="/products" 
            className="inline-flex items-center bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
          >
            Continue Shopping <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-gray-900">Shopping Cart</h1>
      <p className="text-gray-600 mb-8">{cart.length} {cart.length === 1 ? 'item' : 'items'}</p>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {cart.map(item => (
              <div key={item.id} className="border-b border-gray-200 last:border-b-0">
                <div className="flex p-6">
                  <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="ml-4 flex-grow">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">{item.category}</p>
                    <p className="text-lg font-bold mt-2 text-gray-900">₹{item.price}</p>
                  </div>
                  
                  <div className="flex flex-col items-end justify-between">
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-black transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <FaTrash size={14} />
                    </button>
                    
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                        disabled={item.quantity <= 1}
                        aria-label="Decrease quantity"
                      >
                        <FaMinus size={10} />
                      </button>
                      
                      <span className="px-3 py-1 text-gray-900 min-w-[2rem] text-center">{item.quantity}</span>
                      
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <FaPlus size={10} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-4">
            <h3 className="text-xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-4">Order Summary</h3>
            
            <div className="space-y-3 mb-6">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-gray-600">{item.name} x {item.quantity}</span>
                  <span className="text-gray-900 font-medium">₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between font-semibold text-lg">
                <span className="text-gray-900">Total</span>
                <span className="text-gray-900">₹{getCartTotal().toFixed(2)}</span>
              </div>
            </div>
            
            <Link 
              to="/checkout" 
              className="block w-full bg-black text-white text-center py-3 rounded-md font-medium hover:bg-gray-800 transition-colors mb-4"
            >
              Proceed to Checkout
            </Link>
            
            <Link 
              to="/products" 
              className="flex items-center justify-center text-gray-600 hover:text-black transition-colors font-medium"
            >
              Continue Shopping <FaArrowRight className="ml-2" size={12} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;