"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Hero3 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const demo = async () => {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) throw new Error("cannot fetch");
      const data = await response.json();
      setProducts(data.products);
    };
    demo();
  }, []);

  return (
    <div className="my-7 overflow-hidden w-full relative max-w-7xl mx-auto">
      {/* Gradient fade on left */}
      <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

      {/* Marquee container */}
      <div className="marquee">
        <div className="marquee-inner">
          {/* First copy */}
          {products.slice(5, 10).map((product) => (
            <Image
              key={product.id}
              alt={product.title}
              src={product.images[0]}
              width={250}
              height={250}
              className="mx-4 rounded"
            />
          ))}

          {/* Duplicate copy */}
          {products.slice(0, 4).map((product, index) => (
            <Image
              key={`dup-${product.id}`}
              alt={product.title}
              src={product.images[0]}
              width={250}
              height={250}
              className="mx-4 rounded"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero3;
