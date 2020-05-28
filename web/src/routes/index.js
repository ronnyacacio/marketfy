import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Product from '~/pages/Product';
import Category from '~/pages/Category';
import NewProduct from '~/pages/NewProduct';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route exact path="/products" component={Product} isPrivate />
      <Route path="/categories" component={Category} isPrivate />
      <Route path="/products/new" component={NewProduct} isPrivate />
    </Switch>
  );
}
