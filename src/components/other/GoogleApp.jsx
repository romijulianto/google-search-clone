import { Avatar } from "@nextui-org/react";
import React from "react";

const GoogleApp = () => {
  return (
    <div className="m-2 p-1 overflow-auto text-xs text-center text-white bg-[#1B1B1B] rounded-lg touch-auto">
      <div className="px-4 py-6 mx-4 my-6">
        <div className="flex gap-8 mb-6">
          <div>
            <Avatar src="/images/avatar.jpg" className="w-12 h-11"></Avatar>
            <div className="mt-2 text-center">Account</div>
          </div>
          <div>
            <img
              src="/logos/g-google-search.png"
              alt="Google Logo"
              width="45rem"
              height="45rem"
              className="items-center"
            ></img>
            <div className="mt-2 text-center">Search</div>
          </div>
          <div>
            <img
              src="/logos/g-calender.png"
              alt="Google Calender"
              width="45rem"
              height="45rem"
              className="items-center"
            ></img>
            <div className="mt-2 text-center">Calender</div>
          </div>
        </div>
        <div className="flex gap-8 mb-6">
          <div>
            <img
              src="/logos/g-gdrive.png"
              alt="Google Drive"
              width="45rem"
              height="45rem"
              className="items-center"
            ></img>
            <div className="mt-2 text-center">Drive</div>
          </div>
          <div>
            <img
              src="/logos/g-gmaps.png"
              alt="Google Maps"
              width="45rem"
              height="45rem"
              className="items-center"
            ></img>
            <div className="mt-2 text-center">Maps</div>
          </div>
          <div>
            <img
              src="/logos/g-mail.png"
              alt="Google Mail"
              width="45rem"
              height="45rem"
              className="items-center"
            ></img>
            <div className="mt-2 text-center">Mail</div>
          </div>
        </div>
        <div className="flex gap-8 mb-6">
          <div>
            <img
              src="/logos/g-youtube.png"
              alt="Youtube"
              width="45rem"
              height="45rem"
              className="items-center"
            ></img>
            <div className="mt-2 text-center">Youtube</div>
          </div>
          <div>
            <img
              src="/logos/g-chat.png"
              alt="Google Chat"
              width="45rem"
              height="45rem"
              className="items-center"
            ></img>
            <div className="mt-2 text-center">Chat</div>
          </div>
          <div>
            <img
              src="/logos/g-contact.png"
              alt="Google Contact"
              width="45rem"
              height="45rem"
              className="items-center"
            ></img>
            <div className="mt-2 text-center">Contact</div>
          </div>
        </div>
        <div className="flex gap-8">
          <div>
            <img
              src="/logos/g-sheets.png"
              alt="Google Sheets"
              width="45rem"
              height="45rem"
              className="items-center"
            ></img>
            <div className="mt-2 text-center">Sheet</div>
          </div>
          <div>
            <img
              src="/logos/g-classroom.png"
              alt="Google Classroom"
              width="45rem"
              height="45rem"
              className="items-center"
            ></img>
            <div className="mt-2 text-center">Classroom</div>
          </div>
          <div>
            <img
              src="/logos/g-slide.png"
              alt="Google Slide"
              width="45rem"
              height="45rem"
              className="items-center"
            ></img>
            <div className="mt-2 text-center">Slide</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleApp;
