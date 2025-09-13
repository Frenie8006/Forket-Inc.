// Improve version
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUsername } from '../features/user/userSlice';

function ProtectedRoute({ children }) {
  const username = useSelector(getUsername);
  const location = useLocation();

  if (!username) {
    // Redirect to home (or /login) but keep track of where the user wanted to go
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;
