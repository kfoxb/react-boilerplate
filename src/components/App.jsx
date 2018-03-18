import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function App({ handleAuth, isAuthenticated }) {
  const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh
  `;
  return (
    <FlexContainer>
      <button onClick={handleAuth}>{isAuthenticated ? 'Logout' : 'Login'}</button>
    </FlexContainer>
  );
}

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  handleAuth: PropTypes.func.isRequired,
};

export default withRouter(App);
