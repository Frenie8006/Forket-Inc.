import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';

import CartItem from './CartItem';
import Button from '../../ui/Button';
import EmptyCart from './EmptyCart';
import { NavLink } from 'react-router-dom';

function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="mx-auto max-w-6xl">
      <ul className="mx-2 mb-4 mt-2 h-auto max-h-[28rem] overflow-hidden overflow-y-scroll rounded-md bg-stone-100 shadow-md">
        {cart.map((item) => (
          <CartItem item={item} key={item.productId} />
        ))}
      </ul>

      <div className="m-2 mb-4 mt-2 flex flex-col items-center justify-between gap-6 space-x-4 overflow-hidden rounded-md bg-stone-100 p-4 shadow-md sm:flex-row">
        <div className="flex flex-wrap items-center justify-center space-x-2 space-y-2">
          <Button type="primary" to="/order/new">
            Order now
          </Button>
          <Button type="tertiary" onClick={() => dispatch(clearCart())}>
            Clear cart
          </Button>
        </div>

        <NavLink to="/menu">&larr; Back to menu</NavLink>
      </div>
    </div>
  );
}

export default Cart;
