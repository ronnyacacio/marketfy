import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '~/contexts/auth';
import DefaultLayout from '~/layouts/Default';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = useAuth();

  if (!signed && isPrivate) return <Redirect to="/" />;
  if (signed && !isPrivate) return <Redirect to="/products" />;

  return (
    <Route
      {...rest}
      render={(props) => (
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      )}
    />
  );
}
