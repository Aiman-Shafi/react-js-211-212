import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="navbar bg-base-100 max-w-[1100px] mx-auto">
        <div className="flex-1">
          <Link to="/">
            <a className="btn btn-ghost text-4xl font-bold">
              Movie<span className="text-secondary">Dekhba</span>
            </a>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-2xl">
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/search"}>Search Movies</NavLink>
            </li>
            <li>
              <details>
                <summary>More</summary>
                <ul className="p-2 bg-base-100 rounded-t-none relative z-[99]">
                  <li>
                    <NavLink to={"/contact"}>Contact</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/"}>Movies</NavLink>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
