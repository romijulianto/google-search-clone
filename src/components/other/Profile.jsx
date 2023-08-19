import React from "react";
import { CloseIcon } from "../../common/icons/CloseIcon";
import { Avatar, Button } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { ArrowIcon } from "../../common/icons/ArrowIcon";
import { AddIcon } from "../../common/icons/AddIcon";
import { SignOutIcon } from "../../common/icons/SignOutIcon";

const Profile = () => {
  const itemClasses = {
    base: "py-0 w-full",
    title: "text-white text-sm",
  };

  return (
    <div className="m-2 p-1 overflow-auto text-xs text-center text-white bg-[#282A2C] rounded-lg touch-auto">
      <div className="flex items-center text-center">
        <div className="mx-20 mt-2">romijuulianto@gmail.com</div>
        <div className="mr-2 mt-2 hover:cursor-pointer hover:bg-[#38393B] rounded-full">
          <CloseIcon />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Avatar src="/images/avatar.jpg" size="lg" />
      </div>
      <div className="mb-3 text-lg">Hi, Romi!</div>
      <Button
        radius="full"
        className="text-blue-200"
        variant="bordered"
        color="solid"
      >
        Manage your Google Account
      </Button>

      <div className="rounded-[1.5rem] bg-[#1B1B1B] mt-6 m-2">
        <Accordion
          className="flex flex-col gap-1 w-full max-w-[300px]"
          itemClasses={itemClasses}
          defaultExpandedKeys={["1"]}
        >
          <AccordionItem
            aria-label="Hide More Account"
            indicator={<ArrowIcon />}
            title="Hide more accounts"
            className="divide-y divide-gray-500"
            key={1}
          >
            <div className="flex gap-3 mt-4 hover:cursor-pointer hover:bg-[#38393B] p-2 rounded-md">
              <Avatar src="/images/avatar-2.png" />
              <div className="flex flex-col">
                <div className="text-md text-left">Romi Julianto</div>
                <div className="text-small text-default-500">
                  julians@gmail.com
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-4 hover:cursor-pointer hover:bg-[#38393B] p-2 rounded-md">
              <Avatar src="/images/avatar-3.png" />
              <div className="flex flex-col">
                <div className="text-md text-left">Romi Julianto</div>
                <div className="text-small text-default-500">
                  romijuli@gmail.com
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-4 hover:cursor-pointer hover:bg-[#38393B] p-2 rounded-md">
              <Avatar src="/images/avatar-4.png" />
              <div className="flex flex-col">
                <div className="text-md text-left">Romi Julianto</div>
                <div className="text-small text-default-500">
                  romijlys@gmail.com
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-4 hover:cursor-pointer hover:bg-[#38393B] p-2 rounded-md items-center">
              <div className="ml-1">
                <AddIcon />
              </div>
              <div className="text-md text-left items-center ml-1">
                Add another account
              </div>
            </div>
            <div className="flex gap-3 mt-4 hover:cursor-pointer hover:bg-[#38393B] p-2 rounded-md items-center mb-4">
              <div className="ml-2">
                <SignOutIcon />
              </div>
              <div className="text-md text-left items-center ml-1">
                Sign out all of accounts
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex justify-center gap-2 mb-2">
        <div className="hover:cursor-pointer hover:bg-[#38393B] p-1">
          Privacy Policy
        </div>
        <div>.</div>
        <div className="hover:cursor-pointer hover:bg-[#38393B] p-1">
          Terms and Services
        </div>
      </div>
    </div>
  );
};

export default Profile;
