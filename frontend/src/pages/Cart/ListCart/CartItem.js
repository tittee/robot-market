import React, { useState } from 'react';
import { formatThb, cartQtyTotal } from 'utils/GlobalFunction';

/* Component Based */
import ImageRobot from 'components/ImageRobot';

const CartItem = ({ cart }) => {
  const [quantity, setQuantity] = useState(cart.stock); // Hold Props

  const onQtyChange = (e) => {
    if (e && e.target.value >= 0) {
      setQuantity(parseInt(e.target.value));
    } else {
      /* Remove */
    }
  };

  return (
    <>
      <div className="flex items-center hover:bg-gray-100 px-0 py-5">
        <div className="flex w-2/5">
          <div className="w-20">
            <ImageRobot item={cart} loading={false} heigth={'120px'} />
          </div>
          <div className="flex flex-col justify-between ml-4 flex-grow">
            <span className="font-bold text-sm">{cart.name}</span>
            <span className="text-red-500 text-xs">Meterial : {cart.material}</span>
            <button
              className="w-20 py-2 font-semibold hover:bg-red-500 text-white text-xs text-center rounded bg-indigo-500"
              onClick={() => {
                console.log('Remove...');
              }}
            >
              Remove
              <svg
                className="w-4 h-4 inline"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-center w-1/5">
          <input
            className="mx-2 border text-center w-20"
            type="number"
            value={quantity}
            onChange={onQtyChange}
          />
        </div>
        <span className="text-center w-1/5 font-semibold text-sm">{formatThb(cart.price)}</span>
        <span className="text-center w-1/5 font-semibold text-sm">
          {formatThb(cartQtyTotal(cart.price, cart.stock))}
        </span>
      </div>
    </>
  );
};

export default CartItem;
