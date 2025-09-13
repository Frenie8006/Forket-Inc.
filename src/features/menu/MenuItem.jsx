import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getTotalQuantityById } from '../cart/cartSlice';

import Button from '../../ui/Button';
import UpdateCartQuantity from './UpdateCartQuantity';
import { formatCurrency } from '../../utils/helpers';

function MenuItem({ item }) {
  const { id, title, description, price, image } = item;
  const dispatch = useDispatch();
  const totalQuantityById = useSelector(getTotalQuantityById(id));

  const [isExpanded, setIsExpanded] = useState(false);

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
        <div>
          <p
            className={`mb-0 h-14 text-xs font-light leading-6 text-stone-600 ${isExpanded ? 'h-full overflow-visible' : 'overflow-hidden'}`}
          >
            {description}
          </p>

          <button
            onClick={() => setIsExpanded((x) => !x)}
            className="text-xs text-stone-500 hover:text-stone-700"
          >
            {!isExpanded ? '..show more' : '...show less'}
          </button>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-semibold">{formatCurrency(price)}</p>

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
