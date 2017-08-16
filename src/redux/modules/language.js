export default function reducer(state = {
  language: 'en',
}, action = {}) {
  switch (action.type) {
    case 'SWITCH_LANG':
      return {
        ...state,
        language: action.language,
      };
    default:
      return state;
  }
}

export const switchLang = (language) => {
  return {
    type: 'SWITCH_LANG',
    language,
  };
};
