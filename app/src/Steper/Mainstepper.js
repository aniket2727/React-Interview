


// YourApp.js
import React from 'react';
import Stepper from './Stepper';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Steper2 from './Steper2';
const YourApp = () => {
    const steps = [<Step1 />, <Step2 />,<Step3/>];

    return (
        <div>
            <h1>Your Application</h1>
            <Steper2 steps={steps} />
        </div>
    );
};

export default YourApp;
