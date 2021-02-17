import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

/* Components */
import CartItem from './CartItem'; // I like absolute path.

const ListCart = () => {
  const carts = useSelector((state) => state.cart.carts);


  return (
    <>
      <div className="w-3/4 bg-white py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          <h2 className="font-semibold text-2xl">{carts ? carts.length : 0} Items</h2>
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


        {carts && carts
          .map((cart) => (
            <CartItem key={cart.rid} cart={cart} />
          ))}

        <Link
          to="/"
          className="flex items-center font-semibold text-sm mt-10 text-purple-800 hover:text-red-500"
        >
          <svg
            className="w-6 h-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          Continue Shopping
        </Link>
        <p className="text-red-500 font-base bg-gray-200 px-5 py-2 rounded mt-5">I don`t take action to `Modal` confirm when delete. because See Lazada, Shopee</p>
      </div>
    </>
  );
};

export default ListCart;
