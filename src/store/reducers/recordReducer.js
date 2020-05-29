const initialState = {
  nepal: null,
  timeline: null,
};

const recordReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_NEPAL_DATA":
      return { ...state, nepal: action.payload };
    case "FETCH_TIMELINE":
      console.log(action.payload);
      return { ...state, timeline: action.payload };
    default:
      return state;
  }
};

export default recordReducer;
