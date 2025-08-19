"use client"

import React,{useState, useEffect} from "react"
import ItemCard from "@/app/components/itemCard"
import Link from "next/link"

const Home = () =>
{
    const [items, setItems] = useState([]);
    useEffect(()=>{
        const demo = async()=>{
            const response = await fetch("/api/items");
            if(!response.ok)
            {
                throw new Error("cannot fetch")
            }
            const data = await response.json();
            setItems(data);
        };
        demo();
    },[]);
    return(
        <div className="min-h-screen py-10 px-6 bg-gray-50">
            <h1 className="mt-8 mb-8">Available Items</h1>
            <Link href="/home/add" className="border border-rounded rounded-full px-2 py-2 cursor-pointer">Add Items</Link>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                {
                    items.map((item)=>(
                        <ItemCard key={item._id} image={item.image} price={item.price} description={item.description}/>
                    ))
                }
            </div>
        </div>
    )
}
export default Home;