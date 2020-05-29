const initialState = {
  dark: JSON.parse(localStorage.getItem("dark")) || false,
};
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      localStorage.setItem("dark", !state.dark);
      return { ...state, dark: !state.dark };
    default:
      return state;
  }
};

export default themeReducer;
