// src/components/StepThree.tsx
import React from 'react';

const StepThree: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step Three</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Additional Comments:</label>
          <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded" rows={4}></textarea>
        </div>
      </form>
    </div>
  );
};

export default StepThree;
