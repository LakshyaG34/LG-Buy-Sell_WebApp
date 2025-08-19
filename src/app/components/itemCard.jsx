import React from "react";
import Image from "next/image";

const ItemCard = ({ image, price, description }) => {
  return (
    <div className="relative w-64 h-80 rounded-xl overflow-hidden shadow-lg">
      <Image
        src={image}
        alt="Item"
        width={256}
        height={320}
        className="w-full h-full object-cover"
      />

      {/* Overlay container */}
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-3 space-y-1">
        <div className="text-sm font-semibold">₹{price}</div>
        <div className="text-xs">{description}</div>
      </div>
    </div>
  );
};

export default ItemCard;
