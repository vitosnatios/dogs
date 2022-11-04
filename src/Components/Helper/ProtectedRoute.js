import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../../UserContext';

const ProtectedRoute = ({ children }) => {
  const { login } = useUserContext();
  return login ? children : <Navigate to='/login' />;
};

export default ProtectedRoute;
