const initialState = [];

const match = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ITEMS":
      return action.value;
    default:
      return state;
  }
};

export default match;
