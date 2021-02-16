import React from 'react';
import { imageMappings } from 'utils/ImageMapping';
import { formatThb, formatDate } from 'utils/GlobalFunction';

const Image = ({ robot }) => {
  const onAddToCart = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <div className="flex-none w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8 relative">
        <div className="relative">
          <figure className="block text-center bg-gray-100 mb-4">
            <img
              src={imageMappings(robot.image)}
              alt={robot.name}
              className="block object-cover object-top mx-auto"
            />
          </figure>
        </div>
        <div className="text-center mb-6">
          <h2 className="text-black text-base font-medium uppercase mb-4">{robot.name}</h2>
          <div className="price font-bold text-blue-700">{formatThb(robot.price)}</div>
          <div className="stock">
            <span className="pr-2">Stock :</span>
            {robot.stock}
          </div>
          <div className="createdAt">
            <span className="pr-2">Create Date :</span>
            {formatDate(robot.createdAt)}
          </div>
          <div className="material">
            <span className="pr-2">Material :</span>
            {robot.material}
          </div>
        </div>
        <div className=" text-center">
          <button
            className="px-4 py-2 border border-transparent bg-blue-700 text-white text-base uppercase rounded hover:bg-blue-400 hover:text-white transition-all"
            onClick={onAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Image;
