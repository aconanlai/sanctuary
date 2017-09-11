import { combineReducers } from 'redux';
import routing from './modules/routing';
import video from './modules/video';
import map from './modules/map';
import language from './modules/language';
import ui from './modules/ui';

export default combineReducers({
  _routing: routing,
  _video: video,
  _map: map,
  _language: language,
  _ui: ui,
});
