import { createAsyncAction } from "helpers/redux";

export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const INCREMENT_QUANTITY = "INCREMENT_QUANTITY";
export const DECREMENT_QUANTITY = "DECREMENT_QUANTITY";
export const DELETE_ITEM = "DELETE_ITEM";

export const API_REQUEST = "API_REQUEST";
export const SET_PRODUCTS = createAsyncAction("SET_PRODUCTS");
