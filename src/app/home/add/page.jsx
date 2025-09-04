"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddItem() {
  // const [image, setImage] = useState("");
  const [file, setFile] = useState(null);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErr(null);
    try {
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
        body: JSON.stringify({ image: url, price, description, category }),
      });
      router.push("/home");
    } catch (err) {
      setErr(err.message);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    "Electronics",
    "Furniture",
    "Books",
    "Fashion",
    "Vehicles",
    "others",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-xl font-bold mb-4">Add a New Item</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Image URL Input */}
          <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
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
          <div className="relative">
            <label>Category</label>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer"
            >
              {category || "Select Category"}
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
                <ul>
                  {categories.map((cat)=>(
                    <li key = {cat}>
                      <button type="button" onClick = {()=>{setCategory(cat); setOpen(false);}} className="w-full hover:bg-green-400 cursor-pointer">
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
