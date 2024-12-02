import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // React Router hook for navigation

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Redirect to Admin Dashboard (skipping validation for demo purposes)
    navigate('/AdminDashboard'); // Replace with your actual admin dashboard route
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Admin Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-500 text-sm mt-6">
          © 2024 Futo 1k. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
