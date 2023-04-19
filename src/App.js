import React from 'react';
import './App.css';
import { LoginCallback, Security, withOktaAuth } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import config from './octaConfig';

const oktaAuth = new OktaAuth(config.oidc);

function App({ history }) {
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Route path="/" exact={true} component={Home} />
      <Route path="/login/callback" component={LoginCallback} />
      <Route path="/profile" component={Profile} />
    </Security>
  );
}

const AppWithRouterAccess = withOktaAuth(App);

function RouterApp() {
  return (
    <Router>
      <AppWithRouterAccess />
    </Router>
  );
}

export default RouterApp;
