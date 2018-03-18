/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as HotReloadContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import app from './reducers';

const store = createStore(
  app,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const render = (Component) => {
  ReactDOM.render(
    <HotReloadContainer>
      <Provider store={store} >
        <Component />
      </Provider>
    </HotReloadContainer>,
    document.getElementById('app'),
  );
};

render(AppContainer);
if (module.hot) {
  module.hot.accept('./containers/AppContainer', () => { render(AppContainer); });
}
