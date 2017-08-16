import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  browserHistory,
  IndexRoute,
  Route
} from 'react-router';
import { Provider } from 'react-redux';
import createStore from './redux/create';

import { switchLang } from './redux/modules/language';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore();

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
