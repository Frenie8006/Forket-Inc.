import { Outlet, useNavigation } from 'react-router-dom';

import Header from './Header';
import Loader from './Loader';
// import CartOverview from '../features/cart/CartOverview';
import heroWaveBg from '../assets/hero-wave-bg.png';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  // bg-[length:100%_auto] bg-top bg-repeat
  return (
    <div
      className="grid min-h-screen grid-rows-[auto_1fr_auto]"
      style={{ backgroundImage: `url(${heroWaveBg})` }}
    >
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-y-scroll">
        <main>
          <Outlet />
        </main>
      </div>

      <p className="bg-sky-950 py-4 text-center text-xs text-stone-300">
        © Copyright 2025 by Frenie — Forket Inc.
      </p>
    </div>
  );
}

export default AppLayout;
