import React, { useState } from 'react';
import ProgressBarComponent from '../Components/ProgressBarComponent/ProgressBarComponent';
import BookTicketsComponent from '../Components/BookTicketsComponent/BookTicketsComponent';
import BookingSummaryComponent from '../Components/BookingSummaryComponent/BookingSummaryComponent';
import EventDetailsComponent from '../Components/EventDetailsComponent/EventDetailsComponent';
import './ProgressbarContainer.scss';

const ProgressbarContainer = ({ eventDetails }) => { // Accept eventDetails as a prop
    const [currentStep, setCurrentStep] = useState(0); // 0: Event Details, 1: Book Tickets, 2: Booking Summary

    // Function to handle the next step
    const handleNextStep = () => {
        setCurrentStep((prevStep) => Math.min(prevStep + 1, 2)); // Ensure it doesn't go beyond the last step
    };

    const previousStep = () => {
        if (currentStep > 0) setCurrentStep(currentStep - 1);
    };

    return (
        <div className="progressbar-wrapper"> {/* Centering wrapper */}
            <div className="main-container">
                <ProgressBarComponent currentStep={currentStep} />
                
                {currentStep === 0 && (
                    <EventDetailsComponent eventDetails={eventDetails} onNext={handleNextStep} onPrevious={previousStep} /> // Pass eventDetails
                )}
                {currentStep === 1 && (
                    <BookTicketsComponent onNext={handleNextStep} onPrevious={previousStep} />
                )}
                {currentStep === 2 && (
                    <BookingSummaryComponent onPrevious={previousStep} />
                )}
            </div>
        </div>
    );
}

export default ProgressbarContainer;
