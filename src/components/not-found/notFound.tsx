import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <p>404 Not Found</p>
      <NavLink to="/">Go to the main page</NavLink>
    </div>
  );
}

export default NotFound;
