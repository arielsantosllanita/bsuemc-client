import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '@constants/routes';

export default function Public() {
  const LandingPage = lazy(() => import("@public/LandingPage"));
  const Login = lazy(() => import("@public/Login"));
  const Signup = lazy(() => import("@public/SignUp"));
  const SignupVerify = lazy(() => import("@public/SignUpVerify"));
  const ResetPassword = lazy(() => import("@public/Reset"));
  const ResetPasswordVerify = lazy(() => import("@public/ResetVerify"));

  return (
    <Suspense fallback={<h1 className="text-center mt-24">Loading...</h1>}>
      <Switch>
        <Route path={ROUTES.LANDING_PAGE} exact component={LandingPage} />
        <Route path={ROUTES.LOGIN} component={Login} />
        <Route path={ROUTES.SIGN_UP} component={Signup} />
        <Route path={ROUTES.SIGN_UP_VERIFY} component={SignupVerify} />
        <Route path={ROUTES.RESET} component={ResetPassword} />
        <Route path={ROUTES.RESET_VERIFY} component={ResetPasswordVerify} />
      </Switch>
    </Suspense>
  )
}
