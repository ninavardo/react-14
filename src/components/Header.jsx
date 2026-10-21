import { Link } from "react-router";
import { useCart } from "../context/useCart";

function Header() {
  const { totalQuantity } = useCart();

  return (
    <header className="bg-blue-600 text-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-2xl font-bold">
          Mini Market
        </Link>

        <nav className="flex items-center gap-5 text-sm">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link
            to="/cart"
            className="rounded bg-blue-800 px-3 py-1 hover:bg-blue-900"
          >
            Cart ({totalQuantity})
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
