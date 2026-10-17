import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductsList() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">All products</h2>
        <p className="text-sm text-gray-500">{products.length} products</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductsList;
