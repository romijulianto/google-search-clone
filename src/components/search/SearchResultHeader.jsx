import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalSearchInput from "../home/ModalSearchInput";
import { menu } from "../../constants/MenuConstant";
import {
  Avatar,
  Button,
  Divider,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ScrollShadow,
} from "@nextui-org/react";
import { Context } from "../../services/api/ContextApi";
import GoogleApp from "../other/GoogleApp";
import Profile from "../other/Profile";
import { CloseIcon } from "../../common/icons/CloseIcon";

const SearchResultHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedMenu, setSelectedMenu] = useState("All");
  const { setImageSearch } = useContext(Context);

  useEffect(() => {
    return () => setImageSearch(false);
  }, []);

  const clickHandler = (menuItem) => {
    let isTypeImage = menuItem.name === "Images";
    setImageSearch(isTypeImage ? true : false);
    setSelectedMenu(menuItem.name);
  };
  return (
    <div className="pb-0 md:pl-5 md:pt-7 flex md:block flex-col items-center sticky top-0 bg-[#202124] z-999">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-10 grow">
          <Link to="/">
            <img
              src="/images/google-logo.png"
              alt="Google"
              width="100rem"
              className="items-center"
            />
          </Link>
          <ModalSearchInput from="searchResults" />
        </div>
        <div className="flex gap-1 mr-6">
          <div className="right-0 flex">
            <div className="rounded-full hover:bg-black hover:cursor-pointer">
              <Popover
                placement="top-start"
                color="primary"
                offset={10}
                backdrop="opaque"
                isOpen={isOpen}
                onOpenChange={(open) => setIsOpen(open)}
              >
                <PopoverTrigger>
                  <Button
                    isIconOnly
                    className="p-0 m-0"
                    color="primary"
                    variant="light"
                  >
                    <img src="/icons/g-setting.svg" alt="menu"></img>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <div className="m-2 p-1 overflow-auto text-xs text-center text-white bg-[#282A2C] rounded-lg touch-auto">
                    <div className="flex items-center text-center">
                      <div className="mx-20 mt-2 text-xl">Quicks Settings</div>
                      <div className="mr-2 mt-2 hover:cursor-pointer hover:bg-[#38393B] rounded-full p-3">
                        <CloseIcon
                          className="w-3 cursor-pointer"
                          onClick={() => setIsOpen("")}
                        />
                      </div>
                    </div>
                    <div className="mt-2">
                      <Button className="mt-2">See all Search Settings</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="right-0 flex">
            <Popover placement="bottom" color="primary">
              <PopoverTrigger>
                <div className="p-2 rounded-full hover:bg-black hover:cursor-pointer">
                  <img src="/icons/g-burger-menu-search.svg" alt="menu"></img>
                </div>
              </PopoverTrigger>
              <PopoverContent className="p-0">
                <GoogleApp />
              </PopoverContent>
            </Popover>
          </div>
          <div className="right-0 flex items-center ml-2">
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

      <ScrollShadow
        orientation="horizontal"
        className="ml-[9rem] max-w-[70rem] max-h-[300px]"
        hideScrollBar
      >
        <div className="flex gap-2 mt-3">
          {menu.map((menu, index) => (
            <Button
              radius="full"
              variant="bordered"
              key={index}
              className={`flex items-center p-3 cursor-pointer relative text-white hover:bg-[#303133] ${
                selectedMenu === menu.name ? "text-[#D5E2FA] bg-[#3B4355]" : ""
              }`}
              onClick={() => clickHandler(menu)}
            >
              <span className="text-sm">{menu.name}</span>
              {selectedMenu === menu.name && (
                <span className="w-[calc(100%-20px)] absolute bg-slate-400 bottom-0 left-[-10px]" />
              )}
            </Button>
          ))}
        </div>
      </ScrollShadow>

      <Divider className="mt-4"></Divider>
    </div>
  );
};

export default SearchResultHeader;
