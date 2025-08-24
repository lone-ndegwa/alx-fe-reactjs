import React from "react";
import { Navigate } from "react-router-dom";

// Simulate authentication (replace with real auth logic)
const isAuthenticated = false; // change to true to test

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}
