import { Headset } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#040829] hidden sm:block">
      <div className="max-w-[1320px] mx-auto flex items-center justify-between p-2.5">
        <p className="font-poppins text-sm font-medium leading-[25px] text-main">
          AntWalk C2K Summit 2025 - The Bengaluru Edition || February 20, 2025
          6:00 PM -{" "}
          <a href="#" className="text-primary hover:underline">
            Register Now
          </a>
        </p>
        <div className="flex items-center gap-1 font-poppins text-[15px] font-normal leading-[25px] text-main">
          <Headset className="h-4 w-4" />
          <span>Support</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;