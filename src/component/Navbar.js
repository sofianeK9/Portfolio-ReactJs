import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow-lg flex py-4 justify-between items-center px-20">
        <p className="text-xl font-bold">Dev SK</p>
        <ul className="flex space-x-8">
          <li className="hover:text-red-500 cursor-pointer ">Home</li>
          <li className="hover:text-red-500 cursor-pointer ">About me</li>
          <li className="hover:text-red-500 cursor-pointer ">My Projects</li>
          <li className="hover:text-red-500 cursor-pointer">Contact Me</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
