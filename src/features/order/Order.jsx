import { useLoaderData } from 'react-router-dom';
import { getOrder } from '../../services/apiProduct';

function Order() {
  const order = useLoaderData();
  console.log(order);

  return (
    <div>
      <div>
        <p>Order #{order.id} status</p>

        <p>
          <span>Priority</span>
          <span>Preparing order</span>
        </p>
      </div>
      <div>
        <p>Only 48 minutes left 😃</p>
        <small>(Estimated delivery: Sep 8, 09:35 PM)</small>
      </div>

      <div>
        <div>
          <p>
            <span>1×</span>Margherita
          </p>
          <p>€12.00</p>
        </div>
        <p>tomato, mozzarella, basil</p>
      </div>

      <div>
        <p>Price pizza: €12.00</p>
        <p>Price priority: €2.00</p>
        <p>To pay on delivery: €14.00</p>
      </div>
    </div>
  );
}

export async function Loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
