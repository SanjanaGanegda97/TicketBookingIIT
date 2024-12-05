import React, { useState, useEffect,useContext  } from "react";
import { AuthContext } from "../../context/AuthContext";
import './AddAbsenseComponent.scss';
import { applyLeave, getUser } from '../../api/userApi';
import { useNavigate  } from 'react-router-dom';


const LeaveApplication = () => {
  const { user, dispatch } = useContext(AuthContext);
  const [userID, setuserID] = useState();
  const [name, setname] = useState();
  const [leaveType, setLeaveType] = useState("leave");
  const [dayType, setDayType] = useState("full");
  const [startDate, setstartDate] = useState();
  const [endDate, setendDate] = useState();
  const [reason, setreason] = useState();
  const navigate = useNavigate();
  const [annualLeaves, setannualLeaves] = useState();
  const [casualLeaves, setcasualLeaves] = useState();
  const [medicalLeaves, setmedicalLeaves] = useState();

  useEffect(() => {
    const userID = user?._id || user?.user?._id;
    
    if(userID){
      getUser({_id: userID})
      .then((res) => {
        setname(res.data.user.name)
        setuserID(res.data.user._id)
        setannualLeaves(res.data.user.annualLeaves)
        setcasualLeaves(res.data.user.casualLeaves)
        setmedicalLeaves(res.data.user.medicalLeaves)
      })
      .catch((err) => {
        console.log("erros", err)
      })
    }else{
      console.log("no user")
    }
  }, [user]);

  const handleSubmit = async (e) => {
    const now = new Date();

    // Get year, month, and day
    const year = now.getFullYear(); // Full year
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so we add 1
    const day = String(now.getDate()).padStart(2, '0'); // Day of the month

    // Format as yyyy-mm-dd
    const appliedOn = `${year}-${month}-${day}`;  
    
    console.log("in handle submit",userID, name, leaveType, dayType, startDate, endDate, reason)
    console.log("handle submit")
    const leaveDetails = {
      //userID, 
      name, leaveType, dayType, startDate, endDate, reason, now
    }
    await applyLeave({leaveDetails})
    .then((res) => {
      console.log(res)
      navigate('/profile/myleaves'); 
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="leave-app-container">
      <div className="leave-application">
      <h1 className="leave-application-title">Going leave? Fill out below</h1>
      <p className="leave-application-info">
        You have <span className="leave-count">{casualLeaves}</span> Casual Leaves, <span className="leave-count">{medicalLeaves}</span> Medical Leaves, and <span className="optional-leave-count">{annualLeaves}</span> Annual Leaves in your account.
      </p>
      
      <div className="leave-application-form-group">

        <label className="leave-type-label">User Name</label>
          <div>
            <span className="user-name-readonly">{name}</span>
          </div>
        <br/>
        <label className="leave-type-label">Leave Type</label>
        <div className="leave-type-radio-group">
          <label className="leave-type-radio-label">
            <input 
              type="radio" 
              name="leaveType" 
              checked={leaveType === "Casual"} 
              onChange={() => setLeaveType("Casual")} 
            /> 
            Casual
          </label>
          <label className="leave-type-radio-label">
            <input 
              type="radio" 
              name="leaveType" 
              checked={leaveType === "Medical"} 
              onChange={() => setLeaveType("Medical")} 
            /> 
            Medical
          </label>

          <label className="leave-type-radio-label">
            <input 
              type="radio" 
              name="leaveType" 
              checked={leaveType === "Annual"} 
              onChange={() => setLeaveType("Annual")} 
            /> 
            Annual
          </label>
        </div>
      </div>

      <div className="leave-application-form-group">
        <label className="day-type-label">Day Type</label>
        <div className="day-type-radio-group">
          <label className="day-type-radio-label">
            <input 
              type="radio" 
              name="dayType" 
              checked={dayType === "full"} 
              onChange={() => setDayType("full")} 
            /> 
            Full
          </label>
          <label className="day-type-radio-label">
            <input 
              type="radio" 
              name="dayType" 
              checked={dayType === "firstHalf"} 
              onChange={() => setDayType("firstHalf")} 
            /> 
            First Half
          </label>
          <label className="day-type-radio-label">
            <input 
              type="radio" 
              name="dayType" 
              checked={dayType === "secondHalf"} 
              onChange={() => setDayType("secondHalf")} 
            /> 
            Second Half
          </label>
        </div>
      </div>

      <div className="leave-application-form-group">
        <label className="date-from-label">From</label>
        <input type="date" className="date-input" onChange={(e) => {setstartDate(e.target.value)}}/>
      </div>

      <div className="leave-application-form-group">
        <label className="date-to-label">To</label>
        <input type="date" className="date-input" onChange={(e) => {setendDate(e.target.value)}}/>
      </div>

      <div className="leave-application-form-group">
        <label className="reason-label">Reason</label>
        <textarea className="reason-textarea" placeholder="Type here leave reason" onChange={(e) => {setreason(e.target.value)}}></textarea>
      </div>

      <div className="leave-application-buttons">
        <button className="btn-primary" onClick={handleSubmit}>Apply Leave</button>
        <button className="btn-secondary">Cancel</button>
      </div>
    </div>
    </div>
  );
};

export default LeaveApplication;
