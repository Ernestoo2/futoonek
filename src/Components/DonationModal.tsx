import React, { useState } from "react";

type DonationModalProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  campaignId: number;
};

const DonationModal: React.FC<DonationModalProps> = ({ setIsModalOpen, campaignId }) => {
  const [donationAmount, setDonationAmount] = useState<number>(0);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleDonate = () => {
    // Handle the donation process here, such as making an API call or updating the state
    alert(`You donated ₦${donationAmount} to campaign ID: ${campaignId}`);
    setIsModalOpen(false); // Close the modal after donation
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Donate to Campaign</h2>
        <div className="mb-4">
          <p className="text-gray-700">Campaign ID: {campaignId}</p>
          <p className="text-gray-600">Support this campaign with your donation.</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Enter Donation Amount</label>
          <input
            type="number"
            value={donationAmount}
            onChange={(e) => setDonationAmount(parseFloat(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2"
            placeholder="Enter amount"
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            className="px-6 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-md"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="px-6 py-2 bg-[#4ade80] hover:bg-[#2ecc71] text-white rounded-md"
            onClick={handleDonate}
          >
            Donate ₦{donationAmount}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
