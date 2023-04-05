import { useRouter } from "next/router";
import React from "react";
import ToggleTheme from "./ToggleTheme";

const Nav = () => {
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-[12] bg-white/80 py-1 backdrop-blur-md dark:bg-gray-900/70 w-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a onClick={() => router.push("/")} className="flex-shrink-0 ">
          RMCT2
        </a>
        <div className="flex items-center justify-start space-x-10">
          {" "}
          <a onClick={() => router.push("/")}>-</a>
          <a onClick={() => router.push("/")}>-</a>
          <a onClick={() => router.push("/")}>-</a>
          <ToggleTheme />
          {/* TODO Admin Icon Dropdown */}
          {/* -- dropdown contains -- */}
          {/* Account Settings */}
          {/* Logout */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
