import React, { useEffect, useState } from 'react';
import { formatThb, formatDate } from 'utils/GlobalFunction';
import { useDispatch, useSelector } from 'react-redux';
/* Redux */
import { setCarts } from 'redux/cart';
/* Hook */
// import useCart from 'hooks/useCart';

/* Based Component */
import ImageRobot from 'components/ImageRobot';

const Detail = ({ robot }) => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.carts);
  // const { addToCart } = useCart({ robot, carts });

  const [quantity, setQuantity] = useState(robot.stock);
  const [outOfStock, setOutOfStock] = useState(robot.stock > 0 ? false : true);
  const [loading, setLoading] = useState(true);

  const onAddToCart = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);      

      const newRobot = { ...robot, qty: 1 };
      // FindIndex and update qty to state
      if (carts.findIndex((cart) => cart.rid === robot.rid)) {
        console.log('a');
      } else {
        console.log('b');
      }


      dispatch(setCarts([...carts, newRobot]));
    } else {
      setQuantity(0);
      setOutOfStock(true);
    }
  };

  useEffect(() => {
    const timer1 = setTimeout(() => setLoading(null), 500);

    return () => {
      clearTimeout(timer1);
    };
  }, [robot]);

  return (
    <>
      <div className="flex-none w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8 relative">
        <div className="relative">
          <ImageRobot item={robot} loading={loading} heigth={'120px'} />
        </div>
        <div className="text-center mb-6">
          <h2 className="text-black text-base font-medium uppercase mb-4">{robot.name}</h2>
          <div className="price font-bold text-blue-700">{formatThb(robot.price)}</div>
          <div className="stock">
            <span className="pr-2">Stock :</span> {quantity >= 0 ? quantity : robot.stock}
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
