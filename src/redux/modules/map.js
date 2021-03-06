export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case 'VISIT_LOCATION':
      return {
        ...state,
        [action.location]: {
          ...state[action.location],
          visited: true,
          lastVisited: (new Date()).getTime(),
        },
      };
    case 'OPEN_PANEL':
      return {
        ...state,
        [action.panel]: {
          ...state[action.panel],
          visited: true,
          lastVisited: (new Date()).getTime(),
        },
      };
    default:
      return state;
  }
}

export const visitLocation = (location) => {
  return {
    type: 'VISIT_LOCATION',
    location,
  };
};
