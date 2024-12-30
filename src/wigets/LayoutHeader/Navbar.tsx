import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className=" containter-wrapper  bg-transparent">
      <nav className="navbar z-50  mt-4  flex items-center justify-between px-4">
        {/* Logo Section */}
        <Link href="#">
          <img src="/images/logo1.png" alt="Logo" className="h-8" />
        </Link>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <Link href="https://www.tiktok.com" target="_blank">
            <img src="/icons/tiktok.svg" alt="TikTok" className="h-6" />
          </Link>
          <Link href="https://www.instagram.com" target="_blank">
            <img src="/icons/instagram.svg" alt="Instagram" className="h-6" />
          </Link>
          <Link href="https://www.twitter.com" target="_blank">
            <img src="/icons/twitter.svg" alt="Twitter" className="h-6" />
          </Link>
          <Link href="https://www.snapchat.com" target="_blank">
            <img src="/icons/snapchat.svg" alt="Snapchat" className="h-6" />
          </Link>
        </div>

        {/* Login and Language Selector */}
        <div className="flex items-center space-x-4">
          <button className="bg-gold px-4 py-2 text-black font-medium rounded-md hover:bg-gold-dark transition">
            Log in
          </button>
          <div className="relative">
            <button className="flex items-center space-x-2 border border-gray-300 px-3 py-2 rounded-md">
              <img
                src="/icons/flag-uk.svg"
                alt="Language Flag"
                className="h-4"
              />
              <span>English</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Dropdown (optional) */}
            <div className="hidden absolute top-full mt-2 right-0 w-32 bg-white border border-gray-200 rounded-md shadow-lg">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  English
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Spanish
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  French
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
