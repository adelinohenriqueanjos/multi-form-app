// src/components/StepOne.tsx
import React from 'react';

const StepOne: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step One</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
        </div>
      </form>
    </div>
  );
};

export default StepOne;
