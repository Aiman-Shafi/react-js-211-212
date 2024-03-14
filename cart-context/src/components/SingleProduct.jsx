import React from "react";
import { CartState } from "../context/CartContext";
import { useDarkMode } from "../context/DarkModeProvider";

export default function SingleProduct({ product }) {
  const { darkMode } = useDarkMode();
  const { cart, setCart } = CartState();
  return (
    <>
      <div className={darkMode ? "dark" : "light"}>
        <img
          src={product.image}
          alt=""
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        <div className="relative border border-gray-100  dark:bg-gray-700 bg-white p-6">
          <h3 className="mt-4 text-lg font-medium dark:text-white text-gray-900">
            {product.name}
          </h3>

          <p className="mt-1.5 text-sm text-gray-700 dark:text-gray-200">
            ${product.price}
          </p>

          {cart?.includes(product) ? (
            <button
              onClick={() => setCart(cart.filter((c) => c.id !== product.id))}
              className="block w-full rounded text-white bg-gray-800 p-4 text-sm font-medium transition hover:scale-105 mt-5"
            >
              Remove From Cart
            </button>
          ) : (
            <button
              onClick={() => setCart([...cart, product])}
              className="block w-full rounded text-white bg-indigo-600 p-4 text-sm font-medium transition hover:scale-105 mt-5"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
}
