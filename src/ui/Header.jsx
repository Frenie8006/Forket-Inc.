import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import User from '../features/user/User';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-300 bg-stone-100 p-4">
      <Link
        to="/"
        className="text-xl font-semibold tracking-wider text-stone-900"
      >
        ForKet.
      </Link>

      <SearchOrder />

      <User />
    </header>
  );
}

export default Header;
