import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';


import { getErrorMessage } from '../api/apiClient';
import Loader from '../components/Loader';
import { FiSearch, FiUser } from 'react-icons/fi';
import { userAPI } from '../api/endPoints';

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);

  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users', page, searchTerm],
    queryFn: () => userAPI.getAll(page, 10),
  });

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {getErrorMessage(error)}</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-orange-600">Customers</h1>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-orange-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-orange-600 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-orange-600 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-orange-600 uppercase tracking-wider">
                Role
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users?.data?.content?.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <FiUser className="h-5 w-5 text-orange-600" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{user.username}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    user.role === 'ADMIN' 
                      ? 'bg-orange-100 text-orange-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {user.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
          className="px-4 py-2 bg-orange-600 text-white rounded-l-lg disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 bg-white border-t border-b border-gray-300">
          Page {page + 1}
        </span>
        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={users?.data?.last}
          className="px-4 py-2 bg-orange-600 text-white rounded-r-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Customers;