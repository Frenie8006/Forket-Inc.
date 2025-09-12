import { updateOrder } from '../../services/apiProduct';

export async function action(params) {
  const orderId = params.params.orderId;

  updateOrder(orderId);

  return null;
}
