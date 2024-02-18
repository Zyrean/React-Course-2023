import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  function handleDecPizza() {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  function handleIncPizza() {
    dispatch(increaseItemQuantity(pizzaId));
  }

  return (
    <div className="flex items-center gap-1 md:gap-2">
      <Button type="rounded" onClick={handleDecPizza}>
        -
      </Button>
      <span className="text-sm">{currentQuantity}</span>
      <Button type="rounded" onClick={handleIncPizza}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
