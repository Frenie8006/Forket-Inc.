import { useDispatch, useSelector } from 'react-redux';
import {
  decrementCartQuantity,
  getTotalQuantityById,
  incrementCartQuantity,
} from '../cart/cartSlice';

import Button from '../../ui/Button';
import DeleteItem from '../cart/DeleteItem';

function UpdateCartQuantity({ id }) {
  const dispatch = useDispatch();
  const totalQuantityById = useSelector(getTotalQuantityById(id));

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <div className="flex items-center gap-2">
        <Button
          type="secondary"
          onClick={() => dispatch(decrementCartQuantity(id))}
        >
          —
        </Button>
        <p className="text-sm font-semibold">{totalQuantityById}</p>
        <Button
          type="secondary"
          onClick={() => dispatch(incrementCartQuantity(id))}
        >
          +
        </Button>
      </div>

      <DeleteItem id={id} />
    </div>
  );
}

export default UpdateCartQuantity;
