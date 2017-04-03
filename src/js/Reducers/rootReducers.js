import { combineReducers } from 'redux';
import todoReducers from '../Reducers/todoReducers';

const rootReducers = combineReducers({
    todoReducers
});

export default rootReducers;