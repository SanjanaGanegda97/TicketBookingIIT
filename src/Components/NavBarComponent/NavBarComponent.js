import React,{useState, useContext, useEffect} from "react";
import './NavBarComponent.scss';
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { getUser } from "../../api/userApi";


const Sidebar = () => {

  const { user } = useContext(AuthContext);
  const [userType, setuserType] = useState();

  useEffect(() => {
    const userID = user?._id || user?.user?._id;
    if (userID) {
      getUser({ _id: userID })
        .then((res) => {
          const userDetails = res.data.user;
          console.log(userDetails.userType)
          setuserType(userDetails.userType)
        })
        .catch((err) => {
          console.log("error", err);
        });
    } else {
      console.log("no user");
    }
  }, [user]);

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src='../assets/images/shift one logo.png' alt="Shift One Logo" className="logo-image" />
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/profile" end className={({ isActive }) => (isActive ? 'active' : '')}>
              <i className="icon-leaves"></i> My Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile/mytickets" className={({ isActive }) => (isActive ? 'active' : '')}>
              <i className="icon-leaves"></i> My Tickets
            </NavLink>
          </li>
          {
            (userType === 'Vendor' || userType === 'Super Admin') && 
            <li>
            <NavLink to="/profile/myshows" className={({ isActive }) => (isActive ? 'active' : '')}>
              <i className="icon-leaves"></i> My Shows
            </NavLink>
          </li>
          }
          {
            (userType === 'Vendor' || userType === 'Super Admin') && 
            <li>
            <NavLink to="/profile/addshows" className={({ isActive }) => (isActive ? 'active' : '')}>
              <i className="icon-leaves"></i> Add Shows
            </NavLink>
          </li>
          }
          {
            (userType === 'Super Admin') && 
            <li>
            <NavLink to="/profile/allusers" className={({ isActive }) => (isActive ? 'active' : '')}>
              <i className="icon-leaves"></i> All Users
            </NavLink>
          </li>
          }
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
