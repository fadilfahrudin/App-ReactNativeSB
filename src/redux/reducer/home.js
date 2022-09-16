const initHome = {
  program: [],
};

export const homeReducer = (state = initHome, action) => {
  if (action.type === 'SET_PROGRAM') {
    return {
      ...state,
      program: action.value,
    };
  }
  return state;
};
