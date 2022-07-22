import { Navigate, RouteObject } from 'react-router-dom';
import { Paths } from './paths';
import { BasicLayout } from '../layouts';
import { FavoritesPage, MarketplacePage } from '../pages';
import { HomePage } from '../pages/HomePage/HomePage';

const routes: RouteObject[] = [
  {
    element: <BasicLayout />,
    children: [
      {
        path: Paths.HOME,
        element: <HomePage />,
      },
      {
        path: Paths.MARKETPLACE,
        element: <MarketplacePage />,
      },
      {
        path: Paths.FAVORITES,
        element: <FavoritesPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={Paths.HOME} />,
  },
];

export { routes };
