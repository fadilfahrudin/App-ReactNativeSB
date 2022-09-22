const initHome = {
  program: [],
  banyak_diminati: [],
  program_pilihan: [],
  program_baru: [],
};

export const homeReducer = (state = initHome, action) => {
  if (action.type === 'SET_PROGRAM') {
    return {
      ...state,
      program: action.value,
    };
  }

  if (action.type === 'SET_BANYAK_DIMINATI') {
    return {
      ...state,
      banyak_diminati: action.value,
    };
  }

  if (action.type === 'SET_PROGRAM_PILIHAN') {
    return {
      ...state,
      program_pilihan: action.value,
    };
  }

  if (action.type === 'SET_PROGRAM_BARU') {
    return {
      ...state,
      program_baru: action.value,
    };
  }
  return state;
};
