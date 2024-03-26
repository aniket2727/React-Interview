import React, { useState } from 'react';

const Stepper = ({ steps }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };

    return (
        <div className="stepper">
            <div className="steps">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'inline-block',
                            padding: '10px',
                            border: '1px solid #ccc',
                            marginRight: '10px',
                            cursor: 'pointer',
                            backgroundColor: index === currentStep ? '#007bff' : index < currentStep ? '#28a745' : '#fff',
                            color: index === currentStep || index < currentStep ? '#fff' : '#000'
                        }}
                        onClick={() => setCurrentStep(index)}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>
            <div className="step-content">
                {steps[currentStep]}
            </div>
            <div className="stepper-buttons">
                {currentStep > 0 && (
                    <button onClick={handlePrev}>Previous</button>
                )}
                {currentStep < steps.length - 1 && (
                    <button onClick={handleNext}>Next</button>
                )}
            </div>
        </div>
    );
};

export default Stepper;
