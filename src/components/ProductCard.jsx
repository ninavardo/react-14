import { useCart } from "../context/useCart";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border border-gray-300 bg-white p-3 shadow">
      <img
        src={product.image}
        alt={product.title}
        width={400}
        height={400}
        loading="lazy"
        decoding="async"
        className="h-44 w-full object-cover"
      />

      <p className="mt-2 text-xs text-blue-700">{product.category}</p>
      <h3 className="mt-1 text-lg">{product.title}</h3>
      <p className="mt-1 font-bold text-green-700">
        ${product.price.toFixed(2)}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="mt-3 w-full bg-green-600 py-2 text-white hover:bg-green-700"
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
