import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  browserHistory,
  IndexRoute,
  Route
} from 'react-router';
import throttle from 'lodash/throttle';
import { Provider } from 'react-redux';
import createStore from './redux/create';

import { switchLang } from './redux/modules/language';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { saveState, loadState } from './redux/saveState';

const persistedState = loadState();

const store = createStore(
  persistedState,
);

store.subscribe(throttle(() => {
  saveState({
    _cart: store.getState()._map,
  });
}), 1000);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route
        path="/"
        component={App}
        onEnter={() => store.dispatch(switchLang('en'))}
      >
        <Route
          path="/about"
        />
        <Route
          path="/map"
        />
        <Route
          path="/stories"
        />
        <Route
          path="/artist"
        />
        <Route
          path="/credits"
        />
      </Route>
      <Route
        path="/fr"
        component={App}
        onEnter={() => store.dispatch(switchLang('fr'))}
      >
        <Route
          path="about"
        />
        <Route
          path="map"
        />
        <Route
          path="stories"
        />
        <Route
          path="artist"
        />
        <Route
          path="credits"
        />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
