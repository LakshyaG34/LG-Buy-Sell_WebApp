import React from "react"
import Image from "next/image";

const ItemCard = ({image, price}) =>
{
    return(
        <div className="relative w-64 h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
            src={image}
            alt="Item"
            width={50}
            height={50}
            className="w-full h-full object-cover"/>
            <div className="absolute bottom-2 left-2 bg-block bg-opacity-60 text-white px-3 py-1 rounded-md text-sm font-semibold">
                Rs{price}
            </div>
        </div>
    )
}

export default ItemCard;