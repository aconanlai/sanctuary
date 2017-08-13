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
      />
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
