import React from "react";
import './EventComponent.scss';

const EventComponent = ({ event, onBookTickets }) => {
  const { eventTitle, eventDate, thumbnail, location, musicBand, capacity, ticketPrice, eventTime } = event;

  const handleSubmit = () => {
    window.scrollTo({
        top: 0, // Scroll to the top
        behavior: 'smooth' // Adds a smooth scrolling animation
      });
    onBookTickets(event); // Pass the current event details to the function
  }

  return (
    <div className="event-card">
      <div className="event-image-container">
      <img 
       src={thumbnail 
        ? `http://localhost:3001/${thumbnail.replace(/\\/g, '/')}` 
        : 'http://localhost:3001/default-image.png'} // Fallback image if thumbnail is missing
        alt="Event" 
        className="event-image" 
        />                                               
      </div>
      <div className="event-details">
        <h2 className="event-name">{eventTitle}</h2>
        <p className="event-date"><strong>Date:</strong> {eventDate}</p>
        <p className="event-date"><strong>Location:</strong> {location}</p>
        <p className="event-date"><strong>Time:</strong> {eventTime}</p>
        <p className="event-musicBand"><strong>Music Band:</strong> {musicBand}</p>
        <p className="event-capacity"><strong>Capacity:</strong> {capacity}</p>
        <p className="event-ticket-price"><strong>Ticket Price: </strong> {ticketPrice}</p>
      </div>
      <button className="book-tickets-button" onClick={handleSubmit}>Book Tickets</button>
    </div>
  );
};

export default EventComponent;
