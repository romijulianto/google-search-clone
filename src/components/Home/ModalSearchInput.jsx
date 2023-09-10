import React from "react";
import {
  Input,
  ModalBody,
  Modal,
  ModalContent,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { SearchImageIcon } from "../../common/icons/SearchImageIcon";
import { SearchIcon } from "../../common/icons/SearchIcon";
import { UploadDragImageIcon } from "../../common/icons/UploadDragImage";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { CloseIcon } from "../../common/icons/CloseIcon";

const ModalSearchInput = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (event?.key === "Enter" && searchQuery?.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };

  return (
    <Input
      variant="faded"
      radius="full"
      className="w-[35.5rem] text-white"
      size="lg"
      onChange={(e) => setSearchQuery(e.target.value)}
      onKeyUp={searchQueryHandler}
      value={searchQuery}
      startContent={
        <SearchIcon className="flex-shrink-0 text-2xl pointer-events-none text-default-400" />
      }
      endContent={
        <div className="flex items-center justify-center gap-3 text-2xl text-default-400 hover:cursor-pointer">
          <div id="close">
            {searchQuery && (
              <CloseIcon
                size={150}
                className="cursor-pointer"
                onClick={() => setSearchQuery("")}
              />
            )}
          </div>
          <div id="search-image">
            <Button
              isIconOnly
              onPress={onOpen}
              className="p-0 m-0"
              color="primary"
              variant="light"
            >
              <SearchImageIcon />
            </Button>
            <Modal
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              backdrop="transparent"
              size="xl"
              classNames={{
                body: "py-6",
                backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
                base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
                closeButton: "hover:bg-white/5 active:bg-white/10",
              }}
            >
              <ModalContent>
                {() => (
                  <>
                    <div className="bg-[#303134]">
                      <div className="items-center justify-center mt-3 text-center text-white text-md">
                        Search any images with Google Lens
                      </div>
                      <ModalBody className="p-4">
                        <div className="rounded-md bg-[#202124]">
                          <div className="mt-5">
                            <div className="flex items-center justify-center gap-4 text-center">
                              <UploadDragImageIcon />
                              <div className="items-center justify-center mt-6 mb-6 text-center text-gray-400 text-md">
                                Drag email here or{" "}
                                <a className="text-blue-500 underline hover:cursor-pointer">
                                  upload a file
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="justify-center mt-3 text-center text-gray-400 text-md">
                            OR
                          </div>
                          <div className="flex gap-2 mt-2 mb-5">
                            <div className="ml-4">
                              <Input
                                variant="bordered"
                                radius="full"
                                className="w-[26.5rem] bg-[#303134] rounded-full"
                                size="md"
                                placeholder="Paste image link"
                              />
                            </div>
                            <div className="p-0">
                              <Button
                                radius="full"
                                variant="bordered"
                                className="text-blue-400"
                              >
                                Search{" "}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </ModalBody>
                    </div>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </div>
      }
    />
  );
};

export default ModalSearchInput;
