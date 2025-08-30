import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../ui/Button';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));

    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Your full name"
        className="mb-6 block w-72 rounded-full px-4 py-2 text-sm text-stone-900 transition placeholder:text-stone-400 focus:outline-amber-400 focus:ring-1 focus:ring-amber-400 focus:ring-offset-2"
      />

      {username !== '' && <Button>&rarr; Start ordering</Button>}
    </form>
  );
}

export default CreateUser;
