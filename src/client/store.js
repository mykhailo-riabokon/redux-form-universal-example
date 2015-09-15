/**
 * Created by mikhail on 15.09.15.
 */
import {createStore, combineReducers} from 'redux';
import * as reducers from './reducers/index.js';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default store;
