export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD TO BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
