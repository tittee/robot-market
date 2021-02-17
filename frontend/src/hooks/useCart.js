// import { useEffect } from 'react';
import { useEffect } from 'react';
import { setCarts } from 'redux/cart';
// import { useDispatch } from 'react-redux';

let localCart = localStorage.getItem('cart');

const useCart = ({ item }) => {
  // const dispatch = useDispatch();
  console.log(item);
  
  useEffect(() => {
    //turn it into js
    localCart = JSON.parse(localCart);
    //load persisted cart into state if it exists
    if (localCart) setCarts(localCart);
  }, []); //the empty array ensures useEffect only runs once

  const addToCart = (item) => {
    //create a copy of our cart state, avoid overwritting existing state
    // let cartCopy = [...currentCart];

    //assuming we have an ID field in our item
    
    
    //look for item in cart array
    // const existingItem = currentCart.find((cartItem) => cartItem.rid === item.rid);

    // //if item already exists
    // if (existingItem) {
    //   existingItem.quantity += item.quantity; //update item
    // } else {
    //   //if item doesn't exist, simply add it
    //   currentCart.push(item);
    // }

    // //update app state
    // setCarts(currentCart);

    // //make cart a string and store in local space
    // const stringCart = JSON.stringify(currentCart);
    // localStorage.setItem('cart', stringCart);
    
  };

  const deceaseQty = () => {};

  const increaseQty = () => {};

  const removeItem = () => {};

  return {
    addToCart,
    deceaseQty,
    increaseQty,
    removeItem,
  };
};

export default useCart;
