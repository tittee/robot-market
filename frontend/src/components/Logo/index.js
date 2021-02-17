import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <>
      <div className="flex-1">
        <h1 className="text-xl tracking-wide font-bold text-white">
          <Link to="/">Robot Marketplace</Link>
        </h1>
      </div>
    </>
  );
};

export default Logo;
