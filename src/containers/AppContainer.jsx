import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/App';
import logoutAction from '../actions/logout';
import loginAction from '../actions/login';

function AppContainer({ isAuthenticated, login, logout }) {
  const handleAuth = () => {
    if (isAuthenticated) {
      logout();
    } else {
      login({ user: 'Mock User' });
    }
  };

  return (
    <BrowserRouter>
      <App
        isAuthenticated={isAuthenticated}
        handleAuth={handleAuth}
      />
    </BrowserRouter>
  );
}

AppContainer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAction()),
  login: user => dispatch(loginAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
