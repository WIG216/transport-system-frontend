import React from "react";
import { ProductCard } from "../UI/ProductCard";
const Product = (props) => {
  return (
    <section class="text-gray-600 body-font mt-[85px]">
      <h1 class="mb-4 text-4xl font-extrabold leading-none text-center tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Available Cars
      </h1>
      <p class="mb-6 text-lg font-normal text-center text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Here at Transport.com we focus on markets where technology, innovation,
        and capital can unlock long-term value and drive economic growth.
      </p>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4 ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default Product;
