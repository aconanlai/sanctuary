import data from '../places.js';

export const loadState = () => {
  console.log('loading state');
  try {
    const serializedState = localStorage.getItem('map');
    if (serializedState === null) {
      return {
        _map: data,
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {
      _map: data,
    };
  }
};

export const saveState = (state) => {
  console.log('saving state');
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('map', serializedState);
  } catch (err) {
    return undefined;
  }
};

