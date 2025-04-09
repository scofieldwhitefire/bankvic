import Logo from "../atoms/Logo";
import NavItem from "../atoms/NavItem";
import Button from "../atoms/Button";
import { IconLogin2, IconMenu2, IconSearch } from "@tabler/icons-react";

const Navbar = () => {
  return (
    <>
      <nav className="hidden lg:inline nav">
        <div className="outer-container items-center">
          <Logo />

          <div className="nav__primary">
            <NavItem text="BANKING" hasDropdown={true} />
            <NavItem text="SAVINGS" hasDropdown={true} />
            <NavItem text="HOME LOANS" hasDropdown={true} />
            <NavItem text="INSURANCE" hasDropdown={true} />
            <NavItem text="POLICE OFFERS" hasDropdown={true} />
            <NavItem text="OUR STORY" hasDropdown={true} />
          </div>

          <div className="nav__secondary flex items-center gap-2">
            <NavItem text="LEARN" hasDropdown={true} />
            <NavItem text="GET HELP" hasDropdown={true} />
            <button className="text-gray-600 hover:text-[#1a3b8e]">
              <IconSearch />
            </button>
            <a href="https://bankvic.cc/dashboard/login">
              <Button
                variant="primary"
                className="flex items-center !bg-[#ff7a59] gap-x-1"
              >
                LOGIN
                <IconLogin2 />
              </Button>
            </a>
          </div>
        </div>
      </nav>
      <nav className="inline lg:hidden">
        <div className="w-full bg-white">
          <div className="py-5 px-4 flex items-center justify-between">
            <IconMenu2 />
            <Logo />
            <div className="flex items-center">
              <a href="https://bankvic.cc/dashboard/login">
                <Button
                  variant="primary"
                  className="flex items-center !bg-[#ff7a59] gap-x-1"
                >
                  LOGIN
                  <IconLogin2 />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
