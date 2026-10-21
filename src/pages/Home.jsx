import ProductsList from "../components/ProductsList";

function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-6">
      <section className="mb-6 border border-gray-300 bg-white">
        <img
          src="/hero.webp"
          alt="Supermarket aisle with shelves of groceries"
          width={1920}
          height={820}
          fetchPriority="high"
          decoding="async"
          className="h-auto w-full"
        />
        <div className="p-4">
          <h1 className="text-3xl">Welcome to Mini Market</h1>
          <p className="mt-2 text-gray-700">
            Browse the products below and add the ones you want.
          </p>
        </div>
      </section>

      <ProductsList />
    </div>
  );
}

export default Home;
