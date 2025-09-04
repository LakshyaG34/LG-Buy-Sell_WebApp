"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

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
        <div className="border rounded-2xl border-transparent px-8 py-8 bg-gradient-to-r from-purple-600 via-purple-300 to-purple-200 shadow-[0_0_30px_15px_rgba(139,92,246,0.6)] hover:shadow-[0_0_60px_30px_rgba(139,92,246,0.8)]
  transition-shadow duration-300">
          <div className="flex flex-col justify-center items-center">
            <p className="text-black text-4xl text-bold">Let's get in touch</p>
            <p className="text-black text-sm py-2">
              Already have an account?
              <Link href="/login" className="text-blue-900">
                {" "}
                Login Here
              </Link>
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mt-4 relative">
                <label className="font-medium text-sm text-black block mb-1">
                  Name
                  <span className="text-red-500"> *</span>
                </label>
                <div className="flex items-center h-12 px-4 rounded-xl border border-slate-300 bg-slate-50 focus-within:ring-2 focus-within:ring-indigo-400 transition-all relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user w-5 h-5 text-slate-500"
                    aria-hidden="true"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <input
                    placeholder="Enter your full name"
                    required=""
                    className="h-full px-3 w-full outline-none bg-transparent text-slate-800 placeholder-slate-400"
                    type="text"
                    value={form.name}
                    name="name"
                    fdprocessedid="5jip9u"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
              </div>
              <div className="mt-4 relative">
                <label className="font-medium text-sm text-black block mb-1">
                  email
                  <span className="text-red-500"> *</span>
                </label>
                <div className="flex items-center h-12 px-4 rounded-xl border border-slate-300 bg-slate-50 focus-within:ring-2 focus-within:ring-indigo-400 transition-all relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user w-5 h-5 text-slate-500"
                    aria-hidden="true"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <input
                    placeholder="Enter your Email"
                    required=""
                    className="h-full px-3 w-full outline-none bg-transparent text-slate-800 placeholder-slate-400"
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
                <label className="font-medium text-sm text-black block mb-1">
                  Password
                  <span className="text-red-500"> *</span>
                </label>
                <div className="flex items-center h-12 px-4 rounded-xl border border-slate-300 bg-slate-50 focus-within:ring-2 focus-within:ring-indigo-400 transition-all relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user w-5 h-5 text-slate-500"
                    aria-hidden="true"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <input
                    placeholder="Enter your Password"
                    required=""
                    className="h-full px-3 w-full outline-none bg-transparent text-slate-800 placeholder-slate-400"
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
              <button type="submit" className="text-black border rounded-full px-2 py-2 mt-4 cursor-pointer hover:bg-purple-900 hover:text-white hover:border-white">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
