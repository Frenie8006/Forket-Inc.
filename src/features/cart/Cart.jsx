import { useSelector } from 'react-redux';
import { getCart } from './cartSlice';
import CartItem from './CartItem';

function Cart() {
  const cart = useSelector(getCart);
  console.log('cart', cart);

  return (
    <div className="mx-auto max-w-6xl bg-stone-600 p-4">
      <ul>
        {cart.map((item) => (
          <CartItem item={item} key={item.productId} />
        ))}
      </ul>
    </div>
  );
}

export default Cart;
