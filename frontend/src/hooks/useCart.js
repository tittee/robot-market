import {  useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveCart, setCarts, setItemCart } from 'redux/cart';
// import { setStock, setOutOfStock } from 'redux/robot';

let localCart = localStorage.getItem('cart');

const useCart = ({ initItem, carts}) => {
  const dispatch = useDispatch();
  // const [items, setItems] = useState(initItem || []);

  // console.log(items);

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

  // const addToCart = () => {
  //   console.log(item);
  //   dispatch(setActiveCart(true));
  //   // dispatch(setItemCart(1));
  //   // dispatch(setCarts());
    
  //   // console.log(`${item} - item, ${cartItem} - cart item`);
  //   // dispatch(setCarts(item));
  //   // if (item.stock > 1) {
  //   //   dispatch(setStock(item.stock - 1));
  //   // } else {
  //   //   dispatch(setStock(0));
  //   //   dispatch(setOutOfStock(true));
  //   // }
  // };

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
