import React from "react";
import Link from "next/link"

const Hero1 = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="animate-bounce text-4xl font-bold mt-4">🛍️ Lakshya Buy and Sell</p>
      <p className = "text-base mt-4 py-4 text-center max-w-[20ch]">
        The smart way to buy, sell & grow. Built by hustlers. Trusted by doers.
        💞Loved by customers.
      </p>
      <Link href="/signup" className = "border border-purple-900 rounded-full px-2 py-2 bg-indigo-100 hover:bg-purple-900 hover:text-white hover:border-white">Swipe, Sell, Success. Explore</Link>
    </div>
  );
};

export default Hero1;
