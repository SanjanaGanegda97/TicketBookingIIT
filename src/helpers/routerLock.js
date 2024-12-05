import React from 'react';
import { Navigate } from 'react-router-dom'; // Ensure Navigate is imported

const RouterLock = ({ children }) => {
  const token = localStorage.getItem('user'); // Assuming token is stored here
  console.log(token)

  // If no token is found, redirect to login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If token exists, allow access to the protected route
  return children;
};

export default RouterLock;
