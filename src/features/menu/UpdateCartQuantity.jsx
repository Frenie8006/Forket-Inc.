import { useDispatch } from 'react-redux';
import {
  decrementCartQuantity,
  incrementCartQuantity,
} from '../cart/cartSlice';

import Button from '../../ui/Button';
import DeleteItem from '../cart/DeleteItem';

function UpdateCartQuantity({ id }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <div className="flex items-center gap-2">
        <Button
          type="secondary"
          onClick={() => dispatch(decrementCartQuantity(id))}
        >
          —
        </Button>
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
