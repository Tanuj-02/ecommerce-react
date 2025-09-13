import React, { useContext } from "react";
import saman from "../context/ItemsContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext(saman);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-black flex flex-col items-center py-6 sm:py-10 px-2">
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center bg-slate-800/80 p-6 sm:p-10 rounded-2xl shadow-lg w-full max-w-md mt-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-rose-300 mb-6">
            Nothing here
          </h2>
          <Link to="/">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 sm:px-6 py-2 rounded-lg shadow transition-colors duration-200 text-base sm:text-lg">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="w-full max-w-5xl flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-6 sm:mb-8">
            Your Cart
          </h2>
          <div className="flex flex-wrap gap-6 sm:gap-8 justify-center mb-8">
            {cart.map((data) => (
              <div
                key={data.id}
                className="w-full max-w-xs sm:w-72 h-80 sm:h-96 p-4 sm:p-5 border border-slate-700 rounded-2xl bg-slate-900/80 flex flex-col items-center justify-between shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_5px_rgba(148,163,184,0.4)]"
              >
                <img
                  src={data.imgSrc}
                  alt={data.title}
                  className="w-32 h-36 sm:w-40 sm:h-44 border-2 border-yellow-400 rounded-xl bg-white p-2 mb-4 object-contain"
                />
                <h1 className="text-white text-base sm:text-lg font-semibold text-center">
                  {data.title}
                </h1>
                <h1 className="text-yellow-400 font-bold text-lg sm:text-xl mt-2 mb-4 text-center">
                  ₹ {data.price}
                </h1>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md justify-center">
            <Link to="/" className="flex-1">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 sm:px-6 py-2 rounded-lg shadow transition-colors duration-200 text-base sm:text-lg">
                Continue Shopping
              </button>
            </Link>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold px-4 sm:px-6 py-2 rounded-lg shadow transition-colors duration-200 text-base sm:text-lg">
              Buy Now
            </button>
            <button
              onClick={() => setCart([])}
              className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold px-4 sm:px-6 py-2 rounded-lg shadow transition-colors duration-200 text-base sm:text-lg"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
