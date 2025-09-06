import { useSelector } from 'react-redux';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { Link } from 'react-router-dom';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 mx-auto mb-4 flex w-full max-w-sm flex-col items-center justify-between gap-4 rounded-full bg-slate-800 p-4 text-xs font-normal text-stone-100 shadow-lg sm:max-w-3xl sm:flex-row sm:text-sm">
      <p className="space-x-8">
        <span>{totalCartQuantity} products</span>
        <span className="font-semibold">
          Total price: ${totalCartPrice.toFixed(2)}
        </span>
      </p>

      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
