const initStateRegister = {};

export const registerReducer = (state = initStateRegister, action) => {
  if (action.type === 'SET_REGISTER') {
    return {
      ...state,
      name: action.value.name,
      no_wa: action.value.no_wa,
      email: action.value.email,
      password: action.value.password,
      password_confirmation: action.value.password,
    };
  }
  return state;
};
