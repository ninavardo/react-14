import { Link } from "react-router";

function EmptyCartState() {
  return (
    <div className="border border-dashed border-gray-400 bg-white p-8 text-center">
      <h2 className="text-lg">Your cart is empty</h2>
      <p className="mt-2 text-sm text-gray-600">
        You have not added any products yet.
      </p>
      <Link
        to="/"
        className="mt-4 inline-block bg-blue-600 px-4 py-2 text-white"
      >
        Back to products
      </Link>
    </div>
  );
}

export default EmptyCartState;
