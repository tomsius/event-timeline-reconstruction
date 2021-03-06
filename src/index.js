import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { HashRouter } from 'react-router-dom';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin + process.env.REACT_APP_REDIRECT_URI}>
    <HashRouter>
    <App />
  </HashRouter>
  </Auth0Provider>,
  document.getElementById('root')
);
