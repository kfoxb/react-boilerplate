import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

function App({ handleAuth, isAuthenticated }) {
  return (<button onClick={handleAuth}>{isAuthenticated ? 'Logout' : 'Login'}</button>);
}

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  handleAuth: PropTypes.func.isRequired,
};

export default withRouter(App);
