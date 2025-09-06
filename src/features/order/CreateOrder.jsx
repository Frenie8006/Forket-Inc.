import { useState } from 'react';
import { Form, useActionData, useNavigation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUsername } from '../user/userSlice';
import { getCart, getTotalCartPrice } from '../cart/cartSlice';

import Button from '../../ui/Button';
import EmptyCart from '../cart/EmptyCart';

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const username = useSelector(getUsername);
  const cart = useSelector(getCart);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const formErrors = useActionData(); // Errors returned from the action

  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="mb-6 flex justify-center">
      <div className="mx-10 mt-10 flex w-10/12 flex-col items-center rounded-sm bg-stone-200 px-6 py-10 shadow-lg sm:w-9/12 md:w-8/12 lg:w-8/12">
        <h2 className="mb-6 text-center text-lg font-semibold uppercase tracking-wider text-stone-700">
          Ready to order? Let's go!
        </h2>

        <Form method="POST" className="w-full">
          <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label htmlFor="name" className="sm:basis-40">
              First Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full grow rounded-full px-6 py-2.5 text-xs text-stone-700 shadow-sm focus:outline-none sm:text-sm"
              defaultValue={username}
              required
            />
          </div>

          <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label htmlFor="phone" className="sm:basis-40">
              Phone Number
            </label>

            <div className="w-full grow">
              <input
                type="tel"
                id="name"
                name="phone"
                required
                className="w-full grow rounded-full px-6 py-2.5 text-xs text-stone-700 shadow-sm focus:outline-none sm:text-sm"
              />
              {formErrors?.phone && (
                <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                  {formErrors.phone}
                </p>
              )}
            </div>
          </div>

          <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label htmlFor="address" className="sm:basis-40">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              className="w-full grow rounded-full px-6 py-2.5 text-xs text-stone-700 shadow-sm focus:outline-none sm:text-sm"
            />
          </div>

          <div className="mb-10 flex items-center gap-5">
            <input
              type="checkbox"
              id="priority"
              name="priority"
              className="h-5 w-5 cursor-pointer accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
              onChange={(e) => setWithPriority(e.target.checked)}
              checked={withPriority}
            />
            <label htmlFor="priority" className="cursor-pointer text-sm">
              Want to give you order priority?
            </label>
          </div>

          <div>
            <input type="hidden" name="cart" value={JSON.stringify(cart)} />
            <Button type="primary" disabled={isSubmitting}>
              {isSubmitting
                ? 'Placing order...'
                : `Order now for (${totalPrice.toFixed(2)})`}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default CreateOrder;
