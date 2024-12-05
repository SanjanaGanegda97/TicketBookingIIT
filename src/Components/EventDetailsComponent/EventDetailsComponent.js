import React from 'react';
import './EventDetailsComponent.scss';

const EventDetailsComponent = ({ eventDetails, onNext }) => { // Accept eventDetails as a prop

    const handleBook = () => {
        // Logic for booking tickets...
        onNext(); // Proceed to the next step
    };

    return (
        <div className="event-card-indetails">
          <div className="event-image-container">
            <img 
              src={eventDetails.thumbnail 
                  ? `http://localhost:3001/${eventDetails.thumbnail.replace(/\\/g, '/')}` 
                  : 'http://localhost:3001/default-image.png'} // Fallback image if thumbnail is missing
              alt="Event" 
              className="event-image" 
            />
          </div>
          <div className="event-details">
            <h2 className="event-name">{eventDetails.eventTitle}</h2>
            <p className="event-date"><strong>Date:</strong> {eventDetails.eventDate}</p>
            <p className="event-location"><strong>Location:</strong> {eventDetails.location}</p>
            <p className="event-location"><strong>Location:</strong> {eventDetails.eventTime}</p>
            <p className="event-musicBand"><strong>Music Band:</strong> {eventDetails.musicBand}</p>
            <p className="event-location"><strong>Location:</strong> {eventDetails.capacity}</p>
            <p className="event-ticket-price"><strong>Ticket Price: </strong> {eventDetails.ticketPrice}</p>
          </div>
          <button className="book-tickets-button" onClick={handleBook}>Book Tickets</button>
        </div>
    );
};

export default EventDetailsComponent;
