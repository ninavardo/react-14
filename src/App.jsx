import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import { CartProvider } from "./context/CartProvider";

function App() {
  return (
    <CartProvider>
      <Header />

      <main className="min-h-screen bg-sky-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </CartProvider>
  );
}

export default App;
