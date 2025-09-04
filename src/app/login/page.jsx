"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function SigninPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      login();
      router.push("/home");
    } else {
      const data = await res.json();
      alert(data.error);
    }
  };
  return (
    <section className="text-white h-full">
      <div className="min-h-screen flex flex-col gap-2 items-center justify-center py-10 mb-30">
        <span className="text-3xl">LOG IN</span>
        <div
          className="border rounded-2xl border-transparent px-8 py-8 bg-gradient-to-r from-purple-600 via-purple-300 to-purple-200 shadow-[0_0_30px_15px_rgba(139,92,246,0.6)] hover:shadow-[0_0_60px_30px_rgba(139,92,246,0.8)]
  transition-shadow duration-300"
        >
          <div className="flex flex-col justify-center items-center ">
            <form onSubmit={handleSubmit}>
              <div className="mt-4 relative flex flex-col items-center">
                <label className="font-medium text-xl text-purple-500 block mb-1">
                  E-mail
                  <span className="text-red-500"> *</span>
                </label>
                <div className="flex items-center h-12 px-4 rounded-xl border border-slate-300 bg-slate-50 focus-within:ring-2 focus-within:ring-indigo-400 transition-all relative">
                  <FaEnvelope className="text-black" />
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
              <div className="mt-4 relative flex flex-col items-center">
                <label className="font-medium text-xl text-purple-500 block mb-1">
                  Password
                  <span className="text-red-500"> *</span>
                </label>
                <div className="flex items-center h-12 px-4 rounded-xl border border-slate-300 bg-slate-50 focus-within:ring-2 focus-within:ring-indigo-400 transition-all relative">
                  <FaLock className="text-black" />
                  <input
                    placeholder="Enter your Password"
                    required=""
                    className="h-full px-3 w-full outline-none bg-transparent text-slate-800 placeholder-slate-400"
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
                className="text-black bg-white border rounded-full px-2 py-2 mt-4 cursor-pointer hover:bg-purple-900 hover:text-white hover:border-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
