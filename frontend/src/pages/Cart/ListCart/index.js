import React from 'react';
import { Link } from 'react-router-dom';

/* Components */
import CartItem from './CartItem'; // I like absolute path.

const ListCart = () => {
  return (
    <>
      <div className="w-3/4 bg-white px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          <h2 className="font-semibold text-2xl">3 Items</h2>
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
            Quantity
          </h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
            Price
          </h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
            Total
          </h3>
        </div>

        <CartItem />

        <Link to="/" className="flex font-semibold text-indigo-600 text-sm mt-10" href="#">
          Continue Shopping
        </Link>
      </div>
    </>
  );
};

export default ListCart;
