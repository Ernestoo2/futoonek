import React from "react";

// Spinner.tsx

const Spinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-gray-600"></div>
    </div>
  );
};

export default Spinner;