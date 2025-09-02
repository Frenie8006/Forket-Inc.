function CartItem({ item }) {
  return (
    <li className="mb-4 flex justify-between bg-stone-300 p-4">
      <div className="flex items-center gap-5">
        {item.quantity}
        <img src={item.image} alt={item.title} className="w-10" />
        <h3>{item.title}</h3>
      </div>

      <div>
        <p>{item.unitPrice}</p>
      </div>
    </li>
  );
}

export default CartItem;
