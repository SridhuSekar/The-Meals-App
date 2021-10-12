import {createStore, combineReducers} from 'redux';
import mealsReducer from '../reducers/mealsReducer';

const rootReducer = combineReducers({
  meals: mealsReducer,
});
export const store = createStore(rootReducer);
