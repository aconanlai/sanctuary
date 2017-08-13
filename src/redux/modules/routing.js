export default function reducer(state = {
  page: 'home',
}, action = {}) {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return {
        ...state,
        page: action.page,
      };
    default:
      return state;
  }
}

export const changePage = (page) => {
  return {
    type: 'CHANGE_PAGE',
    page,
  };
};
