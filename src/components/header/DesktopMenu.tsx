import { headerMenu } from "@/utils/utils";
import MenuItem from "./MenuItem";
import { Button } from "../ui/button";

const DesktopMenu = () => {
  return (
    <nav className="hidden md:flex items-center gap-[14px] pl-[21px]">
      {headerMenu.map((item) => (
        <MenuItem key={item.label} item={item} />
      ))}
    </nav>
  );
};

export default DesktopMenu;
