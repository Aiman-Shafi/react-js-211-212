import React from "react";
import { Link } from "react-router-dom";
import { CartState } from "../context/CartContext";
import { useDarkMode } from "../context/DarkModeProvider";

export default function Header() {
  const { cart } = CartState();
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <header className={darkMode ? "dark" : "light"}>
        <button
          onClick={toggleDarkMode}
          className="px-6 py-4 bg-indigo-500 text-white rounded dark:bg-slate-200 dark:text-gray-600 hover:bg-red-300"
        >
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 dark:bg-gray-800 dark:text-white">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
                Welcome Back, to Fake Shop!
              </h1>

              <p className="mt-1.5 text-sm text-gray-500 dark:text-slate-400">
                Let's shop around! 🎉
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <Link to="/">
                <button
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring dark:bg-slate-400 dark:text-white"
                  type="button"
                >
                  <span className="text-sm font-medium"> Shop </span>
                </button>
              </Link>

              <Link to={"/cart"}>
                <button
                  className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                  type="button"
                >
                  Go to Cart
                  <span className="inline-flex items-center justify-center gap-1 rounded-full bg-emerald-500 px-1.5 text-sm text-white ml-2">
                    {cart.length ? cart.length : ""}
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
