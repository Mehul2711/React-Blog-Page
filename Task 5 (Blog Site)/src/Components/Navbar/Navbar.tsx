import NavbarItem from "./NavbarItem";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import NavbarIcon from "./NavbarIcon";

const Navbar = (): JSX.Element => {
  return (
    <div className="bg-[#012a4a] text-white w-full h-[70px] flex justify-center md:justify-between items-center">
      <div className="ml-5">Make-A-Blog</div>
      <ul className="flex">
        <NavbarItem name="Home" />
        <NavbarItem name="Articles" />
      </ul>
    </div>
  );
};

export default Navbar;
