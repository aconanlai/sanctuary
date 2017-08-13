import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  browserHistory,
  IndexRoute,
  Route
} from 'react-router';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route
      path="/"
      component={App}
    />
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
