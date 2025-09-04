"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {useAuth} from "@/context/authContext";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {isLoggedIn, logout} = useAuth();
  const toggleButton = () => {
    setIsOpen(!isOpen);
  };
  // useEffect(() => {
  //   async function checkLogin() {
  //     try {
  //       const res = await fetch("/api/me");
  //       const data = await res.json();
  //       setIsLoggedIn(data.isLoggedIn);
  //     } catch (error) {
  //       setIsLoggedIn(false);
  //     }
  //   }
  //   checkLogin();
  // }, []);
  const handleLogOut = async () => {
    await fetch("/api/logout", { method: "POST" });
    logout();
    toast.success("Logged Out successfully!");
    window.location.href = "/";
  };
  return (
    <>
      <nav className="bg-transparent flex flex-row justify-between items-center w-full py-4">
        <div className="container max-w-8xl mx-auto">
          <div className="flex flex-row items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold italic text-purple-600 [text-shadow:0_0_20px_rgba(236,72,153,1),0_0_40px_rgba(236,72,153,0.8),0_0_80px_rgba(236,72,153,0.6),0_0_120px_rgba(236,72,153,0.4)]"
            >
              B & S
            </Link>
            <div className="hidden md:flex gap-4">
              { 
                isLoggedIn ? (
                  <>
                    <Link href="/" className="border border-rounded rounded-full px-2 py-1 cursor-pointer bg-purple-600/50 border-purple-500 text-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,1),0_0_30px_rgba(236,72,153,0.8),0_0_60px_rgba(236,72,153,0.6)] 
             transition duration-300 ease-in-out">Home</Link>
                    <Link href="/home/add" className="border border-rounded rounded-full px-2 py-1 cursor-pointer bg-purple-600/50 border-purple-500 text-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,1),0_0_30px_rgba(236,72,153,0.8),0_0_60px_rgba(236,72,153,0.6)] 
             transition duration-300 ease-in-out">Sell Now</Link>
                    <Link href="/home" className="border border-rounded rounded-full px-2 py-1 cursor-pointer bg-purple-600/50 border-purple-500 text-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,1),0_0_30px_rgba(236,72,153,0.8),0_0_60px_rgba(236,72,153,0.6)] 
             transition duration-300 ease-in-out">Items</Link>
                  </>
                  ) : ""
              }
            </div>
            <div className="hidden md:flex flex-row gap-3 px-4">
              {
                !isLoggedIn ? (
                  <>
                    <Link
                      href="/login"
                      className="border border-purple-900 bg-indigo-100 rounded-full px-4 py-2 transition duration-300 ease-in-out hover:bg-purple-900 hover:text-white hover:shadow-[0_0_45px_rgba(139,92,246,0.7)]"
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="border border-purple-900 bg-indigo-100 rounded-full px-4 py-2 transition duration-300 ease-in-out hover:bg-purple-900 hover:text-white hover:shadow-[0_0_45px_rgba(139,92,246,0.7)]"
                    >
                      Signup
                    </Link>
                  </>
                ) : (
                  <button onClick={handleLogOut} className="border border-purple-900 bg-indigo-100 rounded-full px-4 py-2 hover:bg-purple-900 hover:text-white hover:border-white">Logout</button>
                )
              }
            </div>
            <div className="md:hidden px-4" onClick={toggleButton}>
              {isOpen ? (
                <XMarkIcon className="h-6 w-6 text-purple-500" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-purple-500" />
              )}
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center bg-white text-black ml-60 px-4 py-4 space-y-4">
            {!isLoggedIn ? (
              <>
              <Link
              href="/signin"
              className="border border-black rounded-full px-3 py-2"
             >
              Login
            </Link>
            <Link
              href="/signup"
              className="border border-black rounded-full px-3 py-2"
            >
              Signup
            </Link>
            </>): (
              <>
              <Link href="/" className="border border-rounded rounded-full px-2 py-1 cursor-pointer bg-purple-600/50 border-purple-500 text-pink-500">Home</Link>
              <Link href="/home/add" className="border border-rounded rounded-full px-2 py-1 cursor-pointer bg-purple-600/50 border-purple-500 text-pink-500">Sell Now</Link>
              <Link href="/home" className="border border-rounded rounded-full px-2 py-1 cursor-pointer bg-purple-600/50 border-purple-500 text-pink-500">Items</Link>
              <button onClick={handleLogOut} className="border border-black rounded-full px-3 py-2">Logout</button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
