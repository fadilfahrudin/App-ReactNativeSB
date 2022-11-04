const initHome = {
  news: [],
};

export const newsReducer = (state = initHome, action) => {
  if (action.type === 'SET_NEWS') {
    return {
      ...state,
      news: action.value,
    };
  }
  return state;
};
