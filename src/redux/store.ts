import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { racesReducer } from './races/racesReducer';

// TODO: fix never type
const baseReducer = combineReducers({
  races: racesReducer,
});

const middleWares = [thunk];
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  baseReducer,
  composeEnhancers(applyMiddleware(...middleWares)),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
