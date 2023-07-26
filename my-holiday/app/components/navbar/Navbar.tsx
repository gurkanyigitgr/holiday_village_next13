"use client";

import Category from "./Category";
import Logo from "./Logo";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-16 bg-gray-100">
      <Logo />
      <Category />
      <UserMenu />
    </div>
  );
};

export default Navbar;
