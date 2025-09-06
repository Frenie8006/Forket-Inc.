import { NavLink } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="mx-auto mt-4 w-9/12 rounded-sm bg-stone-300 px-6 py-4">
      <NavLink to="/menu">&larr; Back to menu</NavLink>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some products :)
      </p>
    </div>
  );
}

export default EmptyCart;
