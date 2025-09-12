import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item }) {
  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between text-sm">
        <p>
          <span className="font-semibold">{item.quantity}×</span> {item.title}
        </p>
        <p className="font-semibold">{formatCurrency(item.totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
