import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag, FiHeart, FiUser } from 'react-icons/fi';

const UserDashboard = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-orange-600">My Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/products" className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
          <FiShoppingBag className="text-4xl text-orange-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Browse Products</h3>
          <p className="text-gray-600 text-sm">Shop our latest products</p>
        </Link>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FiHeart className="text-4xl text-orange-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Wishlist</h3>
          <p className="text-gray-600 text-sm">Your saved items</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FiUser className="text-4xl text-orange-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Profile</h3>
          <p className="text-gray-600 text-sm">Manage your account</p>
        </div>
      </div>
      
      {/* Recent orders or recommendations can be added here */}
    </div>
  );
};

export default UserDashboard;