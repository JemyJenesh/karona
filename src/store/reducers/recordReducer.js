const initialState = {
  nepal: null,
  world: null,
  timeline: null,
  news: null,
};

const recordReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_NEPAL_DATA":
      return { ...state, nepal: action.payload };
    case "FETCH_WORLD_DATA":
      return { ...state, world: action.payload };
    case "FETCH_TIMELINE":
      return { ...state, timeline: action.payload };
    case "FETCH_NEWS":
      return { ...state, news: action.payload };
    default:
      return state;
  }
};

export default recordReducer;
