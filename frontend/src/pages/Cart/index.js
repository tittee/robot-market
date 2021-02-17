import React from 'react';
/* Component */
import Summary from './Summary';
import ListCart from './ListCart';

const Cart = () => {
  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <ListCart />
          <Summary />
        </div>
      </div>
    </>
  );
};

export default Cart;
