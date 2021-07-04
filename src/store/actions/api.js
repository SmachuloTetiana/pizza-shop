import { API_REQUEST } from "store/types";

export const apiCall = (apiData) => ({
  type: API_REQUEST,
  apiData,
});
