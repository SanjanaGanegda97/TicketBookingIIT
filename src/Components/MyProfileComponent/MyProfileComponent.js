import React, { useState, useContext, useEffect } from 'react';
import './MyProfileComponent.scss';
import { AuthContext } from "../../context/AuthContext";
import { getUser } from '../../api/userApi';

const MyProfileComponent = () => {
  const { user } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [name, setname] = useState();
  const [contactnum, setcontactnum] = useState();
  const [userType, setuserType] = useState();


  useEffect(() => {
    const userID = user?._id || user?.user?._id;
    if (userID) {
      getUser({ _id: userID })
        .then((res) => {
          const userDetails = res.data.user;
          console.log(userDetails.userType)
          setuserType(userDetails.userType)
          setEmail(userDetails.email);
          setname(userDetails.name);
          setcontactnum(userDetails.contactnum);
          const dateString = userDetails.doj.split('T')[0];
          
        })
        .catch((err) => {
          console.log("error", err);
        });
    } else {
      console.log("no user");
    }
  }, [user]);

  return (
    <div className='my-pro-container'>
      <div className="profile-flex-container">
        
        <div className="profile-container">
          <h3>Hi ! {name}</h3>
          <img src='../assets/images/shift one logo.png' alt="Profile" className="profile-picture" />
          <h3 className="profile-title">My Profile</h3>
          <div className="grey-box"> {/* New grey box */}
            <div className="profile-info">
              <div className="profile-item">
                <label className="profile-label">Name: </label>
                <span className="profile-readonly">{name}</span>
              </div>
              <br/>
              <div className="profile-item">
                <label className="profile-label">Email: </label>
                <span className="profile-readonly">{email}</span>
              </div>
              <br/>
              <div className="profile-item">
                <label className="profile-label">User Type: </label>
                <span className="profile-readonly">{userType}</span>
              </div>
              <br/>
              <div className="profile-item">
                <label className="profile-label">Contact No: </label>
                <span className="profile-readonly">{contactnum}</span>
              </div>
              <br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfileComponent;
