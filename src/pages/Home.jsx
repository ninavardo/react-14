import ProductsList from "../components/ProductsList";

function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-6">
      <h1 className="mb-1 text-3xl">Welcome to Mini Market</h1>
      <p className="mb-6 text-gray-700">
        Browse the products below and add the ones you want.
      </p>
      <ProductsList />
    </div>
  );
}

export default Home;
