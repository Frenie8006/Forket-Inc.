import { useDispatch, useSelector } from 'react-redux';
import { addItem, getTotalQuantityById } from '../cart/cartSlice';

import Button from '../../ui/Button';
import UpdateCartQuantity from './UpdateCartQuantity';

function MenuItem({ item }) {
  const { id, title, description, price, image } = item;

  const dispatch = useDispatch();
  const totalQuantityById = useSelector(getTotalQuantityById(id));

  function handleAddToCart() {
    const productToAdd = {
      productId: id,
      title,
      image,
      quantity: 1,
      unitPrice: price,
      totalPrice: price,
    };

    dispatch(addItem(productToAdd));
  }

  return (
    <li className="relative z-20 mx-auto flex w-2/3 flex-col items-center justify-center gap-4 overflow-hidden rounded bg-stone-100 p-4 text-center shadow-sm before:absolute before:left-0 before:top-0 before:z-10 before:h-1/2 before:w-full before:bg-sky-50 sm:flex-row sm:space-x-6 sm:border-b sm:text-left">
      <img src={image} alt={title} className="z-20 mb-4 w-20" />
      <div className="z-20 space-y-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="mb-2 text-sm font-light text-stone-600">{description}</p>

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-semibold">${price}</p>

          {totalQuantityById > 0 ? (
            <UpdateCartQuantity id={id} />
          ) : (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
