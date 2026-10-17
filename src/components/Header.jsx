import { Link } from "react-router";
import { ShoppingCart, ShoppingBag } from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <ShoppingBag size={25} />
          <span>Forma</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Home
          </Link>

          <Link
            to="/cart"
            className="relative flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black"
          >
            <ShoppingCart size={22} />
            <span>Cart</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-xs text-white">
              0
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
