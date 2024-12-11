window.config = {
  routerBasename: '/',
  enableGoogleCloudAdapter: true,
  // enable series filter parameter
  filterQueryParam: true,
  healthcareApiEndpoint: 'https://healthcare.googleapis.com/v1',
  servers: {
    // This is an array, but we'll only use the first entry for now
    dicomWeb: [],
  },
  // This is an array, but we'll only use the first entry for now
  oidc: [
    {
      // ~ REQUIRED
      // Authorization Server URL
      authority: 'https://accounts.google.com',
      client_id:
        '407770267012-4pcattjamo3q026bq5qe6pn3t716s37b.apps.googleusercontent.com',
      redirect_uri: '/callback', // `OHIFStandaloneViewer.js`
      response_type: 'id_token token',
      scope:
        'email profile openid https://www.googleapis.com/auth/cloudplatformprojects.readonly https://www.googleapis.com/auth/cloud-healthcare', // email profile openid
      // ~ OPTIONAL
      post_logout_redirect_uri: '/logout-redirect.html',
      revoke_uri: 'https://accounts.google.com/o/oauth2/revoke?token=',
      automaticSilentRenew: true,
      revokeAccessTokenOnSignout: true,
    },
  ],
  studyListFunctionsEnabled: true,

  whiteLabeling: {
    /* Optional: Should return a React component to be rendered in the "Logo" section of the application's Top Navigation bar */
    createLogoComponentFn: function(React) {
      return React.createElement('a', {
        target: '_self',
        rel: 'noopener noreferrer',
        className: 'header-brand',
        style: {
          display: 'block',
          textIndent: '-9999px',
          background: 'url(/../assets/n42_logo.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          width: '200px',
        },
      });
    },
  },
};
