import React from 'react';
import { Link } from 'react-router-dom';

const Summary = () => {
  return (
    <>
      <div id="summary" className="w-1/4 px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Items 3</span>
          <span className="font-semibold text-sm">590$</span>
        </div>

        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>$600</span>
          </div>
          <Link
            to="/"
            className="block text-center bg-blue-900 font-semibold hover:bg-blue-500 py-3 text-sm text-white uppercase w-full"
          >
            Go back to shopping
          </Link>
        </div>
      </div>
    </>
  );
};

export default Summary;
