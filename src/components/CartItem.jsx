import { useCart } from "../context/useCart";

function CartItem({ product }) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="mb-3 flex flex-col gap-3 border border-gray-300 bg-white p-3 sm:flex-row sm:items-center">
      <img
        src={product.image}
        alt={product.title}
        width={400}
        height={400}
        loading="lazy"
        decoding="async"
        className="h-24 w-full object-cover sm:w-24"
      />

      <div className="flex-1">
        <h3 className="text-lg">{product.title}</h3>
        <p className="text-sm text-gray-600">${product.price.toFixed(2)} each</p>
        <p className="text-sm">
          Line total: ${(product.price * product.quantity).toFixed(2)}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => decreaseQuantity(product)}
          className="border border-gray-400 px-3 py-1"
        >
          -
        </button>
        <span className="w-6 text-center">{product.quantity}</span>
        <button
          onClick={() => increaseQuantity(product)}
          className="border border-gray-400 px-3 py-1"
        >
          +
        </button>
        <button
          onClick={() => removeFromCart(product.id)}
          className="ml-2 bg-red-500 px-3 py-1 text-sm text-white"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
