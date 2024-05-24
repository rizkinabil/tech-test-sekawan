// ProtectedRoute.tsx
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { getAuthToken } from './Authenticate';

interface ProtectedRouteProps {
  path: string;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ path, children }) => {
  const isAuthenticated = !!getAuthToken();

  return isAuthenticated ? <Route path={path}>{children}</Route> : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
