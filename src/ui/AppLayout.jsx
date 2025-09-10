import { Outlet, useNavigation } from 'react-router-dom';

import Header from './Header';
// import CartOverview from '../features/cart/CartOverview';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  // bg-[length:100%_auto] bg-top bg-repeat
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-[url('../../public/hero-wave-bg.png')]">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-y-scroll">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
