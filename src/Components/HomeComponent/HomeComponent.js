import React, { useEffect, useState } from 'react';
import './HomeComponent.scss';
import EventComponent from '../EventComponent/EventComponent';
import { getAllShows } from '../../api/showApi';
import ProgressbarContainer from '../../Containers/ProgressbarContainer';

const HomeComponent = () => {
    const [myShows, setMyShows] = useState([]);
    const [isProgressVisible, setIsProgressVisible] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        getAllShows()
            .then((res) => {
                console.log(res.data.shows);
                setMyShows(res.data.shows);
            })
            .catch((err) => {
                console.log("errors", err);
            });
    }, []); 

    const handleOpenProgress = (eventDetails) => {
        setSelectedEvent(eventDetails)
        setIsProgressVisible(true); // Open the ProgressbarContainer
    };

    return (
        <div className="home-container-allshows">
            <h3 className="heading">Welcome To Sri Lanka's Most Popular Ticket Booking Platform</h3>
            {isProgressVisible && <ProgressbarContainer eventDetails={selectedEvent}/>}
            <div className="team-member-section">
                {myShows.length === 0 ? (
                    <p>No Shows to Display.</p>
                ) : (
                    myShows.map((show, index) => (
                        <EventComponent key={index} event={show} onBookTickets={handleOpenProgress} />
                    ))
                )}
            </div>
        </div>
    );
}

export default HomeComponent;
