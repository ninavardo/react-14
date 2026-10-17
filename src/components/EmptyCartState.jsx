import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";

const EmptyCartState = () => {
  return (
    <div className="mt-10 rounded-xl border border-gray-200 bg-white px-6 py-16 text-center">
      <ShoppingCart className="mx-auto text-gray-400" size={40} />

      <h2 className="mt-4 text-lg font-semibold">Your cart is empty</h2>

      <p className="mt-2 text-sm text-gray-500">
        Add some products to get started.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-700"
      >
        Browse products
      </Link>
    </div>
  );
};

export default EmptyCartState;
