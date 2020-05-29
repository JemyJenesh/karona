import axios from "axios";

export const fetchNepalData = () => async (dispatch) => {
  const response = await axios.get(
    "https://nepalcorona.info/api/v1/data/nepal"
  );
  dispatch({ type: "FETCH_NEPAL_DATA", payload: response.data });
};

export const fetchWorldData = () => async (dispatch) => {
  const response = await axios.get(
    "https://data.nepalcorona.info/api/v1/world"
  );
  dispatch({ type: "FETCH_WORLD_DATA", payload: response.data });
};

export const fetchTimeline = () => async (dispatch) => {
  const response = await axios.get(
    "https://data.nepalcorona.info/api/v1/covid/timeline"
  );
  dispatch({ type: "FETCH_TIMELINE", payload: response.data });
};

export const fetchNews = () => async (dispatch) => {
  console.log("asdfasfd");
  const response = await axios.get(
    "https://nepalcorona.info/api/v1/news?limit=20"
  );
  dispatch({ type: "FETCH_NEWS", payload: response.data.data });
};
