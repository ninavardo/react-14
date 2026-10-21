import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import { CartProvider } from "./context/CartProvider";

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));

function App() {
  return (
    <CartProvider>
      <Header />

      <main className="min-h-screen bg-sky-50">
        <Suspense fallback={<p className="p-4">Loading...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Suspense>
      </main>
    </CartProvider>
  );
}

export default App;
