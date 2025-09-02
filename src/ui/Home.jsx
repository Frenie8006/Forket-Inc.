import { useSelector } from 'react-redux';
import { getUsername } from '../features/user/userSlice';

import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector(getUsername);

  return (
    <div className="l mx-auto mt-12 flex max-w-2xl flex-col items-center p-6 text-center text-stone-100">
      <h1 className="text-5xl uppercase tracking-widest md:text-7xl">
        Powering
      </h1>
      <p className="mb-8 text-[20px] uppercase tracking-widest text-amber-400 md:text-3xl">
        Diamond Marketplace
      </p>

      <blockquote className="mb-8 text-sm text-stone-300 sm:text-base sm:leading-[2]">
        <span className="font-semibold">ForKet</span> is the first professional
        diamond online martket to nationwide marketplace platform.
      </blockquote>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/menu">
          &rarr; Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
