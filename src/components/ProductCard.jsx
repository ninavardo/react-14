import { ShoppingCart } from "lucide-react";

function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
          {product.category}
        </p>

        <div className="mt-2 flex items-start justify-between gap-3">
          <h3 className="font-semibold text-gray-900">{product.title}</h3>

          <p className="shrink-0 font-semibold text-gray-900">
            ${product.price.toFixed(2)}
          </p>
        </div>

        <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-gray-700">

          <ShoppingCart size={17} />
          Add to cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
