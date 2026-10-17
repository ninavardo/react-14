import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
