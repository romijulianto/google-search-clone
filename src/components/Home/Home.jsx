import { Button, Input } from "@nextui-org/react";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import { SearchIcon } from "../../common/icons/SearchIcon";
import { SearchImageIcon } from "../../common/icons/SearchImageIcon";

const Home = () => {
  return (
    <div className="flex h-[100vh] flex-col" color="background">
      <Header />
      <Banner />
      <div className="flex items-center justify-center h-[65vh]">
        <div id="search-input">
          <div className="flex items-center justify-center mb-6">
            <img
              className="text-center"
              src="/public/images/google-logo.png"
              alt="Google"
            />
          </div>
          <div className="flex flex-wrap w-full gap-4 mb-8 md:flex-nowrap">
            <Input
              variant="faded"
              radius="full"
              className="w-[37rem]"
              size="lg"
              startContent={
                <SearchIcon className="flex-shrink-0 text-2xl pointer-events-none text-default-400" />
              }
              endContent={
                <SearchImageIcon className="flex-shrink-0 text-2xl pointer-events-none text-default-400" />
              }
            ></Input>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex gap-4">
              <Button type="foreground" size="sm" radius="none">
                Google Search
              </Button>
              <Button type="foreground" size="sm" radius="none">
                I'm Feeling Lucky
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="text-xs text-white">Google offered in:</div>
            <a
              className="text-xs text-sky-600 hover:cursor-pointer hover:underline"
              href="/ind"
            >
              Indonesia
            </a>
            <a
              className="text-xs text-sky-600 hover:cursor-pointer hover:underline"
              href="/jawa"
            >
              Bahasa Jawa
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Home;
