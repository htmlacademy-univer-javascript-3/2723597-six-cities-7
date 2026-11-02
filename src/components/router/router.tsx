import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from '../protected-route/protectedRoute';
import Main from '../main/main';
import Login from '../login/login';
import NotFound from '../not-found/notFound';
import Favorites from '../favorites/favorites';
import OfferPage from '../offer/offer';
import Layout from '../layout/layout';
import { Offer } from '../../types/offer';

export const router = (offers: Offer[]) => createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      { path: '/favorites', element: <Favorites offers={offers} /> },
    ]
  },
  { element: <NotFound />, path: '*' },
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Main offers={offers} /> },
      { path: '/login', element: <Login /> },
      { path: '/offer/:id', element: <OfferPage offers={offers} /> },
    ]
  }
]);
