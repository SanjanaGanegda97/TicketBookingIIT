import React from 'react';
import './ProgressBarComponent.scss';

const ProgressBarComponent = ({ currentStep }) => {
  const steps = [
    {
      title: 'Event Details',
      completed: currentStep > 0,
    },
    {
      title: 'Book Tickets',
      completed: currentStep > 1,
    },
    {
      title: 'Booking Summary',
      completed: currentStep > 2,
    },
  ];

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div
              className={`step-title ${
                currentStep === index
                  ? 'current-step' // Current step in #007bff
                  : step.completed
                  ? 'completed-step' // Completed steps in green
                  : 'upcoming-step' // Upcoming steps in grey
              }`}
            >
              {step.title}
            </div>
            <div
              className={`step-line ${
                currentStep === index
                  ? 'current-line' // Current line in #007bff
                  : step.completed
                  ? 'completed-line' // Completed line in green
                  : 'upcoming-line' // Upcoming line in grey
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBarComponent;
