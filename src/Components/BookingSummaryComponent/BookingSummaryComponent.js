import React from 'react';
import './BookingSummaryComponent.scss';

const BookingSummaryComponent = ({onPrevious}) => {
  const ticketCount = 5; // Hardcoded values
  const ticketPrice = 500; // Hardcoded values
  const subtotal = ticketCount * ticketPrice;

  

  return (
    <div className="booking-summary-container">
      <div className="event-details card">
        <div className="summary-header">
          <h3 className="event-title">Event Details</h3>
        </div>
        <p><strong>Event Name:</strong> Wasanthaye Aga</p>
        <p><strong>Date:</strong> 25/10/2024</p>
        <p><strong>Time:</strong> 9:30</p>
        <p><strong>Location:</strong> Pera Uni</p>
      </div>
      
      <div className="booking-summary card">
        <div className="summary-header">
          <h3 className="summary-title">Booking Summary</h3>
        </div>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
        <p><strong>Phone Number:</strong> 123-456-7890</p>
        <p><strong>Number of Tickets:</strong> {ticketCount}</p>
        <p><strong>Price per Ticket:</strong> {ticketPrice} LKR</p>
        <hr /> {/* Horizontal line before subtotal */}
        <p className="subtotal"><strong>Subtotal:</strong> {subtotal} LKR</p> {/* Highlighted subtotal */}
        <button className="book-tickets-summary-button" >Book Tickets</button>
        <button className="book-tickets-summary-button" onClick={onPrevious}>Go Back</button>
      </div>
    </div>
  );
};

export default BookingSummaryComponent;
