import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppLayout from './ui/AppLayout';
import Home from './ui/Home';
import Menu, { Loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder from './features/order/CreateOrder';
import { createOrderAction } from './features/order/createOrderAction';
import Order, { Loader as orderLoader } from './features/order/Order';
import Error from './ui/Error';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        errorElement: <Error />,
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        errorElement: <Error />,
        element: <Order />,
        loader: orderLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
