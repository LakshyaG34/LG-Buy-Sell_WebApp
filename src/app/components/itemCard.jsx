import React from "react";
import Image from "next/image";

const ItemCard = ({ image, price, description, category }) => {
  return (
    <div className="relative w-64 h-80 rounded-xl overflow-hidden border border-purple-500 shadow-[0_0_30px_rgba(236,72,153,0.6),0_0_60px_rgba(139,92,246,0.4)] hover:shadow-[0_0_45px_20px_rgba(168,85,247,1)] transition-shadow duration-300">
      <Image
        src={image}
        alt="Item"
        width={256}
        height={320}
        className="w-full h-full object-cover"
      />

      {/* Overlay container */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-pink-300 via-pink-500 to-pink-300 bg-opacity-60 text-white p-3 space-y-1">
        <div className="flex flex-row justify-between">
          <div className="text-sm font-semibold">₹{price}</div>
          <div className="text-xs border rounded-lg border-transparent bg-purple-300 text-pink-500 px-1 py-1">{category}</div>
        </div>
        <div className="text-xs">{description}</div>
      </div>
    </div>
  );
};

export default ItemCard;
