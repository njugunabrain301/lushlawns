import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import Image from "next/image";
import logo from "@/public/images/logo-long.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-[90%] mx-auto mt-20">
      <div className="flex justify-between items-center">
        <div className="w-[49%]">
          <p className="mb-6">
            <Image
              src={logo}
              alt="logo"
              placeholder="blur"
              className="h-[60px] w-[180px]"
            />
          </p>
          <div className="mb-4">
            <p>Address</p>
            <p>P.0.Box 2396, Nakuru 20100</p>
          </div>
          <div className="mb-5">
            <p>Contact</p>
            <p>0717-563-148 / 0113-862-493</p>
          </div>
          <div className="flex">
            <Facebook className="mr-2" /> <Instagram className="mr-2" />{" "}
            <Twitter className="mr-2" /> <LinkedIn className="mr-2" />{" "}
            <YouTube className="mr-2" />
          </div>
        </div>
        <div className="w-[49%]">
          <Link href={"/"}>
            <p className="hover:underline">Home</p>
          </Link>
          {/* <Link href={"https://bunikasol.netlify.app/"}>
            <p className="hover:underline">3d fun</p>
          </Link> */}
          <Link href={"/services"}>
            <p className="hover:underline">Services</p>
          </Link>
          {/* <Link href={"/portfolio"}>
            <p className="hover:underline">Portfolio</p>
          </Link> */}
          <Link href={"/contact"}>
            <p className="hover:underline">Contact Us</p>
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-between py-6 border-t border-black text-xs mt-20">
        <p>&copy; 2024 Lush Lawns Kenya. All rights reserved</p>
        <p>Privacy Policy Terms of Service Cookie Settings</p>
      </div>
    </div>
  );
}
