// src/components/MultiForm.tsx
import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepTree';

const steps = ['StepOne', 'StepTwo', 'StepThree'];

const MultiForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const renderStep = () => {
    switch (steps[currentStep]) {
      case 'StepOne':
        return <StepOne />;
      case 'StepTwo':
        return <StepTwo />;
      case 'StepThree':
        return <StepThree />;
      default:
        return <StepOne />;
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      {renderStep()}
      <div className="flex justify-between mt-4">
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded"
          onClick={prevStep}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MultiForm;
