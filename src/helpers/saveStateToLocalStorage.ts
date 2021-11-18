import { RootState } from 'redux/store';

export const saveStateToLocalStorage = (state: Partial<RootState>): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.warn(err);
  }
};
