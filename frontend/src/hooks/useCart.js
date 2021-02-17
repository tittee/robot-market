import {  useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveCart, setCarts } from 'redux/cart';
import { setStock, setOutOfStock } from 'redux/robot';

let localCart = localStorage.getItem('cart');

const useCart = ({ initItem, carts}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    //turn it into js
    localCart = JSON.parse(localCart);
    //load persisted cart into state if it exists
    if (localCart) setCarts(localCart);
  }, []); //the empty array ensures useEffect only runs once

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
