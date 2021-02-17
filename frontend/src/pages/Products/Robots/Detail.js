import React, { useEffect, useState } from 'react';
import { imageMappings } from 'utils/ImageMapping';
import { formatThb, formatDate } from 'utils/GlobalFunction';
import { useDispatch, useSelector } from 'react-redux';
import { setItemCart } from 'redux/cart';

/* Hook */
// import useCart from 'hooks/useCart';

/* Assets */
import DefaultImg from 'assets/images/suhas.jpg';

const Detail = ({ robot }) => {
  const dispatch = useDispatch();
  const [stock, setStock] = useState(robot.stock);
  const [loading, setLoading] = useState(true);
  const [outOfStock, setOutOfStock] = useState(false);

  const [defalutImage] = useState(DefaultImg);

  const itemCart = useSelector((state) => state.cart.itemCart);

  const onAddToCart = (e) => {
    dispatch(setItemCart([...itemCart, robot]));

    if (stock > 1) {
      setStock(stock - 1);
    } else {
      setStock(0);
      setOutOfStock(true);
    }

    if (e.target.value) e.stopPropagation();
  };

  useEffect(() => {
    const timer1 = setTimeout(() => setLoading(null), 500);

    return () => {
      clearTimeout(timer1);
    };
  }, [robot.image]);

  return (
    <>
      <div className="flex-none w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8 relative">
        <div className="relative">
          <figure className="block text-center bg-gray-100 mb-4">
            {loading && imageMappings(robot.image) ? (
              <div className="bg-gray-100" style={{ height: '120px' }}>
                Loading.....
              </div>
            ) : null}
            <img
              src={imageMappings(robot.image)}
              alt={robot.name}
              className="block object-cover object-top mx-auto"
              style={{ width: defalutImage ? '120px ' : '' }}
              onError={(e) => {
                e.target.src = defalutImage;
              }}
            />
          </figure>
        </div>
        <div className="text-center mb-6">
          <h2 className="text-black text-base font-medium uppercase mb-4">{robot.name}</h2>
          <div className="price font-bold text-blue-700">{formatThb(robot.price)}</div>
          <div className="stock">
            <span className="pr-2">Stock :</span>
            {stock}
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
            className={`${
              !outOfStock
                ? 'bg-blue-700 hover:bg-blue-400 hover:text-white'
                : 'bg-red-500 cursor-not-allowed'
            } px-4 py-2 border border-transparent text-white text-base uppercase rounded  transition-all`}
            onClick={onAddToCart}
            disabled={outOfStock && 'disabled'}
          >
            {!outOfStock ? 'Add to cart' : 'Out Of Stock'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Detail;
