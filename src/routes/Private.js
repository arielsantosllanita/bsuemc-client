import Spinner from '@components/Spinner';
import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function Private() {
  const Dashboard = lazy(() => import('../components/Dashboard'));
  
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route path={ROUTES.DASHBOARD} component={Dashboard} />
      </Switch>
    </Suspense>
  )
}
