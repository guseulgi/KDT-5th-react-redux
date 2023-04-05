import { combineReducers } from 'redux';
import todo from './modules/todo';
import weight from './modules/weight';
import mbti from './modules/mbti';

export default combineReducers({
  todo,
  weight,
  mbti,
});
