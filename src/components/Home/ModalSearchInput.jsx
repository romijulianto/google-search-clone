import {
  Input,
  ModalBody,
  Modal,
  ModalContent,
  Button,
  useDisclosure,
  Divider,
} from "@nextui-org/react";
import React from "react";
import { SearchImageIcon } from "../../common/icons/SearchImageIcon";
import { SearchIcon } from "../../common/icons/SearchIcon";
import { UploadDragImageIcon } from "../../common/icons/UploadDragImage";

const ModalSearchInput = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Input
      variant="faded"
      radius="full"
      className="w-[35.5rem] text-white"
      size="lg"
      startContent={
        <SearchIcon className="flex-shrink-0 text-2xl pointer-events-none text-default-400" />
      }
      endContent={
        <div className="flex-shrink-0 text-2xl text-default-400 hover:cursor-pointer">
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
                    <div className="text-white text-md text-center justify-center items-center mt-3">
                      Search any images with Google Lens
                    </div>
                    <ModalBody className="p-4">
                      <div className="rounded-md bg-[#202124]">
                        <div className="mt-5">
                          <div className="flex justify-center items-center text-center gap-4">
                            <UploadDragImageIcon />
                            <div className="text-md text-center justify-center items-center mt-6 mb-6 text-gray-400">
                              Drag email here or{" "}
                              <a className="hover:cursor-pointer text-blue-500 underline">
                                upload a file
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="justify-center text-center text-gray-400 text-md mt-3">
                          OR
                        </div>
                        <div className="flex mb-5 mt-2 gap-2">
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
      }
    />
  );
};

export default ModalSearchInput;
