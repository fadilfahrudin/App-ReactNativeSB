const initOrder = {
  order: [],
  orderHistory: [],
  orderSuccess: [],
};

export const orderReducer = (state = initOrder, action) => {
  if (action.type === 'SET_ORDER') {
    return {
      ...state,
      order: action.value,
    };
  }

  if (action.type === 'SET_ORDER_HISTORY') {
    return {
      ...state,
      orderHistory: action.value,
    };
  }

  if (action.type === 'SET_ORDER_SUCCESS') {
    return {
      ...state,
      orderSuccess: action.value,
    };
  }
  return state;
};
