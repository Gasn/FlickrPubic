const initialState = {
  fetching: false,
};

const api = (state = initialState, action) => {
  switch (action.type) {
    case 'START_API_REQUEST':
      return {
        ...state,
        fetching: true,
      };
    case 'STOP_API_REQUEST':
      return {
        ...state,
        fetching: false,
      };
    case 'FETCH_API_FAIL':
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default api;
