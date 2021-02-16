import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductsPage from 'pages/Products';
import CartPage from 'pages/Cart';

const AppRouter = () => {
  return (
    <Router>
      <Route path="/" exact component={ProductsPage} />
      <Route path="/cart" exact component={CartPage} />
    </Router>
  );
};

export default AppRouter;
