import { API_BASE_URL } from "../constants";
import fetch from "cross-fetch";

const startAPIRequest = url => ({
  type: "START_API_REQUEST",
  url
});

const stopAPIRequest = url => ({
  type: "STOP_API_REQUEST",
  url
});

const fetchAPIFail = (url, error) => ({
  type: "FETCH_API_FAIL",
  url,
  error
});

const unexpectedErrorThrow = error => ({
  type: "UNEXPECTED_ERROR_THROW",
  error
});

const fetchItems = value => ({
  type: "FETCH_ITEMS",
  value
});

export const searchForItemsWithKeyword = keyword => dispatch => {
  const searchURL = `${API_BASE_URL}?tags=${keyword}`;
  dispatch(startAPIRequest(searchURL));
  return fetch(searchURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }
  })
    .then(
      response => response.json(),
      error => dispatch(fetchAPIFail(searchURL, error)))
    .then(json => {
      dispatch(fetchItems(json.items));
      dispatch(stopAPIRequest(searchURL));
    })
    .catch(error => dispatch(unexpectedErrorThrow(error)));
};
