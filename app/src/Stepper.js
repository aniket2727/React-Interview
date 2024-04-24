import React, { useState } from 'react';

const AmazonStepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ['Shipping Address', 'Payment Method', 'Order Review', 'Order Confirmation'];

  const nextStep = () => {
    setCurrentStep(prevStep => Math.min(prevStep + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep(prevStep => Math.max(prevStep - 1, 0));
  };

  return (
    <div>
      <h1>Amazon-style Checkout Stepper</h1>
      <div>
        <ol className="stepper">
          {steps.map((step, index) => (
            <li key={index} className={index === currentStep ? 'active' : ''}>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
      {currentStep === 0 && <ShippingAddressStep />}
      {currentStep === 1 && <PaymentMethodStep />}
      {currentStep === 2 && <OrderReviewStep />}
      {currentStep === 3 && <OrderConfirmationStep />}
      <button onClick={prevStep} disabled={currentStep === 0}>Previous</button>
      <button onClick={nextStep} disabled={currentStep === steps.length - 1}>Next</button>
    </div>
  );
};

const ShippingAddressStep = () => {
  return (
    <div>
      <h2>Shipping Address</h2>
      {/* Add shipping address form fields here */}
    </div>
  );
};

const PaymentMethodStep = () => {
  return (
    <div>
      <h2>Payment Method</h2>
      {/* Add payment method selection here */}
    </div>
  );
};

const OrderReviewStep = () => {
  return (
    <div>
      <h2>Order Review</h2>
      {/* Display order summary and allow user to review */}
    </div>
  );
};

const OrderConfirmationStep = () => {
  return (
    <div>
      <h2>Order Confirmation</h2>
      {/* Display order confirmation message */}
    </div>
  );
};

export default AmazonStepper;
