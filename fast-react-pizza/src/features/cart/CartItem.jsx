import Button from "../../ui/Button";
import { formatCurrency } from "../../utilities/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="justify-between py-3 sm:flex md:items-center">
      <p className="mb-1 md:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between space-x-2 md:gap-4">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small">delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
