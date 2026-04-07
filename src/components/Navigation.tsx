import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";
import { navItems } from "../data/navigation";
import NavItem from "./ui/NavItem";

export default function Navigation() {
  const location = useLocation();

  return (
    <div className="flex pt-500">
      <div className="flex w-full -mr-300 pl-800 gap-800 items-center z-10">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="w-full h-px bg-white opacity-25"></div>
      </div>
      <div className="flex w-full justify-end bg-white/5 backdrop-blur-[80px] gap-600 px-800">
        {navItems.map((item, index) => (
          <NavItem
            key={item.label}
            label={item.label}
            path={item.path}
            index={index}
            isActive={location.pathname === item.path}
          />
        ))}
      </div>
    </div>
  );
}
