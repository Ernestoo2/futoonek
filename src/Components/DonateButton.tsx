import React from 'react';

interface DonateButtonProps {
  campaignId: number;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DonateButton: React.FC<DonateButtonProps> = ({ campaignId, setIsModalOpen }) => {
  const handleClick = () => {
    // Open the modal when the donate button is clicked
    setIsModalOpen(true);
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-3 bg-[#4ade80] hover:bg-[#2ecc71] text-white rounded-md transition-colors"
    >
      Donate Now
    </button>
  );
};

export default DonateButton;
