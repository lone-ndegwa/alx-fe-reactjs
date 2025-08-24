import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // <-- Ensure this path is correct

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // <-- This makes sure "useAuth" appears in the file

  if (!user) {
    // If the user is not authenticated, redirect to login
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the protected content
  return children;
};

export default ProtectedRoute;
