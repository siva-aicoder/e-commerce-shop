// components/Header.jsx (updated)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch, FaHome, FaShoppingBag, FaUser, FaHeart, FaTimes, FaEdit, FaSignOutAlt, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHistory } from 'react-icons/fa';

const Header = ({ cartItemsCount, searchTerm, setSearchTerm }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Fashion Street, New York, NY 10001",
    joinDate: "January 2023",
    orders: 12,
    wishlist: 8
  });

  const handleLogout = () => {
    console.log("User logged out");
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="bg-black text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 mb-4 md:mb-0">
              <FaShoppingBag className="text-2xl text-white" />
              <span className="text-xl font-bold">STYLE.COM</span>
            </Link>

            {/* Search Bar */}
            <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full py-2 px-4 pr-10 rounded-lg border border-white-700 bg-black text-white placeholder-white-900 focus:outline-none focus:ring-2 focus:ring-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute right-3 top-3 text-gray-400" />
            </div>

            {/* Navigation Icons */}
            <div className="flex items-center space-x-6">
              <Link to="/" className="flex flex-col items-center text-gray-300 hover:text-white transition-colors">
                <FaHome className="text-xl" />
                <span className="text-xs mt-1">Home</span>
              </Link>
              
              <Link to="/products" className="flex flex-col items-center text-gray-300 hover:text-white transition-colors">
                <FaHeart className="text-xl" />
                <span className="text-xs mt-1">Products</span>
              </Link>
              
              {/* <Link to="/orders" className="flex flex-col items-center text-gray-300 hover:text-white transition-colors">
                <FaHistory className="text-xl" />
                <span className="text-xs mt-1">Orders</span>
              </Link> */}
              
              <Link to="/cart" className="flex flex-col items-center text-gray-300 hover:text-white transition-colors relative">
                <FaShoppingCart className="text-xl" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
                <span className="text-xs mt-1">Cart</span>
              </Link>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex flex-col items-center text-gray-300 hover:text-white transition-colors"
              >
                <FaUser className="text-xl" />
                <span className="text-xs mt-1">Account</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* User Account Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden animate-fade-in">
            {/* Modal Header */}
            <div className="bg-black text-white p-6 relative">
              <h2 className="text-2xl font-bold">My Account</h2>
              <p className="text-gray-300 mt-1">Manage your account details</p>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            
            {/* User Profile Section */}
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {userData.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{userData.name}</h3>
                  <p className="text-gray-600">Member since {userData.joinDate}</p>
                </div>
              </div>
              
              {/* User Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <div className="bg-gray-100 p-3 rounded-full mr-3">
                    <FaEnvelope className="text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{userData.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-gray-100 p-3 rounded-full mr-3">
                    <FaPhone className="text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{userData.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-gray-100 p-3 rounded-full mr-3">
                    <FaMapMarkerAlt className="text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="font-medium">{userData.address}</p>
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-black">{userData.orders}</p>
                  <p className="text-sm text-gray-600">Orders</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-black">{userData.wishlist}</p>
                  <p className="text-sm text-gray-600">Wishlist</p>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button className="flex items-center justify-center bg-black text-white py-3 px-4 rounded-lg flex-1 hover:bg-gray-800 transition-colors">
                  <FaEdit className="mr-2" />
                  Edit Profile
                </button>
                <button 
                  onClick={handleLogout}
                  className="flex items-center justify-center border border-gray-300 text-gray-700 py-3 px-4 rounded-lg flex-1 hover:bg-gray-100 transition-colors"
                >
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Header;