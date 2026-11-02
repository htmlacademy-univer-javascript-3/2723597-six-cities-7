import { RouterProvider } from 'react-router-dom';
import { router } from '../router/router';
import { Offer } from '../../types/offer';

type AppProps = {
  offers: Offer[];
}

function App({ offers }: AppProps): JSX.Element {
  return <RouterProvider router={router(offers)} />;
}

export default App;
