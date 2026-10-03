import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from '../protected-route/protectedRoute';
import Main from '../main/main';
import Login from '../login/login';
import NotFound from '../not-found/notFound';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
import Layout from '../layout/layout';

export const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      { path: '/favorites', element: <Favorites/>},
    ]
  },
  {
    element: <Layout />,
    children: [
      { path: '*', element: <NotFound/>},
      { path: '/', element: <Main offersCount={312}/>},
      { path: '/login', element: <Login/>},
      { path: '/offer/:id', element: <Offer/>},
    ]
  }
]);
