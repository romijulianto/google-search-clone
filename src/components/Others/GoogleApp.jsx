import { Avatar } from "@nextui-org/react";
import React from "react";

const GoogleApp = () => {
  return (
    <div className="overflow-auto text-xs text-center text-white rounded-md touch-auto">
      <div className="px-4 py-6 mx-4 my-6">
        <div className="flex gap-8 mb-6">
          <div>
            <Avatar src="/images/avatar.jpg" className="w-12 h-11"></Avatar>
            <div className="mt-2">Account</div>
          </div>
          <div>
            <img
              src="/logos/g-google-search.png"
              alt="Google Logo"
              width="45rem"
              height="45rem"
            ></img>
            <div className="mt-2">Search</div>
          </div>
          <div>
            <img
              src="/logos/g-calender.png"
              alt="Google Calender"
              width="45rem"
              height="45rem"
            ></img>
            <div className="mt-2">Calender</div>
          </div>
        </div>
        <div className="flex gap-8 mb-6">
          <div>
            <img
              src="/logos/g-gdrive.png"
              alt="Google Drive"
              width="45rem"
              height="45rem"
            ></img>
            <div className="mt-2">Drive</div>
          </div>
          <div>
            <img
              src="/logos/g-gmaps.png"
              alt="Google Maps"
              width="45rem"
              height="45rem"
            ></img>
            <div className="mt-2">Maps</div>
          </div>
          <div>
            <img
              src="/logos/g-mail.png"
              alt="Google Mail"
              width="45rem"
              height="45rem"
            ></img>
            <div className="mt-2">Mail</div>
          </div>
        </div>
        <div className="flex gap-8 mb-6">
          <div>
            <img
              src="/logos/g-youtube.png"
              alt="Youtube"
              width="45rem"
              height="45rem"
            ></img>
            <div className="mt-2">Youtube</div>
          </div>
          <div>
            <img
              src="/logos/g-chat.png"
              alt="Google Chat"
              width="45rem"
              height="45rem"
            ></img>
            <div className="mt-2">Chat</div>
          </div>
          <div>
            <img
              src="/logos/g-contact.png"
              alt="Google Contact"
              width="45rem"
              height="45rem"
            ></img>
            <div className="mt-2">Contact</div>
          </div>
        </div>
        <div className="flex gap-8">
          <div>
            <img
              src="/logos/g-sheets.png"
              alt="Google Sheets"
              width="45rem"
              height="45rem"
            ></img>
            <div className="mt-2">Sheet</div>
          </div>
          <div>
            <img
              src="/logos/g-classroom.png"
              alt="Google Classroom"
              width="45rem"
              height="45rem"
            ></img>
            <div className="mt-2">Classroom</div>
          </div>
          <div>
            <img
              src="/logos/g-slide.png"
              alt="Google Slide"
              width="45rem"
              height="45rem"
            ></img>
            <div className="mt-2">Slide</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleApp;
