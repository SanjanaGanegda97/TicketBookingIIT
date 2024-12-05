import React from 'react';
import { Routes, Route } from "react-router-dom";
import MyProfileComponent from '../Components/MyProfileComponent/MyProfileComponent';
import Sidebar from '../Components/NavBarComponent/NavBarComponent';
import LeaveApplication from '../Components/AddAbsenceComponent/AddAbsenseComponent';
import './ProfileContainer.scss';
import MyLeavesComponent from '../Components/MyLeavesComponent/MyLeavesComponent';
import MyShowsComponent from '../Components/MyShowsComponent/MyShowsComponent';
import AddShowComponent from '../Components/AddShowComponent/AddShowComponent';
import MyTicketsComponent from '../Components/MyTicketsComponent/MyTicketsComponent';
import AllUsersComponent from '../Components/AllUsersComponent/AllUsersComponent';

const ProfileContainer = () => {
  return (
    <div className="myprofile-data-container">
      <div className='mypro-sidebar'> 
        <Sidebar />
      </div>
      <div className='myprofile-datacontent'>
        <Routes>
          <Route 
            index // This matches the path /profile
            element={<MyProfileComponent />} 
          />
          <Route 
            path="leaves" // This matches the path /profile/leaves
            exact element={<LeaveApplication />} 
          />
          <Route 
            path="mytickets" // This matches the path /profile/leaves
            exact element={<MyTicketsComponent />} 
          />
          <Route 
            path="myshows" // This matches the path /profile/leaves
            exact element={<MyShowsComponent />} 
          />
          <Route 
            path="addshows" // This matches the path /profile/leaves
            exact element={<AddShowComponent />} 
          />
          <Route 
            path="allusers" // This matches the path /profile/leaves
            exact element={<AllUsersComponent />} 
          />
        </Routes>
      </div>
    </div>
  );
}

export default ProfileContainer;
