import EmptyCartState from "../components/EmptyCartState";

function Cart() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900">Your cart</h1>

      <EmptyCartState />
    </section>
  );
}

export default Cart;
