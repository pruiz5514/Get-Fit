import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
  
  return isAuthenticated ? <Outlet /> : <Navigate to="/iniciar-sesion" replace />;
}

export default ProtectedRoute