import React from 'react'

const SearchInput = () => {
  return (
    <section className="py-14">
      <div className="w-full px-4 mx-auto md:text-center md:px-8">
        <div className="max-w-xl md:mx-auto">
          <div className="flex items-center gap-3 mt-4 md:justify-center">
            <img src="/src/assets/images/google-logo.png"></img> </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="max-w-md px-4 mx-auto mt-12">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search anything"
                className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
              />
            </div>
            
          </form>
        </div>
        <div className="flex items-center gap-3 mt-4 md:justify-center">
          <a href="javascript:void(0)" className="inline-block px-4 py-2 font-medium text-white duration-150 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 active:bg-gray-900 hover:shadow-none">
            Google Search
          </a>
          <a href="javascript:void(0)" className="inline-block px-4 py-2 font-medium text-gray-800 duration-150 border rounded-lg hover:bg-gray-50 active:bg-gray-100">
            I'am Feeling Lucky
          </a>
        </div>
      </div>
    </section>
  )
}

export default SearchInput