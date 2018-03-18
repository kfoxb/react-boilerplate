/* eslint-env jest */
import App from './App';
import { createAssertWithPropsToMatchSnapshot } from '../../test-utils';

describe('App', () => {
  const defaultProps = {
    isAuthenticated: false,
    handleAuth: () => {},
  };
  const assertWithPropsToMatchSnapshot = createAssertWithPropsToMatchSnapshot(App, defaultProps);

  it('should render correctly', () => {
    assertWithPropsToMatchSnapshot();
  });
});
