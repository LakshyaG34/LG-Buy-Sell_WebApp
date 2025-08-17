"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="bg-transparent text-black flex flex-row justify-between items-center w-full py-4">
        <div className="container max-w-8xl mx-auto">
          <div className="flex flex-row items-center justify-between">
            <Link href="/" className="text-2xl font-bold italic">
              B & B
            </Link>
            <div className="hidden md:flex flex-row gap-3 px-4">
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
            <Link href="/login" className="border border-black rounded-full px-3 py-2">Login</Link>
            <Link href="/signup" className="border border-black rounded-full px-3 py-2">Signup</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
