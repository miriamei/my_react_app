import produce from 'immer';
import { combineReducers, createStore } from 'redux';
import { userReducer } from './reducers/user';
import { productReducer } from './reducers/products';

const reducers = combineReducers({users: userReducer, products: productReducer })
export const store = createStore(reducers);

window.store = store;