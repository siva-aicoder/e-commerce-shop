// pages/Checkout.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaArrowLeft, FaLock, FaCreditCard, FaUser, FaMapMarkerAlt } from 'react-icons/fa';

const Checkout = ({ cart, getCartTotal, clearCart }) => {
  const navigate = useNavigate();
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [activeSection, setActiveSection] = useState('contact');
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would process the payment here
    // For this demo, we'll just show a success message
    setOrderSuccess(true);
    clearCart();
  };

  if (orderSuccess) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-xl border border-gray-200 p-8 text-center shadow-sm">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheckCircle className="text-3xl text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Order Successful!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your order. Your order number is #{Math.floor(Math.random() * 1000000)}.
            You will receive an email confirmation shortly.
          </p>
          <button 
            onClick={() => navigate('/products')} 
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors border border-black"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-xl border border-gray-200 p-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <button 
            onClick={() => navigate('/products')} 
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors border border-black"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <button 
            onClick={() => navigate('/cart')} 
            className="flex items-center text-gray-700 font-medium hover:text-black transition-colors border border-gray-300 px-4 py-2 rounded-lg hover:border-black"
          >
            <FaArrowLeft className="mr-2" /> Back to cart
          </button>
          <h1 className="text-3xl font-bold text-gray-900 ml-8">Checkout</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Checkout Form */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              {/* Progress Steps */}
              <div className="border-b border-gray-200">
                <div className="flex">
                  <button 
                    className={`flex-1 py-4 text-center font-medium ${activeSection === 'contact' ? 'text-black border-b-2 border-black' : 'text-gray-500'}`}
                    onClick={() => setActiveSection('contact')}
                  >
                    Contact
                  </button>
                  <button 
                    className={`flex-1 py-4 text-center font-medium ${activeSection === 'shipping' ? 'text-black border-b-2 border-black' : 'text-gray-500'}`}
                    onClick={() => setActiveSection('shipping')}
                  >
                    Shipping
                  </button>
                  <button 
                    className={`flex-1 py-4 text-center font-medium ${activeSection === 'payment' ? 'text-black border-b-2 border-black' : 'text-gray-500'}`}
                    onClick={() => setActiveSection('payment')}
                  >
                    Payment
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6">
                {/* Contact Information */}
                <div className={`mb-8 ${activeSection !== 'contact' && 'hidden'}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3">
                      <FaUser className="text-white text-sm" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all"
                  />
                </div>

                {/* Shipping Address */}
                <div className={`mb-8 ${activeSection !== 'shipping' && 'hidden'}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3">
                      <FaMapMarkerAlt className="text-white text-sm" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Shipping Address</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all"
                    />
                  </div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-black focus:border-black transition-all"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all"
                    />
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="ZIP Code"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all"
                    />
                  </div>
                  <div className="flex justify-end mt-6">
                    <button 
                      type="button" 
                      className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-900 transition-colors border border-black"
                      onClick={() => setActiveSection('payment')}
                    >
                      Continue to Payment
                    </button>
                  </div>
                </div>

                {/* Payment Information */}
                <div className={`mb-8 ${activeSection !== 'payment' && 'hidden'}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3">
                      <FaCreditCard className="text-white text-sm" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Payment Information</h3>
                  </div>
                  <div className="mb-4 relative">
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card Number"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all pl-12"
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <FaCreditCard />
                    </div>
                  </div>
                  <input
                    type="text"
                    name="cardName"
                    placeholder="Name on Card"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-black focus:border-black transition-all"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="cardExpiry"
                      placeholder="MM/YY"
                      value={formData.cardExpiry}
                      onChange={handleInputChange}
                      required
                      className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all"
                    />
                    <div className="relative">
                      <input
                        type="text"
                        name="cardCvv"
                        placeholder="CVV"
                        value={formData.cardCvv}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all"
                      />
                    </div>
                  </div>
                </div>

                {activeSection === 'payment' && (
                  <button 
                    type="submit" 
                    className="w-full bg-black text-white py-4 rounded-lg font-medium hover:bg-gray-900 transition-colors flex items-center justify-center border border-black mt-6"
                  >
                    <FaLock className="mr-2" /> Pay Now
                  </button>
                )}
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">Order Summary</h3>
              
              <div className="space-y-4 mb-6 max-h-80 overflow-y-auto pr-2">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-start">
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-gray-100 border border-gray-200 rounded-md mr-4 flex-shrink-0 overflow-hidden">
                        {item.image ? (
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-200">
                            <span className="text-gray-400 text-xs">No Image</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-medium text-gray-900">₹{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">₹{getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900">₹0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900">₹{(getCartTotal() * 0.08).toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-3 border-t border-gray-200">
                  <span className="text-black">Total</span>
                  <span className="text-black">₹{(getCartTotal() * 1.08).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;