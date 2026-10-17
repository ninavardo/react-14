import { Minus, Plus, Trash2 } from "lucide-react";

function CartItem({ product}) {
  return (
    <article className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4">
      <img
        src={product.image}
        alt={product.title}
        className="h-24 w-24 rounded-lg object-cover"
      />

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="font-semibold text-gray-900">{product.title}</h3>

          <p className="mt-1 text-sm text-gray-500">
            ${product.price.toFixed(2)}
          </p>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <button
            className="rounded-md border border-gray-300 p-2"
            aria-label="Decrease quantity"
          >
            <Minus size={16} />
          </button>

          <span className="min-w-4 text-center">{product.quantity}</span>

          <button
            className="rounded-md border border-gray-300 p-2"
            aria-label="Increase quantity"
          >
            <Plus size={16} />
          </button>

          <button
            className="ml-auto text-red-500"
            aria-label="Remove product"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default CartItem;
