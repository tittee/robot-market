import React from 'react';

const SearchBar = ({ searchRobot, onClearSearch, onSearchInputChange }) => {
  return (
    <>
      <div className="flex flex-nowrap flex-row">
        {searchRobot && (
          <button onClick={onClearSearch}>
            <svg
              className="h-11 w-10 text-centet text-white rounded-l bg-red-400 border-b-2 border-gray-200 active:border-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}

        <input
          type="text"
          placeholder="Search robots..."
          className="mt-0 block w-full px-2 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
          value={searchRobot}
          onChange={onSearchInputChange}
        />
      </div>
    </>
  );
};

export default SearchBar;
