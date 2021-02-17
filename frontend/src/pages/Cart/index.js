import React from 'react';
/* Component */
import Summary from './Summary';
import ListCart from './ListCart';
import Logo from 'components/Logo';


const Cart = () => {
  return (
    <>
      <div className="page">
        <header className="bg-blue-700">
          <div className="container mx-auto py-4">
            <div className="h-10 flex flex-wrap justify-between items-center">
              <Logo />
            </div>
          </div>
        </header>
        <div className="container mx-auto py-8">
          <div className="flex flex-wrap">
            <ListCart />
            <Summary />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
