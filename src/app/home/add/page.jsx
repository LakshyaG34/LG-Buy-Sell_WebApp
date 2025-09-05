"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

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

      await toast.promise(
        (async () => {
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
        })(),
        {
          loading: "Uploading & saving item...",
          success: "Item added successfully!",
          error: "Failed to add item. Try again.",
        }
      );
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
      <div className="w-full max-w-md p-6 rounded-2xl bg-gradient-to-br from-purple-700/50 via-pink-500/30 to-purple-600/40 backdrop-blur-xl border-2 border-purple-500 shadow-[0_0_30px_rgba(236,72,153,0.6),0_0_60px_rgba(139,92,246,0.4)]">
        <h1 className="text-2xl font-bold mb-6 text-center text-purple-300 [text-shadow:0_0_10px_rgba(236,72,153,0.8),0_0_20px_rgba(139,92,246,0.6)]">
          Add a New Item
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-2 text-purple-300">
              Item Image
            </label>
            <label
              htmlFor="file-upload"
              className="flex items-center justify-center w-full px-4 py-3 bg-purple-600/70 text-white rounded-xl cursor-pointer hover:bg-purple-700 transition shadow-[0_0_15px_rgba(236,72,153,0.6)] hover:shadow-[0_0_30px_rgba(236,72,153,0.9)]"
            >
              {file ? file.name : "Upload Image"}
            </label>
            <input
              id="file-upload"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="hidden"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium mb-2 text-purple-300">
              Price (₹)
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="500"
              className="w-full px-3 py-2 rounded-xl bg-black/40 backdrop-blur-md border-2 border-purple-500 placeholder-purple-300 text-white focus:border-pink-400 focus:ring-2 focus:ring-pink-400 outline-none transition"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2 text-purple-300">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your item..."
              className="w-full px-3 py-2 rounded-xl bg-black/40 backdrop-blur-md border-2 border-purple-500 placeholder-purple-300 text-white focus:border-pink-400 focus:ring-2 focus:ring-pink-400 outline-none transition"
              required
            />
          </div>

          {/* Category */}
          <div className="relative">
            <label className="block text-sm font-medium mb-2 text-purple-300">
              Category
            </label>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="w-full px-4 py-2 rounded-full bg-purple-600/50 border-2 border-purple-400 text-pink-300 backdrop-blur-md hover:border-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.8)] transition"
            >
              {category || "Select Category"}
            </button>
            {open && (
              <div className="absolute mt-2 w-full bg-purple-900/90 border border-purple-500 rounded-xl shadow-[0_0_20px_rgba(236,72,153,0.7)] z-10">
                <ul>
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        type="button"
                        onClick={() => {
                          setCategory(cat);
                          setOpen(false);
                        }}
                        className="w-full text-left px-3 py-2 hover:bg-pink-500/50 text-white rounded-lg transition"
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Error */}
          {err && <p className="text-red-400 text-sm">{err}</p>}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-full bg-pink-500/70 text-white font-bold hover:bg-pink-600 hover:shadow-[0_0_20px_rgba(236,72,153,0.9)] transition disabled:bg-gray-500"
          >
            {loading ? "Adding..." : "Add Item"}
          </button>
        </form>
      </div>
    </div>
  );
}
