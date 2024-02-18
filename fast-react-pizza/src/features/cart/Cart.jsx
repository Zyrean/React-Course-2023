import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
// import { clearCart, getCart } from "./cartSlice";
import { clearCart } from "./cartSlice";
import { getUserName } from "../user/userSlice";
import LinkButton from "../../ui/LinkButton";

function Cart() {
  // const cart = useSelector(getCart());
  const cart = useSelector((store) => store.cart.cart);

  const emptyCart = cart.length === 0;
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  console.log(cart);

  function handleClearCart() {
    dispatch(clearCart());
  }

  if (emptyCart) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to={emptyCart ? "/menu" : "/order/new"} type="primary">
          "Order pizzas"
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
