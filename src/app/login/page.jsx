"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import { FaEnvelope, FaLock, FaUserPlus } from "react-icons/fa";
import Link from "next/link"
import toast from "react-hot-toast";

export default function SigninPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await toast.promise((async()=>{
        const res = await fetch("/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        });
        const data = await res.json();
        console.log(data);
        if(!res.ok)
        {
          throw new Error(data.error || "Login failed")
        }
        login();
        router.push("/home");
        return data;
    })(),{
      success: (data) => `Welcome Back ${data.user.name}`,
      error: (err) => `This just happened: ${err.toString()}`,
    })
    }catch(err)
    {
      console.log(err);
    }
  }
    
  return (
    <section className="text-white h-full">
      <div className="min-h-screen flex flex-col gap-6 items-center justify-center py-10 mb-30">
        <span className="text-3xl">LOG-IN</span>
        <div className="border-2 border-purple-500 rounded-2xl px-8 py-8 bg-gradient-to-br from-purple-700/50 via-pink-500/30 to-purple-600/40 backdrop-blur-xl C hover:shadow-[0_0_60px_30px_rgba(139,92,246,0.8)] transition-shadow duration-300">
          <div className="flex flex-col justify-center items-center ">
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
              <div className="mt-4 relative flex flex-col items-center">
                <label className="font-medium text-xl text-purple-300 [text-shadow:0_0_10px_rgba(236,72,153,0.8),0_0_20px_rgba(139,92,246,0.6)] block mb-1">
                  E-mail
                  <span className="text-red-500"> *</span>
                </label>
                <div className="flex items-center h-12 px-4 rounded-full bg-black/50 backdrop-blur-md [background:linear-gradient(#0a0a0a,#0a0a0a) padding-box,linear-gradient(to right,#8b5cf6,#ec4899,#3b82f6) border-box] focus-within:ring-2 focus-within:ring-pink-400 transition-all relative">
                  <FaEnvelope className="text-purple-500" />
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
              <div className="mt-4 relative flex flex-col items-center ">
                <label className="font-medium text-xl text-purple-300 [text-shadow:0_0_10px_rgba(236,72,153,0.8),0_0_20px_rgba(139,92,246,0.6)] block mb-1">
                  Password
                  <span className="text-red-500"> *</span>
                </label>
                <div className="flex items-center h-12 px-4 rounded-full bg-black/50 backdrop-blur-md [background:linear-gradient(#0a0a0a,#0a0a0a) padding-box,linear-gradient(to right,#8b5cf6,#ec4899,#3b82f6) border-box] focus-within:ring-2 focus-within:ring-pink-400 transition-all relative">
                  <FaLock className="text-purple-500" />
                  <input
                    placeholder="Enter your Password"
                    required=""
                    className="h-full px-3 w-full outline-none bg-transparent placeholder-[#22d3ee] [&::placeholder]:opacity-100 [&::placeholder]:text-shadow-[0_0_3px_#22d3ee,0_0_6px_#8b5cf6"
                    type="password"
                    value={form.password}
                    name="name"
                    fdprocessedid="5jip9u"
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                  />
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-pink-500/70 border border-transparent rounded-full px-2 py-2 mt-4 cursor-pointer hover:bg-pink-600 hover:shadow-[0_0_20px_rgba(236,72,153,0.9)] transition disabled:bg-gray-500"
              >
                LogIn
              </button>
            </form>
          </div>
        </div>
        <span className="flex flex-row items-center gap-3">
          Don't Have An Account?
          <Link href="/signup" className="flex flex-row items-center gap-1 text-purple-400 hover:text-pink-400">
            <FaUserPlus/>
            Signup
          </Link>
        </span>
      </div>
    </section>
  );
}
