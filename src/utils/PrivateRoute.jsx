import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';

export default function PrivateRoute({ children }) {
  const isLoggedin = useSelector(selectIsLoggedIn);
  return isLoggedin ? children : <Navigate to="/login" />;
}
