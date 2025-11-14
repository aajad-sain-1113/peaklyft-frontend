"use client";

import Image from "next/image";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { Menu } from "lucide-react";
import Navbar from "./Navbar";
import { Button } from "../ui/button";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar />
      <header className="w-full">
        <div className="max-w-[1320px] mx-auto flex items-center justify-between py-2">
          <div className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="Logo" width={190} height={62} />
            <Button variant={"main"} className="gap-2.5 h-[39.5px] w-[109px]">
              Explore{" "}
              <svg
                aria-hidden="true"
                fill="#fff"
                className="text-main h-[15px]! w-[15px]!"
                viewBox="0 0 448 512"
                height={14}
                width={14}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
              </svg>
            </Button>
          </div>
          <DesktopMenu />
          <Button
            className="hidden md:block bg-[#FF802C00] font-[Poppins] text-[14px] font-medium fill-[#4E5FF5] text-[#4E5FF5] border border-[#4E5FF5] rounded-[4px] pt-[9px] pb-[29px] px-5"
          >
            Schedule a Demo
          </Button>

          <button onClick={() => setOpen(!open)} className="md:hidden">
            <Menu size={28} />
          </button>
        </div>

        <MobileMenu open={open} />
      </header>
    </>
  );
};

export default Header;
