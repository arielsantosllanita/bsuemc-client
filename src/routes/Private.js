import Dashboard from '@components/Dashboard';
import Home from '@private/Home';
import Faqs from '@private/Faqs';
import Payments from '@private/Payments';
import Reports from '@private/Reports';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '@constants/routes';
// import Spinner from '@components/Spinner';
// import React, { lazy, Suspense } from 'react';
// import ProtectedRoute from "../helpers/ProtectedRoute";

export default function Private() {
  // const Home = lazy(() => import("@private/Home"));
  // const FAQs = lazy(() => import('@private/Faqs'));
  // const Payments = lazy(() => import('@private/Payments'));
  // const Reports = lazy(() => import('@private/Reports'));

  return (
    // <Suspense fallback={<Spinner />}>
    <Dashboard>
      <Switch>
        <Route path={ROUTES.DASHBOARD} exact component={Home} />
        <Route path={ROUTES.DASHBOARD_FAQ} component={Faqs} />
        <Route path={ROUTES.DASHBOARD_PAYMENTS} component={Payments} />
        <Route path={ROUTES.DASHBOARD_REPORTS} component={Reports} />
      </Switch>
    </Dashboard>
    // </Suspense>
  )
}
