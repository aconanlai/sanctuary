export default function reducer(state = {
  video: '',
}, action = {}) {
  switch (action.type) {
    case 'CHANGE_VIDEO':
      return {
        ...state,
        video: action.video,
      };
    case 'CLOSE_VIDEO':
      return {
        ...state,
        video: '',
      };
    default:
      return state;
  }
}

export const changeVideo = (video) => {
  return {
    type: 'CHANGE_VIDEO',
    video,
  };
};

export const closeVideo = () => {
  return {
    type: 'CLOSE_VIDEO',
  };
};
