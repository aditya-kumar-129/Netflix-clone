import React from "react";
import { Navigate } from "react-router-dom";

export function IsUserRedirect({ user, children }) {
  return !user ? children : <Navigate to="/browse" />;
}

export function ProtectedRoute({ user, children }) {
  return user ? children : <Navigate to="/signin" replace />;
}
