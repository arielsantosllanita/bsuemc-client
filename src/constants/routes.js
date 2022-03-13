/* Public endpoints */
export const LANDING_PAGE = '/';
export const LOGIN = '/login';
export const SIGN_UP = '/sign-up';
export const SIGN_UP_VERIFY = "/sign-up/:url";
export const RESET = '/reset';
export const RESET_VERIFY = "/reset/:url";
export const PUBLIC_ENDPOINT = [
  LANDING_PAGE,
  LOGIN,
  SIGN_UP,
  SIGN_UP_VERIFY,
  RESET,
  RESET_VERIFY
];

/* Private endpoints */
export const DASHBOARD = "/dashboard";
export const DASHBOARD_PAYMENTS = "/dashboard/payments";
export const DASHBOARD_REPORTS = "/dashboard/reports";
export const DASHBOARD_FAQ = "/dashboard/faq";
export const DASHBOARD_SETTINGS = "/dashboard/settings";
export const PRIVATE_ENDPOINT = [
  DASHBOARD,
  DASHBOARD_PAYMENTS,
  DASHBOARD_REPORTS,
  DASHBOARD_FAQ,
  DASHBOARD_SETTINGS
];
