import React from 'react';

const Loading = () => {
  return (
    <>
      <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
        <span
          className="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0"
          style={{ top: '50%' }}
        >
          <svg
            className="h-20 w-20 mx-auto text-black animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </span>
      </div>
    </>
  );
};

export default Loading;
