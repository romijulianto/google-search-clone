import { Divider } from "@nextui-org/react";

const SearchedItemTemplate = ({ data }) => {
  function createMarkup(html) {
    return { __html: html };
  }

  return (
    <>
      <div className="flex flex-col py-3 max-w-[700px] text-white mt-2">
        <div
          className="cursor-pointer group"
          onClick={() => window.open(data.link, "_blank")}
        >
          <div className="text-sm text-white truncate">{data.formattedUrl}</div>
          <div className="pt-2 text-xl text-blue-700 group-hover:underline">
            {data.title}
          </div>
        </div>
        <div
          className="pt-1 text-sm leading-6 text-gray-400"
          dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)}
        />
      </div>
      <Divider />
    </>
  );
};

export default SearchedItemTemplate;
