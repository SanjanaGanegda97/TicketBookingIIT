import React from 'react';
import './LeaveDetailsComponent.scss';

const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const day = String(d.getDate()).padStart(2, '0'); // Day of the month
    return `${year}-${month}-${day}`; // Return formatted date
  };

const LeaveDetailsComponent = ({ leaveDetails }) => {
  // Determine the border color based on leave type
  const borderColorClass = 
    leaveDetails.leaveType === 'Medical' ? 'medical-border' : 
    leaveDetails.leaveType === 'Annual' ? 'annual-border' : 
    'default-border';

  return (
    <div className={`leave-details-card ${borderColorClass}`}>
      <h2 className="leave-details-title"><strong>Leave Type: </strong>{leaveDetails.leaveType}</h2>
      <p><strong>From: </strong> {formatDate(leaveDetails.startDate)}</p>
      <p><strong>To: </strong>{formatDate(leaveDetails.endDate)}</p>
      <p><strong>Leave Time: </strong>{leaveDetails.dayType}</p>
      <p><strong>Reason: </strong>{leaveDetails.reason}</p>
      <p><strong>Applied On: </strong>{formatDate(leaveDetails.appliedOn)}</p>
    </div>
  );
};

export default LeaveDetailsComponent;
