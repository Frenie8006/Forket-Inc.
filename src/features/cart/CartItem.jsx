import UpdateCartQuantity from '../menu/UpdateCartQuantity';

function CartItem({ item }) {
  return (
    <li className="flex flex-col items-center justify-between gap-y-5 border-b border-stone-300 p-4 sm:flex-row">
      <div className="flex flex-col items-center gap-5 sm:flex-row">
        <p className="text-sm">x{item.quantity}</p>
        <img src={item.image} alt={item.title} className="w-10" />
        <h3 className="text-center text-sm text-sky-900 sm:text-left">
          {item.title}
        </h3>
      </div>

      <div className="flex flex-col items-center gap-5 sm:flex-row">
        <p className="text-sm font-semibold">${item.unitPrice}</p>
        <UpdateCartQuantity id={item.productId} />
      </div>
    </li>
  );
}

export default CartItem;
