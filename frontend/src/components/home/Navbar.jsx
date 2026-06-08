import React from "react";

const Nav = () => {
  return (
    <nav className="bg-linear-to-br from-black via-slate-900 to-black text-white rounded px-10 py-3 shadow-sm flex items-center justify-between">
      {/* Logo */}
      <a
        href="https://www.linkedin.com/in/mithlesh-kumar-ray-001885233/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4.706" cy="16" r="4.706" fill="#D9D9D9" />
          <circle cx="16.001" cy="4.706" r="4.706" fill="#D9D9D9" />
          <circle cx="16.001" cy="27.294" r="4.706" fill="#D9D9D9" />
          <circle cx="27.294" cy="16" r="4.706" fill="#D9D9D9" />
        </svg>
      </a>

      {/* Menu */}
      <div className="hidden lg:flex items-center gap-8 bg-linear-to-br from-black via-slate-900 to-black text-white border px-8 py-4 rounded-lg">
        <button
          onClick={() => router.push("/")}
          className="text-xs font-semibold tracking-wider cursor-pointer hover:text-indigo-500 transition"
        >
          HOME
        </button>
        <button
          onClick={() => router.push("#")}
          className="text-xs font-semibold tracking-wider cursor-pointer hover:text-indigo-500 transition"
        >
          ABOUT
        </button>
        <button
          onClick={() => router.push("#")}
          className="text-xs font-semibold tracking-wider cursor-pointer hover:text-indigo-500 transition"
        >
          PROJECTS
        </button>
        <button
          onClick={() => router.push("#")}
          className="text-xs font-semibold tracking-wider cursor-pointer hover:text-indigo-500 transition"
        >
          SKILLS
        </button>
        <button
          onClick={() => router.push("#")}
          className="text-xs font-semibold tracking-wider cursor-pointer hover:text-indigo-500 transition"
        >
          CONTACT
        </button>
        <button
          onClick={() => router.push("#")}
          className="text-xs font-semibold tracking-wider cursor-pointer hover:text-indigo-500 transition"
        >
          RESUME
        </button>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        {/* FIX 2: onClick event listener add kiya gaya hai */}
        <button className="font-semibold text-sm text-white hover:text-gray-600 transition cursor-pointer">
          LOGIN
        </button>

        <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gray-800 transition cursor-pointer">
          SIGN UP
        </button>
      </div>
    </nav>
  );
};

export default Nav;
