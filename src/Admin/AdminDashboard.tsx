import React, { useState } from 'react';
import { FaUser, FaDonate, FaRegChartBar, FaPlusCircle } from 'react-icons/fa';

const AdminDashboard = () => {
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: 'Campaign A',
      description: 'Help build a school in rural areas.',
      donationGoal: 500000,
      raisedAmount: 12500,
      startDate: '2024-11-01',
    },
    {
      id: 2,
      name: 'Campaign B',
      description: 'Support medical research for cancer.',
      donationGoal: 1000000,
      raisedAmount: 700000,
      startDate: '2024-10-15',
    },
  ]);

  const [users] = useState([
    { id: 1, name: 'User 1', donationsMade: 5, totalDonated: 5000 },
    { id: 2, name: 'User 2', donationsMade: 10, totalDonated: 15000 },
  ]);

  const handleAddCampaign = () => {
    console.log('Add new campaign'); // Placeholder for campaign creation logic
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Admin Overview Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <FaUser className="text-4xl text-blue-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Total Users</h3>
              <p className="text-gray-600">{users.length}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <FaDonate className="text-4xl text-green-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Total Campaigns</h3>
              <p className="text-gray-600">{campaigns.length}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <FaRegChartBar className="text-4xl text-yellow-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Total Donations</h3>
              <p className="text-gray-600">₦{campaigns.reduce((sum, c) => sum + c.raisedAmount, 0)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Campaign Management */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Manage Campaigns</h2>
          <button
            onClick={handleAddCampaign}
            className="px-6 py-2 bg-blue-500 text-white rounded-md flex items-center"
          >
            <FaPlusCircle className="mr-2" /> Add Campaign
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{campaign.name}</h3>
              <p className="text-gray-600 mb-2">Goal: ₦{campaign.donationGoal}</p>
              <p className="text-gray-600 mb-2">Raised: ₦{campaign.raisedAmount}</p>
              <p className="text-gray-600 mb-4">Start Date: {campaign.startDate}</p>
              <button className="px-4 py-2 bg-red-500 text-white rounded-md mr-2">Delete</button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-md">Edit</button>
            </div>
          ))}
        </div>
      </div>

      {/* User Management */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Manage Users</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
            <thead>
              <tr className="border-b">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Donations Made</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Total Donated</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="px-6 py-4 text-sm text-gray-600">{user.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{user.donationsMade}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">₦{user.totalDonated}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <button className="px-4 py-2 bg-red-500 text-white rounded-md mr-2">Ban</button>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-md">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
