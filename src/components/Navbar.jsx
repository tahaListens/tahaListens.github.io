import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full mb-8 p-4 shadow-md bg-surface-nav drop-shadow-md dark:bg-dark-surface-nav dark:text-white">
      <h1 className="text-xl font-bold text-center">tahaListens</h1>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;

