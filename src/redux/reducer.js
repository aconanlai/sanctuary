import { combineReducers } from 'redux';
import routing from './modules/routing';

export default combineReducers({
  _routing: routing,
});
