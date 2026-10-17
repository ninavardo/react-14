import ProductsList from "../components/ProductsList";

function Home() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
          Thoughtfully selected
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Everyday essentials.
        </h1>

        <p className="mt-3 max-w-xl text-gray-600">
          Discover simple, functional pieces designed for everyday life.
        </p>
      </section>

      <ProductsList />
    </>
  );
}

export default Home;