import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const ProtectedRoute = () => {
  const { isAuth, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  if (!isAuth) {
    return <Navigate to="/login"/>;
  }

  return <Outlet />;
};
