import { Divider } from "@nextui-org/react";
import React from "react";

function Footer() {
  return (
    <footer className="w-full p-3 text-xs text-gray-400 bg-[#171717] divide-y divide-gray-500">
      <div className="items-center mb-4">Indonesia</div>
      <div className="items-center mb-4">
        <div className="flex justify-between gap-4 mt-4">
          <div className="flex gap-4">
            <div>About</div>
            <div>Advertising</div>
            <div>Business</div>
            <div>How Search Works</div>
          </div>
          <div className="flex gap-4">
            <div>Privacy</div>
            <div>Terms</div>
            <div>Settings</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
