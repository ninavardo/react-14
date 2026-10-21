import CartItem from "../components/CartItem";
import EmptyCartState from "../components/EmptyCartState";
import { useCart } from "../context/useCart";

function Cart() {
  const { cart, totalQuantity } = useCart();

  return (
    <section className="mx-auto max-w-3xl px-4 py-6">
      <h1 className="mb-1 text-3xl">My Cart</h1>
      <p className="mb-4 text-sm text-gray-600">
        {totalQuantity} item{totalQuantity === 1 ? "" : "s"} in the cart
      </p>

      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <CartItem product={item} key={item.id} />
          ))}
        </div>
      ) : (
        <EmptyCartState />
      )}
    </section>
  );
}

export default Cart;
