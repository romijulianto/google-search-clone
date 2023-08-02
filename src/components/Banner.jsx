import React from 'react'

const Banner = () => {
  return (
    <div className="bg-indigo-600">
            <div className="flex items-start justify-between w-full px-4 py-3 mx-auto text-white sm:items-center md:px-8">
                <div className="flex items-start justify-center flex-1 gap-x-4 sm:items-center">
                    <div className="flex-none p-1.5 px-4 rounded-full bg-indigo-800 flex items-center justify-center font-medium text-sm">
                        Google Search New UI
                    </div>
                    <p className="p-2 font-medium">
                        We just launched a new interface of our looks! <a href="javascript:(0)" className="inline-flex items-center font-semibold underline duration-150 hover:text-indigo-100 gap-x-1">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </p>
                </div>
                <button className="p-2 duration-150 rounded-lg hover:bg-indigo-500 ring-offset-2 focus:ring">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                </button>
            </div>
        </div>
  )
}

export default Banner