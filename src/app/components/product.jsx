"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const demo = async () => {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("cannot fetch");
      }
      const data = await response.json();
      setProducts(data.products);
    };
    demo();
  }, []);
  return (
    <section className="mt-8">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="relative">
              <Image
                alt={product.title}
                src={product.images[0]}
                width={250}
                height={250}
                className="transform transition-transform duration-300 hover:-translate-y-2 hover:-transate-x-0"
              />
              <p className="absolute bottom-2 left-2 backdrop-blur-3xl border border-transparent rounded-full bg-amber-100/10 text-black text-xs px-2 py-1">
                Starting from ${product.price}
              </p>
            </div>
          ))}
          {/* <div className="relative">
                    <Image alt ={image.id} src={image} width={250} height={250}/>
                    <p className="absolute bottom-2 left-2 border rounded-full bg-amber-100 text-black text-[10px] px-1">Starting from $199</p>
                    </div>
                    <div className="relative">
                    <Image alt ="p2" src="/images/p2.png" width={250} height={250}/>
                    <p className="absolute bottom-2 left-2 border rounded-full bg-amber-100 text-black text-[10px] px-1">Starting from $99</p>
                    </div>
                    <div className="relative">
                    <Image alt ="p3" src="/images/p3.png" width={250} height={250}/>
                    <p className="absolute bottom-2 left-2 border rounded-full bg-amber-100 text-black text-[10px] px-1">Starting from $299</p>
                    </div>
                    <div className="relative">
                    <Image alt ="p3" src="/images/p3.png" width={250} height={250}/>
                    <p className="absolute bottom-2 left-2 border rounded-full bg-amber-100 text-black text-[10px] px-1">Starting from $299</p>
                    </div> */}
        </div>
      </div>
    </section>
  );
};

export default Product;
