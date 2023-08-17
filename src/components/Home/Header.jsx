import { Avatar } from "@nextui-org/react";

function Header() {
  return (
    <header className="flex justify-between w-full p-3 text-xs text-white">
      <div className="flex items-center gap-4">
        <div>About</div>
        <div>Store</div>
      </div>
      <div className="flex items-center gap-4">
        <div>Gmail</div>
        <div className="mr-6">Images</div>
        <div className="flex items-center gap-4 mr-2">
          <img src="/icons/g-burger-menu.svg" alt="menu"></img>
          <div className="ml-2">
            <Avatar src="/images/avatar.jpg" size="sm"></Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
