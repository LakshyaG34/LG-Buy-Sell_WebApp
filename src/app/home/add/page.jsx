"use client";
import React, { use, useState } from "react";
import { useRouter } from "next/navigation";

export default function AddItem() {
  // const [image, setImage] = useState("");
  const [file, setFile] = useState(null);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const router = useRouter();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setErr(null);
      try{

      
      const formData = new FormData();
      formData.append("file", file);

      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const { url } = await uploadRes.json();

      //create item with uploaded image url
      await fetch("/api/items", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ image: url, price, description }),
      });
      router.push("/home");
    }
    catch(err)
    {
      setErr(err.message);
    }finally{
      setLoading(false);
    }
  }
  
  // try {
  //   const res = await fetch("/api/items", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ image, price, description }),
  //   });

  //   if (!res.ok) {
  //     const errorData = await res.json();
  //     throw new Error(errorData.error || "Failed to add item");
  //   }

  //   setImage("");
  //   setPrice("");
  //   setDescription("");

  //   // ✅ navigate properly
  //   router.push("/home");
  // } catch (err) {;
  //   setErr(err.message);
  // } finally {
  //   setLoading(false);
  // }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-xl font-bold mb-4">Add a New Item</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Image URL Input */}
          <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input
              type="file"
              // value={image}
              onChange={(e) => setFile(e.target.files[0])}
              // placeholder="https://example.com/item.jpg"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Price Input */}
          <div>
            <label className="block text-sm font-medium mb-1">Price (₹)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="500"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Demo"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Error */}
          {err && <p className="text-red-500 text-sm">{err}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400"
          >
            {loading ? "Adding..." : "Add Item"}
          </button>
        </form>
      </div>
    </div>
  );
}
