const initOrder = {
  order: [],
  orderHistory: [],
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

  return state;
};
