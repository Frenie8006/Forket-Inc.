import { NavLink } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="mt-4 bg-stone-300 px-4 py-3">
      <NavLink to="/menu">&larr; Back to menu</NavLink>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some products :)
      </p>
    </div>
  );
}

export default EmptyCart;
