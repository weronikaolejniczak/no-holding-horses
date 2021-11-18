export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return;
    return JSON.parse(serializedState);
  } catch (err) {
    console.warn(err);
    return undefined;
  }
};
