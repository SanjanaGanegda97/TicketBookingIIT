import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import axios from 'axios'
import './App.css'
import AddAbsenseComponent from './Components/AddAbsenceComponent/AddAbsenseComponent';
import Sidebar from './Components/NavBarComponent/NavBarComponent';
import MyProfileComponent from './Components/MyProfileComponent/MyProfileComponent';
import LoginComponent from './Components/LoginComponent/LoginComponent';
import UpNavBarComponent from './Components/UpNavBarComponent/UpNavBarComponent';
import SignUpComponent from './Components/SignUpComponent/SignUpComponent';
import LeaveApplication from './Components/AddAbsenceComponent/AddAbsenseComponent';
import HomeComponent from './Components/HomeComponent/HomeComponent';
import HomeContainer from './Containers/HomeContainer';
import ProfileContainer from './Containers/ProfileContainer';
import RouterLock from './helpers/routerLock';
import AllUsersComponent from './Components/AllUsersComponent/AllUsersComponent';

function App() {
 
  return (
    <div>
      <BrowserRouter>
        <UpNavBarComponent/>
        <div className="app-container">
        <Routes>
              <Route 
                path = "/"
                element = {<HomeContainer/>}
              />

              <Route 
                path = "/login"
                element = {<LoginComponent/>}
              />

              <Route 
                path = "/signup"
                element = {<SignUpComponent/>}
              />

              <Route 
                path = "/profile/*"
                element = {
                <RouterLock>
                    <ProfileContainer/>
                </RouterLock>
                }
              />              
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
