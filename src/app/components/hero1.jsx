import React from "react";
import Link from "next/link"

const Hero1 = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="animate-bounce text-4xl font-bold mt-4 text-center text-purple-400">🛍️ Lakshya Buy and Sell</p>
      <div className="flex flex-col gap-6 items-center">
        <div className="[text-shadow:0_0_10px_rgba(236,72,153,1),0_0_20px_rgba(236,72,153,0.8),0_0_30px_rgba(236,72,153,0.6),0_0_50px_rgba(236,72,153,0.4)]">
        <p className = "text-base mt-4 py-4 text-center max-w-[20ch] text-purple-300 [text-shadow:0_0_10px_rgba(236,72,153,1),0_0_20px_rgba(236,72,153,0.8),0_0_30px_rgba(236,72,153,0.6),0_0_50px_rgba(236,72,153,0.4)]">
          The smart way to buy, sell & grow. Built by hustlers. Trusted by doers.
          💞Loved by customers.
        </p>
        </div>
        <Link href="/signup" className = "border border-purple-900 rounded-full px-2 py-2 bg-indigo-100 transition duration-300 ease-in-out hover:bg-purple-900/50 hover:text-white hover:shadow-[0_0_45px_rgba(139,92,246,0.7)]">Swipe, Sell, Success. Explore</Link>
      </div>
    </div>
  );
};

export default Hero1;
