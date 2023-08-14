"use client";

import { User } from "@prisma/client";
import Categories from "./Categories";
import Logo from "./Logo";
import UserMenu from "./UserMenu";

const Navbar = ({ user }: { user: User | any | undefined }) => {
  return (
    <div className="flex items-center text-white justify-between h-16 bg-primarySecColor px-7 ">
      <Logo />
      <Categories />
      <UserMenu user={user} />
    </div>
  );
};

export default Navbar;
