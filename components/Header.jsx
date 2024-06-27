"use client";
import Image from "next/image";
import logo from "@/public/images/logo-long.png";
import Link from "next/link";
import { Menu } from "@mui/icons-material";
import { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="border-b-2 border-black">
      <div className="flex justify-between py-3 w-[90%] mx-auto items-center">
        <h1 className="flex items-end">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo"
              placeholder="blur"
              className="h-[60px] w-[180px]"
            />
          </Link>
        </h1>
        <div className="sm:hidden">
          <Menu onClick={() => setMenu(!menu)} />
          <ul
            className="absolute bg-white p-4 w-[30%] min-w-[200px] shadow-lg z-10"
            style={{ right: menu ? "0" : "1200px", transition: "0.7s" }}
            onClick={() => setMenu(false)}
          >
            <li className="p-2">
              <Link href={"/blog"} className="hover:underline">
                Blog
              </Link>
            </li>
            <li className="p-2">
              <Link href={"/services"} className="hover:underline">
                Services
              </Link>
            </li>
            {/* <li className="p-2">
              <Link href={"/portfolio"} className="hover:underline">
                Portfolio
              </Link>
            </li> */}
            <li className="p-2">
              <Link href={"/contact"} className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <ul className="hidden sm:flex">
          <li className="p-2">
            <Link href={"/blog"} className="hover:underline">
              Blog
            </Link>
          </li>
          <li className="p-2">
            <Link href={"/services"} className="hover:underline">
              Services
            </Link>
          </li>
          {/* <li className="p-2">
            <Link href={"/portfolio"} className="hover:underline">
              Portfolio
            </Link>
          </li> */}
          <li className="p-2">
            <Link href={"/contact"} className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
