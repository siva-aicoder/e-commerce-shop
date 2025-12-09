// pages/Orders.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag, FaArrowLeft, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  // Load orders from localStorage on component mount
  useEffect(() => {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  const getStatusIcon = (status) => {
    return status === 'Delivered' 
      ? <FaCheckCircle className="text-black" /> 
      : <FaTimesCircle className="text-gray-500" />;
  };

  const getStatusClass = (status) => {
    return status === 'Delivered' 
      ? 'bg-gray-100 text-black' 
      : 'bg-black text-white';
  };

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-md">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
              <FaShoppingBag className="text-2xl text-gray-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-black">No orders yet</h2>
          <p className="text-gray-600 mb-8">You haven't placed any orders yet. Start shopping to see your order history here.</p>
          <Link 
            to="/products" 
            className="inline-flex items-center bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-white">
      <div className="flex items-center mb-8">
        <Link 
          to="/" 
          className="flex items-center text-gray-700 font-medium hover:text-black transition-colors border border-gray-300 px-4 py-2 rounded-lg hover:border-black"
        >
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-black ml-8">Order History</h1>
      </div>

      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="font-semibold text-black">Order #{order.id}</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Placed on {new Date(order.date).toLocaleDateString('en-IN')}
                  </p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusClass(order.status)}`}>
                    {order.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 border-b border-gray-200">
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between items-start mb-4 last:mb-0">
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-gray-100 border border-gray-200 rounded-md mr-4 flex-shrink-0 flex items-center justify-center">
                      <span className="text-gray-400 text-xs">Item</span>
                    </div>
                    <div>
                      <p className="font-medium text-black">{item.name}</p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <span className="font-medium text-black">₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="p-6">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  {order.items.length} item{order.items.length !== 1 ? 's' : ''}
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Total</p>
                  <p className="text-xl font-bold text-black">₹{order.total.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;