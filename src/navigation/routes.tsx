import { Navigate, RouteObject } from 'react-router-dom';
import { Paths } from './paths';
import { BasicLayout } from '../layouts';
import { FavoritesPage, MarketplacePage } from '../pages';

const routes: RouteObject[] = [
  {
    element: <BasicLayout />,
    children: [
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
    element: <Navigate to={Paths.MARKETPLACE} />,
  },
];

export { routes };
