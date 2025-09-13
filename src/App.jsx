import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppLayout from './ui/AppLayout';
import Home from './ui/Home';
import Menu, { Loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder from './features/order/CreateOrder';
import { createOrderAction } from './features/order/createOrderAction';
import Order, { Loader as orderLoader } from './features/order/Order';
import { action as updateOrderAction } from './features/order/updateOrderAction';
import Error from './ui/Error';
import ProtectedRoute from './ui/ProtectedRoute';

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
        element: (
          <ProtectedRoute>
            <Menu />
          </ProtectedRoute>
        ),
        loader: menuLoader,
      },
      {
        path: '/cart',
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: '/order/new',
        element: (
          <ProtectedRoute>
            <CreateOrder />
          </ProtectedRoute>
        ),
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        errorElement: <Error />,
        element: (
          <ProtectedRoute>
            <Order />
          </ProtectedRoute>
        ),
        loader: orderLoader,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
