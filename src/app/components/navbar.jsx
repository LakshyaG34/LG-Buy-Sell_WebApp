"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {useAuth} from "@/context/authContext";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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
    window.location.href = "/";
  };
  return (
    <>
      <nav className="bg-transparent text-black flex flex-row justify-between items-center w-full py-4">
        <div className="container max-w-8xl mx-auto">
          <div className="flex flex-row items-center justify-between">
            <Link href="/" className="text-2xl font-bold italic">
              B & S
            </Link>
            <div className="hidden md:flex flex-row gap-3 px-4">
              {
                !isLoggedIn ? (
                  <>
                    <Link
                      href="/signin"
                      className="border border-purple-900 bg-indigo-100 rounded-full px-4 py-2 hover:bg-purple-900 hover:text-white hover:border-white"
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="border border-purple-900 bg-indigo-100 rounded-full px-4 py-2 hover:bg-purple-900 hover:text-white hover:border-white"
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
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center bg-white text-black ml-60 px-4 py-4 space-y-4">
            <Link
              href="/login"
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
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
