import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginView from './components/LoginView';
import DashboardView from './components/DashboardView';
import {AUTH_TOKEN} from './utils/const';
import './assets/logo_192.png';
import './assets/logo_512.png';
import './service-worker';
import './service-worker';
import './manifest.json';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    {AUTH_TOKEN() ? <DashboardView /> : <LoginView />}
  </React.StrictMode>
);
