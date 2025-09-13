import { useLoaderData } from 'react-router-dom';
import { getOrder } from '../../services/apiProduct';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import { getRandomFutureDate } from '../../utils/getRandomFutureDate';

import OrderItem from './OrderItem';
import UpdateOrder from './UpdateOrder';

function Order() {
  const order = useLoaderData();
  const { id, cart, priority } = order;
  const totalCartPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const priorityPrice = priority ? totalCartPrice * 0.2 : 0;

  const randomDate = getRandomFutureDate();
  const minutesLeft = calcMinutesLeft(randomDate);
  const formattedDate = formatDate(randomDate);

  return (
    <div className="bg-stone-100 p-4 shadow-md sm:p-8 md:mx-auto md:max-w-2xl lg:max-w-4xl">
      <div className="mb-4 flex flex-col items-center justify-between gap-2 sm:flex-row">
        <p className="text-xl font-semibold">Order #{id} status</p>

        <p className="flex items-center gap-2">
          {priority && (
            <span className="rounded-full bg-red-600 px-4 py-1.5 text-sm text-stone-100">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-4 py-1.5 text-sm text-stone-100">
            Preparing order
          </span>
        </p>
      </div>

      <div className="mb-4 flex flex-col items-center justify-between gap-2 bg-stone-200 p-4 sm:flex-row">
        <p>Only {minutesLeft} minutes left 😃</p>
        <small>(Estimated delivery: {formattedDate})</small>
      </div>

      <div className="mb-4 flex flex-col gap-2 border-b border-stone-300 pb-4">
        <ul className="divide-y divide-stone-200 border-y">
          {cart.map((item) => (
            <OrderItem item={item} key={item.productId} />
          ))}
        </ul>
      </div>

      <div className="mb-4 flex flex-col gap-2 bg-stone-200 p-4">
        <p className="text-sm text-stone-700">
          Price: : {formatCurrency(totalCartPrice)}
        </p>
        {priority && (
          <p className="text-sm text-stone-700">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-semibold">
          To pay on delivery: {formatCurrency(totalCartPrice + priorityPrice)}
        </p>
      </div>

      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}

export async function Loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
