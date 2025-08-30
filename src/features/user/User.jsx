import { useSelector } from 'react-redux';
import { getUsername } from './userSlice';

function User() {
  const username = useSelector(getUsername);

  if (!username) return null;

  return (
    <p className="text-md hidden font-semibold uppercase tracking-wide text-stone-800 sm:block">
      {username ? `Hello, ${username}` : 'Welcome, Guest'}
    </p>
  );
}

export default User;
