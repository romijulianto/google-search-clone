import {
  Avatar,
  Dropdown,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import GoogleApp from "../other/GoogleApp";
import Profile from "../other/Profile";

function Header() {
  return (
    <header className="flex justify-between w-full p-3 text-xs text-white">
      <div className="flex items-center gap-4">
        <a className="hover:cursor-pointer hover:underline" href="/about">
          About
        </a>
        <a className="hover:cursor-pointer hover:underline" href="/store">
          Store
        </a>
      </div>
      <div className="flex items-center gap-4">
        <a className="hover:cursor-pointer hover:underline" href="/gmail">
          Gmail
        </a>
        <a className="mr-6 hover:cursor-pointer hover:underline" href="/images">
          Images
        </a>
        <div className="flex items-center gap-4 mr-2">
          <div className="items-center">
            <Popover placement="bottom" color="primary">
              <PopoverTrigger>
                <img src="/icons/g-burger-menu.svg" alt="menu"></img>
              </PopoverTrigger>
              <PopoverContent className="p-0">
                <GoogleApp />
              </PopoverContent>
            </Popover>
          </div>
          <div className="ml-2">
            <Popover placement="bottom" color="primary">
              <PopoverTrigger>
                <Avatar src="/images/avatar.jpg" size="sm"></Avatar>
              </PopoverTrigger>
              <PopoverContent className="p-0">
                <Profile />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
