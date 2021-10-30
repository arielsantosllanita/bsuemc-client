import { Switch, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PublicRoutes from './routes/Public';
import PrivateRoutes from './routes/Private';
import PageNotFound from './pages/PageNotFound';
import * as ROUTES from './constants/routes';

export default function App() {
  const location = useLocation();

  return (
    <div className="bg-white dark:bg-gray-700 theme-transition">
      <Switch location={location}>
        <Route path={ROUTES.PUBLIC_ENDPOINT} exact component={PublicRoutes} />
        <Route path={ROUTES.PRIVATE_ENDPOINT} exact component={PrivateRoutes} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
    );
}
