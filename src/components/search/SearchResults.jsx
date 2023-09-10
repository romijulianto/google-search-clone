import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../services/api/google-api";
import { Context } from "../../services/api/ContextApi";
import SearchedImageItemTemplate from "./SearchedImageItemTemplate";
import SearchedItemTemplate from "./SearchedItemTemplate";
import Pagination from "../other/Pagination";

const SearchResults = () => {
  const [results, setResult] = useState();
  const { query, startIndex } = useParams();
  const { imageSearch } = useContext(Context);

  useEffect(() => {
    fetchSearchResults();
    window.scrollTo(0, 0);
  }, [query, startIndex, imageSearch]);

  const fetchSearchResults = () => {
    let payload = { q: query, start: startIndex };
    if (imageSearch) {
      payload.searchType = "image";
    }

    fetchDataFromApi(payload).then((res) => {
      console.log(res);
      setResult(res);
    });
  };

  if (!results) return;
  const { items, queries, searchInformation } = results;

  return (
    <div className="flex flex-col w-[90vw] h-full ml-[5rem] max-w-max">
      <main className="grow p-[12px] pb-0 md:pr-5 md:pl-20">
        <div className="flex text-sm text-[#9B9FA5] mb-3">{`About ${searchInformation.formattedTotalResults} results in (${searchInformation.formattedSearchTime})`}</div>
        {!imageSearch ? (
          <>
            {items.map((item, index) => (
              <SearchedItemTemplate key={index} data={item} />
            ))}
          </>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-6">
            {items.map((item, index) => (
              <SearchedImageItemTemplate key={index} data={item} />
            ))}
          </div>
        )}
        <Pagination queries={queries} />
      </main>
    </div>
  );
};

export default SearchResults;
