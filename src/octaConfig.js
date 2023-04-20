const CLIENT_ID = env.CLIENT_ID;
const ISSUER = env.ISSUER;
const OKTA_TESTING_DISABLEHTTPSCHECK =
  process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;
const REDIRECT_URI = `${window.location.origin}/login/callback`;

// eslint-disable-next-line
export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: REDIRECT_URI,
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};
