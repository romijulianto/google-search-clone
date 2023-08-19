import { Input } from "@nextui-org/react";
import React from "react";
import { SearchImageIcon } from "../../common/icons/SearchImageIcon";
import { SearchIcon } from "../../common/icons/SearchIcon";

const ModalSearchInput = () => {
  return (
    <Input
      variant="faded"
      radius="full"
      className="w-[37rem] text-white"
      size="lg"
      startContent={
        <SearchIcon className="flex-shrink-0 text-2xl pointer-events-none text-default-400" />
      }
      endContent={
        <SearchImageIcon className="flex-shrink-0 text-2xl pointer-events-none text-default-400" />
      }
    ></Input>
  );
};

export default ModalSearchInput;
