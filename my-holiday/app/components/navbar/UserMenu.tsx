"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import { useState } from "react";
import UserMenuItem from "./UserMenuItem";
import { useAppDispatch } from "@/app/redux/hooks";
import {
  elementModalFunc,
  loginModalFunc,
  registerModalFunc,
} from "@/app/redux/modalSlice";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
const UserMenu = ({ user }: { user: User | any | undefined }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useAppDispatch();

  // console.log(user, "user");
  // console.log(user.image);
  return (
    <div
      onClick={() => setOpenMenu(!openMenu)}
      className="relative flex items-center space-x-5 cursor-pointer"
    >
      <GiHamburgerMenu size={25} />
      <Image
        className="rounded-full"
        src={
          user?.image ||
          "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        }
        alt="image"
        width={40}
        height={40}
      />

      {openMenu && (
        <div className="absolute bg-white shadow-lg shadow-primaryColor w-[150px] top-16 right-0 rounded-md">
          {user ? (
            <>
              <UserMenuItem
                name="Create Listing"
                onClick={() => {
                  dispatch(elementModalFunc());
                }}
              />
              <UserMenuItem name="Favorited" onClick={() => {}} />
              <UserMenuItem
                name="Sign Out"
                onClick={() => {
                  signOut();
                }}
              />
            </>
          ) : (
            <>
              <UserMenuItem
                name="Sign In"
                onClick={() => {
                  dispatch(loginModalFunc());
                }}
              />
              <UserMenuItem
                name="Sign Up"
                onClick={() => {
                  dispatch(registerModalFunc());
                }}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserMenu;
