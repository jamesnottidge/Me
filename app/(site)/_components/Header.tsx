"use client";
import { use, useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CloseIcon } from "@sanity/icons";
import avatar from "@/public/assets/images/avatar.jpeg";
import { Page } from "@/types/Page";
import FAQ from "./FAQ";
import Footer from "./footer";

// Your component code

type Props = {
  showMobileMenu: boolean;
  setShowMobileMenu: (showMobileMenu: boolean) => void;
  pages: Page[];
};

function MobileMenu({ showMobileMenu, setShowMobileMenu, pages }: Props) {
  return (
    <AnimatePresence>
      {showMobileMenu && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0" }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className={`fixed inset-0 overflow-y-scroll bg-gray-800 z-[40] text-white md:hidden`}
        >
          <div className="min-h-[700px] mx-auto py-10 px-10">
            <header className="flex items-center justify-between">
              <Link
                href="/"
                className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600"
              >
                Nottidge
              </Link>

              <button
                className="md:hidden" // Hide on medium and larger screens
                onClick={() => {
                  setShowMobileMenu(false);
                  console.log(showMobileMenu);
                }}
              >
                <CloseIcon className="text-3xl font-extrabold" />
              </button>
            </header>
            <main className="flex flex-col items-center ">
              <div className="w-24 h-24 overflow-hidden rounded-full relative">
                <Image
                  src={avatar}
                  alt="avatar"
                  fill={true}
              
                  className="rounded-lg border border-blue-500"
                />
              </div>

              <div className="mt-4">
                Hey Im James Nottidge, and I do my best Hey Im James Nottidge,
                and I do my best. Hey Im James Nottidge, and I do my best. i Hey
                Im James Nottidge, and I do my best.
              </div>
              <hr className="my-6 w-full opacity-10" />
              <div className="flex flex-col text-left w-full text-xl">
                <Link
                  href={`/`}
                  onClick={() => setShowMobileMenu(false)}
                  className="hover:underline mt-8 hover:ml-4 transition"
                >
                  Home
                </Link>
                <Link
                  href={`/articles`}
                  onClick={() => setShowMobileMenu(false)}
                  className="hover:underline mt-8 hover:ml-4 transition"
                >
                  Articles
                </Link>
                <Link
                  href={`/projects`}
                  onClick={() => setShowMobileMenu(false)}
                  className="hover:underline mt-8 hover:ml-4 transition"
                >
                  Projects
                </Link>
                {pages.map((page) => (
                  <Link
                    href={`/${page.slug}`}
                    onClick={() => setShowMobileMenu(false)}
                    key={page._id}
                    className="hover:underline mt-8 hover:ml-4 transition"
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
              <hr className="my-6 w-full opacity-10" />
              <FAQ />
            </main>
            <Footer />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Header({ pages }: { pages: Page[] }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(() => {
    showMobileMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [showMobileMenu]);

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

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
        <Link href={`/projects`} className="hover:underline">
          Projects
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
      {/* {showMobileMenu && ( */}
      <MobileMenu
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        pages={pages}
      />
      {/* )} */}
    </header>
  );
}
