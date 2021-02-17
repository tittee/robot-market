import {  useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveCart, setCarts } from 'redux/cart';
import { setStock, setOutOfStock } from 'redux/robot';

const useCart = ({ initItem, carts}) => {
  const dispatch = useDispatch();
 
  const addToCart = (item) => {
    if (!item) {
      return;
    }

    dispatch(setCarts([...carts, item]));
  };

  const deceaseQty = () => {};

  const increaseQty = () => {};

  const removeItem = () => {};

  return {
    addToCart,
    carts,
    deceaseQty,
    increaseQty,
    removeItem,
  };
};
export default useCart;
