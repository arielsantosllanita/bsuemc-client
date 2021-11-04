import { getUserInfo } from '@actions';
import Spinner from '@components/Spinner';
import { LOGIN } from '@constants/routes';
import useFetch from '@hooks/useFetch';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export default function ProtectedRoute({ children, ...rest }) {
  const dispatch = useDispatch();
  const {
    fetching,
    response: authorized,
    failed: unauthorized
  } = useFetch("/auth/verify", "GET"); // Verify if JWT cookie exist or valid

  useEffect(() => {
    if (authorized) {
      dispatch(getUserInfo(authorized.data))
    }
  }, [authorized, dispatch])

  return !fetching ? (
    <Route
      {...rest}
      render={({ location }) => {
        if (authorized) {
          return React.cloneElement(children);
        }

        if (unauthorized) {
          return (
            <Redirect
              to={{
                pathname: LOGIN,
                state: { from: location }
              }}
            />
          );
        }

        return null;
      }}
    />
  ) : (
    <Spinner />
  )
}
