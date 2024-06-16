"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import Image from "next/image";

const Navbarr = () => {
  const router = useRouter();

  const handleGetConsultationClick = (e) => {
    e.preventDefault();
    if (router.pathname === "/") {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/#contact-section");
    }
  };

  return (
    <div>
      <div className="navbar bg-black z-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="hover:bg-orange-700 rounded-md">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:bg-orange-700 rounded-md">
                <Link href="/about">About Us</Link>
              </li>
              <li className="hover:bg-orange-700 rounded-md group">
                <Link href="/service">What We Do</Link>
                
              </li>
              <li className="hover:bg-orange-700 rounded-md">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="hover:bg-orange-700 rounded-md">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">
            <Image src="/logo.png" width={150} height={110} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            <li className="hover:bg-orange-700 rounded-md">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:bg-orange-700 rounded-md">
              <Link href="/about">About Us</Link>
            </li>
            <li className="hover:bg-orange-700 rounded-md group relative">
              <Link href="/service">What We Do</Link>
              
            </li>
            <li className="hover:bg-orange-700 rounded-md">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:bg-orange-700 rounded-md">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            href="#"
            className="text-orange-600 btn border border-orange-600"
            onClick={handleGetConsultationClick}
          >
            Get Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbarr;
