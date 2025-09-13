import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import saman from "../context/ItemsContext";

const Navbar = () => {
  const [searchterm, setSearchterm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { cart } = useContext(saman);
  const handlesubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchterm}`);
    setSearchterm("");
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 border-b-4 border-green-400 shadow-lg">
      <div className="flex items-center justify-between px-4 sm:px-8 py-3">
        <Link
          to="/"
          className="font-extrabold text-yellow-300 tracking-wide text-2xl sm:text-3xl hover:text-yellow-400 transition-colors duration-200"
        >
          Amazon
        </Link>
        <form
          onSubmit={handlesubmit}
          className="hidden sm:flex items-center ml-4 flex-1 max-w-xs"
        >
          <input
            type="search"
            placeholder="Search products..."
            className="bg-slate-200 rounded-2xl w-full p-2 text-black focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200"
            value={searchterm}
            onChange={(e) => setSearchterm(e.target.value)}
          />
        </form>
        {/* Hamburger */}
        <button
          className="sm:hidden ml-2 text-yellow-300 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="material-icons-outlined text-3xl">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
        {/* Desktop Nav */}
        <ul className="hidden sm:flex gap-4 md:gap-8 items-center ml-6">
          <NavLink
            to="/mobiles"
            className={({ isActive }) =>
              `px-3 py-1 rounded-lg transition-colors duration-200 ${
                isActive
                  ? "text-rose-300 font-bold bg-slate-800 shadow"
                  : "text-slate-100 hover:text-yellow-300 hover:bg-slate-800"
              }`
            }
          >
            Mobiles
          </NavLink>
          <NavLink
            to="/tablets"
            className={({ isActive }) =>
              `px-3 py-1 rounded-lg transition-colors duration-200 ${
                isActive
                  ? "text-rose-300 font-bold bg-slate-800 shadow"
                  : "text-slate-100 hover:text-yellow-300 hover:bg-slate-800"
              }`
            }
          >
            Tablets
          </NavLink>
          <NavLink
            to="/watches"
            className={({ isActive }) =>
              `px-3 py-1 rounded-lg transition-colors duration-200 ${
                isActive
                  ? "text-rose-300 font-bold bg-slate-800 shadow"
                  : "text-slate-100 hover:text-yellow-300 hover:bg-slate-800"
              }`
            }
          >
            Watches
          </NavLink>
          <NavLink
            to="/laptops"
            className={({ isActive }) =>
              `px-3 py-1 rounded-lg transition-colors duration-200 ${
                isActive
                  ? "text-rose-300 font-bold bg-slate-800 shadow"
                  : "text-slate-100 hover:text-yellow-300 hover:bg-slate-800"
              }`
            }
          >
            Laptops
          </NavLink>
        </ul>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `ml-2 sm:ml-6 flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
              isActive
                ? "text-rose-300 font-bold bg-slate-800 shadow"
                : "text-slate-100 hover:text-yellow-300 hover:bg-slate-800"
            }`
          }
        >
          <span className="material-icons-outlined text-2xl">🛒</span>
          <span className="hidden sm:inline">Cart</span>
          {cart.length > 0 && (
            <span className="ml-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </NavLink>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4">
          <form onSubmit={handlesubmit} className="mb-3">
            <input
              type="search"
              placeholder="Search products..."
              className="bg-slate-200 rounded-2xl w-full p-2 text-black focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200"
              value={searchterm}
              onChange={(e) => setSearchterm(e.target.value)}
            />
          </form>
          <ul className="flex flex-col gap-2">
            <NavLink
              to="/mobiles"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "text-rose-300 font-bold bg-slate-800 shadow"
                    : "text-slate-100 hover:text-yellow-300 hover:bg-slate-800"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Mobiles
            </NavLink>
            <NavLink
              to="/tablets"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "text-rose-300 font-bold bg-slate-800 shadow"
                    : "text-slate-100 hover:text-yellow-300 hover:bg-slate-800"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Tablets
            </NavLink>
            <NavLink
              to="/watches"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "text-rose-300 font-bold bg-slate-800 shadow"
                    : "text-slate-100 hover:text-yellow-300 hover:bg-slate-800"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Watches
            </NavLink>
            <NavLink
              to="/laptops"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "text-rose-300 font-bold bg-slate-800 shadow"
                    : "text-slate-100 hover:text-yellow-300 hover:bg-slate-800"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Laptops
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "text-rose-300 font-bold bg-slate-800 shadow"
                    : "text-slate-100 hover:text-yellow-300 hover:bg-slate-800"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              <span className="material-icons-outlined text-2xl">🛒</span>
              <span>Cart</span>
              {cart.length > 0 && (
                <span className="ml-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">
                  {cart.length}
                </span>
              )}
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
