import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import './AddShowComponent.scss';
import { useNavigate } from 'react-router-dom';
import { addShow } from "../../api/showApi";
import { getUser } from "../../api/userApi";

const AddShowComponent = () => {
  const { user } = useContext(AuthContext);
  const [userID, setUserID] = useState();
  const [name, setName] = useState(user?.name || '');
  const [eventTitle, setEventTitle] = useState(''); // New state for event title
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [promotionType, setPromotionType] = useState(''); // State for promotion type
  const [location, setLocation] = useState('');
  const [capacity, setCapacity] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [musicBand, setMusicBand] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [file, setfile] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const userID = user?._id || user?.user?._id;
    if (userID) {
      getUser({ _id: userID })
        .then((res) => {
          const userDetails = res.data.user;
          console.log(userDetails)
          setName(userDetails.name)
          setUserID(userDetails._id);
        })
        .catch((err) => {
          console.log("error", err);
        });
    } else {
      console.log("no user");
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const now = new Date();

    // Get year, month, and day
    const year = now.getFullYear(); // Full year
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so we add 1
    const day = String(now.getDate()).padStart(2, '0'); // Day of the month

    // Format as yyyy-mm-dd
    const appliedOn = `${year}-${month}-${day}`;  

   
    // Create FormData for event details
    const formData = new FormData();
    formData.append('file', file); // Append the image file

    // Append other event details to the FormData
    formData.append('userID', userID);
    formData.append('name', name);
    formData.append('eventTitle', eventTitle);
    formData.append('eventDate', eventDate);
    formData.append('eventTime', eventTime);
    formData.append('location', location);
    formData.append('capacity', capacity);
    formData.append('description', description);
    formData.append('promotionType', promotionType);
    formData.append('appliedOn', appliedOn);
    formData.append('musicBand', musicBand);
    formData.append('ticketPrice', ticketPrice);

    // Log FormData entries for debugging
//   for (let pair of formData.entries()) {
//     console.log(`${pair[0]}: ${pair[1]}`);
//   }


    try {
        // Send the FormData directly to addShow API
        const res = await addShow({eventDetails:formData}); // Call the API with FormData
        console.log(res);
        navigate('/profile/myshows'); // Navigate after successful submission
    } catch (err) {
        console.error("Error submitting event:", err);
    }
};



  return (
    <div className="event-app-container">
      <div className="event-application">
        <h1 className="event-application-title">Fill up the below form to add a show</h1>
        <form onSubmit={handleSubmit}>
          <div className="event-application-form-group">
            
            <div>
              <span className="user-name-readonly">Welcome back {name}. Glad you are adding another event</span>
            </div>
          </div>

          <div className="event-application-form-group">
            <label className="event-type-label">Event Title</label>
            <input
              type="text"
              className="title-input"
              placeholder="Enter event title"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              required
            />
          </div>

          <div className="event-application-form-group">
            <label className="event-type-label">Event Date</label>
            <input
              type="date"
              className="date-input"
              onChange={(e) => setEventDate(e.target.value)}
              required
            />
          </div>

          <div className="event-application-form-group">
            <label className="event-type-label">Event Time</label>
            <input
              type="time"
              className="time-input"
              onChange={(e) => setEventTime(e.target.value)}
              required
            />
          </div>

          <div className="event-application-form-group">
    <label className="event-type-label">Music Band</label>
    <input
        type="text"
        className="music-band-input"
        placeholder="Enter music band name"
        value={musicBand}
        onChange={(e) => setMusicBand(e.target.value)}
        required
    />
</div>

<div className="event-application-form-group">
    <label className="event-type-label">Ticket Price</label>
    <input
        type="number"
        className="ticket-price-input"
        placeholder="Enter ticket price"
        value={ticketPrice}
        onChange={(e) => setTicketPrice(e.target.value)}
        required
    />
</div>

          <div className="event-application-form-group">
            <label className="event-type-label">Promotion Type</label>
            <select
              className="promotion-type-select"
              value={promotionType}
              onChange={(e) => setPromotionType(e.target.value)}
              required
            >
              <option value="" disabled>Select Promotion Type</option>
              <option value="Early Bird">Early Bird</option>
              <option value="Final Tickets">Final Tickets</option>
              <option value="No Promotion">No Promotion</option>
            </select>
          </div>

          <div className="event-application-form-group">
            <label className="event-type-label">Location</label>
            <input
              type="text"
              className="location-input"
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div className="event-application-form-group">
            <label className="event-type-label">Capacity</label>
            <input
              type="number"
              className="capacity-input"
              onChange={(e) => setCapacity(e.target.value)}
              required
            />
          </div>

          <div className="event-application-form-group">
            <label className="event-type-label">Description</label>
            <textarea
              className="description-textarea"
              placeholder="Type here event description"
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="event-application-form-group">
            <label className="event-type-label">Thumbnail</label>
            <input
              type="file"
              accept="image/*"
              className="thumbnail-input"
              onChange={(e) => setfile(e.target.files[0])}
              required
            />
            {thumbnail && <img src={thumbnail} alt="Thumbnail Preview" className="thumbnail-preview" />}
          </div>

          <div className="event-application-buttons">
            <button type="submit" className="btn-primary" >Create Event</button>
            <button className="btn-secondary" onClick={() => navigate('/profile/myevents')}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddShowComponent;
