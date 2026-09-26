import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const setting = {
  offersCount: 312,
} as const;

root.render(
  <React.StrictMode>
    <App offersCount={setting.offersCount} />
  </React.StrictMode>
);
