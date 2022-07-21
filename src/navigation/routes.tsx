import { Navigate, RouteObject } from 'react-router-dom';
import { BasicLayout } from '../layouts';
import { FavoritesPage, MarketplacePage } from '../pages';

import { Paths } from './paths';

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
