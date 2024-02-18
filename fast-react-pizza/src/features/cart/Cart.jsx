import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, deleteItem, getCart } from "./cartSlice";
import { getUserName } from "../user/userSlice";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = useSelector(getCart());
  const emptyCart = cart.length === 0;
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <div className="px-4 py-3">
      {/* <LinkButton to="/menu">&larr; Back to menu</LinkButton> */}

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to={emptyCart ? "/menu" : "/order/new"} type="primary">
          {emptyCart ? "Go to menu" : "Order pizzas"}
        </Button>

        {!emptyCart && (
          <Button type="secondary" onClick={handleClearCart}>
            Clear cart
          </Button>
        )}
      </div>
    </div>
  );
}

export default Cart;
