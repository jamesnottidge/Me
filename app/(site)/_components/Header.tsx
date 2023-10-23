"use client";
import { use, useState, useEffect } from "react";
import Link from "next/link";

// Your component code

function MobileMenu({ showMobileMenu, pages }) {
  //   showMobileMenu = true;

  useEffect(() => {
    showMobileMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [showMobileMenu]);
  return (
    <div
      className={`fixed inset-0 overflow-y-scroll bg-gray-800 z-[9999] text-white transition-transform duration-300 ${
        showMobileMenu ? "transform translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="min-h-[700px] bg-red-700">
        <Link href={`/articles`} className="hover:underline">
          Articles
        </Link>
        {pages.map((page) => (
          <Link
            href={`/${page.slug}`}
            key={page._id}
            className="hover:underline"
          >
            {page.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Header({ pages }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="flex items-center justify-between">
      <Link
        href="/"
        className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600"
      >
        Nottidge
      </Link>

      {/* Mobile menu button */}
      <button
        className="md:hidden" // Hide on medium and larger screens
        onClick={() => {
          setShowMobileMenu(!showMobileMenu);
        }}
      >
        <svg
          className="w-6 h-6 text-gray-600 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <div className="hidden md:flex items-center gap-4 text-sm text-gray-600">
        <Link href={`/articles`} className="hover:underline">
          Articles
        </Link>
        {pages.map((page) => (
          <Link
            href={`/${page.slug}`}
            key={page._id}
            className="hover:underline"
          >
            {page.title}
          </Link>
        ))}
      </div>

      {/* Navigation links */}
      <MobileMenu showMobileMenu={showMobileMenu} pages={pages} />
    </header>
  );
}
