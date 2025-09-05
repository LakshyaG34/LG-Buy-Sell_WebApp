"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";


const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      toast.success("Signed Up Successfully");
      router.push("/login");
    } else {
      const data = await res.json();
      toast.error(data.error);
    }
  };
  return (
    <section className="text-white h-full">
      <div className="min-h-screen flex items-center justify-center py-10 px-4">
        <div className="border-2 border-purple-500 rounded-2xl px-8 py-8 bg-gradient-to-br from-purple-700/50 via-pink-500/30 to-purple-600/40 backdrop-blur-xl shadow-[0_0_30px_rgba(236,72,153,0.6),0_0_60px_rgba(139,92,246,0.4)] hover:shadow-[0_0_60px_30px_rgba(139,92,246,0.8)] transition-shadow duration-300">
          <div className="flex flex-col justify-center items-center">
            <p className="text-4xl text-bold text-purple-300 [text-shadow:0_0_10px_rgba(236,72,153,0.8),0_0_20px_rgba(139,92,246,0.6)]">Let's get in touch</p>
            <p className="text-purple-200 text-sm py-2">
              Already have an account?
              <Link href="/login" className="text-pink-500">
                {" "}
                Login Here
              </Link>
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
              <div className="mt-4 relative">
                <label className="font-medium text-sm text-purple-200 block mb-1">
                  Name
                  <span className="text-red-500"> *</span>
                </label>
                <div className="flex items-center h-12 px-4 rounded-full bg-black/50 backdrop-blur-md [background:linear-gradient(#0a0a0a,#0a0a0a) padding-box,linear-gradient(to right,#8b5cf6,#ec4899,#3b82f6) border-box] focus-within:ring-2 focus-within:ring-pink-400 transition-all relative">
                  <FaUser className="text-purple-500"/>
                  <input
                    placeholder="Enter your full name"
                    required=""
                    className="h-full px-3 w-full outline-none bg-transparent placeholder-[#22d3ee] [&::placeholder]:opacity-100 [&::placeholder]:text-shadow-[0_0_3px_#22d3ee,0_0_6px_#8b5cf6"
                    type="text"
                    value={form.name}
                    name="name"
                    fdprocessedid="5jip9u"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
              </div>
              <div className="mt-4 relative">
                <label className="font-medium text-sm text-purple-200 block mb-1">
                  E-mail
                  <span className="text-red-500"> *</span>
                </label>
                <div className="flex items-center h-12 px-4 rounded-full bg-black/50 backdrop-blur-md [background:linear-gradient(#0a0a0a,#0a0a0a) padding-box,linear-gradient(to right,#8b5cf6,#ec4899,#3b82f6) border-box] focus-within:ring-2 focus-within:ring-pink-400 transition-all relative">
                  <FaEnvelope className="text-purple-500"/>
                  <input
                    placeholder="Enter your Email"
                    required=""
                    className="h-full px-3 w-full outline-none bg-transparent placeholder-[#22d3ee] [&::placeholder]:opacity-100 [&::placeholder]:text-shadow-[0_0_3px_#22d3ee,0_0_6px_#8b5cf6"
                    type="text"
                    value={form.email}
                    name="name"
                    fdprocessedid="5jip9u"
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="mt-4 relative">
                <label className="font-medium text-sm text-purple-200 block mb-1">
                  Password
                  <span className="text-red-500"> *</span>
                </label>
                <div className="flex items-center h-12 px-4 rounded-full bg-black/50 backdrop-blur-md [background:linear-gradient(#0a0a0a,#0a0a0a) padding-box,linear-gradient(to right,#8b5cf6,#ec4899,#3b82f6) border-box] focus-within:ring-2 focus-within:ring-pink-400 transition-all relative">
                  <FaLock className="text-purple-500"/>
                  <input
                    placeholder="Enter your Password"
                    required=""
                    className="h-full px-3 w-full outline-none bg-transparent placeholder-[#22d3ee] [&::placeholder]:opacity-100 [&::placeholder]:text-shadow-[0_0_3px_#22d3ee,0_0_6px_#8b5cf6"
                    type="text"
                    value={form.password}
                    name="name"
                    fdprocessedid="5jip9u"
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                  />
                </div>
              </div>
              <button type="submit" className="text-white bg-pink-500/70 border border-transparent rounded-full px-2 py-2 mt-4 cursor-pointer hover:bg-pink-600 hover:shadow-[0_0_20px_rgba(236,72,153,0.9)] transition disabled:bg-gray-500">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
