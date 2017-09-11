export default function reducer(state = {
  scrollTop: 0,
}, action = {}) {
  switch (action.type) {
    case 'SCROLL':
      return {
        ...state,
        scrollTop: action.scrollTop,
      };
    default:
      return state;
  }
}

export const scroll = (scrollTop) => {
  return {
    type: 'SCROLL',
    scrollTop,
  };
};
