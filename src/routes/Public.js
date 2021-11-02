import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '@constants/routes';
import Spinner from '@components/Spinner';

export default function Public() {
  const LandingPage = lazy(() => import("@public/LandingPage"));
  const Login = lazy(() => import("@public/Login"));
  const Signup = lazy(() => import("@public/SignUp"));
  const SignupVerify = lazy(() => import("@public/SignUpVerify"));
  const ResetPassword = lazy(() => import("@public/Reset"));
  const ResetPasswordVerify = lazy(() => import("@public/ResetVerify"));

  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route path={ROUTES.LANDING_PAGE} exact component={LandingPage} />
        <Route path={ROUTES.LOGIN} component={Login} />
        <Route path={ROUTES.SIGN_UP_VERIFY} component={SignupVerify} />
        <Route path={ROUTES.SIGN_UP} component={Signup} />
        <Route path={ROUTES.RESET_VERIFY} component={ResetPasswordVerify} />
        <Route path={ROUTES.RESET} component={ResetPassword} />
      </Switch>
    </Suspense>
  )
}
