import React, { useState } from 'react';
import './BookTicketsComponent.scss';

const BookTicketsComponent = ({onNext, onPrevious}) => {
  const [ticketCount, setTicketCount] = useState(0);
  const [ticketsLeft, setTicketsLeft] = useState(10); // Initialize with the total available tickets
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Handle increasing the ticket count
  const increaseTicketCount = () => {
    if (ticketCount < 10 && ticketsLeft > 0) { // Ensure you can only increase to a maximum of 10
      setTicketCount(ticketCount + 1);
      setTicketsLeft(ticketsLeft - 1);
    }
  };

  // Handle decreasing the ticket count
  const decreaseTicketCount = () => {
    if (ticketCount > 0) {
      setTicketCount(ticketCount - 1);
      setTicketsLeft(ticketsLeft + 1);
    }
  };

  const handleBooking = () => {
    // Logic for booking tickets...
    onNext(); // Proceed to the next step
  };

  return (
    <div className="booking-form-container">
      <h3 className="booking-form-title">Book Your Tickets</h3>

      <div className="form-group">
        <label className="book-ticket-eventname-label">Event Name:</label>
        <p className="book-ticket-eventname">Wasanthaye aga</p> {/* Display event name as a paragraph */}
      </div>

      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          className="form-input"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update state on input change
        />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          className="form-input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update state on input change
        />
      </div>

      <div className="form-group">
        <label>Phone Number:</label>
        <input
          type="tel"
          className="form-input"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)} // Update state on input change
        />
      </div>

      <div className="form-group">
        <label>Tickets Left:</label>
        <span className="tickets-left">{ticketsLeft}</span> {/* Display tickets left as a span */}
      </div>

      <div className="ticket-counter">
        <label>Number of Tickets:</label>
        <span className="ticket-count">{ticketCount}</span> {/* Display selected ticket count */}
        <div className="ticket-count-wrapper">
          <button className="ticket-btn" onClick={decreaseTicketCount}>-</button>
          <button className="ticket-btn" onClick={increaseTicketCount}>+</button>
        </div>
      </div>

      <button className="btn-book" onClick={handleBooking}s>Book Tickets</button>
      <button className="btn-book" onClick={onPrevious}>Go back</button>
    </div>
  );
};

export default BookTicketsComponent;
