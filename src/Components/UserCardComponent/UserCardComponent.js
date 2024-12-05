import React from 'react';
import './UserCardComponent.scss';

const UserCardComponent = ({teamMember}) => {

    return (
        <div className="user-card">
            <img src={teamMember.image} alt="User Avatar" className="avatar" />
            <h2>{teamMember.name}</h2>
            <h3>{teamMember.title}</h3>
            <p className="description">{teamMember.description}</p>
            <div className="social-icons">
                <a href="#" className="icon facebook">F</a>
                <a href="#" className="icon twitter">T</a>
                <a href="#" className="icon linkedin">L</a>
            </div>
        </div>
    );
};

export default UserCardComponent;
