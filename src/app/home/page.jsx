"use client"

import React,{useState, useEffect} from "react"
import ItemCard from "@/app/components/itemCard"
import Link from "next/link"

const categories = ["All", "Electronics", "Furniture", "Books", "Fashion", "Vehicles", "others"];

const Home = () =>
{
    const [items, setItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(()=>{
        const demo = async()=>{
            const response = await fetch("/api/items");
            // console.log(response);
            if(!response.ok)
            {
                throw new Error("cannot fetch")
            }
            const data = await response.json();
            setItems(data);
        };
        demo();
    },[]);

    const filteredItems = selectedCategory === "All" ? items : items.filter((item)=>item.category === selectedCategory);
    
    return(
        <div className="flex flex-col gap-10 justify-center items-center min-h-screen py-10 px-6 bg-black/60 mb-20">
            <h1 className="text-4xl font-bold text-purple-600">AVAILABLE ITEMS :-</h1>
            <div className="flex flex-row flex-wrap justify-center gap-3 items-center">
                {
                categories.map((cat) => (
                    <button key={cat} onClick = {() => setSelectedCategory(cat)} className={`border rounded-full px-4 py-2 cursor-pointer transition ${selectedCategory === cat ? 
                        "border border-purple-600 bg-purple-600/60 text-white" : "bg-gray-200 text-white-700 hover:bg-purple-300"
                    }`}>
                        {cat}
                    </button>
                ))
                }
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-40 mt-8">
                {
                    filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                            <ItemCard key ={item._id} image = {`/api/items/${item._id}/image`} price = {item.price} description={item.description} category={item.category}/>
                        ))
                    ) : (
                        <p className="text-purple-600">No items Available under this category</p>
                    )
                }
            </div>
        </div>
    )
}
export default Home;