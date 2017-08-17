export default function reducer(state = {
  panel: '',
  video: '',
}, action = {}) {
  switch (action.type) {
    case 'OPEN_VIDEO':
      return {
        ...state,
        video: action.video,
      };
    case 'CLOSE_VIDEO':
      return {
        ...state,
        video: '',
      };
    case 'OPEN_PANEL':
      return {
        ...state,
        panel: action.panel,
      };
    case 'CLOSE_PANEL':
      return {
        ...state,
        panel: '',
      };
    default:
      return state;
  }
}

export const openVideo = (video) => {
  return {
    type: 'OPEN_VIDEO',
    video,
  };
};

export const closeVideo = () => {
  return {
    type: 'CLOSE_VIDEO',
  };
};

export const openPanel = (panel) => {
  return {
    type: 'OPEN_PANEL',
    panel,
  };
};

export const closePanel = () => {
  return {
    type: 'CLOSE_PANEL',
  };
};
