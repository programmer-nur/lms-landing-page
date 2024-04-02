"use client";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { IMenuItem } from "@/types/common";
import { HiShoppingCart } from "react-icons/hi";
import { menuItems } from "@/constants/menubarItems";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="sticky h-16 bg-mainBg inset-0 z-40 w-full p-0 lg:border-b transition ease-in"
      id="nav"
    >
      {/* desktop menu */}
      <div className="flex h-16 justify-between items-center mx-auto max-w-7xl  bg-opacity-30  sm:px-6 lg:px-8">
        <Link href="/" className="text-3xl text-softBlack font-extrabold ">
          Logo
        </Link>

        <ul className="lg:flex hidden duration-300 ease-in-out lg:space-x-4">
          {menuItems.map((item: IMenuItem) => (
            <li key={item.href}>
              <Link
                className="hover:text-main font-normal text-softBlack"
                href={item.href}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:flex gap-3 hidden justify-center items-center">
          <HiShoppingCart size={24} />
          <Link
            href="/login"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-main px-7 py-2 text-base font-medium text-white shadow-sm hover:bg-main duration-300 "
          >
            Log In
          </Link>
        </div>
        <div className="text-3xl flex gap-3 justify-center items-center md:hidden">
          <HiShoppingCart size={24} />
          <MenuIcon onClick={() => setOpen(!open)} />
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`md:hidden overflow-hidden bg-white  fixed w-full p-20 py-8 bottom-0 duration-500 ${
          open ? "left-0 top-14" : "left-[-100%] top-16"
        }`}
      >
        <div className="flex justify-center items-center flex-col">
          {menuItems.map((item: IMenuItem) => (
            <Link
              key={item.title}
              className="block text-center text-lg font-medium pb-2"
              href={item.href}
            >
              {item.title}
            </Link>
          ))}
          <Link
            href={"#"}
            className="flex w-40 items-center justify-center  rounded-md  bg-main px-7 py-2 text-base font-medium text-white shadow-sm hover:bg-main duration-300 "
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
