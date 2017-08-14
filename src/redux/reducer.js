import { combineReducers } from 'redux';
import routing from './modules/routing';
import video from './modules/video';
import map from './modules/map';

export default combineReducers({
  _routing: routing,
  _video: video,
  _map: map,
});
