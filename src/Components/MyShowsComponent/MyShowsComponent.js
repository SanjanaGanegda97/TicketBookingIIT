import React, { useEffect, useContext, useState } from "react";
import './MyShowsComponent.scss';
import { AuthContext } from "../../context/AuthContext";
import { getMyShows } from "../../api/showApi";

const MyShowsComponent = () => {
    const { user } = useContext(AuthContext);
    const [myShows, setmyShows] = useState([]);

    useEffect(() => {
        console.log("my res", user.user.name);
        const userID = user?._id || user?.user?._id;
        if (userID) {
            console.log("user ID in my shows", userID);
            getMyShows({ userID: user.user._id })
                .then((res) => {
                    console.log(res.data.shows);
                    setmyShows(res.data.shows);
                })
                .catch((err) => {
                    console.log("errors", err);
                });
        } else {
            console.log("no user");
        }
    }, [user]);

    return (
        <div className="myshows-container">
            {myShows.length === 0 ? (
                <p>No shows found for you.</p>
            ) : (
                myShows.map((show, index) => (
                    <div key={index} className="myshows-show-card">
                        {show.promotionType === 'Final Tickets' && (
                            <div className="promotion-label yellow">{show.promotionType}</div>
                        )}
                        {show.promotionType !== 'No Promotion' && show.promotionType !== 'Final Tickets' && (
                            <div className="promotion-label">{show.promotionType}</div>
                        )}

                        <div className="event-image-container">
                            <img 
                                src={show.thumbnail 
                                    ? `http://localhost:3001/${show.thumbnail.replace(/\\/g, '/')}` 
                                    : 'http://localhost:3001/default-image.png'} // Fallback image if thumbnail is missing
                                alt="Event" 
                                className="event-image" 
                            />
                        </div>

                        <div className="event-details">
                            <h2 className="event-name">{show.eventTitle}</h2>
                            <p className="event-date"><strong>Date:</strong> {show.eventDate}</p>
                            <p className="event-location"><strong>Location:</strong> {show.location}</p>
                            <p className="event-location"><strong>Time:</strong> {show.eventTime}</p>
                            <p className="event-musicBand"><strong>Music Band:</strong> {show.musicBand}</p>
                            <p className="event-musicBand"><strong>Capacity:</strong> {show.capacity}</p>
                            <p className="event-ticket-price"><strong>Ticket Price:</strong> {show.ticketPrice}</p>
                        </div>

                        <button className="delete-show-button">Delete Show</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default MyShowsComponent;
