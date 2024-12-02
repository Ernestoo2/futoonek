import React, { useEffect, useState } from "react";
import { Book, Briefcase, School } from "lucide-react";
import { CgMenuGridO } from "react-icons/cg";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

const User1 = () => {
  // Simulating user data
  const [userName, setUserName] = useState("Eze Ernest");
  const [notifications, setNotifications] = useState([1, 2]); // Simulates unread notifications
  const [userStats, setUserStats] = useState({
    donationsMade: 12,
    totalAmountDonated: 50000,
    rankingPercent: 10,
  });

  // Simulating campaigns data
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: "Help Build a School",
      description: "Fundraising to build a school in the local community.",
      donationGoal: 1000000,
      raisedAmount: 750000,
      startDate: "2024-11-01",
    },
    {
      id: 2,
      name: "Medical Aid for Children",
      description: "Providing medical aid for underprivileged children.",
      donationGoal: 500000,
      raisedAmount: 300000,
      startDate: "2024-10-20",
    },
    {
      id: 3,
      name: "Debt Relief Fund",
      description: "Helping families clear their debts.",
      donationGoal: 700000,
      raisedAmount: 400000,
      startDate: "2024-09-15",
    },
  ]);

  // States for handling modal and selected campaign
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCampaignId, setSelectedCampaignId] = useState(null);

  // Simulate fetching user data
  useEffect(() => {
    const fetchUserData = async () => {
      const storedName = "Eze Ernest";
      const stats = {
        donationsMade: 12,
        totalAmountDonated: 50000,
        rankingPercent: 10,
      };
      setUserName(storedName);
      setUserStats(stats);
    };
    fetchUserData();
  }, []);

  // Simulate a Paystack payment integration (placeholder function)
  const handlePayment = (campaignId) => {
    alert(`Initiating payment for campaign ID: ${campaignId}`);
    // Replace this alert with actual Paystack integration logic
    // Example: open Paystack payment modal here
  };

  return (
    <section className="w-full min-h-screen px-4 py-16 bg-slate-500 md:py-24">
      <div className="max-w-[1200px] mx-auto">
        {/* Welcome Card with User Stats */}
        <div
          className="p-8 mb-10 bg-center bg-no-repeat bg-cover rounded-lg shadow-lg"
          style={{ backgroundImage: 'url("/background.png")' }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">Welcome, {userName}</h2>
            <div className="relative">
              <FaBell className="text-2xl text-white cursor-pointer" />
              {notifications.length > 0 && (
                <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full cursor-pointer">
                  {notifications.length}
                </span>
              )}
            </div>
          </div>
          <p className="mb-4 text-white">
            You have donated {userStats.donationsMade} times, contributing a total of ₦
            {userStats.totalAmountDonated.toLocaleString()}.
          </p>
          <p className="text-white">
            You are in the top {userStats.rankingPercent}% of donors! 🥳
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
          {/* Links for Categories */}
          <div className="flex-1 w-full h-auto min-h-[300px] bg-blue-300 rounded-xl shadow-lg p-6 lg:p-12">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <Link
                to="/all"
                className="flex items-center justify-center gap-2 p-3 transition-all duration-300 transform bg-white rounded-lg shadow-md hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1"
              >
                <CgMenuGridO className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-800">All</span>
              </Link>

              <Link
                to="/school"
                className="flex items-center justify-center gap-2 p-3 bg-[#3fc0ba] hover:bg-[#35a5a0] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <School className="w-5 h-5 text-white" />
                <span className="font-medium text-white">School</span>
              </Link>

              <Link
                to="/medical"
                className="flex items-center justify-center gap-2 p-3 transition-all duration-300 transform bg-red-500 rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg hover:-translate-y-1"
              >
                <Briefcase className="w-5 h-5 text-white" />
                <span className="font-medium text-white">Medical</span>
              </Link>

              <Link
                to="/dues"
                className="flex items-center justify-center gap-2 p-3 transition-all duration-300 transform bg-purple-500 rounded-lg shadow-md hover:bg-purple-600 hover:shadow-lg hover:-translate-y-1"
              >
                <Book className="w-5 h-5 text-white" />
                <span className="font-medium text-white whitespace-nowrap">Dept Dues</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Available Campaigns */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">Available Campaigns</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {campaigns.map((campaign) => (
              <div key={campaign.id} className="h-auto p-6 bg-white rounded-lg shadow-lg">
                <h3 className="mb-4 text-xl font-semibold text-gray-800">{campaign.name}</h3>
                <p className="mb-4 text-gray-600">{campaign.description}</p>
                <p className="mb-2 text-gray-600">Goal: ₦{campaign.donationGoal.toLocaleString()}</p>
                <p className="mb-4 text-gray-600">Raised: ₦{campaign.raisedAmount.toLocaleString()}</p>
                <button
                  onClick={() => handlePayment(campaign.id)}
                  className="mt-4 px-6 py-2 bg-[#4ade80] hover:bg-[#2ecc71] text-white rounded-md"
                >
                  Donate Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Donation History Table */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">Your Donation History</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
              <thead>
                <tr className="border-b">
                  <th className="px-6 py-3 text-sm font-semibold text-left text-gray-800">Campaign Name</th>
                  <th className="px-6 py-3 text-sm font-semibold text-left text-gray-800">Donation Goal</th>
                  <th className="px-6 py-3 text-sm font-semibold text-left text-gray-800">Amount Donated</th>
                  <th className="px-6 py-3 text-sm font-semibold text-left text-gray-800">Donation Date</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((campaign) => (
                  <tr key={campaign.id} className="border-b">
                    <td className="px-6 py-4 text-sm text-gray-600">{campaign.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">₦{campaign.donationGoal.toLocaleString()}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      ₦{Math.round(Math.random() * campaign.raisedAmount).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{campaign.startDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default User1;