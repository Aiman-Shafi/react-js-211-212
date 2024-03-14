import React, { useState } from "react";
import SingleProduct from "./SingleProduct";
import { faker } from "@faker-js/faker";
import { useDarkMode } from "../context/DarkModeProvider";

export default function Shop() {
  const productArray = [...Array(6)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
  }));

  const [products] = useState(productArray);

  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1100px] px-5 dark:bg-gray-800 dark:text-white">
        {products.map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
