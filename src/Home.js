import React from 'react';
import { withOktaAuth } from '@okta/okta-react';
import './App.css';
import { useState, useEffect } from 'react';
import Board from './components/Board/Board.component';
import { useOktaAuth } from '@okta/okta-react';
import { Button } from 'reactstrap';
import { Header } from 'semantic-ui-react';

const Home = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState || !authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      oktaAuth.getUser().then((info) => {
        setUserInfo(info);
      });
    }
  }, [authState, oktaAuth]); // Update if authState changes

  const login = async () => {
    await oktaAuth.signInWithRedirect();
  };

  const logout = async () => oktaAuth.signOut();

  if (!authState) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>
            <Header as="h1">PKCE Flow w/ Okta Hosted Login Page</Header>

            {authState.isAuthenticated && !userInfo && (
              <div>Loading user information...</div>
            )}

            {authState.isAuthenticated && userInfo && (
              <div>
                <p>
                  Welcome back,&nbsp;
                  {userInfo.name}!
                </p>
                <p>
                  You have successfully authenticated against your Okta org, and
                  have been redirected back to this application. You now have an
                  ID token and access token in local storage. Visit the{' '}
                  <a href="/profile">My Profile</a> page to take a look inside
                  the ID token.
                </p>
                <h3>Next Steps</h3>
                <p>
                  Currently this application is a stand-alone front end
                  application. At this point you can use the access token to
                  authenticate yourself against resource servers that you
                  control.
                </p>
                <p>
                  Once you have downloaded and started the example resource
                  server, you can visit the <a href="/messages">My Messages</a>{' '}
                  page to see the authentication process in action.
                </p>
              </div>
            )}

            {!authState.isAuthenticated && (
              <div>
                <p>
                  If you&lsquo;re viewing this page then you have successfully
                  started this React application.
                </p>
                <p>
                  <span>This example shows you how to use the </span>
                  <a href="https://github.com/okta/okta-oidc-js/tree/master/packages/okta-react">
                    Okta React Library
                  </a>
                  <span> to add the </span>
                  <a href="https://developer.okta.com/docs/guides/implement-auth-code-pkce">
                    PKCE Flow
                  </a>
                  <span> to your application.</span>
                </p>
                <p>
                  When you click the login button below, you will be redirected
                  to the login page on your Okta org. After you authenticate,
                  you will be returned to this application with an ID token and
                  access token. These tokens will be stored in local storage and
                  can be retrieved at a later time.
                </p>
                <Button id="login-button" primary onClick={login}>
                  Login
                </Button>
              </div>
            )}
          </div>
        </div>

        {authState.isAuthenticated && (
          <Button id="logout-button" onClick={logout}>
            Logout
          </Button>
        )}

        <div className="Buttons">
          <div className="App">
            <header className="App-header">
              <Board />
            </header>
          </div>
        </div>
      </header>
    </div>
  );
};

export default withOktaAuth(Home);
