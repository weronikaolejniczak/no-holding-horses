import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { racesReducer } from 'redux/races/racesReducer';
import { raceReducer } from 'redux/race/raceReducer';
import { participantsReducer } from 'redux/participants/participantsReducer';
import { betsReducer } from 'redux/bets/betsReducer';
import { loadStateFromLocalStorage } from 'helpers/loadStateFromLocalStorage';

const persistedState = loadStateFromLocalStorage();

const baseReducer = combineReducers({
  bets: betsReducer,
  participants: participantsReducer,
  race: raceReducer,
  races: racesReducer,
});

const middleWares = [thunk];
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  baseReducer,
  persistedState,
  composeEnhancers(applyMiddleware(...middleWares)),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
