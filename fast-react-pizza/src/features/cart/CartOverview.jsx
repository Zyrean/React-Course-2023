import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPizzaNum, getTotalPrice } from "./cartSlice";
import { formatCurrency } from "../../utilities/helpers";

function CartOverview() {
  const pizzaCount = useSelector(getTotalPizzaNum);

  const total = useSelector(getTotalPrice);

  if (!pizzaCount) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 sm:text-red-300 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{pizzaCount} pizzas</span>
        <span>{formatCurrency(total)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
