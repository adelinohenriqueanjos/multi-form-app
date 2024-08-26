// src/components/StepTwo.tsx
import React from 'react';

const StepTwo: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step Two</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Address:</label>
          <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number:</label>
          <input type="tel" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
