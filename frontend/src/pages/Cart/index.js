import React from 'react';
/* Component */
import Summary from './Summary';
import ListCart from './ListCart';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <>
      <div className="page">
        <header className="bg-blue-700">
          <div className="container mx-auto py-4">
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex-1">
                <h1 className="text-xl tracking-wide font-bold text-white">
                  <Link to="/">Robot Marketplace</Link>
                </h1>
              </div>
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
