import { Outlet, useNavigation } from 'react-router-dom';
import { getCart } from '../features/cart/cartSlice';
import { useSelector } from 'react-redux';

import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  const cart = useSelector(getCart);
  const cartLength = cart.length > 0;

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-[url('../../public/hero-wave-bg.png')] bg-cover">
      {isLoading && <Loader />}

      <Header />

      <main>
        <Outlet />
      </main>

      {cartLength && <CartOverview />}
    </div>
  );
}

export default AppLayout;
