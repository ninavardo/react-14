import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductsList() {
  return (
    <section>
      <h2 className="mb-4 text-xl">Products ({products.length})</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductsList;
